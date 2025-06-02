import { Cruise } from "@/lib/interfaces/services/cruises";

export const vancouverCruises: Cruise[] = [
  {
    departureLocation: {
      city: "Vancouver",
      country: "Canada",
      state: "British Columbia",
      region: "Pacific Northwest",
      coordinates: { latitude: 49.2827, longitude: -123.1207 },
      address: "Canada Place Cruise Terminal, 999 Canada Place, Vancouver, BC",
      timezone: "America/Vancouver",
      additionalInfo: "Primary cruise terminal for Alaska-bound departures",
    },
    arrivalLocation: {
      city: "Juneau",
      country: "USA",
      state: "Alaska",
      coordinates: { latitude: 58.3019, longitude: -134.4197 },
      timezone: "America/Juneau",
    },
    category: "premium",
    itinerary: {
      route: [
        { city: "Vancouver", country: "Canada", state: "British Columbia" },
        { city: "Inside Passage", country: "Canada" },
        { city: "Ketchikan", country: "USA", state: "Alaska" },
        { city: "Juneau", country: "USA", state: "Alaska" },
      ],
      description:
        "7-night premium cruise from Vancouver to Juneau through the Inside Passage.",
      distance: "950 nautical miles",
      totalDuration: "7 days",
      timeAtSea: [
        {
          start: "2025-06-01T16:00:00-07:00",
          end: "2025-06-02T08:00:00-07:00",
          description: "Sailing from Vancouver through the Inside Passage.",
        },
        {
          start: "2025-06-04T18:00:00-08:00",
          end: "2025-06-05T07:00:00-08:00",
          description: "Overnight sailing from Ketchikan to Juneau.",
        },
      ],
      timeOnLand: [
        {
          start: "2025-06-02T08:00:00-07:00",
          end: "2025-06-04T18:00:00-08:00",
          description: "Explore Ketchikan's totem poles and local culture.",
        },
        {
          start: "2025-06-05T07:00:00-08:00",
          end: "2025-06-08T10:00:00-08:00",
          description: "Discover Juneau's glaciers and wildlife.",
        },
      ],
    },
    requiredDocuments: ["Valid Passport", "eTA for Canada (if applicable)"],
    cancellationPolicy: "Full refund if canceled 60 days prior to departure",
    tourCategoryId: "theme-cruise",
    contactPersonnel: [
      {
        name: "Sarah Thompson",
        role: "Alaska Cruise Director",
        bio: "Expert in Alaska cruise experiences with 10 years of experience in the Pacific Northwest cruise industry.",
        languages: ["English"],
        experienceYears: 10,
        profileImage:
          "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91",
        contact: {
          contactEmail: "sthompson@vancouvercruises.com",
          contactNumber: "+1 604-555-1234",
        },
      },
    ],
    title: "Inside Passage Premium Alaska Cruise",
    description:
      "Experience the breathtaking Inside Passage and Alaska's wilderness on this 7-night premium cruise from Vancouver to Juneau.",
    tags: ["premium", "Alaska", "wildlife", "glaciers", "Inside Passage"],
    rating: 4.8,
    isFamilyFriendly: true,
    basePrice: 1599,
  },
  {
    departureLocation: {
      city: "Vancouver",
      country: "Canada",
      state: "British Columbia",
      coordinates: { latitude: 49.2827, longitude: -123.1207 },
      timezone: "America/Vancouver",
    },
    arrivalLocation: {
      city: "Seattle",
      country: "USA",
      state: "Washington",
      coordinates: { latitude: 47.6062, longitude: -122.3321 },
      timezone: "America/Los_Angeles",
    },
    category: "mainstream",
    itinerary: {
      route: [
        { city: "Vancouver", country: "Canada", state: "British Columbia" },
        { city: "Victoria", country: "Canada", state: "British Columbia" },
        { city: "Seattle", country: "USA", state: "Washington" },
      ],
      description:
        "3-night Pacific Northwest cruise from Vancouver to Seattle.",
      distance: "180 nautical miles",
      totalDuration: "3 days",
      timeAtSea: [
        {
          start: "2025-05-15T17:00:00-07:00",
          end: "2025-05-15T22:00:00-07:00",
          description: "Evening cruise from Vancouver to Victoria.",
        },
        {
          start: "2025-05-17T16:00:00-07:00",
          end: "2025-05-17T23:00:00-07:00",
          description: "Scenic sailing from Victoria to Seattle.",
        },
      ],
      timeOnLand: [
        {
          start: "2025-05-15T22:00:00-07:00",
          end: "2025-05-17T16:00:00-07:00",
          description: "Explore Victoria's gardens and historic buildings.",
        },
      ],
    },
    requiredDocuments: ["Valid Passport"],
    cancellationPolicy: "50% refund if canceled 30 days prior to departure",
    tourCategoryId: "weekend-cruise",
    contactPersonnel: [
      {
        name: "Michael Chen",
        role: "Weekend Cruise Coordinator",
        bio: "Specializes in short Pacific Northwest cruises and cultural experiences.",
        languages: ["English", "Mandarin"],
        experienceYears: 5,
        profileImage:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
        contact: {
          contactEmail: "mchen@vancouvercruises.com",
          contactNumber: "+1 604-555-6789",
        },
      },
    ],
    title: "Pacific Northwest Weekend Getaway",
    description:
      "Enjoy a quick 3-night cruise from Vancouver to Seattle with a charming stop in Victoria, BC.",
    tags: ["mainstream", "weekend", "Pacific Northwest", "short cruise"],
    rating: 4.5,
    isFamilyFriendly: true,
    basePrice: 499,
  },
  {
    departureLocation: {
      city: "Vancouver",
      country: "Canada",
      state: "British Columbia",
      coordinates: { latitude: 49.2827, longitude: -123.1207 },
      timezone: "America/Vancouver",
    },
    arrivalLocation: {
      city: "Alaska Inside Passage",
      country: "USA",
      state: "Alaska",
      coordinates: { latitude: 58.3019, longitude: -134.4197 },
      timezone: "America/Juneau",
    },
    category: "luxury",
    itinerary: {
      route: [
        { city: "Vancouver", country: "Canada", state: "British Columbia" },
        { city: "Skagway", country: "USA", state: "Alaska" },
        { city: "Glacier Bay", country: "USA", state: "Alaska" },
        { city: "Ketchikan", country: "USA", state: "Alaska" },
      ],
      description:
        "10-night luxury cruise from Vancouver to Alaska's Inside Passage with scenic glacier views.",
      distance: "1200 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
        {
          start: "2025-07-01T15:00:00-07:00",
          end: "2025-07-02T08:00:00-07:00",
          description:
            "Sailing from Vancouver through the scenic Inside Passage.",
        },
        {
          start: "2025-07-05T18:00:00-08:00",
          end: "2025-07-06T07:00:00-08:00",
          description:
            "Overnight sailing from Skagway to Glacier Bay with onboard luxury amenities.",
        },
      ],
      timeOnLand: [
        {
          start: "2025-07-02T08:00:00-07:00",
          end: "2025-07-05T18:00:00-08:00",
          description:
            "Explore Skagway's gold rush history and Ketchikan's totem poles.",
        },
        {
          start: "2025-07-06T07:00:00-08:00",
          end: "2025-07-10T10:00:00-08:00",
          description:
            "Experience Glacier Bay's stunning glaciers and wildlife with guided tours.",
        },
      ],
    },
    requiredDocuments: [
      "Valid Passport",
      "eTA for Canada (if applicable)",
      "Alaska Fishing License (if fishing excursions are planned)",
    ],
    cancellationPolicy: "Full refund if canceled 90 days prior to departure",
    tourCategoryId: "luxury-cruise",
    contactPersonnel: [
      {
        name: "Emily Johnson",
        role: "Luxury Cruise Specialist",
        bio: "Expert in luxury cruise experiences with a focus on personalized service and unique itineraries.",
        languages: ["English", "French"],
        experienceYears: 12,
        profileImage:
          "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
        contact: {
          contactNumber: "+1 604-555-4321",
        },
      },
      {
        name: "David Smith",
        role: "Alaska Cruise Guide",
        bio: "Specializes in Alaska's natural beauty and wildlife with 15 years of experience in luxury cruises.",
        languages: ["English", "Spanish"],
        experienceYears: 15,
        profileImage:
          "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91",
        contact: {
          contactNumber: "+1 604-555-9876",
        },
      },
    ],
    title: "Luxury Alaska Inside Passage Cruise",
    description:
      "Indulge in a luxurious 10-night cruise from Vancouver to Alaska's Inside Passage, featuring stunning glacier views and personalized service.",
    tags: [
      "luxury",
      "Alaska",
      "glaciers",
      "wildlife",
      "Inside Passage",
      "scenic-cruise",
    ],
    rating: 4.9,
    isFamilyFriendly: true,
    basePrice: 2999,
  },
  {
    departureLocation: {
      city: "Vancouver",
      country: "Canada",
      state: "British Columbia",
      coordinates: { latitude: 49.2827, longitude: -123.1207 },
      timezone: "America/Vancouver",
    },
    arrivalLocation: {
      city: "Victoria",
      country: "Canada",
      state: "British Columbia",
      coordinates: { latitude: 48.4284, longitude: -123.3656 },
      timezone: "America/Vancouver",
    },
    category: "mainstream",
    itinerary: {
      route: [
        { city: "Vancouver", country: "Canada", state: "British Columbia" },
        { city: "Victoria", country: "Canada", state: "British Columbia" },
      ],
      description:
        "2-night short cruise from Vancouver to Victoria with onboard entertainment.",
      distance: "60 nautical miles",
      totalDuration: "2 days",
      timeAtSea: [
        {
          start: "2025-08-01T17:00:00-07:00",
          end: "2025-08-01T20:00:00-07:00",
          description:
            "Evening sailing from Vancouver to Victoria with onboard activities.",
        },
      ],
      timeOnLand: [
        {
          start: "2025-08-01T20:00:00-07:00",
          end: "2025-08-02T16:00:00-07:00",
          description:
            "Explore Victoria's gardens, museums, and local cuisine.",
        },
      ],
    },
    requiredDocuments: ["Valid Passport"],
    cancellationPolicy:
      "50% refund if canceled 14 days prior to departure, no refund after that",
    tourCategoryId: "weekend-cruise",
    contactPersonnel: [
      {
        name: "Laura White",
        role: "Short Cruise Coordinator",
        bio: "Specializes in short cruises and cultural experiences in the Pacific Northwest.",
        languages: ["English"],
        experienceYears: 4,
        profileImage:
          "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91",
        contact: {
          contactNumber: "+1 604-555-2468",
        },
      },
    ],
    title: "Vancouver to Victoria Weekend Cruise",
    description:
      "Enjoy a quick 2-night cruise from Vancouver to Victoria with onboard entertainment and cultural experiences.",
    tags: ["mainstream", "weekend", "Pacific Northwest", "short cruise"],
    rating: 4.4,
    isFamilyFriendly: true,
    basePrice: 299,
  },
];
