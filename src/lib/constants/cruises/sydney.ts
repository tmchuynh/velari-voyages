import { Cruise } from "@/lib/interfaces/services/cruises";

export const sydneyCruises: Cruise[] = [
  {
    departureLocation: {
      city: "Sydney",
      country: "Australia",
      region: "New South Wales",
      coordinates: { latitude: -33.8688, longitude: 151.2093 },
      address: "Overseas Passenger Terminal, Circular Quay, Sydney",
      timezone: "Australia/Sydney",
      additionalInfo: "Iconic cruise terminal with Sydney Opera House views",
    },
    arrivalLocation: {
      city: "Brisbane",
      country: "Australia",
      region: "Queensland",
      coordinates: { latitude: -27.4698, longitude: 153.0251 },
      timezone: "Australia/Brisbane",
    },
    category: "mainstream",
    itinerary: {
      route: [
        { city: "Sydney", country: "Australia" },
        { city: "Newcastle", country: "Australia" },
        { city: "Brisbane", country: "Australia" },
      ],
      description:
        "4-night mainstream cruise along Australia's east coast from Sydney to Brisbane.",
      distance: "460 nautical miles",
      totalDuration: "4 days",
      timeAtSea: [
        {
          start: "2025-09-10T17:00:00+10:00",
          end: "2025-09-11T07:00:00+10:00",
          description: "Evening sail from Sydney Harbour to Newcastle.",
        },
        {
          start: "2025-09-12T16:00:00+10:00",
          end: "2025-09-13T08:00:00+10:00",
          description: "Overnight sailing from Newcastle to Brisbane.",
        },
      ],
      timeOnLand: [
        {
          start: "2025-09-11T07:00:00+10:00",
          end: "2025-09-12T16:00:00+10:00",
          description:
            "Explore Newcastle's beaches and historical coal industry sites.",
        },
        {
          start: "2025-09-13T08:00:00+10:00",
          end: "2025-09-14T12:00:00+10:00",
          description:
            "Discover Brisbane's South Bank and cultural attractions.",
        },
      ],
    },
    requiredDocuments: ["Valid Passport"],
    cancellationPolicy: "Full refund if canceled 30 days prior to departure",
    tourCategoryId: "weekend-cruise",
    contactPersonnel: [
      {
        name: "Emma Wilson",
        role: "Australian Coast Cruise Manager",
        bio: "Expert in Australian coastal cruises with specialization in local wildlife and culture.",
        languages: ["English"],
        experienceYears: 8,
        profileImage:
          "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91",
        contact: {
          contactEmail: "ewilson@sydneycruises.com.au",
          contactNumber: "+61 2-5555-1234",
        },
      },
    ],
    title: "East Coast Australia Explorer",
    description:
      "Discover Australia's stunning east coast from Sydney to Brisbane on this 4-night cruise with beach and city experiences.",
    tags: ["mainstream", "Australia", "beaches", "cities", "weekend"],
    rating: 4.5,
    isFamilyFriendly: true,
    basePrice: 699,
  },
  {
    departureLocation: {
      city: "Sydney",
      country: "Australia",
      region: "New South Wales",
      coordinates: { latitude: -33.8688, longitude: 151.2093 },
      timezone: "Australia/Sydney",
    },
    arrivalLocation: {
      city: "Auckland",
      country: "New Zealand",
      coordinates: { latitude: -36.8485, longitude: 174.7633 },
      timezone: "Pacific/Auckland",
    },
    category: "premium",
    itinerary: {
      route: [
        { city: "Sydney", country: "Australia" },
        { city: "Melbourne", country: "Australia" },
        { city: "Hobart", country: "Australia" },
        { city: "Fiordland", country: "New Zealand" },
        { city: "Auckland", country: "New Zealand" },
      ],
      description:
        "12-night premium cruise from Sydney to Auckland via southern Australia and New Zealand's fiords.",
      distance: "1,800 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
        {
          start: "2026-01-15T16:00:00+11:00",
          end: "2026-01-16T09:00:00+11:00",
          description: "Cruising from Sydney to Melbourne.",
        },
        {
          start: "2026-01-18T17:00:00+11:00",
          end: "2026-01-19T08:00:00+11:00",
          description: "Sailing from Melbourne to Hobart.",
        },
        {
          start: "2026-01-21T16:00:00+11:00",
          end: "2026-01-23T08:00:00+13:00",
          description: "Crossing the Tasman Sea to New Zealand.",
        },
        {
          start: "2026-01-24T19:00:00+13:00",
          end: "2026-01-27T08:00:00+13:00",
          description: "Cruising from Fiordland to Auckland.",
        },
      ],
      timeOnLand: [
        {
          start: "2026-01-16T09:00:00+11:00",
          end: "2026-01-18T17:00:00+11:00",
          description: "Explore Melbourne's culture and food scene.",
        },
        {
          start: "2026-01-19T08:00:00+11:00",
          end: "2026-01-21T16:00:00+11:00",
          description: "Discover Hobart and Tasmania's natural beauty.",
        },
        {
          start: "2026-01-23T08:00:00+13:00",
          end: "2026-01-24T19:00:00+13:00",
          description: "Scenic cruising through Fiordland National Park.",
        },
      ],
    },
    requiredDocuments: ["Valid Passport"],
    cancellationPolicy: "70% refund if canceled 60 days prior to departure",
    tourCategoryId: "luxury-cruise",
    contactPersonnel: [
      {
        name: "James Cook",
        role: "Trans-Tasman Cruise Director",
        bio: "Specialized in Australia-New Zealand routes with extensive knowledge of the Tasman Sea region.",
        languages: ["English"],
        experienceYears: 14,
        profileImage:
          "https://images.unsplash.com/photo-1568602471122-7832951cc4c5",
        contact: {
          contactEmail: "jcook@sydneycruises.com.au",
          contactNumber: "+61 2-5555-7890",
        },
      },
    ],
    title: "Trans-Tasman Discovery Cruise",
    description:
      "Journey from Australia to New Zealand on this 12-night premium cruise featuring diverse landscapes and city experiences.",
    tags: ["premium", "Australia", "New Zealand", "Tasman Sea", "fiords"],
    rating: 4.8,
    isFamilyFriendly: true,
    isLuxuryCruise: true,
    basePrice: 2799,
  },
];
