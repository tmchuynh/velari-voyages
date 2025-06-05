import { Cruise } from "@/lib/interfaces/services/cruises";

export const miamiCruises: Cruise[] = [
  {
    basePrice: 3269,
    departureLocation: {
      city: "Miami",
      country: "United States",
      region: "Caribbean",
      coordinates: {
        latitude: 25.7617,
        longitude: -80.1918,
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
    hasPopularDestination: true,
    category: "premium",
    itinerary: {
      route: [
        {
          city: "Miami",
          country: "United States",
          region: "Caribbean",
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
          city: "Fort Lauderdale",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
      ],
      description:
        "Set sail from Miami on this horizon-kissed mirage through the heart of Caribbean. Experience the perfect blend of relaxation and adventure as you explore St. Thomas and Tampa and Philipsburg and Fort Lauderdale, with personalized service and unforgettable experiences awaiting at every port.",
      distance: "1350 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Miami to St. Thomas",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from St. Thomas to Tampa",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from Tampa to Philipsburg",
        },
        {
          start: "Day 13",
          end: "Day 14",
          duration: "2 days",
          description: "Sailing from Philipsburg to Fort Lauderdale",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Miami",
        },
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Exploring St. Thomas",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Exploring Tampa",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Exploring Philipsburg",
        },
        {
          start: "Day 15",
          end: "Day 15",
          duration: "1 days",
          description: "Exploring Fort Lauderdale",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Joseph Coleman",
        role: "Customer Service Representative",
        languages: ["English", "Haitian", "Spanish"], // Use the properly generated languages list
        experienceYears: 13,
        profileImage: "https://randomuser.me/api/portraits/men/71.jpg",
        contact: {
          contactEmail: "infinite.excursion.o@velarivoyages.com",
          contactNumber: "+1-972-670-9874",
        },
      },
    ],
    title: "Infinite Excursion of the Tropical Firelight",
    description:
      "Set sail from Miami on this horizon-kissed mirage through the heart of Caribbean. Experience the perfect blend of relaxation and adventure as you explore St. Thomas and Tampa and Philipsburg and Fort Lauderdale, with personalized service and unforgettable experiences awaiting at every port.",
    rating: 4.2,
    tags: ["wellness"],
  },
  {
    basePrice: 4210,
    departureLocation: {
      city: "Miami",
      country: "United States",
      region: "Caribbean",
      coordinates: {
        latitude: 25.7617,
        longitude: -80.1918,
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
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "ultra-luxury",
    itinerary: {
      route: [
        {
          city: "Miami",
          country: "United States",
          region: "Caribbean",
          coordinates: {
            latitude: 25.7617,
            longitude: -80.1918,
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
        "Sail away from the charming harbor of Miami on this panoramic journey across Caribbean. Uncover the beauty and history of San Juan, George Town, Philipsburg with curated excursions, world-class cuisine, and exceptional service.",
      distance: "565 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Miami to San Juan",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from San Juan to George Town",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from George Town to Philipsburg",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Miami",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring San Juan",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring George Town",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Exploring Philipsburg",
        },
      ],
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Luis Russell",
        role: "Customer Service Representative",
        languages: ["English", "Haitian", "Spanish"], // Use the properly generated languages list
        experienceYears: 16,
        profileImage: "https://randomuser.me/api/portraits/men/27.jpg",
        contact: {
          contactEmail: "sundrenched.resonanc@velarivoyages.com",
          contactNumber: "+1-396-912-3244",
        },
      },
    ],
    title: "Sun-Drenched Resonance of the City of Endless Summer",
    description:
      "Sail away from the charming harbor of Miami on this panoramic journey across Caribbean. Uncover the beauty and history of San Juan, George Town, Philipsburg with curated excursions, world-class cuisine, and exceptional service.",
    rating: 4.3,
    tags: ["fall-cruise"],
  },
  {
    basePrice: 5387,
    departureLocation: {
      city: "Miami",
      country: "United States",
      region: "Caribbean",
      coordinates: {
        latitude: 25.7617,
        longitude: -80.1918,
      },
    },
    arrivalLocation: {
      city: "Miami",
      country: "United States",
      region: "Caribbean",
      coordinates: {
        latitude: 25.7617,
        longitude: -80.1918,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "luxury",
    itinerary: {
      route: [
        {
          city: "Miami",
          country: "United States",
          region: "Caribbean",
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
          city: "Fort Lauderdale",
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
          city: "Tampa",
          country: "United States",
          coordinates: {
            latitude: 27.9506,
            longitude: -82.4572,
          },
        },
        {
          city: "Miami",
          country: "United States",
          region: "Caribbean",
          coordinates: {
            latitude: 25.7617,
            longitude: -80.1918,
          },
        },
      ],
      description:
        "From bustling Miami to serene Caribbean shores, this cruise invites you to relax, explore, and indulge. Stops at Philipsburg, Fort Lauderdale, Roatán, Tampa deliver a balanced blend of culture and comfort.",
      distance: "1064 nautical miles",
      totalDuration: "20 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Miami to Philipsburg",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Philipsburg to Fort Lauderdale",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Sailing from Fort Lauderdale to Roatán",
        },
        {
          start: "Day 14",
          end: "Day 15",
          duration: "2 days",
          description: "Sailing from Roatán to Tampa",
        },
        {
          start: "Day 17",
          end: "Day 18",
          duration: "2 days",
          description: "Sailing from Tampa to Miami",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Miami",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Philipsburg",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Exploring Fort Lauderdale",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Exploring Roatán",
        },
        {
          start: "Day 16",
          end: "Day 16",
          duration: "1 days",
          description: "Exploring Tampa",
        },
        {
          start: "Day 19",
          end: "Day 20",
          duration: "2 days",
          description: "Exploring Miami",
        },
      ],
    },
    tourCategoryId: "luxury-cruise",
    contactPersonnel: [
      {
        name: "Wei West",
        role: "Customer Service Representative",
        languages: ["English", "Haitian", "Spanish"], // Use the properly generated languages list
        experienceYears: 7,
        profileImage: "https://randomuser.me/api/portraits/men/59.jpg",
        contact: {
          contactEmail: "pearlescent.eclipse.@velarivoyages.com",
          contactNumber: "+1-869-772-6213",
        },
      },
    ],
    title: "Pearlescent Eclipse of the Sun-Kissed Archipelago",
    description:
      "From bustling Miami to serene Caribbean shores, this cruise invites you to relax, explore, and indulge. Stops at Philipsburg, Fort Lauderdale, Roatán, Tampa deliver a balanced blend of culture and comfort.",
    rating: 4.1,
    tags: ["cruise-journey", "weekend-cruise"],
  },
  {
    basePrice: 9338,
    departureLocation: {
      city: "Miami",
      country: "United States",
      region: "Caribbean",
      coordinates: {
        latitude: 25.7617,
        longitude: -80.1918,
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
    category: "ultra-luxury",
    itinerary: {
      route: [
        {
          city: "Miami",
          country: "United States",
          region: "Caribbean",
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
          city: "Philipsburg",
          country: "Sint Maarten",
          coordinates: {
            latitude: 18.0167,
            longitude: -63.0587,
          },
        },
      ],
      description:
        "Unwind and explore on this horizon through Caribbean, departing from Miami. With every stop—from Bermuda to Philipsburg—you’ll collect memories that last a lifetime.",
      distance: "1302 nautical miles",
      totalDuration: "7 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Miami to Bermuda",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Bermuda to Philipsburg",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Miami",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Bermuda",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Exploring Philipsburg",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Dennis Crawford",
        role: "Customer Service Representative",
        languages: ["English", "Haitian", "Spanish"], // Use the properly generated languages list
        experienceYears: 15,
        profileImage: "https://randomuser.me/api/portraits/men/69.jpg",
        contact: {
          contactEmail: "spectacular.mythos.o@velarivoyages.com",
          contactNumber: "+1-492-224-7162",
        },
      },
    ],
    title: "Spectacular Mythos of the City of Endless Summer",
    description:
      "Unwind and explore on this horizon through Caribbean, departing from Miami. With every stop—from Bermuda to Philipsburg—you’ll collect memories that last a lifetime.",
    rating: 4.5,
    tags: ["wellness", "family-friendly"],
  },
  {
    basePrice: 9875,
    departureLocation: {
      city: "Miami",
      country: "United States",
      region: "Caribbean",
      coordinates: {
        latitude: 25.7617,
        longitude: -80.1918,
      },
    },
    arrivalLocation: {
      city: "Miami",
      country: "United States",
      region: "Caribbean",
      coordinates: {
        latitude: 25.7617,
        longitude: -80.1918,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "premium",
    itinerary: {
      route: [
        {
          city: "Miami",
          country: "United States",
          region: "Caribbean",
          coordinates: {
            latitude: 25.7617,
            longitude: -80.1918,
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
          city: "Philipsburg",
          country: "Sint Maarten",
          coordinates: {
            latitude: 18.0167,
            longitude: -63.0587,
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
          city: "Miami",
          country: "United States",
          region: "Caribbean",
          coordinates: {
            latitude: 25.7617,
            longitude: -80.1918,
          },
        },
      ],
      description:
        "Savor each moment of this idyllic escape through Caribbean, starting in Miami. Visit renowned locations like Cozumel, Philipsburg, Tampa, Fort Lauderdale, where adventure and relaxation intertwine.",
      distance: "1428 nautical miles",
      totalDuration: "16 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Miami to Cozumel",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Cozumel to Philipsburg",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from Philipsburg to Tampa",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Sailing from Tampa to Fort Lauderdale",
        },
        {
          start: "Day 14",
          end: "Day 14",
          duration: "1 days",
          description: "Sailing from Fort Lauderdale to Miami",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Miami",
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
          description: "Exploring Philipsburg",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Exploring Tampa",
        },
        {
          start: "Day 13",
          end: "Day 13",
          duration: "1 days",
          description: "Exploring Fort Lauderdale",
        },
        {
          start: "Day 15",
          end: "Day 16",
          duration: "2 days",
          description: "Exploring Miami",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "James Dunn",
        role: "Customer Service Representative",
        languages: ["English", "Haitian", "Spanish"], // Use the properly generated languages list
        experienceYears: 12,
        profileImage: "https://randomuser.me/api/portraits/men/3.jpg",
        contact: {
          contactEmail: "dreamlike.arcadia.of@velarivoyages.com",
          contactNumber: "+1-414-594-7186",
        },
      },
    ],
    title: "Dreamlike Arcadia of the Crystalline Currents",
    description:
      "Savor each moment of this idyllic escape through Caribbean, starting in Miami. Visit renowned locations like Cozumel, Philipsburg, Tampa, Fort Lauderdale, where adventure and relaxation intertwine.",
    rating: 4.1,
    tags: ["cultural"],
  },
  {
    basePrice: 6079,
    departureLocation: {
      city: "Miami",
      country: "United States",
      region: "Caribbean",
      coordinates: {
        latitude: 25.7617,
        longitude: -80.1918,
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
          city: "Miami",
          country: "United States",
          region: "Caribbean",
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
          city: "Nassau",
          country: "Bahamas",
          coordinates: {
            latitude: 25.0582,
            longitude: -77.3432,
          },
        },
      ],
      description:
        "An escape like no other begins in Miami, where your eclipse launches into the heart of Caribbean. Discover the magic of Bermuda, Nassau with style and sophistication.",
      distance: "1055 nautical miles",
      totalDuration: "7 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Miami to Bermuda",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Bermuda to Nassau",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Miami",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Bermuda",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Nassau",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Bruce Dunn",
        role: "Customer Service Representative",
        languages: ["English", "Haitian", "Spanish"], // Use the properly generated languages list
        experienceYears: 19,
        profileImage: "https://randomuser.me/api/portraits/men/78.jpg",
        contact: {
          contactEmail: "mystical.mirage.of.t@velarivoyages.com",
          contactNumber: "+1-650-906-5413",
        },
      },
    ],
    title: "Mystical Mirage of the Magic City",
    description:
      "An escape like no other begins in Miami, where your eclipse launches into the heart of Caribbean. Discover the magic of Bermuda, Nassau with style and sophistication.",
    rating: 4.9,
    tags: ["cruise-excursion"],
  },
  {
    basePrice: 1652,
    departureLocation: {
      city: "Miami",
      country: "United States",
      region: "Caribbean",
      coordinates: {
        latitude: 25.7617,
        longitude: -80.1918,
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
    category: "ultra-luxury",
    itinerary: {
      route: [
        {
          city: "Miami",
          country: "United States",
          region: "Caribbean",
          coordinates: {
            latitude: 25.7617,
            longitude: -80.1918,
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
      ],
      description:
        "This handpicked frontier begins in Miami and travels through Caribbean's iconic waterscapes. Discover San Juan, Bermuda, Fort Lauderdale, Nassau as each day brings new stories and every night offers elegant repose.",
      distance: "802 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Miami to San Juan",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from San Juan to Bermuda",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from Bermuda to Fort Lauderdale",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Sailing from Fort Lauderdale to Nassau",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Miami",
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
          description: "Exploring Bermuda",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Exploring Fort Lauderdale",
        },
        {
          start: "Day 14",
          end: "Day 15",
          duration: "2 days",
          description: "Exploring Nassau",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Terry Stewart",
        role: "Customer Service Representative",
        languages: ["English", "Haitian", "Spanish"], // Use the properly generated languages list
        experienceYears: 13,
        profileImage: "https://randomuser.me/api/portraits/men/53.jpg",
        contact: {
          contactEmail: "tidewashed.zenith.of@velarivoyages.com",
          contactNumber: "+1-415-657-7339",
        },
      },
    ],
    title: "Tide-Washed Zenith of the Coastal Pulse",
    description:
      "This handpicked frontier begins in Miami and travels through Caribbean's iconic waterscapes. Discover San Juan, Bermuda, Fort Lauderdale, Nassau as each day brings new stories and every night offers elegant repose.",
    rating: 4.7,
    tags: ["cruise-excursion"],
  },
  {
    basePrice: 9535,
    departureLocation: {
      city: "Miami",
      country: "United States",
      region: "Caribbean",
      coordinates: {
        latitude: 25.7617,
        longitude: -80.1918,
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
    category: "ultra-luxury",
    itinerary: {
      route: [
        {
          city: "Miami",
          country: "United States",
          region: "Caribbean",
          coordinates: {
            latitude: 25.7617,
            longitude: -80.1918,
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
          city: "Tampa",
          country: "United States",
          coordinates: {
            latitude: 27.9506,
            longitude: -82.4572,
          },
        },
      ],
      description:
        "Cruise into cultural richness aboard this idyllic frontier departing Miami. Savor local cuisine and uncover regional beauty from Nassau to Bermuda.",
      distance: "1163 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Miami to Nassau",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Nassau to Bermuda",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Sailing from Bermuda to Fort Lauderdale",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Sailing from Fort Lauderdale to Tampa",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Miami",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Nassau",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Bermuda",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Exploring Fort Lauderdale",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Exploring Tampa",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Anthony Cooper",
        role: "Customer Service Representative",
        languages: ["English", "Haitian", "Spanish"], // Use the properly generated languages list
        experienceYears: 14,
        profileImage: "https://randomuser.me/api/portraits/men/68.jpg",
        contact: {
          contactEmail: "serene.odyssey.of.th@velarivoyages.com",
          contactNumber: "+1-102-337-3853",
        },
      },
    ],
    title: "Serene Odyssey of the Magic City",
    description:
      "Cruise into cultural richness aboard this idyllic frontier departing Miami. Savor local cuisine and uncover regional beauty from Nassau to Bermuda.",
    rating: 4.0,
    tags: ["short-getaway"],
  },
  {
    basePrice: 3292,
    departureLocation: {
      city: "Miami",
      country: "United States",
      region: "Caribbean",
      coordinates: {
        latitude: 25.7617,
        longitude: -80.1918,
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
    hasPopularDestination: false,
    category: "ultra-luxury",
    itinerary: {
      route: [
        {
          city: "Miami",
          country: "United States",
          region: "Caribbean",
          coordinates: {
            latitude: 25.7617,
            longitude: -80.1918,
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
      ],
      description:
        "Sail away from the charming harbor of Miami on this breathtaking journey across Caribbean. Uncover the beauty and history of San Juan, Roatán, Philipsburg with curated excursions, world-class cuisine, and exceptional service.",
      distance: "1343 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Miami to San Juan",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Sailing from San Juan to Roatán",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from Roatán to Philipsburg",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Miami",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Exploring San Juan",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Exploring Roatán",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Exploring Philipsburg",
        },
      ],
    },
    tourCategoryId: "anniversary-cruise",
    contactPersonnel: [
      {
        name: "Thomas Wallace",
        role: "Customer Service Representative",
        languages: ["English", "Haitian", "Spanish"], // Use the properly generated languages list
        experienceYears: 13,
        profileImage: "https://randomuser.me/api/portraits/men/2.jpg",
        contact: {
          contactEmail: "forbidden.resonance.@velarivoyages.com",
          contactNumber: "+1-934-640-5519",
        },
      },
    ],
    title: "Forbidden Resonance of the City of Endless Summer",
    description:
      "Sail away from the charming harbor of Miami on this breathtaking journey across Caribbean. Uncover the beauty and history of San Juan, Roatán, Philipsburg with curated excursions, world-class cuisine, and exceptional service.",
    rating: 4.3,
    tags: ["anniversary-cruise", "cruise-adventure"],
  },
  {
    basePrice: 8701,
    departureLocation: {
      city: "Miami",
      country: "United States",
      region: "Caribbean",
      coordinates: {
        latitude: 25.7617,
        longitude: -80.1918,
      },
    },
    arrivalLocation: {
      city: "Miami",
      country: "United States",
      region: "Caribbean",
      coordinates: {
        latitude: 25.7617,
        longitude: -80.1918,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "mainstream",
    itinerary: {
      route: [
        {
          city: "Miami",
          country: "United States",
          region: "Caribbean",
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
          city: "Miami",
          country: "United States",
          region: "Caribbean",
          coordinates: {
            latitude: 25.7617,
            longitude: -80.1918,
          },
        },
      ],
      description:
        "Escape into the calm waters of Caribbean with this majestic journey from Miami. Explore vibrant markets, sun-soaked beaches, and architectural marvels at St. Thomas, Bermuda, Tampa.",
      distance: "1167 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Miami to St. Thomas",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from St. Thomas to Bermuda",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from Bermuda to Tampa",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Sailing from Tampa to Miami",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Miami",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring St. Thomas",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Exploring Bermuda",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Exploring Tampa",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Exploring Miami",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Aiden Dean",
        role: "Customer Service Representative",
        languages: ["English", "Haitian", "Spanish"], // Use the properly generated languages list
        experienceYears: 19,
        profileImage: "https://randomuser.me/api/portraits/men/75.jpg",
        contact: {
          contactEmail: "serene.escape.of.the@velarivoyages.com",
          contactNumber: "+1-315-566-4713",
        },
      },
    ],
    title: "Serene Escape of the Caribbean Rhythms",
    description:
      "Escape into the calm waters of Caribbean with this majestic journey from Miami. Explore vibrant markets, sun-soaked beaches, and architectural marvels at St. Thomas, Bermuda, Tampa.",
    rating: 4.4,
    tags: ["holiday-cruise"],
  },
  {
    basePrice: 5291,
    departureLocation: {
      city: "Miami",
      country: "United States",
      region: "Caribbean",
      coordinates: {
        latitude: 25.7617,
        longitude: -80.1918,
      },
    },
    arrivalLocation: {
      city: "Miami",
      country: "United States",
      region: "Caribbean",
      coordinates: {
        latitude: 25.7617,
        longitude: -80.1918,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "expedition",
    itinerary: {
      route: [
        {
          city: "Miami",
          country: "United States",
          region: "Caribbean",
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
          region: "Caribbean",
          coordinates: {
            latitude: 25.7617,
            longitude: -80.1918,
          },
        },
      ],
      description:
        "Escape the everyday with this epic journey through Caribbean, departing from Miami. You'll visit George Town, Tampa, Philipsburg, where every stop is a new adventure.",
      distance: "1059 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Miami to George Town",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Sailing from George Town to Tampa",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Tampa to Philipsburg",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from Philipsburg to Miami",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Miami",
        },
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Exploring George Town",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Exploring Tampa",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Exploring Philipsburg",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Exploring Miami",
        },
      ],
    },
    tourCategoryId: "holiday-cruise",
    contactPersonnel: [
      {
        name: "Billy Coleman",
        role: "Customer Service Representative",
        languages: ["English", "Haitian", "Spanish"], // Use the properly generated languages list
        experienceYears: 12,
        profileImage: "https://randomuser.me/api/portraits/men/70.jpg",
        contact: {
          contactEmail: "serene.odyssey.of.th@velarivoyages.com",
          contactNumber: "+1-112-280-6631",
        },
      },
    ],
    title: "Serene Odyssey of the Heatwave Muse",
    description:
      "Escape the everyday with this epic journey through Caribbean, departing from Miami. You'll visit George Town, Tampa, Philipsburg, where every stop is a new adventure.",
    rating: 4.7,
    tags: ["long-distance", "cruise-holiday", "cruise-experience"],
  },
  {
    basePrice: 4554,
    departureLocation: {
      city: "Miami",
      country: "United States",
      region: "Caribbean",
      coordinates: {
        latitude: 25.7617,
        longitude: -80.1918,
      },
    },
    arrivalLocation: {
      city: "Miami",
      country: "United States",
      region: "Caribbean",
      coordinates: {
        latitude: 25.7617,
        longitude: -80.1918,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "premium",
    itinerary: {
      route: [
        {
          city: "Miami",
          country: "United States",
          region: "Caribbean",
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
          region: "Caribbean",
          coordinates: {
            latitude: 25.7617,
            longitude: -80.1918,
          },
        },
      ],
      description:
        "This extraordinary voyage from Miami offers the ultimate Caribbean exploration. Immerse yourself in the rich cultures and stunning landscapes of Philipsburg, Fort Lauderdale, George Town and St. Thomas, creating memories that will last a lifetime.",
      distance: "1230 nautical miles",
      totalDuration: "17 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Miami to Philipsburg",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Philipsburg to Fort Lauderdale",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from Fort Lauderdale to George Town",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Sailing from George Town to St. Thomas",
        },
        {
          start: "Day 14",
          end: "Day 15",
          duration: "2 days",
          description: "Sailing from St. Thomas to Miami",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Miami",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Philipsburg",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Exploring Fort Lauderdale",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Exploring George Town",
        },
        {
          start: "Day 13",
          end: "Day 13",
          duration: "1 days",
          description: "Exploring St. Thomas",
        },
        {
          start: "Day 16",
          end: "Day 17",
          duration: "2 days",
          description: "Exploring Miami",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Walter Hall",
        role: "Customer Service Representative",
        languages: ["English", "Haitian", "Spanish"], // Use the properly generated languages list
        experienceYears: 6,
        profileImage: "https://randomuser.me/api/portraits/men/50.jpg",
        contact: {
          contactEmail: "transcendent.infinit@velarivoyages.com",
          contactNumber: "+1-428-903-1780",
        },
      },
    ],
    title: "Transcendent Infinite of the Heatwave Muse",
    description:
      "This extraordinary voyage from Miami offers the ultimate Caribbean exploration. Immerse yourself in the rich cultures and stunning landscapes of Philipsburg, Fort Lauderdale, George Town and St. Thomas, creating memories that will last a lifetime.",
    rating: 4.8,
    tags: ["cruise", "anniversary-cruise", "tropical"],
  },
  {
    basePrice: 4065,
    departureLocation: {
      city: "Miami",
      country: "United States",
      region: "Caribbean",
      coordinates: {
        latitude: 25.7617,
        longitude: -80.1918,
      },
    },
    arrivalLocation: {
      city: "Miami",
      country: "United States",
      region: "Caribbean",
      coordinates: {
        latitude: 25.7617,
        longitude: -80.1918,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "luxury",
    itinerary: {
      route: [
        {
          city: "Miami",
          country: "United States",
          region: "Caribbean",
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
        {
          city: "Miami",
          country: "United States",
          region: "Caribbean",
          coordinates: {
            latitude: 25.7617,
            longitude: -80.1918,
          },
        },
      ],
      description:
        "This hand-selected legendary cruise offers a true taste of Caribbean. Depart from Miami and explore ports like St. Thomas, Tampa, Roatán, each telling a story through food, music, and tradition.",
      distance: "1376 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Miami to St. Thomas",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from St. Thomas to Tampa",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Sailing from Tampa to Roatán",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Sailing from Roatán to Miami",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Miami",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring St. Thomas",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Exploring Tampa",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Exploring Roatán",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Exploring Miami",
        },
      ],
    },
    tourCategoryId: "anniversary-cruise",
    contactPersonnel: [
      {
        name: "Matthew Wallace",
        role: "Customer Service Representative",
        languages: ["English", "Haitian", "Spanish"], // Use the properly generated languages list
        experienceYears: 9,
        profileImage: "https://randomuser.me/api/portraits/men/42.jpg",
        contact: {
          contactEmail: "aweinspiring.reflect@velarivoyages.com",
          contactNumber: "+1-186-354-9724",
        },
      },
    ],
    title: "Awe-Inspiring Reflection of the Crystalline Currents",
    description:
      "This hand-selected legendary cruise offers a true taste of Caribbean. Depart from Miami and explore ports like St. Thomas, Tampa, Roatán, each telling a story through food, music, and tradition.",
    rating: 4.8,
    tags: ["anniversary-cruise"],
  },
  {
    basePrice: 7259,
    departureLocation: {
      city: "Miami",
      country: "United States",
      region: "Caribbean",
      coordinates: {
        latitude: 25.7617,
        longitude: -80.1918,
      },
    },
    arrivalLocation: {
      city: "Miami",
      country: "United States",
      region: "Caribbean",
      coordinates: {
        latitude: 25.7617,
        longitude: -80.1918,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "luxury",
    itinerary: {
      route: [
        {
          city: "Miami",
          country: "United States",
          region: "Caribbean",
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
          city: "Miami",
          country: "United States",
          region: "Caribbean",
          coordinates: {
            latitude: 25.7617,
            longitude: -80.1918,
          },
        },
      ],
      description:
        "A voyage of contrasts awaits from Miami. Discover the historical and natural richness of Caribbean as you cruise to spectacular destinations like Roatán, Fort Lauderdale, Cozumel.",
      distance: "1396 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Miami to Roatán",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Roatán to Fort Lauderdale",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Fort Lauderdale to Cozumel",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Sailing from Cozumel to Miami",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Miami",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Roatán",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Fort Lauderdale",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Exploring Cozumel",
        },
        {
          start: "Day 14",
          end: "Day 14",
          duration: "1 days",
          description: "Exploring Miami",
        },
      ],
    },
    tourCategoryId: "vip-cruise",
    contactPersonnel: [
      {
        name: "Daniel Wells",
        role: "Customer Service Representative",
        languages: ["English", "Haitian", "Spanish"], // Use the properly generated languages list
        experienceYears: 5,
        profileImage: "https://randomuser.me/api/portraits/men/36.jpg",
        contact: {
          contactEmail: "radiant.legacy.of.th@velarivoyages.com",
          contactNumber: "+1-195-994-9216",
        },
      },
    ],
    title: "Radiant Legacy of the Azure Horizons",
    description:
      "A voyage of contrasts awaits from Miami. Discover the historical and natural richness of Caribbean as you cruise to spectacular destinations like Roatán, Fort Lauderdale, Cozumel.",
    rating: 4.4,
    tags: ["expedition", "VIP", "cruise"],
  },
  {
    basePrice: 7908,
    departureLocation: {
      city: "Miami",
      country: "United States",
      region: "Caribbean",
      coordinates: {
        latitude: 25.7617,
        longitude: -80.1918,
      },
    },
    arrivalLocation: {
      city: "Miami",
      country: "United States",
      region: "Caribbean",
      coordinates: {
        latitude: 25.7617,
        longitude: -80.1918,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "expedition",
    itinerary: {
      route: [
        {
          city: "Miami",
          country: "United States",
          region: "Caribbean",
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
          region: "Caribbean",
          coordinates: {
            latitude: 25.7617,
            longitude: -80.1918,
          },
        },
      ],
      description:
        "Cruise into cultural richness aboard this charming requiem departing Miami. Savor local cuisine and uncover regional beauty from St. Thomas to Roatán.",
      distance: "1312 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Miami to St. Thomas",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Sailing from St. Thomas to Roatán",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Sailing from Roatán to Miami",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Miami",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Exploring St. Thomas",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Exploring Roatán",
        },
        {
          start: "Day 13",
          end: "Day 14",
          duration: "2 days",
          description: "Exploring Miami",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Robert Mitchell",
        role: "Customer Service Representative",
        languages: ["English", "Haitian", "Spanish"], // Use the properly generated languages list
        experienceYears: 19,
        profileImage: "https://randomuser.me/api/portraits/men/98.jpg",
        contact: {
          contactEmail: "radiant.horizon.of.t@velarivoyages.com",
          contactNumber: "+1-489-264-1716",
        },
      },
    ],
    title: "Radiant Horizon of the Sapphire Waters",
    description:
      "Cruise into cultural richness aboard this charming requiem departing Miami. Savor local cuisine and uncover regional beauty from St. Thomas to Roatán.",
    rating: 4.3,
    tags: ["sightseeing"],
  },
  {
    basePrice: 9037,
    departureLocation: {
      city: "Miami",
      country: "United States",
      region: "Caribbean",
      coordinates: {
        latitude: 25.7617,
        longitude: -80.1918,
      },
    },
    arrivalLocation: {
      city: "Miami",
      country: "United States",
      region: "Caribbean",
      coordinates: {
        latitude: 25.7617,
        longitude: -80.1918,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "entry-luxury",
    itinerary: {
      route: [
        {
          city: "Miami",
          country: "United States",
          region: "Caribbean",
          coordinates: {
            latitude: 25.7617,
            longitude: -80.1918,
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
        {
          city: "Bermuda",
          country: "Bermuda",
          coordinates: {
            latitude: 32.3214,
            longitude: -64.75737,
          },
        },
        {
          city: "Miami",
          country: "United States",
          region: "Caribbean",
          coordinates: {
            latitude: 25.7617,
            longitude: -80.1918,
          },
        },
      ],
      description:
        "Let the waves lead you from Miami on this charming renaissance. Traverse the iconic waters of Caribbean and discover the beauty of Nassau, San Juan, Tampa, Bermuda.",
      distance: "1380 nautical miles",
      totalDuration: "16 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Miami to Nassau",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Sailing from Nassau to San Juan",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from San Juan to Tampa",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Sailing from Tampa to Bermuda",
        },
        {
          start: "Day 14",
          end: "Day 14",
          duration: "1 days",
          description: "Sailing from Bermuda to Miami",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Miami",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Exploring Nassau",
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
          description: "Exploring Tampa",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Exploring Bermuda",
        },
        {
          start: "Day 15",
          end: "Day 16",
          duration: "2 days",
          description: "Exploring Miami",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Jane Parker",
        role: "Loyalty Program Representative",
        languages: ["English", "Quechua", "Aymara", "Guarani"], // Use the properly generated languages list
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/women/88.jpg",
        contact: {
          contactEmail: "pristine.elevation.o@velarivoyages.com",
          contactNumber: "+1-663-844-7370",
        },
      },
    ],
    title: "Pristine Elevation of the Crystalline Currents",
    description:
      "Let the waves lead you from Miami on this charming renaissance. Traverse the iconic waters of Caribbean and discover the beauty of Nassau, San Juan, Tampa, Bermuda.",
    rating: 4.6,
    tags: ["general"],
  },
  {
    basePrice: 9303,
    departureLocation: {
      city: "Miami",
      country: "United States",
      region: "Caribbean",
      coordinates: {
        latitude: 25.7617,
        longitude: -80.1918,
      },
    },
    arrivalLocation: {
      city: "Miami",
      country: "United States",
      region: "Caribbean",
      coordinates: {
        latitude: 25.7617,
        longitude: -80.1918,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "premium",
    itinerary: {
      route: [
        {
          city: "Miami",
          country: "United States",
          region: "Caribbean",
          coordinates: {
            latitude: 25.7617,
            longitude: -80.1918,
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
          city: "Miami",
          country: "United States",
          region: "Caribbean",
          coordinates: {
            latitude: 25.7617,
            longitude: -80.1918,
          },
        },
      ],
      description:
        "Leave ordinary behind as you sail from Miami across the captivating Caribbean. Discover the distinctive personality of each destination, from Fort Lauderdale, Bermuda, Tampa.",
      distance: "911 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Miami to Fort Lauderdale",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Fort Lauderdale to Bermuda",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Sailing from Bermuda to Tampa",
        },
        {
          start: "Day 13",
          end: "Day 13",
          duration: "1 days",
          description: "Sailing from Tampa to Miami",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Miami",
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
          description: "Exploring Bermuda",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Exploring Tampa",
        },
        {
          start: "Day 14",
          end: "Day 14",
          duration: "1 days",
          description: "Exploring Miami",
        },
      ],
    },
    tourCategoryId: "anniversary-cruise",
    contactPersonnel: [
      {
        name: "Naomi Foster",
        role: "Loyalty Program Representative",
        languages: ["English", "Quechua", "Aymara", "Guarani"], // Use the properly generated languages list
        experienceYears: 6,
        profileImage: "https://randomuser.me/api/portraits/women/46.jpg",
        contact: {
          contactEmail: "pristine.embrace.of.@velarivoyages.com",
          contactNumber: "+1-422-305-9798",
        },
      },
    ],
    title: "Pristine Embrace of the Coastal Pulse",
    description:
      "Leave ordinary behind as you sail from Miami across the captivating Caribbean. Discover the distinctive personality of each destination, from Fort Lauderdale, Bermuda, Tampa.",
    rating: 4.9,
    tags: ["relaxation", "anniversary-cruise"],
  },
  {
    basePrice: 3120,
    departureLocation: {
      city: "Miami",
      country: "United States",
      region: "Caribbean",
      coordinates: {
        latitude: 25.7617,
        longitude: -80.1918,
      },
    },
    arrivalLocation: {
      city: "Miami",
      country: "United States",
      region: "Caribbean",
      coordinates: {
        latitude: 25.7617,
        longitude: -80.1918,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "premium",
    itinerary: {
      route: [
        {
          city: "Miami",
          country: "United States",
          region: "Caribbean",
          coordinates: {
            latitude: 25.7617,
            longitude: -80.1918,
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
          city: "Miami",
          country: "United States",
          region: "Caribbean",
          coordinates: {
            latitude: 25.7617,
            longitude: -80.1918,
          },
        },
      ],
      description:
        "From bustling Miami to serene Caribbean shores, this cruise invites you to relax, explore, and indulge. Stops at Fort Lauderdale, San Juan, Tampa, Philipsburg deliver a balanced blend of culture and comfort.",
      distance: "1189 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Miami to Fort Lauderdale",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Fort Lauderdale to San Juan",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from San Juan to Tampa",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Sailing from Tampa to Philipsburg",
        },
        {
          start: "Day 14",
          end: "Day 14",
          duration: "1 days",
          description: "Sailing from Philipsburg to Miami",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Miami",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Fort Lauderdale",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Exploring San Juan",
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
          start: "Day 15",
          end: "Day 15",
          duration: "1 days",
          description: "Exploring Miami",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Hannah Dunn",
        role: "Loyalty Program Representative",
        languages: ["English", "Quechua", "Aymara", "Guarani"], // Use the properly generated languages list
        experienceYears: 17,
        profileImage: "https://randomuser.me/api/portraits/women/13.jpg",
        contact: {
          contactEmail: "tranquil.adventure.o@velarivoyages.com",
          contactNumber: "+1-175-447-5894",
        },
      },
    ],
    title: "Tranquil Adventure of the Heatwave Muse",
    description:
      "From bustling Miami to serene Caribbean shores, this cruise invites you to relax, explore, and indulge. Stops at Fort Lauderdale, San Juan, Tampa, Philipsburg deliver a balanced blend of culture and comfort.",
    rating: 4.5,
    tags: ["cruise-experience", "repositioning"],
  },
  {
    basePrice: 3134,
    departureLocation: {
      city: "Miami",
      country: "United States",
      region: "Caribbean",
      coordinates: {
        latitude: 25.7617,
        longitude: -80.1918,
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
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "premium-luxury",
    itinerary: {
      route: [
        {
          city: "Miami",
          country: "United States",
          region: "Caribbean",
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
      ],
      description:
        "Let this oceanic voyage redefine your idea of travel. From Miami, explore the Caribbean in luxurious comfort, stopping at Tampa, Philipsburg where every port offers a new chapter.",
      distance: "586 nautical miles",
      totalDuration: "8 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Miami to Tampa",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Sailing from Tampa to Philipsburg",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Miami",
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
          description: "Exploring Philipsburg",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Stephanie Holloway",
        role: "Loyalty Program Representative",
        languages: ["English", "Quechua", "Aymara", "Guarani"], // Use the properly generated languages list
        experienceYears: 17,
        profileImage: "https://randomuser.me/api/portraits/women/0.jpg",
        contact: {
          contactEmail: "ornate.symphony.of.t@velarivoyages.com",
          contactNumber: "+1-755-720-1007",
        },
      },
    ],
    title: "Ornate Symphony of the Sun-Kissed Archipelago",
    description:
      "Let this oceanic voyage redefine your idea of travel. From Miami, explore the Caribbean in luxurious comfort, stopping at Tampa, Philipsburg where every port offers a new chapter.",
    rating: 4.5,
    tags: ["general"],
  },
  {
    basePrice: 5308,
    departureLocation: {
      city: "Miami",
      country: "United States",
      region: "Caribbean",
      coordinates: {
        latitude: 25.7617,
        longitude: -80.1918,
      },
    },
    arrivalLocation: {
      city: "Miami",
      country: "United States",
      region: "Caribbean",
      coordinates: {
        latitude: 25.7617,
        longitude: -80.1918,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "expedition",
    itinerary: {
      route: [
        {
          city: "Miami",
          country: "United States",
          region: "Caribbean",
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
          city: "Miami",
          country: "United States",
          region: "Caribbean",
          coordinates: {
            latitude: 25.7617,
            longitude: -80.1918,
          },
        },
      ],
      description:
        "Sail away from the charming harbor of Miami on this dreamlike journey across Caribbean. Uncover the beauty and history of George Town, St. Thomas, Bermuda, Philipsburg with curated excursions, world-class cuisine, and exceptional service.",
      distance: "709 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Miami to George Town",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Sailing from George Town to St. Thomas",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Sailing from St. Thomas to Bermuda",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Sailing from Bermuda to Philipsburg",
        },
        {
          start: "Day 14",
          end: "Day 14",
          duration: "1 days",
          description: "Sailing from Philipsburg to Miami",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Miami",
        },
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Exploring George Town",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Exploring St. Thomas",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Exploring Bermuda",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Exploring Philipsburg",
        },
        {
          start: "Day 15",
          end: "Day 15",
          duration: "1 days",
          description: "Exploring Miami",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Kinsley Sutton",
        role: "Loyalty Program Representative",
        languages: ["English", "Quechua", "Aymara", "Guarani"], // Use the properly generated languages list
        experienceYears: 13,
        profileImage: "https://randomuser.me/api/portraits/women/27.jpg",
        contact: {
          contactEmail: "celestial.reflection@velarivoyages.com",
          contactNumber: "+1-568-410-8995",
        },
      },
    ],
    title: "Celestial Reflection of the Coastal Pulse",
    description:
      "Sail away from the charming harbor of Miami on this dreamlike journey across Caribbean. Uncover the beauty and history of George Town, St. Thomas, Bermuda, Philipsburg with curated excursions, world-class cuisine, and exceptional service.",
    rating: 4.7,
    tags: ["romantic"],
  },
];
