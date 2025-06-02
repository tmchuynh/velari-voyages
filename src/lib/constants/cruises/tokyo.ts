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
  {
    departureLocation: {
      city: "Tokyo",
      country: "Japan",
      region: "Kanto",
      coordinates: { latitude: 35.6762, longitude: 139.6503 },
      timezone: "Asia/Tokyo",
    },
    arrivalLocation: {
      city: "Okinawa",
      country: "Japan",
      region: "Okinawa Prefecture",
      coordinates: { latitude: 26.2124, longitude: 127.6792 },
      timezone: "Asia/Tokyo",
    },
    category: "mainstream",
    itinerary: {
      route: [
        { city: "Tokyo", country: "Japan" },
        { city: "Naha", country: "Japan" },
        { city: "Ishigaki", country: "Japan" },
      ],
      description:
        "7-night family-friendly cruise exploring Japan's tropical islands.",
      distance: "1200 nautical miles",
      totalDuration: "7 days",
      timeAtSea: [
        {
          start: "2025-07-01T15:00:00+09:00",
          end: "2025-07-02T10:00:00+09:00",
          description:
            "Cruising from Tokyo to Okinawa with onboard family activities.",
        },
        {
          start: "2025-07-05T18:00:00+09:00",
          end: "2025-07-06T09:00:00+09:00",
          description:
            "Sailing from Naha to Ishigaki with evening entertainment.",
        },
      ],
      timeOnLand: [
        {
          start: "2025-07-02T10:00:00+09:00",
          end: "2025-07-05T18:00:00+09:00",
          description:
            "Family fun in Naha with beaches, water sports, and cultural tours.",
        },
        {
          start: "2025-07-06T09:00:00+09:00",
          end: "2025-07-08T16:00:00+09:00",
          description:
            "Exploring Ishigaki's beaches, snorkeling, and local cuisine.",
        },
      ],
    },
    requiredDocuments: [
      "Valid Passport",
      "Parental Consent for Minors (if applicable)",
    ],
    cancellationPolicy: "Full refund if canceled 30 days prior to departure",
    tourCategoryId: "family-cruise",
    contactPersonnel: [
      {
        name: "Aiko Suzuki",
        role: "Family Cruise Coordinator",
        bio: "Specializes in family-friendly cruise experiences with a focus on children's activities and safety.",
        languages: ["Japanese", "English"],
        experienceYears: 8,
        profileImage:
          "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
        contact: {
          contactNumber: "+81 3-5555-4567",
        },
      },
      {
        name: "Kenji Yamamoto",
        role: "Onboard Family Activities Director",
        bio: "Expert in organizing engaging activities for families and children onboard.",
        languages: ["Japanese", "English"],
        experienceYears: 10,
        profileImage:
          "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
        contact: {
          contactNumber: "+81 3-5555-7890",
        },
      },
    ],
    title: "Tropical Family Adventure Cruise",
    description:
      "Enjoy a week of family fun and adventure in Japan's tropical islands on this 7-night cruise from Tokyo to Okinawa.",
    tags: ["family", "Japan", "Okinawa", "tropical", "adventure"],
    rating: 4.5,
    isFamilyFriendly: true,
    basePrice: 1399,
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
      city: "Shanghai",
      country: "China",
      coordinates: { latitude: 31.2304, longitude: 121.4737 },
      timezone: "Asia/Shanghai",
    },
    category: "mainstream",
    itinerary: {
      route: [
        { city: "Tokyo", country: "Japan" },
        { city: "Yokohama", country: "Japan" },
        { city: "Shanghai", country: "China" },
      ],
      description:
        "4-night budget cruise from Tokyo to Shanghai with stops in Yokohama.",
      distance: "800 nautical miles",
      totalDuration: "4 days",
      timeAtSea: [
        {
          start: "2025-08-05T16:00:00+09:00",
          end: "2025-08-06T10:00:00+09:00",
          description:
            "Cruising from Tokyo Bay to Yokohama with onboard entertainment.",
        },
        {
          start: "2025-08-07T18:00:00+09:00",
          end: "2025-08-08T09:00:00+09:00",
          description: "Sailing from Yokohama to Shanghai with evening shows.",
        },
      ],
      timeOnLand: [
        {
          start: "2025-08-06T10:00:00+09:00",
          end: "2025-08-07T18:00:00+09:00",
          description: "Exploring Yokohama's Chinatown, parks, and waterfront.",
        },
        {
          start: "2025-08-08T09:00:00+09:00",
          end: "2025-08-09T16:00:00+08:00",
          description:
            "Discovering Shanghai's skyline, markets, and cultural sites.",
        },
      ],
    },
    requiredDocuments: ["Valid Passport", "Chinese Visa (if applicable)"],
    cancellationPolicy: "Full refund if canceled 20 days prior to departure",
    tourCategoryId: "budget-cruise",
    contactPersonnel: [
      {
        name: "Li Wei",
        role: "Budget Cruise Specialist",
        bio: "Expert in affordable cruise options with a focus on value and cultural experiences.",
        languages: ["Chinese", "Japanese", "English"],
        experienceYears: 6,
        profileImage:
          "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
        contact: {
          contactNumber: "+86 21-5555-1234",
        },
      },
      {
        name: "Satoshi Ito",
        role: "Onboard Entertainment Manager",
        bio: "Specializes in organizing budget-friendly entertainment and activities onboard.",
        languages: ["Japanese", "English"],
        experienceYears: 7,
        profileImage:
          "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
        contact: {
          contactNumber: "+81 3-5555-2345",
        },
      },
    ],
    title: "Tokyo to Shanghai Budget Cruise",
    description:
      "Experience the highlights of Japan and China on this budget-friendly 4-night cruise from Tokyo to Shanghai.",
    tags: ["budget", "Japan", "China", "Shanghai", "Yokohama"],
    rating: 4.2,
    isBudgetFriendly: true,
    basePrice: 899,
  },
];
