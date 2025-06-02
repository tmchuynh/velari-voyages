import { Cruise } from "@/lib/interfaces/services/cruises";

export const romeCruises: Cruise[] = [
  {
    departureLocation: {
      city: "Rome",
      country: "Italy",
      region: "Lazio",
      coordinates: { latitude: 41.9028, longitude: 12.4964 },
      timezone: "CET",
      additionalInfo: "Port of Civitavecchia serves Rome cruise departures",
    },
    arrivalLocation: {
      city: "Rome",
      country: "Italy",
      region: "Lazio",
      coordinates: { latitude: 41.9028, longitude: 12.4964 },
      timezone: "CET",
    },
    category: "premium",
    itinerary: {
      route: [
        {
          city: "Rome",
          country: "Italy",
          region: "Lazio",
          coordinates: { latitude: 41.9028, longitude: 12.4964 },
        },
        {
          city: "Naples",
          country: "Italy",
          region: "Campania",
          coordinates: { latitude: 40.8518, longitude: 14.2681 },
        },
        {
          city: "Palermo",
          country: "Italy",
          region: "Sicily",
          coordinates: { latitude: 38.1157, longitude: 13.3615 },
        },
        {
          city: "Rome",
          country: "Italy",
          region: "Lazio",
          coordinates: { latitude: 41.9028, longitude: 12.4964 },
        },
      ],
      description:
        "5-day Italian coastal cruise from Rome to Naples and Palermo, returning to Rome.",
      distance: "Approx. 850 nautical miles",
      totalDuration: "5 days",
      timeAtSea: [
        {
          start: "2025-09-10T18:00:00Z",
          end: "2025-09-11T10:00:00Z",
          description: "Sailing from Rome to Naples",
        },
        {
          start: "2025-09-13T20:00:00Z",
          end: "2025-09-14T10:00:00Z",
          description: "Sailing from Naples to Palermo",
        },
        {
          start: "2025-09-15T18:00:00Z",
          end: "2025-09-16T08:00:00Z",
          description: "Sailing from Palermo to Rome",
        },
      ],
      timeOnLand: [
        {
          start: "2025-09-11T10:00:00Z",
          end: "2025-09-13T20:00:00Z",
          description: "Exploring Naples and surrounding areas",
        },
        {
          start: "2025-09-14T10:00:00Z",
          end: "2025-09-15T18:00:00Z",
          description: "Visiting Palermo and Sicily attractions",
        },
        {
          start: "2025-09-16T08:00:00Z",
          end: "2025-09-16T20:00:00Z",
          description: "Return and leisure in Rome",
        },
      ],
    },
    requiredDocuments: ["Valid passport", "Visa for Italy if required"],
    requirements: ["Health screening before boarding"],
    cancellationPolicy:
      "Full refund if canceled 30 days prior; 50% refund if canceled 15 days prior; no refund within 7 days.",
    tourCategoryId: "theme-cruise",
    contactPersonnel: [
      {
        name: "Laura Bianchi",
        role: "Cruise Specialist",
        description:
          "Cruise specialist with 10 years of experience in Mediterranean routes",
        languages: ["Italian", "English", "Spanish"],
        experienceYears: 10,
        profileImage:
          "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91",
        contact: {
          contactEmail: "laura.bianchi@cruisecompany.com",
          contactNumber: "+39-06-1234-5678",
        },
      },
    ],
    isFamilyFriendly: true,
    isCulturalExperience: true,
    title: "Premium 5-Day Italian Coastal Cruise: Rome to Naples & Palermo",
    description:
      "Enjoy Italy's stunning coastline and rich culture on this premium cruise from Rome to Naples and Palermo.",
    tags: ["Italy", "Coastal", "Culture", "Family Friendly"],
    basePrice: 599,
    rating: 4.7,
    faqs: [
      {
        question: "Are meals included?",
        answer: "Yes, all meals and select beverages are included onboard.",
      },
      {
        question: "Is there Wi-Fi onboard?",
        answer: "Wi-Fi is available at an additional cost.",
      },
    ],
    isLuxuryCruise: false,
    isVIPCruise: false,
  },
  {
    departureLocation: {
      city: "Rome",
      country: "Italy",
      region: "Lazio",
      coordinates: { latitude: 41.9028, longitude: 12.4964 },
      timezone: "CET",
      additionalInfo: "Port of Civitavecchia",
    },
    arrivalLocation: {
      city: "Venice",
      country: "Italy",
      region: "Veneto",
      coordinates: { latitude: 45.4408, longitude: 12.3155 },
      timezone: "CET",
    },
    category: "luxury",
    itinerary: {
      route: [
        {
          city: "Rome",
          country: "Italy",
          region: "Lazio",
          coordinates: { latitude: 41.9028, longitude: 12.4964 },
        },
        {
          city: "Florence",
          country: "Italy",
          region: "Tuscany",
          coordinates: { latitude: 43.7696, longitude: 11.2558 },
        },
        {
          city: "Cinque Terre",
          country: "Italy",
          region: "Liguria",
          coordinates: { latitude: 44.143, longitude: 9.6657 },
        },
        {
          city: "Venice",
          country: "Italy",
          region: "Veneto",
          coordinates: { latitude: 45.4408, longitude: 12.3155 },
        },
      ],
      description:
        "8-day luxury cruise from Rome to Venice, stopping at Florence and Cinque Terre.",
      distance: "Approx. 950 nautical miles",
      totalDuration: "8 days",
      timeAtSea: [
        {
          start: "2025-10-01T18:00:00Z",
          end: "2025-10-02T12:00:00Z",
          description: "Sailing from Rome to Florence",
        },
        {
          start: "2025-10-04T20:00:00Z",
          end: "2025-10-05T08:00:00Z",
          description: "Sailing from Florence to Cinque Terre",
        },
        {
          start: "2025-10-07T18:00:00Z",
          end: "2025-10-08T10:00:00Z",
          description: "Sailing from Cinque Terre to Venice",
        },
      ],
      timeOnLand: [
        {
          start: "2025-10-02T12:00:00Z",
          end: "2025-10-04T20:00:00Z",
          description: "Visiting Florence and nearby attractions",
        },
        {
          start: "2025-10-05T08:00:00Z",
          end: "2025-10-07T18:00:00Z",
          description: "Exploring the scenic Cinque Terre region",
        },
        {
          start: "2025-10-08T10:00:00Z",
          end: "2025-10-08T22:00:00Z",
          description: "Disembark and leisure in Venice",
        },
      ],
    },
    requiredDocuments: ["Valid passport", "Schengen visa if required"],
    requirements: ["Health screening and COVID vaccination proof"],
    cancellationPolicy:
      "Full refund if canceled 60 days prior; 80% refund if canceled 30 days prior; no refund within 15 days.",
    tourCategoryId: "luxury-cruise",
    contactPersonnel: [
      {
        name: "Giovanni Rossi",
        role: "Luxury Cruise Captain",
        description: "Luxury cruise captain with over 20 years experience",
        languages: ["Italian", "English", "French"],
        experienceYears: 20,
        profileImage:
          "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
        contact: {
          contactEmail: "giovanni.rossi@luxurycruises.com",
          contactNumber: "+39-041-123-4567",
        },
      },
    ],
    isFamilyFriendly: false,
    isLuxuryCruise: true,
    isVIPCruise: true,
    title: "Luxury 8-Day Rome to Venice Cruise via Florence & Cinque Terre",
    description:
      "Indulge in an exquisite luxury cruise exploring Italy's iconic cities and coastal gems.",
    tags: ["Luxury", "Italy", "Venice", "Florence", "Cinque Terre"],
    basePrice: 2500, // USD per person
    rating: 4.9,
    faqs: [
      {
        question: "Are spa and wellness services included?",
        answer:
          "Spa and wellness services are available onboard at an extra cost.",
      },
      {
        question: "Is this cruise suitable for children?",
        answer:
          "This cruise is adults-only and not recommended for children under 18.",
      },
    ],
  },
  {
    departureLocation: {
      city: "Rome",
      country: "Italy",
      region: "Lazio",
      coordinates: { latitude: 41.9028, longitude: 12.4964 },
      timezone: "CET",
      additionalInfo: "Port of Civitavecchia",
    },
    arrivalLocation: {
      city: "Athens",
      country: "Greece",
      region: "Attica",
      coordinates: { latitude: 37.9838, longitude: 23.7275 },
      timezone: "EET",
    },
    category: "entry-luxury",
    itinerary: {
      route: [
        {
          city: "Rome",
          country: "Italy",
          region: "Lazio",
          coordinates: { latitude: 41.9028, longitude: 12.4964 },
        },
        {
          city: "Corfu",
          country: "Greece",
          region: "Ionian Islands",
          coordinates: { latitude: 39.6243, longitude: 19.9217 },
        },
        {
          city: "Athens",
          country: "Greece",
          region: "Attica",
          coordinates: { latitude: 37.9838, longitude: 23.7275 },
        },
      ],
      description:
        "7-day cruise from Rome to Athens via Corfu, combining Italian and Greek cultures.",
      distance: "Approx. 1200 nautical miles",
      totalDuration: "7 days",
      timeAtSea: [
        {
          start: "2025-11-05T18:00:00Z",
          end: "2025-11-07T08:00:00Z",
          description: "Sailing from Rome to Corfu",
        },
        {
          start: "2025-11-09T18:00:00Z",
          end: "2025-11-10T12:00:00Z",
          description: "Sailing from Corfu to Athens",
        },
      ],
      timeOnLand: [
        {
          start: "2025-11-07T08:00:00Z",
          end: "2025-11-09T18:00:00Z",
          description: "Exploring Corfu island",
        },
        {
          start: "2025-11-10T12:00:00Z",
          end: "2025-11-11T18:00:00Z",
          description: "Visiting Athens and historic sites",
        },
      ],
    },
    requiredDocuments: ["Valid passport", "Schengen visa if applicable"],
    requirements: ["Health screening; proof of vaccination recommended"],
    cancellationPolicy:
      "Full refund if canceled 45 days prior; 60% refund if canceled 20 days prior; no refund within 10 days.",
    tourCategoryId: "theme-cruise",
    contactPersonnel: [
      {
        name: "Elena Papadopoulos",
        role: "Mediterranean Cruise Coordinator",
        description:
          "Experienced cruise coordinator specializing in Mediterranean itineraries",
        languages: ["Greek", "English", "Italian"],
        experienceYears: 12,
        profileImage:
          "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91",
        contact: {
          contactEmail: "elena.papadopoulos@medcruises.com",
          contactNumber: "+30-210-1234567",
        },
      },
    ],
    isFamilyFriendly: true,
    isLuxuryCruise: false,
    isVIPCruise: false,
    title: "7-Day Mediterranean Cruise: Rome to Athens via Corfu",
    description:
      "Experience the blend of Italian and Greek cultures on this Mediterranean cruise from Rome to Athens.",
    tags: ["Mediterranean", "Italy", "Greece", "Culture", "Family Friendly"],
    basePrice: 899, // USD per person
    rating: 4.6,
    faqs: [
      {
        question: "Are shore excursions included?",
        answer: "Shore excursions are optional and can be booked separately.",
      },
      {
        question: "Is the ship wheelchair accessible?",
        answer: "Yes, the ship is fully wheelchair accessible.",
      },
    ],
  },
];
