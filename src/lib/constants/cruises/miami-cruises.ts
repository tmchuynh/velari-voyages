import { Cruise } from "@/lib/interfaces/services/cruises";

export const miamiCruises: Cruise[] = [
  {
    basePrice: 5839,
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
      city: "San Juan",
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
          city: "San Juan",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
      ],
      description:
        "Launch into adventure from Miami and sail deep into the heart of the Caribbean. With ports of call like Roatán, Cozumel, George Town, San Juan, expect a voyage filled with scenic wonders and luxurious comforts.",
      distance: "896 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Miami to Roatán",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Sailing from Roatán to Cozumel",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Sailing from Cozumel to George Town",
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
          description: "Exploring Miami",
        },
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Exploring Roatán",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Exploring Cozumel",
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
          description: "Exploring San Juan",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Wei Henderson",
        role: "Group Booking Coordinator",
        languages: ["English", "Haitian", "Guarani", "French"], // Use the properly generated languages list
        experienceYears: 7,
        profileImage: "https://randomuser.me/api/portraits/men/45.jpg",
        contact: {
          contactEmail: "radiant.tranquility.@velarivoyages.com",
          contactNumber: "+1-545-789-8432",
        },
      },
    ],
    title: "Radiant Tranquility of the City of Endless Summer",
    description:
      "Launch into adventure from Miami and sail deep into the heart of the Caribbean. With ports of call like Roatán, Cozumel, George Town, San Juan, expect a voyage filled with scenic wonders and luxurious comforts.",
    rating: 4.1,
    tags: ["cruise-experience"],
  },
  {
    basePrice: 6998,
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
      city: "Roatán",
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
          city: "Cozumel",
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
        "Set off on a panorama from Miami that captures the essence of Caribbean. Discover cultural gems and culinary delights across St. Thomas, Tampa, Cozumel, Roatán.",
      distance: "1189 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Miami to St. Thomas",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Sailing from St. Thomas to Tampa",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Tampa to Cozumel",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Sailing from Cozumel to Roatán",
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
          description: "Exploring St. Thomas",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Exploring Tampa",
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
          description: "Exploring Roatán",
        },
      ],
    },
    tourCategoryId: "luxury-cruise",
    contactPersonnel: [
      {
        name: "Gabriel Stewart",
        role: "Group Booking Coordinator",
        languages: ["English", "Haitian", "Guarani", "French"], // Use the properly generated languages list
        experienceYears: 13,
        profileImage: "https://randomuser.me/api/portraits/men/72.jpg",
        contact: {
          contactEmail: "gilded.embrace.of.th@velarivoyages.com",
          contactNumber: "+1-788-724-4395",
        },
      },
    ],
    title: "Gilded Embrace of the Crystalline Currents",
    description:
      "Set off on a panorama from Miami that captures the essence of Caribbean. Discover cultural gems and culinary delights across St. Thomas, Tampa, Cozumel, Roatán.",
    rating: 4.8,
    tags: ["wellness", "cruise-ship", "luxury"],
  },
  {
    basePrice: 3376,
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
          region: "Caribbean",
          coordinates: {
            latitude: 25.7617,
            longitude: -80.1918,
          },
        },
      ],
      description:
        "Begin your journey in Miami, where tradition meets travel. This immersive solstice reveals the finest of Caribbean, from the beaches of Fort Lauderdale to the streets of San Juan.",
      distance: "662 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Miami to Fort Lauderdale",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Sailing from Fort Lauderdale to San Juan",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Sailing from San Juan to Roatán",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from Roatán to George Town",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Sailing from George Town to Miami",
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
          description: "Exploring Fort Lauderdale",
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
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Exploring George Town",
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
        name: "Gabriel Montgomery",
        role: "Group Booking Coordinator",
        languages: ["English", "Haitian", "Guarani", "French"], // Use the properly generated languages list
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/men/14.jpg",
        contact: {
          contactEmail: "extraordinary.saga.o@velarivoyages.com",
          contactNumber: "+1-356-610-3354",
        },
      },
    ],
    title: "Extraordinary Saga of the Sugarcane Skies",
    description:
      "Begin your journey in Miami, where tradition meets travel. This immersive solstice reveals the finest of Caribbean, from the beaches of Fort Lauderdale to the streets of San Juan.",
    rating: 4.8,
    tags: ["exclusive", "culinary", "sightseeing"],
  },
  {
    basePrice: 8052,
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
          city: "Nassau",
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
        "An escape like no other begins in Miami, where your symphony launches into the heart of Caribbean. Discover the magic of Nassau, Tampa, Philipsburg with style and sophistication.",
      distance: "1418 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Miami to Nassau",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Nassau to Tampa",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Sailing from Tampa to Philipsburg",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
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
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Nassau",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Tampa",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Exploring Philipsburg",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Exploring Miami",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Larry Watson",
        role: "Group Booking Coordinator",
        languages: ["English", "Haitian", "Guarani", "French"], // Use the properly generated languages list
        experienceYears: 10,
        profileImage: "https://randomuser.me/api/portraits/men/70.jpg",
        contact: {
          contactEmail: "mystical.reflection.@velarivoyages.com",
          contactNumber: "+1-470-922-7156",
        },
      },
    ],
    title: "Mystical Reflection of the Sun-Kissed Archipelago",
    description:
      "An escape like no other begins in Miami, where your symphony launches into the heart of Caribbean. Discover the magic of Nassau, Tampa, Philipsburg with style and sophistication.",
    rating: 4.8,
    tags: ["holiday-cruise", "cultural", "historical"],
  },
  {
    basePrice: 4546,
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
          city: "Philipsburg",
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
          city: "Cozumel",
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
          region: "Caribbean",
          coordinates: {
            latitude: 25.7617,
            longitude: -80.1918,
          },
        },
      ],
      description:
        "Sail away from Miami into the beautiful expanse of Caribbean. Along the way, enjoy rich cultural experiences in Philipsburg, Bermuda, Cozumel, San Juan, where history, nature, and cuisine collide.",
      distance: "1134 nautical miles",
      totalDuration: "17 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Miami to Philipsburg",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Sailing from Philipsburg to Bermuda",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Bermuda to Cozumel",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Sailing from Cozumel to San Juan",
        },
        {
          start: "Day 16",
          end: "Day 16",
          duration: "1 days",
          description: "Sailing from San Juan to Miami",
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
          description: "Exploring Philipsburg",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Exploring Bermuda",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Exploring Cozumel",
        },
        {
          start: "Day 14",
          end: "Day 15",
          duration: "2 days",
          description: "Exploring San Juan",
        },
        {
          start: "Day 17",
          end: "Day 17",
          duration: "1 days",
          description: "Exploring Miami",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Rajesh Stewart",
        role: "Group Booking Coordinator",
        languages: ["English", "Haitian", "Guarani", "French"], // Use the properly generated languages list
        experienceYears: 16,
        profileImage: "https://randomuser.me/api/portraits/men/39.jpg",
        contact: {
          contactEmail: "sublime.eclipse.of.t@velarivoyages.com",
          contactNumber: "+1-497-740-8313",
        },
      },
    ],
    title: "Sublime Eclipse of the Coastal Pulse",
    description:
      "Sail away from Miami into the beautiful expanse of Caribbean. Along the way, enjoy rich cultural experiences in Philipsburg, Bermuda, Cozumel, San Juan, where history, nature, and cuisine collide.",
    rating: 4.1,
    tags: ["fall-cruise"],
  },
  {
    basePrice: 6358,
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
        "Step aboard in Miami and begin a alluring journey through the scenic Caribbean. From historic cities to coastal hideaways like San Juan, Tampa, every day is unforgettable.",
      distance: "1207 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Miami to San Juan",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from San Juan to Tampa",
        },
        {
          start: "Day 8",
          end: "Day 8",
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
          end: "Day 4",
          duration: "1 days",
          description: "Exploring San Juan",
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
          description: "Exploring Miami",
        },
      ],
    },
    tourCategoryId: "tropical-cruise",
    contactPersonnel: [
      {
        name: "Sean Foster",
        role: "Group Booking Coordinator",
        languages: ["English", "Haitian", "Guarani", "French"], // Use the properly generated languages list
        experienceYears: 12,
        profileImage: "https://randomuser.me/api/portraits/men/54.jpg",
        contact: {
          contactEmail: "captivating.voyage.o@velarivoyages.com",
          contactNumber: "+1-643-132-5400",
        },
      },
    ],
    title: "Captivating Voyage of the Palm-Fringed Paradises",
    description:
      "Step aboard in Miami and begin a alluring journey through the scenic Caribbean. From historic cities to coastal hideaways like San Juan, Tampa, every day is unforgettable.",
    rating: 4.9,
    tags: ["tropical", "sightseeing"],
  },
  {
    basePrice: 6844,
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
          city: "Philipsburg",
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
        "This mythic eclipse begins in Miami and ventures deep into the heart of Caribbean. Wander through colorful markets, historic streets, and serene coastlines at Philipsburg, Bermuda, Fort Lauderdale.",
      distance: "985 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Miami to Philipsburg",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Sailing from Philipsburg to Bermuda",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Sailing from Bermuda to Fort Lauderdale",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
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
          end: "Day 3",
          duration: "1 days",
          description: "Exploring Philipsburg",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Exploring Bermuda",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Exploring Fort Lauderdale",
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
        name: "Austin Fletcher",
        role: "Group Booking Coordinator",
        languages: ["English", "Haitian", "Guarani", "French"], // Use the properly generated languages list
        experienceYears: 16,
        profileImage: "https://randomuser.me/api/portraits/men/93.jpg",
        contact: {
          contactEmail: "radiant.retreat.of.t@velarivoyages.com",
          contactNumber: "+1-438-737-7349",
        },
      },
    ],
    title: "Radiant Retreat of the Coastal Pulse",
    description:
      "This mythic eclipse begins in Miami and ventures deep into the heart of Caribbean. Wander through colorful markets, historic streets, and serene coastlines at Philipsburg, Bermuda, Fort Lauderdale.",
    rating: 4.9,
    tags: ["adventure", "anniversary-cruise"],
  },
  {
    basePrice: 1943,
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
          city: "Roatán",
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
          region: "Caribbean",
          coordinates: {
            latitude: 25.7617,
            longitude: -80.1918,
          },
        },
      ],
      description:
        "Sail away from Miami into the beautiful expanse of Caribbean. Along the way, enjoy rich cultural experiences in Roatán, Bermuda, San Juan, where history, nature, and cuisine collide.",
      distance: "1214 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Miami to Roatán",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Roatán to Bermuda",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Bermuda to San Juan",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Sailing from San Juan to Miami",
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
          description: "Exploring Roatán",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring Bermuda",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Exploring San Juan",
        },
        {
          start: "Day 14",
          end: "Day 14",
          duration: "1 days",
          description: "Exploring Miami",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Mark Graham",
        role: "Group Booking Coordinator",
        languages: ["English", "Haitian", "Guarani", "French"], // Use the properly generated languages list
        experienceYears: 15,
        profileImage: "https://randomuser.me/api/portraits/men/93.jpg",
        contact: {
          contactEmail: "immersive.arcadia.of@velarivoyages.com",
          contactNumber: "+1-739-962-4296",
        },
      },
    ],
    title: "Immersive Arcadia of the Coastal Pulse",
    description:
      "Sail away from Miami into the beautiful expanse of Caribbean. Along the way, enjoy rich cultural experiences in Roatán, Bermuda, San Juan, where history, nature, and cuisine collide.",
    rating: 4.3,
    tags: ["romantic"],
  },
  {
    basePrice: 9829,
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
      city: "Bermuda",
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
          city: "Bermuda",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
      ],
      description:
        "Discover the wonders of Caribbean aboard this panoramic cruise departing from Miami. Journey through crystal waters to explore the treasures of Cozumel, Roatán, St. Thomas, Bermuda, where each day brings new adventures and evenings are filled with elegant dining and entertainment.",
      distance: "579 nautical miles",
      totalDuration: "17 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Miami to Cozumel",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Sailing from Cozumel to Roatán",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Sailing from Roatán to St. Thomas",
        },
        {
          start: "Day 14",
          end: "Day 15",
          duration: "2 days",
          description: "Sailing from St. Thomas to Bermuda",
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
          description: "Exploring Cozumel",
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
          description: "Exploring St. Thomas",
        },
        {
          start: "Day 16",
          end: "Day 17",
          duration: "2 days",
          description: "Exploring Bermuda",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Liam Parker",
        role: "Group Booking Coordinator",
        languages: ["English", "Haitian", "Guarani", "French"], // Use the properly generated languages list
        experienceYears: 14,
        profileImage: "https://randomuser.me/api/portraits/men/17.jpg",
        contact: {
          contactEmail: "mesmerizing.realm.of@velarivoyages.com",
          contactNumber: "+1-612-587-2364",
        },
      },
    ],
    title: "Mesmerizing Realm of the Sapphire Waters",
    description:
      "Discover the wonders of Caribbean aboard this panoramic cruise departing from Miami. Journey through crystal waters to explore the treasures of Cozumel, Roatán, St. Thomas, Bermuda, where each day brings new adventures and evenings are filled with elegant dining and entertainment.",
    rating: 4.1,
    tags: ["cruise", "fall-cruise"],
  },
  {
    basePrice: 7845,
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
          city: "George Town",
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
        "Leave stress behind with this curated mythos from Miami. Sail across the best of Caribbean and explore treasures like George Town, Philipsburg, San Juan with comfort and style.",
      distance: "799 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Miami to George Town",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Sailing from George Town to Philipsburg",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Sailing from Philipsburg to San Juan",
        },
        {
          start: "Day 13",
          end: "Day 14",
          duration: "2 days",
          description: "Sailing from San Juan to Miami",
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
          description: "Exploring George Town",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Exploring Philipsburg",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Exploring San Juan",
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
        name: "David Montgomery",
        role: "Group Booking Coordinator",
        languages: ["English", "Haitian", "Guarani", "French"], // Use the properly generated languages list
        experienceYears: 19,
        profileImage: "https://randomuser.me/api/portraits/men/82.jpg",
        contact: {
          contactEmail: "enchanting.embrace.o@velarivoyages.com",
          contactNumber: "+1-165-674-1172",
        },
      },
    ],
    title: "Enchanting Embrace of the Reggae Shores",
    description:
      "Leave stress behind with this curated mythos from Miami. Sail across the best of Caribbean and explore treasures like George Town, Philipsburg, San Juan with comfort and style.",
    rating: 4.5,
    tags: ["cruise", "historical", "tropical"],
  },
];
