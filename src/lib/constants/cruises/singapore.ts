import { Cruise } from "@/lib/interfaces/services/cruises";

export const singaporeCruises: Cruise[] = [
  {
    departureLocation: {
      city: "Singapore",
      country: "Singapore",
      coordinates: { latitude: 1.2558, longitude: 103.8232 },
      address: "Marina Bay Cruise Centre, 61 Marina Coastal Drive, Singapore",
      timezone: "Asia/Singapore",
      additionalInfo: "Modern cruise terminal with city center access",
    },
    arrivalLocation: {
      city: "Bangkok",
      country: "Thailand",
      coordinates: { latitude: 13.7563, longitude: 100.5018 },
      timezone: "Asia/Bangkok",
    },
    category: "premium",
    itinerary: {
      route: [
        { city: "Singapore", country: "Singapore" },
        { city: "Kuala Lumpur (Port Klang)", country: "Malaysia" },
        { city: "Penang", country: "Malaysia" },
        { city: "Phuket", country: "Thailand" },
        { city: "Bangkok (Laem Chabang)", country: "Thailand" },
      ],
      description: "7-night Southeast Asian cruise from Singapore to Bangkok.",
      distance: "1,100 nautical miles",
      totalDuration: "7 days",
      timeAtSea: [
        {
          start: "2025-11-01T17:00:00+08:00",
          end: "2025-11-02T08:00:00+08:00",
          description: "Evening sail from Singapore to Port Klang.",
        },
        {
          start: "2025-11-03T18:00:00+08:00",
          end: "2025-11-04T08:00:00+08:00",
          description: "Sailing from Port Klang to Penang.",
        },
        {
          start: "2025-11-05T17:00:00+08:00",
          end: "2025-11-06T08:00:00+07:00",
          description: "Cruising from Penang to Phuket.",
        },
        {
          start: "2025-11-07T18:00:00+07:00",
          end: "2025-11-08T08:00:00+07:00",
          description: "Final leg from Phuket to Bangkok.",
        },
      ],
      timeOnLand: [
        {
          start: "2025-11-02T08:00:00+08:00",
          end: "2025-11-03T18:00:00+08:00",
          description: "Explore Kuala Lumpur from Port Klang.",
        },
        {
          start: "2025-11-04T08:00:00+08:00",
          end: "2025-11-05T17:00:00+08:00",
          description: "Discover Penang's Georgetown and local cuisine.",
        },
        {
          start: "2025-11-06T08:00:00+07:00",
          end: "2025-11-07T18:00:00+07:00",
          description: "Beach time and cultural experiences in Phuket.",
        },
      ],
    },
    requiredDocuments: [
      "Valid Passport",
      "Thai Visa (if applicable)",
      "Malaysia Visa (if applicable)",
    ],
    cancellationPolicy: "Full refund if canceled 60 days prior to departure",
    tourCategoryId: "theme-cruise",
    contactPersonnel: [
      {
        name: "Lim Wei Ling",
        role: "Southeast Asia Cruise Director",
        bio: "Expert in Southeast Asian cruise routes with cultural and historical specialization.",
        languages: ["English", "Mandarin", "Malay", "Thai"],
        experienceYears: 10,
        profileImage:
          "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91",
        contact: {
          contactEmail: "wlim@singaporecruises.com.sg",
          contactNumber: "+65 6555 1234",
        },
      },
    ],
    title: "Southeast Asia Explorer Cruise",
    description:
      "Experience the diverse cultures and tropical beauty of Southeast Asia on this 7-night premium cruise from Singapore to Bangkok.",
    tags: ["premium", "Southeast Asia", "cultural", "beaches", "food"],
    rating: 4.8,
    isFamilyFriendly: true,
    isCulturalExperience: true,
    basePrice: 1299,
  },
  {
    departureLocation: {
      city: "Singapore",
      country: "Singapore",
      coordinates: { latitude: 1.2558, longitude: 103.8232 },
      timezone: "Asia/Singapore",
    },
    arrivalLocation: {
      city: "Bali",
      country: "Indonesia",
      coordinates: { latitude: -8.3405, longitude: 115.092 },
      timezone: "Asia/Makassar",
    },
    category: "luxury",
    itinerary: {
      route: [
        { city: "Singapore", country: "Singapore" },
        { city: "Bintan Island", country: "Indonesia" },
        { city: "Jakarta", country: "Indonesia" },
        { city: "Bali (Benoa)", country: "Indonesia" },
      ],
      description:
        "9-night luxury Indonesian islands cruise from Singapore to Bali.",
      distance: "1,400 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
        {
          start: "2025-10-15T16:00:00+08:00",
          end: "2025-10-16T07:00:00+08:00",
          description: "Short sail from Singapore to Bintan.",
        },
        {
          start: "2025-10-17T18:00:00+08:00",
          end: "2025-10-18T10:00:00+07:00",
          description: "Cruising from Bintan to Jakarta.",
        },
        {
          start: "2025-10-20T19:00:00+07:00",
          end: "2025-10-24T08:00:00+08:00",
          description:
            "Luxury sailing through Indonesian archipelago to Bali with multiple sea days.",
        },
      ],
      timeOnLand: [
        {
          start: "2025-10-16T07:00:00+08:00",
          end: "2025-10-17T18:00:00+08:00",
          description: "Beach resort and spa day on Bintan Island.",
        },
        {
          start: "2025-10-18T10:00:00+07:00",
          end: "2025-10-20T19:00:00+07:00",
          description: "Explore Jakarta's colonial history and modern city.",
        },
        {
          start: "2025-10-24T08:00:00+08:00",
          end: "2025-10-25T10:00:00+08:00",
          description:
            "Discover Bali's beautiful beaches and cultural landmarks.",
        },
      ],
    },
    requiredDocuments: ["Valid Passport", "Indonesian Visa (if applicable)"],
    cancellationPolicy: "70% refund if canceled 45 days prior to departure",
    tourCategoryId: "luxury-cruise",
    contactPersonnel: [
      {
        name: "Aisha Rahman",
        role: "Indonesian Luxury Cruise Specialist",
        bio: "Indonesian tourism expert with extensive experience in luxury cruise services throughout Southeast Asia.",
        languages: ["English", "Indonesian", "Malay"],
        experienceYears: 12,
        profileImage:
          "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
        contact: {
          contactEmail: "arahman@singaporecruises.com.sg",
          contactNumber: "+65 6555 7890",
        },
      },
    ],
    title: "Indonesian Islands Luxury Cruise",
    description:
      "Indulge in luxury while exploring Indonesia's beautiful islands on this 9-night cruise from Singapore to Bali.",
    tags: ["luxury", "Indonesia", "beaches", "islands", "cultural"],
    rating: 4.9,
    isLuxuryCruise: true,
    isCulturalExperience: true,
    basePrice: 2499,
  },
];
