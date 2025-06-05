import { Cruise } from "@/lib/interfaces/services/cruises";

export const copenhagenCruises: Cruise[] = [
  {
    basePrice: 9227,
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
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "entry-luxury",
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
          coordinates: {
            latitude: 59.9139,
            longitude: 10.7522,
          },
        },
      ],
      description:
        "Begin your journey in Copenhagen, where tradition meets travel. This immersive lullaby reveals the finest of Northern Europe, from the beaches of Amsterdam to the streets of Helsinki.",
      distance: "817 nautical miles",
      totalDuration: "14 days",
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
          description: "Sailing from Amsterdam to Helsinki",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from Helsinki to Kiel",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Sailing from Kiel to Oslo",
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
          end: "Day 8",
          duration: "1 days",
          description: "Exploring Helsinki",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Exploring Kiel",
        },
        {
          start: "Day 14",
          end: "Day 14",
          duration: "1 days",
          description: "Exploring Oslo",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Javier Reeves",
        role: "Group Booking Coordinator",
        languages: ["English", "Czech", "Danish"], // Use the properly generated languages list
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/men/70.jpg",
        contact: {
          contactEmail: "luminous.embrace.of.@velarivoyages.com",
          contactNumber: "+1-535-177-9820",
        },
      },
    ],
    title: "Luminous Embrace of the Mist & Midsummer",
    description:
      "Begin your journey in Copenhagen, where tradition meets travel. This immersive lullaby reveals the finest of Northern Europe, from the beaches of Amsterdam to the streets of Helsinki.",
    rating: 4.8,
    tags: ["historical"],
  },
  {
    basePrice: 1599,
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
      city: "Stockholm",
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
          city: "Stockholm",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
      ],
      description:
        "Enjoy seamless luxury on this moonlit legacy beginning in Copenhagen. Visit breathtaking Northern Europe locales such as Tallinn, Oslo, Stockholm on this unforgettable itinerary.",
      distance: "1030 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Copenhagen to Tallinn",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Tallinn to Oslo",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from Oslo to Stockholm",
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
          description: "Exploring Tallinn",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Exploring Oslo",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Exploring Stockholm",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "James Collins",
        role: "Group Booking Coordinator",
        languages: ["English", "Czech", "Danish"], // Use the properly generated languages list
        experienceYears: 7,
        profileImage: "https://randomuser.me/api/portraits/men/75.jpg",
        contact: {
          contactEmail: "radiancedrenched.pan@velarivoyages.com",
          contactNumber: "+1-572-203-7005",
        },
      },
    ],
    title: "Radiance-Drenched Panorama of the Harbor of Hygge",
    description:
      "Enjoy seamless luxury on this moonlit legacy beginning in Copenhagen. Visit breathtaking Northern Europe locales such as Tallinn, Oslo, Stockholm on this unforgettable itinerary.",
    rating: 4.0,
    tags: ["cruise-excursion", "cruise-adventure"],
  },
  {
    basePrice: 6363,
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
    category: "premium",
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
        "This handpicked expedition begins in Copenhagen and travels through Northern Europe's iconic waterscapes. Discover Helsinki, Tallinn as each day brings new stories and every night offers elegant repose.",
      distance: "1478 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Copenhagen to Helsinki",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Helsinki to Tallinn",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Sailing from Tallinn to Copenhagen",
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
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Helsinki",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Exploring Tallinn",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Exploring Copenhagen",
        },
      ],
    },
    tourCategoryId: "tropical-cruise",
    contactPersonnel: [
      {
        name: "Keith Montgomery",
        role: "Group Booking Coordinator",
        languages: ["English", "Czech", "Danish"], // Use the properly generated languages list
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/men/96.jpg",
        contact: {
          contactEmail: "alluring.tide.of.the@velarivoyages.com",
          contactNumber: "+1-105-715-3409",
        },
      },
    ],
    title: "Alluring Tide of the Mist & Midsummer",
    description:
      "This handpicked expedition begins in Copenhagen and travels through Northern Europe's iconic waterscapes. Discover Helsinki, Tallinn as each day brings new stories and every night offers elegant repose.",
    rating: 4.5,
    tags: ["wellness", "tropical", "family-friendly"],
  },
  {
    basePrice: 5009,
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
    category: "ultra-luxury",
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
          city: "Stockholm",
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
        "Discover the wonders of Northern Europe aboard this mesmerizing cruise departing from Copenhagen. Journey through crystal waters to explore the treasures of Stockholm, Oslo, where each day brings new adventures and evenings are filled with elegant dining and entertainment.",
      distance: "1476 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Copenhagen to Stockholm",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Stockholm to Oslo",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from Oslo to Copenhagen",
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
          description: "Exploring Stockholm",
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
          description: "Exploring Copenhagen",
        },
      ],
    },
    tourCategoryId: "tropical-cruise",
    contactPersonnel: [
      {
        name: "Jose Hayes",
        role: "Group Booking Coordinator",
        languages: ["English", "Czech", "Danish"], // Use the properly generated languages list
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/men/20.jpg",
        contact: {
          contactEmail: "gilded.mystique.of.t@velarivoyages.com",
          contactNumber: "+1-581-931-7439",
        },
      },
    ],
    title: "Gilded Mystique of the Twilight Fjords",
    description:
      "Discover the wonders of Northern Europe aboard this mesmerizing cruise departing from Copenhagen. Journey through crystal waters to explore the treasures of Stockholm, Oslo, where each day brings new adventures and evenings are filled with elegant dining and entertainment.",
    rating: 4.4,
    tags: ["cruise-line", "tropical"],
  },
  {
    basePrice: 2886,
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
      city: "Kiel",
      country: "Germany",
      coordinates: {
        latitude: 54.3233,
        longitude: 10.1228,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "expedition",
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
          city: "Kiel",
          country: "Germany",
          coordinates: {
            latitude: 54.3233,
            longitude: 10.1228,
          },
        },
      ],
      description:
        "Your elevation begins in Copenhagen, where every sunset on the Northern Europe horizon promises another day of discovery—from Oslo, Kiel to hidden ports of charm.",
      distance: "556 nautical miles",
      totalDuration: "6 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Copenhagen to Oslo",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Oslo to Kiel",
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
          end: "Day 4",
          duration: "2 days",
          description: "Exploring Oslo",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Exploring Kiel",
        },
      ],
    },
    tourCategoryId: "tropical-cruise",
    contactPersonnel: [
      {
        name: "Randy West",
        role: "Group Booking Coordinator",
        languages: ["English", "Czech", "Danish"], // Use the properly generated languages list
        experienceYears: 12,
        profileImage: "https://randomuser.me/api/portraits/men/15.jpg",
        contact: {
          contactEmail: "infinite.enigma.of.t@velarivoyages.com",
          contactNumber: "+1-933-566-9932",
        },
      },
    ],
    title: "Infinite Enigma of the Royal Stillness",
    description:
      "Your elevation begins in Copenhagen, where every sunset on the Northern Europe horizon promises another day of discovery—from Oslo, Kiel to hidden ports of charm.",
    rating: 4.0,
    tags: ["relaxation"],
  },
  {
    basePrice: 9826,
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
    category: "premium",
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
        "A voyage of contrasts awaits from Copenhagen. Discover the historical and natural richness of Northern Europe as you cruise to spectacular destinations like Stockholm, St. Petersburg, Southampton, London.",
      distance: "1262 nautical miles",
      totalDuration: "19 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Copenhagen to Stockholm",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Stockholm to St. Petersburg",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Sailing from St. Petersburg to Southampton",
        },
        {
          start: "Day 13",
          end: "Day 14",
          duration: "2 days",
          description: "Sailing from Southampton to London",
        },
        {
          start: "Day 16",
          end: "Day 17",
          duration: "2 days",
          description: "Sailing from London to Copenhagen",
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
          description: "Exploring Stockholm",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Exploring St. Petersburg",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Exploring Southampton",
        },
        {
          start: "Day 15",
          end: "Day 15",
          duration: "1 days",
          description: "Exploring London",
        },
        {
          start: "Day 18",
          end: "Day 19",
          duration: "2 days",
          description: "Exploring Copenhagen",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Terry Jennings",
        role: "Group Booking Coordinator",
        languages: ["English", "Czech", "Danish"], // Use the properly generated languages list
        experienceYears: 9,
        profileImage: "https://randomuser.me/api/portraits/men/4.jpg",
        contact: {
          contactEmail: "transcendent.zenith.@velarivoyages.com",
          contactNumber: "+1-960-996-9401",
        },
      },
    ],
    title: "Transcendent Zenith of the Timbered Waterfronts",
    description:
      "A voyage of contrasts awaits from Copenhagen. Discover the historical and natural richness of Northern Europe as you cruise to spectacular destinations like Stockholm, St. Petersburg, Southampton, London.",
    rating: 4.1,
    tags: ["anniversary-cruise"],
  },
  {
    basePrice: 3137,
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
    category: "ultra-luxury",
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
        "Your mirage begins in Copenhagen, where the spirit of exploration meets modern luxury. From the sun-drenched shores of London to the historic streets of Southampton, each stop in the Northern Europe will leave a lasting impression.",
      distance: "1302 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Copenhagen to London",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from London to Southampton",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Sailing from Southampton to Helsinki",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
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
          end: "Day 5",
          duration: "2 days",
          description: "Exploring London",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Southampton",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Exploring Helsinki",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Exploring Copenhagen",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Nicholas Knight",
        role: "Group Booking Coordinator",
        languages: ["English", "Czech", "Danish"], // Use the properly generated languages list
        experienceYears: 17,
        profileImage: "https://randomuser.me/api/portraits/men/72.jpg",
        contact: {
          contactEmail: "crystalline.escape.o@velarivoyages.com",
          contactNumber: "+1-246-522-7579",
        },
      },
    ],
    title: "Crystalline Escape of the Nordic Fairytale Port",
    description:
      "Your mirage begins in Copenhagen, where the spirit of exploration meets modern luxury. From the sun-drenched shores of London to the historic streets of Southampton, each stop in the Northern Europe will leave a lasting impression.",
    rating: 4.5,
    tags: ["culinary", "cultural", "cruise-experience"],
  },
  {
    basePrice: 5102,
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
      city: "Berlin",
      country: "Germany",
      coordinates: {
        latitude: 52.520008,
        longitude: 13.404954,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "entry-luxury",
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
      ],
      description:
        "Set sail from Copenhagen for a voyage like no other. From the picturesque landscapes of St. Petersburg to the lively ambiance of London, this infinite cruise will redefine your view of Northern Europe.",
      distance: "657 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Copenhagen to St. Petersburg",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from St. Petersburg to London",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Sailing from London to Kiel",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Sailing from Kiel to Berlin",
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
          end: "Day 4",
          duration: "1 days",
          description: "Exploring St. Petersburg",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring London",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Exploring Kiel",
        },
        {
          start: "Day 13",
          end: "Day 13",
          duration: "1 days",
          description: "Exploring Berlin",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Adam Jennings",
        role: "Group Booking Coordinator",
        languages: ["English", "Czech", "Danish"], // Use the properly generated languages list
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/men/13.jpg",
        contact: {
          contactEmail: "opulent.journey.of.t@velarivoyages.com",
          contactNumber: "+1-112-590-4702",
        },
      },
    ],
    title: "Opulent Journey of the Timbered Waterfronts",
    description:
      "Set sail from Copenhagen for a voyage like no other. From the picturesque landscapes of St. Petersburg to the lively ambiance of London, this infinite cruise will redefine your view of Northern Europe.",
    rating: 4.6,
    tags: ["exclusive"],
  },
  {
    basePrice: 4081,
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
    category: "luxury",
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
        "Begin your pulse in Copenhagen, a gateway to the soul of Northern Europe. Enjoy days spent exploring Southampton, Kiel, Helsinki, Amsterdam and evenings immersed in onboard luxury, fine dining, and panoramic sea views.",
      distance: "922 nautical miles",
      totalDuration: "17 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Copenhagen to Southampton",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Southampton to Kiel",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from Kiel to Helsinki",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Sailing from Helsinki to Amsterdam",
        },
        {
          start: "Day 15",
          end: "Day 16",
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
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Southampton",
        },
        {
          start: "Day 7",
          end: "Day 8",
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
          description: "Exploring Amsterdam",
        },
        {
          start: "Day 17",
          end: "Day 17",
          duration: "1 days",
          description: "Exploring Copenhagen",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Keith Gardner",
        role: "Group Booking Coordinator",
        languages: ["English", "Czech", "Danish"], // Use the properly generated languages list
        experienceYears: 17,
        profileImage: "https://randomuser.me/api/portraits/men/67.jpg",
        contact: {
          contactEmail: "ornate.infinite.of.t@velarivoyages.com",
          contactNumber: "+1-486-449-4182",
        },
      },
    ],
    title: "Ornate Infinite of the Saga-Strewn Coastlines",
    description:
      "Begin your pulse in Copenhagen, a gateway to the soul of Northern Europe. Enjoy days spent exploring Southampton, Kiel, Helsinki, Amsterdam and evenings immersed in onboard luxury, fine dining, and panoramic sea views.",
    rating: 4.3,
    tags: ["exclusive", "weekend-cruise", "romantic"],
  },
  {
    basePrice: 6689,
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
    category: "mainstream",
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
        "Unwind and explore on this discovery through Northern Europe, departing from Copenhagen. With every stop—from Oslo to Amsterdam—you’ll collect memories that last a lifetime.",
      distance: "688 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Copenhagen to Oslo",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Oslo to Amsterdam",
        },
        {
          start: "Day 8",
          end: "Day 8",
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
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Oslo",
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
          description: "Exploring Copenhagen",
        },
      ],
    },
    tourCategoryId: "anniversary-cruise",
    contactPersonnel: [
      {
        name: "David Maxwell",
        role: "Group Booking Coordinator",
        languages: ["English", "Czech", "Danish"], // Use the properly generated languages list
        experienceYears: 16,
        profileImage: "https://randomuser.me/api/portraits/men/11.jpg",
        contact: {
          contactEmail: "floating.discovery.o@velarivoyages.com",
          contactNumber: "+1-837-278-8047",
        },
      },
    ],
    title: "Floating Discovery of the Nordic Fairytale Port",
    description:
      "Unwind and explore on this discovery through Northern Europe, departing from Copenhagen. With every stop—from Oslo to Amsterdam—you’ll collect memories that last a lifetime.",
    rating: 4.4,
    tags: ["anniversary-cruise", "relaxation"],
  },
  {
    basePrice: 5247,
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
      city: "Berlin",
      country: "Germany",
      coordinates: {
        latitude: 52.520008,
        longitude: 13.404954,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "premium-luxury",
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
          city: "Berlin",
          country: "Germany",
          coordinates: {
            latitude: 52.520008,
            longitude: 13.404954,
          },
        },
      ],
      description:
        "This handpicked drift begins in Copenhagen and travels through Northern Europe's iconic waterscapes. Discover Stockholm, St. Petersburg, Berlin as each day brings new stories and every night offers elegant repose.",
      distance: "1158 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Copenhagen to Stockholm",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Stockholm to St. Petersburg",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from St. Petersburg to Berlin",
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
          description: "Exploring Stockholm",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring St. Petersburg",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Exploring Berlin",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Joel Fisher",
        role: "Group Booking Coordinator",
        languages: ["English", "Czech", "Danish"], // Use the properly generated languages list
        experienceYears: 9,
        profileImage: "https://randomuser.me/api/portraits/men/63.jpg",
        contact: {
          contactEmail: "exquisite.escape.of.@velarivoyages.com",
          contactNumber: "+1-208-893-8819",
        },
      },
    ],
    title: "Exquisite Escape of the Scandinavian Pearl",
    description:
      "This handpicked drift begins in Copenhagen and travels through Northern Europe's iconic waterscapes. Discover Stockholm, St. Petersburg, Berlin as each day brings new stories and every night offers elegant repose.",
    rating: 4.8,
    tags: ["historical", "holiday-cruise"],
  },
  {
    basePrice: 1042,
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
    category: "expedition",
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
          city: "Oslo",
          country: "Norway",
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
        "Escape the everyday with this heavenly journey through Northern Europe, departing from Copenhagen. You'll visit Helsinki, Oslo, Dublin, where every stop is a new adventure.",
      distance: "626 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Copenhagen to Helsinki",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Helsinki to Oslo",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Oslo to Dublin",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Sailing from Dublin to Copenhagen",
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
          end: "Day 4",
          duration: "2 days",
          description: "Exploring Helsinki",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Exploring Oslo",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Exploring Dublin",
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
        name: "William Nash",
        role: "Group Booking Coordinator",
        languages: ["English", "Czech", "Danish"], // Use the properly generated languages list
        experienceYears: 5,
        profileImage: "https://randomuser.me/api/portraits/men/43.jpg",
        contact: {
          contactEmail: "luxurious.reflection@velarivoyages.com",
          contactNumber: "+1-870-165-7359",
        },
      },
    ],
    title: "Luxurious Reflection of the Glacial Reflections",
    description:
      "Escape the everyday with this heavenly journey through Northern Europe, departing from Copenhagen. You'll visit Helsinki, Oslo, Dublin, where every stop is a new adventure.",
    rating: 4.0,
    tags: ["cruise-line", "themed-cruise"],
  },
  {
    basePrice: 6498,
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
    category: "entry-luxury",
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
      ],
      description:
        "Depart from iconic Copenhagen and traverse the Northern Europe with visits to Amsterdam, London, Southampton, Tallinn. Every day offers fresh discoveries, culinary delights, and moments of pure relaxation.",
      distance: "821 nautical miles",
      totalDuration: "10 days",
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
          description: "Sailing from Amsterdam to London",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Sailing from London to Southampton",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from Southampton to Tallinn",
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
          description: "Exploring London",
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
          description: "Exploring Tallinn",
        },
      ],
    },
    tourCategoryId: "anniversary-cruise",
    contactPersonnel: [
      {
        name: "Jack Bennett",
        role: "Group Booking Coordinator",
        languages: ["English", "Czech", "Danish"], // Use the properly generated languages list
        experienceYears: 17,
        profileImage: "https://randomuser.me/api/portraits/men/58.jpg",
        contact: {
          contactEmail: "pearlescent.sanctuar@velarivoyages.com",
          contactNumber: "+1-237-662-8399",
        },
      },
    ],
    title: "Pearlescent Sanctuary of the Glacial Reflections",
    description:
      "Depart from iconic Copenhagen and traverse the Northern Europe with visits to Amsterdam, London, Southampton, Tallinn. Every day offers fresh discoveries, culinary delights, and moments of pure relaxation.",
    rating: 4.8,
    tags: ["historical", "cultural", "anniversary-cruise"],
  },
  {
    basePrice: 8774,
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
    hasPopularDestination: false,
    category: "entry-luxury",
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
        "Sail away from the charming harbor of Copenhagen on this majestic journey across Northern Europe. Uncover the beauty and history of Helsinki, Berlin, St. Petersburg with curated excursions, world-class cuisine, and exceptional service.",
      distance: "560 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Copenhagen to Helsinki",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Helsinki to Berlin",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from Berlin to St. Petersburg",
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
          description: "Exploring Helsinki",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring Berlin",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Exploring St. Petersburg",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Raymond Knight",
        role: "Group Booking Coordinator",
        languages: ["English", "Czech", "Danish"], // Use the properly generated languages list
        experienceYears: 9,
        profileImage: "https://randomuser.me/api/portraits/men/9.jpg",
        contact: {
          contactEmail: "timeless.wanderlust.@velarivoyages.com",
          contactNumber: "+1-563-140-3629",
        },
      },
    ],
    title: "Timeless Wanderlust of the Scandinavian Pearl",
    description:
      "Sail away from the charming harbor of Copenhagen on this majestic journey across Northern Europe. Uncover the beauty and history of Helsinki, Berlin, St. Petersburg with curated excursions, world-class cuisine, and exceptional service.",
    rating: 4.6,
    tags: ["short-getaway"],
  },
  {
    basePrice: 1443,
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
    category: "premium",
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
        "Leave ordinary behind as you sail from Copenhagen across the captivating Northern Europe. Discover the distinctive personality of each destination, from St. Petersburg, Kiel.",
      distance: "1493 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Copenhagen to St. Petersburg",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from St. Petersburg to Kiel",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from Kiel to Copenhagen",
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
          description: "Exploring St. Petersburg",
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
          description: "Exploring Copenhagen",
        },
      ],
    },
    tourCategoryId: "anniversary-cruise",
    contactPersonnel: [
      {
        name: "Jacob Graham",
        role: "Group Booking Coordinator",
        languages: ["English", "Czech", "Danish"], // Use the properly generated languages list
        experienceYears: 19,
        profileImage: "https://randomuser.me/api/portraits/men/50.jpg",
        contact: {
          contactEmail: "dreamlike.journey.of@velarivoyages.com",
          contactNumber: "+1-456-167-4815",
        },
      },
    ],
    title: "Dreamlike Journey of the Mist & Midsummer",
    description:
      "Leave ordinary behind as you sail from Copenhagen across the captivating Northern Europe. Discover the distinctive personality of each destination, from St. Petersburg, Kiel.",
    rating: 4.3,
    tags: ["short-getaway", "romantic", "anniversary-cruise"],
  },
  {
    basePrice: 3639,
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
    category: "entry-luxury",
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
        "Embark on an unforgettable exploration from the vibrant port of Copenhagen, where you'll discover hidden gems and iconic landmarks across the Northern Europe region. With stops at Amsterdam, Southampton, Oslo, St. Petersburg, this journey combines cultural immersion with breathtaking scenery.",
      distance: "845 nautical miles",
      totalDuration: "18 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Copenhagen to Amsterdam",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Amsterdam to Southampton",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from Southampton to Oslo",
        },
        {
          start: "Day 13",
          end: "Day 14",
          duration: "2 days",
          description: "Sailing from Oslo to St. Petersburg",
        },
        {
          start: "Day 16",
          end: "Day 17",
          duration: "2 days",
          description: "Sailing from St. Petersburg to Copenhagen",
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
          end: "Day 4",
          duration: "2 days",
          description: "Exploring Amsterdam",
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
          description: "Exploring Oslo",
        },
        {
          start: "Day 15",
          end: "Day 15",
          duration: "1 days",
          description: "Exploring St. Petersburg",
        },
        {
          start: "Day 18",
          end: "Day 18",
          duration: "1 days",
          description: "Exploring Copenhagen",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Brenda Lawson",
        role: "Customer Service Representative",
        languages: ["English", "German", "Portuguese", "Norwegian", "Greek"], // Use the properly generated languages list
        experienceYears: 7,
        profileImage: "https://randomuser.me/api/portraits/women/3.jpg",
        contact: {
          contactEmail: "celestial.voyage.of.@velarivoyages.com",
          contactNumber: "+1-813-346-9000",
        },
      },
    ],
    title: "Celestial Voyage of the Nordic Fairytale Port",
    description:
      "Embark on an unforgettable exploration from the vibrant port of Copenhagen, where you'll discover hidden gems and iconic landmarks across the Northern Europe region. With stops at Amsterdam, Southampton, Oslo, St. Petersburg, this journey combines cultural immersion with breathtaking scenery.",
    rating: 4.4,
    tags: ["sightseeing", "cruise-experience"],
  },
  {
    basePrice: 1029,
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
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "premium-luxury",
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
          city: "St. Petersburg",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
      ],
      description:
        "Step into a world of elegance and exploration from Copenhagen. This realm through the Northern Europe unveils stunning stops including Oslo, St. Petersburg, all with first-class service.",
      distance: "722 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Copenhagen to Oslo",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Oslo to St. Petersburg",
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
          description: "Exploring Oslo",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Exploring St. Petersburg",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Abigail Hudson",
        role: "Customer Service Representative",
        languages: ["English", "German", "Portuguese", "Norwegian", "Greek"], // Use the properly generated languages list
        experienceYears: 18,
        profileImage: "https://randomuser.me/api/portraits/women/52.jpg",
        contact: {
          contactEmail: "infinite.mirage.of.t@velarivoyages.com",
          contactNumber: "+1-507-359-6988",
        },
      },
    ],
    title: "Infinite Mirage of the Royal Stillness",
    description:
      "Step into a world of elegance and exploration from Copenhagen. This realm through the Northern Europe unveils stunning stops including Oslo, St. Petersburg, all with first-class service.",
    rating: 4.7,
    tags: ["cruise", "short-getaway"],
  },
  {
    basePrice: 2295,
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
    category: "premium-luxury",
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
        "Sail into splendor from Copenhagen on a secret voyage through Northern Europe. Let each stop—from Stockholm to Kiel—reveal the unique flavors and colors of the region.",
      distance: "917 nautical miles",
      totalDuration: "19 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Copenhagen to Stockholm",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Sailing from Stockholm to Kiel",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Sailing from Kiel to Dublin",
        },
        {
          start: "Day 13",
          end: "Day 14",
          duration: "2 days",
          description: "Sailing from Dublin to Amsterdam",
        },
        {
          start: "Day 16",
          end: "Day 17",
          duration: "2 days",
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
          end: "Day 6",
          duration: "2 days",
          description: "Exploring Stockholm",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Exploring Kiel",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Exploring Dublin",
        },
        {
          start: "Day 15",
          end: "Day 15",
          duration: "1 days",
          description: "Exploring Amsterdam",
        },
        {
          start: "Day 18",
          end: "Day 19",
          duration: "2 days",
          description: "Exploring Copenhagen",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Riley Russell",
        role: "Customer Service Representative",
        languages: ["English", "German", "Portuguese", "Norwegian", "Greek"], // Use the properly generated languages list
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/women/15.jpg",
        contact: {
          contactEmail: "heavenly.lullaby.of.@velarivoyages.com",
          contactNumber: "+1-311-621-6347",
        },
      },
    ],
    title: "Heavenly Lullaby of the Harbor of Hygge",
    description:
      "Sail into splendor from Copenhagen on a secret voyage through Northern Europe. Let each stop—from Stockholm to Kiel—reveal the unique flavors and colors of the region.",
    rating: 5.0,
    tags: ["relaxation", "wellness"],
  },
  {
    basePrice: 1041,
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
    category: "premium",
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
          region: "Northern Europe",
          coordinates: {
            latitude: 55.6761,
            longitude: 12.5683,
          },
        },
      ],
      description:
        "Embark from Copenhagen and traverse the Northern Europe in style. Whether it’s the energy of London or the calm of St. Petersburg, each destination reveals a new side of paradise.",
      distance: "1195 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Copenhagen to London",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from London to St. Petersburg",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Sailing from St. Petersburg to Copenhagen",
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
          description: "Exploring London",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring St. Petersburg",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Exploring Copenhagen",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Elena Watson",
        role: "Customer Service Representative",
        languages: ["English", "German", "Portuguese", "Norwegian", "Greek"], // Use the properly generated languages list
        experienceYears: 13,
        profileImage: "https://randomuser.me/api/portraits/women/55.jpg",
        contact: {
          contactEmail: "crystalline.oasis.of@velarivoyages.com",
          contactNumber: "+1-409-400-4552",
        },
      },
    ],
    title: "Crystalline Oasis of the Scandinavian Pearl",
    description:
      "Embark from Copenhagen and traverse the Northern Europe in style. Whether it’s the energy of London or the calm of St. Petersburg, each destination reveals a new side of paradise.",
    rating: 4.4,
    tags: ["short-getaway", "wildlife"],
  },
  {
    basePrice: 9130,
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
          city: "Copenhagen",
          country: "Denmark",
          region: "Northern Europe",
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
        "Depart from the iconic port of Copenhagen and sail through the enchanting Northern Europe. Explore vibrant destinations like St. Petersburg, London, Dublin, each offering its own unique charm and local flair.",
      distance: "982 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Copenhagen to St. Petersburg",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from St. Petersburg to London",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from London to Dublin",
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
          description: "Exploring St. Petersburg",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Exploring London",
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
        name: "Elizabeth Henderson",
        role: "Customer Service Representative",
        languages: ["English", "German", "Portuguese", "Norwegian", "Greek"], // Use the properly generated languages list
        experienceYears: 9,
        profileImage: "https://randomuser.me/api/portraits/women/30.jpg",
        contact: {
          contactEmail: "midnight.sanctum.of.@velarivoyages.com",
          contactNumber: "+1-189-836-9464",
        },
      },
    ],
    title: "Midnight Sanctum of the Mist & Midsummer",
    description:
      "Depart from the iconic port of Copenhagen and sail through the enchanting Northern Europe. Explore vibrant destinations like St. Petersburg, London, Dublin, each offering its own unique charm and local flair.",
    rating: 4.5,
    tags: ["holiday-cruise"],
  },
];
