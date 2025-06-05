import { Cruise } from "@/lib/interfaces/services/cruises";

export const londonCruises: Cruise[] = [
  {
    basePrice: 6227,
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
          city: "Tallinn",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
      ],
      description:
        "Step into a world of elegance and exploration from London. This solstice through the Northern Europe unveils stunning stops including Dublin, Tallinn, all with first-class service.",
      distance: "910 nautical miles",
      totalDuration: "8 days",
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
          description: "Sailing from Dublin to Tallinn",
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
          description: "Exploring Tallinn",
        },
      ],
    },
    tourCategoryId: "holiday-cruise",
    contactPersonnel: [
      {
        name: "Eugene Montgomery",
        role: "Customer Service Representative",
        languages: ["English", "Spanish", "Portuguese", "German", "Dutch"], // Use the properly generated languages list
        experienceYears: 16,
        profileImage: "https://randomuser.me/api/portraits/men/23.jpg",
        contact: {
          contactEmail: "serene.saga.of.the.t@velarivoyages.com",
          contactNumber: "+1-553-737-8799",
        },
      },
    ],
    title: "Serene Saga of the Thames Capital",
    description:
      "Step into a world of elegance and exploration from London. This solstice through the Northern Europe unveils stunning stops including Dublin, Tallinn, all with first-class service.",
    rating: 4.1,
    tags: ["cruise-adventure", "sightseeing", "holiday-cruise"],
  },
  {
    basePrice: 6584,
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
    hasPopularDestination: true,
    category: "ultra-luxury",
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
      ],
      description:
        "Depart from the iconic port of London and sail through the enchanting Northern Europe. Explore vibrant destinations like Oslo, Southampton, Berlin, each offering its own unique charm and local flair.",
      distance: "1382 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from London to Oslo",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Oslo to Southampton",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Southampton to Berlin",
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
          description: "Exploring Oslo",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Southampton",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Exploring Berlin",
        },
      ],
    },
    tourCategoryId: "anniversary-cruise",
    contactPersonnel: [
      {
        name: "Austin Sutton",
        role: "Customer Service Representative",
        languages: ["English", "Spanish", "Portuguese", "German", "Dutch"], // Use the properly generated languages list
        experienceYears: 7,
        profileImage: "https://randomuser.me/api/portraits/men/85.jpg",
        contact: {
          contactEmail: "radiancedrenched.fro@velarivoyages.com",
          contactNumber: "+1-146-124-2605",
        },
      },
    ],
    title: "Radiance-Drenched Frontier of the Crown Jewel Capitals",
    description:
      "Depart from the iconic port of London and sail through the enchanting Northern Europe. Explore vibrant destinations like Oslo, Southampton, Berlin, each offering its own unique charm and local flair.",
    rating: 4.7,
    tags: ["nature", "anniversary-cruise"],
  },
  {
    basePrice: 3860,
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
        "Depart from London on this thoughtfully designed lullaby across the Northern Europe. Savor coastal charm, cultural treasures, and ocean views with stops at Southampton, Helsinki.",
      distance: "1409 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from London to Southampton",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Southampton to Helsinki",
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
          end: "Day 2",
          duration: "2 days",
          description: "Exploring London",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Southampton",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Exploring Helsinki",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Exploring London",
        },
      ],
    },
    tourCategoryId: "holiday-cruise",
    contactPersonnel: [
      {
        name: "Willie Hunter",
        role: "Customer Service Representative",
        languages: ["English", "Spanish", "Portuguese", "German", "Dutch"], // Use the properly generated languages list
        experienceYears: 12,
        profileImage: "https://randomuser.me/api/portraits/men/49.jpg",
        contact: {
          contactEmail: "eternal.eclipse.of.t@velarivoyages.com",
          contactNumber: "+1-104-539-9039",
        },
      },
    ],
    title: "Eternal Eclipse of the Fairy Tale Villages",
    description:
      "Depart from London on this thoughtfully designed lullaby across the Northern Europe. Savor coastal charm, cultural treasures, and ocean views with stops at Southampton, Helsinki.",
    rating: 4.1,
    tags: ["seasonal"],
  },
  {
    basePrice: 7108,
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
        "Embark from London and traverse the Northern Europe in style. Whether it’s the energy of Berlin or the calm of Stockholm, each destination reveals a new side of paradise.",
      distance: "829 nautical miles",
      totalDuration: "16 days",
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
          description: "Sailing from Berlin to Stockholm",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Sailing from Stockholm to St. Petersburg",
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
          end: "Day 9",
          duration: "1 days",
          description: "Exploring Stockholm",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
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
        name: "Jesse Mason",
        role: "Customer Service Representative",
        languages: ["English", "Spanish", "Portuguese", "German", "Dutch"], // Use the properly generated languages list
        experienceYears: 9,
        profileImage: "https://randomuser.me/api/portraits/men/43.jpg",
        contact: {
          contactEmail: "infinite.horizon.of.@velarivoyages.com",
          contactNumber: "+1-397-482-1140",
        },
      },
    ],
    title: "Infinite Horizon of the Royal Metropolis",
    description:
      "Embark from London and traverse the Northern Europe in style. Whether it’s the energy of Berlin or the calm of Stockholm, each destination reveals a new side of paradise.",
    rating: 4.9,
    tags: ["holiday-cruise", "cruise-experience"],
  },
  {
    basePrice: 6411,
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
    category: "premium",
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
          city: "Tallinn",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
      ],
      description:
        "From the lively departure port of London, this curated pulse showcases the finest of Northern Europe. With visits to St. Petersburg, Tallinn, you’ll experience a tapestry of flavors, sights, and unforgettable moments both onboard and ashore.",
      distance: "1322 nautical miles",
      totalDuration: "7 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from London to St. Petersburg",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from St. Petersburg to Tallinn",
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
          description: "Exploring St. Petersburg",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Tallinn",
        },
      ],
    },
    tourCategoryId: "vip-cruise",
    contactPersonnel: [
      {
        name: "Ronald Keller",
        role: "Customer Service Representative",
        languages: ["English", "Spanish", "Portuguese", "German", "Dutch"], // Use the properly generated languages list
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/men/18.jpg",
        contact: {
          contactEmail: "secret.discovery.of.@velarivoyages.com",
          contactNumber: "+1-960-304-6286",
        },
      },
    ],
    title: "Secret Discovery of the Crown Jewel Capitals",
    description:
      "From the lively departure port of London, this curated pulse showcases the finest of Northern Europe. With visits to St. Petersburg, Tallinn, you’ll experience a tapestry of flavors, sights, and unforgettable moments both onboard and ashore.",
    rating: 4.1,
    tags: ["nature", "VIP", "themed-cruise"],
  },
  {
    basePrice: 1212,
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
    category: "premium",
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
          coordinates: {
            latitude: 55.6761,
            longitude: 12.5683,
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
        "Your elevation begins in London, where the spirit of exploration meets modern luxury. From the sun-drenched shores of St. Petersburg to the historic streets of Oslo, each stop in the Northern Europe will leave a lasting impression.",
      distance: "983 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from London to St. Petersburg",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Sailing from St. Petersburg to Oslo",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Sailing from Oslo to Copenhagen",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Sailing from Copenhagen to London",
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
          description: "Exploring St. Petersburg",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Exploring Oslo",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Exploring Copenhagen",
        },
        {
          start: "Day 14",
          end: "Day 14",
          duration: "1 days",
          description: "Exploring London",
        },
      ],
    },
    tourCategoryId: "vip-cruise",
    contactPersonnel: [
      {
        name: "James Douglas",
        role: "Customer Service Representative",
        languages: ["English", "Spanish", "Portuguese", "German", "Dutch"], // Use the properly generated languages list
        experienceYears: 7,
        profileImage: "https://randomuser.me/api/portraits/men/91.jpg",
        contact: {
          contactEmail: "horizonkissed.mystiq@velarivoyages.com",
          contactNumber: "+1-940-266-1043",
        },
      },
    ],
    title: "Horizon-Kissed Mystique of the Thames Capital",
    description:
      "Your elevation begins in London, where the spirit of exploration meets modern luxury. From the sun-drenched shores of St. Petersburg to the historic streets of Oslo, each stop in the Northern Europe will leave a lasting impression.",
    rating: 4.1,
    tags: ["VIP"],
  },
  {
    basePrice: 4776,
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
        "Escape to sea from London on a starlit voyage exploring the magic of Northern Europe. Visit unforgettable locales like St. Petersburg, Tallinn, where each stop inspires awe.",
      distance: "798 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from London to St. Petersburg",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from St. Petersburg to Tallinn",
        },
        {
          start: "Day 10",
          end: "Day 11",
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
          description: "Exploring St. Petersburg",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Exploring Tallinn",
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
        name: "Jerry Stewart",
        role: "Customer Service Representative",
        languages: ["English", "Spanish", "Portuguese", "German", "Dutch"], // Use the properly generated languages list
        experienceYears: 17,
        profileImage: "https://randomuser.me/api/portraits/men/70.jpg",
        contact: {
          contactEmail: "mythic.mythos.of.the@velarivoyages.com",
          contactNumber: "+1-606-718-1244",
        },
      },
    ],
    title: "Mythic Mythos of the Clocktower Shadow",
    description:
      "Escape to sea from London on a starlit voyage exploring the magic of Northern Europe. Visit unforgettable locales like St. Petersburg, Tallinn, where each stop inspires awe.",
    rating: 4.0,
    tags: ["general"],
  },
  {
    basePrice: 1194,
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
      city: "Oslo",
      country: "",
      coordinates: {
        latitude: 0,
        longitude: 0,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
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
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
      ],
      description:
        "Step into a world of elegance and exploration from London. This sanctum through the Northern Europe unveils stunning stops including Stockholm, Kiel, Oslo, all with first-class service.",
      distance: "1158 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from London to Stockholm",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Stockholm to Kiel",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from Kiel to Oslo",
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
          description: "Exploring Stockholm",
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
          description: "Exploring Oslo",
        },
      ],
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Eugene Bennett",
        role: "Customer Service Representative",
        languages: ["English", "Spanish", "Portuguese", "German", "Dutch"], // Use the properly generated languages list
        experienceYears: 15,
        profileImage: "https://randomuser.me/api/portraits/men/9.jpg",
        contact: {
          contactEmail: "aweinspiring.symphon@velarivoyages.com",
          contactNumber: "+1-100-743-6608",
        },
      },
    ],
    title: "Awe-Inspiring Symphony of the Crown Jewel Capitals",
    description:
      "Step into a world of elegance and exploration from London. This sanctum through the Northern Europe unveils stunning stops including Stockholm, Kiel, Oslo, all with first-class service.",
    rating: 4.8,
    tags: ["expedition", "cruise-getaway", "glacier-cruise"],
  },
  {
    basePrice: 8295,
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
    category: "premium",
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
        "Leave ordinary behind as you sail from London across the captivating Northern Europe. Discover the distinctive personality of each destination, from Amsterdam, Stockholm, St. Petersburg.",
      distance: "1180 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from London to Amsterdam",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Amsterdam to Stockholm",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from Stockholm to St. Petersburg",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
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
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Amsterdam",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring Stockholm",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Exploring St. Petersburg",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Exploring London",
        },
      ],
    },
    tourCategoryId: "luxury-cruise",
    contactPersonnel: [
      {
        name: "Bruce Marshall",
        role: "Customer Service Representative",
        languages: ["English", "Spanish", "Portuguese", "German", "Dutch"], // Use the properly generated languages list
        experienceYears: 17,
        profileImage: "https://randomuser.me/api/portraits/men/8.jpg",
        contact: {
          contactEmail: "moonlit.panorama.of.@velarivoyages.com",
          contactNumber: "+1-977-777-6075",
        },
      },
    ],
    title: "Moonlit Panorama of the Windswept Elegance",
    description:
      "Leave ordinary behind as you sail from London across the captivating Northern Europe. Discover the distinctive personality of each destination, from Amsterdam, Stockholm, St. Petersburg.",
    rating: 4.9,
    tags: ["luxury"],
  },
  {
    basePrice: 2096,
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
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "ultra-luxury",
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
      ],
      description:
        "Depart from iconic London and traverse the Northern Europe with visits to Helsinki, Stockholm. Every day offers fresh discoveries, culinary delights, and moments of pure relaxation.",
      distance: "561 nautical miles",
      totalDuration: "7 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from London to Helsinki",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Helsinki to Stockholm",
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
          description: "Exploring Helsinki",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Stockholm",
        },
      ],
    },
    tourCategoryId: "tropical-cruise",
    contactPersonnel: [
      {
        name: "Roy Grant",
        role: "Customer Service Representative",
        languages: ["English", "Spanish", "Portuguese", "German", "Dutch"], // Use the properly generated languages list
        experienceYears: 10,
        profileImage: "https://randomuser.me/api/portraits/men/14.jpg",
        contact: {
          contactEmail: "velvet.wanderlust.of@velarivoyages.com",
          contactNumber: "+1-811-289-9135",
        },
      },
    ],
    title: "Velvet Wanderlust of the Fairy Tale Villages",
    description:
      "Depart from iconic London and traverse the Northern Europe with visits to Helsinki, Stockholm. Every day offers fresh discoveries, culinary delights, and moments of pure relaxation.",
    rating: 4.1,
    tags: ["relaxation", "sightseeing"],
  },
];
