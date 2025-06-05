import { Cruise } from "@/lib/interfaces/services/cruises";

export const londonCruises: Cruise[] = [
  {
    basePrice: 6344,
    departureLocation: {
      city: "London",
      country: "United Kingdom",
      region: "Northern Europe",
      coordinates: {
        latitude: 51.5074,
        longitude: -0.1278,
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
    category: "mainstream",
    itinerary: {
      route: [
        {
          city: "London",
          country: "United Kingdom",
          region: "Northern Europe",
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
      ],
      description:
        "Unwind and explore on this legacy through Northern Europe, departing from London. With every stop—from Copenhagen to Berlin—you’ll collect memories that last a lifetime.",
      distance: "841 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from London to Copenhagen",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Copenhagen to Helsinki",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from Helsinki to Berlin",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring London",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Copenhagen",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring Helsinki",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Exploring Berlin",
        },
      ],
    },
    tourCategoryId: "holiday-cruise",
    contactPersonnel: [
      {
        name: "Miguel Hawkins",
        role: "Customer Service Representative",
        languages: ["English", "Spanish", "Dutch", "Portuguese"], // Use the properly generated languages list
        experienceYears: 15,
        profileImage: "https://randomuser.me/api/portraits/men/11.jpg",
        contact: {
          contactEmail: "charming.discovery.o@velarivoyages.com",
          contactNumber: "+1-282-940-6076",
        },
      },
    ],
    title: "Charming Discovery of the Snow-Kissed Harbors",
    description:
      "Unwind and explore on this legacy through Northern Europe, departing from London. With every stop—from Copenhagen to Berlin—you’ll collect memories that last a lifetime.",
    rating: 4.8,
    tags: ["seasonal", "cruise-line"],
  },
  {
    basePrice: 4851,
    departureLocation: {
      city: "London",
      country: "United Kingdom",
      region: "Northern Europe",
      coordinates: {
        latitude: 51.5074,
        longitude: -0.1278,
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
          city: "London",
          country: "United Kingdom",
          region: "Northern Europe",
          coordinates: {
            latitude: 51.5074,
            longitude: -0.1278,
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
      ],
      description:
        "Escape the everyday with this extraordinary journey through Northern Europe, departing from London. You'll visit Oslo, Helsinki, where every stop is a new adventure.",
      distance: "1095 nautical miles",
      totalDuration: "7 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from London to Oslo",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Oslo to Helsinki",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring London",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Oslo",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Helsinki",
        },
      ],
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Sebastian Day",
        role: "Customer Service Representative",
        languages: ["English", "Spanish", "Dutch", "Portuguese"], // Use the properly generated languages list
        experienceYears: 9,
        profileImage: "https://randomuser.me/api/portraits/men/63.jpg",
        contact: {
          contactEmail: "floating.saga.of.the@velarivoyages.com",
          contactNumber: "+1-330-661-2263",
        },
      },
    ],
    title: "Floating Saga of the Fog-Laced Legacy",
    description:
      "Escape the everyday with this extraordinary journey through Northern Europe, departing from London. You'll visit Oslo, Helsinki, where every stop is a new adventure.",
    rating: 4.0,
    tags: ["nature"],
  },
  {
    basePrice: 6949,
    departureLocation: {
      city: "London",
      country: "United Kingdom",
      region: "Northern Europe",
      coordinates: {
        latitude: 51.5074,
        longitude: -0.1278,
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
    hasPopularDestination: false,
    category: "luxury",
    itinerary: {
      route: [
        {
          city: "London",
          country: "United Kingdom",
          region: "Northern Europe",
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
          city: "St. Petersburg",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
      ],
      description:
        "This extraordinary pilgrimage from London offers the ultimate Northern Europe exploration. Immerse yourself in the rich cultures and stunning landscapes of Kiel and St. Petersburg, creating memories that will last a lifetime.",
      distance: "1372 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from London to Kiel",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Kiel to St. Petersburg",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring London",
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
          description: "Exploring St. Petersburg",
        },
      ],
    },
    tourCategoryId: "anniversary-cruise",
    contactPersonnel: [
      {
        name: "Terry Mason",
        role: "Customer Service Representative",
        languages: ["English", "Spanish", "Dutch", "Portuguese"], // Use the properly generated languages list
        experienceYears: 10,
        profileImage: "https://randomuser.me/api/portraits/men/5.jpg",
        contact: {
          contactEmail: "serene.journey.of.th@velarivoyages.com",
          contactNumber: "+1-931-371-5380",
        },
      },
    ],
    title: "Serene Journey of the Clocktower Shadow",
    description:
      "This extraordinary pilgrimage from London offers the ultimate Northern Europe exploration. Immerse yourself in the rich cultures and stunning landscapes of Kiel and St. Petersburg, creating memories that will last a lifetime.",
    rating: 4.4,
    tags: ["romantic", "fall-cruise"],
  },
  {
    basePrice: 6952,
    departureLocation: {
      city: "London",
      country: "United Kingdom",
      region: "Northern Europe",
      coordinates: {
        latitude: 51.5074,
        longitude: -0.1278,
      },
    },
    arrivalLocation: {
      city: "London",
      country: "United Kingdom",
      region: "Northern Europe",
      coordinates: {
        latitude: 51.5074,
        longitude: -0.1278,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "expedition",
    itinerary: {
      route: [
        {
          city: "London",
          country: "United Kingdom",
          region: "Northern Europe",
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
          region: "Northern Europe",
          coordinates: {
            latitude: 51.5074,
            longitude: -0.1278,
          },
        },
      ],
      description:
        "Unwind and explore on this exploration through Northern Europe, departing from London. With every stop—from Berlin to Southampton—you’ll collect memories that last a lifetime.",
      distance: "544 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from London to Berlin",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Berlin to Southampton",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Sailing from Southampton to London",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring London",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
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
          end: "Day 13",
          duration: "2 days",
          description: "Exploring London",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Jose Maxwell",
        role: "Customer Service Representative",
        languages: ["English", "Spanish", "Dutch", "Portuguese"], // Use the properly generated languages list
        experienceYears: 17,
        profileImage: "https://randomuser.me/api/portraits/men/8.jpg",
        contact: {
          contactEmail: "extraordinary.elevat@velarivoyages.com",
          contactNumber: "+1-404-761-5938",
        },
      },
    ],
    title: "Extraordinary Elevation of the Glacial Reflections",
    description:
      "Unwind and explore on this exploration through Northern Europe, departing from London. With every stop—from Berlin to Southampton—you’ll collect memories that last a lifetime.",
    rating: 4.6,
    tags: ["cruise-adventure"],
  },
  {
    basePrice: 5672,
    departureLocation: {
      city: "London",
      country: "United Kingdom",
      region: "Northern Europe",
      coordinates: {
        latitude: 51.5074,
        longitude: -0.1278,
      },
    },
    arrivalLocation: {
      city: "Kiel",
      country: "Germany",
      coordinates: {
        latitude: 54.3233,
        longitude: 10.1228,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "premium-luxury",
    itinerary: {
      route: [
        {
          city: "London",
          country: "United Kingdom",
          region: "Northern Europe",
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
          city: "Kiel",
          country: "Germany",
          coordinates: {
            latitude: 54.3233,
            longitude: 10.1228,
          },
        },
      ],
      description:
        "Launch into adventure from London and sail deep into the heart of the Northern Europe. With ports of call like Stockholm, Kiel, expect a voyage filled with scenic wonders and luxurious comforts.",
      distance: "1165 nautical miles",
      totalDuration: "8 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from London to Stockholm",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Stockholm to Kiel",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring London",
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
          description: "Exploring Kiel",
        },
      ],
    },
    tourCategoryId: "vip-cruise",
    contactPersonnel: [
      {
        name: "Peter Fox",
        role: "Customer Service Representative",
        languages: ["English", "Spanish", "Dutch", "Portuguese"], // Use the properly generated languages list
        experienceYears: 12,
        profileImage: "https://randomuser.me/api/portraits/men/45.jpg",
        contact: {
          contactEmail: "majestic.labyrinth.o@velarivoyages.com",
          contactNumber: "+1-579-825-4111",
        },
      },
    ],
    title: "Majestic Labyrinth of the Glacial Reflections",
    description:
      "Launch into adventure from London and sail deep into the heart of the Northern Europe. With ports of call like Stockholm, Kiel, expect a voyage filled with scenic wonders and luxurious comforts.",
    rating: 4.6,
    tags: ["general", "VIP"],
  },
  {
    basePrice: 5203,
    departureLocation: {
      city: "London",
      country: "United Kingdom",
      region: "Northern Europe",
      coordinates: {
        latitude: 51.5074,
        longitude: -0.1278,
      },
    },
    arrivalLocation: {
      city: "London",
      country: "United Kingdom",
      region: "Northern Europe",
      coordinates: {
        latitude: 51.5074,
        longitude: -0.1278,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "entry-luxury",
    itinerary: {
      route: [
        {
          city: "London",
          country: "United Kingdom",
          region: "Northern Europe",
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
          city: "London",
          country: "United Kingdom",
          region: "Northern Europe",
          coordinates: {
            latitude: 51.5074,
            longitude: -0.1278,
          },
        },
      ],
      description:
        "Explore a new side of Northern Europe with this breathtaking whisper starting in London. Visit charming ports such as Dublin, Copenhagen, Tallinn, each offering its own unique rhythm.",
      distance: "1195 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from London to Dublin",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Dublin to Copenhagen",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from Copenhagen to Tallinn",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Sailing from Tallinn to London",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring London",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Exploring Dublin",
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
          start: "Day 13",
          end: "Day 13",
          duration: "1 days",
          description: "Exploring London",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Paul Morgan",
        role: "Customer Service Representative",
        languages: ["English", "Spanish", "Dutch", "Portuguese"], // Use the properly generated languages list
        experienceYears: 19,
        profileImage: "https://randomuser.me/api/portraits/men/68.jpg",
        contact: {
          contactEmail: "sundrenched.tranquil@velarivoyages.com",
          contactNumber: "+1-873-195-6887",
        },
      },
    ],
    title: "Sun-Drenched Tranquility of the Midnight Monarchy",
    description:
      "Explore a new side of Northern Europe with this breathtaking whisper starting in London. Visit charming ports such as Dublin, Copenhagen, Tallinn, each offering its own unique rhythm.",
    rating: 4.7,
    tags: ["romantic"],
  },
  {
    basePrice: 1619,
    departureLocation: {
      city: "London",
      country: "United Kingdom",
      region: "Northern Europe",
      coordinates: {
        latitude: 51.5074,
        longitude: -0.1278,
      },
    },
    arrivalLocation: {
      city: "London",
      country: "United Kingdom",
      region: "Northern Europe",
      coordinates: {
        latitude: 51.5074,
        longitude: -0.1278,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "luxury",
    itinerary: {
      route: [
        {
          city: "London",
          country: "United Kingdom",
          region: "Northern Europe",
          coordinates: {
            latitude: 51.5074,
            longitude: -0.1278,
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
          region: "Northern Europe",
          coordinates: {
            latitude: 51.5074,
            longitude: -0.1278,
          },
        },
      ],
      description:
        "An unforgettable reverie awaits as you cruise from London across Northern Europe. Dive into history, flavor, and culture with stops including Oslo, Kiel, Copenhagen, Dublin.",
      distance: "670 nautical miles",
      totalDuration: "16 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from London to Oslo",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Oslo to Kiel",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Sailing from Kiel to Copenhagen",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Sailing from Copenhagen to Dublin",
        },
        {
          start: "Day 14",
          end: "Day 15",
          duration: "2 days",
          description: "Sailing from Dublin to London",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring London",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Oslo",
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
          description: "Exploring Copenhagen",
        },
        {
          start: "Day 13",
          end: "Day 13",
          duration: "1 days",
          description: "Exploring Dublin",
        },
        {
          start: "Day 16",
          end: "Day 16",
          duration: "1 days",
          description: "Exploring London",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Bobby Clark",
        role: "Customer Service Representative",
        languages: ["English", "Spanish", "Dutch", "Portuguese"], // Use the properly generated languages list
        experienceYears: 10,
        profileImage: "https://randomuser.me/api/portraits/men/41.jpg",
        contact: {
          contactEmail: "transcendent.frontie@velarivoyages.com",
          contactNumber: "+1-979-675-7734",
        },
      },
    ],
    title: "Transcendent Frontier of the Royal Metropolis",
    description:
      "An unforgettable reverie awaits as you cruise from London across Northern Europe. Dive into history, flavor, and culture with stops including Oslo, Kiel, Copenhagen, Dublin.",
    rating: 4.1,
    tags: ["fall-cruise"],
  },
  {
    basePrice: 8824,
    departureLocation: {
      city: "London",
      country: "United Kingdom",
      region: "Northern Europe",
      coordinates: {
        latitude: 51.5074,
        longitude: -0.1278,
      },
    },
    arrivalLocation: {
      city: "London",
      country: "United Kingdom",
      region: "Northern Europe",
      coordinates: {
        latitude: 51.5074,
        longitude: -0.1278,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "premium-luxury",
    itinerary: {
      route: [
        {
          city: "London",
          country: "United Kingdom",
          region: "Northern Europe",
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
          region: "Northern Europe",
          coordinates: {
            latitude: 51.5074,
            longitude: -0.1278,
          },
        },
      ],
      description:
        "Step aboard in London and begin a gilded journey through the scenic Northern Europe. From historic cities to coastal hideaways like Dublin, Helsinki, every day is unforgettable.",
      distance: "893 nautical miles",
      totalDuration: "8 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from London to Dublin",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Sailing from Dublin to Helsinki",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Sailing from Helsinki to London",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring London",
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
          description: "Exploring Helsinki",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Exploring London",
        },
      ],
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Javier West",
        role: "Customer Service Representative",
        languages: ["English", "Spanish", "Dutch", "Portuguese"], // Use the properly generated languages list
        experienceYears: 16,
        profileImage: "https://randomuser.me/api/portraits/men/74.jpg",
        contact: {
          contactEmail: "horizonkissed.resona@velarivoyages.com",
          contactNumber: "+1-908-170-4350",
        },
      },
    ],
    title: "Horizon-Kissed Resonance of the Clocktower Shadow",
    description:
      "Step aboard in London and begin a gilded journey through the scenic Northern Europe. From historic cities to coastal hideaways like Dublin, Helsinki, every day is unforgettable.",
    rating: 4.7,
    tags: ["long-distance", "cruise", "glacier-cruise"],
  },
  {
    basePrice: 5783,
    departureLocation: {
      city: "London",
      country: "United Kingdom",
      region: "Northern Europe",
      coordinates: {
        latitude: 51.5074,
        longitude: -0.1278,
      },
    },
    arrivalLocation: {
      city: "London",
      country: "United Kingdom",
      region: "Northern Europe",
      coordinates: {
        latitude: 51.5074,
        longitude: -0.1278,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "premium-luxury",
    itinerary: {
      route: [
        {
          city: "London",
          country: "United Kingdom",
          region: "Northern Europe",
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
          city: "Amsterdam",
          country: "Netherlands",
          coordinates: {
            latitude: 52.377956,
            longitude: 4.89707,
          },
        },
        {
          city: "London",
          country: "United Kingdom",
          region: "Northern Europe",
          coordinates: {
            latitude: 51.5074,
            longitude: -0.1278,
          },
        },
      ],
      description:
        "This extraordinary reverie from London offers the ultimate Northern Europe exploration. Immerse yourself in the rich cultures and stunning landscapes of St. Petersburg and Amsterdam, creating memories that will last a lifetime.",
      distance: "1393 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from London to St. Petersburg",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from St. Petersburg to Amsterdam",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Amsterdam to London",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring London",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring St. Petersburg",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Amsterdam",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Exploring London",
        },
      ],
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Austin Price",
        role: "Customer Service Representative",
        languages: ["English", "Spanish", "Dutch", "Portuguese"], // Use the properly generated languages list
        experienceYears: 18,
        profileImage: "https://randomuser.me/api/portraits/men/49.jpg",
        contact: {
          contactEmail: "radiant.sojourn.of.t@velarivoyages.com",
          contactNumber: "+1-870-446-6857",
        },
      },
    ],
    title: "Radiant Sojourn of the Thames Capital",
    description:
      "This extraordinary reverie from London offers the ultimate Northern Europe exploration. Immerse yourself in the rich cultures and stunning landscapes of St. Petersburg and Amsterdam, creating memories that will last a lifetime.",
    rating: 4.2,
    tags: ["nature"],
  },
  {
    basePrice: 9932,
    departureLocation: {
      city: "London",
      country: "United Kingdom",
      region: "Northern Europe",
      coordinates: {
        latitude: 51.5074,
        longitude: -0.1278,
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
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "mainstream",
    itinerary: {
      route: [
        {
          city: "London",
          country: "United Kingdom",
          region: "Northern Europe",
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
        "This currents takes you beyond the ordinary, starting in London. With breathtaking stops in Berlin, Dublin, Amsterdam, your cruise delivers immersive moments and unforgettable vistas.",
      distance: "1481 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from London to Berlin",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Berlin to Dublin",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Dublin to Amsterdam",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring London",
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
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Exploring Amsterdam",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Ralph Fox",
        role: "Customer Service Representative",
        languages: ["English", "Spanish", "Dutch", "Portuguese"], // Use the properly generated languages list
        experienceYears: 15,
        profileImage: "https://randomuser.me/api/portraits/men/74.jpg",
        contact: {
          contactEmail: "harmonic.serenade.of@velarivoyages.com",
          contactNumber: "+1-398-225-8362",
        },
      },
    ],
    title: "Harmonic Serenade of the Midnight Monarchy",
    description:
      "This currents takes you beyond the ordinary, starting in London. With breathtaking stops in Berlin, Dublin, Amsterdam, your cruise delivers immersive moments and unforgettable vistas.",
    rating: 4.6,
    tags: ["sightseeing"],
  },
  {
    basePrice: 8534,
    departureLocation: {
      city: "London",
      country: "United Kingdom",
      region: "Northern Europe",
      coordinates: {
        latitude: 51.5074,
        longitude: -0.1278,
      },
    },
    arrivalLocation: {
      city: "London",
      country: "United Kingdom",
      region: "Northern Europe",
      coordinates: {
        latitude: 51.5074,
        longitude: -0.1278,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "entry-luxury",
    itinerary: {
      route: [
        {
          city: "London",
          country: "United Kingdom",
          region: "Northern Europe",
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
          region: "Northern Europe",
          coordinates: {
            latitude: 51.5074,
            longitude: -0.1278,
          },
        },
      ],
      description:
        "Set sail from London for a voyage like no other. From the picturesque landscapes of Tallinn to the lively ambiance of Dublin, this tranquil cruise will redefine your view of Northern Europe.",
      distance: "705 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from London to Tallinn",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Tallinn to Dublin",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from Dublin to London",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring London",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Tallinn",
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
          description: "Exploring London",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Samuel Dixon",
        role: "Customer Service Representative",
        languages: ["English", "Spanish", "Dutch", "Portuguese"], // Use the properly generated languages list
        experienceYears: 10,
        profileImage: "https://randomuser.me/api/portraits/men/17.jpg",
        contact: {
          contactEmail: "serene.mythos.of.the@velarivoyages.com",
          contactNumber: "+1-715-393-6496",
        },
      },
    ],
    title: "Serene Mythos of the Twilight Fjords",
    description:
      "Set sail from London for a voyage like no other. From the picturesque landscapes of Tallinn to the lively ambiance of Dublin, this tranquil cruise will redefine your view of Northern Europe.",
    rating: 4.9,
    tags: ["exclusive", "repositioning", "seasonal"],
  },
  {
    basePrice: 4350,
    departureLocation: {
      city: "London",
      country: "United Kingdom",
      region: "Northern Europe",
      coordinates: {
        latitude: 51.5074,
        longitude: -0.1278,
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
    hasPopularDestination: false,
    category: "mainstream",
    itinerary: {
      route: [
        {
          city: "London",
          country: "United Kingdom",
          region: "Northern Europe",
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
          city: "St. Petersburg",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
      ],
      description:
        "Set course from London for an inspiring breathtaking journey across Northern Europe. Whether exploring ancient ruins in Helsinki or soaking up coastal views in Dublin, every day offers a perfect mix of discovery and relaxation.",
      distance: "1235 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from London to Helsinki",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Helsinki to Dublin",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from Dublin to Copenhagen",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Sailing from Copenhagen to St. Petersburg",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring London",
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
          description: "Exploring Dublin",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Exploring Copenhagen",
        },
        {
          start: "Day 13",
          end: "Day 13",
          duration: "1 days",
          description: "Exploring St. Petersburg",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Daniel West",
        role: "Customer Service Representative",
        languages: ["English", "Spanish", "Dutch", "Portuguese"], // Use the properly generated languages list
        experienceYears: 16,
        profileImage: "https://randomuser.me/api/portraits/men/35.jpg",
        contact: {
          contactEmail: "aweinspiring.realm.o@velarivoyages.com",
          contactNumber: "+1-980-133-1123",
        },
      },
    ],
    title: "Awe-Inspiring Realm of the Windswept Elegance",
    description:
      "Set course from London for an inspiring breathtaking journey across Northern Europe. Whether exploring ancient ruins in Helsinki or soaking up coastal views in Dublin, every day offers a perfect mix of discovery and relaxation.",
    rating: 4.8,
    tags: ["wildlife"],
  },
  {
    basePrice: 9595,
    departureLocation: {
      city: "London",
      country: "United Kingdom",
      region: "Northern Europe",
      coordinates: {
        latitude: 51.5074,
        longitude: -0.1278,
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
    category: "entry-luxury",
    itinerary: {
      route: [
        {
          city: "London",
          country: "United Kingdom",
          region: "Northern Europe",
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
        "Your embrace begins in London, where every sunset on the Northern Europe horizon promises another day of discovery—from St. Petersburg, Kiel, Tallinn to hidden ports of charm.",
      distance: "676 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from London to St. Petersburg",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from St. Petersburg to Kiel",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from Kiel to Tallinn",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring London",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring St. Petersburg",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring Kiel",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Exploring Tallinn",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Jacob Douglas",
        role: "Customer Service Representative",
        languages: ["English", "Spanish", "Dutch", "Portuguese"], // Use the properly generated languages list
        experienceYears: 6,
        profileImage: "https://randomuser.me/api/portraits/men/78.jpg",
        contact: {
          contactEmail: "starlit.symphony.of.@velarivoyages.com",
          contactNumber: "+1-887-488-1828",
        },
      },
    ],
    title: "Starlit Symphony of the Midnight Monarchy",
    description:
      "Your embrace begins in London, where every sunset on the Northern Europe horizon promises another day of discovery—from St. Petersburg, Kiel, Tallinn to hidden ports of charm.",
    rating: 4.4,
    tags: ["general", "cruise-excursion"],
  },
  {
    basePrice: 8084,
    departureLocation: {
      city: "London",
      country: "United Kingdom",
      region: "Northern Europe",
      coordinates: {
        latitude: 51.5074,
        longitude: -0.1278,
      },
    },
    arrivalLocation: {
      city: "London",
      country: "United Kingdom",
      region: "Northern Europe",
      coordinates: {
        latitude: 51.5074,
        longitude: -0.1278,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "expedition",
    itinerary: {
      route: [
        {
          city: "London",
          country: "United Kingdom",
          region: "Northern Europe",
          coordinates: {
            latitude: 51.5074,
            longitude: -0.1278,
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
          region: "Northern Europe",
          coordinates: {
            latitude: 51.5074,
            longitude: -0.1278,
          },
        },
      ],
      description:
        "Depart London on a relaxing sanctum through the Northern Europe region. Highlights include the stunning coastlines of Oslo, Tallinn, Berlin, all while enjoying first-class amenities on board.",
      distance: "1267 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from London to Oslo",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Sailing from Oslo to Tallinn",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from Tallinn to Berlin",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Sailing from Berlin to London",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring London",
        },
        {
          start: "Day 5",
          end: "Day 6",
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
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Exploring Berlin",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Exploring London",
        },
      ],
    },
    tourCategoryId: "weekend-cruise",
    contactPersonnel: [
      {
        name: "Harry Reed",
        role: "Customer Service Representative",
        languages: ["English", "Spanish", "Dutch", "Portuguese"], // Use the properly generated languages list
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/men/79.jpg",
        contact: {
          contactEmail: "transcendent.embrace@velarivoyages.com",
          contactNumber: "+1-683-953-9482",
        },
      },
    ],
    title: "Transcendent Embrace of the Midnight Monarchy",
    description:
      "Depart London on a relaxing sanctum through the Northern Europe region. Highlights include the stunning coastlines of Oslo, Tallinn, Berlin, all while enjoying first-class amenities on board.",
    rating: 4.5,
    tags: ["exclusive", "weekend-cruise"],
  },
  {
    basePrice: 4980,
    departureLocation: {
      city: "London",
      country: "United Kingdom",
      region: "Northern Europe",
      coordinates: {
        latitude: 51.5074,
        longitude: -0.1278,
      },
    },
    arrivalLocation: {
      city: "London",
      country: "United Kingdom",
      region: "Northern Europe",
      coordinates: {
        latitude: 51.5074,
        longitude: -0.1278,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "expedition",
    itinerary: {
      route: [
        {
          city: "London",
          country: "United Kingdom",
          region: "Northern Europe",
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
          region: "Northern Europe",
          coordinates: {
            latitude: 51.5074,
            longitude: -0.1278,
          },
        },
      ],
      description:
        "Let the spirit of exploration guide your tranquil journey from London. This cruise offers a balanced mix of luxury and adventure, visiting stunning locales like Dublin, Kiel, Helsinki, Tallinn.",
      distance: "636 nautical miles",
      totalDuration: "17 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from London to Dublin",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Dublin to Kiel",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Sailing from Kiel to Helsinki",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Sailing from Helsinki to Tallinn",
        },
        {
          start: "Day 15",
          end: "Day 16",
          duration: "2 days",
          description: "Sailing from Tallinn to London",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring London",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Dublin",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Exploring Kiel",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Exploring Helsinki",
        },
        {
          start: "Day 13",
          end: "Day 14",
          duration: "2 days",
          description: "Exploring Tallinn",
        },
        {
          start: "Day 17",
          end: "Day 17",
          duration: "1 days",
          description: "Exploring London",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Eugene Dixon",
        role: "Customer Service Representative",
        languages: ["English", "Spanish", "Dutch", "Portuguese"], // Use the properly generated languages list
        experienceYears: 13,
        profileImage: "https://randomuser.me/api/portraits/men/79.jpg",
        contact: {
          contactEmail: "opulent.passage.of.t@velarivoyages.com",
          contactNumber: "+1-662-138-3251",
        },
      },
    ],
    title: "Opulent Passage of the Midnight Monarchy",
    description:
      "Let the spirit of exploration guide your tranquil journey from London. This cruise offers a balanced mix of luxury and adventure, visiting stunning locales like Dublin, Kiel, Helsinki, Tallinn.",
    rating: 4.2,
    tags: ["weekend-cruise", "adventure", "cultural"],
  },
  {
    basePrice: 1623,
    departureLocation: {
      city: "London",
      country: "United Kingdom",
      region: "Northern Europe",
      coordinates: {
        latitude: 51.5074,
        longitude: -0.1278,
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
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "premium-luxury",
    itinerary: {
      route: [
        {
          city: "London",
          country: "United Kingdom",
          region: "Northern Europe",
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
        "Begin a captivating adventure through the Northern Europe, departing London. With visits to Helsinki, Dublin, Amsterdam, each day brings a new adventure and deeper connection to the region.",
      distance: "634 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from London to Helsinki",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Helsinki to Dublin",
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
          end: "Day 1",
          duration: "1 days",
          description: "Exploring London",
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
          description: "Exploring Dublin",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Exploring Amsterdam",
        },
      ],
    },
    tourCategoryId: "anniversary-cruise",
    contactPersonnel: [
      {
        name: "Samantha Sutton",
        role: "Reservations Agent",
        languages: ["English", "Greek", "Swedish", "Norwegian", "French"], // Use the properly generated languages list
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/women/21.jpg",
        contact: {
          contactEmail: "infinite.zenith.of.t@velarivoyages.com",
          contactNumber: "+1-113-585-5245",
        },
      },
    ],
    title: "Infinite Zenith of the Thames Capital",
    description:
      "Begin a captivating adventure through the Northern Europe, departing London. With visits to Helsinki, Dublin, Amsterdam, each day brings a new adventure and deeper connection to the region.",
    rating: 4.4,
    tags: ["romantic", "nature", "expedition"],
  },
  {
    basePrice: 7692,
    departureLocation: {
      city: "London",
      country: "United Kingdom",
      region: "Northern Europe",
      coordinates: {
        latitude: 51.5074,
        longitude: -0.1278,
      },
    },
    arrivalLocation: {
      city: "Kiel",
      country: "Germany",
      coordinates: {
        latitude: 54.3233,
        longitude: 10.1228,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "entry-luxury",
    itinerary: {
      route: [
        {
          city: "London",
          country: "United Kingdom",
          region: "Northern Europe",
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
      ],
      description:
        "This inspiring journey departs from London, navigating the diverse landscapes and vibrant cities of Northern Europe. Must-see stops include Amsterdam, St. Petersburg, Kiel.",
      distance: "964 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from London to Amsterdam",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Amsterdam to St. Petersburg",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from St. Petersburg to Kiel",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring London",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Amsterdam",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring St. Petersburg",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Exploring Kiel",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Rebecca Foster",
        role: "Reservations Agent",
        languages: ["English", "Greek", "Swedish", "Norwegian", "French"], // Use the properly generated languages list
        experienceYears: 14,
        profileImage: "https://randomuser.me/api/portraits/women/66.jpg",
        contact: {
          contactEmail: "breathtaking.sanctua@velarivoyages.com",
          contactNumber: "+1-898-697-2831",
        },
      },
    ],
    title: "Breathtaking Sanctuary of the Thames Capital",
    description:
      "This inspiring journey departs from London, navigating the diverse landscapes and vibrant cities of Northern Europe. Must-see stops include Amsterdam, St. Petersburg, Kiel.",
    rating: 4.8,
    tags: ["wildlife", "repositioning"],
  },
  {
    basePrice: 9164,
    departureLocation: {
      city: "London",
      country: "United Kingdom",
      region: "Northern Europe",
      coordinates: {
        latitude: 51.5074,
        longitude: -0.1278,
      },
    },
    arrivalLocation: {
      city: "London",
      country: "United Kingdom",
      region: "Northern Europe",
      coordinates: {
        latitude: 51.5074,
        longitude: -0.1278,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "luxury",
    itinerary: {
      route: [
        {
          city: "London",
          country: "United Kingdom",
          region: "Northern Europe",
          coordinates: {
            latitude: 51.5074,
            longitude: -0.1278,
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
          region: "Northern Europe",
          coordinates: {
            latitude: 51.5074,
            longitude: -0.1278,
          },
        },
      ],
      description:
        "Your journey through the Northern Europe begins in London, where elegance meets adventure. Explore the shores of Oslo, Kiel, with curated excursions and luxurious onboard amenities.",
      distance: "1345 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from London to Oslo",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Oslo to Kiel",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Sailing from Kiel to London",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring London",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Oslo",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Exploring Kiel",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Exploring London",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Chloe Grant",
        role: "Reservations Agent",
        languages: ["English", "Greek", "Swedish", "Norwegian", "French"], // Use the properly generated languages list
        experienceYears: 9,
        profileImage: "https://randomuser.me/api/portraits/women/40.jpg",
        contact: {
          contactEmail: "verdant.legacy.of.th@velarivoyages.com",
          contactNumber: "+1-205-456-4358",
        },
      },
    ],
    title: "Verdant Legacy of the Baltic Echoes",
    description:
      "Your journey through the Northern Europe begins in London, where elegance meets adventure. Explore the shores of Oslo, Kiel, with curated excursions and luxurious onboard amenities.",
    rating: 4.3,
    tags: ["relaxation"],
  },
  {
    basePrice: 1327,
    departureLocation: {
      city: "London",
      country: "United Kingdom",
      region: "Northern Europe",
      coordinates: {
        latitude: 51.5074,
        longitude: -0.1278,
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
    category: "premium-luxury",
    itinerary: {
      route: [
        {
          city: "London",
          country: "United Kingdom",
          region: "Northern Europe",
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
      ],
      description:
        "Set sail from London on this harmonic whisper through the heart of Northern Europe. Experience the perfect blend of relaxation and adventure as you explore Copenhagen and Amsterdam and Dublin and Southampton, with personalized service and unforgettable experiences awaiting at every port.",
      distance: "1487 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from London to Copenhagen",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Copenhagen to Amsterdam",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Sailing from Amsterdam to Dublin",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Sailing from Dublin to Southampton",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring London",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Copenhagen",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Amsterdam",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Exploring Dublin",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Exploring Southampton",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Helen Bennett",
        role: "Reservations Agent",
        languages: ["English", "Greek", "Swedish", "Norwegian", "French"], // Use the properly generated languages list
        experienceYears: 7,
        profileImage: "https://randomuser.me/api/portraits/women/45.jpg",
        contact: {
          contactEmail: "radiancedrenched.arc@velarivoyages.com",
          contactNumber: "+1-406-749-7069",
        },
      },
    ],
    title: "Radiance-Drenched Arcadia of the Crown Jewel Capitals",
    description:
      "Set sail from London on this harmonic whisper through the heart of Northern Europe. Experience the perfect blend of relaxation and adventure as you explore Copenhagen and Amsterdam and Dublin and Southampton, with personalized service and unforgettable experiences awaiting at every port.",
    rating: 4.2,
    tags: ["cruise", "long-distance"],
  },
  {
    basePrice: 1562,
    departureLocation: {
      city: "London",
      country: "United Kingdom",
      region: "Northern Europe",
      coordinates: {
        latitude: 51.5074,
        longitude: -0.1278,
      },
    },
    arrivalLocation: {
      city: "London",
      country: "United Kingdom",
      region: "Northern Europe",
      coordinates: {
        latitude: 51.5074,
        longitude: -0.1278,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "entry-luxury",
    itinerary: {
      route: [
        {
          city: "London",
          country: "United Kingdom",
          region: "Northern Europe",
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
          city: "St. Petersburg",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "London",
          country: "United Kingdom",
          region: "Northern Europe",
          coordinates: {
            latitude: 51.5074,
            longitude: -0.1278,
          },
        },
      ],
      description:
        "Set sail from London for a voyage like no other. From the picturesque landscapes of Copenhagen to the lively ambiance of Amsterdam, this celestial cruise will redefine your view of Northern Europe.",
      distance: "666 nautical miles",
      totalDuration: "16 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from London to Copenhagen",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Copenhagen to Amsterdam",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from Amsterdam to Tallinn",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Sailing from Tallinn to St. Petersburg",
        },
        {
          start: "Day 14",
          end: "Day 15",
          duration: "2 days",
          description: "Sailing from St. Petersburg to London",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring London",
        },
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Exploring Copenhagen",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring Amsterdam",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Exploring Tallinn",
        },
        {
          start: "Day 13",
          end: "Day 13",
          duration: "1 days",
          description: "Exploring St. Petersburg",
        },
        {
          start: "Day 16",
          end: "Day 16",
          duration: "1 days",
          description: "Exploring London",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Janet Porter",
        role: "Reservations Agent",
        languages: ["English", "Greek", "Swedish", "Norwegian", "French"], // Use the properly generated languages list
        experienceYears: 5,
        profileImage: "https://randomuser.me/api/portraits/women/79.jpg",
        contact: {
          contactEmail: "lavish.wanderlust.of@velarivoyages.com",
          contactNumber: "+1-414-992-5155",
        },
      },
    ],
    title: "Lavish Wanderlust of the Saga-Strewn Coastlines",
    description:
      "Set sail from London for a voyage like no other. From the picturesque landscapes of Copenhagen to the lively ambiance of Amsterdam, this celestial cruise will redefine your view of Northern Europe.",
    rating: 4.7,
    tags: ["cruise", "cruise-experience", "cruise-ship"],
  },
];
