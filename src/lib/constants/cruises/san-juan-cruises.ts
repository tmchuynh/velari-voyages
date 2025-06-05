import { Cruise } from "@/lib/interfaces/services/cruises";

export const sanJuanCruises: Cruise[] = [
  {
    basePrice: 3772,
    departureLocation: {
      city: "San Juan",
      country: "Puerto Rico",
      region: "Caribbean",
      coordinates: {
        latitude: 18.4655,
        longitude: -66.1057,
      },
    },
    arrivalLocation: {
      city: "San Juan",
      country: "Puerto Rico",
      region: "Caribbean",
      coordinates: {
        latitude: 18.4655,
        longitude: -66.1057,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "luxury",
    itinerary: {
      route: [
        {
          city: "San Juan",
          country: "Puerto Rico",
          region: "Caribbean",
          coordinates: {
            latitude: 18.4655,
            longitude: -66.1057,
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
          city: "Nassau",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
        {
          city: "San Juan",
          country: "Puerto Rico",
          region: "Caribbean",
          coordinates: {
            latitude: 18.4655,
            longitude: -66.1057,
          },
        },
      ],
      description:
        "An unforgettable tranquility awaits as you cruise from San Juan across Caribbean. Dive into history, flavor, and culture with stops including Miami, Nassau.",
      distance: "1380 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from San Juan to Miami",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Miami to Nassau",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from Nassau to San Juan",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring San Juan",
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
          description: "Exploring Nassau",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Exploring San Juan",
        },
      ],
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Ronald Bennett",
        role: "Customer Service Representative",
        languages: ["English", "French", "Guarani", "Haitian"], // Use the properly generated languages list
        experienceYears: 7,
        profileImage: "https://randomuser.me/api/portraits/men/80.jpg",
        contact: {
          contactEmail: "crystalline.mystique@velarivoyages.com",
          contactNumber: "+1-712-314-6715",
        },
      },
    ],
    title: "Crystalline Mystique of the Sun-Kissed Archipelago",
    description:
      "An unforgettable tranquility awaits as you cruise from San Juan across Caribbean. Dive into history, flavor, and culture with stops including Miami, Nassau.",
    rating: 4.7,
    tags: ["weekend-cruise", "expedition", "romantic"],
  },
  {
    basePrice: 6842,
    departureLocation: {
      city: "San Juan",
      country: "Puerto Rico",
      region: "Caribbean",
      coordinates: {
        latitude: 18.4655,
        longitude: -66.1057,
      },
    },
    arrivalLocation: {
      city: "San Juan",
      country: "Puerto Rico",
      region: "Caribbean",
      coordinates: {
        latitude: 18.4655,
        longitude: -66.1057,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "luxury",
    itinerary: {
      route: [
        {
          city: "San Juan",
          country: "Puerto Rico",
          region: "Caribbean",
          coordinates: {
            latitude: 18.4655,
            longitude: -66.1057,
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
          country: "Puerto Rico",
          region: "Caribbean",
          coordinates: {
            latitude: 18.4655,
            longitude: -66.1057,
          },
        },
      ],
      description:
        "Your journey through the Caribbean begins in San Juan, where elegance meets adventure. Explore the shores of Roatán, George Town, with curated excursions and luxurious onboard amenities.",
      distance: "678 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from San Juan to Roatán",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Roatán to George Town",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from George Town to San Juan",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring San Juan",
        },
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Exploring Roatán",
        },
        {
          start: "Day 7",
          end: "Day 8",
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
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Daniel Foster",
        role: "Customer Service Representative",
        languages: ["English", "French", "Guarani", "Haitian"], // Use the properly generated languages list
        experienceYears: 15,
        profileImage: "https://randomuser.me/api/portraits/men/57.jpg",
        contact: {
          contactEmail: "unforgettable.reflec@velarivoyages.com",
          contactNumber: "+1-903-671-2568",
        },
      },
    ],
    title: "Unforgettable Reflection of the Rum-Laced Breezes",
    description:
      "Your journey through the Caribbean begins in San Juan, where elegance meets adventure. Explore the shores of Roatán, George Town, with curated excursions and luxurious onboard amenities.",
    rating: 4.0,
    tags: ["repositioning", "tropical", "short-getaway"],
  },
  {
    basePrice: 7185,
    departureLocation: {
      city: "San Juan",
      country: "Puerto Rico",
      region: "Caribbean",
      coordinates: {
        latitude: 18.4655,
        longitude: -66.1057,
      },
    },
    arrivalLocation: {
      city: "Cozumel",
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
          city: "San Juan",
          country: "Puerto Rico",
          region: "Caribbean",
          coordinates: {
            latitude: 18.4655,
            longitude: -66.1057,
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
          city: "Cozumel",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
      ],
      description:
        "This luxurious cruise from San Juan is your ticket to the captivating charm of the Caribbean. Discover the delights of Tampa, Cozumel with enriching excursions and award-winning service.",
      distance: "1297 nautical miles",
      totalDuration: "8 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from San Juan to Tampa",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Tampa to Cozumel",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring San Juan",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Tampa",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring Cozumel",
        },
      ],
    },
    tourCategoryId: "theme-cruise",
    contactPersonnel: [
      {
        name: "Thomas Baker",
        role: "Customer Service Representative",
        languages: ["English", "French", "Guarani", "Haitian"], // Use the properly generated languages list
        experienceYears: 10,
        profileImage: "https://randomuser.me/api/portraits/men/57.jpg",
        contact: {
          contactEmail: "secret.exploration.o@velarivoyages.com",
          contactNumber: "+1-514-218-7014",
        },
      },
    ],
    title: "Secret Exploration of the Painted Port",
    description:
      "This luxurious cruise from San Juan is your ticket to the captivating charm of the Caribbean. Discover the delights of Tampa, Cozumel with enriching excursions and award-winning service.",
    rating: 4.5,
    tags: ["cruise-experience", "themed-cruise"],
  },
  {
    basePrice: 5928,
    departureLocation: {
      city: "San Juan",
      country: "Puerto Rico",
      region: "Caribbean",
      coordinates: {
        latitude: 18.4655,
        longitude: -66.1057,
      },
    },
    arrivalLocation: {
      city: "San Juan",
      country: "Puerto Rico",
      region: "Caribbean",
      coordinates: {
        latitude: 18.4655,
        longitude: -66.1057,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "entry-luxury",
    itinerary: {
      route: [
        {
          city: "San Juan",
          country: "Puerto Rico",
          region: "Caribbean",
          coordinates: {
            latitude: 18.4655,
            longitude: -66.1057,
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
          country: "Puerto Rico",
          region: "Caribbean",
          coordinates: {
            latitude: 18.4655,
            longitude: -66.1057,
          },
        },
      ],
      description:
        "Sail away from the charming harbor of San Juan on this pearlescent journey across Caribbean. Uncover the beauty and history of Fort Lauderdale, St. Thomas, George Town with curated excursions, world-class cuisine, and exceptional service.",
      distance: "980 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from San Juan to Fort Lauderdale",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Fort Lauderdale to St. Thomas",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Sailing from St. Thomas to George Town",
        },
        {
          start: "Day 13",
          end: "Day 13",
          duration: "1 days",
          description: "Sailing from George Town to San Juan",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring San Juan",
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
          description: "Exploring St. Thomas",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Exploring George Town",
        },
        {
          start: "Day 14",
          end: "Day 14",
          duration: "1 days",
          description: "Exploring San Juan",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Antonio Porter",
        role: "Customer Service Representative",
        languages: ["English", "French", "Guarani", "Haitian"], // Use the properly generated languages list
        experienceYears: 9,
        profileImage: "https://randomuser.me/api/portraits/men/45.jpg",
        contact: {
          contactEmail: "infinite.reunion.of.@velarivoyages.com",
          contactNumber: "+1-398-590-1018",
        },
      },
    ],
    title: "Infinite Reunion of the Fortress of Tides",
    description:
      "Sail away from the charming harbor of San Juan on this pearlescent journey across Caribbean. Uncover the beauty and history of Fort Lauderdale, St. Thomas, George Town with curated excursions, world-class cuisine, and exceptional service.",
    rating: 4.6,
    tags: ["cruise-ship", "relaxation"],
  },
  {
    basePrice: 3254,
    departureLocation: {
      city: "San Juan",
      country: "Puerto Rico",
      region: "Caribbean",
      coordinates: {
        latitude: 18.4655,
        longitude: -66.1057,
      },
    },
    arrivalLocation: {
      city: "San Juan",
      country: "Puerto Rico",
      region: "Caribbean",
      coordinates: {
        latitude: 18.4655,
        longitude: -66.1057,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "premium",
    itinerary: {
      route: [
        {
          city: "San Juan",
          country: "Puerto Rico",
          region: "Caribbean",
          coordinates: {
            latitude: 18.4655,
            longitude: -66.1057,
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
          city: "San Juan",
          country: "Puerto Rico",
          region: "Caribbean",
          coordinates: {
            latitude: 18.4655,
            longitude: -66.1057,
          },
        },
      ],
      description:
        "Sail away from San Juan into the beautiful expanse of Caribbean. Along the way, enjoy rich cultural experiences in Fort Lauderdale, Tampa, where history, nature, and cuisine collide.",
      distance: "1187 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from San Juan to Fort Lauderdale",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Fort Lauderdale to Tampa",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Tampa to San Juan",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring San Juan",
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
          description: "Exploring Tampa",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Exploring San Juan",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Benjamin Fox",
        role: "Customer Service Representative",
        languages: ["English", "French", "Guarani", "Haitian"], // Use the properly generated languages list
        experienceYears: 9,
        profileImage: "https://randomuser.me/api/portraits/men/42.jpg",
        contact: {
          contactEmail: "eternal.voyage.of.th@velarivoyages.com",
          contactNumber: "+1-994-154-9078",
        },
      },
    ],
    title: "Eternal Voyage of the Spanish Caribbean Jewel",
    description:
      "Sail away from San Juan into the beautiful expanse of Caribbean. Along the way, enjoy rich cultural experiences in Fort Lauderdale, Tampa, where history, nature, and cuisine collide.",
    rating: 4.8,
    tags: ["cruise-adventure", "short-getaway", "cruise-journey"],
  },
  {
    basePrice: 6765,
    departureLocation: {
      city: "San Juan",
      country: "Puerto Rico",
      region: "Caribbean",
      coordinates: {
        latitude: 18.4655,
        longitude: -66.1057,
      },
    },
    arrivalLocation: {
      city: "Fort Lauderdale",
      country: "",
      coordinates: {
        latitude: 0,
        longitude: 0,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "premium",
    itinerary: {
      route: [
        {
          city: "San Juan",
          country: "Puerto Rico",
          region: "Caribbean",
          coordinates: {
            latitude: 18.4655,
            longitude: -66.1057,
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
      ],
      description:
        "Escape into the calm waters of Caribbean with this captivating journey from San Juan. Explore vibrant markets, sun-soaked beaches, and architectural marvels at Bermuda, Fort Lauderdale.",
      distance: "1133 nautical miles",
      totalDuration: "7 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from San Juan to Bermuda",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Sailing from Bermuda to Fort Lauderdale",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring San Juan",
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
          description: "Exploring Fort Lauderdale",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "James Holloway",
        role: "Customer Service Representative",
        languages: ["English", "French", "Guarani", "Haitian"], // Use the properly generated languages list
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/men/35.jpg",
        contact: {
          contactEmail: "eternal.renaissance.@velarivoyages.com",
          contactNumber: "+1-470-855-9499",
        },
      },
    ],
    title: "Eternal Renaissance of the Sun-Worn Stones",
    description:
      "Escape into the calm waters of Caribbean with this captivating journey from San Juan. Explore vibrant markets, sun-soaked beaches, and architectural marvels at Bermuda, Fort Lauderdale.",
    rating: 4.1,
    tags: ["cruise-excursion", "cruise-getaway"],
  },
  {
    basePrice: 6669,
    departureLocation: {
      city: "San Juan",
      country: "Puerto Rico",
      region: "Caribbean",
      coordinates: {
        latitude: 18.4655,
        longitude: -66.1057,
      },
    },
    arrivalLocation: {
      city: "San Juan",
      country: "Puerto Rico",
      region: "Caribbean",
      coordinates: {
        latitude: 18.4655,
        longitude: -66.1057,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "premium-luxury",
    itinerary: {
      route: [
        {
          city: "San Juan",
          country: "Puerto Rico",
          region: "Caribbean",
          coordinates: {
            latitude: 18.4655,
            longitude: -66.1057,
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
          city: "San Juan",
          country: "Puerto Rico",
          region: "Caribbean",
          coordinates: {
            latitude: 18.4655,
            longitude: -66.1057,
          },
        },
      ],
      description:
        "Board in San Juan for a hand-crafted haven through the breathtaking Caribbean. Highlights include sun-drenched beaches, historic ports, and immersive culture in Fort Lauderdale, Miami, Philipsburg, Cozumel.",
      distance: "676 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from San Juan to Fort Lauderdale",
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
          end: "Day 12",
          duration: "2 days",
          description: "Sailing from Philipsburg to Cozumel",
        },
        {
          start: "Day 14",
          end: "Day 14",
          duration: "1 days",
          description: "Sailing from Cozumel to San Juan",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring San Juan",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
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
          start: "Day 13",
          end: "Day 13",
          duration: "1 days",
          description: "Exploring Cozumel",
        },
        {
          start: "Day 15",
          end: "Day 15",
          duration: "1 days",
          description: "Exploring San Juan",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Adam Porter",
        role: "Customer Service Representative",
        languages: ["English", "French", "Guarani", "Haitian"], // Use the properly generated languages list
        experienceYears: 17,
        profileImage: "https://randomuser.me/api/portraits/men/87.jpg",
        contact: {
          contactEmail: "moonlit.passage.of.t@velarivoyages.com",
          contactNumber: "+1-403-651-3163",
        },
      },
    ],
    title: "Moonlit Passage of the Sugarcane Skies",
    description:
      "Board in San Juan for a hand-crafted haven through the breathtaking Caribbean. Highlights include sun-drenched beaches, historic ports, and immersive culture in Fort Lauderdale, Miami, Philipsburg, Cozumel.",
    rating: 4.9,
    tags: ["cruise", "long-distance", "glacier-cruise"],
  },
  {
    basePrice: 4450,
    departureLocation: {
      city: "San Juan",
      country: "Puerto Rico",
      region: "Caribbean",
      coordinates: {
        latitude: 18.4655,
        longitude: -66.1057,
      },
    },
    arrivalLocation: {
      city: "San Juan",
      country: "Puerto Rico",
      region: "Caribbean",
      coordinates: {
        latitude: 18.4655,
        longitude: -66.1057,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "entry-luxury",
    itinerary: {
      route: [
        {
          city: "San Juan",
          country: "Puerto Rico",
          region: "Caribbean",
          coordinates: {
            latitude: 18.4655,
            longitude: -66.1057,
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
          country: "Puerto Rico",
          region: "Caribbean",
          coordinates: {
            latitude: 18.4655,
            longitude: -66.1057,
          },
        },
      ],
      description:
        "Begin your journey in San Juan, where tradition meets travel. This immersive embrace reveals the finest of Caribbean, from the beaches of Tampa to the streets of Fort Lauderdale.",
      distance: "699 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from San Juan to Tampa",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Tampa to Fort Lauderdale",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Sailing from Fort Lauderdale to Philipsburg",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Sailing from Philipsburg to George Town",
        },
        {
          start: "Day 13",
          end: "Day 13",
          duration: "1 days",
          description: "Sailing from George Town to San Juan",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring San Juan",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Exploring Tampa",
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
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Exploring George Town",
        },
        {
          start: "Day 14",
          end: "Day 14",
          duration: "1 days",
          description: "Exploring San Juan",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Bobby Warren",
        role: "Customer Service Representative",
        languages: ["English", "French", "Guarani", "Haitian"], // Use the properly generated languages list
        experienceYears: 17,
        profileImage: "https://randomuser.me/api/portraits/men/38.jpg",
        contact: {
          contactEmail: "pearlescent.mystique@velarivoyages.com",
          contactNumber: "+1-501-675-2094",
        },
      },
    ],
    title: "Pearlescent Mystique of the Sun-Worn Stones",
    description:
      "Begin your journey in San Juan, where tradition meets travel. This immersive embrace reveals the finest of Caribbean, from the beaches of Tampa to the streets of Fort Lauderdale.",
    rating: 4.4,
    tags: ["long-distance"],
  },
  {
    basePrice: 1968,
    departureLocation: {
      city: "San Juan",
      country: "Puerto Rico",
      region: "Caribbean",
      coordinates: {
        latitude: 18.4655,
        longitude: -66.1057,
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
          city: "San Juan",
          country: "Puerto Rico",
          region: "Caribbean",
          coordinates: {
            latitude: 18.4655,
            longitude: -66.1057,
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
        "An escape like no other begins in San Juan, where your voyage launches into the heart of Caribbean. Discover the magic of Nassau, Bermuda, Fort Lauderdale, St. Thomas with style and sophistication.",
      distance: "662 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from San Juan to Nassau",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Nassau to Bermuda",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Sailing from Bermuda to Fort Lauderdale",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from Fort Lauderdale to St. Thomas",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring San Juan",
        },
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Exploring Nassau",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Exploring Bermuda",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Exploring Fort Lauderdale",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Exploring St. Thomas",
        },
      ],
    },
    tourCategoryId: "vip-cruise",
    contactPersonnel: [
      {
        name: "Billy Wells",
        role: "Customer Service Representative",
        languages: ["English", "French", "Guarani", "Haitian"], // Use the properly generated languages list
        experienceYears: 12,
        profileImage: "https://randomuser.me/api/portraits/men/97.jpg",
        contact: {
          contactEmail: "mesmerizing.tranquil@velarivoyages.com",
          contactNumber: "+1-459-508-8408",
        },
      },
    ],
    title: "Mesmerizing Tranquility of the Pirate Passages",
    description:
      "An escape like no other begins in San Juan, where your voyage launches into the heart of Caribbean. Discover the magic of Nassau, Bermuda, Fort Lauderdale, St. Thomas with style and sophistication.",
    rating: 4.8,
    tags: ["VIP", "family-friendly"],
  },
  {
    basePrice: 9407,
    departureLocation: {
      city: "San Juan",
      country: "Puerto Rico",
      region: "Caribbean",
      coordinates: {
        latitude: 18.4655,
        longitude: -66.1057,
      },
    },
    arrivalLocation: {
      city: "San Juan",
      country: "Puerto Rico",
      region: "Caribbean",
      coordinates: {
        latitude: 18.4655,
        longitude: -66.1057,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "premium",
    itinerary: {
      route: [
        {
          city: "San Juan",
          country: "Puerto Rico",
          region: "Caribbean",
          coordinates: {
            latitude: 18.4655,
            longitude: -66.1057,
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
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
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
          city: "San Juan",
          country: "Puerto Rico",
          region: "Caribbean",
          coordinates: {
            latitude: 18.4655,
            longitude: -66.1057,
          },
        },
      ],
      description:
        "Discover the wonders of Caribbean aboard this alluring cruise departing from San Juan. Journey through crystal waters to explore the treasures of St. Thomas, Cozumel, Philipsburg, where each day brings new adventures and evenings are filled with elegant dining and entertainment.",
      distance: "689 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from San Juan to St. Thomas",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from St. Thomas to Cozumel",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Sailing from Cozumel to Philipsburg",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Sailing from Philipsburg to San Juan",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring San Juan",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring St. Thomas",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Cozumel",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Exploring Philipsburg",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Exploring San Juan",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Eric Reed",
        role: "Customer Service Representative",
        languages: ["English", "French", "Guarani", "Haitian"], // Use the properly generated languages list
        experienceYears: 7,
        profileImage: "https://randomuser.me/api/portraits/men/16.jpg",
        contact: {
          contactEmail: "transcendent.panoram@velarivoyages.com",
          contactNumber: "+1-763-106-5533",
        },
      },
    ],
    title: "Transcendent Panorama of the Colorful Coastline",
    description:
      "Discover the wonders of Caribbean aboard this alluring cruise departing from San Juan. Journey through crystal waters to explore the treasures of St. Thomas, Cozumel, Philipsburg, where each day brings new adventures and evenings are filled with elegant dining and entertainment.",
    rating: 4.2,
    tags: ["romantic", "family-friendly"],
  },
];
