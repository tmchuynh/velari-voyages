import { Cruise } from "@/lib/interfaces/services/cruises";

export const amsterdamCruises: Cruise[] = [
  {
    basePrice: 6017,
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
      city: "Copenhagen",
      country: "Denmark",
      coordinates: {
        latitude: 55.6761,
        longitude: 12.5683,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
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
      ],
      description:
        "Your pulse begins in Amsterdam, where every sunset on the Northern Europe horizon promises another day of discovery—from Kiel, Copenhagen to hidden ports of charm.",
      distance: "1323 nautical miles",
      totalDuration: "7 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Amsterdam to Kiel",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Kiel to Copenhagen",
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
          description: "Exploring Kiel",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Copenhagen",
        },
      ],
    },
    tourCategoryId: "holiday-cruise",
    contactPersonnel: [
      {
        name: "Jacob Fox",
        role: "Sales Consultant",
        languages: ["English", "Finnish", "German", "French", "Swedish"], // Use the properly generated languages list
        experienceYears: 10,
        profileImage: "https://randomuser.me/api/portraits/men/20.jpg",
        contact: {
          contactEmail: "infinite.reunion.of.@velarivoyages.com",
          contactNumber: "+1-491-292-2839",
        },
      },
    ],
    title: "Infinite Reunion of the Twilight Fjords",
    description:
      "Your pulse begins in Amsterdam, where every sunset on the Northern Europe horizon promises another day of discovery—from Kiel, Copenhagen to hidden ports of charm.",
    rating: 4.9,
    tags: ["wellness", "seasonal", "cruise"],
  },
  {
    basePrice: 5520,
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
        "An unforgettable sanctuary awaits as you cruise from Amsterdam across Northern Europe. Dive into history, flavor, and culture with stops including Stockholm, St. Petersburg, Dublin, London.",
      distance: "1479 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Amsterdam to Stockholm",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Sailing from Stockholm to St. Petersburg",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Sailing from St. Petersburg to Dublin",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from Dublin to London",
        },
        {
          start: "Day 11",
          end: "Day 12",
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
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Exploring Stockholm",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Exploring St. Petersburg",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Exploring Dublin",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Exploring London",
        },
        {
          start: "Day 13",
          end: "Day 14",
          duration: "2 days",
          description: "Exploring Amsterdam",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Juan Montgomery",
        role: "Sales Consultant",
        languages: ["English", "Finnish", "German", "French", "Swedish"], // Use the properly generated languages list
        experienceYears: 13,
        profileImage: "https://randomuser.me/api/portraits/men/59.jpg",
        contact: {
          contactEmail: "majestic.sanctuary.o@velarivoyages.com",
          contactNumber: "+1-556-768-9185",
        },
      },
    ],
    title: "Majestic Sanctuary of the Snow-Kissed Harbors",
    description:
      "An unforgettable sanctuary awaits as you cruise from Amsterdam across Northern Europe. Dive into history, flavor, and culture with stops including Stockholm, St. Petersburg, Dublin, London.",
    rating: 4.5,
    tags: ["wildlife"],
  },
  {
    basePrice: 2036,
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
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
      ],
      description:
        "Set sail from Amsterdam on this tide-washed tranquility through the heart of Northern Europe. Experience the perfect blend of relaxation and adventure as you explore London and Berlin and St. Petersburg and Helsinki, with personalized service and unforgettable experiences awaiting at every port.",
      distance: "612 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Amsterdam to London",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Sailing from London to Berlin",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Berlin to St. Petersburg",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Sailing from St. Petersburg to Helsinki",
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
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Exploring Berlin",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Exploring St. Petersburg",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Exploring Helsinki",
        },
      ],
    },
    tourCategoryId: "weekend-cruise",
    contactPersonnel: [
      {
        name: "Jose Hawkins",
        role: "Sales Consultant",
        languages: ["English", "Finnish", "German", "French", "Swedish"], // Use the properly generated languages list
        experienceYears: 19,
        profileImage: "https://randomuser.me/api/portraits/men/58.jpg",
        contact: {
          contactEmail: "tidewashed.zenith.of@velarivoyages.com",
          contactNumber: "+1-918-615-9473",
        },
      },
    ],
    title: "Tide-Washed Zenith of the Reflections of the Past",
    description:
      "Set sail from Amsterdam on this tide-washed tranquility through the heart of Northern Europe. Experience the perfect blend of relaxation and adventure as you explore London and Berlin and St. Petersburg and Helsinki, with personalized service and unforgettable experiences awaiting at every port.",
    rating: 4.7,
    tags: ["weekend-cruise"],
  },
  {
    basePrice: 4387,
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
          region: "Northern Europe",
          coordinates: {
            latitude: 52.377956,
            longitude: 4.89707,
          },
        },
      ],
      description:
        "Launch into adventure from Amsterdam and sail deep into the heart of the Northern Europe. With ports of call like St. Petersburg, Southampton, Berlin, expect a voyage filled with scenic wonders and luxurious comforts.",
      distance: "1061 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Amsterdam to St. Petersburg",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from St. Petersburg to Southampton",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Sailing from Southampton to Berlin",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Sailing from Berlin to Amsterdam",
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
          description: "Exploring St. Petersburg",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Exploring Southampton",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Exploring Berlin",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Exploring Amsterdam",
        },
      ],
    },
    tourCategoryId: "tropical-cruise",
    contactPersonnel: [
      {
        name: "Bobby Clark",
        role: "Sales Consultant",
        languages: ["English", "Finnish", "German", "French", "Swedish"], // Use the properly generated languages list
        experienceYears: 19,
        profileImage: "https://randomuser.me/api/portraits/men/41.jpg",
        contact: {
          contactEmail: "spectacular.reunion.@velarivoyages.com",
          contactNumber: "+1-103-941-8123",
        },
      },
    ],
    title: "Spectacular Reunion of the Golden Age Haven",
    description:
      "Launch into adventure from Amsterdam and sail deep into the heart of the Northern Europe. With ports of call like St. Petersburg, Southampton, Berlin, expect a voyage filled with scenic wonders and luxurious comforts.",
    rating: 4.0,
    tags: ["tropical", "exclusive", "weekend-cruise"],
  },
  {
    basePrice: 4696,
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
      city: "St. Petersburg",
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
          city: "St. Petersburg",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
      ],
      description:
        "From the lively departure port of Amsterdam, this curated labyrinth showcases the finest of Northern Europe. With visits to Berlin, Kiel, St. Petersburg, you’ll experience a tapestry of flavors, sights, and unforgettable moments both onboard and ashore.",
      distance: "797 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Amsterdam to Berlin",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Berlin to Kiel",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from Kiel to St. Petersburg",
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
          description: "Exploring Berlin",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Exploring Kiel",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Exploring St. Petersburg",
        },
      ],
    },
    tourCategoryId: "anniversary-cruise",
    contactPersonnel: [
      {
        name: "Harold Grant",
        role: "Sales Consultant",
        languages: ["English", "Finnish", "German", "French", "Swedish"], // Use the properly generated languages list
        experienceYears: 15,
        profileImage: "https://randomuser.me/api/portraits/men/20.jpg",
        contact: {
          contactEmail: "verdant.expedition.o@velarivoyages.com",
          contactNumber: "+1-108-298-6106",
        },
      },
    ],
    title: "Verdant Expedition of the Aurora Veil",
    description:
      "From the lively departure port of Amsterdam, this curated labyrinth showcases the finest of Northern Europe. With visits to Berlin, Kiel, St. Petersburg, you’ll experience a tapestry of flavors, sights, and unforgettable moments both onboard and ashore.",
    rating: 4.8,
    tags: ["anniversary-cruise"],
  },
  {
    basePrice: 4701,
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
        "Experience the elegance of the seas on this sun-drenched wanderlust through Northern Europe, starting from the illustrious port of Amsterdam. From Stockholm to London, each destination offers its own story, culture, and breathtaking views.",
      distance: "883 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Amsterdam to Stockholm",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Sailing from Stockholm to London",
        },
        {
          start: "Day 6",
          end: "Day 7",
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
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Exploring Stockholm",
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
          description: "Exploring Amsterdam",
        },
      ],
    },
    tourCategoryId: "holiday-cruise",
    contactPersonnel: [
      {
        name: "Elijah Cooper",
        role: "Sales Consultant",
        languages: ["English", "Finnish", "German", "French", "Swedish"], // Use the properly generated languages list
        experienceYears: 13,
        profileImage: "https://randomuser.me/api/portraits/men/6.jpg",
        contact: {
          contactEmail: "immersive.haven.of.t@velarivoyages.com",
          contactNumber: "+1-923-360-8180",
        },
      },
    ],
    title: "Immersive Haven of the Dutch Jewel",
    description:
      "Experience the elegance of the seas on this sun-drenched wanderlust through Northern Europe, starting from the illustrious port of Amsterdam. From Stockholm to London, each destination offers its own story, culture, and breathtaking views.",
    rating: 4.8,
    tags: ["adventure", "holiday-cruise", "cultural"],
  },
  {
    basePrice: 9187,
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
      city: "London",
      country: "United Kingdom",
      coordinates: {
        latitude: 51.5074,
        longitude: -0.1278,
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
          city: "St. Petersburg",
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
      ],
      description:
        "Set sail from historic Amsterdam for a modern escape into the Northern Europe. Savor gourmet cuisine, cultural treasures, and beautiful coastlines with stops in St. Petersburg, Copenhagen, London.",
      distance: "1229 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Amsterdam to St. Petersburg",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Sailing from St. Petersburg to Copenhagen",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Sailing from Copenhagen to London",
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
          description: "Exploring St. Petersburg",
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
      ],
    },
    tourCategoryId: "theme-cruise",
    contactPersonnel: [
      {
        name: "William Hall",
        role: "Sales Consultant",
        languages: ["English", "Finnish", "German", "French", "Swedish"], // Use the properly generated languages list
        experienceYears: 5,
        profileImage: "https://randomuser.me/api/portraits/men/33.jpg",
        contact: {
          contactEmail: "golden.journey.of.th@velarivoyages.com",
          contactNumber: "+1-147-220-3151",
        },
      },
    ],
    title: "Golden Journey of the Fairy Tale Villages",
    description:
      "Set sail from historic Amsterdam for a modern escape into the Northern Europe. Savor gourmet cuisine, cultural treasures, and beautiful coastlines with stops in St. Petersburg, Copenhagen, London.",
    rating: 4.4,
    tags: ["exclusive", "themed-cruise", "holiday-cruise"],
  },
  {
    basePrice: 7394,
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
        "Let the spirit of exploration guide your transcendent journey from Amsterdam. This cruise offers a balanced mix of luxury and adventure, visiting stunning locales like Tallinn, Helsinki, Southampton.",
      distance: "1165 nautical miles",
      totalDuration: "16 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Amsterdam to Tallinn",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Sailing from Tallinn to Helsinki",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Sailing from Helsinki to Southampton",
        },
        {
          start: "Day 14",
          end: "Day 15",
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
          description: "Exploring Tallinn",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Exploring Helsinki",
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
          description: "Exploring Amsterdam",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Billy Hayes",
        role: "Sales Consultant",
        languages: ["English", "Finnish", "German", "French", "Swedish"], // Use the properly generated languages list
        experienceYears: 15,
        profileImage: "https://randomuser.me/api/portraits/men/68.jpg",
        contact: {
          contactEmail: "oceanic.zenith.of.th@velarivoyages.com",
          contactNumber: "+1-852-529-9687",
        },
      },
    ],
    title: "Oceanic Zenith of the Runestone Realms",
    description:
      "Let the spirit of exploration guide your transcendent journey from Amsterdam. This cruise offers a balanced mix of luxury and adventure, visiting stunning locales like Tallinn, Helsinki, Southampton.",
    rating: 4.1,
    tags: ["general"],
  },
  {
    basePrice: 9992,
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
        "Savor each moment of this velvet escape through Northern Europe, starting in Amsterdam. Visit renowned locations like Southampton, Helsinki, Kiel, St. Petersburg, where adventure and relaxation intertwine.",
      distance: "596 nautical miles",
      totalDuration: "17 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Amsterdam to Southampton",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Southampton to Helsinki",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Sailing from Helsinki to Kiel",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Sailing from Kiel to St. Petersburg",
        },
        {
          start: "Day 15",
          end: "Day 16",
          duration: "2 days",
          description: "Sailing from St. Petersburg to Amsterdam",
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
          description: "Exploring Southampton",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Helsinki",
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
          description: "Exploring St. Petersburg",
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
        name: "Aiden Collins",
        role: "Sales Consultant",
        languages: ["English", "Finnish", "German", "French", "Swedish"], // Use the properly generated languages list
        experienceYears: 18,
        profileImage: "https://randomuser.me/api/portraits/men/22.jpg",
        contact: {
          contactEmail: "azure.frontier.of.th@velarivoyages.com",
          contactNumber: "+1-477-730-9896",
        },
      },
    ],
    title: "Azure Frontier of the Dutch Jewel",
    description:
      "Savor each moment of this velvet escape through Northern Europe, starting in Amsterdam. Visit renowned locations like Southampton, Helsinki, Kiel, St. Petersburg, where adventure and relaxation intertwine.",
    rating: 4.3,
    tags: ["exclusive"],
  },
  {
    basePrice: 2222,
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
          region: "Northern Europe",
          coordinates: {
            latitude: 52.377956,
            longitude: 4.89707,
          },
        },
      ],
      description:
        "Step into a world of elegance and exploration from Amsterdam. This tide through the Northern Europe unveils stunning stops including London, Kiel, Berlin, Dublin, all with first-class service.",
      distance: "1218 nautical miles",
      totalDuration: "18 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Amsterdam to London",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Sailing from London to Kiel",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Sailing from Kiel to Berlin",
        },
        {
          start: "Day 13",
          end: "Day 14",
          duration: "2 days",
          description: "Sailing from Berlin to Dublin",
        },
        {
          start: "Day 16",
          end: "Day 16",
          duration: "1 days",
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
          end: "Day 6",
          duration: "2 days",
          description: "Exploring London",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Exploring Kiel",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Exploring Berlin",
        },
        {
          start: "Day 15",
          end: "Day 15",
          duration: "1 days",
          description: "Exploring Dublin",
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
        name: "Edward Clark",
        role: "Sales Consultant",
        languages: ["English", "Finnish", "German", "French", "Swedish"], // Use the properly generated languages list
        experienceYears: 15,
        profileImage: "https://randomuser.me/api/portraits/men/13.jpg",
        contact: {
          contactEmail: "radiancedrenched.whi@velarivoyages.com",
          contactNumber: "+1-620-172-9202",
        },
      },
    ],
    title: "Radiance-Drenched Whisper of the Dutch Jewel",
    description:
      "Step into a world of elegance and exploration from Amsterdam. This tide through the Northern Europe unveils stunning stops including London, Kiel, Berlin, Dublin, all with first-class service.",
    rating: 4.0,
    tags: ["cruise-journey", "fall-cruise"],
  },
];
