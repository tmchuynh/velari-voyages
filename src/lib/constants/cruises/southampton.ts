import { Cruise } from "@/lib/interfaces/services/cruises";

export const southamptonCruises: Cruise[] = [
  {
    departureLocation: {
      city: "Southampton",
      country: "United Kingdom",
      region: "England",
      coordinates: { latitude: 50.9097, longitude: -1.4044 },
      address: "Southampton Cruise Terminal, Western Docks, Southampton",
      timezone: "Europe/London",
      additionalInfo: "Major cruise terminal with multiple berths",
    },
    arrivalLocation: {
      city: "Reykjavik",
      country: "Iceland",
      coordinates: { latitude: 64.1466, longitude: -21.9426 },
      timezone: "Atlantic/Reykjavik",
    },
    category: "premium",
    itinerary: {
      route: [
        { city: "Southampton", country: "United Kingdom" },
        { city: "Edinburgh", country: "United Kingdom", region: "Scotland" },
        { city: "Orkney Islands", country: "United Kingdom" },
        { city: "Reykjavik", country: "Iceland" },
      ],
      description:
        "10-night Northern Isles cruise from Southampton to Reykjavik.",
      distance: "1,200 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
        {
          start: "2025-07-01T17:00:00+01:00",
          end: "2025-07-03T08:00:00+01:00",
          description: "Sailing north from Southampton to Edinburgh.",
        },
        {
          start: "2025-07-05T18:00:00+01:00",
          end: "2025-07-06T08:00:00+01:00",
          description: "Cruising from Edinburgh to Orkney Islands.",
        },
        {
          start: "2025-07-08T16:00:00+01:00",
          end: "2025-07-11T10:00:00+00:00",
          description: "North Atlantic crossing to Reykjavik.",
        },
      ],
      timeOnLand: [
        {
          start: "2025-07-03T08:00:00+01:00",
          end: "2025-07-05T18:00:00+01:00",
          description: "Exploring Edinburgh's historic sites and Royal Mile.",
        },
        {
          start: "2025-07-06T08:00:00+01:00",
          end: "2025-07-08T16:00:00+01:00",
          description: "Discover Orkney's Neolithic sites and dramatic cliffs.",
        },
      ],
    },
    requiredDocuments: ["Valid Passport"],
    cancellationPolicy: "Full refund if canceled 60 days prior to departure",
    tourCategoryId: "theme-cruise",
    contactPersonnel: [
      {
        name: "Elizabeth Murray",
        role: "North Atlantic Cruise Director",
        bio: "Specialized in Northern European and Icelandic cruise routes with 15 years of experience.",
        languages: ["English"],
        experienceYears: 15,
        profileImage:
          "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91",
        contact: {
          contactEmail: "emurray@southamptoncruises.co.uk",
          contactNumber: "+44 23-5555-1234",
        },
      },
    ],
    title: "Northern Isles Discovery Cruise",
    description:
      "Experience the history and natural beauty of the UK and Iceland on this 10-night premium cruise from Southampton to Reykjavik.",
    tags: ["premium", "Iceland", "Scotland", "history", "natural beauty"],
    rating: 4.7,
    isFamilyFriendly: true,
    basePrice: 1999,
  },
  {
    departureLocation: {
      city: "Southampton",
      country: "United Kingdom",
      region: "England",
      coordinates: { latitude: 50.9097, longitude: -1.4044 },
      timezone: "Europe/London",
    },
    arrivalLocation: {
      city: "Barcelona",
      country: "Spain",
      region: "Catalonia",
      coordinates: { latitude: 41.3851, longitude: 2.1734 },
      timezone: "Europe/Madrid",
    },
    category: "mainstream",
    itinerary: {
      route: [
        { city: "Southampton", country: "United Kingdom" },
        { city: "La Coruña", country: "Spain" },
        { city: "Lisbon", country: "Portugal" },
        { city: "Cádiz", country: "Spain" },
        { city: "Barcelona", country: "Spain" },
      ],
      description:
        "8-night Western Europe cruise from Southampton to Barcelona.",
      distance: "1,650 nautical miles",
      totalDuration: "8 days",
      timeAtSea: [
        {
          start: "2025-08-15T16:00:00+01:00",
          end: "2025-08-17T09:00:00+02:00",
          description: "Sailing from Southampton to La Coruña.",
        },
        {
          start: "2025-08-18T18:00:00+02:00",
          end: "2025-08-19T08:00:00+01:00",
          description: "Cruising from La Coruña to Lisbon.",
        },
        {
          start: "2025-08-21T17:00:00+01:00",
          end: "2025-08-22T09:00:00+02:00",
          description: "Sailing from Lisbon to Cádiz.",
        },
        {
          start: "2025-08-23T19:00:00+02:00",
          end: "2025-08-24T08:00:00+02:00",
          description: "Mediterranean cruise to Barcelona.",
        },
      ],
      timeOnLand: [
        {
          start: "2025-08-17T09:00:00+02:00",
          end: "2025-08-18T18:00:00+02:00",
          description:
            "Explore La Coruña's historic harbor and Tower of Hercules.",
        },
        {
          start: "2025-08-19T08:00:00+01:00",
          end: "2025-08-21T17:00:00+01:00",
          description: "Discover Lisbon's historic districts and cuisine.",
        },
        {
          start: "2025-08-22T09:00:00+02:00",
          end: "2025-08-23T19:00:00+02:00",
          description: "Visit Cádiz's plazas and beaches.",
        },
      ],
    },
    requiredDocuments: ["Valid Passport", "Schengen Visa (if applicable)"],
    cancellationPolicy: "75% refund if canceled 45 days prior to departure",
    tourCategoryId: "theme-cruise",
    contactPersonnel: [
      {
        name: "Richard Wilson",
        role: "European Cruise Coordinator",
        bio: "Extensive knowledge of Western European ports and cultural attractions with 10+ years experience.",
        languages: ["English", "Spanish", "Portuguese"],
        experienceYears: 12,
        profileImage:
          "https://images.unsplash.com/photo-1568602471122-7832951cc4c5",
        contact: {
          contactEmail: "rwilson@southamptoncruises.co.uk",
          contactNumber: "+44 23-5555-7890",
        },
      },
    ],
    title: "Iberian Discovery Cruise",
    description:
      "Journey from the UK to Barcelona on this 8-night cruise featuring Spain and Portugal's most charming cities.",
    tags: ["mainstream", "Spain", "Portugal", "Mediterranean", "culture"],
    rating: 4.6,
    isFamilyFriendly: true,
    isCulturalExperience: true,
    basePrice: 1299,
  },
];
