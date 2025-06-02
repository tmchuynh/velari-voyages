import { Cruise } from "@/lib/interfaces/services/cruises";

export const newYorkCityCruises: Cruise[] = [
  {
    departureLocation: {
      city: "New York City",
      country: "USA",
      state: "NY",
      region: "Northeast",
      coordinates: { latitude: 40.7128, longitude: -74.006 },
      address: "Cape Liberty Cruise Port, Port of Bayonne, NJ",
      postalCode: "07002",
      timezone: "America/New_York",
      additionalInfo:
        "Primary cruise terminal for NYC-area departures, located just across the Hudson River in Bayonne, NJ.",
    },
    arrivalLocation: {
      city: "Bermuda",
      country: "Bermuda",
      coordinates: { latitude: 32.3078, longitude: -64.7505 },
      timezone: "Atlantic/Bermuda",
    },
    category: "premium",
    itinerary: {
      route: [
        { city: "New York City", country: "USA" },
        { city: "Bermuda", country: "Bermuda" },
        { city: "New York City", country: "USA" },
      ],
      description:
        "7-night premium cruise from NYC to Bermuda, featuring ocean views and luxury amenities.",
      distance: "770 nautical miles",
      totalDuration: "7 days",
      timeAtSea: [
        {
          start: "2025-09-01T16:00:00-04:00",
          end: "2025-09-05T08:00:00-04:00",
          description: "Days cruising the Atlantic Ocean",
        },
        {
          start: "2025-09-06T20:00:00-04:00",
          end: "2025-09-07T10:00:00-04:00",
          description: "Return sailing to NYC",
        },
      ],
      timeOnLand: [
        {
          start: "2025-09-05T08:00:00-04:00",
          end: "2025-09-06T20:00:00-04:00",
          description: "Explore Bermuda’s beaches and culture",
        },
      ],
    },
    requiredDocuments: ["Valid Passport"],
    cancellationPolicy: "Full refund if canceled 60 days prior to departure",
    tourCategoryId: "luxury-cruise",
    contactPersonnel: [
      {
        name: "Rachel Adams",
        role: "Senior Cruise Coordinator",
        description: "Senior Cruise Coordinator",
        bio: "Specialist in premium Atlantic cruises with 8+ years in the travel industry.",
        languages: ["English"],
        experienceYears: 8,
        profileImage:
          "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91",
        contact: {
          contactEmail: "rachel.adams@nycruises.com",
          contactNumber: "+1 212-555-7890",
        },
      },
    ],
    title: "New York to Bermuda Premium Cruise",
    description:
      "Relax and unwind on this 7-night cruise to Bermuda, departing from the NYC area with premium onboard services and shore excursions.",
    tags: ["premium", "bermuda", "atlantic", "luxury"],
    rating: 4.7,
    isLuxuryCruise: true,
    isFamilyFriendly: true,
    basePrice: 1799,
  },
  {
    departureLocation: {
      city: "New York City",
      country: "USA",
      state: "NY",
      region: "Northeast",
      coordinates: { latitude: 40.7128, longitude: -74.006 },
      address: "Manhattan Cruise Terminal, Pier 88",
      postalCode: "10019",
      timezone: "America/New_York",
      additionalInfo: "Easily accessible via NYC subway and bus lines.",
    },
    arrivalLocation: {
      city: "Nassau",
      country: "Bahamas",
      coordinates: { latitude: 25.0343, longitude: -77.3963 },
      timezone: "America/Nassau",
    },
    category: "mainstream",
    itinerary: {
      route: [
        { city: "New York City", country: "USA" },
        { city: "Nassau", country: "Bahamas" },
        { city: "New York City", country: "USA" },
      ],
      description:
        "A 5-night affordable Caribbean cruise ideal for families and first-time travelers.",
      distance: "1,090 nautical miles",
      totalDuration: "5 days",
      timeAtSea: [
        {
          start: "2025-10-10T17:00:00-04:00",
          end: "2025-10-13T08:00:00-04:00",
          description: "Sail south through the Atlantic to the Bahamas.",
        },
        {
          start: "2025-10-14T17:00:00-04:00",
          end: "2025-10-15T08:00:00-04:00",
          description: "Return voyage to New York.",
        },
      ],
      timeOnLand: [
        {
          start: "2025-10-13T08:00:00-04:00",
          end: "2025-10-14T17:00:00-04:00",
          description: "Relax on Nassau’s beaches or explore downtown shops.",
        },
      ],
    },
    requiredDocuments: [
      "Passport or government-issued photo ID with birth certificate",
    ],
    cancellationPolicy:
      "Refundable up to 30 days before departure minus a small service fee",
    tourCategoryId: "tropical-cruise",
    contactPersonnel: [
      {
        name: "Marcus Lee",
        role: "Cruise Agent – Caribbean Division",
        description: "Cruise Agent – Caribbean Division",
        bio: "Expert in affordable travel experiences with 5+ years in customer-focused cruise planning.",
        languages: ["English", "Spanish"],
        experienceYears: 5,
        profileImage:
          "https://images.unsplash.com/photo-1520975911115-44e00f3bafd5",
        contact: {
          contactEmail: "marcus.lee@mainstreamcruises.com",
          contactNumber: "+1 718-555-4521",
        },
      },
    ],
    title: "NYC to Bahamas mainstream Escape",
    description:
      "This short and mainstream-friendly cruise from NYC to the Bahamas is packed with sun, fun, and value. Great for families or first-time cruisers.",
    tags: ["mainstream", "bahamas", "family", "caribbean"],
    rating: 4.2,
    isLuxuryCruise: false,
    isFamilyFriendly: true,
    basePrice: 749,
  },
  {
    departureLocation: {
      city: "New York City",
      country: "USA",
      state: "NY",
      region: "Northeast",
      coordinates: { latitude: 40.7128, longitude: -74.006 },
      address: "Brooklyn Cruise Terminal, Red Hook",
      postalCode: "11231",
      timezone: "America/New_York",
      additionalInfo:
        "Located in Brooklyn’s Red Hook neighborhood, convenient for luxury departures.",
    },
    arrivalLocation: {
      city: "Bar Harbor",
      country: "USA",
      coordinates: { latitude: 44.3876, longitude: -68.2039 },
      timezone: "America/New_York",
    },
    category: "luxury",
    itinerary: {
      route: [
        { city: "New York City", country: "USA" },
        { city: "Newport", country: "USA" },
        { city: "Boston", country: "USA" },
        { city: "Bar Harbor", country: "USA" },
        { city: "New York City", country: "USA" },
      ],
      description:
        "A scenic fall foliage cruise through the New England coast with luxury accommodations and gourmet dining.",
      distance: "1,100 nautical miles",
      totalDuration: "8 days",
      timeAtSea: [
        {
          start: "2025-10-05T18:00:00-04:00",
          end: "2025-10-06T08:00:00-04:00",
          description: "Sail past Long Island Sound toward Rhode Island.",
        },
        {
          start: "2025-10-11T18:00:00-04:00",
          end: "2025-10-12T08:00:00-04:00",
          description: "Return cruise along the vibrant coast of Maine.",
        },
      ],
      timeOnLand: [
        {
          start: "2025-10-06T08:00:00-04:00",
          end: "2025-10-11T18:00:00-04:00",
          description:
            "Visit Newport mansions, Boston’s historic Freedom Trail, and Acadia National Park in Bar Harbor.",
        },
      ],
    },
    requiredDocuments: ["Government-issued photo ID"],
    cancellationPolicy:
      "Full refund with travel credit option up to 45 days in advance",
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Elaine Carter",
        role: "Luxury Cruise Director",
        description: "Luxury Cruise Director",
        bio: "Seasoned specialist in high-end U.S. coastal cruises with a decade of experience.",
        languages: ["English", "French"],
        experienceYears: 10,
        profileImage:
          "https://images.unsplash.com/photo-1603415526960-f8f3b5fdd4fa",
        contact: {
          contactEmail: "elaine.carter@luxvoyages.com",
          contactNumber: "+1 646-555-9012",
        },
      },
    ],
    title: "Fall Foliage Coastal Luxury Cruise",
    description:
      "Witness the beauty of New England's autumn colors aboard a luxurious ship with refined service, gourmet meals, and exclusive shore excursions.",
    tags: ["luxury", "fall foliage", "new england", "coastal"],
    rating: 4.9,
    isLuxuryCruise: true,
    isFamilyFriendly: false,
    basePrice: 2899,
  },
  {
    departureLocation: {
      city: "New York City",
      country: "USA",
      state: "NY",
      region: "Northeast",
      coordinates: { latitude: 40.7128, longitude: -74.006 },
      address: "Manhattan Cruise Terminal, Pier 90",
      postalCode: "10019",
      timezone: "America/New_York",
      additionalInfo:
        "Luxury terminal with VIP check-in facilities and premium lounge access.",
    },
    arrivalLocation: {
      city: "Southampton",
      country: "United Kingdom",
      region: "England",
      coordinates: { latitude: 50.9097, longitude: -1.4044 },
      timezone: "Europe/London",
    },
    category: "luxury",
    itinerary: {
      route: [
        { city: "New York City", country: "USA" },
        { city: "Halifax", country: "Canada" },
        { city: "St. John's", country: "Canada" },
        { city: "Reykjavik", country: "Iceland" },
        { city: "Belfast", country: "United Kingdom" },
        { city: "Liverpool", country: "United Kingdom" },
        { city: "Southampton", country: "United Kingdom" },
      ],
      description:
        "A 14-day transatlantic voyage combining North American ports, Iceland, and the British Isles.",
      distance: "3,800 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
        {
          start: "2026-06-05T17:00:00-04:00",
          end: "2026-06-06T08:00:00-03:00",
          description: "Cruising north along the Atlantic coast to Halifax.",
        },
        {
          start: "2026-06-07T19:00:00-03:00",
          end: "2026-06-08T10:00:00-02:30",
          description: "Sailing to Newfoundland's capital, St. John's.",
        },
        {
          start: "2026-06-09T18:00:00-02:30",
          end: "2026-06-12T09:00:00+00:00",
          description: "Crossing the North Atlantic to Iceland.",
        },
        {
          start: "2026-06-14T20:00:00+00:00",
          end: "2026-06-16T07:00:00+01:00",
          description: "Sailing south to Belfast, Northern Ireland.",
        },
        {
          start: "2026-06-17T17:00:00+01:00",
          end: "2026-06-18T08:00:00+01:00",
          description: "Coastal cruise to Liverpool, England.",
        },
        {
          start: "2026-06-19T16:00:00+01:00",
          end: "2026-06-20T08:00:00+01:00",
          description: "Final sailing along England's coast to Southampton.",
        },
      ],
      timeOnLand: [
        {
          start: "2026-06-06T08:00:00-03:00",
          end: "2026-06-07T19:00:00-03:00",
          description: "Explore Halifax's historic waterfront and citadel.",
        },
        {
          start: "2026-06-08T10:00:00-02:30",
          end: "2026-06-09T18:00:00-02:30",
          description: "Discover St. John's colorful houses and Signal Hill.",
        },
        {
          start: "2026-06-12T09:00:00+00:00",
          end: "2026-06-14T20:00:00+00:00",
          description:
            "Experience Reykjavik's geothermal wonders and Nordic culture.",
        },
        {
          start: "2026-06-16T07:00:00+01:00",
          end: "2026-06-17T17:00:00+01:00",
          description:
            "Visit Belfast's Titanic Quarter and historic landmarks.",
        },
        {
          start: "2026-06-18T08:00:00+01:00",
          end: "2026-06-19T16:00:00+01:00",
          description:
            "Explore Liverpool's maritime history and Beatles heritage.",
        },
        {
          start: "2026-06-20T08:00:00+01:00",
          end: "2026-06-20T17:00:00+01:00",
          description:
            "Arrive in Southampton with time to visit the historic city center.",
        },
      ],
    },
    requiredDocuments: [
      "Valid Passport",
      "UK Visa (if required)",
      "ETA for Canada",
    ],
    cancellationPolicy: "Full refund if canceled 90 days prior to departure",
    tourCategoryId: "transatlantic-cruise",
    contactPersonnel: [
      {
        name: "Jonathan Winters",
        role: "Transatlantic Cruise Director",
        description: "Senior Cruise Director",
        bio: "Specialist in luxury transatlantic voyages with 15+ years of experience in premium cruise management.",
        languages: ["English", "French", "Icelandic"],
        experienceYears: 15,
        profileImage:
          "https://images.unsplash.com/photo-1566492031773-4f4e44671857",
        contact: {
          contactEmail: "j.winters@oceanvoyages.com",
          contactNumber: "+1 212-555-3456",
        },
      },
    ],
    title: "Transatlantic Heritage Voyage",
    description:
      "Experience the historic North Atlantic crossing on this 14-day luxury journey from New York to Southampton, with ports in Canada, Iceland, and the British Isles.",
    tags: ["luxury", "transatlantic", "iceland", "british isles", "heritage"],
    rating: 4.8,
    isLuxuryCruise: true,
    isFamilyFriendly: false,
    basePrice: 6899, // USD
  },
  {
    departureLocation: {
      city: "New York City",
      country: "USA",
      state: "NY",
      region: "Northeast",
      coordinates: { latitude: 40.7128, longitude: -74.006 },
      address: "Cape Liberty Cruise Port, Port of Bayonne, NJ",
      postalCode: "07002",
      timezone: "America/New_York",
      additionalInfo: "Spacious terminal with easy access from Manhattan.",
    },
    arrivalLocation: {
      city: "Quebec City",
      country: "Canada",
      region: "Quebec",
      coordinates: { latitude: 46.8139, longitude: -71.208 },
      timezone: "America/Toronto",
    },
    category: "premium",
    itinerary: {
      route: [
        { city: "New York City", country: "USA" },
        { city: "Boston", country: "USA" },
        { city: "Bar Harbor", country: "USA" },
        { city: "Halifax", country: "Canada" },
        { city: "Charlottetown", country: "Canada" },
        { city: "Quebec City", country: "Canada" },
      ],
      description:
        "A 9-day fall foliage premium cruise along the scenic Northeastern coast to historic Quebec City.",
      distance: "1,580 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
        {
          start: "2026-09-25T16:00:00-04:00",
          end: "2026-09-26T08:00:00-04:00",
          description: "Sail from New York to Boston along the Atlantic coast.",
        },
        {
          start: "2026-09-27T18:00:00-04:00",
          end: "2026-09-28T07:00:00-04:00",
          description: "Cruising from Boston to Bar Harbor.",
        },
        {
          start: "2026-09-29T16:00:00-04:00",
          end: "2026-09-30T08:00:00-03:00",
          description: "Sailing from Bar Harbor to Halifax.",
        },
        {
          start: "2026-10-01T19:00:00-03:00",
          end: "2026-10-02T08:00:00-03:00",
          description:
            "Cruise through the Gulf of St. Lawrence to Prince Edward Island.",
        },
        {
          start: "2026-10-03T17:00:00-03:00",
          end: "2026-10-04T08:00:00-04:00",
          description:
            "Final sailing up the St. Lawrence River to Quebec City.",
        },
      ],
      timeOnLand: [
        {
          start: "2026-09-26T08:00:00-04:00",
          end: "2026-09-27T18:00:00-04:00",
          description: "Explore Boston's Freedom Trail and historic sites.",
        },
        {
          start: "2026-09-28T07:00:00-04:00",
          end: "2026-09-29T16:00:00-04:00",
          description: "Visit Acadia National Park and downtown Bar Harbor.",
        },
        {
          start: "2026-09-30T08:00:00-03:00",
          end: "2026-10-01T19:00:00-03:00",
          description: "Discover Halifax's maritime heritage and Peggy's Cove.",
        },
        {
          start: "2026-10-02T08:00:00-03:00",
          end: "2026-10-03T17:00:00-03:00",
          description:
            "Experience Charlottetown's Victorian charm and Anne of Green Gables heritage.",
        },
        {
          start: "2026-10-04T08:00:00-04:00",
          end: "2026-10-04T18:00:00-04:00",
          description:
            "Arrive in Quebec City, exploring Old Quebec and the Château Frontenac.",
        },
      ],
    },
    requiredDocuments: ["Valid Passport", "ETA for Canada"],
    cancellationPolicy: "Full refund if canceled 60 days prior to departure",
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Monique Tremblay",
        role: "Canadian Destinations Specialist",
        description: "Senior Cruise Coordinator",
        bio: "Canadian tourism expert with 9 years specializing in Northeastern cruise routes.",
        languages: ["English", "French"],
        experienceYears: 9,
        profileImage:
          "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f",
        contact: {
          contactEmail: "m.tremblay@northeastcruises.com",
          contactNumber: "+1 212-555-6789",
        },
      },
    ],
    title: "Autumn Colors of New England & Canada",
    description:
      "Experience the spectacular fall foliage along the coast of New England and Eastern Canada on this 9-day premium voyage.",
    tags: ["premium", "fall foliage", "canada", "new england", "autumn"],
    rating: 4.7,
    isLuxuryCruise: false,
    isFamilyFriendly: true,
    basePrice: 3499, // USD
  },
  {
    departureLocation: {
      city: "New York City",
      country: "USA",
      state: "NY",
      region: "Northeast",
      coordinates: { latitude: 40.7128, longitude: -74.006 },
      address: "Manhattan Cruise Terminal, Pier 90",
      postalCode: "10019",
      timezone: "America/New_York",
      additionalInfo: "Exclusive terminal for ultra-luxury departures.",
    },
    arrivalLocation: {
      city: "Miami",
      country: "USA",
      state: "FL",
      region: "Southeast",
      coordinates: { latitude: 25.7617, longitude: -80.1918 },
      timezone: "America/New_York",
    },
    category: "luxury",
    itinerary: {
      route: [
        { city: "New York City", country: "USA" },
        { city: "Charleston", country: "USA" },
        { city: "Port Canaveral", country: "USA" },
        { city: "Key West", country: "USA" },
        { city: "Havana", country: "Cuba" },
        { city: "George Town", country: "Cayman Islands" },
        { city: "Cozumel", country: "Mexico" },
        { city: "Miami", country: "USA" },
      ],
      description:
        "An 18-day Eastern Seaboard and Caribbean luxury exploration from NYC to Miami.",
      distance: "2,900 nautical miles",
      totalDuration: "18 days",
      timeAtSea: [
        {
          start: "2026-01-10T16:00:00-05:00",
          end: "2026-01-12T08:00:00-05:00",
          description: "Cruising from New York City to historic Charleston.",
        },
        {
          start: "2026-01-14T17:00:00-05:00",
          end: "2026-01-15T09:00:00-05:00",
          description: "Sailing south along Florida's coast to Port Canaveral.",
        },
        {
          start: "2026-01-17T16:00:00-05:00",
          end: "2026-01-18T09:00:00-05:00",
          description: "Cruising to the southern tip of Florida to Key West.",
        },
        {
          start: "2026-01-19T18:00:00-05:00",
          end: "2026-01-20T08:00:00-05:00",
          description: "Crossing the Florida Straits to Havana, Cuba.",
        },
        {
          start: "2026-01-22T20:00:00-05:00",
          end: "2026-01-23T09:00:00-05:00",
          description: "Caribbean sailing to Grand Cayman.",
        },
        {
          start: "2026-01-25T17:00:00-05:00",
          end: "2026-01-26T08:00:00-06:00",
          description: "Journey across the Caribbean to Cozumel, Mexico.",
        },
        {
          start: "2026-01-28T16:00:00-06:00",
          end: "2026-01-29T09:00:00-05:00",
          description: "Final cruise across the Gulf of Mexico to Miami.",
        },
      ],
      timeOnLand: [
        {
          start: "2026-01-12T08:00:00-05:00",
          end: "2026-01-14T17:00:00-05:00",
          description:
            "Explore Charleston's historic district and antebellum architecture.",
        },
        {
          start: "2026-01-15T09:00:00-05:00",
          end: "2026-01-17T16:00:00-05:00",
          description: "Visit Kennedy Space Center and nearby attractions.",
        },
        {
          start: "2026-01-18T09:00:00-05:00",
          end: "2026-01-19T18:00:00-05:00",
          description: "Discover Key West's Hemingway Home and Duval Street.",
        },
        {
          start: "2026-01-20T08:00:00-05:00",
          end: "2026-01-22T20:00:00-05:00",
          description:
            "Experience Havana's vintage cars, culture, and history.",
        },
        {
          start: "2026-01-23T09:00:00-05:00",
          end: "2026-01-25T17:00:00-05:00",
          description:
            "Enjoy Grand Cayman's Seven Mile Beach and crystal-clear waters.",
        },
        {
          start: "2026-01-26T08:00:00-06:00",
          end: "2026-01-28T16:00:00-06:00",
          description: "Explore Cozumel's Mayan ruins and vibrant coral reefs.",
        },
        {
          start: "2026-01-29T09:00:00-05:00",
          end: "2026-01-29T17:00:00-05:00",
          description: "Arrival in Miami's vibrant port.",
        },
      ],
    },
    requiredDocuments: [
      "Valid Passport",
      "Cuban Tourist Card",
      "Mexican Tourist Card",
    ],
    cancellationPolicy: "Full refund if canceled 90 days prior to departure",
    tourCategoryId: "ultra-luxury-cruise",
    contactPersonnel: [
      {
        name: "Eduardo Ramirez",
        role: "Caribbean Luxury Director",
        description: "Senior Luxury Cruise Director",
        bio: "Caribbean travel specialist with 17 years of experience in luxury cruise coordination.",
        languages: ["English", "Spanish", "French"],
        experienceYears: 17,
        profileImage:
          "https://images.unsplash.com/photo-1560250097-0b93528c311a",
        contact: {
          contactEmail: "e.ramirez@elitevoyages.com",
          contactNumber: "+1 212-555-8901",
        },
      },
    ],
    title: "Eastern Seaboard & Caribbean Grandeur",
    description:
      "An 18-day ultra-luxury journey from NYC to Miami, exploring the historic cities of the Eastern Seaboard and the gems of the Caribbean.",
    tags: ["luxury", "caribbean", "cuba", "historic", "eastern seaboard"],
    rating: 4.9,
    isLuxuryCruise: true,
    isFamilyFriendly: false,
    basePrice: 12500, // USD
  },
  {
    departureLocation: {
      city: "New York City",
      country: "USA",
      state: "NY",
      region: "Northeast",
      coordinates: { latitude: 40.7128, longitude: -74.006 },
      address: "Brooklyn Cruise Terminal, Red Hook",
      postalCode: "11231",
      timezone: "America/New_York",
      additionalInfo: "Modern terminal with convenient parking.",
    },
    arrivalLocation: {
      city: "San Francisco",
      country: "USA",
      state: "CA",
      region: "West Coast",
      coordinates: { latitude: 37.7749, longitude: -122.4194 },
      timezone: "America/Los_Angeles",
    },
    category: "luxury",
    itinerary: {
      route: [
        { city: "New York City", country: "USA" },
        { city: "Fort Lauderdale", country: "USA" },
        { city: "Cartagena", country: "Colombia" },
        { city: "Panama Canal", country: "Panama" },
        { city: "Puntarenas", country: "Costa Rica" },
        { city: "Puerto Quetzal", country: "Guatemala" },
        { city: "Puerto Vallarta", country: "Mexico" },
        { city: "Cabo San Lucas", country: "Mexico" },
        { city: "San Francisco", country: "USA" },
      ],
      description:
        "A 21-day voyage from coast to coast, featuring a Panama Canal transit and the best of Latin America.",
      distance: "5,900 nautical miles",
      totalDuration: "21 days",
      timeAtSea: [
        {
          start: "2026-02-05T17:00:00-05:00",
          end: "2026-02-08T08:00:00-05:00",
          description: "Sailing south along the Atlantic coast to Florida.",
        },
        {
          start: "2026-02-10T16:00:00-05:00",
          end: "2026-02-12T09:00:00-05:00",
          description: "Caribbean crossing to Colombia.",
        },
        {
          start: "2026-02-14T18:00:00-05:00",
          end: "2026-02-15T06:00:00-05:00",
          description: "Approaching the Panama Canal.",
        },
        {
          start: "2026-02-15T18:00:00-05:00",
          end: "2026-02-17T08:00:00-06:00",
          description: "Pacific sailing to Costa Rica.",
        },
        {
          start: "2026-02-18T17:00:00-06:00",
          end: "2026-02-19T09:00:00-06:00",
          description: "Cruising to Guatemala's Pacific coast.",
        },
        {
          start: "2026-02-21T16:00:00-06:00",
          end: "2026-02-23T08:00:00-06:00",
          description: "Pacific Ocean sailing to Puerto Vallarta.",
        },
        {
          start: "2026-02-24T20:00:00-06:00",
          end: "2026-02-25T08:00:00-07:00",
          description: "Cruising to Cabo San Lucas at Baja's southern tip.",
        },
        {
          start: "2026-02-26T18:00:00-07:00",
          end: "2026-02-28T08:00:00-08:00",
          description: "Final Pacific sailing to San Francisco.",
        },
      ],
      timeOnLand: [
        {
          start: "2026-02-08T08:00:00-05:00",
          end: "2026-02-10T16:00:00-05:00",
          description: "Explore Fort Lauderdale's canals and beaches.",
        },
        {
          start: "2026-02-12T09:00:00-05:00",
          end: "2026-02-14T18:00:00-05:00",
          description:
            "Discover Cartagena's UNESCO-listed walled city and colonial architecture.",
        },
        {
          start: "2026-02-15T06:00:00-05:00",
          end: "2026-02-15T18:00:00-05:00",
          description:
            "Experience the engineering marvel of the Panama Canal transit.",
        },
        {
          start: "2026-02-17T08:00:00-06:00",
          end: "2026-02-18T17:00:00-06:00",
          description: "Visit Costa Rica's rainforests and wildlife.",
        },
        {
          start: "2026-02-19T09:00:00-06:00",
          end: "2026-02-21T16:00:00-06:00",
          description:
            "Explore Guatemala's indigenous culture and volcanic landscapes.",
        },
        {
          start: "2026-02-23T08:00:00-06:00",
          end: "2026-02-24T20:00:00-06:00",
          description: "Enjoy Puerto Vallarta's beaches and downtown.",
        },
        {
          start: "2026-02-25T08:00:00-07:00",
          end: "2026-02-26T18:00:00-07:00",
          description:
            "Experience Cabo's dramatic Land's End rock formations and beaches.",
        },
        {
          start: "2026-02-28T08:00:00-08:00",
          end: "2026-02-28T17:00:00-08:00",
          description:
            "Arrival under the Golden Gate Bridge into San Francisco Bay.",
        },
      ],
    },
    requiredDocuments: [
      "Valid Passport",
      "Tourist Cards for Mexico, Guatemala, Costa Rica (if required)",
    ],
    cancellationPolicy:
      "Partial refund if canceled 120 days prior to departure",
    tourCategoryId: "panama-canal-cruise",
    contactPersonnel: [
      {
        name: "Isabella Santos",
        role: "Panama Canal Specialist",
        description: "Senior Cruise Director",
        bio: "Expert in Panama Canal crossings with 14 years of experience in Latin American cruise destinations.",
        languages: ["English", "Spanish", "Portuguese"],
        experienceYears: 14,
        profileImage:
          "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e",
        contact: {
          contactEmail: "i.santos@panamacruises.com",
          contactNumber: "+1 212-555-2345",
        },
      },
    ],
    title: "Grand Coast-to-Coast Panama Canal Voyage",
    description:
      "Journey from the Atlantic to the Pacific on this epic 21-day cruise featuring a Panama Canal transit and the diverse cultures of Latin America.",
    tags: ["luxury", "panama canal", "latin america", "coast to coast"],
    rating: 4.9,
    isLuxuryCruise: true,
    isFamilyFriendly: false,
    basePrice: 8900, // USD
  },
  {
    departureLocation: {
      city: "New York City",
      country: "USA",
      state: "NY",
      region: "Northeast",
      coordinates: { latitude: 40.7128, longitude: -74.006 },
      address: "Manhattan Cruise Terminal, Pier 90",
      postalCode: "10019",
      timezone: "America/New_York",
      additionalInfo:
        "Premium terminal with priority boarding for luxury voyages.",
    },
    arrivalLocation: {
      city: "Reykjavik",
      country: "Iceland",
      region: "Capital Region",
      coordinates: { latitude: 64.1466, longitude: -21.9426 },
      timezone: "Atlantic/Reykjavik",
    },
    category: "luxury",
    itinerary: {
      route: [
        { city: "New York City", country: "USA" },
        { city: "Halifax", country: "Canada" },
        { city: "St. John's", country: "Canada" },
        { city: "Qaqortoq", country: "Greenland" },
        { city: "Nuuk", country: "Greenland" },
        { city: "Isafjordur", country: "Iceland" },
        { city: "Reykjavik", country: "Iceland" },
      ],
      description:
        "A 12-day northern exploration from NYC to Iceland via Canada and Greenland.",
      distance: "3,200 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
        {
          start: "2026-07-10T16:00:00-04:00",
          end: "2026-07-11T09:00:00-03:00",
          description: "Sailing to Nova Scotia along the Atlantic coast.",
        },
        {
          start: "2026-07-12T19:00:00-03:00",
          end: "2026-07-13T10:00:00-02:30",
          description: "Cruising to Newfoundland.",
        },
        {
          start: "2026-07-14T18:00:00-02:30",
          end: "2026-07-16T08:00:00-02:00",
          description: "North Atlantic crossing to southern Greenland.",
        },
        {
          start: "2026-07-17T16:00:00-02:00",
          end: "2026-07-18T09:00:00-02:00",
          description: "Sailing along Greenland's western coast to Nuuk.",
        },
        {
          start: "2026-07-19T17:00:00-02:00",
          end: "2026-07-20T10:00:00+00:00",
          description: "Denmark Strait crossing to Iceland's Westfjords.",
        },
        {
          start: "2026-07-21T18:00:00+00:00",
          end: "2026-07-22T08:00:00+00:00",
          description: "Final sailing along Iceland's west coast to Reykjavik.",
        },
      ],
      timeOnLand: [
        {
          start: "2026-07-11T09:00:00-03:00",
          end: "2026-07-12T19:00:00-03:00",
          description:
            "Explore Halifax's historic waterfront and Citadel Hill.",
        },
        {
          start: "2026-07-13T10:00:00-02:30",
          end: "2026-07-14T18:00:00-02:30",
          description: "Discover St. John's colorful houses and Signal Hill.",
        },
        {
          start: "2026-07-16T08:00:00-02:00",
          end: "2026-07-17T16:00:00-02:00",
          description: "Experience Qaqortoq's Inuit culture and Norse ruins.",
        },
        {
          start: "2026-07-18T09:00:00-02:00",
          end: "2026-07-19T17:00:00-02:00",
          description:
            "Visit Nuuk's Greenland National Museum and colonial harbor.",
        },
        {
          start: "2026-07-20T10:00:00+00:00",
          end: "2026-07-21T18:00:00+00:00",
          description:
            "Explore Isafjordur's dramatic fjords and remote landscapes.",
        },
        {
          start: "2026-07-22T08:00:00+00:00",
          end: "2026-07-22T17:00:00+00:00",
          description:
            "Arrival in Reykjavik with time to visit the city center.",
        },
      ],
    },
    requiredDocuments: ["Valid Passport", "ETA for Canada"],
    cancellationPolicy: "Full refund if canceled 75 days prior to departure",
    tourCategoryId: "arctic-cruise",
    contactPersonnel: [
      {
        name: "Erik Thorsson",
        role: "Arctic Expedition Leader",
        description: "Arctic Expedition Specialist",
        bio: "Arctic expert with 12 years guiding expeditions across northern waters and a degree in Marine Biology.",
        languages: ["English", "Icelandic", "Danish"],
        experienceYears: 12,
        profileImage:
          "https://images.unsplash.com/photo-1600486913747-55e5470d6f40",
        contact: {
          contactEmail: "e.thorsson@arcticvoyages.com",
          contactNumber: "+1 212-555-7890",
        },
      },
    ],
    title: "North Atlantic & Arctic Explorer",
    description:
      "Journey through the North Atlantic to the Arctic Circle on this 12-day luxury expedition featuring glaciers, fjords, and northern wildlife.",
    tags: ["luxury", "arctic", "expedition", "greenland", "iceland"],
    rating: 4.9,
    isLuxuryCruise: true,
    isFamilyFriendly: false,
    basePrice: 7800, // USD
  },
  {
    departureLocation: {
      city: "New York City",
      country: "USA",
      state: "NY",
      region: "Northeast",
      coordinates: { latitude: 40.7128, longitude: -74.006 },
      address: "Brooklyn Cruise Terminal, Red Hook",
      postalCode: "11231",
      timezone: "America/New_York",
      additionalInfo: "Exclusive terminal for world cruise segments.",
    },
    arrivalLocation: {
      city: "Sydney",
      country: "Australia",
      region: "New South Wales",
      coordinates: { latitude: -33.8688, longitude: 151.2093 },
      timezone: "Australia/Sydney",
    },
    category: "luxury",
    itinerary: {
      route: [
        { city: "New York City", country: "USA" },
        { city: "Miami", country: "USA" },
        { city: "Cartagena", country: "Colombia" },
        { city: "Panama Canal", country: "Panama" },
        { city: "Bora Bora", country: "French Polynesia" },
        { city: "Auckland", country: "New Zealand" },
        { city: "Sydney", country: "Australia" },
      ],
      description:
        "A 25-day grand voyage from NYC to Sydney, combining a Panama Canal transit with South Pacific island exploration.",
      distance: "11,200 nautical miles",
      totalDuration: "25 days",
      timeAtSea: [
        {
          start: "2026-03-01T17:00:00-05:00",
          end: "2026-03-04T09:00:00-05:00",
          description: "Atlantic coast sailing to Miami.",
        },
        {
          start: "2026-03-06T16:00:00-05:00",
          end: "2026-03-09T08:00:00-05:00",
          description: "Caribbean crossing to Colombia.",
        },
        {
          start: "2026-03-11T18:00:00-05:00",
          end: "2026-03-12T06:00:00-05:00",
          description: "Approaching the Panama Canal.",
        },
        {
          start: "2026-03-12T18:00:00-05:00",
          end: "2026-03-17T10:00:00-10:00",
          description: "Trans-Pacific crossing to French Polynesia.",
        },
        {
          start: "2026-03-20T17:00:00-10:00",
          end: "2026-03-23T09:00:00+13:00",
          description: "South Pacific sailing to New Zealand.",
        },
        {
          start: "2026-03-25T16:00:00+13:00",
          end: "2026-03-27T08:00:00+11:00",
          description: "Final Tasman Sea crossing to Sydney.",
        },
      ],
      timeOnLand: [
        {
          start: "2026-03-04T09:00:00-05:00",
          end: "2026-03-06T16:00:00-05:00",
          description:
            "Experience Miami's vibrant South Beach and Art Deco district.",
        },
        {
          start: "2026-03-09T08:00:00-05:00",
          end: "2026-03-11T18:00:00-05:00",
          description:
            "Explore Cartagena's colonial walled city and vibrant culture.",
        },
        {
          start: "2026-03-12T06:00:00-05:00",
          end: "2026-03-12T18:00:00-05:00",
          description:
            "Witness the engineering marvel of the Panama Canal transit.",
        },
        {
          start: "2026-03-17T10:00:00-10:00",
          end: "2026-03-20T17:00:00-10:00",
          description:
            "Discover Bora Bora's overwater bungalows and crystal lagoon.",
        },
        {
          start: "2026-03-23T09:00:00+13:00",
          end: "2026-03-25T16:00:00+13:00",
          description:
            "Experience Auckland's Maori culture and harbor scenery.",
        },
        {
          start: "2026-03-27T08:00:00+11:00",
          end: "2026-03-27T17:00:00+11:00",
          description:
            "Arrive in Sydney's iconic harbor with views of the Opera House.",
        },
      ],
    },
    requiredDocuments: [
      "Valid Passport",
      "Australian Visa/ETA",
      "New Zealand ETA",
    ],
    cancellationPolicy:
      "Partial refund if canceled 120 days prior to departure",
    tourCategoryId: "world-cruise",
    contactPersonnel: [
      {
        name: "Victoria Hamilton",
        role: "World Cruise Director",
        description: "Senior World Cruise Director",
        bio: "Luxury world cruise expert with 20+ years managing premium global voyages across all continents.",
        languages: ["English", "French", "Spanish", "Mandarin"],
        experienceYears: 20,
        profileImage:
          "https://images.unsplash.com/photo-1573497019236-61f28a930102",
        contact: {
          contactEmail: "v.hamilton@worldvoyages.com",
          contactNumber: "+1 212-555-9999",
        },
      },
    ],
    title: "Grand Transpacific Voyage",
    description:
      "Experience the ultimate 25-day ocean crossing from New York to Sydney, combining iconic destinations with the beauty of the South Pacific.",
    tags: [
      "luxury",
      "world cruise",
      "transpacific",
      "panama canal",
      "south pacific",
    ],
    rating: 4.9,
    isLuxuryCruise: true,
    isFamilyFriendly: false,
    basePrice: 22500, // USD
  },
];
