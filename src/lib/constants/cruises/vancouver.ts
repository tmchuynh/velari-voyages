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
];
