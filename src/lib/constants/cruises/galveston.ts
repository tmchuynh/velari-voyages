import { Cruise } from "@/lib/interfaces/services/cruises";

export const galvestonCruises: Cruise[] = [
  {
    departureLocation: {
      city: "Galveston",
      country: "USA",
      state: "TX",
      region: "South",
      coordinates: { latitude: 29.3013, longitude: -94.7977 },
      address:
        "Galveston Cruise Terminal, 2502 Harborside Dr, Galveston, TX 77550",
      postalCode: "77550",
      timezone: "America/Chicago",
      additionalInfo:
        "Main cruise terminal near downtown Galveston with shuttle access",
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
        { city: "Galveston", country: "USA" },
        { city: "Cozumel", country: "Mexico" },
        { city: "Progreso", country: "Mexico", region: "Yucatán" },
        { city: "Galveston", country: "USA" },
      ],
      description:
        "7-night Caribbean cruise visiting Cozumel and Progreso departing from Galveston.",
      distance: "1,400 nautical miles",
      totalDuration: "7 days",
      timeAtSea: [
        {
          start: "2025-10-05T16:00:00-05:00",
          end: "2025-10-11T08:00:00-05:00",
          description: "Sailing days between ports",
        },
      ],
      timeOnLand: [],
    },
    requiredDocuments: ["Valid Passport", "US Visa (if applicable)"],
    cancellationPolicy: "Full refund if canceled 60 days prior to departure",
    tourCategoryId: "tropical-cruise",
    contactPersonnel: [
      {
        name: "Laura Sanchez",
        role: "Cruise Consultant",
        description: "Cruise Specialist",
        bio: "Expert in Gulf Coast cruises with 7 years of experience.",
        languages: ["English", "Spanish"],
        experienceYears: 7,
        profileImage:
          "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91",
        contact: {
          contactEmail: "laura.sanchez@galvestoncruises.com",
          contactNumber: "+1 409-555-7890",
        },
      },
    ],
    title: "Gulf to Caribbean Explorer",
    description:
      "Enjoy a 7-night journey from Galveston to Cozumel and Progreso with fun onboard activities and cultural experiences.",
    tags: ["caribbean", "mainstream", "family-friendly"],
    basePrice: 499,
    rating: 4.6,
    isFamilyFriendly: true,
  },

  {
    departureLocation: {
      city: "Galveston",
      country: "USA",
      state: "TX",
      region: "South",
      coordinates: { latitude: 29.3013, longitude: -94.7977 },
      address:
        "Galveston Cruise Terminal, 2502 Harborside Dr, Galveston, TX 77550",
      postalCode: "77550",
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
        { city: "Galveston", country: "USA" },
        { city: "Nassau", country: "Bahamas" },
        { city: "Freeport", country: "Bahamas" },
        { city: "Galveston", country: "USA" },
      ],
      description:
        "5-night premium cruise from Galveston to the Bahamas, offering luxury amenities and shore excursions.",
      distance: "1,000 nautical miles",
      totalDuration: "5 days",
      timeAtSea: [
        {
          start: "2025-11-20T15:00:00-06:00",
          end: "2025-11-25T09:00:00-06:00",
          description: "Cruising with luxury onboard experiences",
        },
      ],
      timeOnLand: [],
    },
    requiredDocuments: ["Valid Passport"],
    cancellationPolicy: "Refund available if canceled 45 days before departure",
    tourCategoryId: "luxury-cruise",
    contactPersonnel: [
      {
        name: "Mark Taylor",
        role: "Luxury Cruise Consultant",
        description: "Luxury Cruise Consultant",
        bio: "Over 10 years in premium cruise planning with a focus on Gulf departures.",
        languages: ["English"],
        experienceYears: 10,
        profileImage:
          "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
        contact: {
          contactEmail: "mark.taylor@galvestoncruises.com",
          contactNumber: "+1 409-555-1234",
        },
      },
    ],
    title: "Bahamas Luxury Escape",
    description:
      "Experience luxury and relaxation on this 5-night cruise from Galveston to Nassau and Freeport.",
    tags: ["premium", "luxury", "caribbean"],
    basePrice: 1299,
    rating: 4.8,
    isLuxuryCruise: true,
    isFamilyFriendly: false,
  },

  // New cruise #1
  {
    departureLocation: {
      city: "Galveston",
      country: "USA",
      state: "TX",
      region: "South",
      coordinates: { latitude: 29.3013, longitude: -94.7977 },
      address:
        "Galveston Cruise Terminal, 2502 Harborside Dr, Galveston, TX 77550",
      postalCode: "77550",
      timezone: "America/Chicago",
    },
    arrivalLocation: {
      city: "Key West",
      country: "USA",
      state: "FL",
      region: "South",
      coordinates: { latitude: 24.5551, longitude: -81.78 },
      timezone: "America/New_York",
    },
    category: "mainstream",
    itinerary: {
      route: [
        { city: "Galveston", country: "USA" },
        { city: "Key West", country: "USA" },
        { city: "Galveston", country: "USA" },
      ],
      description:
        "4-night mainstream cruise from Galveston to Key West, featuring snorkeling, water sports, and vibrant nightlife exploration.",
      distance: "900 nautical miles",
      totalDuration: "4 days",
      timeAtSea: [
        {
          start: "2025-09-10T14:00:00-05:00",
          end: "2025-09-13T08:00:00-05:00",
          description: "Sailing with onboard mainstream activities",
        },
      ],
      timeOnLand: [
        {
          start: "2025-09-11T09:00:00-04:00",
          end: "2025-09-11T20:00:00-04:00",
          description: "Port stop with guided snorkeling tours and city tours",
        },
      ],
    },
    requiredDocuments: [
      "Valid Passport or Government-issued ID for US Citizens",
    ],
    cancellationPolicy: "Full refund if canceled 30 days prior to departure",
    tourCategoryId: "theme-cruise",
    contactPersonnel: [
      {
        name: "Emily Roberts",
        role: "Cruise Coordinator",
        description: "mainstream Cruise Coordinator",
        bio: "Specializes in mainstream cruises and water-based activities with 5 years experience.",
        languages: ["English"],
        experienceYears: 5,
        profileImage:
          "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f92",
        contact: {
          contactEmail: "emily.roberts@galvestoncruises.com",
          contactNumber: "+1 409-555-5678",
        },
      },
    ],
    title: "Galveston to Key West mainstream",
    description:
      "Experience the excitement of water sports, snorkeling, and vibrant nightlife on this 4-night cruise to Key West.",
    tags: ["mainstream", "water-sports", "snorkeling", "short-cruise"],
    basePrice: 599,
    rating: 4.4,
    isFamilyFriendly: true,
  },

  // New cruise #2
  {
    departureLocation: {
      city: "Galveston",
      country: "USA",
      state: "TX",
      region: "South",
      coordinates: { latitude: 29.3013, longitude: -94.7977 },
      address:
        "Galveston Cruise Terminal, 2502 Harborside Dr, Galveston, TX 77550",
      postalCode: "77550",
      timezone: "America/Chicago",
    },
    arrivalLocation: {
      city: "New Orleans",
      country: "USA",
      state: "LA",
      region: "South",
      coordinates: { latitude: 29.9511, longitude: -90.0715 },
      timezone: "America/Chicago",
    },
    category: "mainstream",
    itinerary: {
      route: [
        { city: "Galveston", country: "USA" },
        { city: "New Orleans", country: "USA" },
        { city: "Galveston", country: "USA" },
      ],
      description:
        "5-night river and coastal cruise exploring Galveston to New Orleans with rich cultural excursions and jazz-themed evenings.",
      distance: "450 nautical miles",
      totalDuration: "5 days",
      timeAtSea: [
        {
          start: "2025-12-01T17:00:00-06:00",
          end: "2025-12-06T09:00:00-06:00",
          description: "Cruising along the Gulf Coast and Mississippi River",
        },
      ],
      timeOnLand: [
        {
          start: "2025-12-03T08:00:00-06:00",
          end: "2025-12-03T20:00:00-06:00",
          description:
            "Explore New Orleans with guided city tours and jazz clubs",
        },
      ],
    },
    requiredDocuments: [
      "Valid Passport or Government-issued ID for US Citizens",
    ],
    cancellationPolicy: "50% refund if canceled 30 days prior, no refund after",
    tourCategoryId: "theme-cruise",
    contactPersonnel: [
      {
        name: "James Carter",
        role: "River Cruise Specialist",
        description: "River Cruise Specialist",
        bio: "Expert in cultural river cruises with over 8 years in the industry.",
        languages: ["English"],
        experienceYears: 8,
        profileImage:
          "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f93",
        contact: {
          contactEmail: "james.carter@galvestoncruises.com",
          contactNumber: "+1 409-555-3456",
        },
      },
    ],
    title: "Gulf Coast Jazz & Culture Cruise",
    description:
      "Discover the vibrant culture and jazz heritage of New Orleans on this 5-night cruise from Galveston.",
    tags: ["mainstream", "culture", "jazz", "southern-us"],
    basePrice: 699,
    rating: 4.7,
    isFamilyFriendly: false,
  },
];
