import { Cruise } from "@/lib/interfaces/services/cruises";

export const lisbonCruises: Cruise[] = [
  {
    departureLocation: {
      city: "Lisbon",
      country: "Portugal",
      region: "Lisbon District",
      coordinates: { latitude: 38.7223, longitude: -9.1393 },
      address: "Port of Lisbon",
      postalCode: "1900-268",
      timezone: "Europe/Lisbon",
      additionalInfo:
        "Main cruise terminal located in the historic Belem district",
    },
    arrivalLocation: {
      city: "Barcelona",
      country: "Spain",
      region: "Catalonia",
      coordinates: { latitude: 41.3851, longitude: 2.1734 },
      timezone: "Europe/Madrid",
    },
    category: "premium",
    itinerary: {
      route: [
        { city: "Lisbon", country: "Portugal" },
        { city: "Barcelona", country: "Spain" },
      ],
      description:
        "A 7-night cruise exploring the scenic Iberian coast from Lisbon to vibrant Barcelona.",
      distance: "720 nautical miles",
      totalDuration: "7 days",
      timeAtSea: [
        {
          start: "2025-09-10T16:00:00+01:00",
          end: "2025-09-17T08:00:00+02:00",
          description: "Cruising the Atlantic coast and Mediterranean Sea",
        },
      ],
      timeOnLand: [],
    },
    requiredDocuments: ["Valid Passport", "Schengen Visa (if applicable)"],
    cancellationPolicy: "Full refund if canceled 45 days before departure",
    tourCategoryId: "luxury-cruise",
    contactPersonnel: [
      {
        name: "Maria Fernandes",
        role: "Cruise Director",
        description: "Senior Cruise Coordinator",
        bio: "Over 10 years of experience organizing luxury cruises in Southern Europe.",
        languages: ["Portuguese", "English", "Spanish"],
        experienceYears: 10,
        profileImage:
          "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
        contact: {
          contactEmail: "maria.fernandes@lisboncruises.pt",
          contactNumber: "+351 21 123 4567",
        },
      },
    ],
    title: "Iberian Coastal Luxury Cruise",
    description:
      "Experience the rich culture and stunning coastlines of Portugal and Spain on this premium cruise.",
    tags: ["luxury", "coastal", "iberian", "premium"],
    rating: 4.9,
    isFamilyFriendly: false,
    isLuxuryCruise: true,
    basePrice: 2800, // USD per person
  },
  {
    departureLocation: {
      city: "Lisbon",
      country: "Portugal",
      region: "Lisbon District",
      coordinates: { latitude: 38.7223, longitude: -9.1393 },
      address: "Port of Lisbon",
      postalCode: "1900-268",
      timezone: "Europe/Lisbon",
    },
    arrivalLocation: {
      city: "Funchal",
      country: "Portugal",
      region: "Madeira",
      coordinates: { latitude: 32.6669, longitude: -16.9241 },
      timezone: "Europe/Lisbon",
    },
    category: "mainstream",
    itinerary: {
      route: [
        { city: "Lisbon", country: "Portugal" },
        { city: "Funchal", country: "Portugal" },
      ],
      description:
        "A 5-night cruise from Lisbon to the beautiful island of Madeira, known for its natural beauty and culture.",
      distance: "520 nautical miles",
      totalDuration: "5 days",
      timeAtSea: [
        {
          start: "2025-10-01T14:00:00+01:00",
          end: "2025-10-06T08:00:00+01:00",
          description: "Sailing down the Atlantic coast to Madeira",
        },
      ],
      timeOnLand: [],
    },
    requiredDocuments: ["Valid Passport"],
    cancellationPolicy: "Refund available if canceled 30 days before departure",
    tourCategoryId: "theme-cruise",
    contactPersonnel: [
      {
        name: "João Silva",
        role: "Cruise Manager",
        description: "Cruise Manager",
        bio: "Experienced in organizing family-friendly cruises along the Portuguese coast.",
        languages: ["Portuguese", "English"],
        experienceYears: 7,
        profileImage:
          "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91",
        contact: {
          contactEmail: "joao.silva@lisboncruises.pt",
          contactNumber: "+351 21 765 4321",
        },
      },
    ],
    title: "Atlantic Islands Explorer",
    description:
      "Explore Portugal’s Atlantic coast and the beautiful island of Madeira on this 5-night cruise.",
    tags: ["mainstream", "family-friendly", "atlantic"],
    rating: 4.6,
    isFamilyFriendly: true,
    isLuxuryCruise: false,
    basePrice: 1400, // USD per person
  },
  // Additional cruises added:
  {
    departureLocation: {
      city: "Lisbon",
      country: "Portugal",
      region: "Lisbon District",
      coordinates: { latitude: 38.7223, longitude: -9.1393 },
      address: "Port of Lisbon",
      postalCode: "1900-268",
      timezone: "Europe/Lisbon",
      additionalInfo: "Well-connected terminal with easy city access",
    },
    arrivalLocation: {
      city: "Valencia",
      country: "Spain",
      region: "Valencian Community",
      coordinates: { latitude: 39.4699, longitude: -0.3763 },
      timezone: "Europe/Madrid",
    },
    category: "premium",
    itinerary: {
      route: [
        { city: "Lisbon", country: "Portugal" },
        { city: "Valencia", country: "Spain" },
      ],
      description:
        "A 6-night premium cruise along the Iberian Peninsula from Lisbon to Valencia, featuring coastal views and cultural excursions.",
      distance: "650 nautical miles",
      totalDuration: "6 days",
      timeAtSea: [
        {
          start: "2025-11-05T15:00:00+01:00",
          end: "2025-11-11T09:00:00+01:00",
          description:
            "Sailing through Atlantic waters and the Mediterranean coast.",
        },
      ],
      timeOnLand: [],
    },
    requiredDocuments: ["Valid Passport", "Schengen Visa (if applicable)"],
    cancellationPolicy: "Full refund if canceled 40 days before departure",
    tourCategoryId: "luxury-cruise",
    contactPersonnel: [
      {
        name: "Ana Costa",
        role: "Cruise Specialist",
        description: "Cruise Experience Manager",
        bio: "Specializes in premium European coastal cruises with 8 years of experience.",
        languages: ["Portuguese", "Spanish", "English"],
        experienceYears: 8,
        profileImage:
          "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7",
        contact: {
          contactEmail: "ana.costa@lisboncruises.pt",
          contactNumber: "+351 21 999 8877",
        },
      },
    ],
    title: "Iberian Peninsula Premium Cruise",
    description:
      "Discover coastal treasures and historic cities between Lisbon and Valencia on this premium cruise.",
    tags: ["premium", "coastal", "iberian", "culture"],
    rating: 4.8,
    isFamilyFriendly: false,
    isLuxuryCruise: true,
    basePrice: 2600,
  },
  {
    departureLocation: {
      city: "Lisbon",
      country: "Portugal",
      region: "Lisbon District",
      coordinates: { latitude: 38.7223, longitude: -9.1393 },
      address: "Port of Lisbon",
      postalCode: "1900-268",
      timezone: "Europe/Lisbon",
    },
    arrivalLocation: {
      city: "Tangier",
      country: "Morocco",
      region: "Tangier-Tetouan-Al Hoceima",
      coordinates: { latitude: 35.7595, longitude: -5.83395 },
      timezone: "Africa/Casablanca",
    },
    category: "mainstream",
    itinerary: {
      route: [
        { city: "Lisbon", country: "Portugal" },
        { city: "Tangier", country: "Morocco" },
      ],
      description:
        "A 4-night cultural cruise from Lisbon to Tangier exploring southern Portugal and northern Morocco.",
      distance: "380 nautical miles",
      totalDuration: "4 days",
      timeAtSea: [
        {
          start: "2025-10-15T13:00:00+01:00",
          end: "2025-10-19T08:00:00+01:00",
          description:
            "Sailing along the Atlantic coast of Iberia and North Africa.",
        },
      ],
      timeOnLand: [],
    },
    requiredDocuments: ["Valid Passport", "Visa (if required)"],
    cancellationPolicy: "Partial refund if canceled 20 days before departure",
    tourCategoryId: "theme-cruise",
    contactPersonnel: [
      {
        name: "Carlos Mendes",
        role: "Cruise Operations Lead",
        description: "Cruise Operations Lead",
        bio: "Expert in family and cultural cruises between Europe and North Africa.",
        languages: ["Portuguese", "Arabic", "English"],
        experienceYears: 9,
        profileImage:
          "https://images.unsplash.com/photo-1511367461989-f85a21fda167",
        contact: {
          contactEmail: "carlos.mendes@lisboncruises.pt",
          contactNumber: "+351 21 555 3344",
        },
      },
    ],
    title: "Iberian to Moroccan Cultural Cruise",
    description:
      "Explore vibrant cultures from Lisbon to Tangier on this enriching 4-night cruise.",
    tags: ["mainstream", "cultural", "family-friendly", "atlantic"],
    rating: 4.5,
    isFamilyFriendly: true,
    isLuxuryCruise: false,
    basePrice: 1200,
  },
];
