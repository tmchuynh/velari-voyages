import { Cruise } from "@/lib/interfaces/services/cruises";

export const capeTownCruises: Cruise[] = [
  {
    departureLocation: {
      city: "Cape Town",
      country: "South Africa",
      region: "Western Cape",
      coordinates: { latitude: -33.9249, longitude: 18.4241 },
      timezone: "Africa/Johannesburg",
      address: "Cape Town Cruise Terminal, V&A Waterfront, Cape Town",
    },
    arrivalLocation: {
      city: "Mossel Bay",
      country: "South Africa",
      region: "Western Cape",
      coordinates: { latitude: -34.1836, longitude: 22.1357 },
      timezone: "Africa/Johannesburg",
      address: "Mossel Bay Harbour",
    },
    category: "premium",
    itinerary: {
      route: [
        {
          city: "Cape Town",
          country: "South Africa",
          region: "Western Cape",
          coordinates: { latitude: -33.9249, longitude: 18.4241 },
          address: "Cape Town Cruise Terminal, V&A Waterfront",
        },
        {
          city: "Simon's Town",
          country: "South Africa",
          region: "Western Cape",
          coordinates: { latitude: -34.201, longitude: 18.4475 },
          address: "Simon's Town Harbour",
        },
        {
          city: "Mossel Bay",
          country: "South Africa",
          region: "Western Cape",
          coordinates: { latitude: -34.1836, longitude: 22.1357 },
          address: "Mossel Bay Harbour",
        },
      ],
      description:
        "A premium cruise journey along South Africa’s scenic Western Cape coastline, featuring Cape Town, the historic naval town of Simon's Town, and the charming port of Mossel Bay.",
      distance: "350 nautical miles",
      totalDuration: "4 days",
      timeAtSea: [
        {
          start: "2025-11-10T10:00:00+02:00",
          end: "2025-11-10T16:00:00+02:00",
          duration: "6 hours",
          description:
            "Cruising from Cape Town to Simon's Town along the False Bay coastline with ocean views.",
        },
        {
          start: "2025-11-11T10:00:00+02:00",
          end: "2025-11-11T18:00:00+02:00",
          duration: "8 hours",
          description:
            "Sailing from Simon's Town to Mossel Bay through the scenic Indian Ocean coast.",
        },
      ],
      timeOnLand: [
        {
          start: "2025-11-10T16:00:00+02:00",
          end: "2025-11-11T10:00:00+02:00",
          duration: "18 hours",
          description:
            "Explore Simon's Town: visit the naval museum, Boulders Beach penguin colony, and local seafood restaurants.",
        },
        {
          start: "2025-11-11T18:00:00+02:00",
          end: "2025-11-12T18:00:00+02:00",
          duration: "1 day",
          description:
            "Mossel Bay shore excursion: historic sites, whale watching (seasonal), and beach walks along the Garden Route.",
        },
      ],
    },
    requiredDocuments: [
      "Passport",
      "South African visa (if applicable)",
      "COVID-19 Vaccination Certificate",
    ],
    requirements: ["Minimum age 16 years", "No pets allowed on board"],
    cancellationPolicy:
      "Full refund if canceled 45 days before departure; 50% refund up to 15 days before; no refund within 14 days.",
    tourCategoryId: "luxury-cruise",
    contactPersonnel: [
      {
        name: "Sipho Nkosi",
        role: "Cruise Manager",
        description:
          "Experienced cruise manager specializing in South African coastal tours and cultural experiences.",
        languages: ["English", "Afrikaans", "Zulu"],
        experienceYears: 8,
        profileImage:
          "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
        contact: {
          contactNumber: "+27 21 555 1234",
          contactEmail: "sipho.nkosi@capecruises.co.za",
        },
      },
    ],
    isCulturalExperience: true,
    title: "Western Cape Premium Coastal Cruise",
    description:
      "Premium 4-day cruise exploring Cape Town, Simon's Town, and Mossel Bay with a focus on nature, history, and culture along South Africa’s breathtaking coastline.",
    tags: ["premium", "cultural", "coastal", "Western Cape"],
    basePrice: 499,
    rating: 4.7,
  },
  {
    departureLocation: {
      city: "Cape Town",
      country: "South Africa",
      region: "Western Cape",
      coordinates: { latitude: -33.9249, longitude: 18.4241 },
      timezone: "Africa/Johannesburg",
      address: "Cape Town Cruise Terminal, V&A Waterfront",
    },
    arrivalLocation: {
      city: "Simon’s Town",
      country: "South Africa",
      region: "Western Cape",
      coordinates: { latitude: -34.201, longitude: 18.4475 },
      timezone: "Africa/Johannesburg",
      address: "Simon’s Town Harbour",
    },
    category: "mainstream",
    itinerary: {
      route: [
        {
          city: "Cape Town",
          country: "South Africa",
          region: "Western Cape",
          coordinates: { latitude: -33.9249, longitude: 18.4241 },
          address: "Cape Town Cruise Terminal, V&A Waterfront",
        },
        {
          city: "Knysna",
          country: "South Africa",
          region: "Western Cape",
          coordinates: { latitude: -34.0366, longitude: 23.0492 },
          address: "Knysna Waterfront",
        },
        {
          city: "Simon’s Town",
          country: "South Africa",
          region: "Western Cape",
          coordinates: { latitude: -34.201, longitude: 18.4475 },
          address: "Simon’s Town Harbour",
        },
      ],
      description:
        "Explore the Garden Route’s natural beauty with stops in Cape Town, Knysna’s lagoons and forests, and Simon’s Town’s rich maritime history.",
      distance: "400 nautical miles",
      totalDuration: "5 days",
      timeAtSea: [
        {
          start: "2025-12-05T09:00:00+02:00",
          end: "2025-12-05T15:00:00+02:00",
          duration: "6 hours",
          description:
            "Cruise from Cape Town to Knysna along the scenic South African coast.",
        },
        {
          start: "2025-12-06T14:00:00+02:00",
          end: "2025-12-06T22:00:00+02:00",
          duration: "8 hours",
          description:
            "Sail from Knysna to Simon’s Town passing coastal nature reserves and marine parks.",
        },
      ],
      timeOnLand: [
        {
          start: "2025-12-05T15:00:00+02:00",
          end: "2025-12-06T14:00:00+02:00",
          duration: "23 hours",
          description:
            "Visit Knysna: forest hikes, lagoon cruises, and local artisan markets.",
        },
        {
          start: "2025-12-06T22:00:00+02:00",
          end: "2025-12-07T18:00:00+02:00",
          duration: "20 hours",
          description:
            "Explore Simon’s Town’s naval museum and penguin colony at Boulders Beach.",
        },
      ],
    },
    requiredDocuments: ["Passport", "COVID-19 Vaccination Certificate"],
    requirements: ["Minimum age 12 years"],
    cancellationPolicy:
      "50% refund if canceled 30 days before departure; no refund within 15 days.",
    tourCategoryId: "theme-cruise",
    contactPersonnel: [
      {
        name: "Lindiwe Maseko",
        role: "Family Cruise Coordinator",
        description:
          "Tour coordinator specializing in family-friendly coastal cruises and nature excursions.",
        languages: ["English", "Zulu"],
        experienceYears: 5,
        profileImage:
          "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
        contact: {
          contactNumber: "+27 21 555 9876",
          contactEmail: "lindiwe.maseko@capecruises.co.za",
        },
      },
    ],
    isFamilyFriendly: true,
    title: "Garden Route Family Cruise",
    description:
      "A 5-day family-friendly cruise through the Western Cape, with stops in Cape Town, Knysna, and Simon’s Town featuring wildlife and outdoor activities.",
    tags: ["family-friendly", "mainstream", "nature", "Western Cape"],
    basePrice: 399,
    rating: 4.5,
  },
  {
    departureLocation: {
      city: "Cape Town",
      country: "South Africa",
      region: "Western Cape",
      coordinates: { latitude: -33.9249, longitude: 18.4241 },
      timezone: "Africa/Johannesburg",
      address: "Cape Town Cruise Terminal",
    },
    arrivalLocation: {
      city: "Hermanus",
      country: "South Africa",
      region: "Western Cape",
      coordinates: { latitude: -34.4184, longitude: 19.2349 },
      timezone: "Africa/Johannesburg",
      address: "Hermanus Harbour",
    },
    category: "entry-luxury",
    itinerary: {
      route: [
        {
          city: "Cape Town",
          country: "South Africa",
          region: "Western Cape",
          coordinates: { latitude: -33.9249, longitude: 18.4241 },
          address: "Cape Town Cruise Terminal",
        },
        {
          city: "Hermanus",
          country: "South Africa",
          region: "Western Cape",
          coordinates: { latitude: -34.4184, longitude: 19.2349 },
          address: "Hermanus Harbour",
        },
        {
          city: "Simon’s Town",
          country: "South Africa",
          region: "Western Cape",
          coordinates: { latitude: -34.201, longitude: 18.4475 },
          address: "Simon’s Town Harbour",
        },
      ],
      description:
        "Luxurious coastal cruise focusing on whale watching near Hermanus, wine tasting, and maritime history at Simon’s Town.",
      distance: "270 nautical miles",
      totalDuration: "3 days",
      timeAtSea: [
        {
          start: "2025-10-20T11:00:00+02:00",
          end: "2025-10-20T17:00:00+02:00",
          duration: "6 hours",
          description:
            "Cruising from Cape Town to Hermanus along the coastline with ocean views.",
        },
        {
          start: "2025-10-21T09:00:00+02:00",
          end: "2025-10-21T15:00:00+02:00",
          duration: "6 hours",
          description:
            "Sailing from Hermanus to Simon’s Town with scenic coastal views.",
        },
      ],
      timeOnLand: [
        {
          start: "2025-10-20T17:00:00+02:00",
          end: "2025-10-21T09:00:00+02:00",
          duration: "16 hours",
          description:
            "Hermanus shore time: prime whale watching (seasonal) and local wine tasting tours.",
        },
        {
          start: "2025-10-21T15:00:00+02:00",
          end: "2025-10-22T11:00:00+02:00",
          duration: "20 hours",
          description:
            "Explore Simon’s Town: visit the naval museum and Boulders Beach penguin colony.",
        },
      ],
    },
    requiredDocuments: [
      "Passport",
      "South African visa (if applicable)",
      "COVID-19 Vaccination Certificate",
    ],
    requirements: ["Minimum age 18 years", "Dress code: smart casual"],
    cancellationPolicy:
      "Full refund if canceled 30 days before departure; 75% refund up to 10 days before; no refund within 9 days.",
    tourCategoryId: "vip-cruise",
    contactPersonnel: [
      {
        name: "Thandiwe Zuma",
        role: "Luxury Cruise Host",
        description:
          "Luxury cruise host with expertise in South African coastal wildlife and wine tours.",
        languages: ["English", "Afrikaans"],
        experienceYears: 10,
        profileImage:
          "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91",
        contact: {
          contactNumber: "+27 21 555 6789",
          contactEmail: "thandiwe.zuma@capecruises.co.za",
        },
      },
    ],
    isLuxuryCruise: true,
    title: "Western Cape Luxury Whale Watch Cruise",
    description:
      "3-day luxury cruise from Cape Town to Hermanus and Simon’s Town with premium whale watching tours and wine tastings along the coast.",
    tags: ["luxury", "whale watching", "wine tasting", "Western Cape"],
    basePrice: 599,
    rating: 4.9,
  },
  {
    departureLocation: {
      city: "Cape Town",
      country: "South Africa",
      region: "Western Cape",
      coordinates: { latitude: -33.9249, longitude: 18.4241 },
      timezone: "Africa/Johannesburg",
      address: "Cape Town Cruise Terminal",
    },
    arrivalLocation: {
      city: "Plettenberg Bay",
      country: "South Africa",
      region: "Western Cape",
      coordinates: { latitude: -34.052, longitude: 23.3725 },
      timezone: "Africa/Johannesburg",
      address: "Plettenberg Bay Harbour",
    },
    category: "mainstream",
    itinerary: {
      route: [
        {
          city: "Cape Town",
          country: "South Africa",
          region: "Western Cape",
          coordinates: { latitude: -33.9249, longitude: 18.4241 },
          address: "Cape Town Cruise Terminal",
        },
        {
          city: "Knysna",
          country: "South Africa",
          region: "Western Cape",
          coordinates: { latitude: -34.0366, longitude: 23.0492 },
          address: "Knysna Waterfront",
        },
        {
          city: "Plettenberg Bay",
          country: "South Africa",
          region: "Western Cape",
          coordinates: { latitude: -34.052, longitude: 23.3725 },
          address: "Plettenberg Bay Harbour",
        },
      ],
      description:
        "A coastal cruise highlighting South Africa's famous Garden Route with stops at Cape Town, Knysna, and Plettenberg Bay.",
      distance: "420 nautical miles",
      totalDuration: "5 days",
      timeAtSea: [
        {
          start: "2025-11-15T08:00:00+02:00",
          end: "2025-11-15T14:00:00+02:00",
          duration: "6 hours",
          description:
            "Cruising from Cape Town to Knysna with scenic views of the coastline and ocean.",
        },
        {
          start: "2025-11-16T12:00:00+02:00",
          end: "2025-11-16T20:00:00+02:00",
          duration: "8 hours",
          description:
            "Sailing from Knysna to Plettenberg Bay past coastal reserves and wildlife.",
        },
      ],
      timeOnLand: [
        {
          start: "2025-11-15T14:00:00+02:00",
          end: "2025-11-16T12:00:00+02:00",
          duration: "22 hours",
          description:
            "Knysna shore excursion: lagoon tours, hiking, and local markets.",
        },
        {
          start: "2025-11-16T20:00:00+02:00",
          end: "2025-11-17T18:00:00+02:00",
          duration: "22 hours",
          description:
            "Plettenberg Bay exploration: beaches, wildlife sanctuaries, and water sports.",
        },
      ],
    },
    requiredDocuments: ["Passport", "COVID-19 Vaccination Certificate"],
    requirements: ["Minimum age 14 years"],
    cancellationPolicy:
      "Full refund if canceled 45 days before departure; 50% refund up to 20 days before departure.",
    tourCategoryId: "theme-cruise",
    contactPersonnel: [
      {
        name: "Nomsa Dlamini",
        role: "Eco-Tourism Guide",
        description:
          "Cruise guide focused on eco-tourism and nature activities along the Garden Route.",
        languages: ["English", "Zulu", "Xhosa"],
        experienceYears: 7,
        profileImage:
          "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91",
        contact: {
          contactNumber: "+27 21 555 4321",
          contactEmail: "nomsa.dlamini@capecruises.co.za",
        },
      },
    ],
    title: "Garden Route Eco Cruise",
    description:
      "Explore South Africa’s natural beauty on a 5-day eco-tourism cruise along the Garden Route with stops at Cape Town, Knysna, and Plettenberg Bay.",
    tags: ["eco-tourism", "nature", "family-friendly", "mainstream"],
    basePrice: 450,
    rating: 4.6,
  },

  // Added 5 new cruises here:
  {
    departureLocation: {
      city: "Cape Town",
      country: "South Africa",
      region: "Western Cape",
      coordinates: { latitude: -33.9249, longitude: 18.4241 },
      timezone: "Africa/Johannesburg",
      address: "Cape Town Cruise Terminal",
    },
    arrivalLocation: {
      city: "Durban",
      country: "South Africa",
      region: "KwaZulu-Natal",
      coordinates: { latitude: -29.8587, longitude: 31.0218 },
      timezone: "Africa/Johannesburg",
      address: "Durban Harbour",
    },
    category: "luxury",
    itinerary: {
      route: [
        {
          city: "Cape Town",
          country: "South Africa",
          region: "Western Cape",
          coordinates: { latitude: -33.9249, longitude: 18.4241 },
          address: "Cape Town Cruise Terminal",
        },
        {
          city: "Port Elizabeth",
          country: "South Africa",
          region: "Eastern Cape",
          coordinates: { latitude: -33.9614, longitude: 25.6022 },
          address: "Port Elizabeth Harbour",
        },
        {
          city: "Durban",
          country: "South Africa",
          region: "KwaZulu-Natal",
          coordinates: { latitude: -29.8587, longitude: 31.0218 },
          address: "Durban Harbour",
        },
      ],
      description:
        "Luxury 7-day cruise from Cape Town to Durban with a stop in Port Elizabeth, offering premium dining, entertainment, and coastal scenery.",
      distance: "800 nautical miles",
      totalDuration: "7 days",
      timeAtSea: [
        {
          start: "2025-11-01T09:00:00+02:00",
          end: "2025-11-02T18:00:00+02:00",
          duration: "33 hours",
          description:
            "Sailing from Cape Town to Port Elizabeth with oceanfront views and onboard luxury amenities.",
        },
        {
          start: "2025-11-03T10:00:00+02:00",
          end: "2025-11-04T20:00:00+02:00",
          duration: "34 hours",
          description:
            "Cruise from Port Elizabeth to Durban featuring entertainment and relaxation options onboard.",
        },
      ],
      timeOnLand: [
        {
          start: "2025-11-02T18:00:00+02:00",
          end: "2025-11-03T10:00:00+02:00",
          duration: "16 hours",
          description:
            "Port Elizabeth stopover: explore beaches, wildlife parks, and local markets.",
        },
        {
          start: "2025-11-04T20:00:00+02:00",
          end: "2025-11-05T18:00:00+02:00",
          duration: "22 hours",
          description:
            "Durban shore excursion: explore the Golden Mile beachfront, local cuisine, and cultural sites.",
        },
      ],
    },
    requiredDocuments: [
      "Passport",
      "South African visa (if applicable)",
      "COVID-19 Vaccination Certificate",
    ],
    requirements: [
      "Minimum age 21 years",
      "Formal evening wear for select events",
    ],
    cancellationPolicy:
      "Full refund if canceled 60 days before departure; 75% refund up to 30 days before; no refund within 29 days.",
    tourCategoryId: "repositioning-cruise",
    contactPersonnel: [
      {
        name: "Markus van der Merwe",
        role: "Luxury Cruise Director",
        description:
          "Luxury cruise director with extensive experience in South African coastal voyages.",
        languages: ["English", "Afrikaans"],
        experienceYears: 12,
        profileImage:
          "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91",
        contact: {
          contactNumber: "+27 31 555 6789",
          contactEmail: "markus.vdmerwe@capecruises.co.za",
        },
      },
    ],
    isLuxuryCruise: true,
    title: "Luxury Cape Town to Durban Coastal Cruise",
    description:
      "Experience South Africa’s east coast on a luxury 7-day cruise featuring fine dining, cultural stops, and stunning coastal landscapes.",
    tags: ["luxury", "long-distance", "coastal", "premium"],
    basePrice: 1299,
    rating: 4.9,
  },
  {
    departureLocation: {
      city: "Cape Town",
      country: "South Africa",
      region: "Western Cape",
      coordinates: { latitude: -33.9249, longitude: 18.4241 },
      timezone: "Africa/Johannesburg",
      address: "Cape Town Cruise Terminal",
    },
    arrivalLocation: {
      city: "Mossel Bay",
      country: "South Africa",
      region: "Western Cape",
      coordinates: { latitude: -34.1833, longitude: 22.1333 },
      timezone: "Africa/Johannesburg",
      address: "Mossel Bay Harbour",
    },
    category: "mainstream",
    itinerary: {
      route: [
        {
          city: "Cape Town",
          country: "South Africa",
          region: "Western Cape",
          coordinates: { latitude: -33.9249, longitude: 18.4241 },
          address: "Cape Town Cruise Terminal",
        },
        {
          city: "Mossel Bay",
          country: "South Africa",
          region: "Western Cape",
          coordinates: { latitude: -34.1833, longitude: 22.1333 },
          address: "Mossel Bay Harbour",
        },
      ],
      description:
        "A 3-day coastal cruise from Cape Town to Mossel Bay focusing on local culture, coastal views, and adventure activities.",
      distance: "230 nautical miles",
      totalDuration: "3 days",
      timeAtSea: [
        {
          start: "2025-12-10T08:00:00+02:00",
          end: "2025-12-10T16:00:00+02:00",
          duration: "8 hours",
          description:
            "Sailing from Cape Town to Mossel Bay with panoramic ocean views.",
        },
      ],
      timeOnLand: [
        {
          start: "2025-12-10T16:00:00+02:00",
          end: "2025-12-12T10:00:00+02:00",
          duration: "42 hours",
          description:
            "Explore Mossel Bay: visit the Diaz Museum, beach activities, and local markets.",
        },
      ],
    },
    requiredDocuments: ["Passport", "COVID-19 Vaccination Certificate"],
    requirements: [
      "Minimum age 12 years",
      "Comfortable walking shoes recommended",
    ],
    cancellationPolicy:
      "Full refund if canceled 30 days before departure; 50% refund up to 15 days before departure.",
    tourCategoryId: "weekend-cruise",
    contactPersonnel: [
      {
        name: "Lindiwe Mkhize",
        role: "Cruise Guide",
        description:
          "Cruise guide specializing in cultural tours and coastal adventures.",
        languages: ["English", "Zulu"],
        experienceYears: 5,
        profileImage:
          "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91",
        contact: {
          contactNumber: "+27 44 555 1234",
          contactEmail: "lindiwe.mkhize@capecruises.co.za",
        },
      },
    ],
    isLuxuryCruise: false,
    title: "Cape Town to Mossel Bay Coastal Adventure",
    description:
      "3-day cruise offering cultural exploration, beach activities, and scenic sailing from Cape Town to Mossel Bay.",
    tags: ["adventure", "culture", "family-friendly", "mainstream"],
    basePrice: 299,
    rating: 4.4,
  },
  {
    departureLocation: {
      city: "Cape Town",
      country: "South Africa",
      region: "Western Cape",
      coordinates: { latitude: -33.9249, longitude: 18.4241 },
      timezone: "Africa/Johannesburg",
      address: "Cape Town Cruise Terminal",
    },
    arrivalLocation: {
      city: "Richards Bay",
      country: "South Africa",
      region: "KwaZulu-Natal",
      coordinates: { latitude: -28.7744, longitude: 32.0813 },
      timezone: "Africa/Johannesburg",
      address: "Richards Bay Harbour",
    },
    category: "mainstream",
    itinerary: {
      route: [
        {
          city: "Cape Town",
          country: "South Africa",
          region: "Western Cape",
          coordinates: { latitude: -33.9249, longitude: 18.4241 },
          address: "Cape Town Cruise Terminal",
        },
        {
          city: "East London",
          country: "South Africa",
          region: "Eastern Cape",
          coordinates: { latitude: -33.015, longitude: 27.9116 },
          address: "East London Port",
        },
        {
          city: "Richards Bay",
          country: "South Africa",
          region: "KwaZulu-Natal",
          coordinates: { latitude: -28.7744, longitude: 32.0813 },
          address: "Richards Bay Harbour",
        },
      ],
      description:
        "5-day coastal cruise from Cape Town to Richards Bay with stops in East London and scenic coastal cruising.",
      distance: "650 nautical miles",
      totalDuration: "5 days",
      timeAtSea: [
        {
          start: "2026-01-05T08:00:00+02:00",
          end: "2026-01-06T20:00:00+02:00",
          duration: "36 hours",
          description:
            "Sailing from Cape Town to East London with onboard entertainment and ocean views.",
        },
        {
          start: "2026-01-07T08:00:00+02:00",
          end: "2026-01-07T22:00:00+02:00",
          duration: "14 hours",
          description:
            "Cruising from East London to Richards Bay with scenic coastal views.",
        },
      ],
      timeOnLand: [
        {
          start: "2026-01-06T20:00:00+02:00",
          end: "2026-01-07T08:00:00+02:00",
          duration: "12 hours",
          description:
            "East London stopover: explore beaches, museums, and local cuisine.",
        },
        {
          start: "2026-01-07T22:00:00+02:00",
          end: "2026-01-08T18:00:00+02:00",
          duration: "20 hours",
          description:
            "Richards Bay exploration: nature reserves, waterfront dining, and cultural sites.",
        },
      ],
    },
    requiredDocuments: ["Passport", "COVID-19 Vaccination Certificate"],
    requirements: ["Minimum age 16 years"],
    cancellationPolicy:
      "Full refund if canceled 45 days before departure; 50% refund up to 20 days before departure.",
    tourCategoryId: "theme-cruise",
    contactPersonnel: [
      {
        name: "Sipho Nkosi",
        role: "Cruise Guide",
        description:
          "Cruise guide with knowledge of Eastern Cape and KwaZulu-Natal coastal attractions.",
        languages: ["English", "Zulu"],
        experienceYears: 8,
        profileImage:
          "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91",
        contact: {
          contactNumber: "+27 35 555 5678",
          contactEmail: "sipho.nkosi@capecruises.co.za",
        },
      },
    ],
    isLuxuryCruise: false,
    title: "Cape Town to Richards Bay Scenic Cruise",
    description:
      "5-day scenic cruise along South Africa’s east coast from Cape Town to Richards Bay with stops at East London and rich cultural experiences.",
    tags: ["scenic", "culture", "family-friendly", "mainstream"],
    basePrice: 499,
    rating: 4.7,
  },
  {
    departureLocation: {
      city: "Cape Town",
      country: "South Africa",
      region: "Western Cape",
      coordinates: { latitude: -33.9249, longitude: 18.4241 },
      timezone: "Africa/Johannesburg",
      address: "Cape Town Cruise Terminal",
    },
    arrivalLocation: {
      city: "Saldanha Bay",
      country: "South Africa",
      region: "Western Cape",
      coordinates: { latitude: -33.0119, longitude: 17.9402 },
      timezone: "Africa/Johannesburg",
      address: "Saldanha Bay Port",
    },
    category: "mainstream",
    itinerary: {
      route: [
        {
          city: "Cape Town",
          country: "South Africa",
          region: "Western Cape",
          coordinates: { latitude: -33.9249, longitude: 18.4241 },
          address: "Cape Town Cruise Terminal",
        },
        {
          city: "Saldanha Bay",
          country: "South Africa",
          region: "Western Cape",
          coordinates: { latitude: -33.0119, longitude: 17.9402 },
          address: "Saldanha Bay Port",
        },
      ],
      description:
        "2-day cruise from Cape Town to Saldanha Bay focused on harbor views and marine life.",
      distance: "75 nautical miles",
      totalDuration: "2 days",
      timeAtSea: [
        {
          start: "2026-02-10T09:00:00+02:00",
          end: "2026-02-10T15:00:00+02:00",
          duration: "6 hours",
          description:
            "Sailing from Cape Town to Saldanha Bay with views of marine wildlife.",
        },
      ],
      timeOnLand: [
        {
          start: "2026-02-10T15:00:00+02:00",
          end: "2026-02-11T09:00:00+02:00",
          duration: "18 hours",
          description:
            "Saldanha Bay stop: coastal hiking, bird watching, and local seafood dining.",
        },
      ],
    },
    requiredDocuments: ["Passport", "COVID-19 Vaccination Certificate"],
    requirements: ["Minimum age 12 years"],
    cancellationPolicy:
      "Full refund if canceled 15 days before departure; 50% refund up to 5 days before departure.",
    tourCategoryId: "weekend-cruise",
    contactPersonnel: [
      {
        name: "Anika Steenkamp",
        role: "Marine Biologist",
        description:
          "Marine biologist and cruise guide specializing in coastal wildlife.",
        languages: ["English", "Afrikaans"],
        experienceYears: 6,
        profileImage:
          "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91",
        contact: {
          contactNumber: "+27 22 555 1234",
          contactEmail: "anika.steenkamp@capecruises.co.za",
        },
      },
    ],
    isLuxuryCruise: false,
    title: "Cape Town to Saldanha Bay Marine Cruise",
    description:
      "2-day marine-focused cruise from Cape Town to Saldanha Bay highlighting coastal wildlife and scenic hiking opportunities.",
    tags: ["marine", "wildlife", "family-friendly", "mainstream"],
    basePrice: 199,
    rating: 4.3,
  },
];
