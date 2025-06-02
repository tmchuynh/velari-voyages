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
  {
    departureLocation: {
      city: "Fort Lauderdale",
      state: "FL",
      country: "USA",
      timezone: "America/New_York",
      coordinates: { latitude: 26.1224, longitude: -80.1373 },
      address: "Port Everglades, 1800 Eller Dr, Fort Lauderdale, FL 33316",
      postalCode: "33316",
      additionalInfo: "Terminal 18 - Luxury Cruise Terminal",
    },
    arrivalLocation: {
      city: "Lima",
      country: "Peru",
      timezone: "America/Lima",
      coordinates: { latitude: -12.0464, longitude: -77.0428 },
    },
    category: "luxury",
    itinerary: {
      route: [
        { city: "Fort Lauderdale", state: "FL", country: "USA" },
        { city: "Cartagena", country: "Colombia" },
        { city: "Panama Canal", country: "Panama" },
        { city: "Manta", country: "Ecuador" },
        { city: "Trujillo", country: "Peru" },
        { city: "Lima", country: "Peru" },
      ],
      description:
        "A 14-day luxury voyage from Fort Lauderdale to Lima featuring a Panama Canal transit.",
      distance: "2,800 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
        {
          start: "2025-10-05T17:00:00-04:00",
          end: "2025-10-08T08:00:00-05:00",
          description: "Sailing through the Caribbean to Colombia",
        },
        {
          start: "2025-10-09T18:00:00-05:00",
          end: "2025-10-10T06:00:00-05:00",
          description: "Overnight transit to the Panama Canal",
        },
        {
          start: "2025-10-10T18:00:00-05:00",
          end: "2025-10-12T08:00:00-05:00",
          description: "Pacific Ocean sailing to Ecuador",
        },
        {
          start: "2025-10-14T17:00:00-05:00",
          end: "2025-10-16T09:00:00-05:00",
          description: "South Pacific sailing to Northern Peru",
        },
        {
          start: "2025-10-17T18:00:00-05:00",
          end: "2025-10-18T09:00:00-05:00",
          description: "Final coastal sailing to Lima",
        },
      ],
      timeOnLand: [
        {
          start: "2025-10-08T08:00:00-05:00",
          end: "2025-10-09T18:00:00-05:00",
          description:
            "Explore Cartagena's historic walled city and colonial architecture",
        },
        {
          start: "2025-10-10T06:00:00-05:00",
          end: "2025-10-10T18:00:00-05:00",
          description: "Panama Canal transit with expert narrative",
        },
        {
          start: "2025-10-12T08:00:00-05:00",
          end: "2025-10-14T17:00:00-05:00",
          description:
            "Discover Manta's indigenous culture and Pacific beaches",
        },
        {
          start: "2025-10-16T09:00:00-05:00",
          end: "2025-10-17T18:00:00-05:00",
          description: "Visit Trujillo's pre-Incan archaeological sites",
        },
        {
          start: "2025-10-18T09:00:00-05:00",
          end: "2025-10-19T17:00:00-05:00",
          description:
            "Arrive in Lima with time to explore Peru's vibrant capital",
        },
      ],
    },
    requiredDocuments: [
      "Valid Passport",
      "Visas for Colombia, Panama, Ecuador, Peru (if required)",
    ],
    cancellationPolicy: "Full refund if canceled 90 days prior to departure.",
    tourCategoryId: "luxury-cruise",
    contactPersonnel: [
      {
        name: "Elena Torres",
        role: "South American Luxury Specialist",
        description: "South American Luxury Specialist",
        languages: ["English", "Spanish", "Portuguese"],
        experienceYears: 12,
        profileImage:
          "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e",
        contact: {
          contactNumber: "+1-954-555-9876",
          contactEmail: "elena.torres@ftlcruises.com",
        },
      },
    ],
    isLuxuryCruise: true,
    title: "Panama Canal & South American Explorer",
    description:
      "Experience the engineering marvel of the Panama Canal and discover the cultural treasures of Colombia, Ecuador, and Peru on this 14-day luxury voyage.",
    tags: ["Panama Canal", "South America", "Luxury", "Cultural", "Historical"],
    basePrice: 7899,
    rating: 4.9,
    faqs: [
      {
        question: "Are lectures about the Panama Canal included?",
        answer:
          "Yes, expert historians provide detailed presentations about the canal's history and significance.",
      },
      {
        question: "Are there any special cultural performances onboard?",
        answer:
          "Yes, we feature local musicians and cultural performances representing each country we visit.",
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
      address: "Port Everglades, 1800 Eller Dr, Fort Lauderdale, FL 33316",
      postalCode: "33316",
      additionalInfo: "Terminal 29 - Premium Cruise Terminal",
    },
    arrivalLocation: {
      city: "Barcelona",
      country: "Spain",
      timezone: "Europe/Madrid",
      coordinates: { latitude: 41.3851, longitude: 2.1734 },
    },
    category: "luxury",
    itinerary: {
      route: [
        { city: "Fort Lauderdale", state: "FL", country: "USA" },
        { city: "Bermuda", country: "Bermuda" },
        { city: "Ponta Delgada", country: "Portugal" },
        { city: "Seville", country: "Spain" },
        { city: "Valencia", country: "Spain" },
        { city: "Barcelona", country: "Spain" },
      ],
      description:
        "An 18-day transatlantic luxury cruise from Fort Lauderdale to Barcelona.",
      distance: "5,300 nautical miles",
      totalDuration: "18 days",
      timeAtSea: [
        {
          start: "2025-04-01T16:00:00-04:00",
          end: "2025-04-04T09:00:00-04:00",
          description: "Sailing from Fort Lauderdale to Bermuda",
        },
        {
          start: "2025-04-06T17:00:00-04:00",
          end: "2025-04-10T08:00:00-01:00",
          description: "Transatlantic crossing to the Azores",
        },
        {
          start: "2025-04-12T16:00:00-01:00",
          end: "2025-04-15T08:00:00+02:00",
          description: "Sailing from the Azores to mainland Spain",
        },
        {
          start: "2025-04-17T18:00:00+02:00",
          end: "2025-04-18T09:00:00+02:00",
          description: "Coastal Spain sailing to Valencia",
        },
        {
          start: "2025-04-19T16:00:00+02:00",
          end: "2025-04-20T08:00:00+02:00",
          description: "Final Mediterranean sail to Barcelona",
        },
      ],
      timeOnLand: [
        {
          start: "2025-04-04T09:00:00-04:00",
          end: "2025-04-06T17:00:00-04:00",
          description:
            "Explore Bermuda's pink-sand beaches and British colonial heritage",
        },
        {
          start: "2025-04-10T08:00:00-01:00",
          end: "2025-04-12T16:00:00-01:00",
          description:
            "Discover Ponta Delgada's volcanic landscapes and Portuguese culture",
        },
        {
          start: "2025-04-15T08:00:00+02:00",
          end: "2025-04-17T18:00:00+02:00",
          description:
            "Experience Seville's magnificent Alcázar and flamenco culture",
        },
        {
          start: "2025-04-18T09:00:00+02:00",
          end: "2025-04-19T16:00:00+02:00",
          description: "Visit Valencia's futuristic City of Arts and Sciences",
        },
        {
          start: "2025-04-20T08:00:00+02:00",
          end: "2025-04-20T17:00:00+02:00",
          description:
            "Arrive in Barcelona with time to visit Gaudí masterpieces",
        },
      ],
    },
    requiredDocuments: ["Valid Passport", "Schengen Visa (if required)"],
    cancellationPolicy: "Full refund if canceled 120 days prior to departure.",
    tourCategoryId: "luxury-cruise",
    contactPersonnel: [
      {
        name: "Philippe Laurent",
        role: "Transatlantic Luxury Director",
        description: "Transatlantic Luxury Director",
        languages: ["English", "French", "Spanish"],
        experienceYears: 15,
        profileImage:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
        contact: {
          contactNumber: "+1-954-555-2468",
          contactEmail: "philippe.laurent@ftlcruises.com",
        },
      },
    ],
    isLuxuryCruise: true,
    title: "Transatlantic Journey to Barcelona",
    description:
      "Cross the Atlantic in supreme comfort on this 18-day luxury voyage from Fort Lauderdale to Barcelona featuring stops in Bermuda, the Azores, and Spain.",
    tags: ["Transatlantic", "Luxury", "Europe", "Spain", "Island"],
    basePrice: 8499,
    rating: 4.8,
    faqs: [
      {
        question: "What activities are available during sea days?",
        answer:
          "We offer enrichment programs, wine tastings, cooking classes, and guest lectures during transatlantic sailing days.",
      },
      {
        question: "How is the internet connectivity mid-Atlantic?",
        answer:
          "Our ship features advanced satellite technology providing reliable internet throughout the crossing.",
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
      address: "Port Everglades, 1800 Eller Dr, Fort Lauderdale, FL 33316",
      postalCode: "33316",
      additionalInfo: "Terminal 25 - Premium Cruise Terminal",
    },
    arrivalLocation: {
      city: "Fort Lauderdale",
      state: "FL",
      country: "USA",
      timezone: "America/New_York",
      coordinates: { latitude: 26.1224, longitude: -80.1373 },
    },
    category: "premium",
    itinerary: {
      route: [
        { city: "Fort Lauderdale", state: "FL", country: "USA" },
        { city: "Ocho Rios", country: "Jamaica" },
        { city: "Aruba", country: "Aruba" },
        { city: "Curaçao", country: "Curaçao" },
        { city: "Grand Cayman", country: "Cayman Islands" },
        { city: "Fort Lauderdale", state: "FL", country: "USA" },
      ],
      description:
        "A 12-day premium Caribbean cruise visiting five distinct tropical destinations.",
      distance: "2,600 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
        {
          start: "2025-02-15T16:00:00-05:00",
          end: "2025-02-17T08:00:00-05:00",
          description: "Sailing from Fort Lauderdale to Jamaica",
        },
        {
          start: "2025-02-18T17:00:00-05:00",
          end: "2025-02-20T09:00:00-04:00",
          description: "Caribbean sailing to Aruba",
        },
        {
          start: "2025-02-21T18:00:00-04:00",
          end: "2025-02-22T08:00:00-04:00",
          description: "Short sail from Aruba to Curaçao",
        },
        {
          start: "2025-02-23T17:00:00-04:00",
          end: "2025-02-25T09:00:00-05:00",
          description: "Cruising to Grand Cayman",
        },
        {
          start: "2025-02-26T18:00:00-05:00",
          end: "2025-02-28T08:00:00-05:00",
          description: "Return sailing to Fort Lauderdale",
        },
      ],
      timeOnLand: [
        {
          start: "2025-02-17T08:00:00-05:00",
          end: "2025-02-18T17:00:00-05:00",
          description:
            "Experience Jamaica's Dunn's River Falls and vibrant culture",
        },
        {
          start: "2025-02-20T09:00:00-04:00",
          end: "2025-02-21T18:00:00-04:00",
          description:
            "Discover Aruba's pristine beaches and desert landscapes",
        },
        {
          start: "2025-02-22T08:00:00-04:00",
          end: "2025-02-23T17:00:00-04:00",
          description:
            "Explore Curaçao's colorful Dutch architecture and coral reefs",
        },
        {
          start: "2025-02-25T09:00:00-05:00",
          end: "2025-02-26T18:00:00-05:00",
          description:
            "Visit Grand Cayman's Seven Mile Beach and swim with stingrays",
        },
      ],
    },
    requiredDocuments: ["Valid Passport"],
    cancellationPolicy: "Full refund if canceled 60 days prior to departure.",
    tourCategoryId: "premium-cruise",
    contactPersonnel: [
      {
        name: "Nicole Williams",
        role: "Caribbean Cruise Specialist",
        description: "Caribbean Cruise Specialist",
        languages: ["English", "Dutch"],
        experienceYears: 9,
        profileImage:
          "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e",
        contact: {
          contactNumber: "+1-954-555-1357",
          contactEmail: "nicole.williams@ftlcruises.com",
        },
      },
    ],
    isFamilyFriendly: true,
    title: "Ultimate Southern Caribbean Explorer",
    description:
      "Experience the diverse cultures and landscapes of the Southern Caribbean with extended stays in Jamaica, Aruba, Curaçao, and Grand Cayman.",
    tags: ["Caribbean", "Premium", "Island-Hopping", "Beach", "Tropical"],
    basePrice: 4299,
    rating: 4.7,
    faqs: [
      {
        question: "What water activities are available?",
        answer:
          "We offer snorkeling, scuba diving, paddleboarding, and jet skiing at most ports.",
      },
      {
        question: "Are there kids' programs onboard?",
        answer:
          "Yes, we feature age-appropriate activities and dedicated spaces for children of all ages.",
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
      address: "Port Everglades, 1800 Eller Dr, Fort Lauderdale, FL 33316",
      postalCode: "33316",
      additionalInfo: "Terminal 2 - Luxury World Cruise Terminal",
    },
    arrivalLocation: {
      city: "Singapore",
      country: "Singapore",
      timezone: "Asia/Singapore",
      coordinates: { latitude: 1.3521, longitude: 103.8198 },
    },
    category: "luxury",
    itinerary: {
      route: [
        { city: "Fort Lauderdale", state: "FL", country: "USA" },
        { city: "Cartagena", country: "Colombia" },
        { city: "Panama Canal", country: "Panama" },
        { city: "Papeete", country: "French Polynesia" },
        { city: "Sydney", country: "Australia" },
        { city: "Bali", country: "Indonesia" },
        { city: "Singapore", country: "Singapore" },
      ],
      description:
        "A 25-day grand voyage from Fort Lauderdale to Singapore across the Pacific.",
      distance: "12,500 nautical miles",
      totalDuration: "25 days",
      timeAtSea: [
        {
          start: "2025-11-01T16:00:00-04:00",
          end: "2025-11-04T09:00:00-05:00",
          description: "Sailing from Fort Lauderdale to Colombia",
        },
        {
          start: "2025-11-05T18:00:00-05:00",
          end: "2025-11-06T06:00:00-05:00",
          description: "Approach to Panama Canal",
        },
        {
          start: "2025-11-06T18:00:00-05:00",
          end: "2025-11-12T09:00:00-10:00",
          description: "Pacific Ocean crossing to French Polynesia",
        },
        {
          start: "2025-11-14T17:00:00-10:00",
          end: "2025-11-19T08:00:00+11:00",
          description: "South Pacific crossing to Australia",
        },
        {
          start: "2025-11-21T16:00:00+11:00",
          end: "2025-11-24T09:00:00+08:00",
          description: "Sailing from Australia to Indonesia",
        },
        {
          start: "2025-11-26T17:00:00+08:00",
          end: "2025-11-27T08:00:00+08:00",
          description: "Final sailing to Singapore",
        },
      ],
      timeOnLand: [
        {
          start: "2025-11-04T09:00:00-05:00",
          end: "2025-11-05T18:00:00-05:00",
          description:
            "Explore Cartagena's colonial architecture and vibrant culture",
        },
        {
          start: "2025-11-06T06:00:00-05:00",
          end: "2025-11-06T18:00:00-05:00",
          description: "Panama Canal transit with expert commentary",
        },
        {
          start: "2025-11-12T09:00:00-10:00",
          end: "2025-11-14T17:00:00-10:00",
          description:
            "Experience Tahiti's black-sand beaches and waterfall excursions",
        },
        {
          start: "2025-11-19T08:00:00+11:00",
          end: "2025-11-21T16:00:00+11:00",
          description:
            "Discover Sydney's iconic harbor, Opera House and cultural attractions",
        },
        {
          start: "2025-11-24T09:00:00+08:00",
          end: "2025-11-26T17:00:00+08:00",
          description:
            "Explore Bali's temples, rice terraces and vibrant arts scene",
        },
        {
          start: "2025-11-27T08:00:00+08:00",
          end: "2025-11-27T17:00:00+08:00",
          description:
            "Arrive in Singapore with time to visit Gardens by the Bay",
        },
      ],
    },
    requiredDocuments: [
      "Valid Passport with minimum 6 months validity",
      "Australian Electronic Travel Authority",
      "Indonesian Visa (if required)",
      "Singapore Visa (if required)",
    ],
    cancellationPolicy: "Full refund if canceled 180 days prior to departure.",
    tourCategoryId: "world-cruise",
    contactPersonnel: [
      {
        name: "Dr. Andrew Chen",
        role: "World Voyage Director",
        description: "World Voyage Director",
        languages: ["English", "Mandarin", "French", "Spanish"],
        experienceYears: 20,
        profileImage:
          "https://images.unsplash.com/photo-1568602471122-7832951cc4c5",
        contact: {
          contactNumber: "+1-954-555-9090",
          contactEmail: "andrew.chen@ftlcruises.com",
        },
      },
    ],
    isLuxuryCruise: true,
    isVIPCruise: true,
    title: "Transpacific Grand Voyage",
    description:
      "Experience the ultimate 25-day ocean crossing from Fort Lauderdale to Singapore, traversing the Panama Canal and the enchanting islands of the Pacific.",
    tags: ["World Cruise", "Luxury", "Pacific", "Asia", "Panama Canal"],
    basePrice: 19500,
    rating: 4.9,
    faqs: [
      {
        question: "How do you handle the time zone changes?",
        answer:
          "We gradually adjust ship time to help guests acclimate, and provide a detailed schedule of adjustments.",
      },
      {
        question: "Are laundry services included?",
        answer:
          "Yes, complimentary premium laundry and pressing services are included for this extended voyage.",
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
      address: "Port Everglades, 1800 Eller Dr, Fort Lauderdale, FL 33316",
      postalCode: "33316",
      additionalInfo: "Terminal 21 - Premium Cruise Terminal",
    },
    arrivalLocation: {
      city: "New York City",
      state: "NY",
      country: "USA",
      timezone: "America/New_York",
      coordinates: { latitude: 40.7128, longitude: -74.006 },
    },
    category: "premium",
    itinerary: {
      route: [
        { city: "Fort Lauderdale", state: "FL", country: "USA" },
        { city: "Charleston", state: "SC", country: "USA" },
        { city: "Savannah", state: "GA", country: "USA" },
        { city: "Norfolk", state: "VA", country: "USA" },
        { city: "New York City", state: "NY", country: "USA" },
      ],
      description:
        "A 9-day coastal cruise exploring America's historic Eastern Seaboard.",
      distance: "1,200 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
        {
          start: "2025-05-05T16:00:00-04:00",
          end: "2025-05-06T09:00:00-04:00",
          description: "Sailing north along Florida's coast to Charleston",
        },
        {
          start: "2025-05-08T17:00:00-04:00",
          end: "2025-05-09T08:00:00-04:00",
          description: "Short coastal sail to Savannah",
        },
        {
          start: "2025-05-11T16:00:00-04:00",
          end: "2025-05-12T09:00:00-04:00",
          description: "Cruising up the Atlantic coast to Norfolk",
        },
        {
          start: "2025-05-14T17:00:00-04:00",
          end: "2025-05-15T08:00:00-04:00",
          description: "Final sail up the Eastern Seaboard to New York",
        },
      ],
      timeOnLand: [
        {
          start: "2025-05-06T09:00:00-04:00",
          end: "2025-05-08T17:00:00-04:00",
          description:
            "Explore Charleston's antebellum architecture and Southern cuisine",
        },
        {
          start: "2025-05-09T08:00:00-04:00",
          end: "2025-05-11T16:00:00-04:00",
          description:
            "Discover Savannah's historic squares and moss-draped trees",
        },
        {
          start: "2025-05-12T09:00:00-04:00",
          end: "2025-05-14T17:00:00-04:00",
          description: "Visit Norfolk's naval bases and maritime attractions",
        },
        {
          start: "2025-05-15T08:00:00-04:00",
          end: "2025-05-15T16:00:00-04:00",
          description:
            "Arrive in New York with views of the Statue of Liberty and skyline",
        },
      ],
    },
    requiredDocuments: ["Valid Government-issued Photo ID"],
    cancellationPolicy: "Full refund if canceled 45 days prior to departure.",
    tourCategoryId: "premium-cruise",
    contactPersonnel: [
      {
        name: "Catherine Brooks",
        role: "American Heritage Specialist",
        description: "American Heritage Specialist",
        languages: ["English"],
        experienceYears: 11,
        profileImage:
          "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f",
        contact: {
          contactNumber: "+1-954-555-2424",
          contactEmail: "catherine.brooks@ftlcruises.com",
        },
      },
    ],
    isFamilyFriendly: true,
    title: "Historic Eastern Seaboard",
    description:
      "Discover America's rich history and stunning coastal cities on this 9-day premium journey from Fort Lauderdale to New York City.",
    tags: [
      "American History",
      "Coastal",
      "Premium",
      "Cultural",
      "Eastern Seaboard",
    ],
    basePrice: 3799,
    rating: 4.8,
    faqs: [
      {
        question: "Are guided history tours included?",
        answer:
          "We offer optional expertly-guided historical tours at each port for an additional fee.",
      },
      {
        question: "What is the dress code for this cruise?",
        answer:
          "Smart casual for most evenings with two optional formal nights during the cruise.",
      },
    ],
    isWeekendCruise: false,
  },
];
