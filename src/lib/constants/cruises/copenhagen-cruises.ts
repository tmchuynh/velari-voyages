import { Cruise } from "@/lib/interfaces/services/cruises";

export const copenhagenCruises: Cruise[] = [
  {
    basePrice: 2472,
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
      ],
      description:
        "Unwind and explore on this embrace through Northern Europe, departing from Copenhagen. With every stop—from Berlin to St. Petersburg—you’ll collect memories that last a lifetime.",
      distance: "557 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Copenhagen to Berlin",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Sailing from Berlin to Southampton",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Sailing from Southampton to London",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Sailing from London to St. Petersburg",
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
          description: "Exploring Berlin",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Exploring Southampton",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Exploring London",
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
        name: "Liam Fletcher",
        role: "Marketing Coordinator",
        languages: ["English", "Norwegian", "Spanish", "Greek", "Russian"], // Use the properly generated languages list
        experienceYears: 5,
        profileImage: "https://randomuser.me/api/portraits/men/50.jpg",
        contact: {
          contactEmail: "radiancedrenched.ele@velarivoyages.com",
          contactNumber: "+1-971-266-4051",
        },
      },
    ],
    title: "Radiance-Drenched Elevation of the Snow-Kissed Harbors",
    description:
      "Unwind and explore on this embrace through Northern Europe, departing from Copenhagen. With every stop—from Berlin to St. Petersburg—you’ll collect memories that last a lifetime.",
    rating: 4.6,
    tags: ["cruise-getaway", "wellness"],
  },
  {
    basePrice: 7423,
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
      ],
      description:
        "Your journey through the Northern Europe begins in Copenhagen, where elegance meets adventure. Explore the shores of London, Dublin, Southampton, St. Petersburg, with curated excursions and luxurious onboard amenities.",
      distance: "1278 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Copenhagen to London",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from London to Dublin",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from Dublin to Southampton",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Sailing from Southampton to St. Petersburg",
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
          description: "Exploring London",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Exploring Dublin",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Exploring Southampton",
        },
        {
          start: "Day 13",
          end: "Day 14",
          duration: "2 days",
          description: "Exploring St. Petersburg",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Jerry Stewart",
        role: "Marketing Coordinator",
        languages: ["English", "Norwegian", "Spanish", "Greek", "Russian"], // Use the properly generated languages list
        experienceYears: 16,
        profileImage: "https://randomuser.me/api/portraits/men/44.jpg",
        contact: {
          contactEmail: "aweinspiring.sojourn@velarivoyages.com",
          contactNumber: "+1-698-336-6223",
        },
      },
    ],
    title: "Awe-Inspiring Sojourn of the Aurora Veil",
    description:
      "Your journey through the Northern Europe begins in Copenhagen, where elegance meets adventure. Explore the shores of London, Dublin, Southampton, St. Petersburg, with curated excursions and luxurious onboard amenities.",
    rating: 4.6,
    tags: ["short-getaway", "adventure", "repositioning"],
  },
  {
    basePrice: 4063,
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
        "Enjoy seamless luxury on this riveting frontier beginning in Copenhagen. Visit breathtaking Northern Europe locales such as Kiel, Tallinn, Helsinki, Oslo on this unforgettable itinerary.",
      distance: "1337 nautical miles",
      totalDuration: "16 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Copenhagen to Kiel",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Sailing from Kiel to Tallinn",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Sailing from Tallinn to Helsinki",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Sailing from Helsinki to Oslo",
        },
        {
          start: "Day 15",
          end: "Day 15",
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
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Exploring Kiel",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Exploring Tallinn",
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
          description: "Exploring Oslo",
        },
        {
          start: "Day 16",
          end: "Day 16",
          duration: "1 days",
          description: "Exploring Copenhagen",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Jonathan Hudson",
        role: "Marketing Coordinator",
        languages: ["English", "Norwegian", "Spanish", "Greek", "Russian"], // Use the properly generated languages list
        experienceYears: 19,
        profileImage: "https://randomuser.me/api/portraits/men/67.jpg",
        contact: {
          contactEmail: "eternal.renaissance.@velarivoyages.com",
          contactNumber: "+1-310-389-7998",
        },
      },
    ],
    title: "Eternal Renaissance of the Mist & Midsummer",
    description:
      "Enjoy seamless luxury on this riveting frontier beginning in Copenhagen. Visit breathtaking Northern Europe locales such as Kiel, Tallinn, Helsinki, Oslo on this unforgettable itinerary.",
    rating: 4.2,
    tags: ["wellness"],
  },
  {
    basePrice: 5518,
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
        "Begin an epic odyssey from Copenhagen, where the seas meet culture. Visit the remarkable ports of London, Helsinki, St. Petersburg while indulging in fine dining, entertainment, and unmatched hospitality.",
      distance: "1178 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Copenhagen to London",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from London to Helsinki",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from Helsinki to St. Petersburg",
        },
        {
          start: "Day 11",
          end: "Day 11",
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
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Exploring London",
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
          description: "Exploring St. Petersburg",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Exploring Copenhagen",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Russell Wells",
        role: "Marketing Coordinator",
        languages: ["English", "Norwegian", "Spanish", "Greek", "Russian"], // Use the properly generated languages list
        experienceYears: 6,
        profileImage: "https://randomuser.me/api/portraits/men/6.jpg",
        contact: {
          contactEmail: "eternal.currents.of.@velarivoyages.com",
          contactNumber: "+1-233-767-1155",
        },
      },
    ],
    title: "Eternal Currents of the Twilight Fjords",
    description:
      "Begin an epic odyssey from Copenhagen, where the seas meet culture. Visit the remarkable ports of London, Helsinki, St. Petersburg while indulging in fine dining, entertainment, and unmatched hospitality.",
    rating: 4.1,
    tags: ["exclusive"],
  },
  {
    basePrice: 7398,
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
        "Step into a world of elegance and exploration from Copenhagen. This labyrinth through the Northern Europe unveils stunning stops including Amsterdam, Oslo, all with first-class service.",
      distance: "563 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Copenhagen to Amsterdam",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Amsterdam to Oslo",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Oslo to Copenhagen",
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
          description: "Exploring Amsterdam",
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
          description: "Exploring Copenhagen",
        },
      ],
    },
    tourCategoryId: "tropical-cruise",
    contactPersonnel: [
      {
        name: "Joel Hawkins",
        role: "Marketing Coordinator",
        languages: ["English", "Norwegian", "Spanish", "Greek", "Russian"], // Use the properly generated languages list
        experienceYears: 7,
        profileImage: "https://randomuser.me/api/portraits/men/67.jpg",
        contact: {
          contactEmail: "midnight.awakening.o@velarivoyages.com",
          contactNumber: "+1-687-852-8869",
        },
      },
    ],
    title: "Midnight Awakening of the Mist & Midsummer",
    description:
      "Step into a world of elegance and exploration from Copenhagen. This labyrinth through the Northern Europe unveils stunning stops including Amsterdam, Oslo, all with first-class service.",
    rating: 4.9,
    tags: ["tropical"],
  },
  {
    basePrice: 3754,
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
          city: "Helsinki",
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
        "This extraordinary retreat from Copenhagen offers the ultimate Northern Europe exploration. Immerse yourself in the rich cultures and stunning landscapes of Helsinki, Berlin and Amsterdam, creating memories that will last a lifetime.",
      distance: "1088 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Copenhagen to Helsinki",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Helsinki to Berlin",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from Berlin to Amsterdam",
        },
        {
          start: "Day 13",
          end: "Day 13",
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
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Helsinki",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring Berlin",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Exploring Amsterdam",
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
        name: "Patrick Gardner",
        role: "Marketing Coordinator",
        languages: ["English", "Norwegian", "Spanish", "Greek", "Russian"], // Use the properly generated languages list
        experienceYears: 9,
        profileImage: "https://randomuser.me/api/portraits/men/95.jpg",
        contact: {
          contactEmail: "velvet.tide.of.the.n@velarivoyages.com",
          contactNumber: "+1-913-756-2229",
        },
      },
    ],
    title: "Velvet Tide of the Nordic Fairytale Port",
    description:
      "This extraordinary retreat from Copenhagen offers the ultimate Northern Europe exploration. Immerse yourself in the rich cultures and stunning landscapes of Helsinki, Berlin and Amsterdam, creating memories that will last a lifetime.",
    rating: 4.4,
    tags: ["relaxation"],
  },
  {
    basePrice: 7717,
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
        "Begin your horizon in Copenhagen, a gateway to the soul of Northern Europe. Enjoy days spent exploring Kiel, Amsterdam, St. Petersburg, London and evenings immersed in onboard luxury, fine dining, and panoramic sea views.",
      distance: "996 nautical miles",
      totalDuration: "17 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Copenhagen to Kiel",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Kiel to Amsterdam",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from Amsterdam to St. Petersburg",
        },
        {
          start: "Day 13",
          end: "Day 13",
          duration: "1 days",
          description: "Sailing from St. Petersburg to London",
        },
        {
          start: "Day 16",
          end: "Day 16",
          duration: "1 days",
          description: "Sailing from London to Copenhagen",
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
          description: "Exploring Kiel",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring Amsterdam",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Exploring St. Petersburg",
        },
        {
          start: "Day 14",
          end: "Day 15",
          duration: "2 days",
          description: "Exploring London",
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
        name: "Diego Mason",
        role: "Marketing Coordinator",
        languages: ["English", "Norwegian", "Spanish", "Greek", "Russian"], // Use the properly generated languages list
        experienceYears: 6,
        profileImage: "https://randomuser.me/api/portraits/men/88.jpg",
        contact: {
          contactEmail: "forbidden.arcadia.of@velarivoyages.com",
          contactNumber: "+1-298-959-4510",
        },
      },
    ],
    title: "Forbidden Arcadia of the Royal Stillness",
    description:
      "Begin your horizon in Copenhagen, a gateway to the soul of Northern Europe. Enjoy days spent exploring Kiel, Amsterdam, St. Petersburg, London and evenings immersed in onboard luxury, fine dining, and panoramic sea views.",
    rating: 4.3,
    tags: ["general", "sightseeing", "cruise-vacation"],
  },
  {
    basePrice: 2081,
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
          city: "Dublin",
          country: "Ireland",
          coordinates: {
            latitude: 53.349805,
            longitude: -6.26031,
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
        "Leave ordinary behind as you sail from Copenhagen across the captivating Northern Europe. Discover the distinctive personality of each destination, from Dublin, St. Petersburg.",
      distance: "766 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Copenhagen to Dublin",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Dublin to St. Petersburg",
        },
        {
          start: "Day 8",
          end: "Day 9",
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
          description: "Exploring Dublin",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring St. Petersburg",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Exploring Copenhagen",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Eugene Holloway",
        role: "Marketing Coordinator",
        languages: ["English", "Norwegian", "Spanish", "Greek", "Russian"], // Use the properly generated languages list
        experienceYears: 17,
        profileImage: "https://randomuser.me/api/portraits/men/87.jpg",
        contact: {
          contactEmail: "luminous.whisper.of.@velarivoyages.com",
          contactNumber: "+1-962-453-5900",
        },
      },
    ],
    title: "Luminous Whisper of the Glacial Reflections",
    description:
      "Leave ordinary behind as you sail from Copenhagen across the captivating Northern Europe. Discover the distinctive personality of each destination, from Dublin, St. Petersburg.",
    rating: 4.5,
    tags: ["cruise-getaway", "cruise-experience", "adventure"],
  },
  {
    basePrice: 8623,
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
        "Sail away from the charming harbor of Copenhagen on this luxurious journey across Northern Europe. Uncover the beauty and history of Kiel, Berlin, Stockholm, Dublin with curated excursions, world-class cuisine, and exceptional service.",
      distance: "586 nautical miles",
      totalDuration: "19 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Copenhagen to Kiel",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Kiel to Berlin",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Sailing from Berlin to Stockholm",
        },
        {
          start: "Day 14",
          end: "Day 15",
          duration: "2 days",
          description: "Sailing from Stockholm to Dublin",
        },
        {
          start: "Day 17",
          end: "Day 17",
          duration: "1 days",
          description: "Sailing from Dublin to Copenhagen",
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
          description: "Exploring Stockholm",
        },
        {
          start: "Day 16",
          end: "Day 16",
          duration: "1 days",
          description: "Exploring Dublin",
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
        name: "Sebastian Parker",
        role: "Marketing Coordinator",
        languages: ["English", "Norwegian", "Spanish", "Greek", "Russian"], // Use the properly generated languages list
        experienceYears: 5,
        profileImage: "https://randomuser.me/api/portraits/men/72.jpg",
        contact: {
          contactEmail: "hidden.expedition.of@velarivoyages.com",
          contactNumber: "+1-925-439-4577",
        },
      },
    ],
    title: "Hidden Expedition of the Aurora Veil",
    description:
      "Sail away from the charming harbor of Copenhagen on this luxurious journey across Northern Europe. Uncover the beauty and history of Kiel, Berlin, Stockholm, Dublin with curated excursions, world-class cuisine, and exceptional service.",
    rating: 4.2,
    tags: ["glacier-cruise"],
  },
  {
    basePrice: 5781,
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
        "Depart from iconic Copenhagen and traverse the Northern Europe with visits to Southampton, Tallinn. Every day offers fresh discoveries, culinary delights, and moments of pure relaxation.",
      distance: "1328 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Copenhagen to Southampton",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Southampton to Tallinn",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
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
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Exploring Southampton",
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
          description: "Exploring Copenhagen",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Roy Watson",
        role: "Marketing Coordinator",
        languages: ["English", "Norwegian", "Spanish", "Greek", "Russian"], // Use the properly generated languages list
        experienceYears: 18,
        profileImage: "https://randomuser.me/api/portraits/men/18.jpg",
        contact: {
          contactEmail: "secret.voyage.of.the@velarivoyages.com",
          contactNumber: "+1-216-914-3907",
        },
      },
    ],
    title: "Secret Voyage of the Frosted Serenity",
    description:
      "Depart from iconic Copenhagen and traverse the Northern Europe with visits to Southampton, Tallinn. Every day offers fresh discoveries, culinary delights, and moments of pure relaxation.",
    rating: 5.0,
    tags: ["general"],
  },
];
