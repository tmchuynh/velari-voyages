import { Cruise } from "@/lib/interfaces/services/cruises";

export const buenosAiresCruises: Cruise[] = [
  {
    departureLocation: {
      city: "Buenos Aires",
      country: "Argentina",
      coordinates: { latitude: -34.6037, longitude: -58.3816 },
      address: "Puerto Madero Cruise Terminal",
      timezone: "America/Argentina/Buenos_Aires",
      additionalInfo:
        "Main cruise terminal in Buenos Aires, well equipped for international cruises.",
    },
    arrivalLocation: {
      city: "Montevideo",
      country: "Uruguay",
      coordinates: { latitude: -34.9011, longitude: -56.1645 },
      timezone: "America/Montevideo",
    },
    category: "mainstream",
    itinerary: {
      route: [
        { city: "Buenos Aires", country: "Argentina" },
        { city: "Montevideo", country: "Uruguay" },
        { city: "Buenos Aires", country: "Argentina" },
      ],
      description:
        "3-night mainstream cruise from Buenos Aires to Montevideo, perfect for a short getaway.",
      distance: "120 nautical miles",
      totalDuration: "3 days",
      timeAtSea: [
        {
          start: "2025-11-10T17:00:00-03:00",
          end: "2025-11-11T09:00:00-03:00",
          description: "Overnight sailing along the Rio de la Plata.",
        },
        {
          start: "2025-11-13T18:00:00-03:00",
          end: "2025-11-14T07:00:00-03:00",
          description: "Return sailing to Buenos Aires.",
        },
      ],
      timeOnLand: [
        {
          start: "2025-11-11T09:00:00-03:00",
          end: "2025-11-13T18:00:00-03:00",
          description: "Time to explore Montevideo’s rich culture and beaches.",
        },
      ],
    },
    requiredDocuments: ["Valid Passport"],
    cancellationPolicy: "Full refund if canceled 30 days prior to departure",
    tourCategoryId: "weekend-cruise",
    contactPersonnel: [
      {
        name: "Carlos Fernandez",
        role: "Cruise Manager",
        bio: "Experienced cruise manager specialized in South American routes with 10+ years.",
        languages: ["Spanish", "English"],
        experienceYears: 12,
        profileImage:
          "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
        contact: {
          contactEmail: "cfernandez@buenoscruises.com",
          contactNumber: "+54 11 5555 1234",
        },
      },
    ],
    title: "Buenos Aires to Montevideo Short Cruise",
    description:
      "Enjoy a relaxing 3-night cruise between Buenos Aires and Montevideo with cultural excursions and scenic views.",
    tags: ["mainstream", "South America", "short cruise", "cultural"],
    basePrice: 299,
    rating: 4.3,
    isFamilyFriendly: true,
    isCulturalExperience: true,
  },
  {
    departureLocation: {
      city: "Buenos Aires",
      country: "Argentina",
      coordinates: { latitude: -34.6037, longitude: -58.3816 },
      address: "Puerto Madero Cruise Terminal",
      timezone: "America/Argentina/Buenos_Aires",
    },
    arrivalLocation: {
      city: "Rio de Janeiro",
      country: "Brazil",
      coordinates: { latitude: -22.9068, longitude: -43.1729 },
      timezone: "America/Sao_Paulo",
    },
    category: "luxury",
    itinerary: {
      route: [
        { city: "Buenos Aires", country: "Argentina" },
        { city: "Punta del Este", country: "Uruguay" },
        { city: "Santos", country: "Brazil" },
        { city: "Ilha Grande", country: "Brazil" },
        { city: "Rio de Janeiro", country: "Brazil" },
      ],
      description:
        "An 8-night luxury cruise exploring the vibrant eastern coast of South America.",
      distance: "1,450 nautical miles",
      totalDuration: "8 days",
      timeAtSea: [
        {
          start: "2026-01-15T16:00:00-03:00",
          end: "2026-01-16T09:00:00-03:00",
          description: "Sailing to Punta del Este",
        },
        {
          start: "2026-01-17T18:00:00-03:00",
          end: "2026-01-19T07:00:00-03:00",
          description: "Atlantic Ocean passage to Santos",
        },
        {
          start: "2026-01-20T17:00:00-03:00",
          end: "2026-01-21T08:00:00-03:00",
          description: "Coastal journey to Ilha Grande",
        },
        {
          start: "2026-01-22T16:00:00-03:00",
          end: "2026-01-23T09:00:00-03:00",
          description: "Final leg to Rio de Janeiro",
        },
      ],
      timeOnLand: [
        {
          start: "2026-01-16T09:00:00-03:00",
          end: "2026-01-17T18:00:00-03:00",
          description: "Explore the beaches and restaurants of Punta del Este",
        },
        {
          start: "2026-01-19T07:00:00-03:00",
          end: "2026-01-20T17:00:00-03:00",
          description: "Tour of Santos and São Paulo excursion",
        },
        {
          start: "2026-01-21T08:00:00-03:00",
          end: "2026-01-22T16:00:00-03:00",
          description: "Beach day and nature hikes on Ilha Grande",
        },
      ],
    },
    requiredDocuments: [
      "Valid Passport",
      "Brazilian Visa (for applicable nationalities)",
    ],
    cancellationPolicy: "90% refund if canceled 60 days prior to departure",
    tourCategoryId: "luxury-cruise",
    contactPersonnel: [
      {
        name: "Isabella Martinez",
        role: "Luxury Cruise Director",
        bio: "With 15 years of experience in luxury cruise management throughout South America and the Caribbean.",
        languages: ["Spanish", "Portuguese", "English", "French"],
        experienceYears: 15,
        profileImage:
          "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f",
        contact: {
          contactEmail: "imartinez@luxurycruises.com",
          contactNumber: "+54 11 6789 4321",
        },
      },
    ],
    title: "South American Splendor: Buenos Aires to Rio",
    description:
      "Experience unparalleled luxury as you journey from the elegant streets of Buenos Aires to the vibrant beaches of Rio de Janeiro, with exclusive excursions and gourmet dining.",
    tags: ["luxury", "South America", "coastal", "gourmet"],
    basePrice: 3899,
    rating: 4.9,
    isFamilyFriendly: true,
    isLuxuryCruise: true,
    isCulturalExperience: true,
  },
  {
    departureLocation: {
      city: "Buenos Aires",
      country: "Argentina",
      coordinates: { latitude: -34.6037, longitude: -58.3816 },
      address: "Puerto Madero Cruise Terminal",
      timezone: "America/Argentina/Buenos_Aires",
    },
    arrivalLocation: {
      city: "Ushuaia",
      country: "Argentina",
      coordinates: { latitude: -54.8019, longitude: -68.303 },
      timezone: "America/Argentina/Ushuaia",
    },
    category: "expedition",
    itinerary: {
      route: [
        { city: "Buenos Aires", country: "Argentina" },
        { city: "Puerto Madryn", country: "Argentina" },
        { city: "Camarones", country: "Argentina" },
        { city: "Puerto Santa Cruz", country: "Argentina" },
        { city: "Ushuaia", country: "Argentina" },
      ],
      description:
        "A 12-night expedition cruise along the Patagonian coast to the southernmost city in the world.",
      distance: "1,800 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
        {
          start: "2026-02-20T15:00:00-03:00",
          end: "2026-02-22T07:00:00-03:00",
          description: "Sailing south to Puerto Madryn",
        },
        {
          start: "2026-02-23T18:00:00-03:00",
          end: "2026-02-24T09:00:00-03:00",
          description: "Coastal journey to Camarones",
        },
        {
          start: "2026-02-25T16:00:00-03:00",
          end: "2026-02-27T08:00:00-03:00",
          description: "Sailing along the desolate Patagonian coast",
        },
        {
          start: "2026-02-28T18:00:00-03:00",
          end: "2026-03-03T10:00:00-03:00",
          description: "Final journey through the Beagle Channel",
        },
      ],
      timeOnLand: [
        {
          start: "2026-02-22T07:00:00-03:00",
          end: "2026-02-23T18:00:00-03:00",
          description:
            "Wildlife viewing at Peninsula Valdés near Puerto Madryn",
        },
        {
          start: "2026-02-24T09:00:00-03:00",
          end: "2026-02-25T16:00:00-03:00",
          description: "Exploring remote Patagonian fishing villages",
        },
        {
          start: "2026-02-27T08:00:00-03:00",
          end: "2026-02-28T18:00:00-03:00",
          description: "Visiting historical sites around Puerto Santa Cruz",
        },
      ],
    },
    requiredDocuments: ["Valid Passport", "Medical Clearance Form"],
    requirements: ["Moderate fitness level for excursions"],
    cancellationPolicy: "75% refund if canceled 90 days prior to departure",
    tourCategoryId: "theme-cruise",
    contactPersonnel: [
      {
        name: "Dr. Alejandro Vega",
        role: "Expedition Leader & Marine Biologist",
        bio: "PhD in Marine Biology with 20 years studying Patagonian wildlife and leading educational expeditions.",
        languages: ["Spanish", "English", "German"],
        experienceYears: 20,
        profileImage:
          "https://images.unsplash.com/photo-1568602471122-7832951cc4c5",
        contact: {
          contactEmail: "avega@patagoniaexpeditions.com",
          contactNumber: "+54 11 2345 6789",
        },
      },
    ],
    title: "Patagonian Wilderness Expedition",
    description:
      "Journey through the rugged beauty of Patagonia on this expedition cruise with expert naturalists, wildlife encounters, and visits to remote coastal settlements.",
    tags: ["expedition", "wildlife", "Patagonia", "nature", "educational"],
    basePrice: 4599,
    rating: 4.8,
    isFamilyFriendly: false,
    isThemeCruise: true,
  },
  {
    departureLocation: {
      city: "Buenos Aires",
      country: "Argentina",
      coordinates: { latitude: -34.6037, longitude: -58.3816 },
      address: "Puerto Madero Cruise Terminal",
      timezone: "America/Argentina/Buenos_Aires",
    },
    arrivalLocation: {
      city: "Buenos Aires",
      country: "Argentina",
      coordinates: { latitude: -34.6037, longitude: -58.3816 },
      timezone: "America/Argentina/Buenos_Aires",
    },
    category: "premium",
    itinerary: {
      route: [
        { city: "Buenos Aires", country: "Argentina" },
        { city: "Montevideo", country: "Uruguay" },
        { city: "Punta del Este", country: "Uruguay" },
        { city: "Buenos Aires", country: "Argentina" },
      ],
      description:
        "A 5-night premium weekend getaway cruise around the Rio de la Plata.",
      distance: "350 nautical miles",
      totalDuration: "5 days",
      timeAtSea: [
        {
          start: "2025-10-03T17:00:00-03:00",
          end: "2025-10-04T08:00:00-03:00",
          description: "Evening cruise to Montevideo",
        },
        {
          start: "2025-10-05T19:00:00-03:00",
          end: "2025-10-06T08:00:00-03:00",
          description: "Coastal sailing to Punta del Este",
        },
        {
          start: "2025-10-07T16:00:00-03:00",
          end: "2025-10-08T07:00:00-03:00",
          description: "Return journey to Buenos Aires",
        },
      ],
      timeOnLand: [
        {
          start: "2025-10-04T08:00:00-03:00",
          end: "2025-10-05T19:00:00-03:00",
          description: "Full day exploring Montevideo's historic Ciudad Vieja",
        },
        {
          start: "2025-10-06T08:00:00-03:00",
          end: "2025-10-07T16:00:00-03:00",
          description: "Beach day and shopping in upscale Punta del Este",
        },
      ],
    },
    requiredDocuments: ["Valid Passport"],
    cancellationPolicy: "Full refund if canceled 45 days prior to departure",
    tourCategoryId: "weekend-cruise",
    contactPersonnel: [
      {
        name: "Gabriela Suarez",
        role: "Premium Cruise Coordinator",
        bio: "Specializing in creating memorable premium cruise experiences in the Rio de la Plata region.",
        languages: ["Spanish", "English", "Portuguese"],
        experienceYears: 8,
        profileImage:
          "https://images.unsplash.com/photo-1557002665-c552e1sweet",
        contact: {
          contactEmail: "gsuarez@premiumcruises.ar",
          contactNumber: "+54 11 4567 8901",
        },
      },
    ],
    title: "Uruguayan Riviera Weekend Escape",
    description:
      "Indulge in a premium weekend getaway exploring the sophisticated coastal cities of Uruguay with upscale dining and curated shore excursions.",
    tags: ["premium", "weekend", "Uruguay", "beaches", "short cruise"],
    basePrice: 1299,
    rating: 4.7,
    isFamilyFriendly: true,
    isWeekendCruise: true,
    isCulturalExperience: true,
  },
];
