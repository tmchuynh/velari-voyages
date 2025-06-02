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
      city: "Istanbul",
      country: "Turkey",
      region: "Marmara",
      coordinates: { latitude: 41.0082, longitude: 28.9784 },
      timezone: "TRT",
    },
    category: "luxury",
    itinerary: {
      route: [
        { city: "Rome", country: "Italy" },
        { city: "Santorini", country: "Greece" },
        { city: "Rhodes", country: "Greece" },
        { city: "Antalya", country: "Turkey" },
        { city: "Cyprus", country: "Cyprus" },
        { city: "Istanbul", country: "Turkey" },
      ],
      description:
        "14-day luxury Mediterranean cruise exploring the ancient treasures of Italy, Greece, and Turkey.",
      distance: "2,100 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
        {
          start: "2026-04-10T18:00:00+02:00",
          end: "2026-04-12T08:00:00+03:00",
          description:
            "Sailing from Rome across the Mediterranean to Santorini",
        },
        {
          start: "2026-04-14T17:00:00+03:00",
          end: "2026-04-15T08:00:00+03:00",
          description: "Cruising through the Cyclades to Rhodes",
        },
        {
          start: "2026-04-17T20:00:00+03:00",
          end: "2026-04-18T09:00:00+03:00",
          description: "Mediterranean sailing to Antalya, Turkey",
        },
        {
          start: "2026-04-20T18:00:00+03:00",
          end: "2026-04-21T08:00:00+03:00",
          description: "Crossing to Cyprus",
        },
        {
          start: "2026-04-23T16:00:00+03:00",
          end: "2026-04-24T10:00:00+03:00",
          description: "Final sailing leg to Istanbul",
        },
      ],
      timeOnLand: [
        {
          start: "2026-04-12T08:00:00+03:00",
          end: "2026-04-14T17:00:00+03:00",
          description:
            "Explore Santorini's white-washed villages and stunning caldera views",
        },
        {
          start: "2026-04-15T08:00:00+03:00",
          end: "2026-04-17T20:00:00+03:00",
          description: "Discover Rhodes' medieval Old Town and ancient ruins",
        },
        {
          start: "2026-04-18T09:00:00+03:00",
          end: "2026-04-20T18:00:00+03:00",
          description:
            "Experience Antalya's beautiful beaches and ancient Roman harbor",
        },
        {
          start: "2026-04-21T08:00:00+03:00",
          end: "2026-04-23T16:00:00+03:00",
          description:
            "Visit Cyprus's archaeological sites and charming villages",
        },
        {
          start: "2026-04-24T10:00:00+03:00",
          end: "2026-04-24T18:00:00+03:00",
          description:
            "Arrive in Istanbul and explore the historic Sultanahmet district",
        },
      ],
    },
    requiredDocuments: [
      "Valid passport",
      "Turkish visa (if required)",
      "Schengen visa (if required)",
    ],
    requirements: [
      "Health screening before boarding",
      "Travel insurance recommended",
    ],
    cancellationPolicy:
      "Full refund if canceled 90 days prior; 50% refund if canceled 45 days prior; no refund within 30 days.",
    tourCategoryId: "luxury-cruise",
    contactPersonnel: [
      {
        name: "Marco Ricci",
        role: "Mediterranean Luxury Cruise Director",
        description:
          "Senior cruise director specializing in Mediterranean luxury voyages",
        languages: ["Italian", "English", "Greek", "Turkish"],
        experienceYears: 15,
        profileImage:
          "https://images.unsplash.com/photo-1560250097-0b93528c311a",
        contact: {
          contactEmail: "marco.ricci@mediterraneanluxury.com",
          contactNumber: "+39-06-9876-5432",
        },
      },
    ],
    isFamilyFriendly: false,
    isLuxuryCruise: true,
    isVIPCruise: true,
    title: "Grand Mediterranean Treasures: Rome to Istanbul",
    description:
      "Experience the rich history and stunning beauty of the Mediterranean on this 14-day luxury voyage from Rome to Istanbul.",
    tags: [
      "Luxury",
      "Mediterranean",
      "History",
      "Cultural",
      "Ancient Civilizations",
    ],
    basePrice: 6800, // USD per person
    rating: 4.9,
    faqs: [
      {
        question: "What is the dress code for dinner?",
        answer:
          "Smart casual attire is required, with formal nights twice during the cruise.",
      },
      {
        question: "Are gratuities included in the price?",
        answer:
          "Yes, all gratuities for staff are included in your cruise fare.",
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
      city: "Barcelona",
      country: "Spain",
      region: "Catalonia",
      coordinates: { latitude: 41.3851, longitude: 2.1734 },
      timezone: "CET",
    },
    category: "luxury",
    itinerary: {
      route: [
        { city: "Rome", country: "Italy" },
        { city: "Florence", country: "Italy" },
        { city: "Monte Carlo", country: "Monaco" },
        { city: "Marseille", country: "France" },
        { city: "Ibiza", country: "Spain" },
        { city: "Valencia", country: "Spain" },
        { city: "Barcelona", country: "Spain" },
      ],
      description:
        "18-day grand luxury cruise exploring the best of the Western Mediterranean with extended port stays.",
      distance: "1,800 nautical miles",
      totalDuration: "18 days",
      timeAtSea: [
        {
          start: "2026-06-01T18:00:00+02:00",
          end: "2026-06-02T08:00:00+02:00",
          description: "Sailing from Rome to Florence (Port of Livorno)",
        },
        {
          start: "2026-06-05T17:00:00+02:00",
          end: "2026-06-06T09:00:00+02:00",
          description: "Cruising the Ligurian Sea to Monte Carlo",
        },
        {
          start: "2026-06-09T18:00:00+02:00",
          end: "2026-06-10T08:00:00+02:00",
          description: "Short Mediterranean sailing to Marseille",
        },
        {
          start: "2026-06-13T16:00:00+02:00",
          end: "2026-06-14T10:00:00+02:00",
          description: "Crossing to Ibiza in the Balearic Islands",
        },
        {
          start: "2026-06-16T19:00:00+02:00",
          end: "2026-06-17T08:00:00+02:00",
          description: "Sailing to Spain's mainland to Valencia",
        },
        {
          start: "2026-06-18T17:00:00+02:00",
          end: "2026-06-19T08:00:00+02:00",
          description: "Final coastal cruise to Barcelona",
        },
      ],
      timeOnLand: [
        {
          start: "2026-06-02T08:00:00+02:00",
          end: "2026-06-05T17:00:00+02:00",
          description:
            "Extended stay to explore Florence, Pisa, and Tuscan countryside",
        },
        {
          start: "2026-06-06T09:00:00+02:00",
          end: "2026-06-09T18:00:00+02:00",
          description:
            "Experience Monte Carlo's glamour, casino, and nearby French Riviera",
        },
        {
          start: "2026-06-10T08:00:00+02:00",
          end: "2026-06-13T16:00:00+02:00",
          description:
            "Discover Marseille's old port, calanques, and Provençal culture",
        },
        {
          start: "2026-06-14T10:00:00+02:00",
          end: "2026-06-16T19:00:00+02:00",
          description:
            "Enjoy Ibiza's beaches, nightlife, and historic Dalt Vila",
        },
        {
          start: "2026-06-17T08:00:00+02:00",
          end: "2026-06-18T17:00:00+02:00",
          description:
            "Visit Valencia's City of Arts and Sciences and historic center",
        },
        {
          start: "2026-06-19T08:00:00+02:00",
          end: "2026-06-19T18:00:00+02:00",
          description:
            "Arrive in Barcelona with time to visit Las Ramblas and Sagrada Familia",
        },
      ],
    },
    requiredDocuments: ["Valid passport", "Schengen visa (if required)"],
    requirements: ["Travel insurance recommended"],
    cancellationPolicy:
      "Full refund if canceled 120 days prior; 75% refund if canceled 60 days prior; no refund within 30 days.",
    tourCategoryId: "ultra-luxury-cruise",
    contactPersonnel: [
      {
        name: "Philippe Laurent",
        role: "Western Mediterranean Luxury Director",
        description:
          "Elite cruise director with expertise in Mediterranean luxury voyages",
        languages: ["French", "Italian", "English", "Spanish"],
        experienceYears: 18,
        profileImage:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
        contact: {
          contactEmail: "philippe.laurent@luxurymedcruises.com",
          contactNumber: "+33-1-2345-6789",
        },
      },
    ],
    isFamilyFriendly: false,
    isLuxuryCruise: true,
    isVIPCruise: true,
    title: "Grand Western Mediterranean Voyage",
    description:
      "Experience 18 days of pure luxury as you journey from Rome to Barcelona, enjoying extended stays in the Mediterranean's most enchanting ports.",
    tags: [
      "Ultra Luxury",
      "Extended Stay",
      "Mediterranean",
      "Gourmet",
      "Cultural",
    ],
    basePrice: 9800, // USD per person
    rating: 4.9,
    faqs: [
      {
        question: "Do you offer butler service?",
        answer: "Yes, personalized butler service is included for all suites.",
      },
      {
        question: "Are premium wine and spirits included?",
        answer:
          "Yes, a curated selection of fine wines, premium spirits, and champagne is included throughout your journey.",
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
      city: "Alexandria",
      country: "Egypt",
      region: "Alexandria Governorate",
      coordinates: { latitude: 31.2001, longitude: 29.9187 },
      timezone: "EET",
    },
    category: "luxury",
    itinerary: {
      route: [
        { city: "Rome", country: "Italy" },
        { city: "Naples", country: "Italy" },
        { city: "Valletta", country: "Malta" },
        { city: "Crete", country: "Greece" },
        { city: "Rhodes", country: "Greece" },
        { city: "Cyprus", country: "Cyprus" },
        { city: "Haifa", country: "Israel" },
        { city: "Alexandria", country: "Egypt" },
      ],
      description:
        "25-day ultimate Mediterranean voyage exploring ancient civilizations from Rome to Alexandria.",
      distance: "3,200 nautical miles",
      totalDuration: "25 days",
      timeAtSea: [
        {
          start: "2026-09-01T18:00:00+02:00",
          end: "2026-09-02T08:00:00+02:00",
          description: "Short sailing from Rome to Naples",
        },
        {
          start: "2026-09-05T17:00:00+02:00",
          end: "2026-09-06T10:00:00+02:00",
          description: "Mediterranean crossing to Malta",
        },
        {
          start: "2026-09-10T16:00:00+02:00",
          end: "2026-09-12T08:00:00+03:00",
          description: "Sailing to Crete across the Mediterranean",
        },
        {
          start: "2026-09-15T18:00:00+03:00",
          end: "2026-09-16T09:00:00+03:00",
          description: "Aegean Sea crossing to Rhodes",
        },
        {
          start: "2026-09-19T17:00:00+03:00",
          end: "2026-09-20T08:00:00+03:00",
          description: "Eastern Mediterranean sailing to Cyprus",
        },
        {
          start: "2026-09-23T16:00:00+03:00",
          end: "2026-09-24T07:00:00+03:00",
          description: "Crossing to Haifa, Israel",
        },
        {
          start: "2026-09-29T18:00:00+03:00",
          end: "2026-09-30T09:00:00+02:00",
          description: "Final Mediterranean sailing to Alexandria",
        },
      ],
      timeOnLand: [
        {
          start: "2026-09-02T08:00:00+02:00",
          end: "2026-09-05T17:00:00+02:00",
          description: "Explore Naples, Pompeii, and the Amalfi Coast",
        },
        {
          start: "2026-09-06T10:00:00+02:00",
          end: "2026-09-10T16:00:00+02:00",
          description:
            "Discover Malta's rich history, fortresses, and azure waters",
        },
        {
          start: "2026-09-12T08:00:00+03:00",
          end: "2026-09-15T18:00:00+03:00",
          description:
            "Visit Crete's Minoan palaces, scenic villages, and beautiful beaches",
        },
        {
          start: "2026-09-16T09:00:00+03:00",
          end: "2026-09-19T17:00:00+03:00",
          description: "Experience Rhodes' medieval old town and ancient ruins",
        },
        {
          start: "2026-09-20T08:00:00+03:00",
          end: "2026-09-23T16:00:00+03:00",
          description:
            "Explore Cyprus's archaeological treasures and charming villages",
        },
        {
          start: "2026-09-24T07:00:00+03:00",
          end: "2026-09-29T18:00:00+03:00",
          description:
            "Extended exploration of Israel's historic sites and culture",
        },
        {
          start: "2026-09-30T09:00:00+02:00",
          end: "2026-09-30T18:00:00+02:00",
          description:
            "Arrival in Alexandria with visit to the famous library and ancient sites",
        },
      ],
    },
    requiredDocuments: [
      "Valid passport with minimum 6 months validity",
      "Visas for Egypt and Israel (if required)",
      "Schengen visa (if required)",
    ],
    requirements: [
      "Comprehensive travel insurance mandatory",
      "Proof of vaccinations may be required",
    ],
    cancellationPolicy:
      "Full refund if canceled 180 days prior; 75% refund if canceled 90 days prior; no refund within 60 days.",
    tourCategoryId: "ultra-luxury-cruise",
    contactPersonnel: [
      {
        name: "Dr. Alessandro Conti",
        role: "Cultural Heritage Director",
        description: "Archaeology professor and Mediterranean cultural expert",
        languages: ["Italian", "English", "Arabic", "Greek", "Hebrew"],
        experienceYears: 25,
        profileImage:
          "https://images.unsplash.com/photo-1566753323558-f4e0952af115",
        contact: {
          contactEmail: "alessandro.conti@ancientmedcruises.com",
          contactNumber: "+39-06-5555-7777",
        },
      },
    ],
    isFamilyFriendly: false,
    isLuxuryCruise: true,
    isVIPCruise: true,
    title: "Ancient Civilizations: Rome to Alexandria",
    description:
      "A once-in-a-lifetime 25-day luxury voyage tracing the birthplaces of Western civilization from Rome to Alexandria.",
    tags: [
      "Luxury",
      "Ancient History",
      "Archaeology",
      "Extended Voyage",
      "Cultural Immersion",
    ],
    basePrice: 16500, // USD per person
    rating: 5.0,
    faqs: [
      {
        question: "Are onboard lectures included?",
        answer:
          "Yes, daily lectures by expert archaeologists and historians are included.",
      },
      {
        question: "Are private tours available?",
        answer:
          "Yes, private guided tours with expert archaeologists can be arranged at all ports.",
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
      city: "Split",
      country: "Croatia",
      region: "Split-Dalmatia",
      coordinates: { latitude: 43.5081, longitude: 16.4402 },
      timezone: "CET",
    },
    category: "premium",
    itinerary: {
      route: [
        { city: "Rome", country: "Italy" },
        { city: "Ancona", country: "Italy" },
        { city: "Venice", country: "Italy" },
        { city: "Trieste", country: "Italy" },
        { city: "Zadar", country: "Croatia" },
        { city: "Split", country: "Croatia" },
      ],
      description:
        "12-day premium cruise exploring the enchanting Adriatic coastline from Rome to Split.",
      distance: "950 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
        {
          start: "2026-07-10T17:00:00+02:00",
          end: "2026-07-11T08:00:00+02:00",
          description:
            "Sailing from Rome to Ancona along Italy's eastern coast",
        },
        {
          start: "2026-07-13T16:00:00+02:00",
          end: "2026-07-14T08:00:00+02:00",
          description: "Cruising north through the Adriatic Sea to Venice",
        },
        {
          start: "2026-07-16T18:00:00+02:00",
          end: "2026-07-17T09:00:00+02:00",
          description: "Short sail from Venice to Trieste",
        },
        {
          start: "2026-07-19T17:00:00+02:00",
          end: "2026-07-20T08:00:00+02:00",
          description: "Crossing from Trieste to Zadar, Croatia",
        },
        {
          start: "2026-07-21T16:00:00+02:00",
          end: "2026-07-22T08:00:00+02:00",
          description:
            "Final sailing along Croatia's stunning coastline to Split",
        },
      ],
      timeOnLand: [
        {
          start: "2026-07-11T08:00:00+02:00",
          end: "2026-07-13T16:00:00+02:00",
          description:
            "Explore Ancona's historic port, Romanesque cathedral, and surrounding region",
        },
        {
          start: "2026-07-14T08:00:00+02:00",
          end: "2026-07-16T18:00:00+02:00",
          description:
            "Discover Venice's canals, St. Mark's Square, and famous art collections",
        },
        {
          start: "2026-07-17T09:00:00+02:00",
          end: "2026-07-19T17:00:00+02:00",
          description:
            "Visit Trieste's Habsburg architecture and nearby Miramare Castle",
        },
        {
          start: "2026-07-20T08:00:00+02:00",
          end: "2026-07-21T16:00:00+02:00",
          description: "Experience Zadar's ancient forum and unique Sea Organ",
        },
        {
          start: "2026-07-22T08:00:00+02:00",
          end: "2026-07-22T18:00:00+02:00",
          description:
            "Arrive in Split and explore Diocletian's Palace and charming old town",
        },
      ],
    },
    requiredDocuments: ["Valid passport", "Schengen visa (if required)"],
    requirements: ["Health declaration"],
    cancellationPolicy:
      "Full refund if canceled 60 days prior; 50% refund if canceled 30 days prior; no refund within 14 days.",
    tourCategoryId: "premium-cruise",
    contactPersonnel: [
      {
        name: "Valentina Kovač",
        role: "Adriatic Cruise Specialist",
        description:
          "Expert in Adriatic Sea destinations and cultural heritage",
        languages: ["Croatian", "Italian", "English", "German"],
        experienceYears: 12,
        profileImage:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
        contact: {
          contactEmail: "valentina.kovac@adriaticcruises.com",
          contactNumber: "+385-21-123-456",
        },
      },
    ],
    isFamilyFriendly: true,
    isLuxuryCruise: false,
    isVIPCruise: false,
    title: "Adriatic Splendors: Rome to Split",
    description:
      "Discover the Adriatic's hidden gems and coastal treasures on this 12-day premium voyage from Rome to Split.",
    tags: ["Adriatic", "Coastal", "Cultural", "Italy", "Croatia"],
    basePrice: 4200, // USD per person
    rating: 4.8,
    faqs: [
      {
        question: "Will we visit any islands during the cruise?",
        answer:
          "Optional excursions to Croatian islands are available during our stop in Zadar.",
      },
      {
        question: "Is there time to visit Pompeii from Rome before departure?",
        answer:
          "Yes, pre-cruise excursions to Pompeii can be arranged for guests arriving a day early.",
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
      city: "Lisbon",
      country: "Portugal",
      region: "Lisbon",
      coordinates: { latitude: 38.7223, longitude: -9.1393 },
      timezone: "WET",
    },
    category: "luxury",
    itinerary: {
      route: [
        { city: "Rome", country: "Italy" },
        { city: "Livorno", country: "Italy" },
        { city: "Nice", country: "France" },
        { city: "Barcelona", country: "Spain" },
        { city: "Valencia", country: "Spain" },
        { city: "Málaga", country: "Spain" },
        { city: "Seville", country: "Spain" },
        { city: "Lisbon", country: "Portugal" },
      ],
      description:
        "21-day ultimate Western Mediterranean and Atlantic cruise from Rome to Lisbon.",
      distance: "2,400 nautical miles",
      totalDuration: "21 days",
      timeAtSea: [
        {
          start: "2026-10-01T18:00:00+02:00",
          end: "2026-10-02T08:00:00+02:00",
          description: "Sailing from Rome to Livorno (Florence)",
        },
        {
          start: "2026-10-04T17:00:00+02:00",
          end: "2026-10-05T09:00:00+02:00",
          description: "Cruising along the Italian and French Riviera to Nice",
        },
        {
          start: "2026-10-08T16:00:00+02:00",
          end: "2026-10-09T10:00:00+02:00",
          description: "Mediterranean sailing to Barcelona",
        },
        {
          start: "2026-10-12T18:00:00+02:00",
          end: "2026-10-13T08:00:00+02:00",
          description: "Short coastal cruise to Valencia",
        },
        {
          start: "2026-10-16T17:00:00+02:00",
          end: "2026-10-17T10:00:00+02:00",
          description: "Sailing south along Spain's coast to Málaga",
        },
        {
          start: "2026-10-20T16:00:00+02:00",
          end: "2026-10-21T08:00:00+02:00",
          description: "Cruising to Seville via the Guadalquivir River",
        },
        {
          start: "2026-10-26T17:00:00+01:00",
          end: "2026-10-27T09:00:00+00:00",
          description: "Final Atlantic sailing to Lisbon",
        },
      ],
      timeOnLand: [
        {
          start: "2026-10-02T08:00:00+02:00",
          end: "2026-10-04T17:00:00+02:00",
          description:
            "Experience Florence's Renaissance art and architecture, and visit Pisa",
        },
        {
          start: "2026-10-05T09:00:00+02:00",
          end: "2026-10-08T16:00:00+02:00",
          description: "Explore Nice and the glamorous French Riviera",
        },
        {
          start: "2026-10-09T10:00:00+02:00",
          end: "2026-10-12T18:00:00+02:00",
          description:
            "Discover Barcelona's Gaudí masterpieces and vibrant culture",
        },
        {
          start: "2026-10-13T08:00:00+02:00",
          end: "2026-10-16T17:00:00+02:00",
          description:
            "Visit Valencia's City of Arts and Sciences and historic center",
        },
        {
          start: "2026-10-17T10:00:00+02:00",
          end: "2026-10-20T16:00:00+02:00",
          description:
            "Explore Málaga's Picasso Museum and Moorish architecture",
        },
        {
          start: "2026-10-21T08:00:00+02:00",
          end: "2026-10-26T17:00:00+01:00",
          description:
            "Extended stay in Seville to experience flamenco, tapas, and Andalusian culture",
        },
        {
          start: "2026-10-27T09:00:00+00:00",
          end: "2026-10-27T18:00:00+00:00",
          description:
            "Arrive in Lisbon with time to explore the historic Alfama district",
        },
      ],
    },
    requiredDocuments: ["Valid passport", "Schengen visa (if required)"],
    requirements: ["Travel insurance recommended"],
    cancellationPolicy:
      "Full refund if canceled 120 days prior; 60% refund if canceled 60 days prior; no refund within 30 days.",
    tourCategoryId: "ultra-luxury-cruise",
    contactPersonnel: [
      {
        name: "Antonio Fernandez",
        role: "Mediterranean & Iberian Cruise Director",
        description:
          "Elite cruise director with expertise in Southern European destinations",
        languages: ["Spanish", "Portuguese", "Italian", "English", "French"],
        experienceYears: 22,
        profileImage:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
        contact: {
          contactEmail: "antonio.fernandez@iberianvoyages.com",
          contactNumber: "+34-91-234-5678",
        },
      },
    ],
    isFamilyFriendly: false,
    isLuxuryCruise: true,
    isVIPCruise: true,
    title: "Treasures of Southern Europe",
    description:
      "A sublime 21-day journey from Rome to Lisbon, embracing the rich cultures, cuisines, and landscapes of the Mediterranean's most captivating destinations.",
    tags: [
      "Ultra Luxury",
      "Mediterranean",
      "Iberian",
      "Gourmet",
      "Extended Stay",
    ],
    basePrice: 11900, // USD per person
    rating: 4.9,
    faqs: [
      {
        question: "Is wine included with meals?",
        answer:
          "Yes, premium wines curated by our sommelier are included with all lunches and dinners.",
      },
      {
        question: "Are there any special events during the cruise?",
        answer:
          "Yes, we host exclusive cultural events in each port, including private concerts, wine tastings, and culinary demonstrations.",
      },
    ],
  },
];
