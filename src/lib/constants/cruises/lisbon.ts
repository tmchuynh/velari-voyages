import { Cruise } from "@/lib/interfaces/services/cruises";

export const lisbonCruises: Cruise[] = [
  {
    departureLocation: {
      city: "Lisbon",
      country: "Portugal",
      region: "Lisbon District",
      coordinates: { latitude: 38.7223, longitude: -9.1393 },
      address: "Port of Lisbon",
      postalCode: "1900-268",
      timezone: "Europe/Lisbon",
      additionalInfo:
        "Main cruise terminal located in the historic Belem district",
    },
    arrivalLocation: {
      city: "Barcelona",
      country: "Spain",
      region: "Catalonia",
      coordinates: { latitude: 41.3851, longitude: 2.1734 },
      timezone: "Europe/Madrid",
    },
    category: "premium",
    itinerary: {
      route: [
        { city: "Lisbon", country: "Portugal" },
        { city: "Barcelona", country: "Spain" },
      ],
      description:
        "A 7-night cruise exploring the scenic Iberian coast from Lisbon to vibrant Barcelona.",
      distance: "720 nautical miles",
      totalDuration: "7 days",
      timeAtSea: [
        {
          start: "2025-09-10T16:00:00+01:00",
          end: "2025-09-17T08:00:00+02:00",
          description: "Cruising the Atlantic coast and Mediterranean Sea",
        },
      ],
      timeOnLand: [],
    },
    requiredDocuments: ["Valid Passport", "Schengen Visa (if applicable)"],
    cancellationPolicy: "Full refund if canceled 45 days before departure",
    tourCategoryId: "luxury-cruise",
    contactPersonnel: [
      {
        name: "Maria Fernandes",
        role: "Cruise Director",
        description: "Senior Cruise Coordinator",
        bio: "Over 10 years of experience organizing luxury cruises in Southern Europe.",
        languages: ["Portuguese", "English", "Spanish"],
        experienceYears: 10,
        profileImage:
          "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
        contact: {
          contactEmail: "maria.fernandes@lisboncruises.pt",
          contactNumber: "+351 21 123 4567",
        },
      },
    ],
    title: "Iberian Coastal Luxury Cruise",
    description:
      "Experience the rich culture and stunning coastlines of Portugal and Spain on this premium cruise.",
    tags: ["luxury", "coastal", "iberian", "premium"],
    rating: 4.9,
    isFamilyFriendly: false,
    isLuxuryCruise: true,
    basePrice: 2800, // USD per person
  },
  {
    departureLocation: {
      city: "Lisbon",
      country: "Portugal",
      region: "Lisbon District",
      coordinates: { latitude: 38.7223, longitude: -9.1393 },
      address: "Port of Lisbon",
      postalCode: "1900-268",
      timezone: "Europe/Lisbon",
    },
    arrivalLocation: {
      city: "Funchal",
      country: "Portugal",
      region: "Madeira",
      coordinates: { latitude: 32.6669, longitude: -16.9241 },
      timezone: "Europe/Lisbon",
    },
    category: "mainstream",
    itinerary: {
      route: [
        { city: "Lisbon", country: "Portugal" },
        { city: "Funchal", country: "Portugal" },
      ],
      description:
        "A 5-night cruise from Lisbon to the beautiful island of Madeira, known for its natural beauty and culture.",
      distance: "520 nautical miles",
      totalDuration: "5 days",
      timeAtSea: [
        {
          start: "2025-10-01T14:00:00+01:00",
          end: "2025-10-06T08:00:00+01:00",
          description: "Sailing down the Atlantic coast to Madeira",
        },
      ],
      timeOnLand: [],
    },
    requiredDocuments: ["Valid Passport"],
    cancellationPolicy: "Refund available if canceled 30 days before departure",
    tourCategoryId: "theme-cruise",
    contactPersonnel: [
      {
        name: "João Silva",
        role: "Cruise Manager",
        description: "Cruise Manager",
        bio: "Experienced in organizing family-friendly cruises along the Portuguese coast.",
        languages: ["Portuguese", "English"],
        experienceYears: 7,
        profileImage:
          "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91",
        contact: {
          contactEmail: "joao.silva@lisboncruises.pt",
          contactNumber: "+351 21 765 4321",
        },
      },
    ],
    title: "Atlantic Islands Explorer",
    description:
      "Explore Portugal’s Atlantic coast and the beautiful island of Madeira on this 5-night cruise.",
    tags: ["mainstream", "family-friendly", "atlantic"],
    rating: 4.6,
    isFamilyFriendly: true,
    isLuxuryCruise: false,
    basePrice: 1400, // USD per person
  },
  // Additional cruises added:
  {
    departureLocation: {
      city: "Lisbon",
      country: "Portugal",
      region: "Lisbon District",
      coordinates: { latitude: 38.7223, longitude: -9.1393 },
      address: "Port of Lisbon",
      postalCode: "1900-268",
      timezone: "Europe/Lisbon",
      additionalInfo: "Well-connected terminal with easy city access",
    },
    arrivalLocation: {
      city: "Valencia",
      country: "Spain",
      region: "Valencian Community",
      coordinates: { latitude: 39.4699, longitude: -0.3763 },
      timezone: "Europe/Madrid",
    },
    category: "premium",
    itinerary: {
      route: [
        { city: "Lisbon", country: "Portugal" },
        { city: "Valencia", country: "Spain" },
      ],
      description:
        "A 6-night premium cruise along the Iberian Peninsula from Lisbon to Valencia, featuring coastal views and cultural excursions.",
      distance: "650 nautical miles",
      totalDuration: "6 days",
      timeAtSea: [
        {
          start: "2025-11-05T15:00:00+01:00",
          end: "2025-11-11T09:00:00+01:00",
          description:
            "Sailing through Atlantic waters and the Mediterranean coast.",
        },
      ],
      timeOnLand: [],
    },
    requiredDocuments: ["Valid Passport", "Schengen Visa (if applicable)"],
    cancellationPolicy: "Full refund if canceled 40 days before departure",
    tourCategoryId: "luxury-cruise",
    contactPersonnel: [
      {
        name: "Ana Costa",
        role: "Cruise Specialist",
        description: "Cruise Experience Manager",
        bio: "Specializes in premium European coastal cruises with 8 years of experience.",
        languages: ["Portuguese", "Spanish", "English"],
        experienceYears: 8,
        profileImage:
          "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7",
        contact: {
          contactEmail: "ana.costa@lisboncruises.pt",
          contactNumber: "+351 21 999 8877",
        },
      },
    ],
    title: "Iberian Peninsula Premium Cruise",
    description:
      "Discover coastal treasures and historic cities between Lisbon and Valencia on this premium cruise.",
    tags: ["premium", "coastal", "iberian", "culture"],
    rating: 4.8,
    isFamilyFriendly: false,
    isLuxuryCruise: true,
    basePrice: 2600,
  },
  {
    departureLocation: {
      city: "Lisbon",
      country: "Portugal",
      region: "Lisbon District",
      coordinates: { latitude: 38.7223, longitude: -9.1393 },
      address: "Port of Lisbon",
      postalCode: "1900-268",
      timezone: "Europe/Lisbon",
    },
    arrivalLocation: {
      city: "Tangier",
      country: "Morocco",
      region: "Tangier-Tetouan-Al Hoceima",
      coordinates: { latitude: 35.7595, longitude: -5.83395 },
      timezone: "Africa/Casablanca",
    },
    category: "mainstream",
    itinerary: {
      route: [
        { city: "Lisbon", country: "Portugal" },
        { city: "Tangier", country: "Morocco" },
      ],
      description:
        "A 4-night cultural cruise from Lisbon to Tangier exploring southern Portugal and northern Morocco.",
      distance: "380 nautical miles",
      totalDuration: "4 days",
      timeAtSea: [
        {
          start: "2025-10-15T13:00:00+01:00",
          end: "2025-10-19T08:00:00+01:00",
          description:
            "Sailing along the Atlantic coast of Iberia and North Africa.",
        },
      ],
      timeOnLand: [],
    },
    requiredDocuments: ["Valid Passport", "Visa (if required)"],
    cancellationPolicy: "Partial refund if canceled 20 days before departure",
    tourCategoryId: "theme-cruise",
    contactPersonnel: [
      {
        name: "Carlos Mendes",
        role: "Cruise Operations Lead",
        description: "Cruise Operations Lead",
        bio: "Expert in family and cultural cruises between Europe and North Africa.",
        languages: ["Portuguese", "Arabic", "English"],
        experienceYears: 9,
        profileImage:
          "https://images.unsplash.com/photo-1511367461989-f85a21fda167",
        contact: {
          contactEmail: "carlos.mendes@lisboncruises.pt",
          contactNumber: "+351 21 555 3344",
        },
      },
    ],
    title: "Iberian to Moroccan Cultural Cruise",
    description:
      "Explore vibrant cultures from Lisbon to Tangier on this enriching 4-night cruise.",
    tags: ["mainstream", "cultural", "family-friendly", "atlantic"],
    rating: 4.5,
    isFamilyFriendly: true,
    isLuxuryCruise: false,
    basePrice: 1200,
  },
  {
    departureLocation: {
      city: "Lisbon",
      country: "Portugal",
      region: "Lisbon District",
      coordinates: { latitude: 38.7223, longitude: -9.1393 },
      address: "Port of Lisbon",
      postalCode: "1900-268",
      timezone: "Europe/Lisbon",
      additionalInfo: "Historic port with excellent connections to city center",
    },
    arrivalLocation: {
      city: "Rome",
      country: "Italy",
      region: "Lazio",
      coordinates: { latitude: 41.9028, longitude: 12.4964 },
      timezone: "Europe/Rome",
    },
    category: "luxury",
    itinerary: {
      route: [
        { city: "Lisbon", country: "Portugal" },
        { city: "Seville", country: "Spain" },
        { city: "Málaga", country: "Spain" },
        { city: "Barcelona", country: "Spain" },
        { city: "Marseille", country: "France" },
        { city: "Rome", country: "Italy" },
      ],
      description:
        "A 14-day luxury Mediterranean cruise offering the best of Southern European culture and cuisine.",
      distance: "1,850 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
        {
          start: "2026-05-10T17:00:00+01:00",
          end: "2026-05-11T08:00:00+01:00",
          description:
            "Sailing from Lisbon to Seville along the Atlantic coast.",
        },
        {
          start: "2026-05-13T19:00:00+01:00",
          end: "2026-05-14T08:00:00+01:00",
          description: "Cruising from Seville to Málaga.",
        },
        {
          start: "2026-05-16T17:00:00+01:00",
          end: "2026-05-18T09:00:00+02:00",
          description: "Mediterranean sailing from Málaga to Barcelona.",
        },
        {
          start: "2026-05-20T18:00:00+02:00",
          end: "2026-05-21T08:00:00+02:00",
          description: "Coastal journey from Barcelona to Marseille.",
        },
        {
          start: "2026-05-23T16:00:00+02:00",
          end: "2026-05-24T09:00:00+02:00",
          description: "Final Mediterranean leg from Marseille to Rome.",
        },
      ],
      timeOnLand: [
        {
          start: "2026-05-11T08:00:00+01:00",
          end: "2026-05-13T19:00:00+01:00",
          description:
            "Experience Seville's flamenco, Gothic architecture, and Andalusian cuisine.",
        },
        {
          start: "2026-05-14T08:00:00+01:00",
          end: "2026-05-16T17:00:00+01:00",
          description: "Explore Málaga's historic center and Picasso Museum.",
        },
        {
          start: "2026-05-18T09:00:00+02:00",
          end: "2026-05-20T18:00:00+02:00",
          description:
            "Discover Barcelona's Gaudí masterpieces and vibrant Las Ramblas.",
        },
        {
          start: "2026-05-21T08:00:00+02:00",
          end: "2026-05-23T16:00:00+02:00",
          description:
            "Visit Marseille's historic port and sample authentic bouillabaisse.",
        },
        {
          start: "2026-05-24T09:00:00+02:00",
          end: "2026-05-24T18:00:00+02:00",
          description:
            "Arrival in Rome with time to visit the Vatican and Colosseum.",
        },
      ],
    },
    requiredDocuments: ["Valid Passport", "Schengen Visa (if applicable)"],
    cancellationPolicy: "Full refund if canceled 60 days before departure",
    tourCategoryId: "luxury-cruise",
    contactPersonnel: [
      {
        name: "Isabella Romano",
        role: "Mediterranean Cruise Director",
        description: "Senior Cruise Director",
        bio: "Expert in Mediterranean luxury cruises with 15 years of experience across Southern Europe.",
        languages: ["Portuguese", "English", "Spanish", "French", "Italian"],
        experienceYears: 15,
        profileImage:
          "https://images.unsplash.com/photo-1568602471122-7832951cc4c5",
        contact: {
          contactEmail: "isabella.romano@lisboncruises.pt",
          contactNumber: "+351 21 888 7766",
        },
      },
    ],
    title: "Mediterranean Grand Tour",
    description:
      "A luxurious 14-day journey from Lisbon to Rome, experiencing the best of Southern European culture, cuisine, and coastlines.",
    tags: ["luxury", "Mediterranean", "cultural", "gastronomy", "historical"],
    rating: 4.9,
    isFamilyFriendly: false,
    isLuxuryCruise: true,
    basePrice: 6800, // USD per person
  },
  {
    departureLocation: {
      city: "Lisbon",
      country: "Portugal",
      region: "Lisbon District",
      coordinates: { latitude: 38.7223, longitude: -9.1393 },
      address: "Port of Lisbon",
      postalCode: "1900-268",
      timezone: "Europe/Lisbon",
    },
    arrivalLocation: {
      city: "Rio de Janeiro",
      country: "Brazil",
      region: "Rio de Janeiro State",
      coordinates: { latitude: -22.9068, longitude: -43.1729 },
      timezone: "America/Sao_Paulo",
    },
    category: "luxury",
    itinerary: {
      route: [
        { city: "Lisbon", country: "Portugal" },
        { city: "Funchal", country: "Portugal" },
        { city: "Tenerife", country: "Spain" },
        { city: "Mindelo", country: "Cape Verde" },
        { city: "Recife", country: "Brazil" },
        { city: "Salvador", country: "Brazil" },
        { city: "Rio de Janeiro", country: "Brazil" },
      ],
      description:
        "An epic 21-day transatlantic voyage following historic routes from Europe to South America.",
      distance: "4,800 nautical miles",
      totalDuration: "21 days",
      timeAtSea: [
        {
          start: "2026-03-15T16:00:00+00:00",
          end: "2026-03-16T09:00:00+00:00",
          description: "First leg sailing from Lisbon to Madeira.",
        },
        {
          start: "2026-03-18T18:00:00+00:00",
          end: "2026-03-19T10:00:00+00:00",
          description: "Short journey from Madeira to Tenerife.",
        },
        {
          start: "2026-03-21T17:00:00+00:00",
          end: "2026-03-23T08:00:00-01:00",
          description: "Cruising to Cape Verde islands.",
        },
        {
          start: "2026-03-25T16:00:00-01:00",
          end: "2026-03-30T09:00:00-03:00",
          description: "Transatlantic crossing to Recife, Brazil.",
        },
        {
          start: "2026-04-01T18:00:00-03:00",
          end: "2026-04-03T08:00:00-03:00",
          description: "Coastal sailing to Salvador.",
        },
        {
          start: "2026-04-05T16:00:00-03:00",
          end: "2026-04-07T09:00:00-03:00",
          description: "Final Brazilian coastal journey to Rio de Janeiro.",
        },
      ],
      timeOnLand: [
        {
          start: "2026-03-16T09:00:00+00:00",
          end: "2026-03-18T18:00:00+00:00",
          description:
            "Explore Madeira's botanical gardens and ride traditional toboggans.",
        },
        {
          start: "2026-03-19T10:00:00+00:00",
          end: "2026-03-21T17:00:00+00:00",
          description: "Visit Tenerife's volcanic landscapes and beaches.",
        },
        {
          start: "2026-03-23T08:00:00-01:00",
          end: "2026-03-25T16:00:00-01:00",
          description:
            "Discover Cape Verde's unique blend of African and Portuguese culture.",
        },
        {
          start: "2026-03-30T09:00:00-03:00",
          end: "2026-04-01T18:00:00-03:00",
          description:
            "Experience Recife's vibrant culture and historic architecture.",
        },
        {
          start: "2026-04-03T08:00:00-03:00",
          end: "2026-04-05T16:00:00-03:00",
          description:
            "Explore Salvador's colorful Pelourinho district and Afro-Brazilian culture.",
        },
        {
          start: "2026-04-07T09:00:00-03:00",
          end: "2026-04-05T16:00:00-03:00",
          description:
            "Arrive in magnificent Rio with views of Sugarloaf Mountain and Christ the Redeemer.",
        },
      ],
    },
    requiredDocuments: ["Valid Passport", "Brazilian Visa (if required)"],
    cancellationPolicy: "Partial refund if canceled 90 days before departure",
    tourCategoryId: "ultra-luxury-cruise",
    contactPersonnel: [
      {
        name: "Miguel Oliveira",
        role: "Transatlantic Cruise Director",
        description: "Senior Cruise Director",
        bio: "Specialized in luxury transatlantic cruises with expertise in Portuguese-speaking destinations.",
        languages: ["Portuguese", "English", "Spanish"],
        experienceYears: 18,
        profileImage:
          "https://images.unsplash.com/photo-1560250097-0b93528c311a",
        contact: {
          contactEmail: "miguel.oliveira@lisboncruises.pt",
          contactNumber: "+351 21 333 2211",
        },
      },
    ],
    title: "Transatlantic Odyssey",
    description:
      "Follow the historic routes between the Old and New Worlds on this 21-day luxury voyage from Lisbon to Rio de Janeiro.",
    tags: ["luxury", "transatlantic", "long-duration", "historical", "oceanic"],
    rating: 4.8,
    isFamilyFriendly: false,
    isLuxuryCruise: true,
    basePrice: 9500, // USD per person
  },
  {
    departureLocation: {
      city: "Lisbon",
      country: "Portugal",
      region: "Lisbon District",
      coordinates: { latitude: 38.7223, longitude: -9.1393 },
      address: "Port of Lisbon",
      postalCode: "1900-268",
      timezone: "Europe/Lisbon",
    },
    arrivalLocation: {
      city: "Casablanca",
      country: "Morocco",
      region: "Casablanca-Settat",
      coordinates: { latitude: 33.5731, longitude: -7.5898 },
      timezone: "Africa/Casablanca",
    },
    category: "premium",
    itinerary: {
      route: [
        { city: "Lisbon", country: "Portugal" },
        { city: "Porto", country: "Portugal" },
        { city: "Cádiz", country: "Spain" },
        { city: "Tangier", country: "Morocco" },
        { city: "Casablanca", country: "Morocco" },
      ],
      description:
        "A 9-day Iberian and Moroccan coastal adventure combining European and North African cultures.",
      distance: "850 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
        {
          start: "2026-06-05T16:00:00+01:00",
          end: "2026-06-06T08:00:00+01:00",
          description: "Sailing up the Portuguese coast to Porto.",
        },
        {
          start: "2026-06-08T17:00:00+01:00",
          end: "2026-06-09T09:00:00+02:00",
          description: "Cruising south to historic Cádiz.",
        },
        {
          start: "2026-06-11T18:00:00+02:00",
          end: "2026-06-12T08:00:00+01:00",
          description: "Crossing to Tangier in North Africa.",
        },
        {
          start: "2026-06-13T16:00:00+01:00",
          end: "2026-06-14T09:00:00+01:00",
          description: "Final Moroccan coastal sailing to Casablanca.",
        },
      ],
      timeOnLand: [
        {
          start: "2026-06-06T08:00:00+01:00",
          end: "2026-06-08T17:00:00+01:00",
          description: "Experience Porto's historic center and wine cellars.",
        },
        {
          start: "2026-06-09T09:00:00+02:00",
          end: "2026-06-11T18:00:00+02:00",
          description: "Discover Cádiz's ancient streets and golden beaches.",
        },
        {
          start: "2026-06-12T08:00:00+01:00",
          end: "2026-06-13T16:00:00+01:00",
          description: "Explore Tangier's medina and international history.",
        },
        {
          start: "2026-06-14T09:00:00+01:00",
          end: "2026-06-14T17:00:00+01:00",
          description:
            "Visit Casablanca's Hassan II Mosque and Art Deco architecture.",
        },
      ],
    },
    requiredDocuments: ["Valid Passport", "Moroccan Visa (if required)"],
    cancellationPolicy: "Partial refund if canceled 30 days before departure",
    tourCategoryId: "premium-cruise",
    contactPersonnel: [
      {
        name: "Sofia Martins",
        role: "Cultural Cruise Specialist",
        description: "Cultural Cruise Manager",
        bio: "Expert in Portuguese-Moroccan cultural destinations with 9 years in tourism.",
        languages: ["Portuguese", "English", "Spanish", "Arabic"],
        experienceYears: 9,
        profileImage:
          "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f",
        contact: {
          contactEmail: "sofia.martins@lisboncruises.pt",
          contactNumber: "+351 21 777 6655",
        },
      },
    ],
    title: "Iberian & Moroccan Explorer",
    description:
      "A 9-day premium journey through Portugal, Spain, and Morocco, showcasing diverse cultures and historic ports.",
    tags: ["premium", "cultural", "Iberian", "North African", "historical"],
    rating: 4.7,
    isFamilyFriendly: true,
    isLuxuryCruise: false,
    basePrice: 3200, // USD per person
  },
  {
    departureLocation: {
      city: "Lisbon",
      country: "Portugal",
      region: "Lisbon District",
      coordinates: { latitude: 38.7223, longitude: -9.1393 },
      address: "Port of Lisbon",
      postalCode: "1900-268",
      timezone: "Europe/Lisbon",
    },
    arrivalLocation: {
      city: "Athens",
      country: "Greece",
      region: "Attica",
      coordinates: { latitude: 37.9838, longitude: 23.7275 },
      timezone: "Europe/Athens",
    },
    category: "luxury",
    itinerary: {
      route: [
        { city: "Lisbon", country: "Portugal" },
        { city: "Valencia", country: "Spain" },
        { city: "Naples", country: "Italy" },
        { city: "Dubrovnik", country: "Croatia" },
        { city: "Corfu", country: "Greece" },
        { city: "Santorini", country: "Greece" },
        { city: "Athens", country: "Greece" },
      ],
      description:
        "An 18-day luxury Mediterranean odyssey from Western Europe to the cradle of civilization.",
      distance: "2,600 nautical miles",
      totalDuration: "18 days",
      timeAtSea: [
        {
          start: "2026-09-10T17:00:00+01:00",
          end: "2026-09-12T08:00:00+02:00",
          description: "Sailing from Lisbon to Valencia.",
        },
        {
          start: "2026-09-14T19:00:00+02:00",
          end: "2026-09-16T08:00:00+02:00",
          description: "Mediterranean crossing to Naples.",
        },
        {
          start: "2026-09-19T16:00:00+02:00",
          end: "2026-09-20T09:00:00+02:00",
          description: "Adriatic sailing to Dubrovnik.",
        },
        {
          start: "2026-09-22T17:00:00+02:00",
          end: "2026-09-23T08:00:00+03:00",
          description: "Crossing to Corfu in the Ionian Sea.",
        },
        {
          start: "2026-09-25T18:00:00+03:00",
          end: "2026-09-26T09:00:00+03:00",
          description: "Sailing through the Greek Islands to Santorini.",
        },
        {
          start: "2026-09-28T16:00:00+03:00",
          end: "2026-09-29T08:00:00+03:00",
          description: "Final Aegean crossing to Athens.",
        },
      ],
      timeOnLand: [
        {
          start: "2026-09-12T08:00:00+02:00",
          end: "2026-09-14T19:00:00+02:00",
          description:
            "Discover Valencia's futuristic City of Arts and Sciences.",
        },
        {
          start: "2026-09-16T08:00:00+02:00",
          end: "2026-09-19T16:00:00+02:00",
          description: "Explore Naples, Pompeii, and the Amalfi Coast.",
        },
        {
          start: "2026-09-20T09:00:00+02:00",
          end: "2026-09-22T17:00:00+02:00",
          description: "Walk Dubrovnik's ancient walls and marble streets.",
        },
        {
          start: "2026-09-23T08:00:00+03:00",
          end: "2026-09-25T18:00:00+03:00",
          description:
            "Experience Corfu's Venetian architecture and olive groves.",
        },
        {
          start: "2026-09-26T09:00:00+03:00",
          end: "2026-09-28T16:00:00+03:00",
          description:
            "Enjoy Santorini's iconic whitewashed villages and caldera views.",
        },
        {
          start: "2026-09-29T08:00:00+03:00",
          end: "2026-09-28T17:00:00+03:00",
          description:
            "Discover Athens' ancient Acropolis and vibrant modern culture.",
        },
      ],
    },
    requiredDocuments: ["Valid Passport", "Schengen Visa (if applicable)"],
    cancellationPolicy: "Full refund if canceled 75 days before departure",
    tourCategoryId: "ultra-luxury-cruise",
    contactPersonnel: [
      {
        name: "Elena Papadopoulos",
        role: "Mediterranean Luxury Director",
        description: "Senior Luxury Cruise Director",
        bio: "Mediterranean cruise expert with 16+ years of experience across Southern Europe and Greece.",
        languages: ["Portuguese", "English", "Spanish", "Italian", "Greek"],
        experienceYears: 16,
        profileImage:
          "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2",
        contact: {
          contactEmail: "elena.papadopoulos@lisboncruises.pt",
          contactNumber: "+351 21 444 5533",
        },
      },
    ],
    title: "Mediterranean Grand Odyssey",
    description:
      "An 18-day luxury voyage spanning the Mediterranean from Lisbon to Athens, immersed in ancient history and stunning landscapes.",
    tags: ["luxury", "Mediterranean", "cultural", "historical", "islands"],
    rating: 4.9,
    isFamilyFriendly: false,
    isLuxuryCruise: true,
    basePrice: 10800, // USD per person
  },
  {
    departureLocation: {
      city: "Lisbon",
      country: "Portugal",
      region: "Lisbon District",
      coordinates: { latitude: 38.7223, longitude: -9.1393 },
      address: "Port of Lisbon",
      postalCode: "1900-268",
      timezone: "Europe/Lisbon",
    },
    arrivalLocation: {
      city: "Copenhagen",
      country: "Denmark",
      region: "Capital Region",
      coordinates: { latitude: 55.6761, longitude: 12.5683 },
      timezone: "Europe/Copenhagen",
    },
    category: "luxury",
    itinerary: {
      route: [
        { city: "Lisbon", country: "Portugal" },
        { city: "Porto", country: "Portugal" },
        { city: "La Coruña", country: "Spain" },
        { city: "Bordeaux", country: "France" },
        { city: "London", country: "United Kingdom" },
        { city: "Amsterdam", country: "Netherlands" },
        { city: "Copenhagen", country: "Denmark" },
      ],
      description:
        "A 12-day luxury journey along Europe's Atlantic coast from Lisbon to Copenhagen.",
      distance: "1,950 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
        {
          start: "2026-07-05T16:00:00+01:00",
          end: "2026-07-06T08:00:00+01:00",
          description: "Sailing north along the Portuguese coast.",
        },
        {
          start: "2026-07-07T16:00:00+01:00",
          end: "2026-07-08T09:00:00+02:00",
          description: "Cruising from Porto to La Coruña.",
        },
        {
          start: "2026-07-09T17:00:00+02:00",
          end: "2026-07-10T10:00:00+02:00",
          description: "Sailing across the Bay of Biscay to Bordeaux.",
        },
        {
          start: "2026-07-12T16:00:00+02:00",
          end: "2026-07-13T09:00:00+01:00",
          description: "Crossing the English Channel to London.",
        },
        {
          start: "2026-07-14T18:00:00+01:00",
          end: "2026-07-15T08:00:00+02:00",
          description: "North Sea crossing to Amsterdam.",
        },
        {
          start: "2026-07-16T17:00:00+02:00",
          end: "2026-07-17T09:00:00+02:00",
          description: "Final leg to Copenhagen.",
        },
      ],
      timeOnLand: [
        {
          start: "2026-07-06T08:00:00+01:00",
          end: "2026-07-07T16:00:00+01:00",
          description:
            "Experience Porto's historic Ribeira district and port wine cellars.",
        },
        {
          start: "2026-07-08T09:00:00+02:00",
          end: "2026-07-09T17:00:00+02:00",
          description:
            "Explore La Coruña's Roman lighthouse and Galician culture.",
        },
        {
          start: "2026-07-10T10:00:00+02:00",
          end: "2026-07-12T16:00:00+02:00",
          description:
            "Discover Bordeaux's vineyards and elegant architecture.",
        },
        {
          start: "2026-07-13T09:00:00+01:00",
          end: "2026-07-14T18:00:00+01:00",
          description:
            "Visit London's iconic landmarks and world-class museums.",
        },
        {
          start: "2026-07-15T08:00:00+02:00",
          end: "2026-07-16T17:00:00+02:00",
          description:
            "Experience Amsterdam's canals, museums, and cycling culture.",
        },
        {
          start: "2026-07-17T09:00:00+02:00",
          end: "2026-07-17T16:00:00+02:00",
          description: "Arrive in Copenhagen's colorful Nyhavn district.",
        },
      ],
    },
    requiredDocuments: [
      "Valid Passport",
      "Schengen Visa (if applicable)",
      "UK Visa (if required)",
    ],
    cancellationPolicy: "Full refund if canceled 60 days before departure",
    tourCategoryId: "luxury-cruise",
    contactPersonnel: [
      {
        name: "Henrik Larsen",
        role: "Northern Europe Specialist",
        description: "Senior Cruise Director",
        bio: "Specialist in Atlantic European coastal cruises with 12 years of experience.",
        languages: ["Portuguese", "English", "French", "Danish"],
        experienceYears: 12,
        profileImage:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
        contact: {
          contactEmail: "henrik.larsen@lisboncruises.pt",
          contactNumber: "+351 21 666 7788",
        },
      },
    ],
    title: "European Atlantic Capitals",
    description:
      "A 12-day luxury voyage connecting the great capitals and wine regions of Western Europe's Atlantic coast.",
    tags: ["luxury", "European", "capitals", "wine", "cultural"],
    rating: 4.8,
    isFamilyFriendly: false,
    isLuxuryCruise: true,
    basePrice: 7200, // USD per person
  },
];
