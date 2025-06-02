import { Cruise } from "@/lib/interfaces/services/cruises";

export const newOrleansCruises: Cruise[] = [
  {
    departureLocation: {
      city: "New Orleans",
      country: "USA",
      state: "LA",
      region: "South",
      coordinates: { latitude: 29.9511, longitude: -90.0715 },
      address:
        "Port of New Orleans, 1350 Port of New Orleans Pl, New Orleans, LA 70130",
      postalCode: "70130",
      timezone: "America/Chicago",
      additionalInfo:
        "Main cruise terminal with easy access to downtown New Orleans",
    },
    arrivalLocation: {
      city: "Cozumel",
      country: "Mexico",
      region: "Quintana Roo",
      coordinates: { latitude: 20.42298, longitude: -86.92234 },
      timezone: "America/Cancun",
    },
    category: "mainstream",
    itinerary: {
      route: [
        { city: "New Orleans", country: "USA" },
        { city: "Cozumel", country: "Mexico" },
        { city: "Grand Cayman", country: "Cayman Islands" },
        { city: "Ocho Rios", country: "Jamaica" },
        { city: "New Orleans", country: "USA" },
      ],
      description:
        "7-night Caribbean cruise from New Orleans to the Caribbean's most popular destinations.",
      distance: "1,500 nautical miles",
      totalDuration: "7 days",
      timeAtSea: [
        {
          start: "2025-11-01T16:00:00-06:00",
          end: "2025-11-07T08:00:00-05:00",
          description: "Sailing between Caribbean ports",
        },
      ],
      timeOnLand: [],
    },
    requiredDocuments: ["Valid Passport", "US Visa (if applicable)"],
    cancellationPolicy: "Full refund if canceled 60 days before departure",
    tourCategoryId: "tropical-cruise",
    contactPersonnel: [
      {
        name: "James Carter",
        role: "Cruise Coordinator",
        description: "Cruise Coordinator",
        bio: "Specializes in Caribbean cruises with 8 years of experience.",
        languages: ["English", "Spanish"],
        experienceYears: 8,
        profileImage:
          "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
        contact: {
          contactEmail: "james.carter@neworleanscruises.com",
          contactNumber: "+1 504-555-1234",
        },
      },
    ],
    title: "Classic Caribbean from New Orleans",
    description:
      "Explore the vibrant Caribbean culture and beaches on this 7-night cruise from New Orleans.",
    tags: ["caribbean", "mainstream", "family-friendly"],
    rating: 4.7,
    isFamilyFriendly: true,
    basePrice: 799, // USD per person
  },

  {
    departureLocation: {
      city: "New Orleans",
      country: "USA",
      state: "LA",
      region: "South",
      coordinates: { latitude: 29.9511, longitude: -90.0715 },
      address:
        "Port of New Orleans, 1350 Port of New Orleans Pl, New Orleans, LA 70130",
      postalCode: "70130",
      timezone: "America/Chicago",
    },
    arrivalLocation: {
      city: "Nassau",
      country: "Bahamas",
      coordinates: { latitude: 25.0343, longitude: -77.3963 },
      timezone: "America/Nassau",
    },
    category: "premium",
    itinerary: {
      route: [
        { city: "New Orleans", country: "USA" },
        { city: "Nassau", country: "Bahamas" },
        { city: "Key West", country: "USA", state: "FL" },
        { city: "New Orleans", country: "USA" },
      ],
      description:
        "5-night premium cruise visiting the Bahamas and Florida Keys with exclusive onboard experiences.",
      distance: "900 nautical miles",
      totalDuration: "5 days",
      timeAtSea: [
        {
          start: "2025-12-10T15:00:00-06:00",
          end: "2025-12-15T09:00:00-05:00",
          description: "Cruising between ports with premium amenities",
        },
      ],
      timeOnLand: [],
    },
    requiredDocuments: ["Valid Passport", "US Visa (if applicable)"],
    cancellationPolicy: "Refund if canceled 45 days before departure",
    tourCategoryId: "luxury-cruise",
    contactPersonnel: [
      {
        name: "Samantha Lee",
        role: "Luxury Cruise Manager",
        description: "Luxury Cruise Manager",
        bio: "Expert in premium Caribbean cruises with 12 years of experience.",
        languages: ["English"],
        experienceYears: 12,
        profileImage:
          "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91",
        contact: {
          contactEmail: "samantha.lee@neworleanscruises.com",
          contactNumber: "+1 504-555-5678",
        },
      },
    ],
    title: "Premium Caribbean Escape",
    description:
      "Relax and indulge on this 5-night premium cruise to the Bahamas and Florida Keys.",
    tags: ["premium", "caribbean", "luxury"],
    rating: 4.9,
    isLuxuryCruise: true,
    isFamilyFriendly: false,
    basePrice: 1499,
  },

  // Additional cruise 1
  {
    departureLocation: {
      city: "New Orleans",
      country: "USA",
      state: "LA",
      region: "South",
      coordinates: { latitude: 29.9511, longitude: -90.0715 },
      address:
        "Port of New Orleans, 1350 Port of New Orleans Pl, New Orleans, LA 70130",
      postalCode: "70130",
      timezone: "America/Chicago",
    },
    arrivalLocation: {
      city: "Belize City",
      country: "Belize",
      coordinates: { latitude: 17.5046, longitude: -88.1962 },
      timezone: "America/Belize",
    },
    category: "mainstream",
    itinerary: {
      route: [
        { city: "New Orleans", country: "USA" },
        { city: "Belize City", country: "Belize" },
        { city: "Roatan", country: "Honduras" },
        { city: "New Orleans", country: "USA" },
      ],
      description:
        "6-night cruise exploring the natural wonders and cultures of Belize and Honduras.",
      distance: "1,200 nautical miles",
      totalDuration: "6 days",
      timeAtSea: [
        {
          start: "2025-10-05T14:00:00-06:00",
          end: "2025-10-11T10:00:00-05:00",
          description: "Sailing the Gulf of Mexico and Caribbean Sea",
        },
      ],
      timeOnLand: [],
    },
    requiredDocuments: ["Valid Passport", "US Visa (if applicable)"],
    cancellationPolicy: "Full refund if canceled 30 days before departure",
    tourCategoryId: "theme-cruise",
    contactPersonnel: [
      {
        name: "Laura Mitchell",
        role: "Cruise Specialist",
        description: "Cruise Specialist",
        bio: "Experienced in Central American cruises with a focus on eco-tourism.",
        languages: ["English", "Spanish"],
        experienceYears: 7,
        profileImage:
          "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f92",
        contact: {
          contactEmail: "laura.mitchell@neworleanscruises.com",
          contactNumber: "+1 504-555-7890",
        },
      },
    ],
    title: "Central American Adventure",
    description:
      "Discover the lush landscapes and vibrant cultures on this 6-night cruise to Belize and Honduras.",
    tags: ["caribbean", "mainstream", "eco-tourism", "adventure"],
    rating: 4.5,
    isFamilyFriendly: true,
    basePrice: 850,
  },

  // Additional cruise 2
  {
    departureLocation: {
      city: "New Orleans",
      country: "USA",
      state: "LA",
      region: "South",
      coordinates: { latitude: 29.9511, longitude: -90.0715 },
      address:
        "Port of New Orleans, 1350 Port of New Orleans Pl, New Orleans, LA 70130",
      postalCode: "70130",
      timezone: "America/Chicago",
    },
    arrivalLocation: {
      city: "Montego Bay",
      country: "Jamaica",
      coordinates: { latitude: 18.4715, longitude: -77.9185 },
      timezone: "America/Jamaica",
    },
    category: "luxury",
    itinerary: {
      route: [
        { city: "New Orleans", country: "USA" },
        { city: "Montego Bay", country: "Jamaica" },
        { city: "Grand Cayman", country: "Cayman Islands" },
        { city: "New Orleans", country: "USA" },
      ],
      description:
        "8-night luxury cruise featuring premium amenities and exclusive shore excursions.",
      distance: "1,600 nautical miles",
      totalDuration: "8 days",
      timeAtSea: [
        {
          start: "2025-11-15T17:00:00-06:00",
          end: "2025-11-23T09:00:00-05:00",
          description:
            "Luxury sailing with onboard fine dining and entertainment",
        },
      ],
      timeOnLand: [],
    },
    requiredDocuments: ["Valid Passport", "US Visa (if applicable)"],
    cancellationPolicy: "Refund with 60 days notice",
    tourCategoryId: "luxury-cruise",
    contactPersonnel: [
      {
        name: "Richard Johnson",
        role: "Luxury Cruise Director",
        description: "Luxury Cruise Director",
        bio: "Over 15 years managing luxury cruises with attention to detail.",
        languages: ["English"],
        experienceYears: 15,
        profileImage:
          "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f93",
        contact: {
          contactEmail: "richard.johnson@neworleanscruises.com",
          contactNumber: "+1 504-555-2468",
        },
      },
    ],
    title: "Luxury Caribbean Escape",
    description:
      "Indulge in an 8-night luxury cruise with premium amenities and exclusive shore excursions.",
    tags: ["luxury", "caribbean", "premium", "exclusive"],
    rating: 5.0,
    isLuxuryCruise: true,
    isFamilyFriendly: false,
    basePrice: 2499,
  },
  {
    departureLocation: {
      city: "New Orleans",
      country: "USA",
      state: "LA",
      region: "South",
      coordinates: { latitude: 29.9511, longitude: -90.0715 },
      address:
        "Port of New Orleans, 1350 Port of New Orleans Pl, New Orleans, LA 70130",
      postalCode: "70130",
      timezone: "America/Chicago",
    },
    arrivalLocation: {
      city: "Barbados",
      country: "Barbados",
      coordinates: { latitude: 13.1939, longitude: -59.5432 },
      timezone: "America/Barbados",
    },
    category: "premium",
    itinerary: {
      route: [
        { city: "New Orleans", country: "USA" },
        { city: "Cozumel", country: "Mexico" },
        { city: "Kingston", country: "Jamaica" },
        { city: "Bridgetown", country: "Barbados" },
        { city: "New Orleans", country: "USA" },
      ],
      description:
        "14-night premium Caribbean cruise exploring major ports with deluxe onboard experiences.",
      distance: "3,200 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [],
      timeOnLand: [],
    },
    requiredDocuments: ["Valid Passport", "US Visa (if applicable)"],
    cancellationPolicy: "Full refund if canceled 60 days before departure",
    tourCategoryId: "premium-caribbean",
    contactPersonnel: [
      {
        name: "Samantha Lee",
        role: "Luxury Cruise Manager",
        bio: "Expert in premium Caribbean cruises with 12 years of experience.",
        languages: ["English"],
        experienceYears: 12,
        profileImage:
          "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91",
        contact: {
          contactEmail: "samantha.lee@neworleanscruises.com",
          contactNumber: "+1 504-555-5678",
        },
      },
    ],
    title: "Extended Premium Caribbean Voyage",
    description:
      "Experience an extended 14-night premium Caribbean cruise with deluxe amenities and diverse ports of call.",
    tags: ["premium", "caribbean", "extended", "luxury"],
    rating: 4.9,
    isLuxuryCruise: true,
    isFamilyFriendly: false,
    basePrice: 2899,
  },
  {
    departureLocation: {
      city: "New Orleans",
      country: "USA",
      state: "LA",
      region: "South",
      coordinates: { latitude: 29.9511, longitude: -90.0715 },
      address:
        "Port of New Orleans, 1350 Port of New Orleans Pl, New Orleans, LA 70130",
      postalCode: "70130",
      timezone: "America/Chicago",
    },
    arrivalLocation: {
      city: "Lisbon",
      country: "Portugal",
      coordinates: { latitude: 38.7223, longitude: -9.1393 },
      timezone: "Europe/Lisbon",
    },
    category: "luxury",
    itinerary: {
      route: [
        { city: "New Orleans", country: "USA" },
        { city: "San Juan", country: "Puerto Rico" },
        { city: "Madeira", country: "Portugal" },
        { city: "Lisbon", country: "Portugal" },
      ],
      description:
        "25-night luxury transatlantic cruise from New Orleans to Lisbon with exclusive amenities and extensive port visits.",
      distance: "6,500 nautical miles",
      totalDuration: "25 days",
      timeAtSea: [
        {
          start: "2025-09-01T17:00:00-06:00",
          end: "2025-09-05T08:00:00-04:00",
          description: "Sailing from New Orleans to San Juan",
        },
        {
          start: "2025-09-06T20:00:00-04:00",
          end: "2025-09-15T07:00:00Z",
          description: "Transatlantic crossing to Madeira",
        },
        {
          start: "2025-09-18T19:00:00Z",
          end: "2025-09-20T08:00:00+01:00",
          description: "Final leg from Madeira to Lisbon",
        },
      ],
      timeOnLand: [
        {
          start: "2025-09-05T08:30:00-04:00",
          end: "2025-09-06T19:00:00-04:00",
          description: "Exploration of Old San Juan and El Morro fortress",
        },
        {
          start: "2025-09-15T08:00:00Z",
          end: "2025-09-18T18:00:00Z",
          description:
            "Madeira island tour including wine tasting and botanical gardens",
        },
      ],
    },
    requiredDocuments: ["Valid Passport", "Schengen Visa (if applicable)"],
    cancellationPolicy: "Full refund if canceled 90 days prior",
    tourCategoryId: "luxury-transatlantic",
    contactPersonnel: [
      {
        name: "Richard Johnson",
        role: "Luxury Cruise Director",
        bio: "Over 15 years managing luxury cruises with attention to detail.",
        languages: ["English"],
        experienceYears: 15,
        profileImage:
          "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f93",
        contact: {
          contactEmail: "richard.johnson@neworleanscruises.com",
          contactNumber: "+1 504-555-2468",
        },
      },
    ],
    title: "Luxury Transatlantic Voyage to Lisbon",
    description:
      "Sail across the Atlantic in luxury on this 25-night cruise from New Orleans to Lisbon with top-tier amenities and port experiences.",
    tags: ["luxury", "transatlantic", "long cruise", "exclusive"],
    rating: 5.0,
    isLuxuryCruise: true,
    isFamilyFriendly: false,
    basePrice: 7499,
  },
  {
    departureLocation: {
      city: "New Orleans",
      country: "USA",
      state: "LA",
      region: "South",
      coordinates: { latitude: 29.9511, longitude: -90.0715 },
      address:
        "Port of New Orleans, 1350 Port of New Orleans Pl, New Orleans, LA 70130",
      postalCode: "70130",
      timezone: "America/Chicago",
    },
    arrivalLocation: {
      city: "New Orleans",
      country: "USA",
      state: "LA",
      coordinates: { latitude: 29.9511, longitude: -90.0715 },
      timezone: "America/Chicago",
    },
    category: "premium",
    itinerary: {
      route: [
        { city: "New Orleans", country: "USA", state: "LA" },
        { city: "Costa Maya", country: "Mexico" },
        { city: "Belize City", country: "Belize" },
        { city: "Roatan", country: "Honduras" },
        { city: "Cozumel", country: "Mexico" },
        { city: "New Orleans", country: "USA", state: "LA" },
      ],
      description:
        "9-day exploration of the Western Caribbean's best tropical destinations with premium amenities.",
      distance: "1,780 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
        {
          start: "2026-02-10T16:00:00-06:00",
          end: "2026-02-12T08:00:00-06:00",
          description:
            "Cruising south from New Orleans across the Gulf of Mexico.",
        },
        {
          start: "2026-02-13T18:00:00-06:00",
          end: "2026-02-14T07:00:00-06:00",
          description: "Short sailing from Costa Maya to Belize City.",
        },
        {
          start: "2026-02-15T16:00:00-06:00",
          end: "2026-02-16T08:00:00-06:00",
          description: "Cruising to the beautiful island of Roatan.",
        },
        {
          start: "2026-02-17T17:00:00-06:00",
          end: "2026-02-18T09:00:00-06:00",
          description: "Caribbean sailing to the island of Cozumel.",
        },
        {
          start: "2026-02-19T16:00:00-06:00",
          end: "2026-02-21T08:00:00-06:00",
          description: "Final return journey across the Gulf to New Orleans.",
        },
      ],
      timeOnLand: [
        {
          start: "2026-02-12T08:00:00-06:00",
          end: "2026-02-13T18:00:00-06:00",
          description:
            "Explore Costa Maya's ancient Mayan ruins and pristine beaches.",
        },
        {
          start: "2026-02-14T07:00:00-06:00",
          end: "2026-02-15T16:00:00-06:00",
          description:
            "Discover Belize's stunning barrier reef and jungle adventures.",
        },
        {
          start: "2026-02-16T08:00:00-06:00",
          end: "2026-02-17T17:00:00-06:00",
          description:
            "Experience Roatan's pristine beaches and world-class snorkeling.",
        },
        {
          start: "2026-02-18T09:00:00-06:00",
          end: "2026-02-19T16:00:00-06:00",
          description:
            "Visit Cozumel's Mayan ruins and enjoy the vibrant marine life.",
        },
      ],
    },
    requiredDocuments: ["Valid Passport"],
    cancellationPolicy: "Full refund if canceled 60 days prior to departure",
    tourCategoryId: "premium-cruise",
    contactPersonnel: [
      {
        name: "Maria Rodriguez",
        role: "Caribbean Cruise Specialist",
        description: "Premium Cruise Coordinator",
        bio: "Specialist in Caribbean destinations with 10 years of experience creating memorable vacation experiences.",
        languages: ["English", "Spanish"],
        experienceYears: 10,
        profileImage:
          "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e",
        contact: {
          contactEmail: "maria.rodriguez@neworleanscruises.com",
          contactNumber: "+1 504-555-3399",
        },
      },
    ],
    title: "Western Caribbean Explorer",
    description:
      "Discover the best of the Western Caribbean on this 9-day premium cruise featuring Mexico's Costa Maya, Belize, Honduras' Roatan Island, and Cozumel.",
    tags: [
      "premium",
      "western caribbean",
      "mayan ruins",
      "snorkeling",
      "beaches",
    ],
    rating: 4.8,
    isFamilyFriendly: true,
    basePrice: 2899, // USD
  },

  {
    departureLocation: {
      city: "New Orleans",
      country: "USA",
      state: "LA",
      region: "South",
      coordinates: { latitude: 29.9511, longitude: -90.0715 },
      address:
        "Port of New Orleans, 1350 Port of New Orleans Pl, New Orleans, LA 70130",
      postalCode: "70130",
      timezone: "America/Chicago",
      additionalInfo:
        "Luxury terminal with dedicated lounge for extended voyages",
    },
    arrivalLocation: {
      city: "New Orleans",
      country: "USA",
      state: "LA",
      coordinates: { latitude: 29.9511, longitude: -90.0715 },
      timezone: "America/Chicago",
    },
    category: "luxury",
    itinerary: {
      route: [
        { city: "New Orleans", country: "USA", state: "LA" },
        { city: "Key West", country: "USA", state: "FL" },
        { city: "Miami", country: "USA", state: "FL" },
        { city: "Nassau", country: "Bahamas" },
        { city: "San Juan", country: "Puerto Rico" },
        { city: "St. Thomas", country: "US Virgin Islands" },
        { city: "St. Maarten", country: "Sint Maarten" },
        { city: "New Orleans", country: "USA", state: "LA" },
      ],
      description:
        "12-day luxury Eastern Caribbean cruise with extended stays at top Caribbean destinations.",
      distance: "3,200 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
        {
          start: "2026-03-05T17:00:00-06:00",
          end: "2026-03-07T08:00:00-05:00",
          description: "Cruising from New Orleans to the Florida Keys.",
        },
        {
          start: "2026-03-08T16:00:00-05:00",
          end: "2026-03-09T07:00:00-05:00",
          description: "Short coastal sailing to Miami.",
        },
        {
          start: "2026-03-10T18:00:00-05:00",
          end: "2026-03-11T08:00:00-05:00",
          description: "Ocean crossing to Nassau, Bahamas.",
        },
        {
          start: "2026-03-12T19:00:00-05:00",
          end: "2026-03-13T09:00:00-04:00",
          description: "Caribbean sailing to San Juan, Puerto Rico.",
        },
        {
          start: "2026-03-14T20:00:00-04:00",
          end: "2026-03-15T08:00:00-04:00",
          description: "Short cruise to St. Thomas, US Virgin Islands.",
        },
        {
          start: "2026-03-16T17:00:00-04:00",
          end: "2026-03-17T08:00:00-04:00",
          description: "Sailing to St. Maarten in the Leeward Islands.",
        },
        {
          start: "2026-03-18T17:00:00-04:00",
          end: "2026-03-22T10:00:00-06:00",
          description: "Return journey across the Caribbean to New Orleans.",
        },
      ],
      timeOnLand: [
        {
          start: "2026-03-07T08:00:00-05:00",
          end: "2026-03-08T16:00:00-05:00",
          description:
            "Explore Key West's historic Old Town and visit the Hemingway Home.",
        },
        {
          start: "2026-03-09T07:00:00-05:00",
          end: "2026-03-10T18:00:00-05:00",
          description:
            "Experience Miami's South Beach and Art Deco Historic District.",
        },
        {
          start: "2026-03-11T08:00:00-05:00",
          end: "2026-03-12T19:00:00-05:00",
          description: "Visit Nassau's colorful markets and Paradise Island.",
        },
        {
          start: "2026-03-13T09:00:00-04:00",
          end: "2026-03-14T20:00:00-04:00",
          description:
            "Tour Old San Juan's historic forts and cobblestone streets.",
        },
        {
          start: "2026-03-15T08:00:00-04:00",
          end: "2026-03-16T17:00:00-04:00",
          description:
            "Enjoy St. Thomas's pristine beaches and duty-free shopping.",
        },
        {
          start: "2026-03-17T08:00:00-04:00",
          end: "2026-03-18T17:00:00-04:00",
          description: "Discover St. Maarten's dual French and Dutch culture.",
        },
      ],
    },
    requiredDocuments: ["Valid Passport"],
    cancellationPolicy: "Full refund if canceled 75 days prior to departure",
    tourCategoryId: "luxury-cruise",
    contactPersonnel: [
      {
        name: "Elizabeth Monroe",
        role: "Luxury Caribbean Director",
        description: "Senior Cruise Director",
        bio: "Luxury cruise expert with 14 years specializing in Caribbean destinations and personalized service.",
        languages: ["English", "French", "Spanish"],
        experienceYears: 14,
        profileImage:
          "https://images.unsplash.com/photo-1580489944761-15a19d654956",
        contact: {
          contactEmail: "elizabeth.monroe@neworleanscruises.com",
          contactNumber: "+1 504-555-7711",
        },
      },
    ],
    title: "Eastern Caribbean Luxury Voyage",
    description:
      "Experience the finest of Eastern Caribbean destinations on this 12-day luxury cruise with extended port stays and premium onboard amenities.",
    tags: [
      "luxury",
      "eastern caribbean",
      "extended stays",
      "islands",
      "beaches",
    ],
    rating: 4.9,
    isFamilyFriendly: false,
    isLuxuryCruise: true,
    basePrice: 4599, // USD
  },

  {
    departureLocation: {
      city: "New Orleans",
      country: "USA",
      state: "LA",
      region: "South",
      coordinates: { latitude: 29.9511, longitude: -90.0715 },
      address:
        "Port of New Orleans, 1350 Port of New Orleans Pl, New Orleans, LA 70130",
      postalCode: "70130",
      timezone: "America/Chicago",
      additionalInfo: "Ultra-luxury terminal with private embarkation lounge",
    },
    arrivalLocation: {
      city: "Buenos Aires",
      country: "Argentina",
      region: "Buenos Aires",
      coordinates: { latitude: -34.6037, longitude: -58.3816 },
      timezone: "America/Argentina/Buenos_Aires",
    },
    category: "luxury",
    itinerary: {
      route: [
        { city: "New Orleans", country: "USA", state: "LA" },
        { city: "Cozumel", country: "Mexico" },
        { city: "Cartagena", country: "Colombia" },
        { city: "Panama Canal", country: "Panama" },
        { city: "Guayaquil", country: "Ecuador" },
        { city: "Lima", country: "Peru" },
        { city: "Santiago", country: "Chile" },
        { city: "Puerto Madryn", country: "Argentina" },
        { city: "Buenos Aires", country: "Argentina" },
      ],
      description:
        "An epic 18-day journey from New Orleans to Buenos Aires featuring the Panama Canal and South America's west coast.",
      distance: "6,900 nautical miles",
      totalDuration: "18 days",
      timeAtSea: [
        {
          start: "2026-04-01T16:00:00-06:00",
          end: "2026-04-03T09:00:00-06:00",
          description: "Sailing south across the Gulf of Mexico to Cozumel.",
        },
        {
          start: "2026-04-04T18:00:00-06:00",
          end: "2026-04-06T08:00:00-05:00",
          description: "Caribbean sailing to Cartagena, Colombia.",
        },
        {
          start: "2026-04-07T19:00:00-05:00",
          end: "2026-04-08T05:00:00-05:00",
          description: "Overnight journey to the Panama Canal.",
        },
        {
          start: "2026-04-08T17:00:00-05:00",
          end: "2026-04-10T08:00:00-05:00",
          description: "Pacific Ocean sailing to Guayaquil, Ecuador.",
        },
        {
          start: "2026-04-11T16:00:00-05:00",
          end: "2026-04-13T07:00:00-05:00",
          description: "Cruising along the Pacific coast to Lima, Peru.",
        },
        {
          start: "2026-04-15T18:00:00-05:00",
          end: "2026-04-17T09:00:00-04:00",
          description: "South Pacific sailing to Santiago (Valparaiso), Chile.",
        },
        {
          start: "2026-04-19T17:00:00-04:00",
          end: "2026-04-21T08:00:00-03:00",
          description: "Sailing around Cape Horn to Puerto Madryn, Argentina.",
        },
        {
          start: "2026-04-23T15:00:00-03:00",
          end: "2026-04-25T09:00:00-03:00",
          description: "Final South Atlantic sailing to Buenos Aires.",
        },
      ],
      timeOnLand: [
        {
          start: "2026-04-03T09:00:00-06:00",
          end: "2026-04-04T18:00:00-06:00",
          description: "Experience Cozumel's Mayan ruins and pristine beaches.",
        },
        {
          start: "2026-04-06T08:00:00-05:00",
          end: "2026-04-07T19:00:00-05:00",
          description:
            "Explore Cartagena's historic walled city and colonial architecture.",
        },
        {
          start: "2026-04-08T05:00:00-05:00",
          end: "2026-04-08T17:00:00-05:00",
          description: "Full-day transit through the remarkable Panama Canal.",
        },
        {
          start: "2026-04-10T08:00:00-05:00",
          end: "2026-04-11T16:00:00-05:00",
          description:
            "Visit Guayaquil's Malecón 2000 waterfront and historic Las Peñas neighborhood.",
        },
        {
          start: "2026-04-13T07:00:00-05:00",
          end: "2026-04-15T18:00:00-05:00",
          description:
            "Discover Lima's colonial architecture and renowned cuisine.",
        },
        {
          start: "2026-04-17T09:00:00-04:00",
          end: "2026-04-19T17:00:00-04:00",
          description:
            "Tour Santiago and nearby Valparaiso's colorful hillside neighborhoods.",
        },
        {
          start: "2026-04-21T08:00:00-03:00",
          end: "2026-04-23T15:00:00-03:00",
          description:
            "Experience Puerto Madryn's wildlife including whales and penguins.",
        },
        {
          start: "2026-04-25T09:00:00-03:00",
          end: "2026-04-25T18:00:00-03:00",
          description: "Arrive in Buenos Aires, the 'Paris of South America.'",
        },
      ],
    },
    requiredDocuments: [
      "Valid Passport",
      "Visas for Argentina, Chile, Peru, Ecuador, Colombia, and Panama (if required)",
    ],
    cancellationPolicy: "Full refund if canceled 120 days prior to departure",
    tourCategoryId: "ultra-luxury-cruise",
    contactPersonnel: [
      {
        name: "Carlos Mendoza",
        role: "South American Cruise Director",
        description: "Senior Expedition Director",
        bio: "South American expert with 16 years of experience in luxury cruises across the Americas.",
        languages: ["English", "Spanish", "Portuguese"],
        experienceYears: 16,
        profileImage:
          "https://images.unsplash.com/photo-1566753323558-f4e0952af115",
        contact: {
          contactEmail: "carlos.mendoza@neworleanscruises.com",
          contactNumber: "+1 504-555-8822",
        },
      },
    ],
    title: "South American Grand Passage",
    description:
      "Journey from the Gulf of Mexico to Buenos Aires on this 18-day ultra-luxury cruise featuring the Panama Canal and South America's most vibrant cities.",
    tags: ["luxury", "south america", "panama canal", "expedition", "cultural"],
    rating: 5.0,
    isFamilyFriendly: false,
    isLuxuryCruise: true,
    basePrice: 10899, // USD
  },

  {
    departureLocation: {
      city: "New Orleans",
      country: "USA",
      state: "LA",
      region: "South",
      coordinates: { latitude: 29.9511, longitude: -90.0715 },
      address:
        "Port of New Orleans, 1350 Port of New Orleans Pl, New Orleans, LA 70130",
      postalCode: "70130",
      timezone: "America/Chicago",
      additionalInfo:
        "Premium terminal with dedicated check-in for long voyages",
    },
    arrivalLocation: {
      city: "San Diego",
      country: "USA",
      state: "CA",
      coordinates: { latitude: 32.7157, longitude: -117.1611 },
      timezone: "America/Los_Angeles",
    },
    category: "luxury",
    itinerary: {
      route: [
        { city: "New Orleans", country: "USA", state: "LA" },
        { city: "Progreso", country: "Mexico" },
        { city: "Cozumel", country: "Mexico" },
        { city: "Belize City", country: "Belize" },
        { city: "Roatan", country: "Honduras" },
        { city: "Puerto Limon", country: "Costa Rica" },
        { city: "Panama Canal", country: "Panama" },
        { city: "Puntarenas", country: "Costa Rica" },
        { city: "Puerto Quetzal", country: "Guatemala" },
        { city: "Acapulco", country: "Mexico" },
        { city: "Puerto Vallarta", country: "Mexico" },
        { city: "Cabo San Lucas", country: "Mexico" },
        { city: "San Diego", country: "USA", state: "CA" },
      ],
      description:
        "21-day luxury voyage from New Orleans to San Diego via the Panama Canal and the coasts of Central America and Mexico.",
      distance: "4,800 nautical miles",
      totalDuration: "21 days",
      timeAtSea: [
        {
          start: "2026-10-01T16:00:00-06:00",
          end: "2026-10-02T09:00:00-06:00",
          description:
            "Sailing across the Gulf of Mexico to Progreso, Yucatan.",
        },
        {
          start: "2026-10-03T17:00:00-06:00",
          end: "2026-10-04T08:00:00-06:00",
          description: "Short cruise to Cozumel.",
        },
        {
          start: "2026-10-05T18:00:00-06:00",
          end: "2026-10-06T07:00:00-06:00",
          description: "Caribbean sailing to Belize City.",
        },
        {
          start: "2026-10-07T16:00:00-06:00",
          end: "2026-10-08T08:00:00-06:00",
          description: "Cruising to Roatan, Honduras.",
        },
        {
          start: "2026-10-09T17:00:00-06:00",
          end: "2026-10-10T09:00:00-06:00",
          description: "Caribbean sailing to Puerto Limon, Costa Rica.",
        },
        {
          start: "2026-10-11T18:00:00-06:00",
          end: "2026-10-12T05:00:00-05:00",
          description: "Overnight cruise to Panama Canal entrance.",
        },
        {
          start: "2026-10-12T17:00:00-05:00",
          end: "2026-10-13T08:00:00-06:00",
          description: "Pacific Ocean sailing to Puntarenas, Costa Rica.",
        },
        {
          start: "2026-10-14T16:00:00-06:00",
          end: "2026-10-15T07:00:00-06:00",
          description: "Cruising north to Puerto Quetzal, Guatemala.",
        },
        {
          start: "2026-10-16T17:00:00-06:00",
          end: "2026-10-18T09:00:00-06:00",
          description: "Pacific coast sailing to Acapulco, Mexico.",
        },
        {
          start: "2026-10-19T18:00:00-06:00",
          end: "2026-10-20T08:00:00-07:00",
          description:
            "Cruising along Mexico's Pacific coast to Puerto Vallarta.",
        },
        {
          start: "2026-10-21T17:00:00-07:00",
          end: "2026-10-22T08:00:00-07:00",
          description: "Final Mexican coastal sailing to Cabo San Lucas.",
        },
        {
          start: "2026-10-23T16:00:00-07:00",
          end: "2026-10-24T09:00:00-07:00",
          description: "Baja California sailing to San Diego.",
        },
      ],
      timeOnLand: [
        {
          start: "2026-10-02T09:00:00-06:00",
          end: "2026-10-03T17:00:00-06:00",
          description:
            "Visit Chichen Itza and other Mayan ruins from Progreso.",
        },
        {
          start: "2026-10-04T08:00:00-06:00",
          end: "2026-10-05T18:00:00-06:00",
          description: "Enjoy Cozumel's beaches and underwater national park.",
        },
        {
          start: "2026-10-06T07:00:00-06:00",
          end: "2026-10-07T16:00:00-06:00",
          description: "Explore Belize's jungle adventures and Mayan sites.",
        },
        {
          start: "2026-10-08T08:00:00-06:00",
          end: "2026-10-09T17:00:00-06:00",
          description: "Experience Roatan's pristine coral reefs and beaches.",
        },
        {
          start: "2026-10-10T09:00:00-06:00",
          end: "2026-10-11T18:00:00-06:00",
          description:
            "Discover Costa Rica's Caribbean rainforests and wildlife.",
        },
        {
          start: "2026-10-12T05:00:00-05:00",
          end: "2026-10-12T17:00:00-05:00",
          description: "Full-day transit through the Panama Canal.",
        },
        {
          start: "2026-10-13T08:00:00-06:00",
          end: "2026-10-14T16:00:00-06:00",
          description: "Visit Puntarenas and Costa Rica's Pacific coast.",
        },
        {
          start: "2026-10-15T07:00:00-06:00",
          end: "2026-10-16T17:00:00-06:00",
          description:
            "Explore Guatemala's colonial cities and volcanic landscapes.",
        },
        {
          start: "2026-10-18T09:00:00-06:00",
          end: "2026-10-19T18:00:00-06:00",
          description: "Experience Acapulco's famous cliff divers and beaches.",
        },
        {
          start: "2026-10-20T08:00:00-07:00",
          end: "2026-10-21T17:00:00-07:00",
          description:
            "Discover Puerto Vallarta's charming cobblestone center and beaches.",
        },
        {
          start: "2026-10-22T08:00:00-07:00",
          end: "2026-10-23T16:00:00-07:00",
          description:
            "Visit Cabo's iconic Land's End rock formations and beaches.",
        },
        {
          start: "2026-10-24T09:00:00-07:00",
          end: "2026-10-24T17:00:00-07:00",
          description:
            "Arrive in San Diego, with its perfect climate and attractions.",
        },
      ],
    },
    requiredDocuments: [
      "Valid Passport",
      "Tourist Cards for Mexico, Guatemala, Costa Rica, Panama (if required)",
    ],
    cancellationPolicy: "Full refund if canceled 90 days prior to departure",
    tourCategoryId: "luxury-cruise",
    contactPersonnel: [
      {
        name: "Isabella Torres",
        role: "Latin American Cruise Director",
        description: "Senior Cruise Director",
        bio: "Expert in Latin American destinations with 15 years of experience in luxury cruises.",
        languages: ["English", "Spanish", "Portuguese"],
        experienceYears: 15,
        profileImage:
          "https://images.unsplash.com/photo-1531123897727-8f129e1688ce",
        contact: {
          contactEmail: "isabella.torres@neworleanscruises.com",
          contactNumber: "+1 504-555-1212",
        },
      },
    ],
    title: "Panama Canal & Latin American Odyssey",
    description:
      "Experience the incredible diversity of Central America and Mexico on this 21-day luxury journey from New Orleans to San Diego featuring the Panama Canal.",
    tags: ["luxury", "panama canal", "central america", "mexico", "pacific"],
    rating: 4.9,
    isFamilyFriendly: false,
    isLuxuryCruise: true,
    basePrice: 9499, // USD
  },

  {
    departureLocation: {
      city: "New Orleans",
      country: "USA",
      state: "LA",
      region: "South",
      coordinates: { latitude: 29.9511, longitude: -90.0715 },
      address:
        "Port of New Orleans, 1350 Port of New Orleans Pl, New Orleans, LA 70130",
      postalCode: "70130",
      timezone: "America/Chicago",
      additionalInfo:
        "Ultra-luxury terminal with private embarkation experience",
    },
    arrivalLocation: {
      city: "New Orleans",
      country: "USA",
      state: "LA",
      coordinates: { latitude: 29.9511, longitude: -90.0715 },
      timezone: "America/Chicago",
    },
    category: "luxury",
    itinerary: {
      route: [
        { city: "New Orleans", country: "USA", state: "LA" },
        { city: "Grand Cayman", country: "Cayman Islands" },
        { city: "Cartagena", country: "Colombia" },
        { city: "Aruba", country: "Aruba" },
        { city: "Curacao", country: "Curacao" },
        { city: "Bonaire", country: "Bonaire" },
        { city: "New Orleans", country: "USA", state: "LA" },
      ],
      description:
        "A 10-day ultra-luxury Southern Caribbean cruise with exclusive experiences and fine dining.",
      distance: "3,400 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
        {
          start: "2026-05-15T16:00:00-06:00",
          end: "2026-05-17T09:00:00-05:00",
          description:
            "Luxury sailing across the Gulf of Mexico to Grand Cayman.",
        },
        {
          start: "2026-05-18T17:00:00-05:00",
          end: "2026-05-19T08:00:00-05:00",
          description: "Caribbean sailing to historic Cartagena.",
        },
        {
          start: "2026-05-20T19:00:00-05:00",
          end: "2026-05-21T08:00:00-04:00",
          description: "Cruising to Dutch Caribbean island of Aruba.",
        },
        {
          start: "2026-05-22T18:00:00-04:00",
          end: "2026-05-23T08:00:00-04:00",
          description: "Short sail to neighboring Curacao.",
        },
        {
          start: "2026-05-24T16:00:00-04:00",
          end: "2026-05-25T07:00:00-04:00",
          description: "Brief cruise to Bonaire, completing the ABC islands.",
        },
        {
          start: "2026-05-26T16:00:00-04:00",
          end: "2026-05-29T09:00:00-06:00",
          description: "Return journey across the Caribbean to New Orleans.",
        },
      ],
      timeOnLand: [
        {
          start: "2026-05-17T09:00:00-05:00",
          end: "2026-05-18T17:00:00-05:00",
          description:
            "Experience Grand Cayman's Seven Mile Beach and swimming with stingrays.",
        },
        {
          start: "2026-05-19T08:00:00-05:00",
          end: "2026-05-20T19:00:00-05:00",
          description:
            "Explore Cartagena's stunning colonial architecture and historic fortresses.",
        },
        {
          start: "2026-05-21T08:00:00-04:00",
          end: "2026-05-22T18:00:00-04:00",
          description: "Discover Aruba's pristine beaches and arid landscape.",
        },
        {
          start: "2026-05-23T08:00:00-04:00",
          end: "2026-05-24T16:00:00-04:00",
          description:
            "Visit Curacao's colorful Willemstad and hidden beaches.",
        },
        {
          start: "2026-05-25T07:00:00-04:00",
          end: "2026-05-26T16:00:00-04:00",
          description:
            "Experience Bonaire's world-class diving and flamingo sanctuaries.",
        },
      ],
    },
    requiredDocuments: ["Valid Passport"],
    cancellationPolicy: "Full refund if canceled 90 days prior to departure",
    tourCategoryId: "ultra-luxury-cruise",
    contactPersonnel: [
      {
        name: "Jonathan Reynolds",
        role: "Caribbean Luxury Specialist",
        description: "Ultra-Luxury Director",
        bio: "Luxury cruise connoisseur with 18 years creating exceptional Caribbean travel experiences.",
        languages: ["English", "Spanish", "Dutch"],
        experienceYears: 18,
        profileImage:
          "https://images.unsplash.com/photo-1500048993953-d23a436266cf",
        contact: {
          contactEmail: "jonathan.reynolds@neworleanscruises.com",
          contactNumber: "+1 504-555-6789",
        },
      },
    ],
    title: "Southern Caribbean Ultra-Luxury Voyage",
    description:
      "Indulge in the ultimate Caribbean luxury experience on this 10-day cruise featuring Grand Cayman, Colombia, and the ABC Islands with personalized service and gourmet cuisine.",
    tags: [
      "ultra-luxury",
      "southern caribbean",
      "abc islands",
      "exclusive",
      "fine dining",
    ],
    rating: 5.0,
    isFamilyFriendly: false,
    isLuxuryCruise: true,
    basePrice: 6799, // USD
  },
];
