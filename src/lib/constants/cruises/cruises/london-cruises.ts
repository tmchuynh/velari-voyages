import { Cruise } from "@/lib/interfaces/services/cruises";

export const londonCruises: Cruise[] = [
  {
    basePrice: 6382,
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
    category: "glacier-cruise",
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
        "Begin an epic eclipse from London, where the seas meet culture. Visit the remarkable ports of Berlin, Kiel, Amsterdam while indulging in fine dining, entertainment, and unmatched hospitality.",
      distance: "531 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from London to Berlin",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Sailing from Berlin to Kiel",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from Kiel to Amsterdam",
        },
        {
          start: "Day 12",
          end: "Day 13",
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
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Exploring Berlin",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Exploring Kiel",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Exploring Amsterdam",
        },
        {
          start: "Day 14",
          end: "Day 14",
          duration: "1 days",
          description: "Exploring London",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Eleanor Watson",
        role: "Reservations Agent",
        languages: ["English", "Greek", "Finnish", "Portuguese", "Dutch"], // Use the properly generated languages list
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/women/35.jpg",
        contact: {
          contactEmail: "celestial.lullaby.of@velarivoyages.com",
          contactNumber: "+1-776-241-1079",
        },
      },
    ],
    title: "Celestial Lullaby of the Royal Metropolis",
    description:
      "Begin an epic eclipse from London, where the seas meet culture. Visit the remarkable ports of Berlin, Kiel, Amsterdam while indulging in fine dining, entertainment, and unmatched hospitality.",
    rating: 4.8,
    tags: ["sightseeing"],
  },
  {
    basePrice: 6360,
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
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "weekend-cruise",
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
          city: "Berlin",
          country: "Germany",
          coordinates: {
            latitude: 52.520008,
            longitude: 13.404954,
          },
        },
      ],
      description:
        "Embark from London and traverse the Northern Europe in style. Whether it’s the energy of Dublin or the calm of Berlin, each destination reveals a new side of paradise.",
      distance: "966 nautical miles",
      totalDuration: "7 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from London to Dublin",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Dublin to Berlin",
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
          description: "Exploring Dublin",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Berlin",
        },
      ],
    },
    tourCategoryId: "weekend-cruise",
    contactPersonnel: [
      {
        name: "Kimberly Nash",
        role: "Reservations Agent",
        languages: ["English", "Greek", "Finnish", "Portuguese", "Dutch"], // Use the properly generated languages list
        experienceYears: 12,
        profileImage: "https://randomuser.me/api/portraits/women/13.jpg",
        contact: {
          contactEmail: "immersive.legacy.of.@velarivoyages.com",
          contactNumber: "+1-754-920-6471",
        },
      },
    ],
    title: "Immersive Legacy of the Royal Metropolis",
    description:
      "Embark from London and traverse the Northern Europe in style. Whether it’s the energy of Dublin or the calm of Berlin, each destination reveals a new side of paradise.",
    rating: 4.5,
    tags: ["weekend-cruise", "cruise-line"],
  },
  {
    basePrice: 3188,
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
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "expedition-cruise",
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
      ],
      description:
        "Savor each moment of this exquisite escape through Northern Europe, starting in London. Visit renowned locations like Berlin, Southampton, St. Petersburg, Tallinn, where adventure and relaxation intertwine.",
      distance: "1331 nautical miles",
      totalDuration: "17 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from London to Berlin",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Sailing from Berlin to Southampton",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Sailing from Southampton to St. Petersburg",
        },
        {
          start: "Day 15",
          end: "Day 16",
          duration: "2 days",
          description: "Sailing from St. Petersburg to Tallinn",
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
          description: "Exploring Berlin",
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
          description: "Exploring St. Petersburg",
        },
        {
          start: "Day 17",
          end: "Day 17",
          duration: "1 days",
          description: "Exploring Tallinn",
        },
      ],
    },
    tourCategoryId: "luxury-cruise",
    contactPersonnel: [
      {
        name: "Helen Baker",
        role: "Reservations Agent",
        languages: ["English", "Greek", "Finnish", "Portuguese", "Dutch"], // Use the properly generated languages list
        experienceYears: 9,
        profileImage: "https://randomuser.me/api/portraits/women/27.jpg",
        contact: {
          contactEmail: "verdant.retreat.of.t@velarivoyages.com",
          contactNumber: "+1-572-289-4474",
        },
      },
    ],
    title: "Verdant Retreat of the Crown Jewel Capitals",
    description:
      "Savor each moment of this exquisite escape through Northern Europe, starting in London. Visit renowned locations like Berlin, Southampton, St. Petersburg, Tallinn, where adventure and relaxation intertwine.",
    rating: 4.5,
    tags: ["repositioning", "culinary", "luxury"],
  },
  {
    basePrice: 8283,
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
    category: "anniversary-cruise",
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
        "Leave ordinary behind as you sail from London across the captivating Northern Europe. Discover the distinctive personality of each destination, from Copenhagen, Amsterdam, Berlin.",
      distance: "1167 nautical miles",
      totalDuration: "16 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from London to Copenhagen",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Sailing from Copenhagen to Amsterdam",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from Amsterdam to Berlin",
        },
        {
          start: "Day 13",
          end: "Day 14",
          duration: "2 days",
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
          description: "Exploring Copenhagen",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Exploring Amsterdam",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Exploring Berlin",
        },
        {
          start: "Day 15",
          end: "Day 16",
          duration: "2 days",
          description: "Exploring London",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Virginia Mitchell",
        role: "Reservations Agent",
        languages: ["English", "Greek", "Finnish", "Portuguese", "Dutch"], // Use the properly generated languages list
        experienceYears: 13,
        profileImage: "https://randomuser.me/api/portraits/women/81.jpg",
        contact: {
          contactEmail: "extraordinary.haven.@velarivoyages.com",
          contactNumber: "+1-119-709-1674",
        },
      },
    ],
    title: "Extraordinary Haven of the Crown Jewel Capitals",
    description:
      "Leave ordinary behind as you sail from London across the captivating Northern Europe. Discover the distinctive personality of each destination, from Copenhagen, Amsterdam, Berlin.",
    rating: 4.6,
    tags: ["cruise-journey", "sightseeing", "cruise-experience"],
  },
  {
    basePrice: 8076,
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
    category: "luxury-cruise",
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
          city: "Berlin",
          country: "Germany",
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
        "Unwind and explore on this arcadia through Northern Europe, departing from London. With every stop—from Oslo to Amsterdam—you’ll collect memories that last a lifetime.",
      distance: "513 nautical miles",
      totalDuration: "14 days",
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
          description: "Sailing from Oslo to Berlin",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Sailing from Berlin to Tallinn",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Sailing from Tallinn to Amsterdam",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Sailing from Amsterdam to London",
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
          description: "Exploring Berlin",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Exploring Tallinn",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Exploring Amsterdam",
        },
        {
          start: "Day 14",
          end: "Day 14",
          duration: "1 days",
          description: "Exploring London",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Christine Crawford",
        role: "Reservations Agent",
        languages: ["English", "Greek", "Finnish", "Portuguese", "Dutch"], // Use the properly generated languages list
        experienceYears: 7,
        profileImage: "https://randomuser.me/api/portraits/women/0.jpg",
        contact: {
          contactEmail: "infinite.sojourn.of.@velarivoyages.com",
          contactNumber: "+1-320-101-7929",
        },
      },
    ],
    title: "Infinite Sojourn of the Fog-Laced Legacy",
    description:
      "Unwind and explore on this arcadia through Northern Europe, departing from London. With every stop—from Oslo to Amsterdam—you’ll collect memories that last a lifetime.",
    rating: 4.5,
    tags: ["cruise-adventure", "cultural"],
  },
  {
    basePrice: 6636,
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
    category: "glacier-cruise",
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
          city: "St. Petersburg",
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
          region: "Northern Europe",
          coordinates: {
            latitude: 51.5074,
            longitude: -0.1278,
          },
        },
      ],
      description:
        "Let the waves lead you from London on this awe-inspiring awakening. Traverse the iconic waters of Northern Europe and discover the beauty of Oslo, St. Petersburg, Helsinki.",
      distance: "1022 nautical miles",
      totalDuration: "13 days",
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
          description: "Sailing from Oslo to St. Petersburg",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Sailing from St. Petersburg to Helsinki",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
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
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Oslo",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Exploring St. Petersburg",
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
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Sandra Payne",
        role: "Reservations Agent",
        languages: ["English", "Greek", "Finnish", "Portuguese", "Dutch"], // Use the properly generated languages list
        experienceYears: 17,
        profileImage: "https://randomuser.me/api/portraits/women/11.jpg",
        contact: {
          contactEmail: "lavish.infinite.of.t@velarivoyages.com",
          contactNumber: "+1-737-560-7185",
        },
      },
    ],
    title: "Lavish Infinite of the Iron Age Isles",
    description:
      "Let the waves lead you from London on this awe-inspiring awakening. Traverse the iconic waters of Northern Europe and discover the beauty of Oslo, St. Petersburg, Helsinki.",
    rating: 4.6,
    tags: ["family-friendly"],
  },
  {
    basePrice: 4136,
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
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "expedition-cruise",
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
          coordinates: {
            latitude: 54.3233,
            longitude: 10.1228,
          },
        },
      ],
      description:
        "Step aboard in London and begin a starlit journey through the scenic Northern Europe. From historic cities to coastal hideaways like Copenhagen, Southampton, Kiel, every day is unforgettable.",
      distance: "1226 nautical miles",
      totalDuration: "12 days",
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
          description: "Sailing from Copenhagen to Southampton",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from Southampton to Kiel",
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
          description: "Exploring Southampton",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Exploring Kiel",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Laura Dunn",
        role: "Reservations Agent",
        languages: ["English", "Greek", "Finnish", "Portuguese", "Dutch"], // Use the properly generated languages list
        experienceYears: 19,
        profileImage: "https://randomuser.me/api/portraits/women/35.jpg",
        contact: {
          contactEmail: "tranquil.elevation.o@velarivoyages.com",
          contactNumber: "+1-448-706-9679",
        },
      },
    ],
    title: "Tranquil Elevation of the Runestone Realms",
    description:
      "Step aboard in London and begin a starlit journey through the scenic Northern Europe. From historic cities to coastal hideaways like Copenhagen, Southampton, Kiel, every day is unforgettable.",
    rating: 4.4,
    tags: ["romantic", "cruise-getaway"],
  },
  {
    basePrice: 4280,
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
    category: "weekend-cruise",
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
          coordinates: {
            latitude: 52.377956,
            longitude: 4.89707,
          },
        },
      ],
      description:
        "An escape like no other begins in London, where your awakening launches into the heart of Northern Europe. Discover the magic of Dublin, Stockholm, Amsterdam with style and sophistication.",
      distance: "1194 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from London to Dublin",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Sailing from Dublin to Stockholm",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Sailing from Stockholm to Amsterdam",
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
          description: "Exploring Dublin",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Exploring Stockholm",
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
        name: "Amanda Keller",
        role: "Reservations Agent",
        languages: ["English", "Greek", "Finnish", "Portuguese", "Dutch"], // Use the properly generated languages list
        experienceYears: 15,
        profileImage: "https://randomuser.me/api/portraits/women/96.jpg",
        contact: {
          contactEmail: "midnight.elevation.o@velarivoyages.com",
          contactNumber: "+1-817-300-8231",
        },
      },
    ],
    title: "Midnight Elevation of the Royal Metropolis",
    description:
      "An escape like no other begins in London, where your awakening launches into the heart of Northern Europe. Discover the magic of Dublin, Stockholm, Amsterdam with style and sophistication.",
    rating: 5.0,
    tags: ["seasonal", "short-getaway"],
  },
  {
    basePrice: 1611,
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
      city: "Stockholm",
      country: "",
      coordinates: {
        latitude: 0,
        longitude: 0,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "holiday-cruise",
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
          city: "Stockholm",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
      ],
      description:
        "This breathtaking expedition begins in London and ventures deep into the heart of Northern Europe. Wander through colorful markets, historic streets, and serene coastlines at Copenhagen, Southampton, Dublin, Stockholm.",
      distance: "1304 nautical miles",
      totalDuration: "16 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from London to Copenhagen",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Copenhagen to Southampton",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Sailing from Southampton to Dublin",
        },
        {
          start: "Day 13",
          end: "Day 14",
          duration: "2 days",
          description: "Sailing from Dublin to Stockholm",
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
          description: "Exploring Copenhagen",
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
          description: "Exploring Dublin",
        },
        {
          start: "Day 15",
          end: "Day 16",
          duration: "2 days",
          description: "Exploring Stockholm",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Kennedy Holloway",
        role: "Reservations Agent",
        languages: ["English", "Greek", "Finnish", "Portuguese", "Dutch"], // Use the properly generated languages list
        experienceYears: 14,
        profileImage: "https://randomuser.me/api/portraits/women/63.jpg",
        contact: {
          contactEmail: "riveting.retreat.of.@velarivoyages.com",
          contactNumber: "+1-923-557-9523",
        },
      },
    ],
    title: "Riveting Retreat of the Thames Capital",
    description:
      "This breathtaking expedition begins in London and ventures deep into the heart of Northern Europe. Wander through colorful markets, historic streets, and serene coastlines at Copenhagen, Southampton, Dublin, Stockholm.",
    rating: 4.2,
    tags: ["cruise-adventure", "historical", "glacier-cruise"],
  },
  {
    basePrice: 7543,
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
    category: "repositioning-cruise",
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
          city: "Amsterdam",
          country: "Netherlands",
          coordinates: {
            latitude: 52.377956,
            longitude: 4.89707,
          },
        },
      ],
      description:
        "Escape to sea from London on a whispering voyage exploring the magic of Northern Europe. Visit unforgettable locales like Dublin, Amsterdam, where each stop inspires awe.",
      distance: "1066 nautical miles",
      totalDuration: "7 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from London to Dublin",
        },
        {
          start: "Day 5",
          end: "Day 5",
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
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Dublin",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Exploring Amsterdam",
        },
      ],
    },
    tourCategoryId: "tropical-cruise",
    contactPersonnel: [
      {
        name: "Elena Keller",
        role: "Reservations Agent",
        languages: ["English", "Greek", "Finnish", "Portuguese", "Dutch"], // Use the properly generated languages list
        experienceYears: 19,
        profileImage: "https://randomuser.me/api/portraits/women/19.jpg",
        contact: {
          contactEmail: "ornate.mythos.of.the@velarivoyages.com",
          contactNumber: "+1-341-484-6221",
        },
      },
    ],
    title: "Ornate Mythos of the Crown Jewel Capitals",
    description:
      "Escape to sea from London on a whispering voyage exploring the magic of Northern Europe. Visit unforgettable locales like Dublin, Amsterdam, where each stop inspires awe.",
    rating: 4.0,
    tags: ["cultural", "tropical", "adventure"],
  },
];
