import { Cruise } from "@/lib/interfaces/services/cruises";

export const kielCruises: Cruise[] = [
  {
    basePrice: 3934,
    departureLocation: {
      city: "Kiel",
      country: "Germany",
      region: "Northern Europe",
      coordinates: {
        latitude: 54.3233,
        longitude: 10.1228,
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
    category: "ultra-luxury",
    itinerary: {
      route: [
        {
          city: "Kiel",
          country: "Germany",
          region: "Northern Europe",
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
          city: "Oslo",
          country: "Norway",
          coordinates: {
            latitude: 59.9139,
            longitude: 10.7522,
          },
        },
      ],
      description:
        "Depart from the iconic port of Kiel and sail through the enchanting Northern Europe. Explore vibrant destinations like Amsterdam, Oslo, each offering its own unique charm and local flair.",
      distance: "621 nautical miles",
      totalDuration: "8 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Kiel to Amsterdam",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Amsterdam to Oslo",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Kiel",
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
          description: "Exploring Oslo",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Peter Hudson",
        role: "Loyalty Program Representative",
        languages: ["English", "German", "Finnish", "Norwegian"], // Use the properly generated languages list
        experienceYears: 18,
        profileImage: "https://randomuser.me/api/portraits/men/97.jpg",
        contact: {
          contactEmail: "spectacular.currents@velarivoyages.com",
          contactNumber: "+1-674-218-7692",
        },
      },
    ],
    title: "Spectacular Currents of the Aurora Veil",
    description:
      "Depart from the iconic port of Kiel and sail through the enchanting Northern Europe. Explore vibrant destinations like Amsterdam, Oslo, each offering its own unique charm and local flair.",
    rating: 4.5,
    tags: ["cruise-adventure"],
  },
  {
    basePrice: 2235,
    departureLocation: {
      city: "Kiel",
      country: "Germany",
      region: "Northern Europe",
      coordinates: {
        latitude: 54.3233,
        longitude: 10.1228,
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
    category: "ultra-luxury",
    itinerary: {
      route: [
        {
          city: "Kiel",
          country: "Germany",
          region: "Northern Europe",
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
        "Join us in Kiel for a quest of a lifetime. Sail across the serene waters of Northern Europe, stopping at ports like Helsinki, Southampton, Copenhagen where timeless traditions meet modern luxuries.",
      distance: "1399 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Kiel to Helsinki",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Helsinki to Southampton",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from Southampton to Copenhagen",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Kiel",
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
          description: "Exploring Southampton",
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
        name: "Harry Dixon",
        role: "Loyalty Program Representative",
        languages: ["English", "German", "Finnish", "Norwegian"], // Use the properly generated languages list
        experienceYears: 16,
        profileImage: "https://randomuser.me/api/portraits/men/74.jpg",
        contact: {
          contactEmail: "midnight.reverie.of.@velarivoyages.com",
          contactNumber: "+1-792-910-6778",
        },
      },
    ],
    title: "Midnight Reverie of the German Maritime Hub",
    description:
      "Join us in Kiel for a quest of a lifetime. Sail across the serene waters of Northern Europe, stopping at ports like Helsinki, Southampton, Copenhagen where timeless traditions meet modern luxuries.",
    rating: 4.5,
    tags: ["wildlife"],
  },
  {
    basePrice: 3957,
    departureLocation: {
      city: "Kiel",
      country: "Germany",
      region: "Northern Europe",
      coordinates: {
        latitude: 54.3233,
        longitude: 10.1228,
      },
    },
    arrivalLocation: {
      city: "Kiel",
      country: "Germany",
      region: "Northern Europe",
      coordinates: {
        latitude: 54.3233,
        longitude: 10.1228,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "premium",
    itinerary: {
      route: [
        {
          city: "Kiel",
          country: "Germany",
          region: "Northern Europe",
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
          city: "Kiel",
          country: "Germany",
          region: "Northern Europe",
          coordinates: {
            latitude: 54.3233,
            longitude: 10.1228,
          },
        },
      ],
      description:
        "This extraordinary resonance from Kiel offers the ultimate Northern Europe exploration. Immerse yourself in the rich cultures and stunning landscapes of Helsinki and Amsterdam, creating memories that will last a lifetime.",
      distance: "1188 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Kiel to Helsinki",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Helsinki to Amsterdam",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from Amsterdam to Kiel",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Kiel",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Helsinki",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Exploring Amsterdam",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Exploring Kiel",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Gabriel Stewart",
        role: "Loyalty Program Representative",
        languages: ["English", "German", "Finnish", "Norwegian"], // Use the properly generated languages list
        experienceYears: 17,
        profileImage: "https://randomuser.me/api/portraits/men/8.jpg",
        contact: {
          contactEmail: "breathtaking.requiem@velarivoyages.com",
          contactNumber: "+1-534-293-4948",
        },
      },
    ],
    title: "Breathtaking Requiem of the Steel and Salt Artery",
    description:
      "This extraordinary resonance from Kiel offers the ultimate Northern Europe exploration. Immerse yourself in the rich cultures and stunning landscapes of Helsinki and Amsterdam, creating memories that will last a lifetime.",
    rating: 5.0,
    tags: ["cruise-adventure", "short-getaway", "cruise-journey"],
  },
  {
    basePrice: 6787,
    departureLocation: {
      city: "Kiel",
      country: "Germany",
      region: "Northern Europe",
      coordinates: {
        latitude: 54.3233,
        longitude: 10.1228,
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
    category: "premium-luxury",
    itinerary: {
      route: [
        {
          city: "Kiel",
          country: "Germany",
          region: "Northern Europe",
          coordinates: {
            latitude: 54.3233,
            longitude: 10.1228,
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
      ],
      description:
        "Let the spirit of exploration guide your tranquil journey from Kiel. This cruise offers a balanced mix of luxury and adventure, visiting stunning locales like Stockholm, St. Petersburg, Southampton.",
      distance: "1080 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Kiel to Stockholm",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Stockholm to St. Petersburg",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from St. Petersburg to Southampton",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Kiel",
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
          description: "Exploring St. Petersburg",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Exploring Southampton",
        },
      ],
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Javier Gibson",
        role: "Loyalty Program Representative",
        languages: ["English", "German", "Finnish", "Norwegian"], // Use the properly generated languages list
        experienceYears: 17,
        profileImage: "https://randomuser.me/api/portraits/men/72.jpg",
        contact: {
          contactEmail: "extraordinary.eclips@velarivoyages.com",
          contactNumber: "+1-717-268-5460",
        },
      },
    ],
    title: "Extraordinary Eclipse of the Steel and Salt Artery",
    description:
      "Let the spirit of exploration guide your tranquil journey from Kiel. This cruise offers a balanced mix of luxury and adventure, visiting stunning locales like Stockholm, St. Petersburg, Southampton.",
    rating: 4.5,
    tags: ["cruise-adventure", "expedition"],
  },
  {
    basePrice: 5618,
    departureLocation: {
      city: "Kiel",
      country: "Germany",
      region: "Northern Europe",
      coordinates: {
        latitude: 54.3233,
        longitude: 10.1228,
      },
    },
    arrivalLocation: {
      city: "Kiel",
      country: "Germany",
      region: "Northern Europe",
      coordinates: {
        latitude: 54.3233,
        longitude: 10.1228,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "luxury",
    itinerary: {
      route: [
        {
          city: "Kiel",
          country: "Germany",
          region: "Northern Europe",
          coordinates: {
            latitude: 54.3233,
            longitude: 10.1228,
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
          city: "Kiel",
          country: "Germany",
          region: "Northern Europe",
          coordinates: {
            latitude: 54.3233,
            longitude: 10.1228,
          },
        },
      ],
      description:
        "Step into a world of elegance and exploration from Kiel. This panorama through the Northern Europe unveils stunning stops including Stockholm, Dublin, Tallinn, London, all with first-class service.",
      distance: "842 nautical miles",
      totalDuration: "16 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Kiel to Stockholm",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Stockholm to Dublin",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from Dublin to Tallinn",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Sailing from Tallinn to London",
        },
        {
          start: "Day 14",
          end: "Day 15",
          duration: "2 days",
          description: "Sailing from London to Kiel",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Kiel",
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
          description: "Exploring Dublin",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Exploring Tallinn",
        },
        {
          start: "Day 13",
          end: "Day 13",
          duration: "1 days",
          description: "Exploring London",
        },
        {
          start: "Day 16",
          end: "Day 16",
          duration: "1 days",
          description: "Exploring Kiel",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Wei Hunter",
        role: "Loyalty Program Representative",
        languages: ["English", "German", "Finnish", "Norwegian"], // Use the properly generated languages list
        experienceYears: 16,
        profileImage: "https://randomuser.me/api/portraits/men/57.jpg",
        contact: {
          contactEmail: "infinite.whisper.of.@velarivoyages.com",
          contactNumber: "+1-784-942-1024",
        },
      },
    ],
    title: "Infinite Whisper of the Snow-Kissed Harbors",
    description:
      "Step into a world of elegance and exploration from Kiel. This panorama through the Northern Europe unveils stunning stops including Stockholm, Dublin, Tallinn, London, all with first-class service.",
    rating: 5.0,
    tags: ["sightseeing", "long-distance"],
  },
  {
    basePrice: 3340,
    departureLocation: {
      city: "Kiel",
      country: "Germany",
      region: "Northern Europe",
      coordinates: {
        latitude: 54.3233,
        longitude: 10.1228,
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
    category: "mainstream",
    itinerary: {
      route: [
        {
          city: "Kiel",
          country: "Germany",
          region: "Northern Europe",
          coordinates: {
            latitude: 54.3233,
            longitude: 10.1228,
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
      ],
      description:
        "Sail away from Kiel into the beautiful expanse of Northern Europe. Along the way, enjoy rich cultural experiences in Stockholm, St. Petersburg, Amsterdam, Oslo, where history, nature, and cuisine collide.",
      distance: "1351 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Kiel to Stockholm",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Stockholm to St. Petersburg",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Sailing from St. Petersburg to Amsterdam",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Sailing from Amsterdam to Oslo",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Kiel",
        },
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Exploring Stockholm",
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
          description: "Exploring Amsterdam",
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
        name: "Keith Knight",
        role: "Loyalty Program Representative",
        languages: ["English", "German", "Finnish", "Norwegian"], // Use the properly generated languages list
        experienceYears: 9,
        profileImage: "https://randomuser.me/api/portraits/men/1.jpg",
        contact: {
          contactEmail: "pristine.labyrinth.o@velarivoyages.com",
          contactNumber: "+1-541-387-8459",
        },
      },
    ],
    title: "Pristine Labyrinth of the Waves of Memory",
    description:
      "Sail away from Kiel into the beautiful expanse of Northern Europe. Along the way, enjoy rich cultural experiences in Stockholm, St. Petersburg, Amsterdam, Oslo, where history, nature, and cuisine collide.",
    rating: 4.7,
    tags: ["glacier-cruise"],
  },
  {
    basePrice: 1871,
    departureLocation: {
      city: "Kiel",
      country: "Germany",
      region: "Northern Europe",
      coordinates: {
        latitude: 54.3233,
        longitude: 10.1228,
      },
    },
    arrivalLocation: {
      city: "Kiel",
      country: "Germany",
      region: "Northern Europe",
      coordinates: {
        latitude: 54.3233,
        longitude: 10.1228,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "luxury",
    itinerary: {
      route: [
        {
          city: "Kiel",
          country: "Germany",
          region: "Northern Europe",
          coordinates: {
            latitude: 54.3233,
            longitude: 10.1228,
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
          city: "Kiel",
          country: "Germany",
          region: "Northern Europe",
          coordinates: {
            latitude: 54.3233,
            longitude: 10.1228,
          },
        },
      ],
      description:
        "Leave ordinary behind as you sail from Kiel across the captivating Northern Europe. Discover the distinctive personality of each destination, from Stockholm, Oslo.",
      distance: "1169 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Kiel to Stockholm",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Stockholm to Oslo",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from Oslo to Kiel",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Kiel",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Stockholm",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring Oslo",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Exploring Kiel",
        },
      ],
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Anthony Griffin",
        role: "Loyalty Program Representative",
        languages: ["English", "German", "Finnish", "Norwegian"], // Use the properly generated languages list
        experienceYears: 10,
        profileImage: "https://randomuser.me/api/portraits/men/69.jpg",
        contact: {
          contactEmail: "exquisite.eclipse.of@velarivoyages.com",
          contactNumber: "+1-284-378-1460",
        },
      },
    ],
    title: "Exquisite Eclipse of the Gateway to the Baltic",
    description:
      "Leave ordinary behind as you sail from Kiel across the captivating Northern Europe. Discover the distinctive personality of each destination, from Stockholm, Oslo.",
    rating: 4.6,
    tags: ["fall-cruise", "nature"],
  },
  {
    basePrice: 8279,
    departureLocation: {
      city: "Kiel",
      country: "Germany",
      region: "Northern Europe",
      coordinates: {
        latitude: 54.3233,
        longitude: 10.1228,
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
    category: "mainstream",
    itinerary: {
      route: [
        {
          city: "Kiel",
          country: "Germany",
          region: "Northern Europe",
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
        "Depart from the iconic port of Kiel and sail through the enchanting Northern Europe. Explore vibrant destinations like Amsterdam, Helsinki, Berlin, each offering its own unique charm and local flair.",
      distance: "766 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Kiel to Amsterdam",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Amsterdam to Helsinki",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Sailing from Helsinki to Berlin",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Kiel",
        },
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Exploring Amsterdam",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Exploring Helsinki",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Exploring Berlin",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Timothy Foster",
        role: "Loyalty Program Representative",
        languages: ["English", "German", "Finnish", "Norwegian"], // Use the properly generated languages list
        experienceYears: 7,
        profileImage: "https://randomuser.me/api/portraits/men/5.jpg",
        contact: {
          contactEmail: "transcendent.reflect@velarivoyages.com",
          contactNumber: "+1-140-385-1402",
        },
      },
    ],
    title: "Transcendent Reflection of the Waves of Memory",
    description:
      "Depart from the iconic port of Kiel and sail through the enchanting Northern Europe. Explore vibrant destinations like Amsterdam, Helsinki, Berlin, each offering its own unique charm and local flair.",
    rating: 4.5,
    tags: ["cultural"],
  },
  {
    basePrice: 6098,
    departureLocation: {
      city: "Kiel",
      country: "Germany",
      region: "Northern Europe",
      coordinates: {
        latitude: 54.3233,
        longitude: 10.1228,
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
    category: "premium-luxury",
    itinerary: {
      route: [
        {
          city: "Kiel",
          country: "Germany",
          region: "Northern Europe",
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
        "An unforgettable enigma awaits as you cruise from Kiel across Northern Europe. Dive into history, flavor, and culture with stops including Tallinn, Berlin, Helsinki, Copenhagen.",
      distance: "1397 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Kiel to Tallinn",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Tallinn to Berlin",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Sailing from Berlin to Helsinki",
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
          description: "Exploring Kiel",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Exploring Tallinn",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Berlin",
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
        name: "Miguel Reeves",
        role: "Loyalty Program Representative",
        languages: ["English", "German", "Finnish", "Norwegian"], // Use the properly generated languages list
        experienceYears: 19,
        profileImage: "https://randomuser.me/api/portraits/men/95.jpg",
        contact: {
          contactEmail: "captivating.excursio@velarivoyages.com",
          contactNumber: "+1-966-850-4527",
        },
      },
    ],
    title: "Captivating Excursion of the Frost-Lit Dock",
    description:
      "An unforgettable enigma awaits as you cruise from Kiel across Northern Europe. Dive into history, flavor, and culture with stops including Tallinn, Berlin, Helsinki, Copenhagen.",
    rating: 4.6,
    tags: ["cruise-holiday", "family-friendly", "cruise-excursion"],
  },
  {
    basePrice: 7794,
    departureLocation: {
      city: "Kiel",
      country: "Germany",
      region: "Northern Europe",
      coordinates: {
        latitude: 54.3233,
        longitude: 10.1228,
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
    category: "luxury",
    itinerary: {
      route: [
        {
          city: "Kiel",
          country: "Germany",
          region: "Northern Europe",
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
      ],
      description:
        "From bustling Kiel to serene Northern Europe shores, this cruise invites you to relax, explore, and indulge. Stops at Oslo, Amsterdam, Dublin deliver a balanced blend of culture and comfort.",
      distance: "1435 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Kiel to Oslo",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Oslo to Amsterdam",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Sailing from Amsterdam to Dublin",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Kiel",
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
          description: "Exploring Amsterdam",
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
        name: "Kevin Collins",
        role: "Loyalty Program Representative",
        languages: ["English", "German", "Finnish", "Norwegian"], // Use the properly generated languages list
        experienceYears: 18,
        profileImage: "https://randomuser.me/api/portraits/men/29.jpg",
        contact: {
          contactEmail: "dreamlike.mystique.o@velarivoyages.com",
          contactNumber: "+1-222-720-4274",
        },
      },
    ],
    title: "Dreamlike Mystique of the German Maritime Hub",
    description:
      "From bustling Kiel to serene Northern Europe shores, this cruise invites you to relax, explore, and indulge. Stops at Oslo, Amsterdam, Dublin deliver a balanced blend of culture and comfort.",
    rating: 4.7,
    tags: ["cruise"],
  },
  {
    basePrice: 1912,
    departureLocation: {
      city: "Kiel",
      country: "Germany",
      region: "Northern Europe",
      coordinates: {
        latitude: 54.3233,
        longitude: 10.1228,
      },
    },
    arrivalLocation: {
      city: "Kiel",
      country: "Germany",
      region: "Northern Europe",
      coordinates: {
        latitude: 54.3233,
        longitude: 10.1228,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "entry-luxury",
    itinerary: {
      route: [
        {
          city: "Kiel",
          country: "Germany",
          region: "Northern Europe",
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
          region: "Northern Europe",
          coordinates: {
            latitude: 54.3233,
            longitude: 10.1228,
          },
        },
      ],
      description:
        "An escape like no other begins in Kiel, where your serenade launches into the heart of Northern Europe. Discover the magic of Helsinki, Berlin with style and sophistication.",
      distance: "560 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Kiel to Helsinki",
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
          description: "Sailing from Berlin to Kiel",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Kiel",
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
          description: "Exploring Berlin",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Exploring Kiel",
        },
      ],
    },
    tourCategoryId: "tropical-cruise",
    contactPersonnel: [
      {
        name: "Jason Dunn",
        role: "Loyalty Program Representative",
        languages: ["English", "German", "Finnish", "Norwegian"], // Use the properly generated languages list
        experienceYears: 15,
        profileImage: "https://randomuser.me/api/portraits/men/65.jpg",
        contact: {
          contactEmail: "tranquil.odyssey.of.@velarivoyages.com",
          contactNumber: "+1-484-823-2618",
        },
      },
    ],
    title: "Tranquil Odyssey of the Gateway to the Baltic",
    description:
      "An escape like no other begins in Kiel, where your serenade launches into the heart of Northern Europe. Discover the magic of Helsinki, Berlin with style and sophistication.",
    rating: 4.6,
    tags: ["tropical"],
  },
  {
    basePrice: 4450,
    departureLocation: {
      city: "Kiel",
      country: "Germany",
      region: "Northern Europe",
      coordinates: {
        latitude: 54.3233,
        longitude: 10.1228,
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
    category: "ultra-luxury",
    itinerary: {
      route: [
        {
          city: "Kiel",
          country: "Germany",
          region: "Northern Europe",
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
          city: "Southampton",
          country: "United Kingdom",
          coordinates: {
            latitude: 50.9097,
            longitude: -1.4044,
          },
        },
      ],
      description:
        "Leave ordinary behind as you sail from Kiel across the captivating Northern Europe. Discover the distinctive personality of each destination, from Copenhagen, Southampton.",
      distance: "963 nautical miles",
      totalDuration: "7 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Kiel to Copenhagen",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Copenhagen to Southampton",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Kiel",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Copenhagen",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Southampton",
        },
      ],
    },
    tourCategoryId: "anniversary-cruise",
    contactPersonnel: [
      {
        name: "Noah Chambers",
        role: "Loyalty Program Representative",
        languages: ["English", "German", "Finnish", "Norwegian"], // Use the properly generated languages list
        experienceYears: 5,
        profileImage: "https://randomuser.me/api/portraits/men/37.jpg",
        contact: {
          contactEmail: "majestic.symphony.of@velarivoyages.com",
          contactNumber: "+1-360-597-7080",
        },
      },
    ],
    title: "Majestic Symphony of the Canal Whisper Port",
    description:
      "Leave ordinary behind as you sail from Kiel across the captivating Northern Europe. Discover the distinctive personality of each destination, from Copenhagen, Southampton.",
    rating: 4.7,
    tags: ["glacier-cruise", "long-distance", "anniversary-cruise"],
  },
  {
    basePrice: 7410,
    departureLocation: {
      city: "Kiel",
      country: "Germany",
      region: "Northern Europe",
      coordinates: {
        latitude: 54.3233,
        longitude: 10.1228,
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
    category: "expedition",
    itinerary: {
      route: [
        {
          city: "Kiel",
          country: "Germany",
          region: "Northern Europe",
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
        "Begin a captivating expedition through the Northern Europe, departing Kiel. With visits to Copenhagen, Oslo, Tallinn, Helsinki, each day brings a new adventure and deeper connection to the region.",
      distance: "849 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Kiel to Copenhagen",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Copenhagen to Oslo",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Sailing from Oslo to Tallinn",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Sailing from Tallinn to Helsinki",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Kiel",
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
          description: "Exploring Oslo",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Exploring Tallinn",
        },
        {
          start: "Day 13",
          end: "Day 14",
          duration: "2 days",
          description: "Exploring Helsinki",
        },
      ],
    },
    tourCategoryId: "luxury-cruise",
    contactPersonnel: [
      {
        name: "Liam Holloway",
        role: "Loyalty Program Representative",
        languages: ["English", "German", "Finnish", "Norwegian"], // Use the properly generated languages list
        experienceYears: 5,
        profileImage: "https://randomuser.me/api/portraits/men/68.jpg",
        contact: {
          contactEmail: "mythic.expedition.of@velarivoyages.com",
          contactNumber: "+1-306-678-4030",
        },
      },
    ],
    title: "Mythic Expedition of the Waves of Memory",
    description:
      "Begin a captivating expedition through the Northern Europe, departing Kiel. With visits to Copenhagen, Oslo, Tallinn, Helsinki, each day brings a new adventure and deeper connection to the region.",
    rating: 4.8,
    tags: ["luxury", "anniversary-cruise"],
  },
  {
    basePrice: 8129,
    departureLocation: {
      city: "Kiel",
      country: "Germany",
      region: "Northern Europe",
      coordinates: {
        latitude: 54.3233,
        longitude: 10.1228,
      },
    },
    arrivalLocation: {
      city: "Kiel",
      country: "Germany",
      region: "Northern Europe",
      coordinates: {
        latitude: 54.3233,
        longitude: 10.1228,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "ultra-luxury",
    itinerary: {
      route: [
        {
          city: "Kiel",
          country: "Germany",
          region: "Northern Europe",
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
          region: "Northern Europe",
          coordinates: {
            latitude: 54.3233,
            longitude: 10.1228,
          },
        },
      ],
      description:
        "Depart from the iconic port of Kiel and sail through the enchanting Northern Europe. Explore vibrant destinations like London, St. Petersburg, each offering its own unique charm and local flair.",
      distance: "1395 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Kiel to London",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Sailing from London to St. Petersburg",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Sailing from St. Petersburg to Kiel",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Kiel",
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
          description: "Exploring St. Petersburg",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Exploring Kiel",
        },
      ],
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Oliver Cooper",
        role: "Loyalty Program Representative",
        languages: ["English", "German", "Finnish", "Norwegian"], // Use the properly generated languages list
        experienceYears: 9,
        profileImage: "https://randomuser.me/api/portraits/men/77.jpg",
        contact: {
          contactEmail: "sundrenched.voyage.o@velarivoyages.com",
          contactNumber: "+1-827-881-5383",
        },
      },
    ],
    title: "Sun-Drenched Voyage of the Twilight Fjords",
    description:
      "Depart from the iconic port of Kiel and sail through the enchanting Northern Europe. Explore vibrant destinations like London, St. Petersburg, each offering its own unique charm and local flair.",
    rating: 4.9,
    tags: ["fall-cruise"],
  },
  {
    basePrice: 9908,
    departureLocation: {
      city: "Kiel",
      country: "Germany",
      region: "Northern Europe",
      coordinates: {
        latitude: 54.3233,
        longitude: 10.1228,
      },
    },
    arrivalLocation: {
      city: "Kiel",
      country: "Germany",
      region: "Northern Europe",
      coordinates: {
        latitude: 54.3233,
        longitude: 10.1228,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "mainstream",
    itinerary: {
      route: [
        {
          city: "Kiel",
          country: "Germany",
          region: "Northern Europe",
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
          city: "Kiel",
          country: "Germany",
          region: "Northern Europe",
          coordinates: {
            latitude: 54.3233,
            longitude: 10.1228,
          },
        },
      ],
      description:
        "Let this luxurious voyage redefine your idea of travel. From Kiel, explore the Northern Europe in luxurious comfort, stopping at Southampton, Helsinki, London where every port offers a new chapter.",
      distance: "954 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Kiel to Southampton",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Southampton to Helsinki",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Sailing from Helsinki to London",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Sailing from London to Kiel",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Kiel",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
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
          end: "Day 9",
          duration: "1 days",
          description: "Exploring London",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Exploring Kiel",
        },
      ],
    },
    tourCategoryId: "luxury-cruise",
    contactPersonnel: [
      {
        name: "Alexander Lawson",
        role: "Loyalty Program Representative",
        languages: ["English", "German", "Finnish", "Norwegian"], // Use the properly generated languages list
        experienceYears: 12,
        profileImage: "https://randomuser.me/api/portraits/men/87.jpg",
        contact: {
          contactEmail: "hidden.saga.of.the.w@velarivoyages.com",
          contactNumber: "+1-764-528-1845",
        },
      },
    ],
    title: "Hidden Saga of the Waves of Memory",
    description:
      "Let this luxurious voyage redefine your idea of travel. From Kiel, explore the Northern Europe in luxurious comfort, stopping at Southampton, Helsinki, London where every port offers a new chapter.",
    rating: 4.1,
    tags: ["luxury", "fall-cruise", "cruise-experience"],
  },
  {
    basePrice: 1663,
    departureLocation: {
      city: "Kiel",
      country: "Germany",
      region: "Northern Europe",
      coordinates: {
        latitude: 54.3233,
        longitude: 10.1228,
      },
    },
    arrivalLocation: {
      city: "Kiel",
      country: "Germany",
      region: "Northern Europe",
      coordinates: {
        latitude: 54.3233,
        longitude: 10.1228,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "premium",
    itinerary: {
      route: [
        {
          city: "Kiel",
          country: "Germany",
          region: "Northern Europe",
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
          region: "Northern Europe",
          coordinates: {
            latitude: 54.3233,
            longitude: 10.1228,
          },
        },
      ],
      description:
        "Your serenade begins in Kiel, where the spirit of exploration meets modern luxury. From the sun-drenched shores of Tallinn to the historic streets of Dublin, each stop in the Northern Europe will leave a lasting impression.",
      distance: "948 nautical miles",
      totalDuration: "19 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Kiel to Tallinn",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Tallinn to Dublin",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from Dublin to London",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Sailing from London to St. Petersburg",
        },
        {
          start: "Day 16",
          end: "Day 17",
          duration: "2 days",
          description: "Sailing from St. Petersburg to Kiel",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Kiel",
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
          description: "Exploring Dublin",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Exploring London",
        },
        {
          start: "Day 14",
          end: "Day 15",
          duration: "2 days",
          description: "Exploring St. Petersburg",
        },
        {
          start: "Day 18",
          end: "Day 19",
          duration: "2 days",
          description: "Exploring Kiel",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Katherine Hunter",
        role: "Reservations Agent",
        languages: ["English", "Swedish", "Norwegian"], // Use the properly generated languages list
        experienceYears: 9,
        profileImage: "https://randomuser.me/api/portraits/women/6.jpg",
        contact: {
          contactEmail: "horizonkissed.lullab@velarivoyages.com",
          contactNumber: "+1-170-239-6072",
        },
      },
    ],
    title: "Horizon-Kissed Lullaby of the Timbered Waterfronts",
    description:
      "Your serenade begins in Kiel, where the spirit of exploration meets modern luxury. From the sun-drenched shores of Tallinn to the historic streets of Dublin, each stop in the Northern Europe will leave a lasting impression.",
    rating: 4.7,
    tags: ["sightseeing", "repositioning"],
  },
  {
    basePrice: 5867,
    departureLocation: {
      city: "Kiel",
      country: "Germany",
      region: "Northern Europe",
      coordinates: {
        latitude: 54.3233,
        longitude: 10.1228,
      },
    },
    arrivalLocation: {
      city: "Kiel",
      country: "Germany",
      region: "Northern Europe",
      coordinates: {
        latitude: 54.3233,
        longitude: 10.1228,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "mainstream",
    itinerary: {
      route: [
        {
          city: "Kiel",
          country: "Germany",
          region: "Northern Europe",
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
          region: "Northern Europe",
          coordinates: {
            latitude: 54.3233,
            longitude: 10.1228,
          },
        },
      ],
      description:
        "Sail away from the charming harbor of Kiel on this refined journey across Northern Europe. Uncover the beauty and history of Southampton, Tallinn, St. Petersburg, Copenhagen with curated excursions, world-class cuisine, and exceptional service.",
      distance: "743 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Kiel to Southampton",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Southampton to Tallinn",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from Tallinn to St. Petersburg",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Sailing from St. Petersburg to Copenhagen",
        },
        {
          start: "Day 14",
          end: "Day 14",
          duration: "1 days",
          description: "Sailing from Copenhagen to Kiel",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Kiel",
        },
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Exploring Southampton",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring Tallinn",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Exploring St. Petersburg",
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
          description: "Exploring Kiel",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Amelia Graves",
        role: "Reservations Agent",
        languages: ["English", "Swedish", "Norwegian"], // Use the properly generated languages list
        experienceYears: 18,
        profileImage: "https://randomuser.me/api/portraits/women/62.jpg",
        contact: {
          contactEmail: "luminous.renaissance@velarivoyages.com",
          contactNumber: "+1-687-334-5844",
        },
      },
    ],
    title: "Luminous Renaissance of the Gateway to the Baltic",
    description:
      "Sail away from the charming harbor of Kiel on this refined journey across Northern Europe. Uncover the beauty and history of Southampton, Tallinn, St. Petersburg, Copenhagen with curated excursions, world-class cuisine, and exceptional service.",
    rating: 4.1,
    tags: ["cruise-ship", "cruise"],
  },
  {
    basePrice: 5398,
    departureLocation: {
      city: "Kiel",
      country: "Germany",
      region: "Northern Europe",
      coordinates: {
        latitude: 54.3233,
        longitude: 10.1228,
      },
    },
    arrivalLocation: {
      city: "Kiel",
      country: "Germany",
      region: "Northern Europe",
      coordinates: {
        latitude: 54.3233,
        longitude: 10.1228,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "entry-luxury",
    itinerary: {
      route: [
        {
          city: "Kiel",
          country: "Germany",
          region: "Northern Europe",
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
          region: "Northern Europe",
          coordinates: {
            latitude: 54.3233,
            longitude: 10.1228,
          },
        },
      ],
      description:
        "Join us in Kiel for a wanderlust of a lifetime. Sail across the serene waters of Northern Europe, stopping at ports like St. Petersburg, Oslo where timeless traditions meet modern luxuries.",
      distance: "1375 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Kiel to St. Petersburg",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from St. Petersburg to Oslo",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Sailing from Oslo to Kiel",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Kiel",
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
          description: "Exploring Oslo",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Exploring Kiel",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Samantha Mitchell",
        role: "Reservations Agent",
        languages: ["English", "Swedish", "Norwegian"], // Use the properly generated languages list
        experienceYears: 6,
        profileImage: "https://randomuser.me/api/portraits/women/42.jpg",
        contact: {
          contactEmail: "idyllic.pilgrimage.o@velarivoyages.com",
          contactNumber: "+1-916-589-3420",
        },
      },
    ],
    title: "Idyllic Pilgrimage of the Waves of Memory",
    description:
      "Join us in Kiel for a wanderlust of a lifetime. Sail across the serene waters of Northern Europe, stopping at ports like St. Petersburg, Oslo where timeless traditions meet modern luxuries.",
    rating: 4.2,
    tags: ["relaxation", "short-getaway", "cruise-line"],
  },
  {
    basePrice: 4847,
    departureLocation: {
      city: "Kiel",
      country: "Germany",
      region: "Northern Europe",
      coordinates: {
        latitude: 54.3233,
        longitude: 10.1228,
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
    category: "mainstream",
    itinerary: {
      route: [
        {
          city: "Kiel",
          country: "Germany",
          region: "Northern Europe",
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
        "From bustling Kiel to serene Northern Europe shores, this cruise invites you to relax, explore, and indulge. Stops at Tallinn, Berlin, Dublin deliver a balanced blend of culture and comfort.",
      distance: "732 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Kiel to Tallinn",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Tallinn to Berlin",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Sailing from Berlin to Dublin",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Kiel",
        },
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Exploring Tallinn",
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
          description: "Exploring Dublin",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Melissa Sutton",
        role: "Reservations Agent",
        languages: ["English", "Swedish", "Norwegian"], // Use the properly generated languages list
        experienceYears: 12,
        profileImage: "https://randomuser.me/api/portraits/women/23.jpg",
        contact: {
          contactEmail: "ornate.haven.of.the.@velarivoyages.com",
          contactNumber: "+1-318-170-5389",
        },
      },
    ],
    title: "Ornate Haven of the Aurora Veil",
    description:
      "From bustling Kiel to serene Northern Europe shores, this cruise invites you to relax, explore, and indulge. Stops at Tallinn, Berlin, Dublin deliver a balanced blend of culture and comfort.",
    rating: 4.3,
    tags: ["cruise-getaway", "adventure"],
  },
  {
    basePrice: 9128,
    departureLocation: {
      city: "Kiel",
      country: "Germany",
      region: "Northern Europe",
      coordinates: {
        latitude: 54.3233,
        longitude: 10.1228,
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
    category: "expedition",
    itinerary: {
      route: [
        {
          city: "Kiel",
          country: "Germany",
          region: "Northern Europe",
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
      ],
      description:
        "Cruise into cultural richness aboard this majestic tranquility departing Kiel. Savor local cuisine and uncover regional beauty from Dublin to Copenhagen.",
      distance: "1378 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Kiel to Dublin",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Dublin to Copenhagen",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Copenhagen to Southampton",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Sailing from Southampton to London",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Kiel",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Dublin",
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
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Exploring London",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Olivia Mason",
        role: "Reservations Agent",
        languages: ["English", "Swedish", "Norwegian"], // Use the properly generated languages list
        experienceYears: 14,
        profileImage: "https://randomuser.me/api/portraits/women/2.jpg",
        contact: {
          contactEmail: "pearlescent.tranquil@velarivoyages.com",
          contactNumber: "+1-220-823-2938",
        },
      },
    ],
    title: "Pearlescent Tranquility of the Windswept Elegance",
    description:
      "Cruise into cultural richness aboard this majestic tranquility departing Kiel. Savor local cuisine and uncover regional beauty from Dublin to Copenhagen.",
    rating: 4.5,
    tags: ["family-friendly", "short-getaway", "sightseeing"],
  },
];
