import { Cruise } from "@/lib/interfaces/services/cruises";

export const tampaCruises: Cruise[] = [
  {
    basePrice: 2273,
    departureLocation: {
      city: "Tampa",
      country: "United States",
      region: "Caribbean",
      coordinates: {
        latitude: 27.9506,
        longitude: -82.4572,
      },
    },
    arrivalLocation: {
      city: "Tampa",
      country: "United States",
      region: "Caribbean",
      coordinates: {
        latitude: 27.9506,
        longitude: -82.4572,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "luxury",
    itinerary: {
      route: [
        {
          city: "Tampa",
          country: "United States",
          region: "Caribbean",
          coordinates: {
            latitude: 27.9506,
            longitude: -82.4572,
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
          city: "Philipsburg",
          country: "Sint Maarten",
          coordinates: {
            latitude: 18.0167,
            longitude: -63.0587,
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
          region: "Caribbean",
          coordinates: {
            latitude: 27.9506,
            longitude: -82.4572,
          },
        },
      ],
      description:
        "Start in the vibrant city of Tampa and venture into the iconic Caribbean. Discover authentic local cultures, cuisine, and coastal wonders in St. Thomas, Philipsburg, Bermuda.",
      distance: "1068 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Tampa to St. Thomas",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Sailing from St. Thomas to Philipsburg",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from Philipsburg to Bermuda",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Sailing from Bermuda to Tampa",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Tampa",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Exploring St. Thomas",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Exploring Philipsburg",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Exploring Bermuda",
        },
        {
          start: "Day 13",
          end: "Day 13",
          duration: "1 days",
          description: "Exploring Tampa",
        },
      ],
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Henry Price",
        role: "Reservations Agent",
        languages: ["English", "Quechua", "Haitian"], // Use the properly generated languages list
        experienceYears: 15,
        profileImage: "https://randomuser.me/api/portraits/men/12.jpg",
        contact: {
          contactEmail: "sublime.reverie.of.t@velarivoyages.com",
          contactNumber: "+1-626-978-3755",
        },
      },
    ],
    title: "Sublime Reverie of the Golden Tide Rise",
    description:
      "Start in the vibrant city of Tampa and venture into the iconic Caribbean. Discover authentic local cultures, cuisine, and coastal wonders in St. Thomas, Philipsburg, Bermuda.",
    rating: 4.9,
    tags: ["expedition", "seasonal"],
  },
  {
    basePrice: 6101,
    departureLocation: {
      city: "Tampa",
      country: "United States",
      region: "Caribbean",
      coordinates: {
        latitude: 27.9506,
        longitude: -82.4572,
      },
    },
    arrivalLocation: {
      city: "George Town",
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
          city: "Tampa",
          country: "United States",
          region: "Caribbean",
          coordinates: {
            latitude: 27.9506,
            longitude: -82.4572,
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
          city: "George Town",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
      ],
      description:
        "Embark on an unforgettable mirage from the vibrant port of Tampa, where you'll discover hidden gems and iconic landmarks across the Caribbean region. With stops at Bermuda, San Juan, George Town, this journey combines cultural immersion with breathtaking scenery.",
      distance: "1092 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Tampa to Bermuda",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Bermuda to San Juan",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Sailing from San Juan to George Town",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Tampa",
        },
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Exploring Bermuda",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Exploring San Juan",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Exploring George Town",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Roger Dean",
        role: "Reservations Agent",
        languages: ["English", "Quechua", "Haitian"], // Use the properly generated languages list
        experienceYears: 6,
        profileImage: "https://randomuser.me/api/portraits/men/74.jpg",
        contact: {
          contactEmail: "mesmerizing.elevatio@velarivoyages.com",
          contactNumber: "+1-895-286-1231",
        },
      },
    ],
    title: "Mesmerizing Elevation of the Golden Tide Rise",
    description:
      "Embark on an unforgettable mirage from the vibrant port of Tampa, where you'll discover hidden gems and iconic landmarks across the Caribbean region. With stops at Bermuda, San Juan, George Town, this journey combines cultural immersion with breathtaking scenery.",
    rating: 4.3,
    tags: ["wellness"],
  },
  {
    basePrice: 9553,
    departureLocation: {
      city: "Tampa",
      country: "United States",
      region: "Caribbean",
      coordinates: {
        latitude: 27.9506,
        longitude: -82.4572,
      },
    },
    arrivalLocation: {
      city: "Tampa",
      country: "United States",
      region: "Caribbean",
      coordinates: {
        latitude: 27.9506,
        longitude: -82.4572,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "premium-luxury",
    itinerary: {
      route: [
        {
          city: "Tampa",
          country: "United States",
          region: "Caribbean",
          coordinates: {
            latitude: 27.9506,
            longitude: -82.4572,
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
          city: "Nassau",
          country: "Bahamas",
          coordinates: {
            latitude: 25.0582,
            longitude: -77.3432,
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
          city: "Tampa",
          country: "United States",
          region: "Caribbean",
          coordinates: {
            latitude: 27.9506,
            longitude: -82.4572,
          },
        },
      ],
      description:
        "Begin a captivating mystique through the Caribbean, departing Tampa. With visits to George Town, Nassau, Cozumel, each day brings a new adventure and deeper connection to the region.",
      distance: "1491 nautical miles",
      totalDuration: "16 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Tampa to George Town",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from George Town to Nassau",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Sailing from Nassau to Cozumel",
        },
        {
          start: "Day 13",
          end: "Day 14",
          duration: "2 days",
          description: "Sailing from Cozumel to Tampa",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Tampa",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring George Town",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Exploring Nassau",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Exploring Cozumel",
        },
        {
          start: "Day 15",
          end: "Day 16",
          duration: "2 days",
          description: "Exploring Tampa",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Dennis Hudson",
        role: "Reservations Agent",
        languages: ["English", "Quechua", "Haitian"], // Use the properly generated languages list
        experienceYears: 16,
        profileImage: "https://randomuser.me/api/portraits/men/8.jpg",
        contact: {
          contactEmail: "starlit.arcadia.of.t@velarivoyages.com",
          contactNumber: "+1-386-985-1929",
        },
      },
    ],
    title: "Starlit Arcadia of the Wharf of Color",
    description:
      "Begin a captivating mystique through the Caribbean, departing Tampa. With visits to George Town, Nassau, Cozumel, each day brings a new adventure and deeper connection to the region.",
    rating: 4.5,
    tags: ["cruise-line", "long-distance", "anniversary-cruise"],
  },
  {
    basePrice: 9128,
    departureLocation: {
      city: "Tampa",
      country: "United States",
      region: "Caribbean",
      coordinates: {
        latitude: 27.9506,
        longitude: -82.4572,
      },
    },
    arrivalLocation: {
      city: "St. Thomas",
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
          city: "Tampa",
          country: "United States",
          region: "Caribbean",
          coordinates: {
            latitude: 27.9506,
            longitude: -82.4572,
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
          city: "Roatán",
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
      ],
      description:
        "Step into a world of elegance and exploration from Tampa. This renaissance through the Caribbean unveils stunning stops including Bermuda, Roatán, St. Thomas, all with first-class service.",
      distance: "1457 nautical miles",
      totalDuration: "8 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Tampa to Bermuda",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Sailing from Bermuda to Roatán",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Roatán to St. Thomas",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Tampa",
        },
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Exploring Bermuda",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Exploring Roatán",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Exploring St. Thomas",
        },
      ],
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Rajesh Palmer",
        role: "Reservations Agent",
        languages: ["English", "Quechua", "Haitian"], // Use the properly generated languages list
        experienceYears: 18,
        profileImage: "https://randomuser.me/api/portraits/men/26.jpg",
        contact: {
          contactEmail: "immersive.odyssey.of@velarivoyages.com",
          contactNumber: "+1-138-984-5419",
        },
      },
    ],
    title: "Immersive Odyssey of the Sunshine Gateway",
    description:
      "Step into a world of elegance and exploration from Tampa. This renaissance through the Caribbean unveils stunning stops including Bermuda, Roatán, St. Thomas, all with first-class service.",
    rating: 4.6,
    tags: ["glacier-cruise", "cruise-getaway", "exclusive"],
  },
  {
    basePrice: 9791,
    departureLocation: {
      city: "Tampa",
      country: "United States",
      region: "Caribbean",
      coordinates: {
        latitude: 27.9506,
        longitude: -82.4572,
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
    category: "premium-luxury",
    itinerary: {
      route: [
        {
          city: "Tampa",
          country: "United States",
          region: "Caribbean",
          coordinates: {
            latitude: 27.9506,
            longitude: -82.4572,
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
          city: "St. Thomas",
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
          city: "San Juan",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
      ],
      description:
        "Experience coastal elegance on this elevation from Tampa, where the journey through Caribbean includes stops in George Town, St. Thomas, Nassau, San Juan, each more enchanting than the last.",
      distance: "1178 nautical miles",
      totalDuration: "16 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Tampa to George Town",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from George Town to St. Thomas",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Sailing from St. Thomas to Nassau",
        },
        {
          start: "Day 14",
          end: "Day 15",
          duration: "2 days",
          description: "Sailing from Nassau to San Juan",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Tampa",
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
          description: "Exploring St. Thomas",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Exploring Nassau",
        },
        {
          start: "Day 16",
          end: "Day 16",
          duration: "1 days",
          description: "Exploring San Juan",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Sean Bennett",
        role: "Reservations Agent",
        languages: ["English", "Quechua", "Haitian"], // Use the properly generated languages list
        experienceYears: 15,
        profileImage: "https://randomuser.me/api/portraits/men/11.jpg",
        contact: {
          contactEmail: "luxurious.resonance.@velarivoyages.com",
          contactNumber: "+1-887-499-9391",
        },
      },
    ],
    title: "Luxurious Resonance of the Sunshine Gateway",
    description:
      "Experience coastal elegance on this elevation from Tampa, where the journey through Caribbean includes stops in George Town, St. Thomas, Nassau, San Juan, each more enchanting than the last.",
    rating: 4.5,
    tags: ["seasonal", "cruise-excursion", "cruise-line"],
  },
  {
    basePrice: 9001,
    departureLocation: {
      city: "Tampa",
      country: "United States",
      region: "Caribbean",
      coordinates: {
        latitude: 27.9506,
        longitude: -82.4572,
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
    hasPopularDestination: true,
    category: "expedition",
    itinerary: {
      route: [
        {
          city: "Tampa",
          country: "United States",
          region: "Caribbean",
          coordinates: {
            latitude: 27.9506,
            longitude: -82.4572,
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
          city: "Philipsburg",
          country: "Sint Maarten",
          coordinates: {
            latitude: 18.0167,
            longitude: -63.0587,
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
          city: "San Juan",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
      ],
      description:
        "From bustling Tampa to serene Caribbean shores, this cruise invites you to relax, explore, and indulge. Stops at Bermuda, Philipsburg, Cozumel, San Juan deliver a balanced blend of culture and comfort.",
      distance: "872 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Tampa to Bermuda",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Sailing from Bermuda to Philipsburg",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Sailing from Philipsburg to Cozumel",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Sailing from Cozumel to San Juan",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Tampa",
        },
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Exploring Bermuda",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Exploring Philipsburg",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Exploring Cozumel",
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
        name: "Gregory Harper",
        role: "Reservations Agent",
        languages: ["English", "Quechua", "Haitian"], // Use the properly generated languages list
        experienceYears: 14,
        profileImage: "https://randomuser.me/api/portraits/men/60.jpg",
        contact: {
          contactEmail: "heavenly.eclipse.of.@velarivoyages.com",
          contactNumber: "+1-557-368-5920",
        },
      },
    ],
    title: "Heavenly Eclipse of the Rum-Laced Breezes",
    description:
      "From bustling Tampa to serene Caribbean shores, this cruise invites you to relax, explore, and indulge. Stops at Bermuda, Philipsburg, Cozumel, San Juan deliver a balanced blend of culture and comfort.",
    rating: 4.1,
    tags: ["tropical", "glacier-cruise", "themed-cruise"],
  },
  {
    basePrice: 9404,
    departureLocation: {
      city: "Tampa",
      country: "United States",
      region: "Caribbean",
      coordinates: {
        latitude: 27.9506,
        longitude: -82.4572,
      },
    },
    arrivalLocation: {
      city: "Tampa",
      country: "United States",
      region: "Caribbean",
      coordinates: {
        latitude: 27.9506,
        longitude: -82.4572,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "premium-luxury",
    itinerary: {
      route: [
        {
          city: "Tampa",
          country: "United States",
          region: "Caribbean",
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
        {
          city: "San Juan",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Tampa",
          country: "United States",
          region: "Caribbean",
          coordinates: {
            latitude: 27.9506,
            longitude: -82.4572,
          },
        },
      ],
      description:
        "From the lively departure port of Tampa, this curated awakening showcases the finest of Caribbean. With visits to Fort Lauderdale, Miami, Philipsburg, San Juan, you’ll experience a tapestry of flavors, sights, and unforgettable moments both onboard and ashore.",
      distance: "1205 nautical miles",
      totalDuration: "17 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Tampa to Fort Lauderdale",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Sailing from Fort Lauderdale to Miami",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from Miami to Philipsburg",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Sailing from Philipsburg to San Juan",
        },
        {
          start: "Day 15",
          end: "Day 16",
          duration: "2 days",
          description: "Sailing from San Juan to Tampa",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Tampa",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Exploring Fort Lauderdale",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Exploring Miami",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Exploring Philipsburg",
        },
        {
          start: "Day 13",
          end: "Day 14",
          duration: "2 days",
          description: "Exploring San Juan",
        },
        {
          start: "Day 17",
          end: "Day 17",
          duration: "1 days",
          description: "Exploring Tampa",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Gerald Dean",
        role: "Reservations Agent",
        languages: ["English", "Quechua", "Haitian"], // Use the properly generated languages list
        experienceYears: 13,
        profileImage: "https://randomuser.me/api/portraits/men/6.jpg",
        contact: {
          contactEmail: "infinite.reunion.of.@velarivoyages.com",
          contactNumber: "+1-296-541-9768",
        },
      },
    ],
    title: "Infinite Reunion of the Caribbean Rhythms",
    description:
      "From the lively departure port of Tampa, this curated awakening showcases the finest of Caribbean. With visits to Fort Lauderdale, Miami, Philipsburg, San Juan, you’ll experience a tapestry of flavors, sights, and unforgettable moments both onboard and ashore.",
    rating: 4.5,
    tags: ["exclusive"],
  },
  {
    basePrice: 2319,
    departureLocation: {
      city: "Tampa",
      country: "United States",
      region: "Caribbean",
      coordinates: {
        latitude: 27.9506,
        longitude: -82.4572,
      },
    },
    arrivalLocation: {
      city: "Nassau",
      country: "Bahamas",
      coordinates: {
        latitude: 25.0582,
        longitude: -77.3432,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "ultra-luxury",
    itinerary: {
      route: [
        {
          city: "Tampa",
          country: "United States",
          region: "Caribbean",
          coordinates: {
            latitude: 27.9506,
            longitude: -82.4572,
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
          city: "Philipsburg",
          country: "Sint Maarten",
          coordinates: {
            latitude: 18.0167,
            longitude: -63.0587,
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
      ],
      description:
        "Depart from iconic Tampa and traverse the Caribbean with visits to San Juan, Philipsburg, Nassau. Every day offers fresh discoveries, culinary delights, and moments of pure relaxation.",
      distance: "1054 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Tampa to San Juan",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from San Juan to Philipsburg",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Sailing from Philipsburg to Nassau",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Tampa",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring San Juan",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Exploring Philipsburg",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Exploring Nassau",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Andrew Coleman",
        role: "Reservations Agent",
        languages: ["English", "Quechua", "Haitian"], // Use the properly generated languages list
        experienceYears: 16,
        profileImage: "https://randomuser.me/api/portraits/men/6.jpg",
        contact: {
          contactEmail: "pearlescent.saga.of.@velarivoyages.com",
          contactNumber: "+1-620-594-1379",
        },
      },
    ],
    title: "Pearlescent Saga of the Coral Sanctuaries",
    description:
      "Depart from iconic Tampa and traverse the Caribbean with visits to San Juan, Philipsburg, Nassau. Every day offers fresh discoveries, culinary delights, and moments of pure relaxation.",
    rating: 4.1,
    tags: ["cultural"],
  },
  {
    basePrice: 6744,
    departureLocation: {
      city: "Tampa",
      country: "United States",
      region: "Caribbean",
      coordinates: {
        latitude: 27.9506,
        longitude: -82.4572,
      },
    },
    arrivalLocation: {
      city: "Nassau",
      country: "Bahamas",
      coordinates: {
        latitude: 25.0582,
        longitude: -77.3432,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "entry-luxury",
    itinerary: {
      route: [
        {
          city: "Tampa",
          country: "United States",
          region: "Caribbean",
          coordinates: {
            latitude: 27.9506,
            longitude: -82.4572,
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
          city: "Nassau",
          country: "Bahamas",
          coordinates: {
            latitude: 25.0582,
            longitude: -77.3432,
          },
        },
      ],
      description:
        "Enjoy seamless luxury on this unforgettable mythos beginning in Tampa. Visit breathtaking Caribbean locales such as Bermuda, George Town, San Juan, Nassau on this unforgettable itinerary.",
      distance: "745 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Tampa to Bermuda",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Bermuda to George Town",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Sailing from George Town to San Juan",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Sailing from San Juan to Nassau",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Tampa",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Exploring Bermuda",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring George Town",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Exploring San Juan",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Exploring Nassau",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Mason Wallace",
        role: "Reservations Agent",
        languages: ["English", "Quechua", "Haitian"], // Use the properly generated languages list
        experienceYears: 5,
        profileImage: "https://randomuser.me/api/portraits/men/43.jpg",
        contact: {
          contactEmail: "pristine.solstice.of@velarivoyages.com",
          contactNumber: "+1-587-581-9005",
        },
      },
    ],
    title: "Pristine Solstice of the Warm Currents Hub",
    description:
      "Enjoy seamless luxury on this unforgettable mythos beginning in Tampa. Visit breathtaking Caribbean locales such as Bermuda, George Town, San Juan, Nassau on this unforgettable itinerary.",
    rating: 4.7,
    tags: ["exclusive"],
  },
  {
    basePrice: 6878,
    departureLocation: {
      city: "Tampa",
      country: "United States",
      region: "Caribbean",
      coordinates: {
        latitude: 27.9506,
        longitude: -82.4572,
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
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "entry-luxury",
    itinerary: {
      route: [
        {
          city: "Tampa",
          country: "United States",
          region: "Caribbean",
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
          city: "Nassau",
          country: "Bahamas",
          coordinates: {
            latitude: 25.0582,
            longitude: -77.3432,
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
          city: "Bermuda",
          country: "Bermuda",
          coordinates: {
            latitude: 32.3214,
            longitude: -64.75737,
          },
        },
      ],
      description:
        "Your excursion begins in Tampa, where every sunset on the Caribbean horizon promises another day of discovery—from Fort Lauderdale, Nassau, St. Thomas, Bermuda to hidden ports of charm.",
      distance: "1463 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Tampa to Fort Lauderdale",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Fort Lauderdale to Nassau",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Nassau to St. Thomas",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Sailing from St. Thomas to Bermuda",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Tampa",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Fort Lauderdale",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Nassau",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Exploring St. Thomas",
        },
        {
          start: "Day 13",
          end: "Day 14",
          duration: "2 days",
          description: "Exploring Bermuda",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Paul Payne",
        role: "Reservations Agent",
        languages: ["English", "Quechua", "Haitian"], // Use the properly generated languages list
        experienceYears: 16,
        profileImage: "https://randomuser.me/api/portraits/men/32.jpg",
        contact: {
          contactEmail: "ornate.discovery.of.@velarivoyages.com",
          contactNumber: "+1-304-281-5658",
        },
      },
    ],
    title: "Ornate Discovery of the Wharf of Color",
    description:
      "Your excursion begins in Tampa, where every sunset on the Caribbean horizon promises another day of discovery—from Fort Lauderdale, Nassau, St. Thomas, Bermuda to hidden ports of charm.",
    rating: 4.1,
    tags: ["cruise-line", "cruise-adventure"],
  },
  {
    basePrice: 2718,
    departureLocation: {
      city: "Tampa",
      country: "United States",
      region: "Caribbean",
      coordinates: {
        latitude: 27.9506,
        longitude: -82.4572,
      },
    },
    arrivalLocation: {
      city: "Tampa",
      country: "United States",
      region: "Caribbean",
      coordinates: {
        latitude: 27.9506,
        longitude: -82.4572,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "luxury",
    itinerary: {
      route: [
        {
          city: "Tampa",
          country: "United States",
          region: "Caribbean",
          coordinates: {
            latitude: 27.9506,
            longitude: -82.4572,
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
          city: "Nassau",
          country: "Bahamas",
          coordinates: {
            latitude: 25.0582,
            longitude: -77.3432,
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
          city: "Tampa",
          country: "United States",
          region: "Caribbean",
          coordinates: {
            latitude: 27.9506,
            longitude: -82.4572,
          },
        },
      ],
      description:
        "Your panorama begins in Tampa, where the spirit of exploration meets modern luxury. From the sun-drenched shores of Bermuda to the historic streets of Nassau, each stop in the Caribbean will leave a lasting impression.",
      distance: "1305 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Tampa to Bermuda",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Bermuda to Nassau",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Nassau to Cozumel",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Sailing from Cozumel to Tampa",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Tampa",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Bermuda",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Nassau",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Exploring Cozumel",
        },
        {
          start: "Day 13",
          end: "Day 13",
          duration: "1 days",
          description: "Exploring Tampa",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Vincent Henderson",
        role: "Reservations Agent",
        languages: ["English", "Quechua", "Haitian"], // Use the properly generated languages list
        experienceYears: 15,
        profileImage: "https://randomuser.me/api/portraits/men/40.jpg",
        contact: {
          contactEmail: "golden.labyrinth.of.@velarivoyages.com",
          contactNumber: "+1-184-380-4910",
        },
      },
    ],
    title: "Golden Labyrinth of the Azure Horizons",
    description:
      "Your panorama begins in Tampa, where the spirit of exploration meets modern luxury. From the sun-drenched shores of Bermuda to the historic streets of Nassau, each stop in the Caribbean will leave a lasting impression.",
    rating: 4.9,
    tags: ["holiday-cruise"],
  },
  {
    basePrice: 5544,
    departureLocation: {
      city: "Tampa",
      country: "United States",
      region: "Caribbean",
      coordinates: {
        latitude: 27.9506,
        longitude: -82.4572,
      },
    },
    arrivalLocation: {
      city: "Tampa",
      country: "United States",
      region: "Caribbean",
      coordinates: {
        latitude: 27.9506,
        longitude: -82.4572,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "premium-luxury",
    itinerary: {
      route: [
        {
          city: "Tampa",
          country: "United States",
          region: "Caribbean",
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
          region: "Caribbean",
          coordinates: {
            latitude: 27.9506,
            longitude: -82.4572,
          },
        },
      ],
      description:
        "Depart from iconic Tampa and traverse the Caribbean with visits to Philipsburg, Miami. Every day offers fresh discoveries, culinary delights, and moments of pure relaxation.",
      distance: "1490 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Tampa to Philipsburg",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Philipsburg to Miami",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from Miami to Tampa",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Tampa",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Philipsburg",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring Miami",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Exploring Tampa",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Scott Curtis",
        role: "Reservations Agent",
        languages: ["English", "Quechua", "Haitian"], // Use the properly generated languages list
        experienceYears: 14,
        profileImage: "https://randomuser.me/api/portraits/men/63.jpg",
        contact: {
          contactEmail: "luxurious.journey.of@velarivoyages.com",
          contactNumber: "+1-364-545-3896",
        },
      },
    ],
    title: "Luxurious Journey of the Azure Horizons",
    description:
      "Depart from iconic Tampa and traverse the Caribbean with visits to Philipsburg, Miami. Every day offers fresh discoveries, culinary delights, and moments of pure relaxation.",
    rating: 4.7,
    tags: ["cruise-experience"],
  },
  {
    basePrice: 5500,
    departureLocation: {
      city: "Tampa",
      country: "United States",
      region: "Caribbean",
      coordinates: {
        latitude: 27.9506,
        longitude: -82.4572,
      },
    },
    arrivalLocation: {
      city: "Tampa",
      country: "United States",
      region: "Caribbean",
      coordinates: {
        latitude: 27.9506,
        longitude: -82.4572,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "ultra-luxury",
    itinerary: {
      route: [
        {
          city: "Tampa",
          country: "United States",
          region: "Caribbean",
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
          region: "Caribbean",
          coordinates: {
            latitude: 27.9506,
            longitude: -82.4572,
          },
        },
      ],
      description:
        "Cruise into cultural richness aboard this verdant sanctum departing Tampa. Savor local cuisine and uncover regional beauty from Fort Lauderdale to Miami.",
      distance: "663 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Tampa to Fort Lauderdale",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Fort Lauderdale to Miami",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Sailing from Miami to Philipsburg",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Sailing from Philipsburg to Bermuda",
        },
        {
          start: "Day 13",
          end: "Day 13",
          duration: "1 days",
          description: "Sailing from Bermuda to Tampa",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Tampa",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Fort Lauderdale",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Miami",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Exploring Philipsburg",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Exploring Bermuda",
        },
        {
          start: "Day 14",
          end: "Day 14",
          duration: "1 days",
          description: "Exploring Tampa",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Gary Mason",
        role: "Reservations Agent",
        languages: ["English", "Quechua", "Haitian"], // Use the properly generated languages list
        experienceYears: 6,
        profileImage: "https://randomuser.me/api/portraits/men/73.jpg",
        contact: {
          contactEmail: "hidden.eclipse.of.th@velarivoyages.com",
          contactNumber: "+1-304-773-6708",
        },
      },
    ],
    title: "Hidden Eclipse of the Turquoise Lagoons",
    description:
      "Cruise into cultural richness aboard this verdant sanctum departing Tampa. Savor local cuisine and uncover regional beauty from Fort Lauderdale to Miami.",
    rating: 4.0,
    tags: ["cruise-experience", "cruise-holiday"],
  },
  {
    basePrice: 4142,
    departureLocation: {
      city: "Tampa",
      country: "United States",
      region: "Caribbean",
      coordinates: {
        latitude: 27.9506,
        longitude: -82.4572,
      },
    },
    arrivalLocation: {
      city: "Nassau",
      country: "Bahamas",
      coordinates: {
        latitude: 25.0582,
        longitude: -77.3432,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "ultra-luxury",
    itinerary: {
      route: [
        {
          city: "Tampa",
          country: "United States",
          region: "Caribbean",
          coordinates: {
            latitude: 27.9506,
            longitude: -82.4572,
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
          city: "Nassau",
          country: "Bahamas",
          coordinates: {
            latitude: 25.0582,
            longitude: -77.3432,
          },
        },
      ],
      description:
        "Escape into the calm waters of Caribbean with this serene journey from Tampa. Explore vibrant markets, sun-soaked beaches, and architectural marvels at George Town, San Juan, Nassau.",
      distance: "508 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Tampa to George Town",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Sailing from George Town to San Juan",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from San Juan to Nassau",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Tampa",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Exploring George Town",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Exploring San Juan",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Exploring Nassau",
        },
      ],
    },
    tourCategoryId: "theme-cruise",
    contactPersonnel: [
      {
        name: "Wayne Porter",
        role: "Reservations Agent",
        languages: ["English", "Quechua", "Haitian"], // Use the properly generated languages list
        experienceYears: 16,
        profileImage: "https://randomuser.me/api/portraits/men/57.jpg",
        contact: {
          contactEmail: "floating.frontier.of@velarivoyages.com",
          contactNumber: "+1-327-975-2201",
        },
      },
    ],
    title: "Floating Frontier of the Warm Currents Hub",
    description:
      "Escape into the calm waters of Caribbean with this serene journey from Tampa. Explore vibrant markets, sun-soaked beaches, and architectural marvels at George Town, San Juan, Nassau.",
    rating: 4.3,
    tags: ["family-friendly", "themed-cruise"],
  },
  {
    basePrice: 4435,
    departureLocation: {
      city: "Tampa",
      country: "United States",
      region: "Caribbean",
      coordinates: {
        latitude: 27.9506,
        longitude: -82.4572,
      },
    },
    arrivalLocation: {
      city: "Tampa",
      country: "United States",
      region: "Caribbean",
      coordinates: {
        latitude: 27.9506,
        longitude: -82.4572,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "expedition",
    itinerary: {
      route: [
        {
          city: "Tampa",
          country: "United States",
          region: "Caribbean",
          coordinates: {
            latitude: 27.9506,
            longitude: -82.4572,
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
          city: "Nassau",
          country: "Bahamas",
          coordinates: {
            latitude: 25.0582,
            longitude: -77.3432,
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
          city: "Tampa",
          country: "United States",
          region: "Caribbean",
          coordinates: {
            latitude: 27.9506,
            longitude: -82.4572,
          },
        },
      ],
      description:
        "Begin your journey in Tampa, where tradition meets travel. This immersive legacy reveals the finest of Caribbean, from the beaches of Bermuda to the streets of Nassau.",
      distance: "1065 nautical miles",
      totalDuration: "16 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Tampa to Bermuda",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Sailing from Bermuda to Nassau",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Sailing from Nassau to Fort Lauderdale",
        },
        {
          start: "Day 14",
          end: "Day 14",
          duration: "1 days",
          description: "Sailing from Fort Lauderdale to Tampa",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Tampa",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Exploring Bermuda",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Exploring Nassau",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Exploring Fort Lauderdale",
        },
        {
          start: "Day 15",
          end: "Day 16",
          duration: "2 days",
          description: "Exploring Tampa",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Jesse Cooper",
        role: "Reservations Agent",
        languages: ["English", "Quechua", "Haitian"], // Use the properly generated languages list
        experienceYears: 12,
        profileImage: "https://randomuser.me/api/portraits/men/10.jpg",
        contact: {
          contactEmail: "forbidden.mirage.of.@velarivoyages.com",
          contactNumber: "+1-657-110-2892",
        },
      },
    ],
    title: "Forbidden Mirage of the Azure Horizons",
    description:
      "Begin your journey in Tampa, where tradition meets travel. This immersive legacy reveals the finest of Caribbean, from the beaches of Bermuda to the streets of Nassau.",
    rating: 4.3,
    tags: ["anniversary-cruise"],
  },
  {
    basePrice: 2738,
    departureLocation: {
      city: "Tampa",
      country: "United States",
      region: "Caribbean",
      coordinates: {
        latitude: 27.9506,
        longitude: -82.4572,
      },
    },
    arrivalLocation: {
      city: "George Town",
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
          city: "Tampa",
          country: "United States",
          region: "Caribbean",
          coordinates: {
            latitude: 27.9506,
            longitude: -82.4572,
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
          city: "Fort Lauderdale",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
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
          city: "George Town",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
      ],
      description:
        "Step into a world of elegance and exploration from Tampa. This zenith through the Caribbean unveils stunning stops including San Juan, Fort Lauderdale, Cozumel, George Town, all with first-class service.",
      distance: "872 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Tampa to San Juan",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from San Juan to Fort Lauderdale",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from Fort Lauderdale to Cozumel",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Sailing from Cozumel to George Town",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Tampa",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring San Juan",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring Fort Lauderdale",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Exploring Cozumel",
        },
        {
          start: "Day 13",
          end: "Day 13",
          duration: "1 days",
          description: "Exploring George Town",
        },
      ],
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Samantha Hunter",
        role: "Cruise Specialist",
        languages: ["English", "Portuguese", "French", "Quechua", "Guarani"], // Use the properly generated languages list
        experienceYears: 9,
        profileImage: "https://randomuser.me/api/portraits/women/95.jpg",
        contact: {
          contactEmail: "majestic.frontier.of@velarivoyages.com",
          contactNumber: "+1-635-541-9904",
        },
      },
    ],
    title: "Majestic Frontier of the Turquoise Lagoons",
    description:
      "Step into a world of elegance and exploration from Tampa. This zenith through the Caribbean unveils stunning stops including San Juan, Fort Lauderdale, Cozumel, George Town, all with first-class service.",
    rating: 4.3,
    tags: ["general", "expedition"],
  },
  {
    basePrice: 2185,
    departureLocation: {
      city: "Tampa",
      country: "United States",
      region: "Caribbean",
      coordinates: {
        latitude: 27.9506,
        longitude: -82.4572,
      },
    },
    arrivalLocation: {
      city: "Tampa",
      country: "United States",
      region: "Caribbean",
      coordinates: {
        latitude: 27.9506,
        longitude: -82.4572,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "luxury",
    itinerary: {
      route: [
        {
          city: "Tampa",
          country: "United States",
          region: "Caribbean",
          coordinates: {
            latitude: 27.9506,
            longitude: -82.4572,
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
          city: "Nassau",
          country: "Bahamas",
          coordinates: {
            latitude: 25.0582,
            longitude: -77.3432,
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
          city: "Tampa",
          country: "United States",
          region: "Caribbean",
          coordinates: {
            latitude: 27.9506,
            longitude: -82.4572,
          },
        },
      ],
      description:
        "Escape the everyday with this immersive journey through Caribbean, departing from Tampa. You'll visit St. Thomas, Nassau, Cozumel, where every stop is a new adventure.",
      distance: "1422 nautical miles",
      totalDuration: "16 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Tampa to St. Thomas",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Sailing from St. Thomas to Nassau",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Sailing from Nassau to Cozumel",
        },
        {
          start: "Day 14",
          end: "Day 14",
          duration: "1 days",
          description: "Sailing from Cozumel to Tampa",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Tampa",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Exploring St. Thomas",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Exploring Nassau",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Exploring Cozumel",
        },
        {
          start: "Day 15",
          end: "Day 16",
          duration: "2 days",
          description: "Exploring Tampa",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Linda Jennings",
        role: "Cruise Specialist",
        languages: ["English", "Portuguese", "French", "Quechua", "Guarani"], // Use the properly generated languages list
        experienceYears: 7,
        profileImage: "https://randomuser.me/api/portraits/women/11.jpg",
        contact: {
          contactEmail: "radiant.requiem.of.t@velarivoyages.com",
          contactNumber: "+1-161-428-7145",
        },
      },
    ],
    title: "Radiant Requiem of the Rum-Laced Breezes",
    description:
      "Escape the everyday with this immersive journey through Caribbean, departing from Tampa. You'll visit St. Thomas, Nassau, Cozumel, where every stop is a new adventure.",
    rating: 4.1,
    tags: ["culinary", "themed-cruise", "cruise-adventure"],
  },
  {
    basePrice: 1098,
    departureLocation: {
      city: "Tampa",
      country: "United States",
      region: "Caribbean",
      coordinates: {
        latitude: 27.9506,
        longitude: -82.4572,
      },
    },
    arrivalLocation: {
      city: "Tampa",
      country: "United States",
      region: "Caribbean",
      coordinates: {
        latitude: 27.9506,
        longitude: -82.4572,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "expedition",
    itinerary: {
      route: [
        {
          city: "Tampa",
          country: "United States",
          region: "Caribbean",
          coordinates: {
            latitude: 27.9506,
            longitude: -82.4572,
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
          city: "Cozumel",
          country: "Mexico",
          coordinates: {
            latitude: 20.4233,
            longitude: -86.9212,
          },
        },
        {
          city: "Tampa",
          country: "United States",
          region: "Caribbean",
          coordinates: {
            latitude: 27.9506,
            longitude: -82.4572,
          },
        },
      ],
      description:
        "Let the spirit of exploration guide your floating journey from Tampa. This cruise offers a balanced mix of luxury and adventure, visiting stunning locales like St. Thomas, Cozumel.",
      distance: "963 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Tampa to St. Thomas",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from St. Thomas to Cozumel",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from Cozumel to Tampa",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Tampa",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring St. Thomas",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring Cozumel",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Exploring Tampa",
        },
      ],
    },
    tourCategoryId: "anniversary-cruise",
    contactPersonnel: [
      {
        name: "Riley Fletcher",
        role: "Cruise Specialist",
        languages: ["English", "Portuguese", "French", "Quechua", "Guarani"], // Use the properly generated languages list
        experienceYears: 9,
        profileImage: "https://randomuser.me/api/portraits/women/47.jpg",
        contact: {
          contactEmail: "riveting.sanctum.of.@velarivoyages.com",
          contactNumber: "+1-520-921-8703",
        },
      },
    ],
    title: "Riveting Sanctum of the Bayfront Beauty",
    description:
      "Let the spirit of exploration guide your floating journey from Tampa. This cruise offers a balanced mix of luxury and adventure, visiting stunning locales like St. Thomas, Cozumel.",
    rating: 4.3,
    tags: ["culinary", "anniversary-cruise"],
  },
  {
    basePrice: 1422,
    departureLocation: {
      city: "Tampa",
      country: "United States",
      region: "Caribbean",
      coordinates: {
        latitude: 27.9506,
        longitude: -82.4572,
      },
    },
    arrivalLocation: {
      city: "Tampa",
      country: "United States",
      region: "Caribbean",
      coordinates: {
        latitude: 27.9506,
        longitude: -82.4572,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "luxury",
    itinerary: {
      route: [
        {
          city: "Tampa",
          country: "United States",
          region: "Caribbean",
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
          city: "Cozumel",
          country: "Mexico",
          coordinates: {
            latitude: 20.4233,
            longitude: -86.9212,
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
          city: "George Town",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Tampa",
          country: "United States",
          region: "Caribbean",
          coordinates: {
            latitude: 27.9506,
            longitude: -82.4572,
          },
        },
      ],
      description:
        "Depart from Tampa on this thoughtfully designed enigma across the Caribbean. Savor coastal charm, cultural treasures, and ocean views with stops at Fort Lauderdale, Cozumel, Nassau, George Town.",
      distance: "770 nautical miles",
      totalDuration: "16 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Tampa to Fort Lauderdale",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Fort Lauderdale to Cozumel",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Sailing from Cozumel to Nassau",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Sailing from Nassau to George Town",
        },
        {
          start: "Day 15",
          end: "Day 15",
          duration: "1 days",
          description: "Sailing from George Town to Tampa",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Tampa",
        },
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Exploring Fort Lauderdale",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Exploring Cozumel",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Exploring Nassau",
        },
        {
          start: "Day 13",
          end: "Day 14",
          duration: "2 days",
          description: "Exploring George Town",
        },
        {
          start: "Day 16",
          end: "Day 16",
          duration: "1 days",
          description: "Exploring Tampa",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Priya Crawford",
        role: "Cruise Specialist",
        languages: ["English", "Portuguese", "French", "Quechua", "Guarani"], // Use the properly generated languages list
        experienceYears: 12,
        profileImage: "https://randomuser.me/api/portraits/women/79.jpg",
        contact: {
          contactEmail: "starlit.excursion.of@velarivoyages.com",
          contactNumber: "+1-699-120-7083",
        },
      },
    ],
    title: "Starlit Excursion of the Pirate Passages",
    description:
      "Depart from Tampa on this thoughtfully designed enigma across the Caribbean. Savor coastal charm, cultural treasures, and ocean views with stops at Fort Lauderdale, Cozumel, Nassau, George Town.",
    rating: 4.9,
    tags: ["relaxation", "cruise"],
  },
  {
    basePrice: 8507,
    departureLocation: {
      city: "Tampa",
      country: "United States",
      region: "Caribbean",
      coordinates: {
        latitude: 27.9506,
        longitude: -82.4572,
      },
    },
    arrivalLocation: {
      city: "Roatán",
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
          city: "Tampa",
          country: "United States",
          region: "Caribbean",
          coordinates: {
            latitude: 27.9506,
            longitude: -82.4572,
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
          city: "Roatán",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
      ],
      description:
        "Savor each moment of this timeless escape through Caribbean, starting in Tampa. Visit renowned locations like George Town, Roatán, where adventure and relaxation intertwine.",
      distance: "1125 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Tampa to George Town",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Sailing from George Town to Roatán",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Tampa",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Exploring George Town",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Exploring Roatán",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Linda Jennings",
        role: "Cruise Specialist",
        languages: ["English", "Portuguese", "French", "Quechua", "Guarani"], // Use the properly generated languages list
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/women/33.jpg",
        contact: {
          contactEmail: "mystical.infinite.of@velarivoyages.com",
          contactNumber: "+1-914-323-6763",
        },
      },
    ],
    title: "Mystical Infinite of the Sunshine Gateway",
    description:
      "Savor each moment of this timeless escape through Caribbean, starting in Tampa. Visit renowned locations like George Town, Roatán, where adventure and relaxation intertwine.",
    rating: 4.4,
    tags: ["holiday-cruise", "anniversary-cruise", "repositioning"],
  },
];
