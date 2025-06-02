import { Cruise } from "@/lib/interfaces/services/cruises";

export const hongKongCruises: Cruise[] = [
  {
    departureLocation: {
      city: "Hong Kong",
      country: "China",
      region: "Asia",
      coordinates: { latitude: 22.3193, longitude: 114.1694 },
      address: "Kai Tak Cruise Terminal, 33 Shing Fung Road, Kowloon Bay",
      timezone: "Asia/Hong_Kong",
      additionalInfo: "Modern cruise terminal with excellent city access.",
    },
    arrivalLocation: {
      city: "Tokyo",
      country: "Japan",
      region: "Asia",
      coordinates: { latitude: 35.6762, longitude: 139.6503 },
      timezone: "Asia/Tokyo",
    },
    category: "luxury",
    itinerary: {
      route: [
        { city: "Hong Kong", country: "China" },
        { city: "Okinawa", country: "Japan" },
        { city: "Tokyo", country: "Japan" },
      ],
      description:
        "12-night luxury cruise from Hong Kong to Tokyo, exploring stunning Asian coastal cities and islands.",
      distance: "1,500 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
        {
          start: "2025-10-01T17:00:00+08:00",
          end: "2025-10-03T08:00:00+09:00",
          description: "Overnight sailing through the East China Sea.",
        },
        {
          start: "2025-10-08T18:00:00+09:00",
          end: "2025-10-10T09:00:00+09:00",
          description: "Sailing from Okinawa to Tokyo.",
        },
      ],
      timeOnLand: [
        {
          start: "2025-10-03T08:00:00+09:00",
          end: "2025-10-08T18:00:00+09:00",
          description: "Explore Okinawa’s beaches, culture, and history.",
        },
        {
          start: "2025-10-10T09:00:00+09:00",
          end: "2025-10-13T12:00:00+09:00",
          description: "Discover Tokyo’s vibrant city life and landmarks.",
        },
      ],
    },
    requiredDocuments: ["Valid Passport", "Visa (if required)"],
    cancellationPolicy: "Full refund if canceled 60 days before departure",
    tourCategoryId: "luxury-cruise",
    contactPersonnel: [
      {
        name: "Lina Chen",
        role: "Luxury Cruise Specialist",
        description: "Cruise Manager",
        bio: "Expert in luxury cruises around Asia with 12+ years experience.",
        languages: ["English", "Mandarin", "Cantonese"],
        experienceYears: 12,
        profileImage:
          "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
        contact: {
          contactEmail: "lchen@hongkongcruises.com",
          contactNumber: "+852 9876 5432",
        },
      },
    ],
    title: "Hong Kong to Tokyo Luxury Cruise",
    description:
      "Enjoy a premium 12-night cruise from Hong Kong to Tokyo, featuring rich cultural stops and scenic sailing days across Asia’s coastline.",
    tags: ["luxury", "Asia", "cultural", "beach", "urban"],
    rating: 4.9,
    isLuxuryCruise: true,
    isCulturalExperience: true,
    isFamilyFriendly: false,
    basePrice: 5200, // in USD per person
  },

  {
    departureLocation: {
      city: "Hong Kong",
      country: "China",
      region: "Asia",
      coordinates: { latitude: 22.3193, longitude: 114.1694 },
      address: "Kai Tak Cruise Terminal, 33 Shing Fung Road, Kowloon Bay",
      timezone: "Asia/Hong_Kong",
      additionalInfo: "Modern cruise terminal with excellent city access.",
    },
    arrivalLocation: {
      city: "Bangkok",
      country: "Thailand",
      region: "Asia",
      coordinates: { latitude: 13.7563, longitude: 100.5018 },
      timezone: "Asia/Bangkok",
    },
    category: "mainstream",
    itinerary: {
      route: [
        { city: "Hong Kong", country: "China" },
        { city: "Ha Long Bay", country: "Vietnam" },
        { city: "Bangkok", country: "Thailand" },
      ],
      description:
        "10-night cruise journey from Hong Kong through Vietnam to Bangkok, combining natural wonders with vibrant cities.",
      distance: "1,200 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
        {
          start: "2025-11-05T18:00:00+08:00",
          end: "2025-11-07T09:00:00+07:00",
          description: "Sailing along the South China Sea.",
        },
        {
          start: "2025-11-09T20:00:00+07:00",
          end: "2025-11-11T10:00:00+07:00",
          description: "Cruising from Ha Long Bay to Bangkok.",
        },
      ],
      timeOnLand: [
        {
          start: "2025-11-07T09:00:00+07:00",
          end: "2025-11-09T20:00:00+07:00",
          description: "Explore Ha Long Bay’s UNESCO World Heritage site.",
        },
        {
          start: "2025-11-11T10:00:00+07:00",
          end: "2025-11-15T08:00:00+07:00",
          description:
            "Discover Bangkok’s rich history and vibrant street life.",
        },
      ],
    },
    requiredDocuments: ["Valid Passport", "Visa (if required)"],
    cancellationPolicy: "Partial refund if canceled 30 days before departure",
    tourCategoryId: "theme-cruise",
    contactPersonnel: [
      {
        name: "James Wong",
        role: "Southeast Asia Cruise Specialist",
        description: "Cruise Coordinator",
        bio: "Specializes in Southeast Asia cruises with 8 years of experience.",
        languages: ["English", "Mandarin", "Vietnamese"],
        experienceYears: 8,
        profileImage:
          "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91",
        contact: {
          contactEmail: "jwong@hongkongcruises.com",
          contactNumber: "+852 9876 1234",
        },
      },
    ],
    title: "Southeast Asia Explorer",
    description:
      "Experience a 10-night cruise from Hong Kong to Bangkok via Vietnam, blending scenic natural landscapes with urban culture.",
    tags: ["mainstream", "Asia", "nature", "urban", "cultural"],
    rating: 4.5,
    isLuxuryCruise: false,
    isFamilyFriendly: true,
    basePrice: 2100, // in USD per person
  },

  {
    departureLocation: {
      city: "Hong Kong",
      country: "China",
      region: "Asia",
      coordinates: { latitude: 22.3193, longitude: 114.1694 },
      address: "Kai Tak Cruise Terminal, 33 Shing Fung Road, Kowloon Bay",
      timezone: "Asia/Hong_Kong",
      additionalInfo: "Modern cruise terminal with excellent city access.",
    },
    arrivalLocation: {
      city: "Singapore",
      country: "Singapore",
      region: "Asia",
      coordinates: { latitude: 1.3521, longitude: 103.8198 },
      timezone: "Asia/Singapore",
    },
    category: "premium",
    itinerary: {
      route: [
        { city: "Hong Kong", country: "China" },
        { city: "Ho Chi Minh City", country: "Vietnam" },
        { city: "Singapore", country: "Singapore" },
      ],
      description:
        "9-night premium cruise from Hong Kong to Singapore, offering upscale amenities and stops at dynamic Southeast Asian ports.",
      distance: "1,100 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
        {
          start: "2025-12-02T17:00:00+08:00",
          end: "2025-12-04T08:00:00+07:00",
          description: "Sailing through the South China Sea.",
        },
        {
          start: "2025-12-07T19:00:00+07:00",
          end: "2025-12-09T09:00:00+08:00",
          description: "Cruising from Ho Chi Minh City to Singapore.",
        },
      ],
      timeOnLand: [
        {
          start: "2025-12-04T08:00:00+07:00",
          end: "2025-12-07T19:00:00+07:00",
          description:
            "Explore Ho Chi Minh City’s history, markets, and cuisine.",
        },
        {
          start: "2025-12-09T09:00:00+08:00",
          end: "2025-12-11T14:00:00+08:00",
          description:
            "Discover Singapore’s modern skyline and cultural districts.",
        },
      ],
    },
    requiredDocuments: ["Valid Passport", "Visa (if required)"],
    cancellationPolicy: "Refund available if canceled 45 days before departure",
    tourCategoryId: "luxury-cruise",
    contactPersonnel: [
      {
        name: "Sophia Lim",
        role: "Premium Cruise Specialist",
        description: "Premium Cruise Specialist",
        bio: "Focused on premium cruises in Asia for over 9 years.",
        languages: ["English", "Mandarin"],
        experienceYears: 9,
        profileImage:
          "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
        contact: {
          contactEmail: "slim@hongkongcruises.com",
          contactNumber: "+852 9876 4321",
        },
      },
    ],
    title: "Premium Southeast Asia Cruise",
    description:
      "Sail from Hong Kong to Singapore on this 9-night premium cruise featuring upscale amenities and cultural stops.",
    tags: ["premium", "Asia", "urban", "cultural", "luxury"],
    rating: 4.7,
    isLuxuryCruise: true,
    isFamilyFriendly: false,
    basePrice: 3700, // in USD per person
  },
];
