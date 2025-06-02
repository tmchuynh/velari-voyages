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
];
