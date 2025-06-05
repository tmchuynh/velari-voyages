import { Cruise } from "@/lib/interfaces/services/cruises";

export const parisCruises: Cruise[] = [
  {
    basePrice: 6721,
    departureLocation: {
      city: "Paris",
      country: "France",
      region: "Northern Europe",
      coordinates: {
        latitude: 48.8566,
        longitude: 2.3522,
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
          city: "Paris",
          country: "France",
          region: "Northern Europe",
          coordinates: {
            latitude: 48.8566,
            longitude: 2.3522,
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
          city: "Dublin",
          country: "Ireland",
          coordinates: {
            latitude: 53.349805,
            longitude: -6.26031,
          },
        },
      ],
      description:
        "Savor each moment of this lavish escape through Northern Europe, starting in Paris. Visit renowned locations like Copenhagen, Kiel, Dublin, where adventure and relaxation intertwine.",
      distance: "699 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Paris to Copenhagen",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Sailing from Copenhagen to Kiel",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from Kiel to Dublin",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Paris",
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
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Exploring Dublin",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Javier Lawson",
        role: "Marketing Coordinator",
        languages: ["English", "Finnish", "Danish", "German", "Greek"], // Use the properly generated languages list
        experienceYears: 7,
        profileImage: "https://randomuser.me/api/portraits/men/70.jpg",
        contact: {
          contactEmail: "majestic.eclipse.of.@velarivoyages.com",
          contactNumber: "+1-252-233-3880",
        },
      },
    ],
    title: "Majestic Eclipse of the Cathedral Echoes",
    description:
      "Savor each moment of this lavish escape through Northern Europe, starting in Paris. Visit renowned locations like Copenhagen, Kiel, Dublin, where adventure and relaxation intertwine.",
    rating: 4.6,
    tags: ["wildlife", "sightseeing"],
  },
  {
    basePrice: 1124,
    departureLocation: {
      city: "Paris",
      country: "France",
      region: "Northern Europe",
      coordinates: {
        latitude: 48.8566,
        longitude: 2.3522,
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
    category: "ultra-luxury",
    itinerary: {
      route: [
        {
          city: "Paris",
          country: "France",
          region: "Northern Europe",
          coordinates: {
            latitude: 48.8566,
            longitude: 2.3522,
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
          city: "Berlin",
          country: "Germany",
          coordinates: {
            latitude: 52.520008,
            longitude: 13.404954,
          },
        },
      ],
      description:
        "Depart from Paris on this thoughtfully designed frontier across the Northern Europe. Savor coastal charm, cultural treasures, and ocean views with stops at Copenhagen, Stockholm, Dublin, Berlin.",
      distance: "1367 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Paris to Copenhagen",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Copenhagen to Stockholm",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Stockholm to Dublin",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Sailing from Dublin to Berlin",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Paris",
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
          description: "Exploring Stockholm",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Exploring Dublin",
        },
        {
          start: "Day 13",
          end: "Day 14",
          duration: "2 days",
          description: "Exploring Berlin",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Gabriel Jennings",
        role: "Marketing Coordinator",
        languages: ["English", "Finnish", "Danish", "German", "Greek"], // Use the properly generated languages list
        experienceYears: 6,
        profileImage: "https://randomuser.me/api/portraits/men/84.jpg",
        contact: {
          contactEmail: "unforgettable.saga.o@velarivoyages.com",
          contactNumber: "+1-904-820-7183",
        },
      },
    ],
    title: "Unforgettable Saga of the Velvet Shadows",
    description:
      "Depart from Paris on this thoughtfully designed frontier across the Northern Europe. Savor coastal charm, cultural treasures, and ocean views with stops at Copenhagen, Stockholm, Dublin, Berlin.",
    rating: 4.1,
    tags: ["cultural", "holiday-cruise"],
  },
  {
    basePrice: 6724,
    departureLocation: {
      city: "Paris",
      country: "France",
      region: "Northern Europe",
      coordinates: {
        latitude: 48.8566,
        longitude: 2.3522,
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
          city: "Paris",
          country: "France",
          region: "Northern Europe",
          coordinates: {
            latitude: 48.8566,
            longitude: 2.3522,
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
      ],
      description:
        "Begin your journey in Paris, where tradition meets travel. This immersive odyssey reveals the finest of Northern Europe, from the beaches of Berlin to the streets of Stockholm.",
      distance: "896 nautical miles",
      totalDuration: "8 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Paris to Berlin",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Berlin to Stockholm",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Paris",
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
          description: "Exploring Stockholm",
        },
      ],
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Paul Carpenter",
        role: "Marketing Coordinator",
        languages: ["English", "Finnish", "Danish", "German", "Greek"], // Use the properly generated languages list
        experienceYears: 13,
        profileImage: "https://randomuser.me/api/portraits/men/24.jpg",
        contact: {
          contactEmail: "spectacular.panorama@velarivoyages.com",
          contactNumber: "+1-948-490-6494",
        },
      },
    ],
    title: "Spectacular Panorama of the Velvet Shadows",
    description:
      "Begin your journey in Paris, where tradition meets travel. This immersive odyssey reveals the finest of Northern Europe, from the beaches of Berlin to the streets of Stockholm.",
    rating: 4.9,
    tags: ["glacier-cruise", "adventure", "long-distance"],
  },
  {
    basePrice: 2298,
    departureLocation: {
      city: "Paris",
      country: "France",
      region: "Northern Europe",
      coordinates: {
        latitude: 48.8566,
        longitude: 2.3522,
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
    category: "entry-luxury",
    itinerary: {
      route: [
        {
          city: "Paris",
          country: "France",
          region: "Northern Europe",
          coordinates: {
            latitude: 48.8566,
            longitude: 2.3522,
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
          city: "London",
          country: "United Kingdom",
          coordinates: {
            latitude: 51.5074,
            longitude: -0.1278,
          },
        },
      ],
      description:
        "This extraordinary sanctuary from Paris offers the ultimate Northern Europe exploration. Immerse yourself in the rich cultures and stunning landscapes of Oslo and London, creating memories that will last a lifetime.",
      distance: "1394 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Paris to Oslo",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Oslo to London",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Paris",
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
          description: "Exploring London",
        },
      ],
    },
    tourCategoryId: "vip-cruise",
    contactPersonnel: [
      {
        name: "Billy Murray",
        role: "Marketing Coordinator",
        languages: ["English", "Finnish", "Danish", "German", "Greek"], // Use the properly generated languages list
        experienceYears: 10,
        profileImage: "https://randomuser.me/api/portraits/men/94.jpg",
        contact: {
          contactEmail: "serene.haven.of.the.@velarivoyages.com",
          contactNumber: "+1-656-668-3913",
        },
      },
    ],
    title: "Serene Haven of the Windswept Elegance",
    description:
      "This extraordinary sanctuary from Paris offers the ultimate Northern Europe exploration. Immerse yourself in the rich cultures and stunning landscapes of Oslo and London, creating memories that will last a lifetime.",
    rating: 4.4,
    tags: ["fall-cruise", "VIP", "themed-cruise"],
  },
  {
    basePrice: 6445,
    departureLocation: {
      city: "Paris",
      country: "France",
      region: "Northern Europe",
      coordinates: {
        latitude: 48.8566,
        longitude: 2.3522,
      },
    },
    arrivalLocation: {
      city: "Paris",
      country: "France",
      region: "Northern Europe",
      coordinates: {
        latitude: 48.8566,
        longitude: 2.3522,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "expedition",
    itinerary: {
      route: [
        {
          city: "Paris",
          country: "France",
          region: "Northern Europe",
          coordinates: {
            latitude: 48.8566,
            longitude: 2.3522,
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
          city: "Paris",
          country: "France",
          region: "Northern Europe",
          coordinates: {
            latitude: 48.8566,
            longitude: 2.3522,
          },
        },
      ],
      description:
        "An unforgettable sanctuary awaits as you cruise from Paris across Northern Europe. Dive into history, flavor, and culture with stops including London, Copenhagen.",
      distance: "1320 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Paris to London",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Sailing from London to Copenhagen",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Sailing from Copenhagen to Paris",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Paris",
        },
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Exploring London",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Exploring Copenhagen",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Exploring Paris",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Noah Coleman",
        role: "Marketing Coordinator",
        languages: ["English", "Finnish", "Danish", "German", "Greek"], // Use the properly generated languages list
        experienceYears: 14,
        profileImage: "https://randomuser.me/api/portraits/men/60.jpg",
        contact: {
          contactEmail: "extraordinary.zenith@velarivoyages.com",
          contactNumber: "+1-934-806-9435",
        },
      },
    ],
    title: "Extraordinary Zenith of the Velvet Shadows",
    description:
      "An unforgettable sanctuary awaits as you cruise from Paris across Northern Europe. Dive into history, flavor, and culture with stops including London, Copenhagen.",
    rating: 4.1,
    tags: ["cultural"],
  },
  {
    basePrice: 8509,
    departureLocation: {
      city: "Paris",
      country: "France",
      region: "Northern Europe",
      coordinates: {
        latitude: 48.8566,
        longitude: 2.3522,
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
    category: "premium-luxury",
    itinerary: {
      route: [
        {
          city: "Paris",
          country: "France",
          region: "Northern Europe",
          coordinates: {
            latitude: 48.8566,
            longitude: 2.3522,
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
        "From the lively departure port of Paris, this curated arcadia showcases the finest of Northern Europe. With visits to London, Tallinn, Oslo, you’ll experience a tapestry of flavors, sights, and unforgettable moments both onboard and ashore.",
      distance: "1186 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Paris to London",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from London to Tallinn",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from Tallinn to Oslo",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Paris",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring London",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring Tallinn",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Exploring Oslo",
        },
      ],
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Joshua Marshall",
        role: "Marketing Coordinator",
        languages: ["English", "Finnish", "Danish", "German", "Greek"], // Use the properly generated languages list
        experienceYears: 17,
        profileImage: "https://randomuser.me/api/portraits/men/15.jpg",
        contact: {
          contactEmail: "serene.renaissance.o@velarivoyages.com",
          contactNumber: "+1-787-559-8442",
        },
      },
    ],
    title: "Serene Renaissance of the Rosé-Washed Dreams",
    description:
      "From the lively departure port of Paris, this curated arcadia showcases the finest of Northern Europe. With visits to London, Tallinn, Oslo, you’ll experience a tapestry of flavors, sights, and unforgettable moments both onboard and ashore.",
    rating: 4.7,
    tags: ["cruise-excursion", "fall-cruise"],
  },
  {
    basePrice: 9205,
    departureLocation: {
      city: "Paris",
      country: "France",
      region: "Northern Europe",
      coordinates: {
        latitude: 48.8566,
        longitude: 2.3522,
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
    category: "premium-luxury",
    itinerary: {
      route: [
        {
          city: "Paris",
          country: "France",
          region: "Northern Europe",
          coordinates: {
            latitude: 48.8566,
            longitude: 2.3522,
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
      ],
      description:
        "Your sojourn begins in Paris, where every sunset on the Northern Europe horizon promises another day of discovery—from Copenhagen, Kiel, Oslo, Tallinn to hidden ports of charm.",
      distance: "841 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Paris to Copenhagen",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Copenhagen to Kiel",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from Kiel to Oslo",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Sailing from Oslo to Tallinn",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Paris",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Copenhagen",
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
          description: "Exploring Oslo",
        },
        {
          start: "Day 13",
          end: "Day 13",
          duration: "1 days",
          description: "Exploring Tallinn",
        },
      ],
    },
    tourCategoryId: "tropical-cruise",
    contactPersonnel: [
      {
        name: "Albert Sutton",
        role: "Marketing Coordinator",
        languages: ["English", "Finnish", "Danish", "German", "Greek"], // Use the properly generated languages list
        experienceYears: 19,
        profileImage: "https://randomuser.me/api/portraits/men/52.jpg",
        contact: {
          contactEmail: "harmonic.labyrinth.o@velarivoyages.com",
          contactNumber: "+1-890-378-1219",
        },
      },
    ],
    title: "Harmonic Labyrinth of the Snow-Kissed Harbors",
    description:
      "Your sojourn begins in Paris, where every sunset on the Northern Europe horizon promises another day of discovery—from Copenhagen, Kiel, Oslo, Tallinn to hidden ports of charm.",
    rating: 4.5,
    tags: ["family-friendly", "tropical"],
  },
  {
    basePrice: 7198,
    departureLocation: {
      city: "Paris",
      country: "France",
      region: "Northern Europe",
      coordinates: {
        latitude: 48.8566,
        longitude: 2.3522,
      },
    },
    arrivalLocation: {
      city: "Paris",
      country: "France",
      region: "Northern Europe",
      coordinates: {
        latitude: 48.8566,
        longitude: 2.3522,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "expedition",
    itinerary: {
      route: [
        {
          city: "Paris",
          country: "France",
          region: "Northern Europe",
          coordinates: {
            latitude: 48.8566,
            longitude: 2.3522,
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
          city: "Paris",
          country: "France",
          region: "Northern Europe",
          coordinates: {
            latitude: 48.8566,
            longitude: 2.3522,
          },
        },
      ],
      description:
        "From bustling Paris to serene Northern Europe shores, this cruise invites you to relax, explore, and indulge. Stops at London, Southampton deliver a balanced blend of culture and comfort.",
      distance: "670 nautical miles",
      totalDuration: "8 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Paris to London",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from London to Southampton",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Sailing from Southampton to Paris",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Paris",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring London",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Exploring Southampton",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Exploring Paris",
        },
      ],
    },
    tourCategoryId: "weekend-cruise",
    contactPersonnel: [
      {
        name: "Alan Wallace",
        role: "Marketing Coordinator",
        languages: ["English", "Finnish", "Danish", "German", "Greek"], // Use the properly generated languages list
        experienceYears: 14,
        profileImage: "https://randomuser.me/api/portraits/men/30.jpg",
        contact: {
          contactEmail: "tranquil.retreat.of.@velarivoyages.com",
          contactNumber: "+1-651-529-7339",
        },
      },
    ],
    title: "Tranquil Retreat of the City of Light",
    description:
      "From bustling Paris to serene Northern Europe shores, this cruise invites you to relax, explore, and indulge. Stops at London, Southampton deliver a balanced blend of culture and comfort.",
    rating: 4.9,
    tags: ["short-getaway", "weekend-cruise", "cruise-excursion"],
  },
  {
    basePrice: 1578,
    departureLocation: {
      city: "Paris",
      country: "France",
      region: "Northern Europe",
      coordinates: {
        latitude: 48.8566,
        longitude: 2.3522,
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
    category: "luxury",
    itinerary: {
      route: [
        {
          city: "Paris",
          country: "France",
          region: "Northern Europe",
          coordinates: {
            latitude: 48.8566,
            longitude: 2.3522,
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
          city: "Berlin",
          country: "Germany",
          coordinates: {
            latitude: 52.520008,
            longitude: 13.404954,
          },
        },
      ],
      description:
        "From the lively departure port of Paris, this curated currents showcases the finest of Northern Europe. With visits to Amsterdam, Copenhagen, London, Berlin, you’ll experience a tapestry of flavors, sights, and unforgettable moments both onboard and ashore.",
      distance: "1231 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Paris to Amsterdam",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Amsterdam to Copenhagen",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Sailing from Copenhagen to London",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Sailing from London to Berlin",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Paris",
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
          description: "Exploring Copenhagen",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Exploring London",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Exploring Berlin",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Darrell Hall",
        role: "Marketing Coordinator",
        languages: ["English", "Finnish", "Danish", "German", "Greek"], // Use the properly generated languages list
        experienceYears: 6,
        profileImage: "https://randomuser.me/api/portraits/men/22.jpg",
        contact: {
          contactEmail: "eternal.expedition.o@velarivoyages.com",
          contactNumber: "+1-508-154-8548",
        },
      },
    ],
    title: "Eternal Expedition of the Saga-Strewn Coastlines",
    description:
      "From the lively departure port of Paris, this curated currents showcases the finest of Northern Europe. With visits to Amsterdam, Copenhagen, London, Berlin, you’ll experience a tapestry of flavors, sights, and unforgettable moments both onboard and ashore.",
    rating: 4.4,
    tags: ["romantic"],
  },
  {
    basePrice: 3054,
    departureLocation: {
      city: "Paris",
      country: "France",
      region: "Northern Europe",
      coordinates: {
        latitude: 48.8566,
        longitude: 2.3522,
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
    hasPopularDestination: false,
    category: "premium",
    itinerary: {
      route: [
        {
          city: "Paris",
          country: "France",
          region: "Northern Europe",
          coordinates: {
            latitude: 48.8566,
            longitude: 2.3522,
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
      ],
      description:
        "From the lively departure port of Paris, this curated odyssey showcases the finest of Northern Europe. With visits to Kiel, Amsterdam, Copenhagen, Oslo, you’ll experience a tapestry of flavors, sights, and unforgettable moments both onboard and ashore.",
      distance: "552 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Paris to Kiel",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Kiel to Amsterdam",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from Amsterdam to Copenhagen",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Sailing from Copenhagen to Oslo",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Paris",
        },
        {
          start: "Day 5",
          end: "Day 5",
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
          end: "Day 11",
          duration: "1 days",
          description: "Exploring Copenhagen",
        },
        {
          start: "Day 14",
          end: "Day 15",
          duration: "2 days",
          description: "Exploring Oslo",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Ethan Chambers",
        role: "Marketing Coordinator",
        languages: ["English", "Finnish", "Danish", "German", "Greek"], // Use the properly generated languages list
        experienceYears: 5,
        profileImage: "https://randomuser.me/api/portraits/men/5.jpg",
        contact: {
          contactEmail: "timeless.arcadia.of.@velarivoyages.com",
          contactNumber: "+1-381-516-8230",
        },
      },
    ],
    title: "Timeless Arcadia of the Romantic Capital",
    description:
      "From the lively departure port of Paris, this curated odyssey showcases the finest of Northern Europe. With visits to Kiel, Amsterdam, Copenhagen, Oslo, you’ll experience a tapestry of flavors, sights, and unforgettable moments both onboard and ashore.",
    rating: 4.5,
    tags: ["long-distance", "culinary"],
  },
  {
    basePrice: 8983,
    departureLocation: {
      city: "Paris",
      country: "France",
      region: "Northern Europe",
      coordinates: {
        latitude: 48.8566,
        longitude: 2.3522,
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
    category: "premium",
    itinerary: {
      route: [
        {
          city: "Paris",
          country: "France",
          region: "Northern Europe",
          coordinates: {
            latitude: 48.8566,
            longitude: 2.3522,
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
          city: "London",
          country: "United Kingdom",
          coordinates: {
            latitude: 51.5074,
            longitude: -0.1278,
          },
        },
      ],
      description:
        "Experience the elegance of the seas on this crystalline retreat through Northern Europe, starting from the illustrious port of Paris. From Tallinn, Oslo to London, each destination offers its own story, culture, and breathtaking views.",
      distance: "664 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Paris to Tallinn",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Tallinn to Oslo",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Sailing from Oslo to London",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Paris",
        },
        {
          start: "Day 3",
          end: "Day 4",
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
        name: "Kyle Maxwell",
        role: "Marketing Coordinator",
        languages: ["English", "Finnish", "Danish", "German", "Greek"], // Use the properly generated languages list
        experienceYears: 15,
        profileImage: "https://randomuser.me/api/portraits/men/23.jpg",
        contact: {
          contactEmail: "breathtaking.mythos.@velarivoyages.com",
          contactNumber: "+1-812-460-6166",
        },
      },
    ],
    title: "Breathtaking Mythos of the City of Light",
    description:
      "Experience the elegance of the seas on this crystalline retreat through Northern Europe, starting from the illustrious port of Paris. From Tallinn, Oslo to London, each destination offers its own story, culture, and breathtaking views.",
    rating: 4.5,
    tags: ["exclusive"],
  },
  {
    basePrice: 5694,
    departureLocation: {
      city: "Paris",
      country: "France",
      region: "Northern Europe",
      coordinates: {
        latitude: 48.8566,
        longitude: 2.3522,
      },
    },
    arrivalLocation: {
      city: "Paris",
      country: "France",
      region: "Northern Europe",
      coordinates: {
        latitude: 48.8566,
        longitude: 2.3522,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "premium",
    itinerary: {
      route: [
        {
          city: "Paris",
          country: "France",
          region: "Northern Europe",
          coordinates: {
            latitude: 48.8566,
            longitude: 2.3522,
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
          city: "Paris",
          country: "France",
          region: "Northern Europe",
          coordinates: {
            latitude: 48.8566,
            longitude: 2.3522,
          },
        },
      ],
      description:
        "Experience the elegance of the seas on this awe-inspiring sojourn through Northern Europe, starting from the illustrious port of Paris. From Kiel to Berlin, each destination offers its own story, culture, and breathtaking views.",
      distance: "957 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Paris to Kiel",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Sailing from Kiel to Berlin",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Sailing from Berlin to Paris",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Paris",
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
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Exploring Paris",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Richard Porter",
        role: "Marketing Coordinator",
        languages: ["English", "Finnish", "Danish", "German", "Greek"], // Use the properly generated languages list
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/men/19.jpg",
        contact: {
          contactEmail: "radiant.haven.of.the@velarivoyages.com",
          contactNumber: "+1-350-253-8519",
        },
      },
    ],
    title: "Radiant Haven of the Frosted Kingdoms",
    description:
      "Experience the elegance of the seas on this awe-inspiring sojourn through Northern Europe, starting from the illustrious port of Paris. From Kiel to Berlin, each destination offers its own story, culture, and breathtaking views.",
    rating: 4.3,
    tags: ["cruise-holiday"],
  },
  {
    basePrice: 8050,
    departureLocation: {
      city: "Paris",
      country: "France",
      region: "Northern Europe",
      coordinates: {
        latitude: 48.8566,
        longitude: 2.3522,
      },
    },
    arrivalLocation: {
      city: "Paris",
      country: "France",
      region: "Northern Europe",
      coordinates: {
        latitude: 48.8566,
        longitude: 2.3522,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "entry-luxury",
    itinerary: {
      route: [
        {
          city: "Paris",
          country: "France",
          region: "Northern Europe",
          coordinates: {
            latitude: 48.8566,
            longitude: 2.3522,
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
          city: "Paris",
          country: "France",
          region: "Northern Europe",
          coordinates: {
            latitude: 48.8566,
            longitude: 2.3522,
          },
        },
      ],
      description:
        "Let the spirit of exploration guide your lavish journey from Paris. This cruise offers a balanced mix of luxury and adventure, visiting stunning locales like Berlin, Amsterdam, Dublin, Helsinki.",
      distance: "1443 nautical miles",
      totalDuration: "17 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Paris to Berlin",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Berlin to Amsterdam",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Sailing from Amsterdam to Dublin",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Sailing from Dublin to Helsinki",
        },
        {
          start: "Day 15",
          end: "Day 16",
          duration: "2 days",
          description: "Sailing from Helsinki to Paris",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Paris",
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
          description: "Exploring Amsterdam",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Exploring Dublin",
        },
        {
          start: "Day 13",
          end: "Day 14",
          duration: "2 days",
          description: "Exploring Helsinki",
        },
        {
          start: "Day 17",
          end: "Day 17",
          duration: "1 days",
          description: "Exploring Paris",
        },
      ],
    },
    tourCategoryId: "luxury-cruise",
    contactPersonnel: [
      {
        name: "Samuel Russell",
        role: "Marketing Coordinator",
        languages: ["English", "Finnish", "Danish", "German", "Greek"], // Use the properly generated languages list
        experienceYears: 18,
        profileImage: "https://randomuser.me/api/portraits/men/45.jpg",
        contact: {
          contactEmail: "secret.oasis.of.the.@velarivoyages.com",
          contactNumber: "+1-883-104-5483",
        },
      },
    ],
    title: "Secret Oasis of the Glacial Reflections",
    description:
      "Let the spirit of exploration guide your lavish journey from Paris. This cruise offers a balanced mix of luxury and adventure, visiting stunning locales like Berlin, Amsterdam, Dublin, Helsinki.",
    rating: 4.0,
    tags: ["luxury"],
  },
  {
    basePrice: 4747,
    departureLocation: {
      city: "Paris",
      country: "France",
      region: "Northern Europe",
      coordinates: {
        latitude: 48.8566,
        longitude: 2.3522,
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
    category: "premium-luxury",
    itinerary: {
      route: [
        {
          city: "Paris",
          country: "France",
          region: "Northern Europe",
          coordinates: {
            latitude: 48.8566,
            longitude: 2.3522,
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
          city: "Tallinn",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
      ],
      description:
        "From bustling Paris to serene Northern Europe shores, this cruise invites you to relax, explore, and indulge. Stops at Dublin, Tallinn deliver a balanced blend of culture and comfort.",
      distance: "615 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Paris to Dublin",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Sailing from Dublin to Tallinn",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Paris",
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
          description: "Exploring Tallinn",
        },
      ],
    },
    tourCategoryId: "vip-cruise",
    contactPersonnel: [
      {
        name: "Sebastian Bennett",
        role: "Marketing Coordinator",
        languages: ["English", "Finnish", "Danish", "German", "Greek"], // Use the properly generated languages list
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/men/96.jpg",
        contact: {
          contactEmail: "exquisite.requiem.of@velarivoyages.com",
          contactNumber: "+1-454-219-7767",
        },
      },
    ],
    title: "Exquisite Requiem of the Twilight Fjords",
    description:
      "From bustling Paris to serene Northern Europe shores, this cruise invites you to relax, explore, and indulge. Stops at Dublin, Tallinn deliver a balanced blend of culture and comfort.",
    rating: 4.6,
    tags: ["VIP"],
  },
  {
    basePrice: 1821,
    departureLocation: {
      city: "Paris",
      country: "France",
      region: "Northern Europe",
      coordinates: {
        latitude: 48.8566,
        longitude: 2.3522,
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
    category: "luxury",
    itinerary: {
      route: [
        {
          city: "Paris",
          country: "France",
          region: "Northern Europe",
          coordinates: {
            latitude: 48.8566,
            longitude: 2.3522,
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
      ],
      description:
        "Cruise into cultural richness aboard this legendary excursion departing Paris. Savor local cuisine and uncover regional beauty from Stockholm to Oslo.",
      distance: "795 nautical miles",
      totalDuration: "7 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Paris to Stockholm",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Stockholm to Oslo",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Paris",
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
          description: "Exploring Oslo",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Brian Baker",
        role: "Marketing Coordinator",
        languages: ["English", "Finnish", "Danish", "German", "Greek"], // Use the properly generated languages list
        experienceYears: 5,
        profileImage: "https://randomuser.me/api/portraits/men/52.jpg",
        contact: {
          contactEmail: "eternal.discovery.of@velarivoyages.com",
          contactNumber: "+1-277-887-3006",
        },
      },
    ],
    title: "Eternal Discovery of the Midnight Louvre",
    description:
      "Cruise into cultural richness aboard this legendary excursion departing Paris. Savor local cuisine and uncover regional beauty from Stockholm to Oslo.",
    rating: 4.6,
    tags: ["wellness", "historical"],
  },
  {
    basePrice: 6716,
    departureLocation: {
      city: "Paris",
      country: "France",
      region: "Northern Europe",
      coordinates: {
        latitude: 48.8566,
        longitude: 2.3522,
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
    category: "entry-luxury",
    itinerary: {
      route: [
        {
          city: "Paris",
          country: "France",
          region: "Northern Europe",
          coordinates: {
            latitude: 48.8566,
            longitude: 2.3522,
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
          city: "Berlin",
          country: "Germany",
          coordinates: {
            latitude: 52.520008,
            longitude: 13.404954,
          },
        },
      ],
      description:
        "This hand-selected awe-inspiring cruise offers a true taste of Northern Europe. Depart from Paris and explore ports like Amsterdam, Tallinn, Berlin, each telling a story through food, music, and tradition.",
      distance: "1240 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Paris to Amsterdam",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Sailing from Amsterdam to Tallinn",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Sailing from Tallinn to Berlin",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Paris",
        },
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Exploring Amsterdam",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Exploring Tallinn",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Exploring Berlin",
        },
      ],
    },
    tourCategoryId: "vip-cruise",
    contactPersonnel: [
      {
        name: "Virginia Hamilton",
        role: "Customer Service Representative",
        languages: ["English", "Polish", "Greek"], // Use the properly generated languages list
        experienceYears: 7,
        profileImage: "https://randomuser.me/api/portraits/women/67.jpg",
        contact: {
          contactEmail: "heavenly.solstice.of@velarivoyages.com",
          contactNumber: "+1-433-969-8858",
        },
      },
    ],
    title: "Heavenly Solstice of the Romantic Capital",
    description:
      "This hand-selected awe-inspiring cruise offers a true taste of Northern Europe. Depart from Paris and explore ports like Amsterdam, Tallinn, Berlin, each telling a story through food, music, and tradition.",
    rating: 4.4,
    tags: ["wildlife", "cruise-getaway", "VIP"],
  },
  {
    basePrice: 7433,
    departureLocation: {
      city: "Paris",
      country: "France",
      region: "Northern Europe",
      coordinates: {
        latitude: 48.8566,
        longitude: 2.3522,
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
    category: "mainstream",
    itinerary: {
      route: [
        {
          city: "Paris",
          country: "France",
          region: "Northern Europe",
          coordinates: {
            latitude: 48.8566,
            longitude: 2.3522,
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
        "Leave ordinary behind as you sail from Paris across the captivating Northern Europe. Discover the distinctive personality of each destination, from Copenhagen, Oslo, Amsterdam, Kiel.",
      distance: "944 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Paris to Copenhagen",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Copenhagen to Oslo",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from Oslo to Amsterdam",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Sailing from Amsterdam to Kiel",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Paris",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Exploring Copenhagen",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Exploring Oslo",
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
          description: "Exploring Kiel",
        },
      ],
    },
    tourCategoryId: "weekend-cruise",
    contactPersonnel: [
      {
        name: "Allison Maxwell",
        role: "Customer Service Representative",
        languages: ["English", "Polish", "Greek"], // Use the properly generated languages list
        experienceYears: 16,
        profileImage: "https://randomuser.me/api/portraits/women/37.jpg",
        contact: {
          contactEmail: "horizonkissed.horizo@velarivoyages.com",
          contactNumber: "+1-667-130-9571",
        },
      },
    ],
    title: "Horizon-Kissed Horizon of the Rosé-Washed Dreams",
    description:
      "Leave ordinary behind as you sail from Paris across the captivating Northern Europe. Discover the distinctive personality of each destination, from Copenhagen, Oslo, Amsterdam, Kiel.",
    rating: 4.2,
    tags: ["weekend-cruise"],
  },
  {
    basePrice: 3332,
    departureLocation: {
      city: "Paris",
      country: "France",
      region: "Northern Europe",
      coordinates: {
        latitude: 48.8566,
        longitude: 2.3522,
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
    hasPopularDestination: true,
    category: "premium",
    itinerary: {
      route: [
        {
          city: "Paris",
          country: "France",
          region: "Northern Europe",
          coordinates: {
            latitude: 48.8566,
            longitude: 2.3522,
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
      ],
      description:
        "Begin your journey in Paris, where tradition meets travel. This immersive odyssey reveals the finest of Northern Europe, from the beaches of London to the streets of Oslo.",
      distance: "1009 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Paris to London",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Sailing from London to Oslo",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Sailing from Oslo to Berlin",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Paris",
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
          description: "Exploring Oslo",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Exploring Berlin",
        },
      ],
    },
    tourCategoryId: "luxury-cruise",
    contactPersonnel: [
      {
        name: "Isabella Day",
        role: "Customer Service Representative",
        languages: ["English", "Polish", "Greek"], // Use the properly generated languages list
        experienceYears: 6,
        profileImage: "https://randomuser.me/api/portraits/women/27.jpg",
        contact: {
          contactEmail: "floating.exploration@velarivoyages.com",
          contactNumber: "+1-854-987-7158",
        },
      },
    ],
    title: "Floating Exploration of the Rosé-Washed Dreams",
    description:
      "Begin your journey in Paris, where tradition meets travel. This immersive odyssey reveals the finest of Northern Europe, from the beaches of London to the streets of Oslo.",
    rating: 4.8,
    tags: ["luxury", "culinary"],
  },
  {
    basePrice: 9589,
    departureLocation: {
      city: "Paris",
      country: "France",
      region: "Northern Europe",
      coordinates: {
        latitude: 48.8566,
        longitude: 2.3522,
      },
    },
    arrivalLocation: {
      city: "Paris",
      country: "France",
      region: "Northern Europe",
      coordinates: {
        latitude: 48.8566,
        longitude: 2.3522,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "entry-luxury",
    itinerary: {
      route: [
        {
          city: "Paris",
          country: "France",
          region: "Northern Europe",
          coordinates: {
            latitude: 48.8566,
            longitude: 2.3522,
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
          city: "Paris",
          country: "France",
          region: "Northern Europe",
          coordinates: {
            latitude: 48.8566,
            longitude: 2.3522,
          },
        },
      ],
      description:
        "Begin your journey in Paris, where tradition meets travel. This immersive voyage reveals the finest of Northern Europe, from the beaches of Kiel to the streets of Copenhagen.",
      distance: "677 nautical miles",
      totalDuration: "17 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Paris to Kiel",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Kiel to Copenhagen",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Sailing from Copenhagen to Oslo",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Sailing from Oslo to St. Petersburg",
        },
        {
          start: "Day 15",
          end: "Day 15",
          duration: "1 days",
          description: "Sailing from St. Petersburg to Paris",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Paris",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Kiel",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Exploring Copenhagen",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Exploring Oslo",
        },
        {
          start: "Day 13",
          end: "Day 14",
          duration: "2 days",
          description: "Exploring St. Petersburg",
        },
        {
          start: "Day 16",
          end: "Day 17",
          duration: "2 days",
          description: "Exploring Paris",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Gabriella Mason",
        role: "Customer Service Representative",
        languages: ["English", "Polish", "Greek"], // Use the properly generated languages list
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/women/30.jpg",
        contact: {
          contactEmail: "lavish.reflection.of@velarivoyages.com",
          contactNumber: "+1-827-281-3505",
        },
      },
    ],
    title: "Lavish Reflection of the Crown Jewel Capitals",
    description:
      "Begin your journey in Paris, where tradition meets travel. This immersive voyage reveals the finest of Northern Europe, from the beaches of Kiel to the streets of Copenhagen.",
    rating: 4.3,
    tags: ["adventure"],
  },
  {
    basePrice: 4318,
    departureLocation: {
      city: "Paris",
      country: "France",
      region: "Northern Europe",
      coordinates: {
        latitude: 48.8566,
        longitude: 2.3522,
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
    hasPopularDestination: true,
    category: "premium-luxury",
    itinerary: {
      route: [
        {
          city: "Paris",
          country: "France",
          region: "Northern Europe",
          coordinates: {
            latitude: 48.8566,
            longitude: 2.3522,
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
      ],
      description:
        "Sail away from Paris into the beautiful expanse of Northern Europe. Along the way, enjoy rich cultural experiences in Tallinn, Amsterdam, St. Petersburg, Helsinki, where history, nature, and cuisine collide.",
      distance: "550 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Paris to Tallinn",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Tallinn to Amsterdam",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Sailing from Amsterdam to St. Petersburg",
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
          description: "Exploring Paris",
        },
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Exploring Tallinn",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Amsterdam",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Exploring St. Petersburg",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Exploring Helsinki",
        },
      ],
    },
    tourCategoryId: "vip-cruise",
    contactPersonnel: [
      {
        name: "Scarlett West",
        role: "Customer Service Representative",
        languages: ["English", "Polish", "Greek"], // Use the properly generated languages list
        experienceYears: 19,
        profileImage: "https://randomuser.me/api/portraits/women/38.jpg",
        contact: {
          contactEmail: "refined.tranquility.@velarivoyages.com",
          contactNumber: "+1-140-479-5782",
        },
      },
    ],
    title: "Refined Tranquility of the Romantic Capital",
    description:
      "Sail away from Paris into the beautiful expanse of Northern Europe. Along the way, enjoy rich cultural experiences in Tallinn, Amsterdam, St. Petersburg, Helsinki, where history, nature, and cuisine collide.",
    rating: 4.8,
    tags: ["VIP"],
  },
];
