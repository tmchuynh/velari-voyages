import { Cruise } from "@/lib/interfaces/services/cruises";

export const losAngelesCruises: Cruise[] = [
  {
    departureLocation: {
      city: "Los Angeles",
      country: "United States",
      state: "California",
      region: "West Coast",
      coordinates: { latitude: 33.7405, longitude: -118.2775 },
      address: "World Cruise Center, 1000 S. Harbor Blvd, San Pedro, CA 90731",
      timezone: "America/Los_Angeles",
      additionalInfo:
        "Primary cruise terminal serving Los Angeles and Long Beach.",
    },
    arrivalLocation: {
      city: "Ensenada",
      country: "Mexico",
      region: "Baja California",
      coordinates: { latitude: 31.8659, longitude: -116.5962 },
      timezone: "America/Tijuana",
    },
    category: "mainstream",
    itinerary: {
      route: [
        { city: "Los Angeles", country: "United States" },
        { city: "Ensenada", country: "Mexico" },
        { city: "Los Angeles", country: "United States" },
      ],
      description:
        "3-night roundtrip cruise from Los Angeles to Ensenada, Mexico.",
      distance: "140 nautical miles",
      totalDuration: "3 days",
      timeAtSea: [
        {
          start: "2025-09-05T16:00:00-07:00",
          end: "2025-09-06T10:00:00-07:00",
          description: "Sailing from Los Angeles to Ensenada.",
        },
        {
          start: "2025-09-08T18:00:00-07:00",
          end: "2025-09-09T08:00:00-07:00",
          description: "Return sailing from Ensenada to Los Angeles.",
        },
      ],
      timeOnLand: [
        {
          start: "2025-09-06T10:00:00-07:00",
          end: "2025-09-08T18:00:00-07:00",
          description: "Exploring Ensenada's cultural and culinary highlights.",
        },
      ],
    },
    requiredDocuments: ["Passport"],
    cancellationPolicy:
      "Full refund if canceled 45 days prior, 25% refund if canceled 30-44 days prior, no refund within 29 days",
    tourCategoryId: "weekend-cruise",
    contactPersonnel: [
      {
        name: "Lisa Ramirez",
        role: "Guest Relations Manager",
        description: "Guest Relations Manager",
        bio: "Specializes in West Coast cruise experiences and guest satisfaction.",
        languages: ["English", "Spanish"],
        experienceYears: 8,
        profileImage:
          "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
        contact: {
          contactEmail: "lisa.ramirez@lacruises.com",
          contactNumber: "+1 310-555-1234",
        },
      },
    ],
    title: "3-Night Los Angeles to Ensenada Cruise",
    description:
      "Experience a quick getaway cruise from Los Angeles to the vibrant city of Ensenada with plenty of onshore activities.",
    tags: [
      "Los Angeles",
      "Ensenada",
      "Mexico",
      "short cruise",
      "family-friendly",
    ],
    basePrice: 299,
    rating: 4.3,
    isFamilyFriendly: true,
    isPetFriendly: false,
    isCulturalExperience: true,
    isLuxuryCruise: false,
    isWeekendCruise: true,
  },
  {
    departureLocation: {
      city: "Los Angeles",
      country: "United States",
      state: "California",
      region: "West Coast",
      coordinates: { latitude: 33.7405, longitude: -118.2775 },
      address: "World Cruise Center, 1000 S. Harbor Blvd, San Pedro, CA 90731",
      timezone: "America/Los_Angeles",
    },
    arrivalLocation: {
      city: "Cabo San Lucas",
      country: "Mexico",
      region: "Baja California Sur",
      coordinates: { latitude: 22.8905, longitude: -109.9167 },
      timezone: "America/Mazatlan",
    },
    category: "premium",
    itinerary: {
      route: [
        { city: "Los Angeles", country: "United States" },
        { city: "Cabo San Lucas", country: "Mexico" },
        { city: "Los Angeles", country: "United States" },
      ],
      description:
        "5-night roundtrip cruise from Los Angeles to Cabo San Lucas.",
      distance: "700 nautical miles",
      totalDuration: "5 days",
      timeAtSea: [
        {
          start: "2025-10-10T17:00:00-07:00",
          end: "2025-10-11T20:00:00-07:00",
          description: "Sailing from Los Angeles to Cabo San Lucas.",
        },
        {
          start: "2025-10-15T18:00:00-07:00",
          end: "2025-10-16T10:00:00-07:00",
          description: "Return sailing from Cabo San Lucas to Los Angeles.",
        },
      ],
      timeOnLand: [
        {
          start: "2025-10-12T08:00:00-07:00",
          end: "2025-10-15T18:00:00-07:00",
          description:
            "Explore Cabo San Lucas beaches, marine life, and nightlife.",
        },
      ],
    },
    requiredDocuments: ["Passport"],
    cancellationPolicy:
      "Full refund if canceled 60 days prior, 50% refund 30-59 days prior, no refund within 29 days",
    tourCategoryId: "theme-cruise",
    contactPersonnel: [
      {
        name: "James Foster",
        role: "Cruise Coordinator",
        description: "Cruise Coordinator",
        bio: "Expert in premium cruises along the West Coast with over 12 years of experience.",
        languages: ["English"],
        experienceYears: 12,
        profileImage:
          "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
        contact: {
          contactEmail: "james.foster@lacruises.com",
          contactNumber: "+1 310-555-5678",
        },
      },
    ],
    title: "5-Night Los Angeles to Cabo San Lucas Premium Cruise",
    description:
      "Indulge in a premium 5-night cruise from Los Angeles to the stunning Cabo San Lucas with exclusive amenities and excursions.",
    tags: ["Los Angeles", "Cabo San Lucas", "Mexico", "premium", "beach"],
    basePrice: 599,
    rating: 4.7,
    isFamilyFriendly: false,
    isPetFriendly: false,
    isCulturalExperience: true,
    isLuxuryCruise: true,
  },
  {
    departureLocation: {
      city: "Los Angeles",
      country: "United States",
      state: "California",
      region: "West Coast",
      coordinates: { latitude: 33.7405, longitude: -118.2775 },
      address: "World Cruise Center, 1000 S. Harbor Blvd, San Pedro, CA 90731",
      timezone: "America/Los_Angeles",
    },
    arrivalLocation: {
      city: "Puerto Vallarta",
      country: "Mexico",
      region: "Jalisco",
      coordinates: { latitude: 20.6534, longitude: -105.2253 },
      timezone: "America/Mexico_City",
    },
    category: "entry-luxury",
    itinerary: {
      route: [
        { city: "Los Angeles", country: "United States" },
        { city: "Puerto Vallarta", country: "Mexico" },
        { city: "Los Angeles", country: "United States" },
      ],
      description:
        "7-night entry-luxury cruise from Los Angeles to Puerto Vallarta.",
      distance: "1100 nautical miles",
      totalDuration: "7 days",
      timeAtSea: [
        {
          start: "2025-11-01T16:00:00-08:00",
          end: "2025-11-03T08:00:00-08:00",
          description: "Sailing south along the Pacific Coast.",
        },
        {
          start: "2025-11-07T20:00:00-08:00",
          end: "2025-11-08T10:00:00-08:00",
          description: "Return sailing from Puerto Vallarta.",
        },
      ],
      timeOnLand: [
        {
          start: "2025-11-03T08:00:00-08:00",
          end: "2025-11-07T20:00:00-08:00",
          description:
            "Exploring beaches, markets, and local culture in Puerto Vallarta.",
        },
      ],
    },
    requiredDocuments: ["Passport"],
    cancellationPolicy:
      "Full refund if canceled 60 days prior, 30% refund 30-59 days prior, no refund within 29 days",
    tourCategoryId: "theme-cruise",
    contactPersonnel: [
      {
        name: "Sarah Lin",
        role: "Luxury Cruise Specialist",
        description: "Luxury Cruise Specialist",
        bio: "Focused on delivering upscale cruise experiences for discerning travelers.",
        languages: ["English", "Mandarin"],
        experienceYears: 7,
        profileImage:
          "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
        contact: {
          contactEmail: "sarah.lin@lacruises.com",
          contactNumber: "+1 310-555-9101",
        },
      },
    ],
    title: "7-Night Los Angeles to Puerto Vallarta Entry-Luxury Cruise",
    description:
      "Relax on a 7-night entry-luxury cruise from Los Angeles to the beautiful Puerto Vallarta with curated excursions.",
    tags: [
      "Los Angeles",
      "Puerto Vallarta",
      "entry-luxury",
      "beach",
      "culture",
    ],
    basePrice: 799,
    rating: 4.6,
    isFamilyFriendly: false,
    isPetFriendly: false,
    isCulturalExperience: true,
    isLuxuryCruise: true,
  },
  {
    departureLocation: {
      city: "Los Angeles",
      country: "United States",
      state: "California",
      region: "West Coast",
      coordinates: { latitude: 33.7405, longitude: -118.2775 },
      address: "World Cruise Center, 1000 S. Harbor Blvd, San Pedro, CA 90731",
      timezone: "America/Los_Angeles",
    },
    arrivalLocation: {
      city: "Honolulu",
      country: "United States",
      state: "Hawaii",
      coordinates: { latitude: 21.3069, longitude: -157.8583 },
      timezone: "Pacific/Honolulu",
    },
    category: "luxury",
    itinerary: {
      route: [
        { city: "Los Angeles", country: "United States" },
        { city: "Honolulu", country: "United States" },
      ],
      description: "14-night luxury cruise from Los Angeles to Honolulu.",
      distance: "2200 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
        {
          start: "2025-12-01T18:00:00-08:00",
          end: "2025-12-14T08:00:00-10:00",
          description: "Crossing the Pacific Ocean to the Hawaiian Islands.",
        },
      ],
      timeOnLand: [],
    },
    requiredDocuments: ["Passport"],
    cancellationPolicy:
      "Full refund if canceled 90 days prior, 75% refund 60-89 days prior, no refund within 59 days",
    tourCategoryId: "luxury-cruise",
    contactPersonnel: [
      {
        name: "Emily Rogers",
        role: "Luxury Cruise Director",
        description: "Luxury Cruise Director",
        bio: "Oversees premium luxury cruise experiences to exotic destinations.",
        languages: ["English"],
        experienceYears: 15,
        profileImage:
          "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91",
        contact: {
          contactEmail: "emily.rogers@lacruises.com",
          contactNumber: "+1 310-555-3344",
        },
      },
    ],
    title: "14-Night Los Angeles to Honolulu Luxury Cruise",
    description:
      "Enjoy a luxurious 14-night cruise sailing from Los Angeles to the tropical paradise of Honolulu, Hawaii.",
    tags: ["Los Angeles", "Honolulu", "luxury", "Hawaii", "long cruise"],
    basePrice: 1999,
    rating: 4.9,
    isFamilyFriendly: false,
    isPetFriendly: false,
    isCulturalExperience: true,
    isLuxuryCruise: true,
  },
  {
    departureLocation: {
      city: "Los Angeles",
      country: "United States",
      state: "California",
      region: "West Coast",
      coordinates: { latitude: 33.7405, longitude: -118.2775 },
      address: "World Cruise Center, 1000 S. Harbor Blvd, San Pedro, CA 90731",
      timezone: "America/Los_Angeles",
    },
    arrivalLocation: {
      city: "Vancouver",
      country: "Canada",
      state: "British Columbia",
      coordinates: { latitude: 49.2827, longitude: -123.1207 },
      timezone: "America/Vancouver",
    },
    category: "expedition",
    itinerary: {
      route: [
        { city: "Los Angeles", country: "United States" },
        { city: "Astoria", country: "United States", state: "Oregon" },
        { city: "Vancouver", country: "Canada" },
      ],
      description:
        "10-night expedition cruise from Los Angeles to Vancouver with stops in Oregon.",
      distance: "1000 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
        {
          start: "2025-09-15T17:00:00-07:00",
          end: "2025-09-16T22:00:00-07:00",
          description: "Sailing north up the West Coast.",
        },
        {
          start: "2025-09-23T19:00:00-07:00",
          end: "2025-09-24T08:00:00-07:00",
          description: "Final leg from Astoria to Vancouver.",
        },
      ],
      timeOnLand: [
        {
          start: "2025-09-17T08:00:00-07:00",
          end: "2025-09-23T19:00:00-07:00",
          description: "Port visits in Astoria and scenic explorations.",
        },
      ],
    },
    requiredDocuments: ["Passport", "Visa (if applicable)"],
    cancellationPolicy:
      "Full refund if canceled 45 days prior, 40% refund 30-44 days prior, no refund within 29 days",
    tourCategoryId: "theme-cruise",
    contactPersonnel: [
      {
        name: "Mark Hansen",
        role: "Expedition Cruise Guide",
        description: "Expedition Cruise Guide",
        bio: "Expert on West Coast natural and cultural sites with 10+ years guiding experience.",
        languages: ["English"],
        experienceYears: 10,
        profileImage:
          "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91",
        contact: {
          contactEmail: "mark.hansen@lacruises.com",
          contactNumber: "+1 310-555-6789",
        },
      },
    ],
    title: "10-Night Los Angeles to Vancouver Expedition Cruise",
    description:
      "Explore the Pacific Northwest on this 10-night expedition cruise from Los Angeles to Vancouver with stops in Oregon.",
    tags: ["Los Angeles", "Vancouver", "expedition", "Oregon", "nature"],
    basePrice: 1299,
    rating: 4.5,
    isFamilyFriendly: true,
    isPetFriendly: false,
    isCulturalExperience: true,
    isLuxuryCruise: false,
  },
  {
    departureLocation: {
      city: "Los Angeles",
      country: "United States",
      state: "California",
      region: "West Coast",
      coordinates: { latitude: 33.7405, longitude: -118.2775 },
      address: "World Cruise Center, 1000 S. Harbor Blvd, San Pedro, CA 90731",
      timezone: "America/Los_Angeles",
    },
    arrivalLocation: {
      city: "San Francisco",
      country: "United States",
      state: "California",
      coordinates: { latitude: 37.7749, longitude: -122.4194 },
      timezone: "America/Los_Angeles",
    },
    category: "mainstream",
    itinerary: {
      route: [
        { city: "Los Angeles", country: "United States" },
        { city: "San Francisco", country: "United States" },
      ],
      description: "4-night coastal cruise from Los Angeles to San Francisco.",
      distance: "380 nautical miles",
      totalDuration: "4 days",
      timeAtSea: [
        {
          start: "2025-08-01T17:00:00-07:00",
          end: "2025-08-02T12:00:00-07:00",
          description: "Sailing along California coastline.",
        },
        {
          start: "2025-08-05T18:00:00-07:00",
          end: "2025-08-06T08:00:00-07:00",
          description: "Return sailing from San Francisco to Los Angeles.",
        },
      ],
      timeOnLand: [
        {
          start: "2025-08-02T12:00:00-07:00",
          end: "2025-08-05T18:00:00-07:00",
          description: "Exploring San Francisco and nearby attractions.",
        },
      ],
    },
    requiredDocuments: ["Government-issued ID"],
    cancellationPolicy:
      "Full refund if canceled 30 days prior, 20% refund 15-29 days prior, no refund within 14 days",
    tourCategoryId: "weekend-cruise",
    contactPersonnel: [
      {
        name: "Anna Kim",
        role: "Short Cruise Coordinator",
        description: "Short Cruise Coordinator",
        bio: "Focused on short coastal cruises with excellent customer service.",
        languages: ["English", "Korean"],
        experienceYears: 5,
        profileImage:
          "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
        contact: {
          contactEmail: "anna.kim@lacruises.com",
          contactNumber: "+1 310-555-4321",
        },
      },
    ],
    title: "4-Night Los Angeles to San Francisco Coastal Cruise",
    description:
      "Enjoy a scenic 4-night coastal cruise traveling between Los Angeles and San Francisco.",
    tags: ["Los Angeles", "San Francisco", "coastal cruise", "short trip"],
    basePrice: 399,
    rating: 4.2,
    isFamilyFriendly: true,
    isPetFriendly: false,
    isCulturalExperience: true,
    isLuxuryCruise: false,
  },
];
