import { Cruise } from "@/lib/interfaces/services/cruises";

export const southamptonCruises: Cruise[] = [
  {
    basePrice: 8101,
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
      city: "London",
      country: "United Kingdom",
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
          coordinates: {
            latitude: 51.5074,
            longitude: -0.1278,
          },
        },
      ],
      description:
        "Depart from Southampton on this thoughtfully designed mythos across the Northern Europe. Savor coastal charm, cultural treasures, and ocean views with stops at Amsterdam, Oslo, Kiel, London.",
      distance: "984 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Southampton to Amsterdam",
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
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Sailing from Kiel to London",
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
          end: "Day 9",
          duration: "1 days",
          description: "Exploring Kiel",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Exploring London",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Gregory Baker",
        role: "Customer Service Representative",
        languages: ["English", "Greek", "Czech"], // Use the properly generated languages list
        experienceYears: 15,
        profileImage: "https://randomuser.me/api/portraits/men/75.jpg",
        contact: {
          contactEmail: "midnight.embrace.of.@velarivoyages.com",
          contactNumber: "+1-790-775-2071",
        },
      },
    ],
    title: "Midnight Embrace of the Fog-Bound Gateway",
    description:
      "Depart from Southampton on this thoughtfully designed mythos across the Northern Europe. Savor coastal charm, cultural treasures, and ocean views with stops at Amsterdam, Oslo, Kiel, London.",
    rating: 4.7,
    tags: ["cultural"],
  },
  {
    basePrice: 6725,
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
      ],
      description:
        "Escape the everyday with this azure journey through Northern Europe, departing from Southampton. You'll visit Copenhagen, Oslo, Amsterdam, where every stop is a new adventure.",
      distance: "1323 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Southampton to Copenhagen",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Copenhagen to Oslo",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Oslo to Amsterdam",
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
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Copenhagen",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Exploring Oslo",
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
        name: "Steven Watson",
        role: "Customer Service Representative",
        languages: ["English", "Greek", "Czech"], // Use the properly generated languages list
        experienceYears: 10,
        profileImage: "https://randomuser.me/api/portraits/men/91.jpg",
        contact: {
          contactEmail: "horizonkissed.mythos@velarivoyages.com",
          contactNumber: "+1-761-996-6376",
        },
      },
    ],
    title: "Horizon-Kissed Mythos of the Saga-Strewn Coastlines",
    description:
      "Escape the everyday with this azure journey through Northern Europe, departing from Southampton. You'll visit Copenhagen, Oslo, Amsterdam, where every stop is a new adventure.",
    rating: 4.2,
    tags: ["cruise-holiday"],
  },
  {
    basePrice: 2593,
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
          city: "Tallinn",
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
        "An unforgettable sanctum awaits as you cruise from Southampton across Northern Europe. Dive into history, flavor, and culture with stops including Helsinki, Amsterdam, Tallinn.",
      distance: "906 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Southampton to Helsinki",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Helsinki to Amsterdam",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Sailing from Amsterdam to Tallinn",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Sailing from Tallinn to Southampton",
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
          description: "Exploring Helsinki",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Exploring Amsterdam",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Exploring Tallinn",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Exploring Southampton",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Jesse Payne",
        role: "Customer Service Representative",
        languages: ["English", "Greek", "Czech"], // Use the properly generated languages list
        experienceYears: 7,
        profileImage: "https://randomuser.me/api/portraits/men/95.jpg",
        contact: {
          contactEmail: "gilded.infinite.of.t@velarivoyages.com",
          contactNumber: "+1-247-656-4838",
        },
      },
    ],
    title: "Gilded Infinite of the Nordic Waters",
    description:
      "An unforgettable sanctum awaits as you cruise from Southampton across Northern Europe. Dive into history, flavor, and culture with stops including Helsinki, Amsterdam, Tallinn.",
    rating: 4.7,
    tags: ["adventure"],
  },
  {
    basePrice: 2653,
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
    category: "mainstream",
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
        "Let the spirit of exploration guide your mystical journey from Southampton. This cruise offers a balanced mix of luxury and adventure, visiting stunning locales like Oslo, Stockholm.",
      distance: "1370 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Southampton to Oslo",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Sailing from Oslo to Stockholm",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
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
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Exploring Oslo",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Exploring Stockholm",
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
        name: "Jason Wells",
        role: "Customer Service Representative",
        languages: ["English", "Greek", "Czech"], // Use the properly generated languages list
        experienceYears: 19,
        profileImage: "https://randomuser.me/api/portraits/men/22.jpg",
        contact: {
          contactEmail: "horizonkissed.renais@velarivoyages.com",
          contactNumber: "+1-199-697-8664",
        },
      },
    ],
    title: "Horizon-Kissed Renaissance of the Glacial Reflections",
    description:
      "Let the spirit of exploration guide your mystical journey from Southampton. This cruise offers a balanced mix of luxury and adventure, visiting stunning locales like Oslo, Stockholm.",
    rating: 4.4,
    tags: ["cruise-journey", "short-getaway"],
  },
  {
    basePrice: 2525,
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
      city: "London",
      country: "United Kingdom",
      coordinates: {
        latitude: 51.5074,
        longitude: -0.1278,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
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
        "Sail into splendor from Southampton on a pristine voyage through Northern Europe. Let each stop—from St. Petersburg to Dublin—reveal the unique flavors and colors of the region.",
      distance: "668 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Southampton to St. Petersburg",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from St. Petersburg to Dublin",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from Dublin to Amsterdam",
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
          description: "Exploring Southampton",
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
          description: "Exploring Dublin",
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
    tourCategoryId: "luxury-cruise",
    contactPersonnel: [
      {
        name: "Dylan Murray",
        role: "Customer Service Representative",
        languages: ["English", "Greek", "Czech"], // Use the properly generated languages list
        experienceYears: 5,
        profileImage: "https://randomuser.me/api/portraits/men/39.jpg",
        contact: {
          contactEmail: "luxurious.symphony.o@velarivoyages.com",
          contactNumber: "+1-967-461-9796",
        },
      },
    ],
    title: "Luxurious Symphony of the Fairy Tale Villages",
    description:
      "Sail into splendor from Southampton on a pristine voyage through Northern Europe. Let each stop—from St. Petersburg to Dublin—reveal the unique flavors and colors of the region.",
    rating: 4.9,
    tags: ["cruise-getaway", "luxury"],
  },
  {
    basePrice: 2155,
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
      city: "Helsinki",
      country: "Finland",
      coordinates: {
        latitude: 60.1695,
        longitude: 24.9354,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
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
      ],
      description:
        "Experience the elegance of the seas on this heavenly symphony through Northern Europe, starting from the illustrious port of Southampton. From Berlin, Dublin, Copenhagen to Helsinki, each destination offers its own story, culture, and breathtaking views.",
      distance: "1043 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Southampton to Berlin",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Berlin to Dublin",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Sailing from Dublin to Copenhagen",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Sailing from Copenhagen to Helsinki",
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
          description: "Exploring Berlin",
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
          description: "Exploring Copenhagen",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Exploring Helsinki",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Jack Fox",
        role: "Customer Service Representative",
        languages: ["English", "Greek", "Czech"], // Use the properly generated languages list
        experienceYears: 10,
        profileImage: "https://randomuser.me/api/portraits/men/57.jpg",
        contact: {
          contactEmail: "starlit.embrace.of.t@velarivoyages.com",
          contactNumber: "+1-560-163-2225",
        },
      },
    ],
    title: "Starlit Embrace of the Nordic Waters",
    description:
      "Experience the elegance of the seas on this heavenly symphony through Northern Europe, starting from the illustrious port of Southampton. From Berlin, Dublin, Copenhagen to Helsinki, each destination offers its own story, culture, and breathtaking views.",
    rating: 4.9,
    tags: ["romantic", "cultural"],
  },
  {
    basePrice: 5828,
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
    category: "mainstream",
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
        "Savor each moment of this gilded escape through Northern Europe, starting in Southampton. Visit renowned locations like Tallinn, Amsterdam, Kiel, where adventure and relaxation intertwine.",
      distance: "530 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Southampton to Tallinn",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Tallinn to Amsterdam",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Sailing from Amsterdam to Kiel",
        },
        {
          start: "Day 11",
          end: "Day 12",
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
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Tallinn",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Exploring Amsterdam",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Exploring Kiel",
        },
        {
          start: "Day 13",
          end: "Day 14",
          duration: "2 days",
          description: "Exploring Southampton",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Vincent Holloway",
        role: "Customer Service Representative",
        languages: ["English", "Greek", "Czech"], // Use the properly generated languages list
        experienceYears: 6,
        profileImage: "https://randomuser.me/api/portraits/men/6.jpg",
        contact: {
          contactEmail: "whispering.adventure@velarivoyages.com",
          contactNumber: "+1-845-125-8576",
        },
      },
    ],
    title: "Whispering Adventure of the Titanic Port",
    description:
      "Savor each moment of this gilded escape through Northern Europe, starting in Southampton. Visit renowned locations like Tallinn, Amsterdam, Kiel, where adventure and relaxation intertwine.",
    rating: 4.6,
    tags: ["repositioning", "cruise-vacation", "cruise-line"],
  },
  {
    basePrice: 1867,
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
      city: "Oslo",
      country: "Norway",
      coordinates: {
        latitude: 59.9139,
        longitude: 10.7522,
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
      ],
      description:
        "Start in the vibrant city of Southampton and venture into the iconic Northern Europe. Discover authentic local cultures, cuisine, and coastal wonders in Amsterdam, St. Petersburg, Berlin, Oslo.",
      distance: "786 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Southampton to Amsterdam",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Sailing from Amsterdam to St. Petersburg",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from St. Petersburg to Berlin",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Sailing from Berlin to Oslo",
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
          description: "Exploring Amsterdam",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Exploring St. Petersburg",
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
          description: "Exploring Oslo",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Darrell Day",
        role: "Customer Service Representative",
        languages: ["English", "Greek", "Czech"], // Use the properly generated languages list
        experienceYears: 17,
        profileImage: "https://randomuser.me/api/portraits/men/17.jpg",
        contact: {
          contactEmail: "lavish.elevation.of.@velarivoyages.com",
          contactNumber: "+1-662-919-2280",
        },
      },
    ],
    title: "Lavish Elevation of the Titanic Port",
    description:
      "Start in the vibrant city of Southampton and venture into the iconic Northern Europe. Discover authentic local cultures, cuisine, and coastal wonders in Amsterdam, St. Petersburg, Berlin, Oslo.",
    rating: 4.5,
    tags: ["repositioning", "cruise"],
  },
  {
    basePrice: 2876,
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
    category: "entry-luxury",
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
          region: "Northern Europe",
          coordinates: {
            latitude: 50.9097,
            longitude: -1.4044,
          },
        },
      ],
      description:
        "This handpicked elevation begins in Southampton and travels through Northern Europe's iconic waterscapes. Discover Berlin, St. Petersburg, Helsinki as each day brings new stories and every night offers elegant repose.",
      distance: "1038 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Southampton to Berlin",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Berlin to St. Petersburg",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from St. Petersburg to Helsinki",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Sailing from Helsinki to Southampton",
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
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Berlin",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Exploring St. Petersburg",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Exploring Helsinki",
        },
        {
          start: "Day 13",
          end: "Day 13",
          duration: "1 days",
          description: "Exploring Southampton",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Kevin Hamilton",
        role: "Customer Service Representative",
        languages: ["English", "Greek", "Czech"], // Use the properly generated languages list
        experienceYears: 19,
        profileImage: "https://randomuser.me/api/portraits/men/40.jpg",
        contact: {
          contactEmail: "opulent.adventure.of@velarivoyages.com",
          contactNumber: "+1-704-243-7935",
        },
      },
    ],
    title: "Opulent Adventure of the Twilight Fjords",
    description:
      "This handpicked elevation begins in Southampton and travels through Northern Europe's iconic waterscapes. Discover Berlin, St. Petersburg, Helsinki as each day brings new stories and every night offers elegant repose.",
    rating: 4.3,
    tags: ["cruise-holiday", "holiday-cruise"],
  },
  {
    basePrice: 8275,
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
    category: "mainstream",
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
          region: "Northern Europe",
          coordinates: {
            latitude: 50.9097,
            longitude: -1.4044,
          },
        },
      ],
      description:
        "Set sail from Southampton for a voyage like no other. From the picturesque landscapes of Tallinn to the lively ambiance of Berlin, this spectacular cruise will redefine your view of Northern Europe.",
      distance: "1243 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Southampton to Tallinn",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Tallinn to Berlin",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from Berlin to Southampton",
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
          description: "Exploring Tallinn",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Exploring Berlin",
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
        name: "Thabo Curtis",
        role: "Customer Service Representative",
        languages: ["English", "Greek", "Czech"], // Use the properly generated languages list
        experienceYears: 14,
        profileImage: "https://randomuser.me/api/portraits/men/53.jpg",
        contact: {
          contactEmail: "midnight.sanctum.of.@velarivoyages.com",
          contactNumber: "+1-792-665-5780",
        },
      },
    ],
    title: "Midnight Sanctum of the Fog-Bound Gateway",
    description:
      "Set sail from Southampton for a voyage like no other. From the picturesque landscapes of Tallinn to the lively ambiance of Berlin, this spectacular cruise will redefine your view of Northern Europe.",
    rating: 4.2,
    tags: ["wellness", "long-distance", "cruise-getaway"],
  },
  {
    basePrice: 7747,
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
      city: "Helsinki",
      country: "Finland",
      coordinates: {
        latitude: 60.1695,
        longitude: 24.9354,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
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
      ],
      description:
        "Set sail from Southampton for a voyage like no other. From the picturesque landscapes of Tallinn to the lively ambiance of Stockholm, this infinite cruise will redefine your view of Northern Europe.",
      distance: "514 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Southampton to Tallinn",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Tallinn to Stockholm",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Sailing from Stockholm to London",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Sailing from London to Helsinki",
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
          description: "Exploring Tallinn",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
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
          end: "Day 12",
          duration: "2 days",
          description: "Exploring Helsinki",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Elijah Palmer",
        role: "Customer Service Representative",
        languages: ["English", "Greek", "Czech"], // Use the properly generated languages list
        experienceYears: 9,
        profileImage: "https://randomuser.me/api/portraits/men/28.jpg",
        contact: {
          contactEmail: "aweinspiring.reflect@velarivoyages.com",
          contactNumber: "+1-274-507-4862",
        },
      },
    ],
    title: "Awe-Inspiring Reflection of the Fog-Bound Gateway",
    description:
      "Set sail from Southampton for a voyage like no other. From the picturesque landscapes of Tallinn to the lively ambiance of Stockholm, this infinite cruise will redefine your view of Northern Europe.",
    rating: 5.0,
    tags: ["exclusive"],
  },
  {
    basePrice: 4972,
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
        "Sail away from Southampton into the beautiful expanse of Northern Europe. Along the way, enjoy rich cultural experiences in St. Petersburg, Berlin, Stockholm, Kiel, where history, nature, and cuisine collide.",
      distance: "774 nautical miles",
      totalDuration: "16 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Southampton to St. Petersburg",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from St. Petersburg to Berlin",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Sailing from Berlin to Stockholm",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Sailing from Stockholm to Kiel",
        },
        {
          start: "Day 15",
          end: "Day 15",
          duration: "1 days",
          description: "Sailing from Kiel to Southampton",
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
          description: "Exploring St. Petersburg",
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
          description: "Exploring Stockholm",
        },
        {
          start: "Day 13",
          end: "Day 14",
          duration: "2 days",
          description: "Exploring Kiel",
        },
        {
          start: "Day 16",
          end: "Day 16",
          duration: "1 days",
          description: "Exploring Southampton",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Kenneth Gibson",
        role: "Customer Service Representative",
        languages: ["English", "Greek", "Czech"], // Use the properly generated languages list
        experienceYears: 6,
        profileImage: "https://randomuser.me/api/portraits/men/50.jpg",
        contact: {
          contactEmail: "secluded.lullaby.of.@velarivoyages.com",
          contactNumber: "+1-134-488-6450",
        },
      },
    ],
    title: "Secluded Lullaby of the Saga-Strewn Coastlines",
    description:
      "Sail away from Southampton into the beautiful expanse of Northern Europe. Along the way, enjoy rich cultural experiences in St. Petersburg, Berlin, Stockholm, Kiel, where history, nature, and cuisine collide.",
    rating: 4.9,
    tags: ["fall-cruise"],
  },
  {
    basePrice: 4596,
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
    category: "entry-luxury",
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
          region: "Northern Europe",
          coordinates: {
            latitude: 50.9097,
            longitude: -1.4044,
          },
        },
      ],
      description:
        "An unforgettable saga awaits as you cruise from Southampton across Northern Europe. Dive into history, flavor, and culture with stops including Kiel, Dublin, Copenhagen, Helsinki.",
      distance: "670 nautical miles",
      totalDuration: "17 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Southampton to Kiel",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Kiel to Dublin",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Sailing from Dublin to Copenhagen",
        },
        {
          start: "Day 13",
          end: "Day 13",
          duration: "1 days",
          description: "Sailing from Copenhagen to Helsinki",
        },
        {
          start: "Day 16",
          end: "Day 16",
          duration: "1 days",
          description: "Sailing from Helsinki to Southampton",
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
          description: "Exploring Kiel",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Exploring Dublin",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Exploring Copenhagen",
        },
        {
          start: "Day 14",
          end: "Day 15",
          duration: "2 days",
          description: "Exploring Helsinki",
        },
        {
          start: "Day 17",
          end: "Day 17",
          duration: "1 days",
          description: "Exploring Southampton",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Louis Grant",
        role: "Customer Service Representative",
        languages: ["English", "Greek", "Czech"], // Use the properly generated languages list
        experienceYears: 17,
        profileImage: "https://randomuser.me/api/portraits/men/57.jpg",
        contact: {
          contactEmail: "majestic.resonance.o@velarivoyages.com",
          contactNumber: "+1-272-801-3629",
        },
      },
    ],
    title: "Majestic Resonance of the Atlantic Departure Point",
    description:
      "An unforgettable saga awaits as you cruise from Southampton across Northern Europe. Dive into history, flavor, and culture with stops including Kiel, Dublin, Copenhagen, Helsinki.",
    rating: 4.9,
    tags: ["cruise-excursion", "cruise-ship"],
  },
  {
    basePrice: 5282,
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
        "Launch into adventure from Southampton and sail deep into the heart of the Northern Europe. With ports of call like Stockholm, Copenhagen, expect a voyage filled with scenic wonders and luxurious comforts.",
      distance: "839 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Southampton to Stockholm",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Stockholm to Copenhagen",
        },
        {
          start: "Day 8",
          end: "Day 9",
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
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Stockholm",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Copenhagen",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Exploring Southampton",
        },
      ],
    },
    tourCategoryId: "holiday-cruise",
    contactPersonnel: [
      {
        name: "Peter Montgomery",
        role: "Customer Service Representative",
        languages: ["English", "Greek", "Czech"], // Use the properly generated languages list
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/men/48.jpg",
        contact: {
          contactEmail: "breathtaking.horizon@velarivoyages.com",
          contactNumber: "+1-621-990-5661",
        },
      },
    ],
    title: "Breathtaking Horizon of the Fog-Bound Gateway",
    description:
      "Launch into adventure from Southampton and sail deep into the heart of the Northern Europe. With ports of call like Stockholm, Copenhagen, expect a voyage filled with scenic wonders and luxurious comforts.",
    rating: 4.4,
    tags: ["nature", "seasonal", "adventure"],
  },
  {
    basePrice: 7901,
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
          region: "Northern Europe",
          coordinates: {
            latitude: 50.9097,
            longitude: -1.4044,
          },
        },
      ],
      description:
        "Begin your symphony in Southampton, a gateway to the soul of Northern Europe. Enjoy days spent exploring Tallinn, Helsinki and evenings immersed in onboard luxury, fine dining, and panoramic sea views.",
      distance: "855 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Southampton to Tallinn",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Sailing from Tallinn to Helsinki",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Sailing from Helsinki to Southampton",
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
          description: "Exploring Tallinn",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Exploring Helsinki",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Exploring Southampton",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "David West",
        role: "Customer Service Representative",
        languages: ["English", "Greek", "Czech"], // Use the properly generated languages list
        experienceYears: 12,
        profileImage: "https://randomuser.me/api/portraits/men/94.jpg",
        contact: {
          contactEmail: "moonlit.sanctum.of.t@velarivoyages.com",
          contactNumber: "+1-154-870-4443",
        },
      },
    ],
    title: "Moonlit Sanctum of the Runestone Realms",
    description:
      "Begin your symphony in Southampton, a gateway to the soul of Northern Europe. Enjoy days spent exploring Tallinn, Helsinki and evenings immersed in onboard luxury, fine dining, and panoramic sea views.",
    rating: 4.6,
    tags: ["romantic", "holiday-cruise"],
  },
  {
    basePrice: 6019,
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
          city: "Copenhagen",
          country: "Denmark",
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
        "Let the spirit of exploration guide your radiant journey from Southampton. This cruise offers a balanced mix of luxury and adventure, visiting stunning locales like Copenhagen, Kiel.",
      distance: "978 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Southampton to Copenhagen",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Sailing from Copenhagen to Kiel",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
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
          description: "Exploring Copenhagen",
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
          description: "Exploring Southampton",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Nancy Collins",
        role: "Guest Services Agent (Shoreside)",
        languages: ["English", "Russian", "Norwegian", "Polish"], // Use the properly generated languages list
        experienceYears: 5,
        profileImage: "https://randomuser.me/api/portraits/women/88.jpg",
        contact: {
          contactEmail: "unforgettable.pulse.@velarivoyages.com",
          contactNumber: "+1-957-943-3375",
        },
      },
    ],
    title: "Unforgettable Pulse of the Atlantic Departure Point",
    description:
      "Let the spirit of exploration guide your radiant journey from Southampton. This cruise offers a balanced mix of luxury and adventure, visiting stunning locales like Copenhagen, Kiel.",
    rating: 4.5,
    tags: ["cruise"],
  },
  {
    basePrice: 2031,
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
      city: "Oslo",
      country: "Norway",
      coordinates: {
        latitude: 59.9139,
        longitude: 10.7522,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
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
          coordinates: {
            latitude: 59.9139,
            longitude: 10.7522,
          },
        },
      ],
      description:
        "Leave stress behind with this curated zenith from Southampton. Sail across the best of Northern Europe and explore treasures like Dublin, Oslo with comfort and style.",
      distance: "1315 nautical miles",
      totalDuration: "8 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Southampton to Dublin",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Dublin to Oslo",
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
          description: "Exploring Dublin",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Exploring Oslo",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Layla Spencer",
        role: "Guest Services Agent (Shoreside)",
        languages: ["English", "Russian", "Norwegian", "Polish"], // Use the properly generated languages list
        experienceYears: 7,
        profileImage: "https://randomuser.me/api/portraits/women/4.jpg",
        contact: {
          contactEmail: "midnight.drift.of.th@velarivoyages.com",
          contactNumber: "+1-481-317-9572",
        },
      },
    ],
    title: "Midnight Drift of the Echoes of Steam",
    description:
      "Leave stress behind with this curated zenith from Southampton. Sail across the best of Northern Europe and explore treasures like Dublin, Oslo with comfort and style.",
    rating: 4.5,
    tags: ["general", "historical"],
  },
  {
    basePrice: 2456,
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
      city: "Helsinki",
      country: "Finland",
      coordinates: {
        latitude: 60.1695,
        longitude: 24.9354,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
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
          city: "Berlin",
          country: "Germany",
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
      ],
      description:
        "Let the winds of the Northern Europe carry you from Southampton to the most stunning ports in the region. With destinations like London, St. Petersburg, Berlin, Helsinki, this renaissance redefines luxury travel.",
      distance: "1247 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Southampton to London",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from London to St. Petersburg",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from St. Petersburg to Berlin",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Sailing from Berlin to Helsinki",
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
          description: "Exploring London",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring St. Petersburg",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Exploring Berlin",
        },
        {
          start: "Day 13",
          end: "Day 14",
          duration: "2 days",
          description: "Exploring Helsinki",
        },
      ],
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Amy Hayes",
        role: "Guest Services Agent (Shoreside)",
        languages: ["English", "Russian", "Norwegian", "Polish"], // Use the properly generated languages list
        experienceYears: 13,
        profileImage: "https://randomuser.me/api/portraits/women/43.jpg",
        contact: {
          contactEmail: "extraordinary.sanctu@velarivoyages.com",
          contactNumber: "+1-837-607-5439",
        },
      },
    ],
    title: "Extraordinary Sanctum of the Harbor of Legends",
    description:
      "Let the winds of the Northern Europe carry you from Southampton to the most stunning ports in the region. With destinations like London, St. Petersburg, Berlin, Helsinki, this renaissance redefines luxury travel.",
    rating: 4.7,
    tags: ["cruise-holiday", "nature"],
  },
  {
    basePrice: 3757,
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
        "Your journey through the Northern Europe begins in Southampton, where elegance meets adventure. Explore the shores of Amsterdam, Helsinki, London, with curated excursions and luxurious onboard amenities.",
      distance: "514 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Southampton to Amsterdam",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Sailing from Amsterdam to Helsinki",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Helsinki to London",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from London to Southampton",
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
          description: "Exploring London",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Exploring Southampton",
        },
      ],
    },
    tourCategoryId: "vip-cruise",
    contactPersonnel: [
      {
        name: "Leah Chambers",
        role: "Guest Services Agent (Shoreside)",
        languages: ["English", "Russian", "Norwegian", "Polish"], // Use the properly generated languages list
        experienceYears: 7,
        profileImage: "https://randomuser.me/api/portraits/women/31.jpg",
        contact: {
          contactEmail: "timeless.resonance.o@velarivoyages.com",
          contactNumber: "+1-755-531-9554",
        },
      },
    ],
    title: "Timeless Resonance of the Maritime Crossroads",
    description:
      "Your journey through the Northern Europe begins in Southampton, where elegance meets adventure. Explore the shores of Amsterdam, Helsinki, London, with curated excursions and luxurious onboard amenities.",
    rating: 4.3,
    tags: ["wellness", "cruise-journey", "VIP"],
  },
  {
    basePrice: 1295,
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
      city: "Dublin",
      country: "Ireland",
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
          city: "Dublin",
          country: "Ireland",
          coordinates: {
            latitude: 53.349805,
            longitude: -6.26031,
          },
        },
      ],
      description:
        "An unforgettable voyage awaits as you cruise from Southampton across Northern Europe. Dive into history, flavor, and culture with stops including Oslo, Berlin, Dublin.",
      distance: "1197 nautical miles",
      totalDuration: "10 days",
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
          description: "Sailing from Oslo to Berlin",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from Berlin to Dublin",
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
          end: "Day 8",
          duration: "1 days",
          description: "Exploring Berlin",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Exploring Dublin",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Patricia Campbell",
        role: "Guest Services Agent (Shoreside)",
        languages: ["English", "Russian", "Norwegian", "Polish"], // Use the properly generated languages list
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/women/97.jpg",
        contact: {
          contactEmail: "radiancedrenched.cur@velarivoyages.com",
          contactNumber: "+1-951-393-2149",
        },
      },
    ],
    title: "Radiance-Drenched Currents of the Twilight Fjords",
    description:
      "An unforgettable voyage awaits as you cruise from Southampton across Northern Europe. Dive into history, flavor, and culture with stops including Oslo, Berlin, Dublin.",
    rating: 4.4,
    tags: ["cruise-vacation", "cruise-ship"],
  },
];
