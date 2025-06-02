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
  {
    departureLocation: {
      city: "Vancouver",
      country: "Canada",
      state: "British Columbia",
      region: "Pacific Northwest",
      coordinates: { latitude: 49.2827, longitude: -123.1207 },
      address: "Canada Place Cruise Terminal, 999 Canada Place, Vancouver, BC",
      timezone: "America/Vancouver",
      additionalInfo:
        "Premium cruise terminal with expedited embarkation for luxury cruises",
    },
    arrivalLocation: {
      city: "Nome",
      country: "USA",
      state: "Alaska",
      coordinates: { latitude: 64.5011, longitude: -165.4064 },
      timezone: "America/Nome",
    },
    category: "luxury",
    itinerary: {
      route: [
        { city: "Vancouver", country: "Canada", state: "British Columbia" },
        { city: "Ketchikan", country: "USA", state: "Alaska" },
        { city: "Juneau", country: "USA", state: "Alaska" },
        { city: "Skagway", country: "USA", state: "Alaska" },
        { city: "Glacier Bay", country: "USA", state: "Alaska" },
        { city: "Seward", country: "USA", state: "Alaska" },
        { city: "Kodiak", country: "USA", state: "Alaska" },
        { city: "Dutch Harbor", country: "USA", state: "Alaska" },
        { city: "Nome", country: "USA", state: "Alaska" },
      ],
      description:
        "14-day luxury cruise exploring the full Alaskan coastline from Vancouver to Nome.",
      distance: "2,800 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
        {
          start: "2026-06-01T16:00:00-07:00",
          end: "2026-06-02T08:00:00-08:00",
          description: "Sailing from Vancouver through the Inside Passage.",
        },
        {
          start: "2026-06-03T18:00:00-08:00",
          end: "2026-06-04T06:00:00-08:00",
          description: "Cruising from Ketchikan to Juneau.",
        },
        {
          start: "2026-06-05T17:00:00-08:00",
          end: "2026-06-06T07:00:00-08:00",
          description: "Overnight sailing from Juneau to Skagway.",
        },
        {
          start: "2026-06-07T16:00:00-08:00",
          end: "2026-06-08T06:00:00-08:00",
          description: "Cruising to Glacier Bay National Park.",
        },
        {
          start: "2026-06-09T18:00:00-08:00",
          end: "2026-06-10T07:00:00-08:00",
          description: "Gulf of Alaska crossing to Seward.",
        },
        {
          start: "2026-06-11T17:00:00-08:00",
          end: "2026-06-12T08:00:00-08:00",
          description: "Sailing to Kodiak Island.",
        },
        {
          start: "2026-06-13T16:00:00-08:00",
          end: "2026-06-14T07:00:00-08:00",
          description: "Cruising along the Aleutian Chain to Dutch Harbor.",
        },
        {
          start: "2026-06-15T16:00:00-08:00",
          end: "2026-06-16T08:00:00-08:00",
          description: "Final Bering Sea sailing to Nome.",
        },
      ],
      timeOnLand: [
        {
          start: "2026-06-02T08:00:00-08:00",
          end: "2026-06-03T18:00:00-08:00",
          description: "Explore Ketchikan's totem poles and Misty Fjords.",
        },
        {
          start: "2026-06-04T06:00:00-08:00",
          end: "2026-06-05T17:00:00-08:00",
          description:
            "Discover Juneau's Mendenhall Glacier and Mount Roberts.",
        },
        {
          start: "2026-06-06T07:00:00-08:00",
          end: "2026-06-07T16:00:00-08:00",
          description:
            "Experience Skagway's Gold Rush history and White Pass Railway.",
        },
        {
          start: "2026-06-08T06:00:00-08:00",
          end: "2026-06-09T18:00:00-08:00",
          description:
            "Full-day scenic cruising in Glacier Bay with National Park Rangers.",
        },
        {
          start: "2026-06-10T07:00:00-08:00",
          end: "2026-06-11T17:00:00-08:00",
          description: "Visit Seward and explore Kenai Fjords National Park.",
        },
        {
          start: "2026-06-12T08:00:00-08:00",
          end: "2026-06-13T16:00:00-08:00",
          description: "Discover Kodiak's rich wildlife and Russian heritage.",
        },
        {
          start: "2026-06-14T07:00:00-08:00",
          end: "2026-06-15T16:00:00-08:00",
          description:
            "Explore Dutch Harbor's WWII history and Aleutian culture.",
        },
        {
          start: "2026-06-16T08:00:00-08:00",
          end: "2026-06-16T18:00:00-08:00",
          description:
            "Arrive in Nome, explore gold rush history before disembarkation.",
        },
      ],
    },
    requiredDocuments: ["Valid Passport", "eTA for Canada (if applicable)"],
    cancellationPolicy: "Full refund if canceled 90 days prior to departure",
    tourCategoryId: "luxury-cruise",
    contactPersonnel: [
      {
        name: "Dr. Robert Frost",
        role: "Alaska Expedition Leader",
        description: "Senior Expedition Leader",
        bio: "Marine biologist and Alaska expert with 20+ years leading luxury expeditions in the North.",
        languages: ["English", "Russian", "Inuit"],
        experienceYears: 20,
        profileImage:
          "https://images.unsplash.com/photo-1566492031773-4f4e44671857",
        contact: {
          contactEmail: "r.frost@alaskaexpeditions.com",
          contactNumber: "+1 604-555-8899",
        },
      },
    ],
    title: "Ultimate Alaska Expedition",
    description:
      "An extraordinary 14-day journey exploring Alaska's full coastline from the Inside Passage to the remote Bering Sea.",
    tags: ["luxury", "expedition", "wildlife", "glaciers", "remote", "Alaska"],
    rating: 4.9,
    isFamilyFriendly: false,
    basePrice: 8999, // USD
  },

  {
    departureLocation: {
      city: "Vancouver",
      country: "Canada",
      state: "British Columbia",
      region: "Pacific Northwest",
      coordinates: { latitude: 49.2827, longitude: -123.1207 },
      address: "Canada Place Cruise Terminal, 999 Canada Place, Vancouver, BC",
      timezone: "America/Vancouver",
      additionalInfo: "Exclusive terminal section for transpacific departures",
    },
    arrivalLocation: {
      city: "Tokyo",
      country: "Japan",
      region: "Kanto",
      coordinates: { latitude: 35.6762, longitude: 139.6503 },
      timezone: "Asia/Tokyo",
    },
    category: "luxury",
    itinerary: {
      route: [
        { city: "Vancouver", country: "Canada", state: "British Columbia" },
        { city: "Sitka", country: "USA", state: "Alaska" },
        { city: "Kodiak", country: "USA", state: "Alaska" },
        { city: "Dutch Harbor", country: "USA", state: "Alaska" },
        { city: "Petropavlovsk", country: "Russia", region: "Kamchatka" },
        { city: "Sapporo", country: "Japan", region: "Hokkaido" },
        { city: "Tokyo", country: "Japan", region: "Kanto" },
      ],
      description:
        "25-day transpacific voyage from Vancouver to Tokyo via Alaska and Russia.",
      distance: "4,600 nautical miles",
      totalDuration: "25 days",
      timeAtSea: [
        {
          start: "2026-09-01T16:00:00-07:00",
          end: "2026-09-03T08:00:00-08:00",
          description:
            "Sailing from Vancouver through the Inside Passage to Alaska.",
        },
        {
          start: "2026-09-05T17:00:00-08:00",
          end: "2026-09-06T10:00:00-08:00",
          description: "Cruising from Sitka to Kodiak Island.",
        },
        {
          start: "2026-09-08T16:00:00-08:00",
          end: "2026-09-09T09:00:00-08:00",
          description: "Sailing along the Aleutian Islands to Dutch Harbor.",
        },
        {
          start: "2026-09-11T18:00:00-08:00",
          end: "2026-09-14T10:00:00+12:00",
          description: "North Pacific crossing to Kamchatka, Russia.",
        },
        {
          start: "2026-09-17T16:00:00+12:00",
          end: "2026-09-20T09:00:00+09:00",
          description: "Sea of Okhotsk crossing to Hokkaido, Japan.",
        },
        {
          start: "2026-09-22T17:00:00+09:00",
          end: "2026-09-23T08:00:00+09:00",
          description: "Final coastal sailing to Tokyo.",
        },
      ],
      timeOnLand: [
        {
          start: "2026-09-03T08:00:00-08:00",
          end: "2026-09-05T17:00:00-08:00",
          description:
            "Explore Sitka's Russian heritage and Tongass National Forest.",
        },
        {
          start: "2026-09-06T10:00:00-08:00",
          end: "2026-09-08T16:00:00-08:00",
          description:
            "Discover Kodiak Island's wildlife and cultural history.",
        },
        {
          start: "2026-09-09T09:00:00-08:00",
          end: "2026-09-11T18:00:00-08:00",
          description:
            "Experience Dutch Harbor's WWII sites and Aleut culture.",
        },
        {
          start: "2026-09-14T10:00:00+12:00",
          end: "2026-09-17T16:00:00+12:00",
          description:
            "Visit Petropavlovsk's volcanoes and Russian Far East culture.",
        },
        {
          start: "2026-09-20T09:00:00+09:00",
          end: "2026-09-22T17:00:00+09:00",
          description:
            "Explore Sapporo's culinary scene and natural hot springs.",
        },
        {
          start: "2026-09-23T08:00:00+09:00",
          end: "2026-09-26T10:00:00+09:00",
          description:
            "Arrive in Tokyo for an extended stay exploring Japan's capital.",
        },
      ],
    },
    requiredDocuments: [
      "Valid Passport",
      "Japan Tourist Visa (if required)",
      "Russian Visa",
      "eTA for Canada (if applicable)",
    ],
    cancellationPolicy:
      "Full refund if canceled 180 days prior to departure; 50% refund if canceled 90 days prior",
    tourCategoryId: "transoceanic-cruise",
    contactPersonnel: [
      {
        name: "Akira Tanaka",
        role: "Transpacific Cruise Director",
        description: "Senior Cruise Director",
        bio: "Expert in Asian-North American cruise routes with 25 years of experience and multilingual abilities.",
        languages: ["English", "Japanese", "Russian", "Mandarin"],
        experienceYears: 25,
        profileImage:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
        contact: {
          contactEmail: "a.tanaka@transpacificcruises.com",
          contactNumber: "+1 604-555-1122",
        },
      },
    ],
    title: "North Pacific Explorer: Vancouver to Tokyo",
    description:
      "A once-in-a-lifetime 25-day transpacific journey from Vancouver to Tokyo, traversing the wilds of Alaska, Russia's Far East, and northern Japan.",
    tags: [
      "luxury",
      "transpacific",
      "expedition",
      "wildlife",
      "cultural",
      "Asia",
    ],
    rating: 4.9,
    isFamilyFriendly: false,
    basePrice: 16500, // USD
  },

  {
    departureLocation: {
      city: "Vancouver",
      country: "Canada",
      state: "British Columbia",
      region: "Pacific Northwest",
      coordinates: { latitude: 49.2827, longitude: -123.1207 },
      address: "Canada Place Cruise Terminal, 999 Canada Place, Vancouver, BC",
      timezone: "America/Vancouver",
      additionalInfo:
        "Premium terminal with dedicated check-in for Alaska cruises",
    },
    arrivalLocation: {
      city: "Anchorage",
      country: "USA",
      state: "Alaska",
      coordinates: { latitude: 61.2181, longitude: -149.9003 },
      timezone: "America/Anchorage",
    },
    category: "premium",
    itinerary: {
      route: [
        { city: "Vancouver", country: "Canada", state: "British Columbia" },
        { city: "Ketchikan", country: "USA", state: "Alaska" },
        { city: "Tracy Arm Fjord", country: "USA", state: "Alaska" },
        { city: "Juneau", country: "USA", state: "Alaska" },
        { city: "Haines", country: "USA", state: "Alaska" },
        { city: "Glacier Bay", country: "USA", state: "Alaska" },
        { city: "Hubbard Glacier", country: "USA", state: "Alaska" },
        { city: "Anchorage", country: "USA", state: "Alaska" },
      ],
      description:
        "9-day comprehensive Alaska cruise from Vancouver to Anchorage focusing on glaciers and wildlife.",
      distance: "1,500 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
        {
          start: "2026-07-01T17:00:00-07:00",
          end: "2026-07-02T08:00:00-08:00",
          description: "Sailing from Vancouver through the Inside Passage.",
        },
        {
          start: "2026-07-03T18:00:00-08:00",
          end: "2026-07-04T05:00:00-08:00",
          description: "Overnight cruising to Tracy Arm Fjord.",
        },
        {
          start: "2026-07-04T14:00:00-08:00",
          end: "2026-07-04T17:00:00-08:00",
          description: "Short sailing from Tracy Arm to Juneau.",
        },
        {
          start: "2026-07-05T19:00:00-08:00",
          end: "2026-07-06T07:00:00-08:00",
          description: "Evening cruise to Haines.",
        },
        {
          start: "2026-07-07T16:00:00-08:00",
          end: "2026-07-08T06:00:00-08:00",
          description: "Sailing to Glacier Bay National Park.",
        },
        {
          start: "2026-07-08T17:00:00-08:00",
          end: "2026-07-09T05:00:00-08:00",
          description: "Cruising to Hubbard Glacier.",
        },
        {
          start: "2026-07-09T17:00:00-08:00",
          end: "2026-07-10T08:00:00-08:00",
          description: "Final sailing to Anchorage (Seward).",
        },
      ],
      timeOnLand: [
        {
          start: "2026-07-02T08:00:00-08:00",
          end: "2026-07-03T18:00:00-08:00",
          description: "Explore Ketchikan's totem poles and Creek Street.",
        },
        {
          start: "2026-07-04T05:00:00-08:00",
          end: "2026-07-04T14:00:00-08:00",
          description:
            "Scenic cruising in Tracy Arm Fjord with glacier viewing.",
        },
        {
          start: "2026-07-04T17:00:00-08:00",
          end: "2026-07-05T19:00:00-08:00",
          description: "Discover Juneau's Mendenhall Glacier and wildlife.",
        },
        {
          start: "2026-07-06T07:00:00-08:00",
          end: "2026-07-07T16:00:00-08:00",
          description:
            "Visit Haines' Chilkat Bald Eagle Preserve and cultural sites.",
        },
        {
          start: "2026-07-08T06:00:00-08:00",
          end: "2026-07-08T17:00:00-08:00",
          description:
            "Full day of glacier viewing in Glacier Bay with park rangers.",
        },
        {
          start: "2026-07-09T05:00:00-08:00",
          end: "2026-07-09T17:00:00-08:00",
          description: "Up-close viewing of massive Hubbard Glacier.",
        },
        {
          start: "2026-07-10T08:00:00-08:00",
          end: "2026-07-10T18:00:00-08:00",
          description:
            "Arrive in Seward with options to transfer to Anchorage.",
        },
      ],
    },
    requiredDocuments: ["Valid Passport", "eTA for Canada (if applicable)"],
    cancellationPolicy: "Full refund if canceled 60 days prior to departure",
    tourCategoryId: "premium-cruise",
    contactPersonnel: [
      {
        name: "Jessica Miller",
        role: "Alaska Glacier Specialist",
        description: "Premium Cruise Director",
        bio: "Geologist and Alaska specialist with extensive knowledge of glacial formations and wildlife.",
        languages: ["English"],
        experienceYears: 11,
        profileImage:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
        contact: {
          contactEmail: "j.miller@alaskacruises.com",
          contactNumber: "+1 604-555-3377",
        },
      },
    ],
    title: "Alaska Glacier Explorer",
    description:
      "Experience the best of Alaska's glaciers on this 9-day premium cruise featuring Tracy Arm Fjord, Glacier Bay, and Hubbard Glacier.",
    tags: ["premium", "Alaska", "glaciers", "wildlife", "scenic"],
    rating: 4.8,
    isFamilyFriendly: true,
    basePrice: 3299, // USD
  },

  {
    departureLocation: {
      city: "Vancouver",
      country: "Canada",
      state: "British Columbia",
      region: "Pacific Northwest",
      coordinates: { latitude: 49.2827, longitude: -123.1207 },
      address: "Canada Place Cruise Terminal, 999 Canada Place, Vancouver, BC",
      timezone: "America/Vancouver",
      additionalInfo:
        "Premium cruise terminal with expedited check-in for Hawaiian cruises",
    },
    arrivalLocation: {
      city: "Honolulu",
      country: "USA",
      state: "Hawaii",
      coordinates: { latitude: 21.3069, longitude: -157.8583 },
      timezone: "Pacific/Honolulu",
    },
    category: "premium",
    itinerary: {
      route: [
        { city: "Vancouver", country: "Canada", state: "British Columbia" },
        { city: "Victoria", country: "Canada", state: "British Columbia" },
        { city: "Kauai", country: "USA", state: "Hawaii" },
        { city: "Maui", country: "USA", state: "Hawaii" },
        { city: "Kona", country: "USA", state: "Hawaii" },
        { city: "Hilo", country: "USA", state: "Hawaii" },
        { city: "Honolulu", country: "USA", state: "Hawaii" },
      ],
      description:
        "12-day transpacific cruise from Vancouver to Hawaii with stops at four Hawaiian islands.",
      distance: "2,800 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
        {
          start: "2026-10-01T16:00:00-07:00",
          end: "2026-10-01T20:00:00-07:00",
          description: "Short evening sailing from Vancouver to Victoria.",
        },
        {
          start: "2026-10-02T17:00:00-07:00",
          end: "2026-10-07T08:00:00-10:00",
          description:
            "Transpacific crossing from Victoria to Kauai (5 days at sea).",
        },
        {
          start: "2026-10-08T18:00:00-10:00",
          end: "2026-10-09T07:00:00-10:00",
          description: "Overnight sailing from Kauai to Maui.",
        },
        {
          start: "2026-10-10T19:00:00-10:00",
          end: "2026-10-11T08:00:00-10:00",
          description: "Evening cruise from Maui to Kona, Big Island.",
        },
        {
          start: "2026-10-12T16:00:00-10:00",
          end: "2026-10-12T20:00:00-10:00",
          description: "Scenic coastal sailing around Big Island to Hilo.",
        },
        {
          start: "2026-10-13T18:00:00-10:00",
          end: "2026-10-14T08:00:00-10:00",
          description: "Final sailing to Honolulu, Oahu.",
        },
      ],
      timeOnLand: [
        {
          start: "2026-10-01T20:00:00-07:00",
          end: "2026-10-02T17:00:00-07:00",
          description:
            "Explore Victoria's Butchart Gardens and historic buildings.",
        },
        {
          start: "2026-10-07T08:00:00-10:00",
          end: "2026-10-08T18:00:00-10:00",
          description: "Discover Kauai's Waimea Canyon and Na Pali Coast.",
        },
        {
          start: "2026-10-09T07:00:00-10:00",
          end: "2026-10-10T19:00:00-10:00",
          description:
            "Experience Maui's Road to Hana and Haleakala National Park.",
        },
        {
          start: "2026-10-11T08:00:00-10:00",
          end: "2026-10-12T16:00:00-10:00",
          description: "Visit Kona's coffee plantations and historic sites.",
        },
        {
          start: "2026-10-12T20:00:00-10:00",
          end: "2026-10-13T18:00:00-10:00",
          description:
            "Explore Hilo's waterfalls and Hawaii Volcanoes National Park.",
        },
        {
          start: "2026-10-14T08:00:00-10:00",
          end: "2026-10-14T18:00:00-10:00",
          description:
            "Arrive in Honolulu with time to visit Pearl Harbor and Waikiki.",
        },
      ],
    },
    requiredDocuments: ["Valid Passport", "eTA for Canada (if applicable)"],
    cancellationPolicy: "Full refund if canceled 75 days prior to departure",
    tourCategoryId: "premium-cruise",
    contactPersonnel: [
      {
        name: "Kai Maluhia",
        role: "Hawaiian Culture Specialist",
        description: "Premium Cruise Director",
        bio: "Native Hawaiian expert with deep knowledge of island culture, history, and natural attractions.",
        languages: ["English", "Hawaiian"],
        experienceYears: 14,
        profileImage:
          "https://images.unsplash.com/photo-1542178243-bc20204b769f",
        contact: {
          contactEmail: "k.maluhia@hawaiicruises.com",
          contactNumber: "+1 808-555-6677",
        },
      },
    ],
    title: "Hawaiian Islands Discovery",
    description:
      "Sail from Vancouver to Hawaii on this 12-day premium cruise featuring five days of Pacific Ocean cruising followed by immersive visits to four distinct Hawaiian islands.",
    tags: ["premium", "Hawaii", "transpacific", "beaches", "volcanoes"],
    rating: 4.7,
    isFamilyFriendly: true,
    basePrice: 4299, // USD
  },

  {
    departureLocation: {
      city: "Vancouver",
      country: "Canada",
      state: "British Columbia",
      region: "Pacific Northwest",
      coordinates: { latitude: 49.2827, longitude: -123.1207 },
      address: "Canada Place Cruise Terminal, 999 Canada Place, Vancouver, BC",
      timezone: "America/Vancouver",
      additionalInfo:
        "Luxury terminal with dedicated lounge for canal transit cruises",
    },
    arrivalLocation: {
      city: "Miami",
      country: "USA",
      state: "Florida",
      coordinates: { latitude: 25.7617, longitude: -80.1918 },
      timezone: "America/New_York",
    },
    category: "luxury",
    itinerary: {
      route: [
        { city: "Vancouver", country: "Canada", state: "British Columbia" },
        { city: "San Francisco", country: "USA", state: "California" },
        { city: "Los Angeles", country: "USA", state: "California" },
        { city: "Cabo San Lucas", country: "Mexico" },
        { city: "Puerto Vallarta", country: "Mexico" },
        { city: "Huatulco", country: "Mexico" },
        { city: "Puerto Chiapas", country: "Mexico" },
        { city: "Puerto Quetzal", country: "Guatemala" },
        { city: "Panama Canal", country: "Panama" },
        { city: "Cartagena", country: "Colombia" },
        { city: "Miami", country: "USA", state: "Florida" },
      ],
      description:
        "18-day luxury cruise from Vancouver to Miami featuring a Panama Canal transit.",
      distance: "5,200 nautical miles",
      totalDuration: "18 days",
      timeAtSea: [
        {
          start: "2026-11-01T16:00:00-07:00",
          end: "2026-11-03T08:00:00-08:00",
          description:
            "Sailing south along the Pacific Coast to San Francisco.",
        },
        {
          start: "2026-11-04T17:00:00-08:00",
          end: "2026-11-05T09:00:00-08:00",
          description: "Coastal cruising to Los Angeles.",
        },
        {
          start: "2026-11-06T18:00:00-08:00",
          end: "2026-11-08T07:00:00-07:00",
          description: "Mexican Riviera sailing to Cabo San Lucas.",
        },
        {
          start: "2026-11-09T16:00:00-07:00",
          end: "2026-11-10T08:00:00-06:00",
          description: "Sailing to Puerto Vallarta.",
        },
        {
          start: "2026-11-11T17:00:00-06:00",
          end: "2026-11-12T10:00:00-06:00",
          description: "Cruising south to Huatulco.",
        },
        {
          start: "2026-11-13T16:00:00-06:00",
          end: "2026-11-14T07:00:00-06:00",
          description: "Short sailing to Puerto Chiapas.",
        },
        {
          start: "2026-11-15T16:00:00-06:00",
          end: "2026-11-16T08:00:00-06:00",
          description: "Crossing to Puerto Quetzal, Guatemala.",
        },
        {
          start: "2026-11-17T17:00:00-06:00",
          end: "2026-11-19T05:00:00-05:00",
          description: "Sailing to the Panama Canal.",
        },
        {
          start: "2026-11-19T17:00:00-05:00",
          end: "2026-11-20T09:00:00-05:00",
          description: "Caribbean sailing to Cartagena.",
        },
        {
          start: "2026-11-21T18:00:00-05:00",
          end: "2026-11-23T08:00:00-05:00",
          description: "Final Caribbean crossing to Miami.",
        },
      ],
      timeOnLand: [
        {
          start: "2026-11-03T08:00:00-08:00",
          end: "2026-11-04T17:00:00-08:00",
          description: "Explore San Francisco's iconic landmarks and Bay Area.",
        },
        {
          start: "2026-11-05T09:00:00-08:00",
          end: "2026-11-06T18:00:00-08:00",
          description: "Visit Los Angeles' famous attractions and beaches.",
        },
        {
          start: "2026-11-08T07:00:00-07:00",
          end: "2026-11-09T16:00:00-07:00",
          description: "Discover Cabo's dramatic Land's End and beaches.",
        },
        {
          start: "2026-11-10T08:00:00-06:00",
          end: "2026-11-11T17:00:00-06:00",
          description:
            "Experience Puerto Vallarta's charming Old Town and coastal beauty.",
        },
        {
          start: "2026-11-12T10:00:00-06:00",
          end: "2026-11-13T16:00:00-06:00",
          description:
            "Enjoy Huatulco's pristine bays and ecological reserves.",
        },
        {
          start: "2026-11-14T07:00:00-06:00",
          end: "2026-11-15T16:00:00-06:00",
          description:
            "Visit Puerto Chiapas' coffee plantations and Mayan ruins.",
        },
        {
          start: "2026-11-16T08:00:00-06:00",
          end: "2026-11-17T17:00:00-06:00",
          description:
            "Explore Guatemala's colonial architecture and volcanoes.",
        },
        {
          start: "2026-11-19T05:00:00-05:00",
          end: "2026-11-19T17:00:00-05:00",
          description: "Full-day Panama Canal transit with expert commentary.",
        },
        {
          start: "2026-11-20T09:00:00-05:00",
          end: "2026-11-21T18:00:00-05:00",
          description: "Discover Cartagena's UNESCO-listed walled city.",
        },
        {
          start: "2026-11-23T08:00:00-05:00",
          end: "2026-11-23T18:00:00-05:00",
          description:
            "Arrive in Miami's vibrant port with optional city tour.",
        },
      ],
    },
    requiredDocuments: [
      "Valid Passport",
      "eTA for Canada (if applicable)",
      "Tourist Cards for Mexico, Guatemala, Panama, Colombia (if required)",
    ],
    cancellationPolicy: "Full refund if canceled 120 days prior to departure",
    tourCategoryId: "luxury-cruise",
    contactPersonnel: [
      {
        name: "Carlos Mendoza",
        role: "Panama Canal Specialist",
        description: "Senior Cruise Director",
        bio: "Latin American expert with specialized knowledge of the Panama Canal's history and operations.",
        languages: ["English", "Spanish", "Portuguese"],
        experienceYears: 17,
        profileImage:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
        contact: {
          contactEmail: "c.mendoza@canalcruises.com",
          contactNumber: "+1 604-555-8787",
        },
      },
    ],
    title: "Panama Canal & Two Oceans Voyage",
    description:
      "Journey from Vancouver to Miami on this 18-day luxury cruise featuring the Pacific Coast, Mexican Riviera, a full Panama Canal transit, and the Caribbean Sea.",
    tags: ["luxury", "Panama Canal", "two oceans", "Latin America", "transit"],
    rating: 4.8,
    isFamilyFriendly: false,
    basePrice: 8599, // USD
  },

  {
    departureLocation: {
      city: "Vancouver",
      country: "Canada",
      state: "British Columbia",
      region: "Pacific Northwest",
      coordinates: { latitude: 49.2827, longitude: -123.1207 },
      address: "Canada Place Cruise Terminal, 999 Canada Place, Vancouver, BC",
      timezone: "America/Vancouver",
      additionalInfo: "Ultra-luxury terminal section for world voyages",
    },
    arrivalLocation: {
      city: "Sydney",
      country: "Australia",
      region: "New South Wales",
      coordinates: { latitude: -33.8688, longitude: 151.2093 },
      timezone: "Australia/Sydney",
    },
    category: "luxury",
    itinerary: {
      route: [
        { city: "Vancouver", country: "Canada", state: "British Columbia" },
        { city: "Honolulu", country: "USA", state: "Hawaii" },
        { city: "Bora Bora", country: "French Polynesia" },
        { city: "Papeete", country: "French Polynesia" },
        { city: "Rarotonga", country: "Cook Islands" },
        { city: "Auckland", country: "New Zealand" },
        { city: "Bay of Islands", country: "New Zealand" },
        { city: "Sydney", country: "Australia" },
      ],
      description:
        "21-day transpacific luxury voyage from Vancouver to Sydney via the South Pacific.",
      distance: "7,500 nautical miles",
      totalDuration: "21 days",
      timeAtSea: [
        {
          start: "2026-12-01T16:00:00-08:00",
          end: "2026-12-06T08:00:00-10:00",
          description: "Five-day Pacific crossing from Vancouver to Hawaii.",
        },
        {
          start: "2026-12-08T18:00:00-10:00",
          end: "2026-12-13T09:00:00-10:00",
          description: "Deep Pacific sailing to French Polynesia.",
        },
        {
          start: "2026-12-14T17:00:00-10:00",
          end: "2026-12-15T08:00:00-10:00",
          description: "Short cruise from Bora Bora to Tahiti.",
        },
        {
          start: "2026-12-16T19:00:00-10:00",
          end: "2026-12-17T10:00:00-10:00",
          description: "Sailing to Rarotonga in the Cook Islands.",
        },
        {
          start: "2026-12-18T16:00:00-10:00",
          end: "2026-12-20T09:00:00+13:00",
          description: "South Pacific crossing to Auckland, New Zealand.",
        },
        {
          start: "2026-12-21T18:00:00+13:00",
          end: "2026-12-22T08:00:00+13:00",
          description: "Coastal sail to Bay of Islands.",
        },
        {
          start: "2026-12-23T16:00:00+13:00",
          end: "2026-12-26T08:00:00+11:00",
          description: "Tasman Sea crossing to Sydney.",
        },
      ],
      timeOnLand: [
        {
          start: "2026-12-06T08:00:00-10:00",
          end: "2026-12-08T18:00:00-10:00",
          description:
            "Experience Honolulu's beaches, Pearl Harbor, and Hawaiian culture.",
        },
        {
          start: "2026-12-13T09:00:00-10:00",
          end: "2026-12-14T17:00:00-10:00",
          description:
            "Discover Bora Bora's iconic lagoon and overwater bungalows.",
        },
        {
          start: "2026-12-15T08:00:00-10:00",
          end: "2026-12-16T19:00:00-10:00",
          description:
            "Explore Tahiti's black sand beaches and tropical landscapes.",
        },
        {
          start: "2026-12-17T10:00:00-10:00",
          end: "2026-12-18T16:00:00-10:00",
          description:
            "Visit Rarotonga's pristine lagoons and Polynesian culture.",
        },
        {
          start: "2026-12-20T09:00:00+13:00",
          end: "2026-12-21T18:00:00+13:00",
          description: "Tour Auckland's harbor city and nearby wineries.",
        },
        {
          start: "2026-12-22T08:00:00+13:00",
          end: "2026-12-23T16:00:00+13:00",
          description:
            "Explore Bay of Islands' maritime history and Maori culture.",
        },
        {
          start: "2026-12-26T08:00:00+11:00",
          end: "2026-12-26T18:00:00+11:00",
          description:
            "Arrive in Sydney Harbor with views of the Opera House and Bridge.",
        },
      ],
    },
    requiredDocuments: [
      "Valid Passport",
      "Australian Visa/ETA",
      "New Zealand ETA",
      "eTA for Canada (if applicable)",
    ],
    cancellationPolicy:
      "Full refund if canceled 180 days prior to departure; 50% refund if canceled 90 days prior",
    tourCategoryId: "ultra-luxury-cruise",
    contactPersonnel: [
      {
        name: "Elizabeth Bennett",
        role: "South Pacific Luxury Director",
        description: "Senior World Cruise Director",
        bio: "South Pacific specialist with 22 years leading luxury cruises throughout Polynesia and Oceania.",
        languages: ["English", "French", "Tahitian", "Maori"],
        experienceYears: 22,
        profileImage:
          "https://images.unsplash.com/photo-1587186416036-0a4462a6e548",
        contact: {
          contactEmail: "e.bennett@southpacificcruises.com",
          contactNumber: "+1 604-555-1010",
        },
      },
    ],
    title: "South Pacific Grand Voyage",
    description:
      "An unforgettable 21-day journey from Vancouver to Sydney through the paradise islands of the South Pacific, with extended stays in Hawaii, French Polynesia, and New Zealand.",
    tags: ["luxury", "transpacific", "islands", "South Pacific", "exotic"],
    rating: 4.9,
    isFamilyFriendly: false,
    basePrice: 12800, // USD
  },
];
