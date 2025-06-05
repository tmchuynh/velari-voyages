import { Cruise } from "@/lib/interfaces/services/cruises";

export const sanJuanCruises: Cruise[] = [
  {
    basePrice: 6269,
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
      city: "Tampa",
      country: "United States",
      coordinates: {
        latitude: 27.9506,
        longitude: -82.4572,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "glacier-cruise",
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
      ],
      description:
        "Board in San Juan for a hand-crafted pulse through the breathtaking Caribbean. Highlights include sun-drenched beaches, historic ports, and immersive culture in Roatán, Miami, Tampa.",
      distance: "1201 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from San Juan to Roatán",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Roatán to Miami",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Miami to Tampa",
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
          end: "Day 4",
          duration: "1 days",
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
          end: "Day 10",
          duration: "1 days",
          description: "Exploring Tampa",
        },
      ],
    },
    tourCategoryId: "luxury-cruise",
    contactPersonnel: [
      {
        name: "Angela Fisher",
        role: "Cruise Specialist",
        languages: ["English", "Guarani", "French"], // Use the properly generated languages list
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/women/49.jpg",
        contact: {
          contactEmail: "legendary.drift.of.t@velarivoyages.com",
          contactNumber: "+1-101-583-4041",
        },
      },
    ],
    title: "Legendary Drift of the Painted Port",
    description:
      "Board in San Juan for a hand-crafted pulse through the breathtaking Caribbean. Highlights include sun-drenched beaches, historic ports, and immersive culture in Roatán, Miami, Tampa.",
    rating: 4.5,
    tags: ["luxury", "cruise-ship", "long-distance"],
  },
  {
    basePrice: 1160,
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
      city: "Nassau",
      country: "Bahamas",
      coordinates: {
        latitude: 25.0582,
        longitude: -77.3432,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "glacier-cruise",
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
      ],
      description:
        "Your journey through the Caribbean begins in San Juan, where elegance meets adventure. Explore the shores of George Town, Nassau, with curated excursions and luxurious onboard amenities.",
      distance: "712 nautical miles",
      totalDuration: "6 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from San Juan to George Town",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Sailing from George Town to Nassau",
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
          description: "Exploring George Town",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Exploring Nassau",
        },
      ],
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Samantha Palmer",
        role: "Cruise Specialist",
        languages: ["English", "Guarani", "French"], // Use the properly generated languages list
        experienceYears: 17,
        profileImage: "https://randomuser.me/api/portraits/women/14.jpg",
        contact: {
          contactEmail: "golden.excursion.of.@velarivoyages.com",
          contactNumber: "+1-159-225-7357",
        },
      },
    ],
    title: "Golden Excursion of the Spanish Caribbean Jewel",
    description:
      "Your journey through the Caribbean begins in San Juan, where elegance meets adventure. Explore the shores of George Town, Nassau, with curated excursions and luxurious onboard amenities.",
    rating: 4.4,
    tags: ["expedition"],
  },
  {
    basePrice: 9055,
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
    category: "luxury-cruise",
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
          city: "Roatán",
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
          city: "Cozumel",
          country: "Mexico",
          coordinates: {
            latitude: 20.4233,
            longitude: -86.9212,
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
        "This extraordinary infinite from San Juan offers the ultimate Caribbean exploration. Immerse yourself in the rich cultures and stunning landscapes of Tampa, Roatán, Bermuda and Cozumel, creating memories that will last a lifetime.",
      distance: "573 nautical miles",
      totalDuration: "18 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from San Juan to Tampa",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Tampa to Roatán",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from Roatán to Bermuda",
        },
        {
          start: "Day 13",
          end: "Day 13",
          duration: "1 days",
          description: "Sailing from Bermuda to Cozumel",
        },
        {
          start: "Day 16",
          end: "Day 17",
          duration: "2 days",
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
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Tampa",
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
          description: "Exploring Bermuda",
        },
        {
          start: "Day 14",
          end: "Day 15",
          duration: "2 days",
          description: "Exploring Cozumel",
        },
        {
          start: "Day 18",
          end: "Day 18",
          duration: "1 days",
          description: "Exploring San Juan",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Emily Porter",
        role: "Cruise Specialist",
        languages: ["English", "Guarani", "French"], // Use the properly generated languages list
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/women/0.jpg",
        contact: {
          contactEmail: "breathtaking.pulse.o@velarivoyages.com",
          contactNumber: "+1-820-954-7922",
        },
      },
    ],
    title: "Breathtaking Pulse of the Colonial Echo",
    description:
      "This extraordinary infinite from San Juan offers the ultimate Caribbean exploration. Immerse yourself in the rich cultures and stunning landscapes of Tampa, Roatán, Bermuda and Cozumel, creating memories that will last a lifetime.",
    rating: 4.2,
    tags: ["cruise-experience", "cruise-vacation", "holiday-cruise"],
  },
  {
    basePrice: 6302,
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
    category: "fjords-tour",
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
          city: "Miami",
          country: "United States",
          coordinates: {
            latitude: 25.7617,
            longitude: -80.1918,
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
        "Sail into splendor from San Juan on a midnight voyage through Caribbean. Let each stop—from Nassau to Cozumel—reveal the unique flavors and colors of the region.",
      distance: "1122 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from San Juan to Nassau",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Nassau to Cozumel",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from Cozumel to Miami",
        },
        {
          start: "Day 13",
          end: "Day 13",
          duration: "1 days",
          description: "Sailing from Miami to San Juan",
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
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Nassau",
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
        name: "Amina Curtis",
        role: "Cruise Specialist",
        languages: ["English", "Guarani", "French"], // Use the properly generated languages list
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/women/36.jpg",
        contact: {
          contactEmail: "refined.serenade.of.@velarivoyages.com",
          contactNumber: "+1-295-794-5794",
        },
      },
    ],
    title: "Refined Serenade of the Sapphire Waters",
    description:
      "Sail into splendor from San Juan on a midnight voyage through Caribbean. Let each stop—from Nassau to Cozumel—reveal the unique flavors and colors of the region.",
    rating: 4.9,
    tags: ["cruise-experience", "holiday-cruise"],
  },
  {
    basePrice: 4604,
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
    category: "luxury-cruise",
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
          city: "Tampa",
          country: "United States",
          coordinates: {
            latitude: 27.9506,
            longitude: -82.4572,
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
        "Set sail from San Juan on this timeless mirage through the heart of Caribbean. Experience the perfect blend of relaxation and adventure as you explore Roatán and Tampa and Cozumel and Miami, with personalized service and unforgettable experiences awaiting at every port.",
      distance: "920 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from San Juan to Roatán",
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
          description: "Sailing from Tampa to Cozumel",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Sailing from Cozumel to Miami",
        },
        {
          start: "Day 14",
          end: "Day 14",
          duration: "1 days",
          description: "Sailing from Miami to San Juan",
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
          end: "Day 11",
          duration: "2 days",
          description: "Exploring Cozumel",
        },
        {
          start: "Day 13",
          end: "Day 13",
          duration: "1 days",
          description: "Exploring Miami",
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
        name: "Catherine Nash",
        role: "Cruise Specialist",
        languages: ["English", "Guarani", "French"], // Use the properly generated languages list
        experienceYears: 19,
        profileImage: "https://randomuser.me/api/portraits/women/65.jpg",
        contact: {
          contactEmail: "enchanting.zenith.of@velarivoyages.com",
          contactNumber: "+1-403-504-1014",
        },
      },
    ],
    title: "Enchanting Zenith of the Turquoise Lagoons",
    description:
      "Set sail from San Juan on this timeless mirage through the heart of Caribbean. Experience the perfect blend of relaxation and adventure as you explore Roatán and Tampa and Cozumel and Miami, with personalized service and unforgettable experiences awaiting at every port.",
    rating: 4.1,
    tags: ["holiday-cruise", "relaxation", "exclusive"],
  },
  {
    basePrice: 9025,
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
      city: "Tampa",
      country: "United States",
      coordinates: {
        latitude: 27.9506,
        longitude: -82.4572,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "weekend-cruise",
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
      ],
      description:
        "This handpicked reunion begins in San Juan and travels through Caribbean's iconic waterscapes. Discover Bermuda, Tampa as each day brings new stories and every night offers elegant repose.",
      distance: "1232 nautical miles",
      totalDuration: "7 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from San Juan to Bermuda",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Bermuda to Tampa",
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
          description: "Exploring Bermuda",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Tampa",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Thandiwe Cooper",
        role: "Cruise Specialist",
        languages: ["English", "Guarani", "French"], // Use the properly generated languages list
        experienceYears: 10,
        profileImage: "https://randomuser.me/api/portraits/women/38.jpg",
        contact: {
          contactEmail: "pristine.quest.of.th@velarivoyages.com",
          contactNumber: "+1-807-588-4883",
        },
      },
    ],
    title: "Pristine Quest of the Sun-Worn Stones",
    description:
      "This handpicked reunion begins in San Juan and travels through Caribbean's iconic waterscapes. Discover Bermuda, Tampa as each day brings new stories and every night offers elegant repose.",
    rating: 4.7,
    tags: ["adventure"],
  },
  {
    basePrice: 1402,
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
    category: "expedition-cruise",
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
          city: "Bermuda",
          country: "Bermuda",
          coordinates: {
            latitude: 32.3214,
            longitude: -64.75737,
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
        "Begin your saga in San Juan, a gateway to the soul of Caribbean. Enjoy days spent exploring Philipsburg, Fort Lauderdale, Bermuda and evenings immersed in onboard luxury, fine dining, and panoramic sea views.",
      distance: "930 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from San Juan to Philipsburg",
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
          description: "Sailing from Fort Lauderdale to Bermuda",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Sailing from Bermuda to San Juan",
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
          end: "Day 10",
          duration: "1 days",
          description: "Exploring Bermuda",
        },
        {
          start: "Day 13",
          end: "Day 13",
          duration: "1 days",
          description: "Exploring San Juan",
        },
      ],
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Catherine Day",
        role: "Cruise Specialist",
        languages: ["English", "Guarani", "French"], // Use the properly generated languages list
        experienceYears: 5,
        profileImage: "https://randomuser.me/api/portraits/women/53.jpg",
        contact: {
          contactEmail: "forbidden.quest.of.t@velarivoyages.com",
          contactNumber: "+1-493-221-3726",
        },
      },
    ],
    title: "Forbidden Quest of the Colonial Echo",
    description:
      "Begin your saga in San Juan, a gateway to the soul of Caribbean. Enjoy days spent exploring Philipsburg, Fort Lauderdale, Bermuda and evenings immersed in onboard luxury, fine dining, and panoramic sea views.",
    rating: 4.3,
    tags: ["fall-cruise", "long-distance"],
  },
  {
    basePrice: 6479,
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
    category: "glacier-cruise",
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
          city: "Philipsburg",
          country: "Sint Maarten",
          coordinates: {
            latitude: 18.0167,
            longitude: -63.0587,
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
        "From bustling San Juan to serene Caribbean shores, this cruise invites you to relax, explore, and indulge. Stops at Miami, Philipsburg deliver a balanced blend of culture and comfort.",
      distance: "1109 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from San Juan to Miami",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from Miami to Philipsburg",
        },
        {
          start: "Day 9",
          end: "Day 9",
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
          description: "Exploring Miami",
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
          description: "Exploring San Juan",
        },
      ],
    },
    tourCategoryId: "holiday-cruise",
    contactPersonnel: [
      {
        name: "Avery Hawkins",
        role: "Cruise Specialist",
        languages: ["English", "Guarani", "French"], // Use the properly generated languages list
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/women/77.jpg",
        contact: {
          contactEmail: "horizonkissed.sojour@velarivoyages.com",
          contactNumber: "+1-462-473-3736",
        },
      },
    ],
    title: "Horizon-Kissed Sojourn of the Island Reverie",
    description:
      "From bustling San Juan to serene Caribbean shores, this cruise invites you to relax, explore, and indulge. Stops at Miami, Philipsburg deliver a balanced blend of culture and comfort.",
    rating: 4.6,
    tags: ["cruise-holiday", "long-distance", "cruise-excursion"],
  },
  {
    basePrice: 8759,
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
    category: "tropical-cruise",
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
        "Depart from San Juan on this thoughtfully designed odyssey across the Caribbean. Savor coastal charm, cultural treasures, and ocean views with stops at Bermuda, Roatán.",
      distance: "1356 nautical miles",
      totalDuration: "8 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from San Juan to Bermuda",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Bermuda to Roatán",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Sailing from Roatán to San Juan",
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
          description: "Exploring Bermuda",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Exploring Roatán",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Exploring San Juan",
        },
      ],
    },
    tourCategoryId: "glacier-cruise",
    contactPersonnel: [
      {
        name: "Nicole Hunter",
        role: "Cruise Specialist",
        languages: ["English", "Guarani", "French"], // Use the properly generated languages list
        experienceYears: 17,
        profileImage: "https://randomuser.me/api/portraits/women/23.jpg",
        contact: {
          contactEmail: "idyllic.reverie.of.t@velarivoyages.com",
          contactNumber: "+1-683-238-9750",
        },
      },
    ],
    title: "Idyllic Reverie of the Sun-Worn Stones",
    description:
      "Depart from San Juan on this thoughtfully designed odyssey across the Caribbean. Savor coastal charm, cultural treasures, and ocean views with stops at Bermuda, Roatán.",
    rating: 4.9,
    tags: ["glacier-cruise", "cultural", "cruise-adventure"],
  },
  {
    basePrice: 2293,
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
      country: "Mexico",
      coordinates: {
        latitude: 20.4233,
        longitude: -86.9212,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "expedition-cruise",
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
      ],
      description:
        "Leave stress behind with this curated mirage from San Juan. Sail across the best of Caribbean and explore treasures like Nassau, Cozumel with comfort and style.",
      distance: "1368 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from San Juan to Nassau",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Sailing from Nassau to Cozumel",
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
          end: "Day 6",
          duration: "2 days",
          description: "Exploring Nassau",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Exploring Cozumel",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Adeline Stewart",
        role: "Cruise Specialist",
        languages: ["English", "Guarani", "French"], // Use the properly generated languages list
        experienceYears: 7,
        profileImage: "https://randomuser.me/api/portraits/women/54.jpg",
        contact: {
          contactEmail: "refined.lullaby.of.t@velarivoyages.com",
          contactNumber: "+1-335-907-4265",
        },
      },
    ],
    title: "Refined Lullaby of the Coral Sanctuaries",
    description:
      "Leave stress behind with this curated mirage from San Juan. Sail across the best of Caribbean and explore treasures like Nassau, Cozumel with comfort and style.",
    rating: 4.5,
    tags: ["exclusive"],
  },
];
