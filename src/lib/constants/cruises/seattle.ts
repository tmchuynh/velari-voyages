import { Cruise } from "@/lib/interfaces/services/cruises";

export const seattleCruises: Cruise[] = [
  {
    departureLocation: {
      city: "Seattle",
      country: "USA",
      state: "Washington",
      region: "Pacific Northwest",
      coordinates: { latitude: 47.6062, longitude: -122.3321 },
      address: "Bell Street Cruise Terminal at Pier 66, Seattle",
      timezone: "America/Los_Angeles",
      additionalInfo: "Main cruise terminal for Alaska-bound cruises",
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
        { city: "Seattle", country: "USA", state: "Washington" },
        { city: "Victoria", country: "Canada", state: "British Columbia" },
        { city: "Ketchikan", country: "USA", state: "Alaska" },
        { city: "Juneau", country: "USA", state: "Alaska" },
      ],
      description:
        "7-night premium Alaska cruise from Seattle via the Inside Passage.",
      distance: "1,100 nautical miles",
      totalDuration: "7 days",
      timeAtSea: [
        {
          start: "2025-06-15T16:00:00-07:00",
          end: "2025-06-16T08:00:00-07:00",
          description: "Sailing from Seattle to Victoria overnight.",
        },
        {
          start: "2025-06-17T17:00:00-07:00",
          end: "2025-06-18T09:00:00-08:00",
          description: "Inside Passage cruising to Ketchikan.",
        },
        {
          start: "2025-06-19T18:00:00-08:00",
          end: "2025-06-20T08:00:00-08:00",
          description: "Evening sail to Juneau.",
        },
      ],
      timeOnLand: [
        {
          start: "2025-06-16T08:00:00-07:00",
          end: "2025-06-17T17:00:00-07:00",
          description:
            "Explore Victoria's Butchart Gardens and historic buildings.",
        },
        {
          start: "2025-06-18T09:00:00-08:00",
          end: "2025-06-19T18:00:00-08:00",
          description:
            "Discover Ketchikan's native Alaskan culture and salmon fishing.",
        },
        {
          start: "2025-06-20T08:00:00-08:00",
          end: "2025-06-22T10:00:00-08:00",
          description: "Experience Juneau's glaciers and wildlife.",
        },
      ],
    },
    requiredDocuments: ["Valid Passport", "Canadian eTA (if applicable)"],
    cancellationPolicy: "Full refund if canceled 60 days prior to departure",
    tourCategoryId: "theme-cruise",
    contactPersonnel: [
      {
        name: "Robert Johnson",
        role: "Alaska Cruise Director",
        bio: "Expert in Alaska cruise experiences with deep knowledge of wildlife and glaciers.",
        languages: ["English"],
        experienceYears: 15,
        profileImage:
          "https://images.unsplash.com/photo-1568602471122-7832951cc4c5",
        contact: {
          contactEmail: "rjohnson@seattlecruises.com",
          contactNumber: "+1 206-555-1234",
        },
      },
    ],
    title: "Inside Passage Alaska Premium Cruise",
    description:
      "Experience Alaska's breathtaking glaciers and wildlife on this 7-night premium cruise from Seattle through the famous Inside Passage.",
    tags: ["premium", "Alaska", "glaciers", "wildlife", "Inside Passage"],
    rating: 4.8,
    isFamilyFriendly: true,
    basePrice: 1699,
  },
  {
    departureLocation: {
      city: "Seattle",
      country: "USA",
      state: "Washington",
      region: "Pacific Northwest",
      coordinates: { latitude: 47.6062, longitude: -122.3321 },
      timezone: "America/Los_Angeles",
    },
    arrivalLocation: {
      city: "San Francisco",
      country: "USA",
      state: "California",
      coordinates: { latitude: 37.7749, longitude: -122.4194 },
      timezone: "America/Los_Angeles",
    },
    category: "mainstream",
    itinerary: {
      route: [
        { city: "Seattle", country: "USA", state: "Washington" },
        { city: "Astoria", country: "USA", state: "Oregon" },
        { city: "San Francisco", country: "USA", state: "California" },
      ],
      description: "4-night West Coast cruise from Seattle to San Francisco.",
      distance: "800 nautical miles",
      totalDuration: "4 days",
      timeAtSea: [
        {
          start: "2025-09-20T17:00:00-07:00",
          end: "2025-09-21T09:00:00-07:00",
          description: "Sailing from Seattle to Astoria.",
        },
        {
          start: "2025-09-22T16:00:00-07:00",
          end: "2025-09-23T08:00:00-07:00",
          description: "Pacific coast cruising to San Francisco.",
        },
      ],
      timeOnLand: [
        {
          start: "2025-09-21T09:00:00-07:00",
          end: "2025-09-22T16:00:00-07:00",
          description:
            "Explore Astoria's Lewis and Clark history and Victorian architecture.",
        },
        {
          start: "2025-09-23T08:00:00-07:00",
          end: "2025-09-24T12:00:00-07:00",
          description:
            "Discover San Francisco's iconic landmarks and vibrant neighborhoods.",
        },
      ],
    },
    requiredDocuments: [
      "Government-issued ID (for US citizens)",
      "Passport (for international travelers)",
    ],
    cancellationPolicy: "70% refund if canceled 30 days prior to departure",
    tourCategoryId: "weekend-cruise",
    contactPersonnel: [
      {
        name: "Michelle Lee",
        role: "West Coast Cruise Coordinator",
        bio: "Specializes in Pacific Coast cruises with extensive knowledge of west coast ports and attractions.",
        languages: ["English", "Spanish"],
        experienceYears: 8,
        profileImage:
          "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91",
        contact: {
          contactEmail: "mlee@seattlecruises.com",
          contactNumber: "+1 206-555-7890",
        },
      },
    ],
    title: "Pacific Coast Weekend Getaway",
    description:
      "Enjoy a short 4-night cruise along the scenic Pacific coast from Seattle to San Francisco with a charming stop in Astoria.",
    tags: ["mainstream", "West Coast", "weekend", "short cruise"],
    rating: 4.5,
    isFamilyFriendly: true,
    basePrice: 599,
  },
];
