import { Cruise } from "@/lib/interfaces/services/cruises";

export const tokyoCruises: Cruise[] = [
  {
    departureLocation: {
      city: "Tokyo",
      country: "Japan",
      region: "Kanto",
      coordinates: { latitude: 35.6762, longitude: 139.6503 },
      address: "Tokyo International Cruise Terminal, 2 Aomi, Koto City, Tokyo",
      timezone: "Asia/Tokyo",
      additionalInfo: "Modern cruise terminal with direct city access",
    },
    arrivalLocation: {
      city: "Busan",
      country: "South Korea",
      coordinates: { latitude: 35.1796, longitude: 129.0756 },
      timezone: "Asia/Seoul",
    },
    category: "premium",
    itinerary: {
      route: [
        { city: "Tokyo", country: "Japan" },
        { city: "Kagoshima", country: "Japan" },
        { city: "Busan", country: "South Korea" },
      ],
      description:
        "6-night premium cruise from Tokyo to Busan featuring Japanese and Korean cultural experiences.",
      distance: "950 nautical miles",
      totalDuration: "6 days",
      timeAtSea: [
        {
          start: "2025-05-12T16:00:00+09:00",
          end: "2025-05-13T10:00:00+09:00",
          description: "Cruising from Tokyo Bay to southern Japan.",
        },
        {
          start: "2025-05-15T18:00:00+09:00",
          end: "2025-05-16T09:00:00+09:00",
          description: "Crossing from Kagoshima to Busan overnight.",
        },
      ],
      timeOnLand: [
        {
          start: "2025-05-13T10:00:00+09:00",
          end: "2025-05-15T18:00:00+09:00",
          description: "Exploring Kagoshima and Mt. Sakurajima volcano.",
        },
        {
          start: "2025-05-16T09:00:00+09:00",
          end: "2025-05-18T14:00:00+09:00",
          description: "Discover Busan's beaches, temples, and markets.",
        },
      ],
    },
    requiredDocuments: ["Valid Passport", "South Korean Visa (if applicable)"],
    cancellationPolicy: "Full refund if canceled 60 days prior to departure",
    tourCategoryId: "theme-cruise",
    contactPersonnel: [
      {
        name: "Yuki Tanaka",
        role: "Japan-Korea Cruise Director",
        bio: "Specialist in East Asian cruise routes with deep cultural knowledge of Japan and Korea.",
        languages: ["Japanese", "Korean", "English"],
        experienceYears: 12,
        profileImage:
          "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
        contact: {
          contactEmail: "ytanaka@tokyocruises.jp",
          contactNumber: "+81 3-5555-1234",
        },
      },
    ],
    title: "Japan to Korea Premium Cultural Cruise",
    description:
      "Discover the rich cultural heritage of Japan and South Korea on this 6-night premium cruise from Tokyo to Busan.",
    tags: ["premium", "Japan", "Korea", "cultural", "volcano"],
    rating: 4.7,
    isCulturalExperience: true,
    basePrice: 1799,
  },
  {
    departureLocation: {
      city: "Tokyo",
      country: "Japan",
      region: "Kanto",
      coordinates: { latitude: 35.6762, longitude: 139.6503 },
      timezone: "Asia/Tokyo",
    },
    arrivalLocation: {
      city: "Hakodate",
      country: "Japan",
      region: "Hokkaido",
      coordinates: { latitude: 41.7687, longitude: 140.7293 },
      timezone: "Asia/Tokyo",
    },
    category: "luxury",
    itinerary: {
      route: [
        { city: "Tokyo", country: "Japan" },
        { city: "Sendai", country: "Japan" },
        { city: "Hakodate", country: "Japan" },
      ],
      description:
        "5-night luxury cruise exploring Japan's eastern coastline and Hokkaido.",
      distance: "550 nautical miles",
      totalDuration: "5 days",
      timeAtSea: [
        {
          start: "2025-06-10T17:00:00+09:00",
          end: "2025-06-11T08:00:00+09:00",
          description: "Overnight sailing to Sendai.",
        },
        {
          start: "2025-06-13T19:00:00+09:00",
          end: "2025-06-14T08:00:00+09:00",
          description: "Evening cruise to Hakodate.",
        },
      ],
      timeOnLand: [
        {
          start: "2025-06-11T08:00:00+09:00",
          end: "2025-06-13T19:00:00+09:00",
          description: "Explore Sendai's temples and Date Masamune history.",
        },
        {
          start: "2025-06-14T08:00:00+09:00",
          end: "2025-06-15T16:00:00+09:00",
          description:
            "Discover Hakodate's night views, morning market, and historical districts.",
        },
      ],
    },
    requiredDocuments: ["Valid Passport"],
    cancellationPolicy: "80% refund if canceled 45 days prior to departure",
    tourCategoryId: "luxury-cruise",
    contactPersonnel: [
      {
        name: "Hiroshi Nakamura",
        role: "Japanese Luxury Cruise Specialist",
        bio: "Expert in premium Japanese cruise experiences with extensive knowledge of local cuisine and culture.",
        languages: ["Japanese", "English"],
        experienceYears: 15,
        profileImage:
          "https://images.unsplash.com/photo-1531384441138-2736e62e0919",
        contact: {
          contactEmail: "hnakamura@tokyocruises.jp",
          contactNumber: "+81 3-5555-9876",
        },
      },
    ],
    title: "Northern Japan Luxury Exploration",
    description:
      "Experience Japan's northern treasures in luxury and comfort on this 5-night cruise from Tokyo to Hokkaido.",
    tags: ["luxury", "Japan", "Hokkaido", "gourmet", "cultural"],
    rating: 4.9,
    isLuxuryCruise: true,
    basePrice: 2499,
  },
];
