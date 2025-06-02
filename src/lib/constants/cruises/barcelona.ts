import { Cruise } from "@/lib/interfaces/services/cruises";

export const barcelonaCruises: Cruise[] = [
  {
    departureLocation: {
      city: "Barcelona",
      country: "Spain",
      region: "Catalonia",
      coordinates: { latitude: 41.3523, longitude: 2.18 },
      address: "Port of Barcelona, Moll de Barcelona, s/n, 08039 Barcelona",
      timezone: "Europe/Madrid",
    },
    arrivalLocation: {
      city: "Rome",
      country: "Italy",
      region: "Lazio",
      coordinates: { latitude: 41.9028, longitude: 12.4964 },
      timezone: "Europe/Rome",
    },
    category: "mainstream",
    itinerary: {
      route: [
        { city: "Barcelona", country: "Spain" },
        { city: "Marseille", country: "France" },
        { city: "Genoa", country: "Italy" },
        { city: "Rome", country: "Italy" },
      ],
      description:
        "7-night Mediterranean cruise from Barcelona to Rome with stops in France and Italy.",
      distance: "850 nautical miles",
      totalDuration: "7 days",
      timeAtSea: [
        {
          start: "2025-09-01T18:00:00+02:00",
          end: "2025-09-02T08:00:00+02:00",
          description: "Sailing from Barcelona to Marseille.",
        },
        {
          start: "2025-09-04T20:00:00+02:00",
          end: "2025-09-05T10:00:00+02:00",
          description: "Sailing from Genoa to Rome.",
        },
      ],
      timeOnLand: [
        {
          start: "2025-09-02T08:00:00+02:00",
          end: "2025-09-03T18:00:00+02:00",
          description: "Exploring Marseille.",
        },
        {
          start: "2025-09-03T20:00:00+02:00",
          end: "2025-09-04T20:00:00+02:00",
          description: "Stopover in Genoa.",
        },
      ],
    },
    requiredDocuments: ["Passport", "Schengen Visa (if applicable)"],
    cancellationPolicy:
      "Full refund if canceled 60 days prior, 50% refund 30-59 days prior, no refund within 29 days",
    tourCategoryId: "theme-cruise",
    contactPersonnel: [
      {
        name: "Sofia Martinez",
        role: "Mediterranean Cruise Coordinator",
        bio: "Over 12 years of experience managing Mediterranean cruises, fluent in Spanish, Catalan, and English.",
        languages: ["Spanish", "Catalan", "English"],
        experienceYears: 12,
        profileImage:
          "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91",
        contact: {
          contactEmail: "sofia.martinez@barcelonacruises.com",
          contactNumber: "+34 931 555 123",
        },
      },
    ],
    title: "7-Night Barcelona to Rome Mediterranean Cruise",
    description:
      "Discover Mediterranean gems on this week-long cruise from Barcelona to Rome, featuring cultural stops in France and Italy.",
    tags: ["Barcelona", "Rome", "Mediterranean", "France", "Italy", "culture"],
    basePrice: 899,
    rating: 4.7,
    isFamilyFriendly: true,
    isPetFriendly: false,
    isCulturalExperience: true,
    isLuxuryCruise: false,
  },
  {
    departureLocation: {
      city: "Barcelona",
      country: "Spain",
      region: "Catalonia",
      coordinates: { latitude: 41.3523, longitude: 2.18 },
      address: "Port of Barcelona, Moll de Barcelona, s/n, 08039 Barcelona",
      timezone: "Europe/Madrid",
    },
    arrivalLocation: {
      city: "Athens",
      country: "Greece",
      region: "Attica",
      coordinates: { latitude: 37.9838, longitude: 23.7275 },
      timezone: "Europe/Athens",
    },
    category: "mainstream",
    itinerary: {
      route: [
        { city: "Barcelona", country: "Spain" },
        { city: "Valletta", country: "Malta" },
        { city: "Athens", country: "Greece" },
      ],
      description:
        "10-night Eastern Mediterranean cruise from Barcelona to Athens with stops in Malta.",
      distance: "1200 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
        {
          start: "2025-10-05T19:00:00+02:00",
          end: "2025-10-07T06:00:00+02:00",
          description: "Crossing the Mediterranean Sea toward Malta.",
        },
      ],
      timeOnLand: [
        {
          start: "2025-10-07T06:00:00+02:00",
          end: "2025-10-08T18:00:00+02:00",
          description: "Exploring historic Valletta.",
        },
        {
          start: "2025-10-09T08:00:00+02:00",
          end: "2025-10-11T18:00:00+02:00",
          description: "Visit to Athens and its ancient landmarks.",
        },
      ],
    },
    requiredDocuments: ["Passport", "Schengen Visa (if applicable)"],
    cancellationPolicy:
      "Full refund if canceled 45 days prior, 40% refund 20-44 days prior, no refund within 19 days",
    tourCategoryId: "theme-cruise",
    contactPersonnel: [
      {
        name: "Elena Georgiou",
        role: "Eastern Mediterranean Cruise Guide",
        bio: "Expert in Mediterranean history and culture with 8 years guiding cruises around the region.",
        languages: ["Greek", "English", "Spanish"],
        experienceYears: 8,
        profileImage:
          "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
        contact: {
          contactEmail: "elena.georgiou@barcelonacruises.com",
          contactNumber: "+34 931 555 456",
        },
      },
    ],
    title: "10-Night Barcelona to Athens Eastern Mediterranean Cruise",
    description:
      "Explore ancient civilizations and beautiful ports on this 10-night cruise from Barcelona to Athens via Malta.",
    tags: ["Barcelona", "Athens", "Malta", "Mediterranean", "history"],
    basePrice: 1299,
    rating: 4.8,
    isFamilyFriendly: true,
    isPetFriendly: false,
    isCulturalExperience: true,
    isLuxuryCruise: false,
  },
  {
    departureLocation: {
      city: "Barcelona",
      country: "Spain",
      region: "Catalonia",
      coordinates: { latitude: 41.3523, longitude: 2.18 },
      address: "Port of Barcelona, Moll de Barcelona, s/n, 08039 Barcelona",
      timezone: "Europe/Madrid",
    },
    arrivalLocation: {
      city: "Naples",
      country: "Italy",
      region: "Campania",
      coordinates: { latitude: 40.8518, longitude: 14.2681 },
      timezone: "Europe/Rome",
    },
    category: "mainstream",
    itinerary: {
      route: [
        { city: "Barcelona", country: "Spain" },
        { city: "Palma de Mallorca", country: "Spain" },
        { city: "Naples", country: "Italy" },
      ],
      description:
        "6-night Mediterranean cruise from Barcelona to Naples with a stop in Palma de Mallorca.",
      distance: "700 nautical miles",
      totalDuration: "6 days",
      timeAtSea: [
        {
          start: "2025-07-15T17:30:00+02:00",
          end: "2025-07-16T09:00:00+02:00",
          description: "Sailing to Palma de Mallorca.",
        },
        {
          start: "2025-07-18T20:00:00+02:00",
          end: "2025-07-19T08:00:00+02:00",
          description: "Crossing from Palma to Naples.",
        },
      ],
      timeOnLand: [
        {
          start: "2025-07-16T09:00:00+02:00",
          end: "2025-07-18T20:00:00+02:00",
          description: "Exploring Palma de Mallorca.",
        },
      ],
    },
    requiredDocuments: ["Passport", "Schengen Visa (if applicable)"],
    cancellationPolicy:
      "Full refund if canceled 50 days prior, 30% refund 20-49 days prior, no refund within 19 days",
    tourCategoryId: "weekend-cruise",
    contactPersonnel: [
      {
        name: "Carlos Ruiz",
        role: "Short Mediterranean Cruise Manager",
        bio: "Specializes in short cruises with excellent customer service and logistical expertise.",
        languages: ["Spanish", "English"],
        experienceYears: 7,
        profileImage:
          "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91",
        contact: {
          contactEmail: "carlos.ruiz@barcelonacruises.com",
          contactNumber: "+34 931 555 789",
        },
      },
    ],
    title: "6-Night Barcelona to Naples Mediterranean Cruise",
    description:
      "Enjoy a relaxed 6-night cruise from Barcelona to Naples including a charming stop at Palma de Mallorca.",
    tags: ["Barcelona", "Naples", "Mallorca", "Mediterranean", "short cruise"],
    basePrice: 799,
    rating: 4.4,
    isFamilyFriendly: true,
    isPetFriendly: false,
    isCulturalExperience: true,
    isLuxuryCruise: false,
  },
  {
    departureLocation: {
      city: "Barcelona",
      country: "Spain",
      region: "Catalonia",
      coordinates: { latitude: 41.3523, longitude: 2.18 },
      address: "Port of Barcelona, Moll de Barcelona, s/n, 08039 Barcelona",
      timezone: "Europe/Madrid",
    },
    arrivalLocation: {
      city: "Tunis",
      country: "Tunisia",
      region: "Tunis",
      coordinates: { latitude: 36.8065, longitude: 10.1815 },
      timezone: "Africa/Tunis",
    },
    category: "mainstream",
    itinerary: {
      route: [
        { city: "Barcelona", country: "Spain" },
        { city: "Palermo", country: "Italy" },
        { city: "Tunis", country: "Tunisia" },
      ],
      description:
        "8-night cruise from Barcelona to Tunis with stops in Italy and Tunisia.",
      distance: "950 nautical miles",
      totalDuration: "8 days",
      timeAtSea: [
        {
          start: "2025-11-02T18:00:00+01:00",
          end: "2025-11-03T08:00:00+01:00",
          description: "Sailing to Palermo.",
        },
        {
          start: "2025-11-06T22:00:00+01:00",
          end: "2025-11-07T10:00:00+01:00",
          description: "Final leg from Palermo to Tunis.",
        },
      ],
      timeOnLand: [
        {
          start: "2025-11-03T08:00:00+01:00",
          end: "2025-11-06T22:00:00+01:00",
          description: "Exploring Palermo.",
        },
      ],
    },
    requiredDocuments: ["Passport", "Visa (if applicable)"],
    cancellationPolicy:
      "Full refund if canceled 60 days prior, 40% refund 30-59 days prior, no refund within 29 days",
    tourCategoryId: "tropical-cruise",
    contactPersonnel: [
      {
        name: "Amira Ben Ali",
        role: "North Africa Cruise Specialist",
        bio: "Deep knowledge of Mediterranean and North African ports with over 10 years guiding cruises.",
        languages: ["Arabic", "French", "English", "Spanish"],
        experienceYears: 10,
        profileImage:
          "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
        contact: {
          contactEmail: "amira.benali@barcelonacruises.com",
          contactNumber: "+34 931 555 234",
        },
      },
    ],
    title: "8-Night Barcelona to Tunis North Africa Cruise",
    description:
      "Experience North African culture on this 8-night cruise from Barcelona to Tunis with a visit to Palermo.",
    tags: ["Barcelona", "Tunis", "Palermo", "North Africa", "culture"],
    basePrice: 1099,
    rating: 4.6,
    isFamilyFriendly: true,
    isPetFriendly: false,
    isCulturalExperience: true,
    isLuxuryCruise: false,
  },
];
