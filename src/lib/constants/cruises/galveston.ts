import { Cruise } from "@/lib/interfaces/services/cruises";

export const galvestonCruises: Cruise[] = [
  {
    departureLocation: {
      city: "Galveston",
      country: "USA",
      state: "TX",
      region: "South",
      coordinates: { latitude: 29.3013, longitude: -94.7977 },
      address:
        "Galveston Cruise Terminal, 2502 Harborside Dr, Galveston, TX 77550",
      postalCode: "77550",
      timezone: "America/Chicago",
      additionalInfo:
        "Main cruise terminal near downtown Galveston with shuttle access",
    },
    arrivalLocation: {
      city: "Cozumel",
      country: "Mexico",
      region: "Quintana Roo",
      coordinates: { latitude: 20.42298, longitude: -86.92234 },
      timezone: "America/Cancun",
    },
    category: "mainstream",
    itinerary: {
      route: [
        { city: "Galveston", country: "USA" },
        { city: "Cozumel", country: "Mexico" },
        { city: "Progreso", country: "Mexico", region: "Yucatán" },
        { city: "Galveston", country: "USA" },
      ],
      description:
        "7-night Caribbean cruise visiting Cozumel and Progreso departing from Galveston.",
      distance: "1,400 nautical miles",
      totalDuration: "7 days",
      timeAtSea: [
        {
          start: "2025-10-05T16:00:00-05:00",
          end: "2025-10-11T08:00:00-05:00",
          description: "Sailing days between ports",
        },
      ],
      timeOnLand: [],
    },
    requiredDocuments: ["Valid Passport", "US Visa (if applicable)"],
    cancellationPolicy: "Full refund if canceled 60 days prior to departure",
    tourCategoryId: "tropical-cruise",
    contactPersonnel: [
      {
        name: "Laura Sanchez",
        role: "Cruise Consultant",
        description: "Cruise Specialist",
        bio: "Expert in Gulf Coast cruises with 7 years of experience.",
        languages: ["English", "Spanish"],
        experienceYears: 7,
        profileImage:
          "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91",
        contact: {
          contactEmail: "laura.sanchez@galvestoncruises.com",
          contactNumber: "+1 409-555-7890",
        },
      },
    ],
    title: "Gulf to Caribbean Explorer",
    description:
      "Enjoy a 7-night journey from Galveston to Cozumel and Progreso with fun onboard activities and cultural experiences.",
    tags: ["caribbean", "mainstream", "family-friendly"],
    basePrice: 499,
    rating: 4.6,
    isFamilyFriendly: true,
  },

  {
    departureLocation: {
      city: "Galveston",
      country: "USA",
      state: "TX",
      region: "South",
      coordinates: { latitude: 29.3013, longitude: -94.7977 },
      address:
        "Galveston Cruise Terminal, 2502 Harborside Dr, Galveston, TX 77550",
      postalCode: "77550",
      timezone: "America/Chicago",
    },
    arrivalLocation: {
      city: "Nassau",
      country: "Bahamas",
      coordinates: { latitude: 25.0343, longitude: -77.3963 },
      timezone: "America/Nassau",
    },
    category: "premium",
    itinerary: {
      route: [
        { city: "Galveston", country: "USA" },
        { city: "Nassau", country: "Bahamas" },
        { city: "Freeport", country: "Bahamas" },
        { city: "Galveston", country: "USA" },
      ],
      description:
        "5-night premium cruise from Galveston to the Bahamas, offering luxury amenities and shore excursions.",
      distance: "1,000 nautical miles",
      totalDuration: "5 days",
      timeAtSea: [
        {
          start: "2025-11-20T15:00:00-06:00",
          end: "2025-11-25T09:00:00-06:00",
          description: "Cruising with luxury onboard experiences",
        },
      ],
      timeOnLand: [],
    },
    requiredDocuments: ["Valid Passport"],
    cancellationPolicy: "Refund available if canceled 45 days before departure",
    tourCategoryId: "luxury-cruise",
    contactPersonnel: [
      {
        name: "Mark Taylor",
        role: "Luxury Cruise Consultant",
        description: "Luxury Cruise Consultant",
        bio: "Over 10 years in premium cruise planning with a focus on Gulf departures.",
        languages: ["English"],
        experienceYears: 10,
        profileImage:
          "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
        contact: {
          contactEmail: "mark.taylor@galvestoncruises.com",
          contactNumber: "+1 409-555-1234",
        },
      },
    ],
    title: "Bahamas Luxury Escape",
    description:
      "Experience luxury and relaxation on this 5-night cruise from Galveston to Nassau and Freeport.",
    tags: ["premium", "luxury", "caribbean"],
    basePrice: 1299,
    rating: 4.8,
    isLuxuryCruise: true,
    isFamilyFriendly: false,
  },

  // New cruise #1
  {
    departureLocation: {
      city: "Galveston",
      country: "USA",
      state: "TX",
      region: "South",
      coordinates: { latitude: 29.3013, longitude: -94.7977 },
      address:
        "Galveston Cruise Terminal, 2502 Harborside Dr, Galveston, TX 77550",
      postalCode: "77550",
      timezone: "America/Chicago",
    },
    arrivalLocation: {
      city: "Key West",
      country: "USA",
      state: "FL",
      region: "South",
      coordinates: { latitude: 24.5551, longitude: -81.78 },
      timezone: "America/New_York",
    },
    category: "mainstream",
    itinerary: {
      route: [
        { city: "Galveston", country: "USA" },
        { city: "Key West", country: "USA" },
        { city: "Galveston", country: "USA" },
      ],
      description:
        "4-night mainstream cruise from Galveston to Key West, featuring snorkeling, water sports, and vibrant nightlife exploration.",
      distance: "900 nautical miles",
      totalDuration: "4 days",
      timeAtSea: [
        {
          start: "2025-09-10T14:00:00-05:00",
          end: "2025-09-13T08:00:00-05:00",
          description: "Sailing with onboard mainstream activities",
        },
      ],
      timeOnLand: [
        {
          start: "2025-09-11T09:00:00-04:00",
          end: "2025-09-11T20:00:00-04:00",
          description: "Port stop with guided snorkeling tours and city tours",
        },
      ],
    },
    requiredDocuments: [
      "Valid Passport or Government-issued ID for US Citizens",
    ],
    cancellationPolicy: "Full refund if canceled 30 days prior to departure",
    tourCategoryId: "theme-cruise",
    contactPersonnel: [
      {
        name: "Emily Roberts",
        role: "Cruise Coordinator",
        description: "mainstream Cruise Coordinator",
        bio: "Specializes in mainstream cruises and water-based activities with 5 years experience.",
        languages: ["English"],
        experienceYears: 5,
        profileImage:
          "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f92",
        contact: {
          contactEmail: "emily.roberts@galvestoncruises.com",
          contactNumber: "+1 409-555-5678",
        },
      },
    ],
    title: "Galveston to Key West mainstream",
    description:
      "Experience the excitement of water sports, snorkeling, and vibrant nightlife on this 4-night cruise to Key West.",
    tags: ["mainstream", "water-sports", "snorkeling", "short-cruise"],
    basePrice: 599,
    rating: 4.4,
    isFamilyFriendly: true,
  },

  // New cruise #2
  {
    departureLocation: {
      city: "Galveston",
      country: "USA",
      state: "TX",
      region: "South",
      coordinates: { latitude: 29.3013, longitude: -94.7977 },
      address:
        "Galveston Cruise Terminal, 2502 Harborside Dr, Galveston, TX 77550",
      postalCode: "77550",
      timezone: "America/Chicago",
    },
    arrivalLocation: {
      city: "New Orleans",
      country: "USA",
      state: "LA",
      region: "South",
      coordinates: { latitude: 29.9511, longitude: -90.0715 },
      timezone: "America/Chicago",
    },
    category: "mainstream",
    itinerary: {
      route: [
        { city: "Galveston", country: "USA" },
        { city: "New Orleans", country: "USA" },
        { city: "Galveston", country: "USA" },
      ],
      description:
        "5-night river and coastal cruise exploring Galveston to New Orleans with rich cultural excursions and jazz-themed evenings.",
      distance: "450 nautical miles",
      totalDuration: "5 days",
      timeAtSea: [
        {
          start: "2025-12-01T17:00:00-06:00",
          end: "2025-12-06T09:00:00-06:00",
          description: "Cruising along the Gulf Coast and Mississippi River",
        },
      ],
      timeOnLand: [
        {
          start: "2025-12-03T08:00:00-06:00",
          end: "2025-12-03T20:00:00-06:00",
          description:
            "Explore New Orleans with guided city tours and jazz clubs",
        },
      ],
    },
    requiredDocuments: [
      "Valid Passport or Government-issued ID for US Citizens",
    ],
    cancellationPolicy: "50% refund if canceled 30 days prior, no refund after",
    tourCategoryId: "theme-cruise",
    contactPersonnel: [
      {
        name: "James Carter",
        role: "River Cruise Specialist",
        description: "River Cruise Specialist",
        bio: "Expert in cultural river cruises with over 8 years in the industry.",
        languages: ["English"],
        experienceYears: 8,
        profileImage:
          "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f93",
        contact: {
          contactEmail: "james.carter@galvestoncruises.com",
          contactNumber: "+1 409-555-3456",
        },
      },
    ],
    title: "Gulf Coast Jazz & Culture Cruise",
    description:
      "Discover the vibrant culture and jazz heritage of New Orleans on this 5-night cruise from Galveston.",
    tags: ["mainstream", "culture", "jazz", "southern-us"],
    basePrice: 699,
    rating: 4.7,
    isFamilyFriendly: false,
  },

  {
    departureLocation: {
      city: "Galveston",
      country: "USA",
      state: "TX",
      region: "South",
      coordinates: { latitude: 29.3013, longitude: -94.7977 },
      address:
        "Galveston Cruise Terminal, 2502 Harborside Dr, Galveston, TX 77550",
      postalCode: "77550",
      timezone: "America/Chicago",
      additionalInfo: "Terminal 1 - Extended Voyage Departure Area",
    },
    arrivalLocation: {
      city: "Barcelona",
      country: "Spain",
      region: "Catalonia",
      coordinates: { latitude: 41.3851, longitude: 2.1734 },
      timezone: "Europe/Madrid",
    },
    category: "luxury",
    itinerary: {
      route: [
        { city: "Galveston", country: "USA", state: "TX" },
        { city: "Key West", country: "USA", state: "FL" },
        { city: "Miami", country: "USA", state: "FL" },
        { city: "Bermuda", country: "Bermuda" },
        { city: "Funchal", country: "Portugal", region: "Madeira" },
        { city: "Cádiz", country: "Spain" },
        { city: "Málaga", country: "Spain" },
        { city: "Valencia", country: "Spain" },
        { city: "Barcelona", country: "Spain" },
      ],
      description:
        "A 21-day grand transatlantic voyage from the Gulf of Mexico to the Mediterranean.",
      distance: "5,800 nautical miles",
      totalDuration: "21 days",
      timeAtSea: [
        {
          start: "2026-04-10T16:00:00-05:00",
          end: "2026-04-12T09:00:00-04:00",
          description: "Sailing across the Gulf of Mexico to Florida",
        },
        {
          start: "2026-04-13T17:00:00-04:00",
          end: "2026-04-14T09:00:00-04:00",
          description: "Short coastal cruise to Miami",
        },
        {
          start: "2026-04-15T18:00:00-04:00",
          end: "2026-04-17T08:00:00-03:00",
          description: "Atlantic sailing to Bermuda",
        },
        {
          start: "2026-04-18T17:00:00-03:00",
          end: "2026-04-23T08:00:00+01:00",
          description: "Transatlantic crossing to Madeira",
        },
        {
          start: "2026-04-24T19:00:00+01:00",
          end: "2026-04-26T08:00:00+02:00",
          description: "Sailing to southern Spain",
        },
        {
          start: "2026-04-27T17:00:00+02:00",
          end: "2026-04-28T08:00:00+02:00",
          description: "Coastal cruise to Málaga",
        },
        {
          start: "2026-04-29T18:00:00+02:00",
          end: "2026-04-30T08:00:00+02:00",
          description: "Mediterranean sailing to Valencia",
        },
        {
          start: "2026-05-01T17:00:00+02:00",
          end: "2026-05-02T08:00:00+02:00",
          description: "Final coastal sailing to Barcelona",
        },
      ],
      timeOnLand: [
        {
          start: "2026-04-12T09:00:00-04:00",
          end: "2026-04-13T17:00:00-04:00",
          description:
            "Explore Key West's historic district and vibrant waterfront",
        },
        {
          start: "2026-04-14T09:00:00-04:00",
          end: "2026-04-15T18:00:00-04:00",
          description:
            "Experience Miami's Art Deco architecture and South Beach",
        },
        {
          start: "2026-04-17T08:00:00-03:00",
          end: "2026-04-18T17:00:00-03:00",
          description:
            "Discover Bermuda's pink-sand beaches and British colonial history",
        },
        {
          start: "2026-04-23T08:00:00+01:00",
          end: "2026-04-24T19:00:00+01:00",
          description:
            "Visit Madeira's botanical gardens and sample local wines",
        },
        {
          start: "2026-04-26T08:00:00+02:00",
          end: "2026-04-27T17:00:00+02:00",
          description: "Tour Cádiz's ancient streets and historic monuments",
        },
        {
          start: "2026-04-28T08:00:00+02:00",
          end: "2026-04-29T18:00:00+02:00",
          description:
            "Explore Málaga's Moorish architecture and Picasso Museum",
        },
        {
          start: "2026-04-30T08:00:00+02:00",
          end: "2026-05-01T17:00:00+02:00",
          description: "Visit Valencia's City of Arts and Sciences",
        },
        {
          start: "2026-05-02T08:00:00+02:00",
          end: "2026-05-02T17:00:00+02:00",
          description:
            "Arrive in Barcelona with tours of Gaudí's architectural marvels",
        },
      ],
    },
    requiredDocuments: ["Valid Passport", "Schengen Visa (if required)"],
    cancellationPolicy: "Full refund if canceled 120 days prior to departure",
    tourCategoryId: "luxury-cruise",
    contactPersonnel: [
      {
        name: "Antonio Rodriguez",
        role: "Transatlantic Cruise Director",
        description: "Senior Transatlantic Specialist",
        bio: "Specialist in luxury ocean crossings with 18 years of experience in international cruises.",
        languages: ["English", "Spanish", "Portuguese"],
        experienceYears: 18,
        profileImage:
          "https://images.unsplash.com/photo-1568602471122-7832951cc4c5",
        contact: {
          contactEmail: "antonio.rodriguez@galvestoncruises.com",
          contactNumber: "+1 409-555-9876",
        },
      },
    ],
    title: "Gulf to Mediterranean Grand Voyage",
    description:
      "Experience the ultimate crossing from Galveston to Barcelona on this 21-day luxury journey featuring the best of the Americas and Southern Europe.",
    tags: ["luxury", "transatlantic", "Europe", "long duration", "cultural"],
    basePrice: 8999,
    rating: 4.9,
    isFamilyFriendly: false,
    isLuxuryCruise: true,
  },

  {
    departureLocation: {
      city: "Galveston",
      country: "USA",
      state: "TX",
      region: "South",
      coordinates: { latitude: 29.3013, longitude: -94.7977 },
      address:
        "Galveston Cruise Terminal, 2502 Harborside Dr, Galveston, TX 77550",
      postalCode: "77550",
      timezone: "America/Chicago",
      additionalInfo: "Terminal 2 - Premium Cruise Terminal",
    },
    arrivalLocation: {
      city: "Galveston",
      country: "USA",
      state: "TX",
      coordinates: { latitude: 29.3013, longitude: -94.7977 },
      timezone: "America/Chicago",
    },
    category: "luxury",
    itinerary: {
      route: [
        { city: "Galveston", country: "USA", state: "TX" },
        { city: "Costa Maya", country: "Mexico" },
        { city: "Roatán", country: "Honduras" },
        { city: "Harvest Caye", country: "Belize" },
        { city: "Grand Cayman", country: "Cayman Islands" },
        { city: "Cozumel", country: "Mexico" },
        { city: "Galveston", country: "USA", state: "TX" },
      ],
      description:
        "A 12-day luxury Western Caribbean exploration featuring six distinct tropical destinations.",
      distance: "2,400 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
        {
          start: "2026-01-15T16:00:00-06:00",
          end: "2026-01-17T08:00:00-06:00",
          description:
            "Sailing across the Gulf of Mexico to the Yucatán Peninsula",
        },
        {
          start: "2026-01-18T17:00:00-06:00",
          end: "2026-01-19T09:00:00-06:00",
          description: "Caribbean sailing to Honduras",
        },
        {
          start: "2026-01-20T18:00:00-06:00",
          end: "2026-01-21T09:00:00-06:00",
          description: "Short cruise to Belize",
        },
        {
          start: "2026-01-22T17:00:00-06:00",
          end: "2026-01-23T08:00:00-05:00",
          description: "Caribbean crossing to Grand Cayman",
        },
        {
          start: "2026-01-24T19:00:00-05:00",
          end: "2026-01-25T08:00:00-06:00",
          description: "Sailing to Mexico's Cozumel Island",
        },
        {
          start: "2026-01-26T17:00:00-06:00",
          end: "2026-01-28T08:00:00-06:00",
          description: "Return sailing across the Gulf to Galveston",
        },
      ],
      timeOnLand: [
        {
          start: "2026-01-17T08:00:00-06:00",
          end: "2026-01-18T17:00:00-06:00",
          description: "Explore Costa Maya's Mayan ruins and tropical forests",
        },
        {
          start: "2026-01-19T09:00:00-06:00",
          end: "2026-01-20T18:00:00-06:00",
          description: "Discover Roatán's pristine reefs and Caribbean culture",
        },
        {
          start: "2026-01-21T09:00:00-06:00",
          end: "2026-01-22T17:00:00-06:00",
          description:
            "Experience Harvest Caye's exclusive beach resort and nature park",
        },
        {
          start: "2026-01-23T08:00:00-05:00",
          end: "2026-01-24T19:00:00-05:00",
          description:
            "Visit Grand Cayman's Seven Mile Beach and swim with stingrays",
        },
        {
          start: "2026-01-25T08:00:00-06:00",
          end: "2026-01-26T17:00:00-06:00",
          description:
            "Tour Cozumel's coral reefs and Mayan archaeological sites",
        },
      ],
    },
    requiredDocuments: ["Valid Passport"],
    cancellationPolicy: "Full refund if canceled 60 days prior to departure",
    tourCategoryId: "luxury-cruise",
    contactPersonnel: [
      {
        name: "Maria Gonzalez",
        role: "Caribbean Luxury Specialist",
        description: "Senior Luxury Cruise Coordinator",
        bio: "Expert in Caribbean luxury destinations with 12 years of creating exclusive travel experiences.",
        languages: ["English", "Spanish"],
        experienceYears: 12,
        profileImage:
          "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f",
        contact: {
          contactEmail: "maria.gonzalez@galvestoncruises.com",
          contactNumber: "+1 409-555-4321",
        },
      },
    ],
    title: "Western Caribbean Luxury Collection",
    description:
      "Indulge in the ultimate Caribbean luxury experience with this 12-day voyage featuring Mayan ruins, pristine beaches, and world-class snorkeling.",
    tags: ["luxury", "Caribbean", "beaches", "snorkeling", "archaeology"],
    basePrice: 5499,
    rating: 4.8,
    isFamilyFriendly: true,
    isLuxuryCruise: true,
  },

  {
    departureLocation: {
      city: "Galveston",
      country: "USA",
      state: "TX",
      region: "South",
      coordinates: { latitude: 29.3013, longitude: -94.7977 },
      address:
        "Galveston Cruise Terminal, 2502 Harborside Dr, Galveston, TX 77550",
      postalCode: "77550",
      timezone: "America/Chicago",
      additionalInfo: "Terminal 3 - Exclusive Canal Transit Terminal",
    },
    arrivalLocation: {
      city: "San Diego",
      country: "USA",
      state: "CA",
      coordinates: { latitude: 32.7157, longitude: -117.1611 },
      timezone: "America/Los_Angeles",
    },
    category: "luxury",
    itinerary: {
      route: [
        { city: "Galveston", country: "USA", state: "TX" },
        { city: "Cozumel", country: "Mexico" },
        { city: "Cartagena", country: "Colombia" },
        { city: "Panama Canal", country: "Panama" },
        { city: "Puntarenas", country: "Costa Rica" },
        { city: "Huatulco", country: "Mexico" },
        { city: "Puerto Vallarta", country: "Mexico" },
        { city: "Cabo San Lucas", country: "Mexico" },
        { city: "San Diego", country: "USA", state: "CA" },
      ],
      description:
        "An 18-day luxury voyage from Texas to California featuring a Panama Canal transit.",
      distance: "4,900 nautical miles",
      totalDuration: "18 days",
      timeAtSea: [
        {
          start: "2026-02-20T16:00:00-06:00",
          end: "2026-02-22T08:00:00-06:00",
          description: "Sailing across the Gulf of Mexico to Cozumel",
        },
        {
          start: "2026-02-23T17:00:00-06:00",
          end: "2026-02-26T09:00:00-05:00",
          description: "Caribbean sailing to Colombia",
        },
        {
          start: "2026-02-27T18:00:00-05:00",
          end: "2026-02-28T06:00:00-05:00",
          description: "Approach to Panama Canal",
        },
        {
          start: "2026-02-28T18:00:00-05:00",
          end: "2026-03-02T09:00:00-06:00",
          description: "Pacific Ocean sailing to Costa Rica",
        },
        {
          start: "2026-03-03T17:00:00-06:00",
          end: "2026-03-05T08:00:00-06:00",
          description: "Cruising north to Mexico's Pacific coast",
        },
        {
          start: "2026-03-06T18:00:00-06:00",
          end: "2026-03-07T09:00:00-06:00",
          description: "Sailing to Puerto Vallarta",
        },
        {
          start: "2026-03-08T17:00:00-06:00",
          end: "2026-03-09T09:00:00-07:00",
          description: "Mexican Pacific coast sailing to Cabo San Lucas",
        },
        {
          start: "2026-03-10T18:00:00-07:00",
          end: "2026-03-12T08:00:00-07:00",
          description: "Final sailing to San Diego",
        },
      ],
      timeOnLand: [
        {
          start: "2026-02-22T08:00:00-06:00",
          end: "2026-02-23T17:00:00-06:00",
          description: "Explore Cozumel's Mayan ruins and renowned coral reefs",
        },
        {
          start: "2026-02-26T09:00:00-05:00",
          end: "2026-02-27T18:00:00-05:00",
          description:
            "Discover Cartagena's colonial walled city and vibrant culture",
        },
        {
          start: "2026-02-28T06:00:00-05:00",
          end: "2026-02-28T18:00:00-05:00",
          description:
            "Experience the engineering marvel of the Panama Canal transit",
        },
        {
          start: "2026-03-02T09:00:00-06:00",
          end: "2026-03-03T17:00:00-06:00",
          description: "Visit Costa Rica's rainforests and diverse wildlife",
        },
        {
          start: "2026-03-05T08:00:00-06:00",
          end: "2026-03-06T18:00:00-06:00",
          description:
            "Explore Huatulco's pristine bays and ecological reserves",
        },
        {
          start: "2026-03-07T09:00:00-06:00",
          end: "2026-03-08T17:00:00-06:00",
          description:
            "Discover Puerto Vallarta's charming old town and beaches",
        },
        {
          start: "2026-03-09T09:00:00-07:00",
          end: "2026-03-10T18:00:00-07:00",
          description: "Experience Cabo's dramatic Land's End rock formations",
        },
        {
          start: "2026-03-12T08:00:00-07:00",
          end: "2026-03-12T17:00:00-07:00",
          description: "Arrive in San Diego with optional city tours",
        },
      ],
    },
    requiredDocuments: [
      "Valid Passport",
      "Tourist Cards for Mexico, Costa Rica (if required)",
      "Colombia Entry Visa (if required)",
    ],
    cancellationPolicy: "Full refund if canceled 90 days prior to departure",
    tourCategoryId: "canal-cruise",
    contactPersonnel: [
      {
        name: "Carlos Mendoza",
        role: "Panama Canal Specialist",
        description: "Panama Canal Transit Director",
        bio: "Expert in Panama Canal transits with 16 years of experience guiding luxury vessels through the canal.",
        languages: ["English", "Spanish"],
        experienceYears: 16,
        profileImage:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
        contact: {
          contactEmail: "carlos.mendoza@galvestoncruises.com",
          contactNumber: "+1 409-555-8765",
        },
      },
    ],
    title: "Panama Canal & Pacific Treasures",
    description:
      "Journey from the Gulf of Mexico to California on this 18-day luxury cruise featuring the Panama Canal and the diverse landscapes of Central America.",
    tags: [
      "luxury",
      "Panama Canal",
      "transit",
      "pacific coast",
      "engineering marvel",
    ],
    basePrice: 8299,
    rating: 4.9,
    isFamilyFriendly: false,
    isLuxuryCruise: true,
  },

  {
    departureLocation: {
      city: "Galveston",
      country: "USA",
      state: "TX",
      region: "South",
      coordinates: { latitude: 29.3013, longitude: -94.7977 },
      address:
        "Galveston Cruise Terminal, 2502 Harborside Dr, Galveston, TX 77550",
      postalCode: "77550",
      timezone: "America/Chicago",
      additionalInfo: "Terminal 2 - Premium Cruise Terminal",
    },
    arrivalLocation: {
      city: "Galveston",
      country: "USA",
      state: "TX",
      coordinates: { latitude: 29.3013, longitude: -94.7977 },
      timezone: "America/Chicago",
    },
    category: "premium",
    itinerary: {
      route: [
        { city: "Galveston", country: "USA", state: "TX" },
        { city: "Key West", country: "USA", state: "FL" },
        { city: "Nassau", country: "Bahamas" },
        { city: "Half Moon Cay", country: "Bahamas" },
        { city: "Grand Turk", country: "Turks and Caicos Islands" },
        { city: "Galveston", country: "USA", state: "TX" },
      ],
      description:
        "A 9-day Eastern Caribbean cruise featuring the Bahamas and Turks and Caicos.",
      distance: "2,100 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
        {
          start: "2026-03-15T16:00:00-05:00",
          end: "2026-03-17T09:00:00-04:00",
          description: "Sailing across the Gulf of Mexico to the Florida Keys",
        },
        {
          start: "2026-03-18T17:00:00-04:00",
          end: "2026-03-19T08:00:00-04:00",
          description: "Short cruise to Nassau",
        },
        {
          start: "2026-03-20T16:00:00-04:00",
          end: "2026-03-21T08:00:00-04:00",
          description: "Island hopping to Half Moon Cay",
        },
        {
          start: "2026-03-22T17:00:00-04:00",
          end: "2026-03-23T08:00:00-04:00",
          description: "Caribbean sailing to Grand Turk",
        },
        {
          start: "2026-03-24T16:00:00-04:00",
          end: "2026-03-27T09:00:00-05:00",
          description: "Return sailing across the Gulf to Galveston",
        },
      ],
      timeOnLand: [
        {
          start: "2026-03-17T09:00:00-04:00",
          end: "2026-03-18T17:00:00-04:00",
          description:
            "Explore Key West's historic district and Hemingway Home",
        },
        {
          start: "2026-03-19T08:00:00-04:00",
          end: "2026-03-20T16:00:00-04:00",
          description:
            "Visit Nassau's beaches, Atlantis Resort, and local markets",
        },
        {
          start: "2026-03-21T08:00:00-04:00",
          end: "2026-03-22T17:00:00-04:00",
          description:
            "Enjoy Half Moon Cay's pristine private island experience",
        },
        {
          start: "2026-03-23T08:00:00-04:00",
          end: "2026-03-24T16:00:00-04:00",
          description: "Discover Grand Turk's coral reefs and colonial history",
        },
      ],
    },
    requiredDocuments: ["Valid Passport"],
    cancellationPolicy: "Full refund if canceled 45 days prior to departure",
    tourCategoryId: "premium-cruise",
    contactPersonnel: [
      {
        name: "Jennifer Roberts",
        role: "Caribbean Cruise Specialist",
        description: "Premium Cruise Coordinator",
        bio: "Specialist in Eastern Caribbean cruises with 10 years of experience in creating premium vacation experiences.",
        languages: ["English"],
        experienceYears: 10,
        profileImage:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
        contact: {
          contactEmail: "jennifer.roberts@galvestoncruises.com",
          contactNumber: "+1 409-555-2233",
        },
      },
    ],
    title: "Eastern Caribbean & Bahamas Explorer",
    description:
      "Discover the crystal-clear waters and white sand beaches of the Eastern Caribbean on this 9-day premium cruise from Galveston.",
    tags: ["premium", "bahamas", "caribbean", "beaches", "island-hopping"],
    basePrice: 2999,
    rating: 4.7,
    isFamilyFriendly: true,
  },

  {
    departureLocation: {
      city: "Galveston",
      country: "USA",
      state: "TX",
      region: "South",
      coordinates: { latitude: 29.3013, longitude: -94.7977 },
      address:
        "Galveston Cruise Terminal, 2502 Harborside Dr, Galveston, TX 77550",
      postalCode: "77550",
      timezone: "America/Chicago",
      additionalInfo: "Terminal 1 - Ultra-Luxury Cruise Terminal",
    },
    arrivalLocation: {
      city: "New York City",
      country: "USA",
      state: "NY",
      coordinates: { latitude: 40.7128, longitude: -74.006 },
      timezone: "America/New_York",
    },
    category: "luxury",
    itinerary: {
      route: [
        { city: "Galveston", country: "USA", state: "TX" },
        { city: "New Orleans", country: "USA", state: "LA" },
        { city: "Key West", country: "USA", state: "FL" },
        { city: "Miami", country: "USA", state: "FL" },
        { city: "Charleston", country: "USA", state: "SC" },
        { city: "Norfolk", country: "USA", state: "VA" },
        { city: "New York City", country: "USA", state: "NY" },
      ],
      description:
        "A 14-day luxury coastal journey along America's historic Eastern Seaboard.",
      distance: "2,200 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
        {
          start: "2026-05-10T16:00:00-05:00",
          end: "2026-05-11T09:00:00-05:00",
          description: "Gulf Coast sailing to New Orleans",
        },
        {
          start: "2026-05-13T17:00:00-05:00",
          end: "2026-05-16T08:00:00-04:00",
          description: "Gulf crossing to the Florida Keys",
        },
        {
          start: "2026-05-17T16:00:00-04:00",
          end: "2026-05-18T08:00:00-04:00",
          description: "Short coastal sail to Miami",
        },
        {
          start: "2026-05-19T17:00:00-04:00",
          end: "2026-05-21T09:00:00-04:00",
          description: "Atlantic coastal sailing to Charleston",
        },
        {
          start: "2026-05-22T18:00:00-04:00",
          end: "2026-05-23T08:00:00-04:00",
          description: "Sailing to Norfolk, Virginia",
        },
        {
          start: "2026-05-24T16:00:00-04:00",
          end: "2026-05-25T09:00:00-04:00",
          description: "Final sailing up the Eastern Seaboard to New York",
        },
      ],
      timeOnLand: [
        {
          start: "2026-05-11T09:00:00-05:00",
          end: "2026-05-13T17:00:00-05:00",
          description: "Experience New Orleans' French Quarter and jazz scene",
        },
        {
          start: "2026-05-16T08:00:00-04:00",
          end: "2026-05-17T16:00:00-04:00",
          description:
            "Discover Key West's colorful streets and Hemingway history",
        },
        {
          start: "2026-05-18T08:00:00-04:00",
          end: "2026-05-19T17:00:00-04:00",
          description: "Explore Miami's Art Deco district and vibrant culture",
        },
        {
          start: "2026-05-21T09:00:00-04:00",
          end: "2026-05-22T18:00:00-04:00",
          description:
            "Tour Charleston's antebellum mansions and historic district",
        },
        {
          start: "2026-05-23T08:00:00-04:00",
          end: "2026-05-24T16:00:00-04:00",
          description:
            "Visit Norfolk's naval installations and maritime museums",
        },
        {
          start: "2026-05-25T09:00:00-04:00",
          end: "2026-05-25T17:00:00-04:00",
          description:
            "Arrive in New York Harbor with views of the Statue of Liberty",
        },
      ],
    },
    requiredDocuments: ["Valid Government-issued Photo ID"],
    cancellationPolicy: "Full refund if canceled 75 days prior to departure",
    tourCategoryId: "luxury-cruise",
    contactPersonnel: [
      {
        name: "Richard Hamilton",
        role: "American Heritage Director",
        description: "American Heritage Luxury Specialist",
        bio: "Expert in American coastal luxury experiences with 15 years guiding high-end historical tours.",
        languages: ["English"],
        experienceYears: 15,
        profileImage:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
        contact: {
          contactEmail: "richard.hamilton@galvestoncruises.com",
          contactNumber: "+1 409-555-7788",
        },
      },
    ],
    title: "American Coastal Grandeur",
    description:
      "Experience the rich history, diverse culture, and stunning coastline of America's eastern seaboard on this 14-day luxury voyage from Texas to New York.",
    tags: [
      "luxury",
      "American history",
      "coastal",
      "cultural",
      "Eastern Seaboard",
    ],
    basePrice: 6899,
    rating: 4.9,
    isFamilyFriendly: false,
    isLuxuryCruise: true,
  },
];
