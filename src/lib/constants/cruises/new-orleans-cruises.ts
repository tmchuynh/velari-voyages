import { Cruise } from "@/lib/interfaces/services/cruises";

export const newOrleansCruises: Cruise[] = [
  {
    basePrice: 3997,
    departureLocation: {
      city: "New Orleans",
      country: "United States",
      region: "Caribbean",
      coordinates: {
        latitude: 29.9511,
        longitude: -90.0715,
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
    hasPopularDestination: false,
    category: "luxury",
    itinerary: {
      route: [
        {
          city: "New Orleans",
          country: "United States",
          region: "Caribbean",
          coordinates: {
            latitude: 29.9511,
            longitude: -90.0715,
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
          coordinates: {
            latitude: 27.9506,
            longitude: -82.4572,
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
        "Unwind and explore on this symphony through Caribbean, departing from New Orleans. With every stop—from San Juan to Roatán—you’ll collect memories that last a lifetime.",
      distance: "1333 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from New Orleans to San Juan",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from San Juan to Tampa",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Sailing from Tampa to Roatán",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring New Orleans",
        },
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Exploring San Juan",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Exploring Tampa",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Exploring Roatán",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Jordan Keller",
        role: "Loyalty Program Representative",
        languages: ["English", "Quechua", "French", "Spanish"], // Use the properly generated languages list
        experienceYears: 18,
        profileImage: "https://randomuser.me/api/portraits/men/34.jpg",
        contact: {
          contactEmail: "panoramic.solstice.o@velarivoyages.com",
          contactNumber: "+1-899-187-3003",
        },
      },
    ],
    title: "Panoramic Solstice of the Bayou Beat",
    description:
      "Unwind and explore on this symphony through Caribbean, departing from New Orleans. With every stop—from San Juan to Roatán—you’ll collect memories that last a lifetime.",
    rating: 4.0,
    tags: ["general"],
  },
  {
    basePrice: 6221,
    departureLocation: {
      city: "New Orleans",
      country: "United States",
      region: "Caribbean",
      coordinates: {
        latitude: 29.9511,
        longitude: -90.0715,
      },
    },
    arrivalLocation: {
      city: "New Orleans",
      country: "United States",
      region: "Caribbean",
      coordinates: {
        latitude: 29.9511,
        longitude: -90.0715,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "mainstream",
    itinerary: {
      route: [
        {
          city: "New Orleans",
          country: "United States",
          region: "Caribbean",
          coordinates: {
            latitude: 29.9511,
            longitude: -90.0715,
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
          city: "New Orleans",
          country: "United States",
          region: "Caribbean",
          coordinates: {
            latitude: 29.9511,
            longitude: -90.0715,
          },
        },
      ],
      description:
        "Start in the vibrant city of New Orleans and venture into the iconic Caribbean. Discover authentic local cultures, cuisine, and coastal wonders in San Juan, Roatán, Miami.",
      distance: "640 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from New Orleans to San Juan",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Sailing from San Juan to Roatán",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Sailing from Roatán to Miami",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Sailing from Miami to New Orleans",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring New Orleans",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Exploring San Juan",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Exploring Roatán",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Exploring Miami",
        },
        {
          start: "Day 13",
          end: "Day 14",
          duration: "2 days",
          description: "Exploring New Orleans",
        },
      ],
    },
    tourCategoryId: "anniversary-cruise",
    contactPersonnel: [
      {
        name: "Michael Gibson",
        role: "Loyalty Program Representative",
        languages: ["English", "Quechua", "French", "Spanish"], // Use the properly generated languages list
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/men/70.jpg",
        contact: {
          contactEmail: "opulent.resonance.of@velarivoyages.com",
          contactNumber: "+1-107-877-1078",
        },
      },
    ],
    title: "Opulent Resonance of the Parade of Shadows",
    description:
      "Start in the vibrant city of New Orleans and venture into the iconic Caribbean. Discover authentic local cultures, cuisine, and coastal wonders in San Juan, Roatán, Miami.",
    rating: 4.6,
    tags: ["anniversary-cruise"],
  },
  {
    basePrice: 8595,
    departureLocation: {
      city: "New Orleans",
      country: "United States",
      region: "Caribbean",
      coordinates: {
        latitude: 29.9511,
        longitude: -90.0715,
      },
    },
    arrivalLocation: {
      city: "New Orleans",
      country: "United States",
      region: "Caribbean",
      coordinates: {
        latitude: 29.9511,
        longitude: -90.0715,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "mainstream",
    itinerary: {
      route: [
        {
          city: "New Orleans",
          country: "United States",
          region: "Caribbean",
          coordinates: {
            latitude: 29.9511,
            longitude: -90.0715,
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
          city: "New Orleans",
          country: "United States",
          region: "Caribbean",
          coordinates: {
            latitude: 29.9511,
            longitude: -90.0715,
          },
        },
      ],
      description:
        "Step aboard in New Orleans and begin a gilded journey through the scenic Caribbean. From historic cities to coastal hideaways like Fort Lauderdale, Philipsburg, Cozumel, Roatán, every day is unforgettable.",
      distance: "564 nautical miles",
      totalDuration: "17 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from New Orleans to Fort Lauderdale",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Fort Lauderdale to Philipsburg",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Sailing from Philipsburg to Cozumel",
        },
        {
          start: "Day 13",
          end: "Day 14",
          duration: "2 days",
          description: "Sailing from Cozumel to Roatán",
        },
        {
          start: "Day 16",
          end: "Day 16",
          duration: "1 days",
          description: "Sailing from Roatán to New Orleans",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring New Orleans",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Fort Lauderdale",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Exploring Philipsburg",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Exploring Cozumel",
        },
        {
          start: "Day 15",
          end: "Day 15",
          duration: "1 days",
          description: "Exploring Roatán",
        },
        {
          start: "Day 17",
          end: "Day 17",
          duration: "1 days",
          description: "Exploring New Orleans",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Mason Lawson",
        role: "Loyalty Program Representative",
        languages: ["English", "Quechua", "French", "Spanish"], // Use the properly generated languages list
        experienceYears: 9,
        profileImage: "https://randomuser.me/api/portraits/men/60.jpg",
        contact: {
          contactEmail: "epic.tide.of.the.sun@velarivoyages.com",
          contactNumber: "+1-137-934-6378",
        },
      },
    ],
    title: "Epic Tide of the Sun-Kissed Archipelago",
    description:
      "Step aboard in New Orleans and begin a gilded journey through the scenic Caribbean. From historic cities to coastal hideaways like Fort Lauderdale, Philipsburg, Cozumel, Roatán, every day is unforgettable.",
    rating: 4.7,
    tags: ["cultural", "cruise-holiday"],
  },
  {
    basePrice: 2328,
    departureLocation: {
      city: "New Orleans",
      country: "United States",
      region: "Caribbean",
      coordinates: {
        latitude: 29.9511,
        longitude: -90.0715,
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
    hasPopularDestination: true,
    category: "luxury",
    itinerary: {
      route: [
        {
          city: "New Orleans",
          country: "United States",
          region: "Caribbean",
          coordinates: {
            latitude: 29.9511,
            longitude: -90.0715,
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
          city: "Bermuda",
          country: "Bermuda",
          coordinates: {
            latitude: 32.3214,
            longitude: -64.75737,
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
          city: "St. Thomas",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
      ],
      description:
        "Leave stress behind with this curated enigma from New Orleans. Sail across the best of Caribbean and explore treasures like Tampa, Bermuda, Fort Lauderdale, St. Thomas with comfort and style.",
      distance: "1003 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from New Orleans to Tampa",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Tampa to Bermuda",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from Bermuda to Fort Lauderdale",
        },
        {
          start: "Day 13",
          end: "Day 14",
          duration: "2 days",
          description: "Sailing from Fort Lauderdale to St. Thomas",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring New Orleans",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Exploring Tampa",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring Bermuda",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Exploring Fort Lauderdale",
        },
        {
          start: "Day 15",
          end: "Day 15",
          duration: "1 days",
          description: "Exploring St. Thomas",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Adam Henderson",
        role: "Loyalty Program Representative",
        languages: ["English", "Quechua", "French", "Spanish"], // Use the properly generated languages list
        experienceYears: 18,
        profileImage: "https://randomuser.me/api/portraits/men/81.jpg",
        contact: {
          contactEmail: "charming.realm.of.th@velarivoyages.com",
          contactNumber: "+1-754-256-8929",
        },
      },
    ],
    title: "Charming Realm of the Emerald Cays",
    description:
      "Leave stress behind with this curated enigma from New Orleans. Sail across the best of Caribbean and explore treasures like Tampa, Bermuda, Fort Lauderdale, St. Thomas with comfort and style.",
    rating: 4.4,
    tags: ["anniversary-cruise", "cruise-adventure"],
  },
  {
    basePrice: 7573,
    departureLocation: {
      city: "New Orleans",
      country: "United States",
      region: "Caribbean",
      coordinates: {
        latitude: 29.9511,
        longitude: -90.0715,
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
    category: "expedition",
    itinerary: {
      route: [
        {
          city: "New Orleans",
          country: "United States",
          region: "Caribbean",
          coordinates: {
            latitude: 29.9511,
            longitude: -90.0715,
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
          city: "Roatán",
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
          city: "San Juan",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
      ],
      description:
        "Sail from New Orleans into a world of wonder. The Caribbean beckons with unforgettable ports like Miami, Roatán, Cozumel, San Juan, where every view is picture-perfect and every moment is priceless.",
      distance: "1219 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from New Orleans to Miami",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Miami to Roatán",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Sailing from Roatán to Cozumel",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Sailing from Cozumel to San Juan",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring New Orleans",
        },
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Exploring Miami",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Exploring Roatán",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Exploring Cozumel",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Exploring San Juan",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Henry Mitchell",
        role: "Loyalty Program Representative",
        languages: ["English", "Quechua", "French", "Spanish"], // Use the properly generated languages list
        experienceYears: 19,
        profileImage: "https://randomuser.me/api/portraits/men/27.jpg",
        contact: {
          contactEmail: "epic.adventure.of.th@velarivoyages.com",
          contactNumber: "+1-501-902-4628",
        },
      },
    ],
    title: "Epic Adventure of the Emerald Cays",
    description:
      "Sail from New Orleans into a world of wonder. The Caribbean beckons with unforgettable ports like Miami, Roatán, Cozumel, San Juan, where every view is picture-perfect and every moment is priceless.",
    rating: 4.7,
    tags: ["repositioning", "cruise-ship"],
  },
  {
    basePrice: 9451,
    departureLocation: {
      city: "New Orleans",
      country: "United States",
      region: "Caribbean",
      coordinates: {
        latitude: 29.9511,
        longitude: -90.0715,
      },
    },
    arrivalLocation: {
      city: "New Orleans",
      country: "United States",
      region: "Caribbean",
      coordinates: {
        latitude: 29.9511,
        longitude: -90.0715,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "ultra-luxury",
    itinerary: {
      route: [
        {
          city: "New Orleans",
          country: "United States",
          region: "Caribbean",
          coordinates: {
            latitude: 29.9511,
            longitude: -90.0715,
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
          city: "Tampa",
          country: "United States",
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
          city: "New Orleans",
          country: "United States",
          region: "Caribbean",
          coordinates: {
            latitude: 29.9511,
            longitude: -90.0715,
          },
        },
      ],
      description:
        "Join us in New Orleans for a mythos of a lifetime. Sail across the serene waters of Caribbean, stopping at ports like Fort Lauderdale, Cozumel, Tampa, San Juan where timeless traditions meet modern luxuries.",
      distance: "710 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from New Orleans to Fort Lauderdale",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Sailing from Fort Lauderdale to Cozumel",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Sailing from Cozumel to Tampa",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Sailing from Tampa to San Juan",
        },
        {
          start: "Day 13",
          end: "Day 13",
          duration: "1 days",
          description: "Sailing from San Juan to New Orleans",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring New Orleans",
        },
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Exploring Fort Lauderdale",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Exploring Cozumel",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Exploring Tampa",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Exploring San Juan",
        },
        {
          start: "Day 14",
          end: "Day 14",
          duration: "1 days",
          description: "Exploring New Orleans",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Billy Russell",
        role: "Loyalty Program Representative",
        languages: ["English", "Quechua", "French", "Spanish"], // Use the properly generated languages list
        experienceYears: 7,
        profileImage: "https://randomuser.me/api/portraits/men/49.jpg",
        contact: {
          contactEmail: "mythic.quest.of.the.@velarivoyages.com",
          contactNumber: "+1-456-792-2099",
        },
      },
    ],
    title: "Mythic Quest of the Soul-Stirred Streets",
    description:
      "Join us in New Orleans for a mythos of a lifetime. Sail across the serene waters of Caribbean, stopping at ports like Fort Lauderdale, Cozumel, Tampa, San Juan where timeless traditions meet modern luxuries.",
    rating: 4.6,
    tags: ["cruise-excursion", "sightseeing"],
  },
  {
    basePrice: 9236,
    departureLocation: {
      city: "New Orleans",
      country: "United States",
      region: "Caribbean",
      coordinates: {
        latitude: 29.9511,
        longitude: -90.0715,
      },
    },
    arrivalLocation: {
      city: "Cozumel",
      country: "Mexico",
      coordinates: {
        latitude: 20.4233,
        longitude: -86.9212,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "premium-luxury",
    itinerary: {
      route: [
        {
          city: "New Orleans",
          country: "United States",
          region: "Caribbean",
          coordinates: {
            latitude: 29.9511,
            longitude: -90.0715,
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
      ],
      description:
        "Let the spirit of exploration guide your captivating journey from New Orleans. This cruise offers a balanced mix of luxury and adventure, visiting stunning locales like Bermuda, Philipsburg, Cozumel.",
      distance: "623 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from New Orleans to Bermuda",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Sailing from Bermuda to Philipsburg",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Philipsburg to Cozumel",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring New Orleans",
        },
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Exploring Bermuda",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Exploring Philipsburg",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Exploring Cozumel",
        },
      ],
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Patrick Holloway",
        role: "Loyalty Program Representative",
        languages: ["English", "Quechua", "French", "Spanish"], // Use the properly generated languages list
        experienceYears: 18,
        profileImage: "https://randomuser.me/api/portraits/men/73.jpg",
        contact: {
          contactEmail: "eternal.pilgrimage.o@velarivoyages.com",
          contactNumber: "+1-856-935-7415",
        },
      },
    ],
    title: "Eternal Pilgrimage of the Crescent City",
    description:
      "Let the spirit of exploration guide your captivating journey from New Orleans. This cruise offers a balanced mix of luxury and adventure, visiting stunning locales like Bermuda, Philipsburg, Cozumel.",
    rating: 4.3,
    tags: ["cruise-getaway", "expedition"],
  },
  {
    basePrice: 3634,
    departureLocation: {
      city: "New Orleans",
      country: "United States",
      region: "Caribbean",
      coordinates: {
        latitude: 29.9511,
        longitude: -90.0715,
      },
    },
    arrivalLocation: {
      city: "New Orleans",
      country: "United States",
      region: "Caribbean",
      coordinates: {
        latitude: 29.9511,
        longitude: -90.0715,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "ultra-luxury",
    itinerary: {
      route: [
        {
          city: "New Orleans",
          country: "United States",
          region: "Caribbean",
          coordinates: {
            latitude: 29.9511,
            longitude: -90.0715,
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
          city: "New Orleans",
          country: "United States",
          region: "Caribbean",
          coordinates: {
            latitude: 29.9511,
            longitude: -90.0715,
          },
        },
      ],
      description:
        "Your journey through the Caribbean begins in New Orleans, where elegance meets adventure. Explore the shores of Roatán, Tampa, Philipsburg, with curated excursions and luxurious onboard amenities.",
      distance: "1453 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from New Orleans to Roatán",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Roatán to Tampa",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Tampa to Philipsburg",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Sailing from Philipsburg to New Orleans",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring New Orleans",
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
          description: "Exploring Tampa",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Exploring Philipsburg",
        },
        {
          start: "Day 13",
          end: "Day 14",
          duration: "2 days",
          description: "Exploring New Orleans",
        },
      ],
    },
    tourCategoryId: "weekend-cruise",
    contactPersonnel: [
      {
        name: "Bryan Fox",
        role: "Loyalty Program Representative",
        languages: ["English", "Quechua", "French", "Spanish"], // Use the properly generated languages list
        experienceYears: 5,
        profileImage: "https://randomuser.me/api/portraits/men/32.jpg",
        contact: {
          contactEmail: "majestic.enigma.of.t@velarivoyages.com",
          contactNumber: "+1-977-850-7631",
        },
      },
    ],
    title: "Majestic Enigma of the Sapphire Waters",
    description:
      "Your journey through the Caribbean begins in New Orleans, where elegance meets adventure. Explore the shores of Roatán, Tampa, Philipsburg, with curated excursions and luxurious onboard amenities.",
    rating: 4.6,
    tags: ["weekend-cruise"],
  },
  {
    basePrice: 1108,
    departureLocation: {
      city: "New Orleans",
      country: "United States",
      region: "Caribbean",
      coordinates: {
        latitude: 29.9511,
        longitude: -90.0715,
      },
    },
    arrivalLocation: {
      city: "New Orleans",
      country: "United States",
      region: "Caribbean",
      coordinates: {
        latitude: 29.9511,
        longitude: -90.0715,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "ultra-luxury",
    itinerary: {
      route: [
        {
          city: "New Orleans",
          country: "United States",
          region: "Caribbean",
          coordinates: {
            latitude: 29.9511,
            longitude: -90.0715,
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
        {
          city: "Philipsburg",
          country: "Sint Maarten",
          coordinates: {
            latitude: 18.0167,
            longitude: -63.0587,
          },
        },
        {
          city: "New Orleans",
          country: "United States",
          region: "Caribbean",
          coordinates: {
            latitude: 29.9511,
            longitude: -90.0715,
          },
        },
      ],
      description:
        "Depart from the iconic port of New Orleans and sail through the enchanting Caribbean. Explore vibrant destinations like St. Thomas, Bermuda, Philipsburg, each offering its own unique charm and local flair.",
      distance: "1248 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from New Orleans to St. Thomas",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from St. Thomas to Bermuda",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Sailing from Bermuda to Philipsburg",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Sailing from Philipsburg to New Orleans",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring New Orleans",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring St. Thomas",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Exploring Bermuda",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Exploring Philipsburg",
        },
        {
          start: "Day 14",
          end: "Day 15",
          duration: "2 days",
          description: "Exploring New Orleans",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Mason Henderson",
        role: "Loyalty Program Representative",
        languages: ["English", "Quechua", "French", "Spanish"], // Use the properly generated languages list
        experienceYears: 18,
        profileImage: "https://randomuser.me/api/portraits/men/68.jpg",
        contact: {
          contactEmail: "transcendent.mirage.@velarivoyages.com",
          contactNumber: "+1-611-165-4496",
        },
      },
    ],
    title: "Transcendent Mirage of the Soul-Stirred Streets",
    description:
      "Depart from the iconic port of New Orleans and sail through the enchanting Caribbean. Explore vibrant destinations like St. Thomas, Bermuda, Philipsburg, each offering its own unique charm and local flair.",
    rating: 4.3,
    tags: ["general", "historical"],
  },
  {
    basePrice: 9481,
    departureLocation: {
      city: "New Orleans",
      country: "United States",
      region: "Caribbean",
      coordinates: {
        latitude: 29.9511,
        longitude: -90.0715,
      },
    },
    arrivalLocation: {
      city: "New Orleans",
      country: "United States",
      region: "Caribbean",
      coordinates: {
        latitude: 29.9511,
        longitude: -90.0715,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "entry-luxury",
    itinerary: {
      route: [
        {
          city: "New Orleans",
          country: "United States",
          region: "Caribbean",
          coordinates: {
            latitude: 29.9511,
            longitude: -90.0715,
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
          city: "George Town",
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
          city: "Miami",
          country: "United States",
          coordinates: {
            latitude: 25.7617,
            longitude: -80.1918,
          },
        },
        {
          city: "New Orleans",
          country: "United States",
          region: "Caribbean",
          coordinates: {
            latitude: 29.9511,
            longitude: -90.0715,
          },
        },
      ],
      description:
        "Depart New Orleans on a relaxing discovery through the Caribbean region. Highlights include the stunning coastlines of Fort Lauderdale, George Town, Cozumel, Miami, all while enjoying first-class amenities on board.",
      distance: "1294 nautical miles",
      totalDuration: "20 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from New Orleans to Fort Lauderdale",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Sailing from Fort Lauderdale to George Town",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Sailing from George Town to Cozumel",
        },
        {
          start: "Day 13",
          end: "Day 14",
          duration: "2 days",
          description: "Sailing from Cozumel to Miami",
        },
        {
          start: "Day 17",
          end: "Day 18",
          duration: "2 days",
          description: "Sailing from Miami to New Orleans",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring New Orleans",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Exploring Fort Lauderdale",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Exploring George Town",
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
          description: "Exploring Miami",
        },
        {
          start: "Day 19",
          end: "Day 20",
          duration: "2 days",
          description: "Exploring New Orleans",
        },
      ],
    },
    tourCategoryId: "luxury-cruise",
    contactPersonnel: [
      {
        name: "Javier Cooper",
        role: "Loyalty Program Representative",
        languages: ["English", "Quechua", "French", "Spanish"], // Use the properly generated languages list
        experienceYears: 14,
        profileImage: "https://randomuser.me/api/portraits/men/63.jpg",
        contact: {
          contactEmail: "exquisite.eclipse.of@velarivoyages.com",
          contactNumber: "+1-532-921-2332",
        },
      },
    ],
    title: "Exquisite Eclipse of the Soul-Stirred Streets",
    description:
      "Depart New Orleans on a relaxing discovery through the Caribbean region. Highlights include the stunning coastlines of Fort Lauderdale, George Town, Cozumel, Miami, all while enjoying first-class amenities on board.",
    rating: 4.4,
    tags: ["wellness", "sightseeing"],
  },
  {
    basePrice: 9040,
    departureLocation: {
      city: "New Orleans",
      country: "United States",
      region: "Caribbean",
      coordinates: {
        latitude: 29.9511,
        longitude: -90.0715,
      },
    },
    arrivalLocation: {
      city: "Tampa",
      country: "United States",
      coordinates: {
        latitude: 27.9506,
        longitude: -82.4572,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "premium-luxury",
    itinerary: {
      route: [
        {
          city: "New Orleans",
          country: "United States",
          region: "Caribbean",
          coordinates: {
            latitude: 29.9511,
            longitude: -90.0715,
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
          coordinates: {
            latitude: 27.9506,
            longitude: -82.4572,
          },
        },
      ],
      description:
        "Experience coastal elegance on this pilgrimage from New Orleans, where the journey through Caribbean includes stops in Fort Lauderdale, Nassau, San Juan, Tampa, each more enchanting than the last.",
      distance: "687 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from New Orleans to Fort Lauderdale",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Fort Lauderdale to Nassau",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Nassau to San Juan",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Sailing from San Juan to Tampa",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring New Orleans",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
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
          description: "Exploring San Juan",
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
        name: "Vincent Sutton",
        role: "Loyalty Program Representative",
        languages: ["English", "Quechua", "French", "Spanish"], // Use the properly generated languages list
        experienceYears: 16,
        profileImage: "https://randomuser.me/api/portraits/men/47.jpg",
        contact: {
          contactEmail: "sublime.quest.of.the@velarivoyages.com",
          contactNumber: "+1-627-993-7735",
        },
      },
    ],
    title: "Sublime Quest of the Azure Horizons",
    description:
      "Experience coastal elegance on this pilgrimage from New Orleans, where the journey through Caribbean includes stops in Fort Lauderdale, Nassau, San Juan, Tampa, each more enchanting than the last.",
    rating: 4.5,
    tags: ["short-getaway"],
  },
  {
    basePrice: 5416,
    departureLocation: {
      city: "New Orleans",
      country: "United States",
      region: "Caribbean",
      coordinates: {
        latitude: 29.9511,
        longitude: -90.0715,
      },
    },
    arrivalLocation: {
      city: "New Orleans",
      country: "United States",
      region: "Caribbean",
      coordinates: {
        latitude: 29.9511,
        longitude: -90.0715,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "premium",
    itinerary: {
      route: [
        {
          city: "New Orleans",
          country: "United States",
          region: "Caribbean",
          coordinates: {
            latitude: 29.9511,
            longitude: -90.0715,
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
          coordinates: {
            latitude: 27.9506,
            longitude: -82.4572,
          },
        },
        {
          city: "New Orleans",
          country: "United States",
          region: "Caribbean",
          coordinates: {
            latitude: 29.9511,
            longitude: -90.0715,
          },
        },
      ],
      description:
        "Sail away from the charming harbor of New Orleans on this sun-drenched journey across Caribbean. Uncover the beauty and history of Fort Lauderdale, Tampa with curated excursions, world-class cuisine, and exceptional service.",
      distance: "880 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from New Orleans to Fort Lauderdale",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Sailing from Fort Lauderdale to Tampa",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Sailing from Tampa to New Orleans",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring New Orleans",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Exploring Fort Lauderdale",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Exploring Tampa",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Exploring New Orleans",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Tyler Dunn",
        role: "Loyalty Program Representative",
        languages: ["English", "Quechua", "French", "Spanish"], // Use the properly generated languages list
        experienceYears: 6,
        profileImage: "https://randomuser.me/api/portraits/men/11.jpg",
        contact: {
          contactEmail: "majestic.pilgrimage.@velarivoyages.com",
          contactNumber: "+1-619-484-8485",
        },
      },
    ],
    title: "Majestic Pilgrimage of the Voodoo Murmurs",
    description:
      "Sail away from the charming harbor of New Orleans on this sun-drenched journey across Caribbean. Uncover the beauty and history of Fort Lauderdale, Tampa with curated excursions, world-class cuisine, and exceptional service.",
    rating: 4.3,
    tags: ["cruise-getaway", "wildlife", "cruise-ship"],
  },
  {
    basePrice: 9368,
    departureLocation: {
      city: "New Orleans",
      country: "United States",
      region: "Caribbean",
      coordinates: {
        latitude: 29.9511,
        longitude: -90.0715,
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
    category: "premium-luxury",
    itinerary: {
      route: [
        {
          city: "New Orleans",
          country: "United States",
          region: "Caribbean",
          coordinates: {
            latitude: 29.9511,
            longitude: -90.0715,
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
          city: "Philipsburg",
          country: "Sint Maarten",
          coordinates: {
            latitude: 18.0167,
            longitude: -63.0587,
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
        "This hand-selected tide-washed cruise offers a true taste of Caribbean. Depart from New Orleans and explore ports like George Town, San Juan, Philipsburg, Roatán, each telling a story through food, music, and tradition.",
      distance: "714 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from New Orleans to George Town",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from George Town to San Juan",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from San Juan to Philipsburg",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Sailing from Philipsburg to Roatán",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring New Orleans",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Exploring George Town",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Exploring San Juan",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Exploring Philipsburg",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Exploring Roatán",
        },
      ],
    },
    tourCategoryId: "luxury-cruise",
    contactPersonnel: [
      {
        name: "Jason Chambers",
        role: "Loyalty Program Representative",
        languages: ["English", "Quechua", "French", "Spanish"], // Use the properly generated languages list
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/men/28.jpg",
        contact: {
          contactEmail: "charming.legacy.of.t@velarivoyages.com",
          contactNumber: "+1-274-303-6051",
        },
      },
    ],
    title: "Charming Legacy of the Parade of Shadows",
    description:
      "This hand-selected tide-washed cruise offers a true taste of Caribbean. Depart from New Orleans and explore ports like George Town, San Juan, Philipsburg, Roatán, each telling a story through food, music, and tradition.",
    rating: 4.9,
    tags: ["cruise-adventure", "luxury", "cruise-vacation"],
  },
  {
    basePrice: 6953,
    departureLocation: {
      city: "New Orleans",
      country: "United States",
      region: "Caribbean",
      coordinates: {
        latitude: 29.9511,
        longitude: -90.0715,
      },
    },
    arrivalLocation: {
      city: "New Orleans",
      country: "United States",
      region: "Caribbean",
      coordinates: {
        latitude: 29.9511,
        longitude: -90.0715,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "luxury",
    itinerary: {
      route: [
        {
          city: "New Orleans",
          country: "United States",
          region: "Caribbean",
          coordinates: {
            latitude: 29.9511,
            longitude: -90.0715,
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
        {
          city: "St. Thomas",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "New Orleans",
          country: "United States",
          region: "Caribbean",
          coordinates: {
            latitude: 29.9511,
            longitude: -90.0715,
          },
        },
      ],
      description:
        "Your journey through the Caribbean begins in New Orleans, where elegance meets adventure. Explore the shores of George Town, Roatán, St. Thomas, with curated excursions and luxurious onboard amenities.",
      distance: "1020 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from New Orleans to George Town",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from George Town to Roatán",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Sailing from Roatán to St. Thomas",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Sailing from St. Thomas to New Orleans",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring New Orleans",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring George Town",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Exploring Roatán",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Exploring St. Thomas",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Exploring New Orleans",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Gabriel Montgomery",
        role: "Loyalty Program Representative",
        languages: ["English", "Quechua", "French", "Spanish"], // Use the properly generated languages list
        experienceYears: 15,
        profileImage: "https://randomuser.me/api/portraits/men/73.jpg",
        contact: {
          contactEmail: "lavish.currents.of.t@velarivoyages.com",
          contactNumber: "+1-366-340-2491",
        },
      },
    ],
    title: "Lavish Currents of the Azure Horizons",
    description:
      "Your journey through the Caribbean begins in New Orleans, where elegance meets adventure. Explore the shores of George Town, Roatán, St. Thomas, with curated excursions and luxurious onboard amenities.",
    rating: 4.6,
    tags: ["general", "sightseeing", "adventure"],
  },
  {
    basePrice: 5453,
    departureLocation: {
      city: "New Orleans",
      country: "United States",
      region: "Caribbean",
      coordinates: {
        latitude: 29.9511,
        longitude: -90.0715,
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
    category: "mainstream",
    itinerary: {
      route: [
        {
          city: "New Orleans",
          country: "United States",
          region: "Caribbean",
          coordinates: {
            latitude: 29.9511,
            longitude: -90.0715,
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
          city: "Nassau",
          country: "Bahamas",
          coordinates: {
            latitude: 25.0582,
            longitude: -77.3432,
          },
        },
      ],
      description:
        "This inspiring pilgrimage departs from New Orleans, navigating the diverse landscapes and vibrant cities of Caribbean. Must-see stops include Cozumel, Bermuda, Nassau.",
      distance: "1461 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from New Orleans to Cozumel",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Sailing from Cozumel to Bermuda",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Sailing from Bermuda to Nassau",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring New Orleans",
        },
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Exploring Cozumel",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Exploring Bermuda",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Exploring Nassau",
        },
      ],
    },
    tourCategoryId: "luxury-cruise",
    contactPersonnel: [
      {
        name: "Russell Dunn",
        role: "Loyalty Program Representative",
        languages: ["English", "Quechua", "French", "Spanish"], // Use the properly generated languages list
        experienceYears: 7,
        profileImage: "https://randomuser.me/api/portraits/men/22.jpg",
        contact: {
          contactEmail: "immersive.journey.of@velarivoyages.com",
          contactNumber: "+1-520-345-8084",
        },
      },
    ],
    title: "Immersive Journey of the Crescent City",
    description:
      "This inspiring pilgrimage departs from New Orleans, navigating the diverse landscapes and vibrant cities of Caribbean. Must-see stops include Cozumel, Bermuda, Nassau.",
    rating: 4.3,
    tags: ["luxury", "culinary"],
  },
  {
    basePrice: 3480,
    departureLocation: {
      city: "New Orleans",
      country: "United States",
      region: "Caribbean",
      coordinates: {
        latitude: 29.9511,
        longitude: -90.0715,
      },
    },
    arrivalLocation: {
      city: "Tampa",
      country: "United States",
      coordinates: {
        latitude: 27.9506,
        longitude: -82.4572,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "luxury",
    itinerary: {
      route: [
        {
          city: "New Orleans",
          country: "United States",
          region: "Caribbean",
          coordinates: {
            latitude: 29.9511,
            longitude: -90.0715,
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
          city: "Tampa",
          country: "United States",
          coordinates: {
            latitude: 27.9506,
            longitude: -82.4572,
          },
        },
      ],
      description:
        "Start in the vibrant city of New Orleans and venture into the iconic Caribbean. Discover authentic local cultures, cuisine, and coastal wonders in St. Thomas, Tampa.",
      distance: "1499 nautical miles",
      totalDuration: "6 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from New Orleans to St. Thomas",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from St. Thomas to Tampa",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring New Orleans",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring St. Thomas",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Exploring Tampa",
        },
      ],
    },
    tourCategoryId: "anniversary-cruise",
    contactPersonnel: [
      {
        name: "Margaret Porter",
        role: "Corporate Concierge",
        languages: ["English", "French", "Portuguese", "Spanish"], // Use the properly generated languages list
        experienceYears: 19,
        profileImage: "https://randomuser.me/api/portraits/women/10.jpg",
        contact: {
          contactEmail: "radiancedrenched.hav@velarivoyages.com",
          contactNumber: "+1-100-816-9378",
        },
      },
    ],
    title: "Radiance-Drenched Haven of the Soul-Stirred Streets",
    description:
      "Start in the vibrant city of New Orleans and venture into the iconic Caribbean. Discover authentic local cultures, cuisine, and coastal wonders in St. Thomas, Tampa.",
    rating: 4.0,
    tags: ["seasonal", "anniversary-cruise", "cruise-ship"],
  },
  {
    basePrice: 4685,
    departureLocation: {
      city: "New Orleans",
      country: "United States",
      region: "Caribbean",
      coordinates: {
        latitude: 29.9511,
        longitude: -90.0715,
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
    category: "mainstream",
    itinerary: {
      route: [
        {
          city: "New Orleans",
          country: "United States",
          region: "Caribbean",
          coordinates: {
            latitude: 29.9511,
            longitude: -90.0715,
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
          city: "Philipsburg",
          country: "Sint Maarten",
          coordinates: {
            latitude: 18.0167,
            longitude: -63.0587,
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
      ],
      description:
        "This extraordinary mythos from New Orleans offers the ultimate Caribbean exploration. Immerse yourself in the rich cultures and stunning landscapes of Nassau, Philipsburg, George Town and St. Thomas, creating memories that will last a lifetime.",
      distance: "833 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from New Orleans to Nassau",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Nassau to Philipsburg",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Sailing from Philipsburg to George Town",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Sailing from George Town to St. Thomas",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring New Orleans",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Nassau",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Exploring Philipsburg",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Exploring George Town",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Exploring St. Thomas",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Kimberly Lawson",
        role: "Corporate Concierge",
        languages: ["English", "French", "Portuguese", "Spanish"], // Use the properly generated languages list
        experienceYears: 17,
        profileImage: "https://randomuser.me/api/portraits/women/90.jpg",
        contact: {
          contactEmail: "whispering.pulse.of.@velarivoyages.com",
          contactNumber: "+1-607-164-9064",
        },
      },
    ],
    title: "Whispering Pulse of the Turquoise Lagoons",
    description:
      "This extraordinary mythos from New Orleans offers the ultimate Caribbean exploration. Immerse yourself in the rich cultures and stunning landscapes of Nassau, Philipsburg, George Town and St. Thomas, creating memories that will last a lifetime.",
    rating: 4.6,
    tags: ["sightseeing"],
  },
  {
    basePrice: 1268,
    departureLocation: {
      city: "New Orleans",
      country: "United States",
      region: "Caribbean",
      coordinates: {
        latitude: 29.9511,
        longitude: -90.0715,
      },
    },
    arrivalLocation: {
      city: "New Orleans",
      country: "United States",
      region: "Caribbean",
      coordinates: {
        latitude: 29.9511,
        longitude: -90.0715,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "premium",
    itinerary: {
      route: [
        {
          city: "New Orleans",
          country: "United States",
          region: "Caribbean",
          coordinates: {
            latitude: 29.9511,
            longitude: -90.0715,
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
          city: "Bermuda",
          country: "Bermuda",
          coordinates: {
            latitude: 32.3214,
            longitude: -64.75737,
          },
        },
        {
          city: "New Orleans",
          country: "United States",
          region: "Caribbean",
          coordinates: {
            latitude: 29.9511,
            longitude: -90.0715,
          },
        },
      ],
      description:
        "Leave stress behind with this curated mirage from New Orleans. Sail across the best of Caribbean and explore treasures like Miami, Bermuda with comfort and style.",
      distance: "859 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from New Orleans to Miami",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Miami to Bermuda",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from Bermuda to New Orleans",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring New Orleans",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Exploring Miami",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring Bermuda",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Exploring New Orleans",
        },
      ],
    },
    tourCategoryId: "weekend-cruise",
    contactPersonnel: [
      {
        name: "Betty Mitchell",
        role: "Corporate Concierge",
        languages: ["English", "French", "Portuguese", "Spanish"], // Use the properly generated languages list
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/women/6.jpg",
        contact: {
          contactEmail: "immersive.infinite.o@velarivoyages.com",
          contactNumber: "+1-565-945-4536",
        },
      },
    ],
    title: "Immersive Infinite of the Crescent City",
    description:
      "Leave stress behind with this curated mirage from New Orleans. Sail across the best of Caribbean and explore treasures like Miami, Bermuda with comfort and style.",
    rating: 4.0,
    tags: ["weekend-cruise"],
  },
  {
    basePrice: 1759,
    departureLocation: {
      city: "New Orleans",
      country: "United States",
      region: "Caribbean",
      coordinates: {
        latitude: 29.9511,
        longitude: -90.0715,
      },
    },
    arrivalLocation: {
      city: "New Orleans",
      country: "United States",
      region: "Caribbean",
      coordinates: {
        latitude: 29.9511,
        longitude: -90.0715,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "entry-luxury",
    itinerary: {
      route: [
        {
          city: "New Orleans",
          country: "United States",
          region: "Caribbean",
          coordinates: {
            latitude: 29.9511,
            longitude: -90.0715,
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
          city: "Roatán",
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
          city: "New Orleans",
          country: "United States",
          region: "Caribbean",
          coordinates: {
            latitude: 29.9511,
            longitude: -90.0715,
          },
        },
      ],
      description:
        "Start in the vibrant city of New Orleans and venture into the iconic Caribbean. Discover authentic local cultures, cuisine, and coastal wonders in San Juan, Roatán, Philipsburg, Bermuda.",
      distance: "1056 nautical miles",
      totalDuration: "19 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from New Orleans to San Juan",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from San Juan to Roatán",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from Roatán to Philipsburg",
        },
        {
          start: "Day 13",
          end: "Day 14",
          duration: "2 days",
          description: "Sailing from Philipsburg to Bermuda",
        },
        {
          start: "Day 17",
          end: "Day 18",
          duration: "2 days",
          description: "Sailing from Bermuda to New Orleans",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring New Orleans",
        },
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Exploring San Juan",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring Roatán",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Exploring Philipsburg",
        },
        {
          start: "Day 15",
          end: "Day 16",
          duration: "2 days",
          description: "Exploring Bermuda",
        },
        {
          start: "Day 19",
          end: "Day 19",
          duration: "1 days",
          description: "Exploring New Orleans",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Helen Fletcher",
        role: "Corporate Concierge",
        languages: ["English", "French", "Portuguese", "Spanish"], // Use the properly generated languages list
        experienceYears: 14,
        profileImage: "https://randomuser.me/api/portraits/women/72.jpg",
        contact: {
          contactEmail: "mythic.drift.of.the.@velarivoyages.com",
          contactNumber: "+1-344-605-1294",
        },
      },
    ],
    title: "Mythic Drift of the Sun-Kissed Archipelago",
    description:
      "Start in the vibrant city of New Orleans and venture into the iconic Caribbean. Discover authentic local cultures, cuisine, and coastal wonders in San Juan, Roatán, Philipsburg, Bermuda.",
    rating: 4.9,
    tags: ["repositioning"],
  },
  {
    basePrice: 5826,
    departureLocation: {
      city: "New Orleans",
      country: "United States",
      region: "Caribbean",
      coordinates: {
        latitude: 29.9511,
        longitude: -90.0715,
      },
    },
    arrivalLocation: {
      city: "New Orleans",
      country: "United States",
      region: "Caribbean",
      coordinates: {
        latitude: 29.9511,
        longitude: -90.0715,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "expedition",
    itinerary: {
      route: [
        {
          city: "New Orleans",
          country: "United States",
          region: "Caribbean",
          coordinates: {
            latitude: 29.9511,
            longitude: -90.0715,
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
          city: "St. Thomas",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "New Orleans",
          country: "United States",
          region: "Caribbean",
          coordinates: {
            latitude: 29.9511,
            longitude: -90.0715,
          },
        },
      ],
      description:
        "Let the waves lead you from New Orleans on this majestic mirage. Traverse the iconic waters of Caribbean and discover the beauty of Tampa, St. Thomas.",
      distance: "1014 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from New Orleans to Tampa",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Sailing from Tampa to St. Thomas",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from St. Thomas to New Orleans",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring New Orleans",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Exploring Tampa",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Exploring St. Thomas",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Exploring New Orleans",
        },
      ],
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Zoe Cooper",
        role: "Corporate Concierge",
        languages: ["English", "French", "Portuguese", "Spanish"], // Use the properly generated languages list
        experienceYears: 18,
        profileImage: "https://randomuser.me/api/portraits/women/70.jpg",
        contact: {
          contactEmail: "mesmerizing.horizon.@velarivoyages.com",
          contactNumber: "+1-733-723-6338",
        },
      },
    ],
    title: "Mesmerizing Horizon of the Rum-Laced Breezes",
    description:
      "Let the waves lead you from New Orleans on this majestic mirage. Traverse the iconic waters of Caribbean and discover the beauty of Tampa, St. Thomas.",
    rating: 4.6,
    tags: ["cruise-experience", "fall-cruise"],
  },
];
