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
      city: "Sydney",
      country: "Australia",
      region: "Oceania",
      coordinates: { latitude: -33.8688, longitude: 151.2093 },
      timezone: "Australia/Sydney",
    },
    category: "luxury",
    itinerary: {
      route: [
        { city: "Hong Kong", country: "China" },
        { city: "Manila", country: "Philippines" },
        { city: "Bali", country: "Indonesia" },
        { city: "Darwin", country: "Australia" },
        { city: "Brisbane", country: "Australia" },
        { city: "Sydney", country: "Australia" },
      ],
      description:
        "25-day ultimate luxury cruise from Hong Kong to Sydney, exploring the stunning coastlines of Asia and Australia.",
      distance: "5,200 nautical miles",
      totalDuration: "25 days",
      timeAtSea: [
        {
          start: "2026-01-10T16:00:00+08:00",
          end: "2026-01-12T09:00:00+08:00",
          description: "Sailing from Hong Kong to Manila.",
        },
        {
          start: "2026-01-15T18:00:00+08:00",
          end: "2026-01-18T10:00:00+08:00",
          description: "Cruising from Manila to Bali.",
        },
        {
          start: "2026-01-22T17:00:00+08:00",
          end: "2026-01-25T08:00:00+09:30",
          description: "Sailing from Bali to Darwin.",
        },
        {
          start: "2026-01-28T19:00:00+09:30",
          end: "2026-01-31T07:00:00+10:00",
          description: "Ocean voyage from Darwin to Brisbane.",
        },
        {
          start: "2026-02-02T16:00:00+10:00",
          end: "2026-02-03T10:00:00+11:00",
          description: "Final coastal sailing to Sydney.",
        },
      ],
      timeOnLand: [
        {
          start: "2026-01-12T09:00:00+08:00",
          end: "2026-01-15T18:00:00+08:00",
          description: "Explore Manila's colonial history and vibrant culture.",
        },
        {
          start: "2026-01-18T10:00:00+08:00",
          end: "2026-01-22T17:00:00+08:00",
          description:
            "Experience Bali's beaches, temples, and lush landscapes.",
        },
        {
          start: "2026-01-25T08:00:00+09:30",
          end: "2026-01-28T19:00:00+09:30",
          description:
            "Discover Darwin's natural beauty and Aboriginal heritage.",
        },
        {
          start: "2026-01-31T07:00:00+10:00",
          end: "2026-02-02T16:00:00+10:00",
          description: "Explore Brisbane's subtropical urban lifestyle.",
        },
        {
          start: "2026-02-03T10:00:00+11:00",
          end: "2026-02-04T12:00:00+11:00",
          description: "Final day in iconic Sydney Harbor.",
        },
      ],
    },
    requiredDocuments: ["Valid Passport", "Australian ETA/Visa"],
    cancellationPolicy: "Full refund if canceled 90 days before departure",
    tourCategoryId: "ultra-luxury-cruise",
    contactPersonnel: [
      {
        name: "Victoria Huang",
        role: "Ultra-Luxury Cruise Director",
        description: "Senior Cruise Director",
        bio: "Specializing in extended luxury cruises with 15+ years of experience.",
        languages: ["English", "Mandarin", "Cantonese", "Indonesian"],
        experienceYears: 15,
        profileImage:
          "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2",
        contact: {
          contactEmail: "vhuang@hongkongcruises.com",
          contactNumber: "+852 9876 2233",
        },
      },
    ],
    title: "Asia-Australia Grand Voyage",
    description:
      "An unparalleled 25-day luxury journey from Hong Kong to Sydney, combining Asian cultural experiences with Australian natural wonders.",
    tags: ["luxury", "Asia", "Australia", "islands", "long-duration"],
    rating: 4.9,
    isLuxuryCruise: true,
    isCulturalExperience: true,
    isFamilyFriendly: false,
    basePrice: 12500, // in USD per person
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
      city: "Shanghai",
      country: "China",
      region: "Asia",
      coordinates: { latitude: 31.2304, longitude: 121.4737 },
      timezone: "Asia/Shanghai",
    },
    category: "premium",
    itinerary: {
      route: [
        { city: "Hong Kong", country: "China" },
        { city: "Taipei", country: "Taiwan" },
        { city: "Okinawa", country: "Japan" },
        { city: "Shanghai", country: "China" },
      ],
      description: "14-day premium cruise exploring the East Asian coastline.",
      distance: "1,800 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
        {
          start: "2026-03-05T18:00:00+08:00",
          end: "2026-03-07T09:00:00+08:00",
          description: "Crossing the Taiwan Strait.",
        },
        {
          start: "2026-03-10T17:00:00+08:00",
          end: "2026-03-12T08:00:00+09:00",
          description: "Sailing from Taipei to Okinawa.",
        },
        {
          start: "2026-03-16T16:00:00+09:00",
          end: "2026-03-18T10:00:00+08:00",
          description: "Final leg from Okinawa to Shanghai.",
        },
      ],
      timeOnLand: [
        {
          start: "2026-03-07T09:00:00+08:00",
          end: "2026-03-10T17:00:00+08:00",
          description:
            "Explore Taipei's night markets, museums, and Taipei 101.",
        },
        {
          start: "2026-03-12T08:00:00+09:00",
          end: "2026-03-16T16:00:00+09:00",
          description:
            "Discover Okinawa's unique culture and beautiful beaches.",
        },
        {
          start: "2026-03-18T10:00:00+08:00",
          end: "2026-03-19T12:00:00+08:00",
          description:
            "Explore Shanghai's blend of modern skyline and traditional gardens.",
        },
      ],
    },
    requiredDocuments: [
      "Valid Passport",
      "Chinese Visa",
      "Taiwan Entry Permit",
    ],
    cancellationPolicy: "Partial refund if canceled 45 days before departure",
    tourCategoryId: "premium-cruise",
    contactPersonnel: [
      {
        name: "David Chang",
        role: "East Asia Cruise Specialist",
        description: "Cruise Manager",
        bio: "Expert on East Asian cruise routes with 10 years experience.",
        languages: ["English", "Mandarin", "Cantonese", "Japanese"],
        experienceYears: 10,
        profileImage:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
        contact: {
          contactEmail: "dchang@hongkongcruises.com",
          contactNumber: "+852 9876 3344",
        },
      },
    ],
    title: "East Asian Discovery",
    description:
      "A 14-day journey exploring the cultural heritage and modern cities of East Asia.",
    tags: ["premium", "Asia", "cultural", "urban", "island"],
    rating: 4.6,
    isLuxuryCruise: false,
    isCulturalExperience: true,
    isFamilyFriendly: true,
    basePrice: 4800, // in USD per person
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
      city: "Mumbai",
      country: "India",
      region: "Asia",
      coordinates: { latitude: 19.076, longitude: 72.8777 },
      timezone: "Asia/Kolkata",
    },
    category: "luxury",
    itinerary: {
      route: [
        { city: "Hong Kong", country: "China" },
        { city: "Ho Chi Minh City", country: "Vietnam" },
        { city: "Phuket", country: "Thailand" },
        { city: "Colombo", country: "Sri Lanka" },
        { city: "Mumbai", country: "India" },
      ],
      description:
        "18-day luxury cruise from Hong Kong to Mumbai exploring the diverse cultures of Asia.",
      distance: "3,800 nautical miles",
      totalDuration: "18 days",
      timeAtSea: [
        {
          start: "2026-04-10T17:00:00+08:00",
          end: "2026-04-12T08:00:00+07:00",
          description: "Sailing through the South China Sea.",
        },
        {
          start: "2026-04-15T16:00:00+07:00",
          end: "2026-04-17T09:00:00+07:00",
          description: "Cruising from Vietnam to Thailand.",
        },
        {
          start: "2026-04-20T18:00:00+07:00",
          end: "2026-04-23T07:00:00+05:30",
          description: "Crossing the Bay of Bengal to Sri Lanka.",
        },
        {
          start: "2026-04-26T16:00:00+05:30",
          end: "2026-04-28T09:00:00+05:30",
          description: "Final sailing from Colombo to Mumbai.",
        },
      ],
      timeOnLand: [
        {
          start: "2026-04-12T08:00:00+07:00",
          end: "2026-04-15T16:00:00+07:00",
          description:
            "Discover Ho Chi Minh City's rich history and vibrant street life.",
        },
        {
          start: "2026-04-17T09:00:00+07:00",
          end: "2026-04-20T18:00:00+07:00",
          description: "Explore Phuket's stunning beaches and Thai culture.",
        },
        {
          start: "2026-04-23T07:00:00+05:30",
          end: "2026-04-26T16:00:00+05:30",
          description:
            "Experience Colombo's colonial heritage and Sri Lankan cuisine.",
        },
        {
          start: "2026-04-28T09:00:00+05:30",
          end: "2026-04-28T17:00:00+05:30",
          description: "Arrive in the bustling metropolis of Mumbai.",
        },
      ],
    },
    requiredDocuments: ["Valid Passport", "Indian Visa", "Sri Lankan ETA"],
    cancellationPolicy: "Full refund if canceled 75 days before departure",
    tourCategoryId: "luxury-cruise",
    contactPersonnel: [
      {
        name: "Anita Sharma",
        role: "South Asia Luxury Specialist",
        description: "Luxury Cruise Director",
        bio: "Expert in South Asian luxury cruises with 14 years experience.",
        languages: ["English", "Hindi", "Mandarin", "Thai"],
        experienceYears: 14,
        profileImage:
          "https://images.unsplash.com/photo-1573497019236-61f28a930102",
        contact: {
          contactEmail: "asharma@hongkongcruises.com",
          contactNumber: "+852 9876 5566",
        },
      },
    ],
    title: "Asian Cultural Odyssey",
    description:
      "An 18-day luxury journey from Hong Kong to Mumbai, experiencing the diverse cultures of Southeast and South Asia.",
    tags: ["luxury", "Asia", "cultural", "urban", "beaches"],
    rating: 4.8,
    isLuxuryCruise: true,
    isCulturalExperience: true,
    isFamilyFriendly: false,
    basePrice: 9200, // in USD per person
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
      city: "Auckland",
      country: "New Zealand",
      region: "Oceania",
      coordinates: { latitude: -36.8509, longitude: 174.7645 },
      timezone: "Pacific/Auckland",
    },
    category: "luxury",
    itinerary: {
      route: [
        { city: "Hong Kong", country: "China" },
        { city: "Manila", country: "Philippines" },
        { city: "Darwin", country: "Australia" },
        { city: "Brisbane", country: "Australia" },
        { city: "Sydney", country: "Australia" },
        { city: "Auckland", country: "New Zealand" },
      ],
      description:
        "21-day transoceanic luxury cruise from Hong Kong to Auckland via Australia.",
      distance: "6,200 nautical miles",
      totalDuration: "21 days",
      timeAtSea: [
        {
          start: "2026-02-15T16:00:00+08:00",
          end: "2026-02-17T09:00:00+08:00",
          description: "Sailing from Hong Kong to Manila.",
        },
        {
          start: "2026-02-19T18:00:00+08:00",
          end: "2026-02-22T08:00:00+09:30",
          description: "Long oceanic journey from Manila to Darwin.",
        },
        {
          start: "2026-02-24T17:00:00+09:30",
          end: "2026-02-26T07:00:00+10:00",
          description: "Coastal sailing from Darwin to Brisbane.",
        },
        {
          start: "2026-02-28T16:00:00+10:00",
          end: "2026-03-01T09:00:00+11:00",
          description: "Sailing from Brisbane to Sydney.",
        },
        {
          start: "2026-03-04T18:00:00+11:00",
          end: "2026-03-07T09:00:00+13:00",
          description: "Crossing the Tasman Sea to Auckland.",
        },
      ],
      timeOnLand: [
        {
          start: "2026-02-17T09:00:00+08:00",
          end: "2026-02-19T18:00:00+08:00",
          description:
            "Experience Manila's blend of Spanish colonial and modern Filipino culture.",
        },
        {
          start: "2026-02-22T08:00:00+09:30",
          end: "2026-02-24T17:00:00+09:30",
          description:
            "Explore Darwin's tropical landscapes and Aboriginal heritage.",
        },
        {
          start: "2026-02-26T07:00:00+10:00",
          end: "2026-02-28T16:00:00+10:00",
          description:
            "Discover Brisbane's subtropical lifestyle and nearby natural wonders.",
        },
        {
          start: "2026-03-01T09:00:00+11:00",
          end: "2026-03-04T18:00:00+11:00",
          description:
            "Explore iconic Sydney Harbor, beaches, and vibrant city life.",
        },
        {
          start: "2026-03-07T09:00:00+13:00",
          end: "2026-03-08T12:00:00+13:00",
          description: "Arrive in Auckland, the City of Sails.",
        },
      ],
    },
    requiredDocuments: [
      "Valid Passport",
      "Australian ETA/Visa",
      "New Zealand ETA",
    ],
    cancellationPolicy: "Partial refund if canceled 90 days before departure",
    tourCategoryId: "ultra-luxury-cruise",
    contactPersonnel: [
      {
        name: "Michael Wong",
        role: "Oceania Luxury Specialist",
        description: "Senior Cruise Director",
        bio: "Specialist in transoceanic luxury cruises with 18 years experience.",
        languages: ["English", "Mandarin", "Cantonese", "Maori"],
        experienceYears: 18,
        profileImage:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
        contact: {
          contactEmail: "mwong@hongkongcruises.com",
          contactNumber: "+852 9876 7788",
        },
      },
    ],
    title: "Trans-Pacific Luxury Journey",
    description:
      "A 21-day luxury voyage from Hong Kong to Auckland, exploring Asian and Oceanic coastlines.",
    tags: ["luxury", "Asia", "Oceania", "long-duration", "transoceanic"],
    rating: 4.9,
    isLuxuryCruise: true,
    isCulturalExperience: true,
    isFamilyFriendly: false,
    basePrice: 15800, // in USD per person
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
      city: "Busan",
      country: "South Korea",
      region: "Asia",
      coordinates: { latitude: 35.1796, longitude: 129.0756 },
      timezone: "Asia/Seoul",
    },
    category: "premium",
    itinerary: {
      route: [
        { city: "Hong Kong", country: "China" },
        { city: "Shanghai", country: "China" },
        { city: "Busan", country: "South Korea" },
      ],
      description:
        "9-day premium East Asian cruise from Hong Kong to Busan via Shanghai.",
      distance: "1,400 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
        {
          start: "2026-05-10T17:00:00+08:00",
          end: "2026-05-12T08:00:00+08:00",
          description: "Sailing through the East China Sea.",
        },
        {
          start: "2026-05-15T18:00:00+08:00",
          end: "2026-05-17T09:00:00+09:00",
          description: "Cruising from Shanghai to Busan.",
        },
      ],
      timeOnLand: [
        {
          start: "2026-05-12T08:00:00+08:00",
          end: "2026-05-15T18:00:00+08:00",
          description:
            "Explore Shanghai's blend of colonial architecture and futuristic skyline.",
        },
        {
          start: "2026-05-17T09:00:00+09:00",
          end: "2026-05-19T14:00:00+09:00",
          description: "Discover Busan's beaches, temples, and Korean culture.",
        },
      ],
    },
    requiredDocuments: [
      "Valid Passport",
      "Chinese Visa",
      "Korean Visa (if required)",
    ],
    cancellationPolicy: "50% refund if canceled 30 days before departure",
    tourCategoryId: "premium-cruise",
    contactPersonnel: [
      {
        name: "Jin-Ho Park",
        role: "East Asia Cruise Specialist",
        description: "Cruise Coordinator",
        bio: "Expert in East Asian cruise routes with 7 years experience.",
        languages: ["English", "Korean", "Mandarin", "Cantonese"],
        experienceYears: 7,
        profileImage:
          "https://images.unsplash.com/photo-1566492031773-4f4e44671857",
        contact: {
          contactEmail: "jpark@hongkongcruises.com",
          contactNumber: "+852 9876 9900",
        },
      },
    ],
    title: "East Asian Connection",
    description:
      "A 9-day premium cruise connecting the vibrant cities of Hong Kong, Shanghai, and Busan.",
    tags: ["premium", "Asia", "urban", "cultural", "short-duration"],
    rating: 4.5,
    isLuxuryCruise: false,
    isFamilyFriendly: true,
    basePrice: 3200, // in USD per person
  },
];
