import { Cruise } from "@/lib/interfaces/services/cruises";

export const nassauCruises: Cruise[] = [
  {
    basePrice: 8438,
    departureLocation: {
      city: "Nassau",
      country: "Bahamas",
      region: "Caribbean",
      coordinates: {
        latitude: 25.0582,
        longitude: -77.3432,
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
    category: "weekend-cruise",
    itinerary: {
      route: [
        {
          city: "Nassau",
          country: "Bahamas",
          region: "Caribbean",
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
          city: "Roatán",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
      ],
      description:
        "Experience the elegance of the seas on this celestial eclipse through Caribbean, starting from the illustrious port of Nassau. From Bermuda to Roatán, each destination offers its own story, culture, and breathtaking views.",
      distance: "574 nautical miles",
      totalDuration: "7 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Nassau to Bermuda",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Bermuda to Roatán",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Nassau",
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
          description: "Exploring Roatán",
        },
      ],
    },
    tourCategoryId: "tropical-cruise",
    contactPersonnel: [
      {
        name: "Jessica Griffin",
        role: "Customer Service Representative",
        languages: ["English", "Guarani", "French"], // Use the properly generated languages list
        experienceYears: 14,
        profileImage: "https://randomuser.me/api/portraits/women/3.jpg",
        contact: {
          contactEmail: "celestial.expedition@velarivoyages.com",
          contactNumber: "+1-899-756-1647",
        },
      },
    ],
    title: "Celestial Expedition of the Sapphire Waters",
    description:
      "Experience the elegance of the seas on this celestial eclipse through Caribbean, starting from the illustrious port of Nassau. From Bermuda to Roatán, each destination offers its own story, culture, and breathtaking views.",
    rating: 4.8,
    tags: ["relaxation", "fall-cruise"],
  },
  {
    basePrice: 5608,
    departureLocation: {
      city: "Nassau",
      country: "Bahamas",
      region: "Caribbean",
      coordinates: {
        latitude: 25.0582,
        longitude: -77.3432,
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
    category: "anniversary-cruise",
    itinerary: {
      route: [
        {
          city: "Nassau",
          country: "Bahamas",
          region: "Caribbean",
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
          city: "George Town",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
      ],
      description:
        "This radiant cruise from Nassau is your ticket to the captivating charm of the Caribbean. Discover the delights of Bermuda, George Town with enriching excursions and award-winning service.",
      distance: "577 nautical miles",
      totalDuration: "7 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Nassau to Bermuda",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from Bermuda to George Town",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Nassau",
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
          description: "Exploring George Town",
        },
      ],
    },
    tourCategoryId: "holiday-cruise",
    contactPersonnel: [
      {
        name: "Jessica Fisher",
        role: "Customer Service Representative",
        languages: ["English", "Guarani", "French"], // Use the properly generated languages list
        experienceYears: 19,
        profileImage: "https://randomuser.me/api/portraits/women/89.jpg",
        contact: {
          contactEmail: "tranquil.sanctuary.o@velarivoyages.com",
          contactNumber: "+1-311-968-5439",
        },
      },
    ],
    title: "Tranquil Sanctuary of the Emerald Cays",
    description:
      "This radiant cruise from Nassau is your ticket to the captivating charm of the Caribbean. Discover the delights of Bermuda, George Town with enriching excursions and award-winning service.",
    rating: 4.9,
    tags: ["seasonal", "culinary"],
  },
  {
    basePrice: 6665,
    departureLocation: {
      city: "Nassau",
      country: "Bahamas",
      region: "Caribbean",
      coordinates: {
        latitude: 25.0582,
        longitude: -77.3432,
      },
    },
    arrivalLocation: {
      city: "Nassau",
      country: "Bahamas",
      region: "Caribbean",
      coordinates: {
        latitude: 25.0582,
        longitude: -77.3432,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "tropical-cruise",
    itinerary: {
      route: [
        {
          city: "Nassau",
          country: "Bahamas",
          region: "Caribbean",
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
          city: "Miami",
          country: "United States",
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
          region: "Caribbean",
          coordinates: {
            latitude: 25.0582,
            longitude: -77.3432,
          },
        },
      ],
      description:
        "Depart from the iconic port of Nassau and sail through the enchanting Caribbean. Explore vibrant destinations like George Town, Miami, San Juan, Fort Lauderdale, each offering its own unique charm and local flair.",
      distance: "1331 nautical miles",
      totalDuration: "16 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Nassau to George Town",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from George Town to Miami",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from Miami to San Juan",
        },
        {
          start: "Day 12",
          end: "Day 13",
          duration: "2 days",
          description: "Sailing from San Juan to Fort Lauderdale",
        },
        {
          start: "Day 15",
          end: "Day 15",
          duration: "1 days",
          description: "Sailing from Fort Lauderdale to Nassau",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Nassau",
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
          description: "Exploring Miami",
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
          description: "Exploring Fort Lauderdale",
        },
        {
          start: "Day 16",
          end: "Day 16",
          duration: "1 days",
          description: "Exploring Nassau",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Amina Fletcher",
        role: "Customer Service Representative",
        languages: ["English", "Guarani", "French"], // Use the properly generated languages list
        experienceYears: 8,
        profileImage: "https://randomuser.me/api/portraits/women/90.jpg",
        contact: {
          contactEmail: "captivating.whisper.@velarivoyages.com",
          contactNumber: "+1-418-580-9546",
        },
      },
    ],
    title: "Captivating Whisper of the Caribbean Rhythms",
    description:
      "Depart from the iconic port of Nassau and sail through the enchanting Caribbean. Explore vibrant destinations like George Town, Miami, San Juan, Fort Lauderdale, each offering its own unique charm and local flair.",
    rating: 4.5,
    tags: ["exclusive", "general"],
  },
  {
    basePrice: 6770,
    departureLocation: {
      city: "Nassau",
      country: "Bahamas",
      region: "Caribbean",
      coordinates: {
        latitude: 25.0582,
        longitude: -77.3432,
      },
    },
    arrivalLocation: {
      city: "Nassau",
      country: "Bahamas",
      region: "Caribbean",
      coordinates: {
        latitude: 25.0582,
        longitude: -77.3432,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "fall-foliage-cruise",
    itinerary: {
      route: [
        {
          city: "Nassau",
          country: "Bahamas",
          region: "Caribbean",
          coordinates: {
            latitude: 25.0582,
            longitude: -77.3432,
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
          region: "Caribbean",
          coordinates: {
            latitude: 25.0582,
            longitude: -77.3432,
          },
        },
      ],
      description:
        "An unforgettable awakening awaits as you cruise from Nassau across Caribbean. Dive into history, flavor, and culture with stops including Miami, Cozumel, Bermuda.",
      distance: "1074 nautical miles",
      totalDuration: "16 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 4",
          duration: "2 days",
          description: "Sailing from Nassau to Miami",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Sailing from Miami to Cozumel",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Sailing from Cozumel to Bermuda",
        },
        {
          start: "Day 13",
          end: "Day 14",
          duration: "2 days",
          description: "Sailing from Bermuda to Nassau",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Nassau",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Exploring Miami",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Exploring Cozumel",
        },
        {
          start: "Day 11",
          end: "Day 12",
          duration: "2 days",
          description: "Exploring Bermuda",
        },
        {
          start: "Day 15",
          end: "Day 16",
          duration: "2 days",
          description: "Exploring Nassau",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Zola Murray",
        role: "Customer Service Representative",
        languages: ["English", "Guarani", "French"], // Use the properly generated languages list
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/women/5.jpg",
        contact: {
          contactEmail: "exquisite.panorama.o@velarivoyages.com",
          contactNumber: "+1-674-497-8022",
        },
      },
    ],
    title: "Exquisite Panorama of the Tropical Isles",
    description:
      "An unforgettable awakening awaits as you cruise from Nassau across Caribbean. Dive into history, flavor, and culture with stops including Miami, Cozumel, Bermuda.",
    rating: 5.0,
    tags: ["sightseeing"],
  },
  {
    basePrice: 4885,
    departureLocation: {
      city: "Nassau",
      country: "Bahamas",
      region: "Caribbean",
      coordinates: {
        latitude: 25.0582,
        longitude: -77.3432,
      },
    },
    arrivalLocation: {
      city: "Nassau",
      country: "Bahamas",
      region: "Caribbean",
      coordinates: {
        latitude: 25.0582,
        longitude: -77.3432,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: false,
    category: "weekend-cruise",
    itinerary: {
      route: [
        {
          city: "Nassau",
          country: "Bahamas",
          region: "Caribbean",
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
          city: "Nassau",
          country: "Bahamas",
          region: "Caribbean",
          coordinates: {
            latitude: 25.0582,
            longitude: -77.3432,
          },
        },
      ],
      description:
        "Sail away from Nassau into the beautiful expanse of Caribbean. Along the way, enjoy rich cultural experiences in San Juan, George Town, Miami, where history, nature, and cuisine collide.",
      distance: "1136 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Nassau to San Juan",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from San Juan to George Town",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Sailing from George Town to Miami",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Sailing from Miami to Nassau",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Nassau",
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
          description: "Exploring George Town",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Exploring Miami",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Exploring Nassau",
        },
      ],
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Amina Campbell",
        role: "Customer Service Representative",
        languages: ["English", "Guarani", "French"], // Use the properly generated languages list
        experienceYears: 7,
        profileImage: "https://randomuser.me/api/portraits/women/70.jpg",
        contact: {
          contactEmail: "opulent.drift.of.the@velarivoyages.com",
          contactNumber: "+1-771-125-6295",
        },
      },
    ],
    title: "Opulent Drift of the Palm-Fringed Paradises",
    description:
      "Sail away from Nassau into the beautiful expanse of Caribbean. Along the way, enjoy rich cultural experiences in San Juan, George Town, Miami, where history, nature, and cuisine collide.",
    rating: 4.5,
    tags: ["relaxation", "cruise-ship", "nature"],
  },
  {
    basePrice: 8750,
    departureLocation: {
      city: "Nassau",
      country: "Bahamas",
      region: "Caribbean",
      coordinates: {
        latitude: 25.0582,
        longitude: -77.3432,
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
    category: "luxury-cruise",
    itinerary: {
      route: [
        {
          city: "Nassau",
          country: "Bahamas",
          region: "Caribbean",
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
          city: "Miami",
          country: "United States",
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
      ],
      description:
        "Embark from Nassau and traverse the Caribbean in style. Whether it’s the energy of Bermuda or the calm of Fort Lauderdale, each destination reveals a new side of paradise.",
      distance: "1125 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Nassau to Bermuda",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from Bermuda to Fort Lauderdale",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Sailing from Fort Lauderdale to Miami",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Sailing from Miami to San Juan",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Nassau",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring Bermuda",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Exploring Fort Lauderdale",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Exploring Miami",
        },
        {
          start: "Day 11",
          end: "Day 11",
          duration: "1 days",
          description: "Exploring San Juan",
        },
      ],
    },
    tourCategoryId: "vip-cruise",
    contactPersonnel: [
      {
        name: "Lisa Dunn",
        role: "Customer Service Representative",
        languages: ["English", "Guarani", "French"], // Use the properly generated languages list
        experienceYears: 14,
        profileImage: "https://randomuser.me/api/portraits/women/61.jpg",
        contact: {
          contactEmail: "majestic.haven.of.th@velarivoyages.com",
          contactNumber: "+1-636-840-2127",
        },
      },
    ],
    title: "Majestic Haven of the Palm-Fringed Paradises",
    description:
      "Embark from Nassau and traverse the Caribbean in style. Whether it’s the energy of Bermuda or the calm of Fort Lauderdale, each destination reveals a new side of paradise.",
    rating: 4.3,
    tags: ["wellness", "VIP", "tropical"],
  },
  {
    basePrice: 3741,
    departureLocation: {
      city: "Nassau",
      country: "Bahamas",
      region: "Caribbean",
      coordinates: {
        latitude: 25.0582,
        longitude: -77.3432,
      },
    },
    arrivalLocation: {
      city: "Nassau",
      country: "Bahamas",
      region: "Caribbean",
      coordinates: {
        latitude: 25.0582,
        longitude: -77.3432,
      },
    },
    isPopular: false, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "weekend-cruise",
    itinerary: {
      route: [
        {
          city: "Nassau",
          country: "Bahamas",
          region: "Caribbean",
          coordinates: {
            latitude: 25.0582,
            longitude: -77.3432,
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
          region: "Caribbean",
          coordinates: {
            latitude: 25.0582,
            longitude: -77.3432,
          },
        },
      ],
      description:
        "Join us in Nassau for a voyage of a lifetime. Sail across the serene waters of Caribbean, stopping at ports like Roatán, George Town, Fort Lauderdale where timeless traditions meet modern luxuries.",
      distance: "538 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Nassau to Roatán",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Sailing from Roatán to George Town",
        },
        {
          start: "Day 6",
          end: "Day 7",
          duration: "2 days",
          description: "Sailing from George Town to Fort Lauderdale",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Sailing from Fort Lauderdale to Nassau",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Nassau",
        },
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Exploring Roatán",
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
          description: "Exploring Fort Lauderdale",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Exploring Nassau",
        },
      ],
    },
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Ella Chambers",
        role: "Customer Service Representative",
        languages: ["English", "Guarani", "French"], // Use the properly generated languages list
        experienceYears: 18,
        profileImage: "https://randomuser.me/api/portraits/women/36.jpg",
        contact: {
          contactEmail: "pristine.voyage.of.t@velarivoyages.com",
          contactNumber: "+1-374-947-2452",
        },
      },
    ],
    title: "Pristine Voyage of the Sugarcane Skies",
    description:
      "Join us in Nassau for a voyage of a lifetime. Sail across the serene waters of Caribbean, stopping at ports like Roatán, George Town, Fort Lauderdale where timeless traditions meet modern luxuries.",
    rating: 4.5,
    tags: ["cruise-adventure", "cruise-journey", "nature"],
  },
  {
    basePrice: 7781,
    departureLocation: {
      city: "Nassau",
      country: "Bahamas",
      region: "Caribbean",
      coordinates: {
        latitude: 25.0582,
        longitude: -77.3432,
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
    category: "theme-cruise",
    itinerary: {
      route: [
        {
          city: "Nassau",
          country: "Bahamas",
          region: "Caribbean",
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
          city: "Miami",
          country: "United States",
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
      ],
      description:
        "This inspiring arcadia departs from Nassau, navigating the diverse landscapes and vibrant cities of Caribbean. Must-see stops include St. Thomas, Miami, Fort Lauderdale.",
      distance: "921 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Nassau to St. Thomas",
        },
        {
          start: "Day 5",
          end: "Day 5",
          duration: "1 days",
          description: "Sailing from St. Thomas to Miami",
        },
        {
          start: "Day 7",
          end: "Day 8",
          duration: "2 days",
          description: "Sailing from Miami to Fort Lauderdale",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Nassau",
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
          description: "Exploring Miami",
        },
        {
          start: "Day 9",
          end: "Day 10",
          duration: "2 days",
          description: "Exploring Fort Lauderdale",
        },
      ],
    },
    tourCategoryId: "general-cruise",
    contactPersonnel: [
      {
        name: "Brooklyn Curtis",
        role: "Customer Service Representative",
        languages: ["English", "Guarani", "French"], // Use the properly generated languages list
        experienceYears: 6,
        profileImage: "https://randomuser.me/api/portraits/women/19.jpg",
        contact: {
          contactEmail: "timeless.discovery.o@velarivoyages.com",
          contactNumber: "+1-950-356-9017",
        },
      },
    ],
    title: "Timeless Discovery of the Tropical Isles",
    description:
      "This inspiring arcadia departs from Nassau, navigating the diverse landscapes and vibrant cities of Caribbean. Must-see stops include St. Thomas, Miami, Fort Lauderdale.",
    rating: 5.0,
    tags: ["cruise-getaway"],
  },
  {
    basePrice: 8994,
    departureLocation: {
      city: "Nassau",
      country: "Bahamas",
      region: "Caribbean",
      coordinates: {
        latitude: 25.0582,
        longitude: -77.3432,
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
    category: "fjords-tour",
    itinerary: {
      route: [
        {
          city: "Nassau",
          country: "Bahamas",
          region: "Caribbean",
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
          city: "George Town",
          country: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        },
      ],
      description:
        "Escape the everyday with this luxurious journey through Caribbean, departing from Nassau. You'll visit San Juan, George Town, where every stop is a new adventure.",
      distance: "661 nautical miles",
      totalDuration: "7 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 3",
          duration: "2 days",
          description: "Sailing from Nassau to San Juan",
        },
        {
          start: "Day 5",
          end: "Day 6",
          duration: "2 days",
          description: "Sailing from San Juan to George Town",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Nassau",
        },
        {
          start: "Day 4",
          end: "Day 4",
          duration: "1 days",
          description: "Exploring San Juan",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring George Town",
        },
      ],
    },
    tourCategoryId: "vip-cruise",
    contactPersonnel: [
      {
        name: "Amanda Hudson",
        role: "Customer Service Representative",
        languages: ["English", "Guarani", "French"], // Use the properly generated languages list
        experienceYears: 11,
        profileImage: "https://randomuser.me/api/portraits/women/89.jpg",
        contact: {
          contactEmail: "extraordinary.whispe@velarivoyages.com",
          contactNumber: "+1-604-579-2399",
        },
      },
    ],
    title: "Extraordinary Whisper of the Azure Horizons",
    description:
      "Escape the everyday with this luxurious journey through Caribbean, departing from Nassau. You'll visit San Juan, George Town, where every stop is a new adventure.",
    rating: 4.4,
    tags: ["VIP"],
  },
  {
    basePrice: 2487,
    departureLocation: {
      city: "Nassau",
      country: "Bahamas",
      region: "Caribbean",
      coordinates: {
        latitude: 25.0582,
        longitude: -77.3432,
      },
    },
    arrivalLocation: {
      city: "Nassau",
      country: "Bahamas",
      region: "Caribbean",
      coordinates: {
        latitude: 25.0582,
        longitude: -77.3432,
      },
    },
    isPopular: true, // Make fewer cruises "popular"
    hasPopularDestination: true,
    category: "tropical-cruise",
    itinerary: {
      route: [
        {
          city: "Nassau",
          country: "Bahamas",
          region: "Caribbean",
          coordinates: {
            latitude: 25.0582,
            longitude: -77.3432,
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
          city: "Nassau",
          country: "Bahamas",
          region: "Caribbean",
          coordinates: {
            latitude: 25.0582,
            longitude: -77.3432,
          },
        },
      ],
      description:
        "Let the winds of the Caribbean carry you from Nassau to the most stunning ports in the region. With destinations like Miami, St. Thomas, Tampa, Fort Lauderdale, this panorama redefines luxury travel.",
      distance: "1345 nautical miles",
      totalDuration: "18 days",
      timeAtSea: [
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Sailing from Nassau to Miami",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Sailing from Miami to St. Thomas",
        },
        {
          start: "Day 8",
          end: "Day 9",
          duration: "2 days",
          description: "Sailing from St. Thomas to Tampa",
        },
        {
          start: "Day 12",
          end: "Day 12",
          duration: "1 days",
          description: "Sailing from Tampa to Fort Lauderdale",
        },
        {
          start: "Day 15",
          end: "Day 16",
          duration: "2 days",
          description: "Sailing from Fort Lauderdale to Nassau",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 2",
          duration: "2 days",
          description: "Exploring Nassau",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Exploring Miami",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Exploring St. Thomas",
        },
        {
          start: "Day 10",
          end: "Day 11",
          duration: "2 days",
          description: "Exploring Tampa",
        },
        {
          start: "Day 13",
          end: "Day 14",
          duration: "2 days",
          description: "Exploring Fort Lauderdale",
        },
        {
          start: "Day 17",
          end: "Day 18",
          duration: "2 days",
          description: "Exploring Nassau",
        },
      ],
    },
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Catherine Hall",
        role: "Customer Service Representative",
        languages: ["English", "Guarani", "French"], // Use the properly generated languages list
        experienceYears: 9,
        profileImage: "https://randomuser.me/api/portraits/women/40.jpg",
        contact: {
          contactEmail: "infinite.sanctum.of.@velarivoyages.com",
          contactNumber: "+1-625-777-6120",
        },
      },
    ],
    title: "Infinite Sanctum of the Rum-Laced Breezes",
    description:
      "Let the winds of the Caribbean carry you from Nassau to the most stunning ports in the region. With destinations like Miami, St. Thomas, Tampa, Fort Lauderdale, this panorama redefines luxury travel.",
    rating: 4.3,
    tags: ["holiday-cruise"],
  },
];
