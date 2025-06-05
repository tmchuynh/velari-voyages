import { Cruise } from "@/lib/interfaces/services/cruises";

export const stThomasCruises: Cruise[] = [
  {
    basePrice: 5081,
    departureLocation: {
      city: "St Thomas",
      country: "U.S. Virgin Islands",
      region: "Caribbean",
      coordinates: {
        latitude: 18.3419,
        longitude: -64.9307,
      },
    },
    arrivalLocation: {
      city: "Philipsburg",
      country: "Sint Maarten",
      coordinates: {
        latitude: 18.0167,
        longitude: -63.0587,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "fjords-tour",
    itinerary: {
      route: [
        {
          city: "St Thomas",
          country: "U.S. Virgin Islands",
          region: "Caribbean",
          coordinates: {
            latitude: 18.3419,
            longitude: -64.9307,
          },
        },
        {
          city: "George Town",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Fort Lauderdale",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Philipsburg",
          country: "Sint Maarten",
          coordinates: {
            latitude: 18.0167,
            longitude: -63.0587,
          },
        },
      ],
      description:
        "Let this secret voyage redefine your idea of travel. From St Thomas, explore the Caribbean in luxurious comfort, stopping at George Town, Fort Lauderdale, Philipsburg where every port offers a new chapter.",
      distance: "846 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from St Thomas to George Town",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from George Town to Fort Lauderdale",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Sailing from Fort Lauderdale to Philipsburg",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring St Thomas",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring George Town",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Fort Lauderdale",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Exploring Philipsburg",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Jennifer Holloway",
        role: "Customer Service Representative",
        languages: ["English", "Aymara", "Haitian", "French"], // Use the properly generated languages list
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/women/18.jpg",
        contact: {
          contactEmail: "radiancedrenched.esc@velarivoyages.com",
          contactNumber: "+1-254-819-1221",
        },
      },
    ],
    title: "Radiance-Drenched Escape of the Azure Horizons",
    description:
      "Let this secret voyage redefine your idea of travel. From St Thomas, explore the Caribbean in luxurious comfort, stopping at George Town, Fort Lauderdale, Philipsburg where every port offers a new chapter.",
    rating: 4.1,
    tags: ["exclusive", "sightseeing"],
  },
  {
    basePrice: 3076,
    departureLocation: {
      city: "St Thomas",
      country: "U.S. Virgin Islands",
      region: "Caribbean",
      coordinates: {
        latitude: 18.3419,
        longitude: -64.9307,
      },
    },
    arrivalLocation: {
      city: "St Thomas",
      country: "U.S. Virgin Islands",
      region: "Caribbean",
      coordinates: {
        latitude: 18.3419,
        longitude: -64.9307,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "holiday-cruise",
    itinerary: {
      route: [
        {
          city: "St Thomas",
          country: "U.S. Virgin Islands",
          region: "Caribbean",
          coordinates: {
            latitude: 18.3419,
            longitude: -64.9307,
          },
        },
        {
          city: "Cozumel",
          country: "Mexico",
          coordinates: {
            latitude: 20.4233,
            longitude: -86.9212,
          },
        },
        {
          city: "Roatán",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "San Juan",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Miami",
          country: "United States",
          coordinates: {
            latitude: 25.7617,
            longitude: -80.1918,
          },
        },
        {
          city: "St Thomas",
          country: "U.S. Virgin Islands",
          region: "Caribbean",
          coordinates: {
            latitude: 18.3419,
            longitude: -64.9307,
          },
        },
      ],
      description:
        "Let the spirit of exploration guide your pearlescent journey from St Thomas. This cruise offers a balanced mix of luxury and adventure, visiting stunning locales like Cozumel, Roatán, San Juan, Miami.",
      distance: "1175 nautical miles",
      totalDuration: "16 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from St Thomas to Cozumel",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Cozumel to Roatán",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from Roatán to San Juan",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Sailing from San Juan to Miami",
        },
        {
          start: "Day 14",
          end: "Day 14",
          duration: "1 days",
          description: "Sailing from Miami to St Thomas",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring St Thomas",
        },
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Exploring Cozumel",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring Roatán",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Exploring San Juan",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Exploring Miami",
        },
        {
          start: "Day 15",
          end: "Day 16",
          duration: "2 days",
          description: "Exploring St Thomas",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Katherine Dean",
        role: "Customer Service Representative",
        languages: ["English", "Aymara", "Haitian", "French"], // Use the properly generated languages list
        experienceYears: 18,
        profileImage: "https://randomuser.me/api/portraits/women/64.jpg",
        contact: {
          contactEmail: "starlit.tide.of.the.@velarivoyages.com",
          contactNumber: "+1-580-941-8897",
        },
      },
    ],
    title: "Starlit Tide of the Coral Sanctuaries",
    description:
      "Let the spirit of exploration guide your pearlescent journey from St Thomas. This cruise offers a balanced mix of luxury and adventure, visiting stunning locales like Cozumel, Roatán, San Juan, Miami.",
    rating: 4.8,
    tags: ["cruise-vacation", "expedition", "seasonal"],
  },
  {
    basePrice: 4152,
    departureLocation: {
      city: "St Thomas",
      country: "U.S. Virgin Islands",
      region: "Caribbean",
      coordinates: {
        latitude: 18.3419,
        longitude: -64.9307,
      },
    },
    arrivalLocation: {
      city: "St Thomas",
      country: "U.S. Virgin Islands",
      region: "Caribbean",
      coordinates: {
        latitude: 18.3419,
        longitude: -64.9307,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "holiday-cruise",
    itinerary: {
      route: [
        {
          city: "St Thomas",
          country: "U.S. Virgin Islands",
          region: "Caribbean",
          coordinates: {
            latitude: 18.3419,
            longitude: -64.9307,
          },
        },
        {
          city: "Cozumel",
          country: "Mexico",
          coordinates: {
            latitude: 20.4233,
            longitude: -86.9212,
          },
        },
        {
          city: "Bermuda",
          country: "Bermuda",
          coordinates: {
            latitude: 32.3214,
            longitude: -64.75737,
          },
        },
        {
          city: "San Juan",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Nassau",
          country: "Bahamas",
          coordinates: {
            latitude: 25.0582,
            longitude: -77.3432,
          },
        },
        {
          city: "St Thomas",
          country: "U.S. Virgin Islands",
          region: "Caribbean",
          coordinates: {
            latitude: 18.3419,
            longitude: -64.9307,
          },
        },
      ],
      description:
        "Begin an epic lullaby from St Thomas, where the seas meet culture. Visit the remarkable ports of Cozumel, Bermuda, San Juan, Nassau while indulging in fine dining, entertainment, and unmatched hospitality.",
      distance: "960 nautical miles",
      totalDuration: "19 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from St Thomas to Cozumel",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Cozumel to Bermuda",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Sailing from Bermuda to San Juan",
        },
        {
          start: "Day 14",
          end: "Day 15",
          duration: "2 days",
          description: "Sailing from San Juan to Nassau",
        },
        {
          start: "Day 17",
          end: "Day 18",
          duration: "2 days",
          description: "Sailing from Nassau to St Thomas",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring St Thomas",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Cozumel",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Exploring Bermuda",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Exploring San Juan",
        },
        {
          start: "Day 16",
          end: "Day 16",
          duration: "1 days",
          description: "Exploring Nassau",
        },
        {
          start: "Day 19",
          end: "Day 19",
          duration: "1 days",
          description: "Exploring St Thomas",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Alice Reeves",
        role: "Customer Service Representative",
        languages: ["English", "Aymara", "Haitian", "French"], // Use the properly generated languages list
        experienceYears: 14,
        profileImage: "https://randomuser.me/api/portraits/women/87.jpg",
        contact: {
          contactEmail: "captivating.pulse.of@velarivoyages.com",
          contactNumber: "+1-206-194-8205",
        },
      },
    ],
    title: "Captivating Pulse of the Rum-Laced Breezes",
    description:
      "Begin an epic lullaby from St Thomas, where the seas meet culture. Visit the remarkable ports of Cozumel, Bermuda, San Juan, Nassau while indulging in fine dining, entertainment, and unmatched hospitality.",
    rating: 4.9,
    tags: ["cruise", "holiday-cruise"],
  },
  {
    basePrice: 5500,
    departureLocation: {
      city: "St Thomas",
      country: "U.S. Virgin Islands",
      region: "Caribbean",
      coordinates: {
        latitude: 18.3419,
        longitude: -64.9307,
      },
    },
    arrivalLocation: {
      city: "San Juan",
      country: "",
      coordinates: {
        latitude: 0,
        longitude: 0,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "weekend-cruise",
    itinerary: {
      route: [
        {
          city: "St Thomas",
          country: "U.S. Virgin Islands",
          region: "Caribbean",
          coordinates: {
            latitude: 18.3419,
            longitude: -64.9307,
          },
        },
        {
          city: "Roatán",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "George Town",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "San Juan",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
      ],
      description:
        "Let the waves lead you from St Thomas on this opulent mythos. Traverse the iconic waters of Caribbean and discover the beauty of Roatán, George Town, San Juan.",
      distance: "1480 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from St Thomas to Roatán",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Roatán to George Town",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Sailing from George Town to San Juan",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring St Thomas",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Roatán",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Exploring George Town",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Exploring San Juan",
        },
      ],
    },
    tourCategoryId: "theme-cruise",
    contactPersonnel: [
      {
        name: "Joan Ellis",
        role: "Customer Service Representative",
        languages: ["English", "Aymara", "Haitian", "French"], // Use the properly generated languages list
        experienceYears: 13,
        profileImage: "https://randomuser.me/api/portraits/women/46.jpg",
        contact: {
          contactEmail: "ornate.pilgrimage.of@velarivoyages.com",
          contactNumber: "+1-633-324-2235",
        },
      },
    ],
    title: "Ornate Pilgrimage of the Coral Sanctuaries",
    description:
      "Let the waves lead you from St Thomas on this opulent mythos. Traverse the iconic waters of Caribbean and discover the beauty of Roatán, George Town, San Juan.",
    rating: 4.3,
    tags: ["themed-cruise", "short-getaway"],
  },
  {
    basePrice: 8601,
    departureLocation: {
      city: "St Thomas",
      country: "U.S. Virgin Islands",
      region: "Caribbean",
      coordinates: {
        latitude: 18.3419,
        longitude: -64.9307,
      },
    },
    arrivalLocation: {
      city: "St Thomas",
      country: "U.S. Virgin Islands",
      region: "Caribbean",
      coordinates: {
        latitude: 18.3419,
        longitude: -64.9307,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "luxury-cruise",
    itinerary: {
      route: [
        {
          city: "St Thomas",
          country: "U.S. Virgin Islands",
          region: "Caribbean",
          coordinates: {
            latitude: 18.3419,
            longitude: -64.9307,
          },
        },
        {
          city: "George Town",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Bermuda",
          country: "Bermuda",
          coordinates: {
            latitude: 32.3214,
            longitude: -64.75737,
          },
        },
        {
          city: "St Thomas",
          country: "U.S. Virgin Islands",
          region: "Caribbean",
          coordinates: {
            latitude: 18.3419,
            longitude: -64.9307,
          },
        },
      ],
      description:
        "Let the winds of the Caribbean carry you from St Thomas to the most stunning ports in the region. With destinations like George Town, Bermuda, this sojourn redefines luxury travel.",
      distance: "680 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from St Thomas to George Town",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from George Town to Bermuda",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Sailing from Bermuda to St Thomas",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring St Thomas",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Exploring George Town",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Exploring Bermuda",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Exploring St Thomas",
        },
      ],
    },
    tourCategoryId: "weekend-cruise",
    contactPersonnel: [
      {
        name: "Sandra Harper",
        role: "Customer Service Representative",
        languages: ["English", "Aymara", "Haitian", "French"], // Use the properly generated languages list
        experienceYears: 9,
        profileImage: "https://randomuser.me/api/portraits/women/3.jpg",
        contact: {
          contactEmail: "pearlescent.solstice@velarivoyages.com",
          contactNumber: "+1-999-153-9787",
        },
      },
    ],
    title: "Pearlescent Solstice of the Azure Horizons",
    description:
      "Let the winds of the Caribbean carry you from St Thomas to the most stunning ports in the region. With destinations like George Town, Bermuda, this sojourn redefines luxury travel.",
    rating: 4.7,
    tags: ["cruise-adventure", "historical", "weekend-cruise"],
  },
  {
    basePrice: 6560,
    departureLocation: {
      city: "St Thomas",
      country: "U.S. Virgin Islands",
      region: "Caribbean",
      coordinates: {
        latitude: 18.3419,
        longitude: -64.9307,
      },
    },
    arrivalLocation: {
      city: "Bermuda",
      country: "Bermuda",
      coordinates: {
        latitude: 32.3214,
        longitude: -64.75737,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "theme-cruise",
    itinerary: {
      route: [
        {
          city: "St Thomas",
          country: "U.S. Virgin Islands",
          region: "Caribbean",
          coordinates: {
            latitude: 18.3419,
            longitude: -64.9307,
          },
        },
        {
          city: "St. Thomas",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Fort Lauderdale",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "San Juan",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Bermuda",
          country: "Bermuda",
          coordinates: {
            latitude: 32.3214,
            longitude: -64.75737,
          },
        },
      ],
      description:
        "Embark from St Thomas and traverse the Caribbean in style. Whether it’s the energy of St. Thomas or the calm of Fort Lauderdale, each destination reveals a new side of paradise.",
      distance: "1197 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from St Thomas to St. Thomas",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from St. Thomas to Fort Lauderdale",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from Fort Lauderdale to San Juan",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Sailing from San Juan to Bermuda",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring St Thomas",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Exploring St. Thomas",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Exploring Fort Lauderdale",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Exploring San Juan",
        },
        {
          start: "Day 14",
          end: "Day 14",
          duration: "1 days",
          description: "Exploring Bermuda",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Isabella Russell",
        role: "Customer Service Representative",
        languages: ["English", "Aymara", "Haitian", "French"], // Use the properly generated languages list
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/women/95.jpg",
        contact: {
          contactEmail: "oceanic.sanctum.of.t@velarivoyages.com",
          contactNumber: "+1-118-663-8600",
        },
      },
    ],
    title: "Oceanic Sanctum of the Sugarcane Skies",
    description:
      "Embark from St Thomas and traverse the Caribbean in style. Whether it’s the energy of St. Thomas or the calm of Fort Lauderdale, each destination reveals a new side of paradise.",
    rating: 5.0,
    tags: ["cruise-journey", "long-distance", "historical"],
  },
  {
    basePrice: 2813,
    departureLocation: {
      city: "St Thomas",
      country: "U.S. Virgin Islands",
      region: "Caribbean",
      coordinates: {
        latitude: 18.3419,
        longitude: -64.9307,
      },
    },
    arrivalLocation: {
      city: "Philipsburg",
      country: "Sint Maarten",
      coordinates: {
        latitude: 18.0167,
        longitude: -63.0587,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "fall-foliage-cruise",
    itinerary: {
      route: [
        {
          city: "St Thomas",
          country: "U.S. Virgin Islands",
          region: "Caribbean",
          coordinates: {
            latitude: 18.3419,
            longitude: -64.9307,
          },
        },
        {
          city: "Roatán",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "George Town",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Miami",
          country: "United States",
          coordinates: {
            latitude: 25.7617,
            longitude: -80.1918,
          },
        },
        {
          city: "Philipsburg",
          country: "Sint Maarten",
          coordinates: {
            latitude: 18.0167,
            longitude: -63.0587,
          },
        },
      ],
      description:
        "Embark on an unforgettable odyssey from the vibrant port of St Thomas, where you'll discover hidden gems and iconic landmarks across the Caribbean region. With stops at Roatán, George Town, Miami, Philipsburg, this journey combines cultural immersion with breathtaking scenery.",
      distance: "878 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from St Thomas to Roatán",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Roatán to George Town",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Sailing from George Town to Miami",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from Miami to Philipsburg",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring St Thomas",
        },
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Exploring Roatán",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Exploring George Town",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Exploring Miami",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Exploring Philipsburg",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Thandiwe Watson",
        role: "Customer Service Representative",
        languages: ["English", "Aymara", "Haitian", "French"], // Use the properly generated languages list
        experienceYears: 6,
        profileImage: "https://randomuser.me/api/portraits/women/43.jpg",
        contact: {
          contactEmail: "timeless.serenade.of@velarivoyages.com",
          contactNumber: "+1-634-356-4711",
        },
      },
    ],
    title: "Timeless Serenade of the Pirate Passages",
    description:
      "Embark on an unforgettable odyssey from the vibrant port of St Thomas, where you'll discover hidden gems and iconic landmarks across the Caribbean region. With stops at Roatán, George Town, Miami, Philipsburg, this journey combines cultural immersion with breathtaking scenery.",
    rating: 4.9,
    tags: ["seasonal"],
  },
  {
    basePrice: 6337,
    departureLocation: {
      city: "St Thomas",
      country: "U.S. Virgin Islands",
      region: "Caribbean",
      coordinates: {
        latitude: 18.3419,
        longitude: -64.9307,
      },
    },
    arrivalLocation: {
      city: "St Thomas",
      country: "U.S. Virgin Islands",
      region: "Caribbean",
      coordinates: {
        latitude: 18.3419,
        longitude: -64.9307,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "theme-cruise",
    itinerary: {
      route: [
        {
          city: "St Thomas",
          country: "U.S. Virgin Islands",
          region: "Caribbean",
          coordinates: {
            latitude: 18.3419,
            longitude: -64.9307,
          },
        },
        {
          city: "Roatán",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Miami",
          country: "United States",
          coordinates: {
            latitude: 25.7617,
            longitude: -80.1918,
          },
        },
        {
          city: "Tampa",
          country: "United States",
          coordinates: {
            latitude: 27.9506,
            longitude: -82.4572,
          },
        },
        {
          city: "Philipsburg",
          country: "Sint Maarten",
          coordinates: {
            latitude: 18.0167,
            longitude: -63.0587,
          },
        },
        {
          city: "St Thomas",
          country: "U.S. Virgin Islands",
          region: "Caribbean",
          coordinates: {
            latitude: 18.3419,
            longitude: -64.9307,
          },
        },
      ],
      description:
        "Leave stress behind with this curated discovery from St Thomas. Sail across the best of Caribbean and explore treasures like Roatán, Miami, Tampa, Philipsburg with comfort and style.",
      distance: "1031 nautical miles",
      totalDuration: "16 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from St Thomas to Roatán",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Roatán to Miami",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Miami to Tampa",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Sailing from Tampa to Philipsburg",
        },
        {
          start: "Day 14",
          end: "Day 15",
          duration: "2 days",
          description: "Sailing from Philipsburg to St Thomas",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring St Thomas",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Roatán",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Miami",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Exploring Tampa",
        },
        {
          start: "Day 13",
          end: "Day 13",
          duration: "1 days",
          description: "Exploring Philipsburg",
        },
        {
          start: "Day 16",
          end: "Day 16",
          duration: "1 days",
          description: "Exploring St Thomas",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Emily Hawkins",
        role: "Customer Service Representative",
        languages: ["English", "Aymara", "Haitian", "French"], // Use the properly generated languages list
        experienceYears: 18,
        profileImage: "https://randomuser.me/api/portraits/women/14.jpg",
        contact: {
          contactEmail: "legendary.mystique.o@velarivoyages.com",
          contactNumber: "+1-247-615-6163",
        },
      },
    ],
    title: "Legendary Mystique of the Pirate Passages",
    description:
      "Leave stress behind with this curated discovery from St Thomas. Sail across the best of Caribbean and explore treasures like Roatán, Miami, Tampa, Philipsburg with comfort and style.",
    rating: 4.2,
    tags: ["culinary", "relaxation"],
  },
  {
    basePrice: 4354,
    departureLocation: {
      city: "St Thomas",
      country: "U.S. Virgin Islands",
      region: "Caribbean",
      coordinates: {
        latitude: 18.3419,
        longitude: -64.9307,
      },
    },
    arrivalLocation: {
      city: "Miami",
      country: "United States",
      coordinates: {
        latitude: 25.7617,
        longitude: -80.1918,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "fjords-tour",
    itinerary: {
      route: [
        {
          city: "St Thomas",
          country: "U.S. Virgin Islands",
          region: "Caribbean",
          coordinates: {
            latitude: 18.3419,
            longitude: -64.9307,
          },
        },
        {
          city: "George Town",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "San Juan",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "St. Thomas",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Miami",
          country: "United States",
          coordinates: {
            latitude: 25.7617,
            longitude: -80.1918,
          },
        },
      ],
      description:
        "Your frontier begins in St Thomas, where the spirit of exploration meets modern luxury. From the sun-drenched shores of George Town to the historic streets of San Juan, each stop in the Caribbean will leave a lasting impression.",
      distance: "706 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from St Thomas to George Town",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from George Town to San Juan",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Sailing from San Juan to St. Thomas",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Sailing from St. Thomas to Miami",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring St Thomas",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Exploring George Town",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring San Juan",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Exploring St. Thomas",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Exploring Miami",
        },
      ],
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Mary Griffin",
        role: "Customer Service Representative",
        languages: ["English", "Aymara", "Haitian", "French"], // Use the properly generated languages list
        experienceYears: 12,
        profileImage: "https://randomuser.me/api/portraits/women/1.jpg",
        contact: {
          contactEmail: "oceanic.pulse.of.the@velarivoyages.com",
          contactNumber: "+1-737-837-1824",
        },
      },
    ],
    title: "Oceanic Pulse of the Pirate Passages",
    description:
      "Your frontier begins in St Thomas, where the spirit of exploration meets modern luxury. From the sun-drenched shores of George Town to the historic streets of San Juan, each stop in the Caribbean will leave a lasting impression.",
    rating: 4.7,
    tags: ["cruise-adventure", "expedition"],
  },
  {
    basePrice: 3294,
    departureLocation: {
      city: "St Thomas",
      country: "U.S. Virgin Islands",
      region: "Caribbean",
      coordinates: {
        latitude: 18.3419,
        longitude: -64.9307,
      },
    },
    arrivalLocation: {
      city: "St Thomas",
      country: "U.S. Virgin Islands",
      region: "Caribbean",
      coordinates: {
        latitude: 18.3419,
        longitude: -64.9307,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "fjords-tour",
    itinerary: {
      route: [
        {
          city: "St Thomas",
          country: "U.S. Virgin Islands",
          region: "Caribbean",
          coordinates: {
            latitude: 18.3419,
            longitude: -64.9307,
          },
        },
        {
          city: "Bermuda",
          country: "Bermuda",
          coordinates: {
            latitude: 32.3214,
            longitude: -64.75737,
          },
        },
        {
          city: "Tampa",
          country: "United States",
          coordinates: {
            latitude: 27.9506,
            longitude: -82.4572,
          },
        },
        {
          city: "Fort Lauderdale",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Philipsburg",
          country: "Sint Maarten",
          coordinates: {
            latitude: 18.0167,
            longitude: -63.0587,
          },
        },
        {
          city: "St Thomas",
          country: "U.S. Virgin Islands",
          region: "Caribbean",
          coordinates: {
            latitude: 18.3419,
            longitude: -64.9307,
          },
        },
      ],
      description:
        "Begin a captivating mirage through the Caribbean, departing St Thomas. With visits to Bermuda, Tampa, Fort Lauderdale, Philipsburg, each day brings a new adventure and deeper connection to the region.",
      distance: "571 nautical miles",
      totalDuration: "17 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from St Thomas to Bermuda",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Bermuda to Tampa",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Sailing from Tampa to Fort Lauderdale",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Sailing from Fort Lauderdale to Philipsburg",
        },
        {
          start: "Day 15",
          end: "Day 15",
          duration: "1 days",
          description: "Sailing from Philipsburg to St Thomas",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring St Thomas",
        },
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Exploring Bermuda",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Exploring Tampa",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Exploring Fort Lauderdale",
        },
        {
          start: "Day 13",
          end: "Day 14",
          duration: "2 days",
          description: "Exploring Philipsburg",
        },
        {
          start: "Day 16",
          end: "Day 17",
          duration: "2 days",
          description: "Exploring St Thomas",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Virginia Cooper",
        role: "Customer Service Representative",
        languages: ["English", "Aymara", "Haitian", "French"], // Use the properly generated languages list
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/women/12.jpg",
        contact: {
          contactEmail: "refined.pulse.of.the@velarivoyages.com",
          contactNumber: "+1-708-975-7401",
        },
      },
    ],
    title: "Refined Pulse of the Coral Sanctuaries",
    description:
      "Begin a captivating mirage through the Caribbean, departing St Thomas. With visits to Bermuda, Tampa, Fort Lauderdale, Philipsburg, each day brings a new adventure and deeper connection to the region.",
    rating: 4.6,
    tags: ["expedition"],
  },
];
