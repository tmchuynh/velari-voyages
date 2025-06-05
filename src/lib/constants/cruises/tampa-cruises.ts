import { Cruise } from "@/lib/interfaces/services/cruises";

export const tampaCruises: Cruise[] = [
  {
    basePrice: 2859,
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
      country: "",
      coordinates: {
        latitude: 0,
        longitude: 0,
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
          city: "Miami",
          country: "United States",
          coordinates: {
            latitude: 25.7617,
            longitude: -80.1918,
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
          city: "George Town",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Bermuda",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
      ],
      description:
        "Begin your journey in Tampa, where tradition meets travel. This immersive pilgrimage reveals the finest of Caribbean, from the beaches of Miami to the streets of St. Thomas.",
      distance: "1187 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Tampa to Miami",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Miami to St. Thomas",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Sailing from St. Thomas to George Town",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from George Town to Bermuda",
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
          description: "Exploring Miami",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Exploring St. Thomas",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Exploring George Town",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Exploring Bermuda",
        },
      ],
    },
    tourCategoryId: "anniversary-cruise",
    contactPersonnel: [
      {
        name: "Ralph Palmer",
        role: "Corporate Concierge",
        languages: ["English", "Portuguese", "Quechua"], // Use the properly generated languages list
        experienceYears: 14,
        profileImage: "https://randomuser.me/api/portraits/men/86.jpg",
        contact: {
          contactEmail: "timeless.requiem.of.@velarivoyages.com",
          contactNumber: "+1-683-784-9375",
        },
      },
    ],
    title: "Timeless Requiem of the Palmetto Breeze",
    description:
      "Begin your journey in Tampa, where tradition meets travel. This immersive pilgrimage reveals the finest of Caribbean, from the beaches of Miami to the streets of St. Thomas.",
    rating: 4.9,
    tags: ["general", "anniversary-cruise", "adventure"],
  },
  {
    basePrice: 7994,
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
          city: "Philipsburg",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Cozumel",
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
        "Set off on a eclipse from Tampa that captures the essence of Caribbean. Discover cultural gems and culinary delights across Philipsburg, Cozumel, Miami, George Town.",
      distance: "1016 nautical miles",
      totalDuration: "19 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Tampa to Philipsburg",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Philipsburg to Cozumel",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from Cozumel to Miami",
        },
        {
          start: "Day 13",
          end: "Day 14",
          duration: "2 days",
          description: "Sailing from Miami to George Town",
        },
        {
          start: "Day 17",
          end: "Day 18",
          duration: "2 days",
          description: "Sailing from George Town to Tampa",
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
          description: "Exploring Philipsburg",
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
          description: "Exploring Miami",
        },
        {
          start: "Day 15",
          end: "Day 16",
          duration: "2 days",
          description: "Exploring George Town",
        },
        {
          start: "Day 19",
          end: "Day 19",
          duration: "1 days",
          description: "Exploring Tampa",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Mateo Harper",
        role: "Corporate Concierge",
        languages: ["English", "Portuguese", "Quechua"], // Use the properly generated languages list
        experienceYears: 7,
        profileImage: "https://randomuser.me/api/portraits/men/24.jpg",
        contact: {
          contactEmail: "tranquil.passage.of.@velarivoyages.com",
          contactNumber: "+1-377-726-4139",
        },
      },
    ],
    title: "Tranquil Passage of the Island Reverie",
    description:
      "Set off on a eclipse from Tampa that captures the essence of Caribbean. Discover cultural gems and culinary delights across Philipsburg, Cozumel, Miami, George Town.",
    rating: 4.5,
    tags: ["cultural", "general", "seasonal"],
  },
  {
    basePrice: 6788,
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
          city: "Miami",
          country: "United States",
          coordinates: {
            latitude: 25.7617,
            longitude: -80.1918,
          },
        },
        {
          city: "Philipsburg",
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
        "Step into a world of elegance and exploration from Tampa. This solstice through the Caribbean unveils stunning stops including Miami, Philipsburg, all with first-class service.",
      distance: "969 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Tampa to Miami",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Miami to Philipsburg",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Philipsburg to Tampa",
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
          description: "Exploring Miami",
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
          description: "Exploring Tampa",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Christian Graves",
        role: "Corporate Concierge",
        languages: ["English", "Portuguese", "Quechua"], // Use the properly generated languages list
        experienceYears: 14,
        profileImage: "https://randomuser.me/api/portraits/men/11.jpg",
        contact: {
          contactEmail: "unforgettable.odysse@velarivoyages.com",
          contactNumber: "+1-570-557-3463",
        },
      },
    ],
    title: "Unforgettable Odyssey of the Sunshine Gateway",
    description:
      "Step into a world of elegance and exploration from Tampa. This solstice through the Caribbean unveils stunning stops including Miami, Philipsburg, all with first-class service.",
    rating: 4.9,
    tags: ["historical", "repositioning"],
  },
  {
    basePrice: 2727,
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
      city: "Miami",
      country: "United States",
      coordinates: {
        latitude: 25.7617,
        longitude: -80.1918,
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
          city: "Nassau",
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
        "This extraordinary elevation from Tampa offers the ultimate Caribbean exploration. Immerse yourself in the rich cultures and stunning landscapes of San Juan, Fort Lauderdale, Nassau and Miami, creating memories that will last a lifetime.",
      distance: "650 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Tampa to San Juan",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from San Juan to Fort Lauderdale",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Fort Lauderdale to Nassau",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Sailing from Nassau to Miami",
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
          description: "Exploring San Juan",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Exploring Fort Lauderdale",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Exploring Nassau",
        },
        {
          start: "Day 13",
          end: "Day 13",
          duration: "1 days",
          description: "Exploring Miami",
        },
      ],
    },
    tourCategoryId: "weekend-cruise",
    contactPersonnel: [
      {
        name: "Ralph Maxwell",
        role: "Corporate Concierge",
        languages: ["English", "Portuguese", "Quechua"], // Use the properly generated languages list
        experienceYears: 14,
        profileImage: "https://randomuser.me/api/portraits/men/49.jpg",
        contact: {
          contactEmail: "mesmerizing.awakenin@velarivoyages.com",
          contactNumber: "+1-247-924-6588",
        },
      },
    ],
    title: "Mesmerizing Awakening of the Golden Tide Rise",
    description:
      "This extraordinary elevation from Tampa offers the ultimate Caribbean exploration. Immerse yourself in the rich cultures and stunning landscapes of San Juan, Fort Lauderdale, Nassau and Miami, creating memories that will last a lifetime.",
    rating: 4.6,
    tags: ["general", "cruise-excursion", "weekend-cruise"],
  },
  {
    basePrice: 3513,
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
      ],
      description:
        "Unwind and explore on this tide through Caribbean, departing from Tampa. With every stop—from Miami to Roatán—you’ll collect memories that last a lifetime.",
      distance: "1257 nautical miles",
      totalDuration: "8 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Tampa to Miami",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Miami to Roatán",
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
          description: "Exploring Miami",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring Roatán",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Kyle Day",
        role: "Corporate Concierge",
        languages: ["English", "Portuguese", "Quechua"], // Use the properly generated languages list
        experienceYears: 10,
        profileImage: "https://randomuser.me/api/portraits/men/28.jpg",
        contact: {
          contactEmail: "opulent.requiem.of.t@velarivoyages.com",
          contactNumber: "+1-704-205-9087",
        },
      },
    ],
    title: "Opulent Requiem of the Wharf of Color",
    description:
      "Unwind and explore on this tide through Caribbean, departing from Tampa. With every stop—from Miami to Roatán—you’ll collect memories that last a lifetime.",
    rating: 4.7,
    tags: ["family-friendly"],
  },
  {
    basePrice: 6441,
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
          city: "Philipsburg",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Nassau",
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
          city: "Cozumel",
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
        "This eternal awakening begins in Tampa and ventures deep into the heart of Caribbean. Wander through colorful markets, historic streets, and serene coastlines at Philipsburg, Nassau, Roatán, Cozumel.",
      distance: "565 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Tampa to Philipsburg",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Philipsburg to Nassau",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Sailing from Nassau to Roatán",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Sailing from Roatán to Cozumel",
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
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Philipsburg",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Exploring Nassau",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Exploring Roatán",
        },
        {
          start: "Day 13",
          end: "Day 13",
          duration: "1 days",
          description: "Exploring Cozumel",
        },
        {
          start: "Day 15",
          end: "Day 15",
          duration: "1 days",
          description: "Exploring Tampa",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Blake Collins",
        role: "Corporate Concierge",
        languages: ["English", "Portuguese", "Quechua"], // Use the properly generated languages list
        experienceYears: 19,
        profileImage: "https://randomuser.me/api/portraits/men/81.jpg",
        contact: {
          contactEmail: "starlit.zenith.of.th@velarivoyages.com",
          contactNumber: "+1-939-428-7782",
        },
      },
    ],
    title: "Starlit Zenith of the Turquoise Lagoons",
    description:
      "This eternal awakening begins in Tampa and ventures deep into the heart of Caribbean. Wander through colorful markets, historic streets, and serene coastlines at Philipsburg, Nassau, Roatán, Cozumel.",
    rating: 4.1,
    tags: ["cruise-line", "wellness", "cruise-ship"],
  },
  {
    basePrice: 3464,
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
          city: "Nassau",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Bermuda",
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
        "Launch into adventure from Tampa and sail deep into the heart of the Caribbean. With ports of call like Nassau, Bermuda, expect a voyage filled with scenic wonders and luxurious comforts.",
      distance: "1387 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Tampa to Nassau",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Nassau to Bermuda",
        },
        {
          start: "Day 9",
          end: "Day 9",
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
          end: "Day 5",
          duration: "1 days",
          description: "Exploring Nassau",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring Bermuda",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Exploring Tampa",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Sean Keller",
        role: "Corporate Concierge",
        languages: ["English", "Portuguese", "Quechua"], // Use the properly generated languages list
        experienceYears: 6,
        profileImage: "https://randomuser.me/api/portraits/men/84.jpg",
        contact: {
          contactEmail: "luxurious.enigma.of.@velarivoyages.com",
          contactNumber: "+1-852-155-8775",
        },
      },
    ],
    title: "Luxurious Enigma of the Sunshine Gateway",
    description:
      "Launch into adventure from Tampa and sail deep into the heart of the Caribbean. With ports of call like Nassau, Bermuda, expect a voyage filled with scenic wonders and luxurious comforts.",
    rating: 4.9,
    tags: ["cruise-getaway", "holiday-cruise", "adventure"],
  },
  {
    basePrice: 5457,
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
      city: "Miami",
      country: "United States",
      coordinates: {
        latitude: 25.7617,
        longitude: -80.1918,
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
          city: "Bermuda",
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
          city: "Miami",
          country: "United States",
          coordinates: {
            latitude: 25.7617,
            longitude: -80.1918,
          },
        },
      ],
      description:
        "This whisper takes you beyond the ordinary, starting in Tampa. With breathtaking stops in Bermuda, Fort Lauderdale, Miami, your cruise delivers immersive moments and unforgettable vistas.",
      distance: "1339 nautical miles",
      totalDuration: "10 days",
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
          description: "Sailing from Bermuda to Fort Lauderdale",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Sailing from Fort Lauderdale to Miami",
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
          description: "Exploring Fort Lauderdale",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Exploring Miami",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Dylan Parker",
        role: "Corporate Concierge",
        languages: ["English", "Portuguese", "Quechua"], // Use the properly generated languages list
        experienceYears: 16,
        profileImage: "https://randomuser.me/api/portraits/men/26.jpg",
        contact: {
          contactEmail: "alluring.exploration@velarivoyages.com",
          contactNumber: "+1-549-272-5675",
        },
      },
    ],
    title: "Alluring Exploration of the Golden Tide Rise",
    description:
      "This whisper takes you beyond the ordinary, starting in Tampa. With breathtaking stops in Bermuda, Fort Lauderdale, Miami, your cruise delivers immersive moments and unforgettable vistas.",
    rating: 4.0,
    tags: ["exclusive", "short-getaway"],
  },
  {
    basePrice: 6892,
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
          city: "Nassau",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Cozumel",
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
        "Join us in Tampa for a infinite of a lifetime. Sail across the serene waters of Caribbean, stopping at ports like Nassau, Cozumel, George Town, Miami where timeless traditions meet modern luxuries.",
      distance: "1229 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Tampa to Nassau",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Nassau to Cozumel",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Sailing from Cozumel to George Town",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Sailing from George Town to Miami",
        },
        {
          start: "Day 13",
          end: "Day 14",
          duration: "2 days",
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
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Exploring Nassau",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Cozumel",
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
          description: "Exploring Miami",
        },
        {
          start: "Day 15",
          end: "Day 15",
          duration: "1 days",
          description: "Exploring Tampa",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Daniel Douglas",
        role: "Corporate Concierge",
        languages: ["English", "Portuguese", "Quechua"], // Use the properly generated languages list
        experienceYears: 6,
        profileImage: "https://randomuser.me/api/portraits/men/15.jpg",
        contact: {
          contactEmail: "azure.adventure.of.t@velarivoyages.com",
          contactNumber: "+1-478-349-1702",
        },
      },
    ],
    title: "Azure Adventure of the Sunshine Gateway",
    description:
      "Join us in Tampa for a infinite of a lifetime. Sail across the serene waters of Caribbean, stopping at ports like Nassau, Cozumel, George Town, Miami where timeless traditions meet modern luxuries.",
    rating: 4.9,
    tags: ["family-friendly"],
  },
  {
    basePrice: 3298,
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
      country: "",
      coordinates: {
        latitude: 0,
        longitude: 0,
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
          city: "San Juan",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "Bermuda",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
      ],
      description:
        "Escape to sea from Tampa on a luxurious voyage exploring the magic of Caribbean. Visit unforgettable locales like San Juan, Bermuda, where each stop inspires awe.",
      distance: "1016 nautical miles",
      totalDuration: "7 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Tampa to San Juan",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from San Juan to Bermuda",
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
          description: "Exploring San Juan",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Bermuda",
        },
      ],
    },
    tourCategoryId: "theme-cruise",
    contactPersonnel: [
      {
        name: "Zachary Palmer",
        role: "Corporate Concierge",
        languages: ["English", "Portuguese", "Quechua"], // Use the properly generated languages list
        experienceYears: 18,
        profileImage: "https://randomuser.me/api/portraits/men/86.jpg",
        contact: {
          contactEmail: "pristine.tranquility@velarivoyages.com",
          contactNumber: "+1-325-326-3259",
        },
      },
    ],
    title: "Pristine Tranquility of the Caribbean Rhythms",
    description:
      "Escape to sea from Tampa on a luxurious voyage exploring the magic of Caribbean. Visit unforgettable locales like San Juan, Bermuda, where each stop inspires awe.",
    rating: 4.8,
    tags: ["themed-cruise", "cruise-line", "general"],
  },
];
