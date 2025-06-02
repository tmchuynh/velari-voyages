import { Cruise } from "@/lib/interfaces/services/cruises";

export const fortLauderdaleCruises: Cruise[] = [
  {
    departureLocation: {
      city: "Fort Lauderdale",
      state: "FL",
      country: "USA",
      timezone: "America/New_York",
      coordinates: { latitude: 26.1224, longitude: -80.1373 },
    },
    arrivalLocation: {
      city: "Nassau",
      country: "Bahamas",
      timezone: "America/Nassau",
      coordinates: { latitude: 25.0343, longitude: -77.3963 },
    },
    category: "mainstream",
    itinerary: {
      route: [
        { city: "Fort Lauderdale", state: "FL", country: "USA" },
        { city: "Freeport", country: "Bahamas" },
        { city: "Nassau", country: "Bahamas" },
        { city: "Fort Lauderdale", state: "FL", country: "USA" },
      ],
      description:
        "A 4-day cruise visiting Freeport and Nassau with leisure at sea.",
      distance: "350 nautical miles",
      totalDuration: "4 days",
      timeAtSea: [
        {
          start: "2025-11-01T18:00:00-05:00",
          end: "2025-11-02T08:00:00-05:00",
          description: "Sailing to Freeport",
        },
        {
          start: "2025-11-03T18:00:00-05:00",
          end: "2025-11-04T08:00:00-05:00",
          description: "Return sail to Fort Lauderdale",
        },
      ],
      timeOnLand: [
        {
          start: "2025-11-02T08:00:00-05:00",
          end: "2025-11-03T18:00:00-05:00",
          description: "Exploring Freeport and Nassau ports",
        },
        {
          start: "2025-11-04T08:00:00-05:00",
          end: "2025-11-04T18:00:00-05:00",
          description: "Disembark in Fort Lauderdale",
        },
      ],
    },
    requiredDocuments: ["Valid Passport", "COVID-19 Vaccination Card"],
    cancellationPolicy: "Full refund if canceled 30 days before departure.",
    tourCategoryId: "tropical-cruise",
    contactPersonnel: [
      {
        name: "Jessica Stone",
        role: "Lead Cruise Coordinator",
        description: "Lead Cruise Coordinator",
        languages: ["English", "Spanish"],
        profileImage:
          "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91",
        contact: {
          contactNumber: "+1-954-555-1234",
          contactEmail: "jessica@cruises.com",
        },
      },
    ],
    isFamilyFriendly: true,
    isTropicalCruise: true,
    title: "Bahamas Explorer from Fort Lauderdale",
    description:
      "Experience a quick tropical getaway visiting Freeport and Nassau. Perfect for families and first-time cruisers.",
    tags: ["Bahamas", "Family", "Short Cruise", "Tropical"],
    basePrice: 299,
    rating: 4.2,
    faqs: [
      {
        question: "Are meals included?",
        answer: "All meals onboard are included with this cruise package.",
      },
      {
        question: "Is Wi-Fi available?",
        answer:
          "Wi-Fi is available in public areas and cabins for an additional fee.",
      },
    ],
    isWeekendCruise: false,
  },
  {
    departureLocation: {
      city: "Fort Lauderdale",
      state: "FL",
      country: "USA",
      timezone: "America/New_York",
      coordinates: { latitude: 26.1224, longitude: -80.1373 },
    },
    arrivalLocation: {
      city: "Key West",
      state: "FL",
      country: "USA",
      timezone: "America/New_York",
      coordinates: { latitude: 24.5551, longitude: -81.78 },
    },
    category: "premium",
    itinerary: {
      route: [
        { city: "Fort Lauderdale", state: "FL", country: "USA" },
        { city: "Key West", state: "FL", country: "USA" },
        { city: "Miami", state: "FL", country: "USA" },
        { city: "Fort Lauderdale", state: "FL", country: "USA" },
      ],
      description:
        "A scenic 5-day cruise along Florida's coast including Key West and Miami.",
      distance: "400 nautical miles",
      totalDuration: "5 days",
      timeAtSea: [
        {
          start: "2025-12-01T17:00:00-05:00",
          end: "2025-12-02T09:00:00-05:00",
          description: "Sailing to Key West",
        },
        {
          start: "2025-12-03T20:00:00-05:00",
          end: "2025-12-04T10:00:00-05:00",
          description: "Sailing to Miami",
        },
        {
          start: "2025-12-05T18:00:00-05:00",
          end: "2025-12-06T09:00:00-05:00",
          description: "Return sail to Fort Lauderdale",
        },
      ],
      timeOnLand: [
        {
          start: "2025-12-02T09:00:00-05:00",
          end: "2025-12-03T20:00:00-05:00",
          description: "Visit and explore Key West",
        },
        {
          start: "2025-12-04T10:00:00-05:00",
          end: "2025-12-05T18:00:00-05:00",
          description: "Stopover in Miami",
        },
        {
          start: "2025-12-06T09:00:00-05:00",
          end: "2025-12-06T18:00:00-05:00",
          description: "Disembark in Fort Lauderdale",
        },
      ],
    },
    requiredDocuments: ["Valid Passport or US ID"],
    cancellationPolicy: "50% refund if canceled within 15 days of departure.",
    tourCategoryId: "weekend-cruise",
    contactPersonnel: [
      {
        name: "Mark Reynolds",
        role: "Cruise Manager",
        description: "Cruise Manager",
        languages: ["English"],
        experienceYears: 8,
        profileImage:
          "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
        contact: {
          contactNumber: "+1-954-555-5678",
          contactEmail: "mark@cruises.com",
        },
      },
    ],
    isFamilyFriendly: false,
    isCulturalExperience: true,
    title: "Florida Coastal Premium Cruise",
    description:
      "Explore iconic Florida coastal cities with a premium cruise experience featuring cultural highlights.",
    tags: ["Florida", "Key West", "Miami", "Premium"],
    basePrice: 499,
    rating: 4.7,
    faqs: [
      {
        question: "Is shore excursion included?",
        answer: "Shore excursions are optional and at additional cost.",
      },
    ],
    isWeekendCruise: false,
  },
  {
    departureLocation: {
      city: "Fort Lauderdale",
      state: "FL",
      country: "USA",
      timezone: "America/New_York",
      coordinates: { latitude: 26.1224, longitude: -80.1373 },
    },
    arrivalLocation: {
      city: "Cozumel",
      country: "Mexico",
      timezone: "America/Cancun",
      coordinates: { latitude: 20.5104, longitude: -86.9456 },
    },
    category: "entry-luxury",
    itinerary: {
      route: [
        { city: "Fort Lauderdale", state: "FL", country: "USA" },
        { city: "Cozumel", country: "Mexico" },
        { city: "Grand Cayman", country: "Cayman Islands" },
        { city: "Fort Lauderdale", state: "FL", country: "USA" },
      ],
      description:
        "A luxurious 7-day Caribbean cruise with stops at Cozumel and Grand Cayman.",
      distance: "850 nautical miles",
      totalDuration: "7 days",
      timeAtSea: [
        {
          start: "2025-01-05T16:00:00-05:00",
          end: "2025-01-07T08:00:00-05:00",
          description: "Sailing to Cozumel",
        },
        {
          start: "2025-01-09T18:00:00-05:00",
          end: "2025-01-10T10:00:00-05:00",
          description: "Sailing to Grand Cayman",
        },
        {
          start: "2025-01-12T20:00:00-05:00",
          end: "2025-01-13T12:00:00-05:00",
          description: "Return sail to Fort Lauderdale",
        },
      ],
      timeOnLand: [
        {
          start: "2025-01-07T08:00:00-05:00",
          end: "2025-01-09T18:00:00-05:00",
          description: "Exploring Cozumel",
        },
        {
          start: "2025-01-10T10:00:00-05:00",
          end: "2025-01-12T20:00:00-05:00",
          description: "Visit Grand Cayman",
        },
        {
          start: "2025-01-13T12:00:00-05:00",
          end: "2025-01-13T18:00:00-05:00",
          description: "Disembark in Fort Lauderdale",
        },
      ],
    },
    requiredDocuments: ["Valid Passport", "Visa if required"],
    cancellationPolicy:
      "No refund if canceled less than 14 days before departure.",
    tourCategoryId: "luxury-cruise",
    contactPersonnel: [
      {
        name: "Sophia Martinez",
        role: "Luxury Cruise Specialist",
        description: "Luxury Cruise Specialist",
        languages: ["English", "French", "Spanish"],
        experienceYears: 10,
        profileImage:
          "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91",
        contact: {
          contactNumber: "+1-954-555-7890",
          contactEmail: "sophia@luxcruises.com",
        },
      },
    ],
    isLuxuryCruise: true,
    title: "Caribbean Luxury from Fort Lauderdale",
    description:
      "Indulge in a premium Caribbean journey visiting Cozumel and Grand Cayman with upscale amenities.",
    tags: ["Caribbean", "Luxury", "Cozumel", "Grand Cayman"],
    basePrice: 899,
    rating: 4.9,
    faqs: [
      {
        question: "Are spa services available?",
        answer:
          "Yes, the onboard spa offers a full range of services included in the package.",
      },
    ],
    isWeekendCruise: false,
  },
  {
    departureLocation: {
      city: "Fort Lauderdale",
      state: "FL",
      country: "USA",
      timezone: "America/New_York",
      coordinates: { latitude: 26.1224, longitude: -80.1373 },
    },
    arrivalLocation: {
      city: "San Juan",
      country: "Puerto Rico",
      timezone: "America/Puerto_Rico",
      coordinates: { latitude: 18.4655, longitude: -66.1057 },
    },
    category: "luxury",
    itinerary: {
      route: [
        { city: "Fort Lauderdale", state: "FL", country: "USA" },
        { city: "San Juan", country: "Puerto Rico" },
        { city: "St. Thomas", country: "US Virgin Islands" },
        { city: "Fort Lauderdale", state: "FL", country: "USA" },
      ],
      description:
        "A deluxe 10-day luxury cruise to Puerto Rico and the US Virgin Islands.",
      distance: "1100 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
        {
          start: "2025-03-01T18:00:00-05:00",
          end: "2025-03-04T08:00:00-05:00",
          description: "Sailing to San Juan",
        },
        {
          start: "2025-03-06T20:00:00-05:00",
          end: "2025-03-08T10:00:00-05:00",
          description: "Sailing to St. Thomas",
        },
        {
          start: "2025-03-10T22:00:00-05:00",
          end: "2025-03-11T14:00:00-05:00",
          description: "Return sail to Fort Lauderdale",
        },
      ],
      timeOnLand: [
        {
          start: "2025-03-04T08:00:00-05:00",
          end: "2025-03-06T20:00:00-05:00",
          description: "Exploring San Juan",
        },
        {
          start: "2025-03-08T10:00:00-05:00",
          end: "2025-03-10T22:00:00-05:00",
          description: "Visit St. Thomas",
        },
        {
          start: "2025-03-11T14:00:00-05:00",
          end: "2025-03-11T18:00:00-05:00",
          description: "Disembark in Fort Lauderdale",
        },
      ],
    },
    requiredDocuments: ["Valid Passport"],
    cancellationPolicy: "Full refund if canceled 60 days before departure.",
    tourCategoryId: "luxury-cruise",
    contactPersonnel: [
      {
        name: "David Lee",
        role: "Luxury Cruise Director",
        description: "Luxury Cruise Director",
        languages: ["English", "Chinese"],
        experienceYears: 15,
        profileImage:
          "https://images.unsplash.com/photo-1531891437562-9f6f1a5a9ebd",
        contact: {
          contactNumber: "+1-954-555-3456",
          contactEmail: "david@luxcruises.com",
        },
      },
    ],
    isLuxuryCruise: true,
    isVIPCruise: true,
    title: "Ultimate Caribbean Luxury Cruise",
    description:
      "Experience the pinnacle of luxury cruising with exclusive stops at San Juan and St. Thomas.",
    tags: ["Luxury", "Caribbean", "VIP", "Puerto Rico", "US Virgin Islands"],
    basePrice: 1999,
    rating: 5.0,
    faqs: [
      {
        question: "Are private excursions available?",
        answer:
          "Yes, private and customizable excursions can be arranged on request.",
      },
    ],
    isWeekendCruise: false,
  },
];
