import { Cruise } from "@/lib/interfaces/services/cruises";

export const worldCruises: Cruise[] = [
  {
    departureLocation: {
      city: "Miami",
      country: "USA",
      region: "Florida",
      coordinates: { latitude: 25.7617, longitude: -80.1918 },
      timezone: "America/New_York",
      address: "PortMiami Terminal K",
    },
    arrivalLocation: {
      city: "Miami",
      country: "USA",
      region: "Florida",
      coordinates: { latitude: 25.7617, longitude: -80.1918 },
      timezone: "America/New_York",
      address: "PortMiami Terminal K",
    },
    category: "ultra-luxury",
    itinerary: {
      route: [
        { city: "Miami", country: "USA" },
        { city: "Cartagena", country: "Colombia" },
        { city: "Panama Canal", country: "Panama" },
        { city: "Bora Bora", country: "French Polynesia" },
        { city: "Sydney", country: "Australia" },
        { city: "Singapore", country: "Singapore" },
        { city: "Mumbai", country: "India" },
        { city: "Dubai", country: "United Arab Emirates" },
        { city: "Athens", country: "Greece" },
        { city: "Rome", country: "Italy" },
        { city: "Barcelona", country: "Spain" },
        { city: "Lisbon", country: "Portugal" },
        { city: "London", country: "United Kingdom" },
        { city: "New York", country: "USA" },
        { city: "Miami", country: "USA" },
      ],
      description:
        "135-night world cruise visiting 6 continents, 30+ countries, and 66 ports of call with exclusive access to world wonders and cultural experiences.",
      distance: "38,000 nautical miles",
      totalDuration: "135 days",
      timeAtSea: [
        {
          start: "2026-01-10T17:00:00-05:00",
          end: "2026-05-25T10:00:00-04:00",
          description:
            "Ultra-luxury around-the-world sailing with specialized enrichment programs, guest lecturers, and world-class amenities",
        },
      ],
      timeOnLand: [
        {
          start: "2026-01-20T08:00:00+11:00",
          end: "2026-01-21T18:00:00+11:00",
          description:
            "Sydney overnight experience with private opera house concert",
        },
        {
          start: "2026-03-05T07:00:00+04:00",
          end: "2026-03-06T20:00:00+04:00",
          description: "Dubai desert expedition with luxury overnight camp",
        },
        {
          start: "2026-04-12T08:00:00+01:00",
          end: "2026-04-13T17:00:00+01:00",
          description:
            "Private after-hours tour of the Louvre and dinner at Eiffel Tower",
        },
      ],
    },
    requiredDocuments: [
      "Valid Passport",
      "Multiple Entry Visas",
      "International Certificate of Vaccination",
    ],
    cancellationPolicy:
      "Full refund if canceled 240 days before departure; 75% refund up to 180 days; 50% refund up to 120 days; no refund within 120 days",
    tourCategoryId: "world-cruise",
    contactPersonnel: [
      {
        name: "Victoria Sinclair",
        role: "World Cruise Director",
        description:
          "Elite cruise director with expertise in global luxury voyages",
        languages: ["English", "French", "Spanish", "Italian"],
        experienceYears: 25,
        profileImage:
          "https://images.unsplash.com/photo-1557862921-37829c790f19",
        contact: {
          contactNumber: "+1 800 555 0199",
          contactEmail: "victoria.sinclair@crystalcruises.com",
        },
      },
    ],
    isLuxuryCruise: true,
    isFamilyFriendly: false,
    title: "Crystal Grand World Voyage",
    description:
      "Experience the ultimate in luxury travel with Crystal Cruises' 135-night circumnavigation of the globe, featuring bespoke experiences in the world's most exclusive destinations.",
    tags: ["world-cruise", "ultra-luxury", "global", "all-inclusive"],
    basePrice: 84000,
    rating: 5.0,
  },
  {
    departureLocation: {
      city: "Barcelona",
      country: "Spain",
      region: "Catalonia",
      coordinates: { latitude: 41.3851, longitude: 2.1734 },
      timezone: "Europe/Madrid",
      address: "Port of Barcelona, Terminal D",
    },
    arrivalLocation: {
      city: "Barcelona",
      country: "Spain",
      region: "Catalonia",
      coordinates: { latitude: 41.3851, longitude: 2.1734 },
      timezone: "Europe/Madrid",
      address: "Port of Barcelona, Terminal D",
    },
    category: "luxury",
    itinerary: {
      route: [
        { city: "Barcelona", country: "Spain" },
        { city: "Naples", country: "Italy" },
        { city: "Athens", country: "Greece" },
        { city: "Istanbul", country: "Turkey" },
        { city: "Dubai", country: "UAE" },
        { city: "Mumbai", country: "India" },
        { city: "Singapore", country: "Singapore" },
        { city: "Hong Kong", country: "China" },
        { city: "Tokyo", country: "Japan" },
        { city: "Sydney", country: "Australia" },
        { city: "Auckland", country: "New Zealand" },
        { city: "Fiji", country: "Fiji" },
        { city: "Honolulu", country: "USA" },
        { city: "Los Angeles", country: "USA" },
        { city: "Panama Canal", country: "Panama" },
        { city: "Cartagena", country: "Colombia" },
        { city: "Miami", country: "USA" },
        { city: "Barcelona", country: "Spain" },
      ],
      description:
        "110-night luxury world cruise exploring the Mediterranean, Asia-Pacific, and the Americas with exclusive shore excursions and cultural experiences.",
      distance: "32,000 nautical miles",
      totalDuration: "110 days",
      timeAtSea: [
        {
          start: "2026-03-01T18:00:00+01:00",
          end: "2026-06-19T08:00:00+01:00",
          description:
            "Relaxed luxury cruise with wellness programs, culinary workshops, and expert guest lectures.",
        },
      ],
      timeOnLand: [
        {
          start: "2026-03-10T08:00:00+02:00",
          end: "2026-03-11T18:00:00+02:00",
          description:
            "Private guided tour of Pompeii and Naples' historic sites.",
        },
        {
          start: "2026-04-20T07:00:00+08:00",
          end: "2026-04-22T20:00:00+08:00",
          description:
            "Exclusive access to Singapore's gardens and night safari.",
        },
        {
          start: "2026-05-15T08:00:00+10:00",
          end: "2026-05-16T19:00:00+10:00",
          description:
            "Sydney Harbour private yacht experience and opera performance.",
        },
      ],
    },
    requiredDocuments: [
      "Valid Passport",
      "Schengen Visa",
      "Multiple Entry Visas",
      "International Health Certificates",
    ],
    cancellationPolicy:
      "Full refund if canceled 200 days before departure; 60% refund up to 150 days; 30% refund up to 90 days; no refund within 90 days",
    tourCategoryId: "world-cruise",
    contactPersonnel: [
      {
        name: "Clara Benson",
        role: "Luxury World Cruise Manager",
        description:
          "Specialist in Mediterranean and Asia-Pacific luxury voyages",
        languages: ["English", "Spanish", "Italian"],
        experienceYears: 20,
        profileImage:
          "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
        contact: {
          contactNumber: "+34 900 123 456",
          contactEmail: "clara.benson@luxcruises.com",
        },
      },
    ],
    isLuxuryCruise: true,
    isFamilyFriendly: false,
    title: "Mediterranean to Pacific Luxury World Cruise",
    description:
      "Journey from the historic Mediterranean to the vibrant Asia-Pacific region on this luxurious 110-night voyage with unique cultural and culinary experiences.",
    tags: ["world-cruise", "luxury", "mediterranean", "asia-pacific"],
    basePrice: 49000,
    rating: 4.8,
  },
  {
    departureLocation: {
      city: "Miami",
      country: "USA",
      region: "Florida",
      coordinates: { latitude: 25.7617, longitude: -80.1918 },
      timezone: "America/New_York",
      address: "PortMiami Terminal E",
    },
    arrivalLocation: {
      city: "New York",
      country: "USA",
      region: "New York",
      coordinates: { latitude: 40.7128, longitude: -74.006 },
      timezone: "America/New_York",
      address: "Manhattan Cruise Terminal",
    },
    category: "luxury",
    itinerary: {
      route: [
        { city: "Miami", country: "USA" },
        { city: "Caribbean Islands", country: "Multiple" },
        { city: "Rio de Janeiro", country: "Brazil" },
        { city: "Cape Town", country: "South Africa" },
        { city: "Mauritius", country: "Mauritius" },
        { city: "Maldives", country: "Maldives" },
        { city: "Singapore", country: "Singapore" },
        { city: "Hong Kong", country: "China" },
        { city: "Tokyo", country: "Japan" },
        { city: "Sydney", country: "Australia" },
        { city: "Fiji", country: "Fiji" },
        { city: "Hawaii", country: "USA" },
        { city: "New York", country: "USA" },
      ],
      description:
        "Oceania Cruises 200-night World Cruise visiting over 113 ports across 53 countries, spanning 6 continents.",
      distance: "45,000 nautical miles",
      totalDuration: "200 days",
      timeAtSea: [
        {
          start: "2025-01-05T17:00:00-05:00",
          end: "2025-07-23T08:00:00-04:00",
          description: "Extensive sea days with premium onboard experiences",
        },
      ],
      timeOnLand: [
        {
          start: "2025-02-15T08:00:00+02:00",
          end: "2025-02-17T17:00:00+02:00",
          description: "Cape Town safari and cultural excursions",
        },
        {
          start: "2025-04-01T08:00:00+08:00",
          end: "2025-04-03T18:00:00+08:00",
          description: "Singapore city tour with private dining experiences",
        },
      ],
    },
    requiredDocuments: [
      "Valid Passport",
      "Multiple Entry Visas",
      "Vaccination Certificates",
    ],
    cancellationPolicy:
      "Full refund if canceled 270 days before departure; 50% refund up to 180 days; no refund within 90 days",
    tourCategoryId: "world-cruise",
    contactPersonnel: [
      {
        name: "Sarah Bennett",
        role: "World Cruise Manager",
        description: "Experienced manager for extended luxury voyages",
        languages: ["English", "French"],
        experienceYears: 15,
        profileImage:
          "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
        contact: {
          contactNumber: "+1 800 555 1234",
          contactEmail: "sarah.bennett@oceaniacruises.com",
        },
      },
    ],
    isLuxuryCruise: true,
    isFamilyFriendly: false,
    title: "Oceania Cruises 200-Night World Cruise",
    description:
      "An exclusive 200-night journey from Miami to New York, encompassing over 113 ports in 53 countries, offering unparalleled luxury and cultural immersion.",
    tags: ["world-cruise", "luxury", "extended-voyage"],
    basePrice: 50399,
    rating: 4.9,
  },
  {
    departureLocation: {
      city: "Miami",
      country: "USA",
      region: "Florida",
      coordinates: { latitude: 25.7617, longitude: -80.1918 },
      timezone: "America/New_York",
      address: "PortMiami Terminal F",
    },
    arrivalLocation: {
      city: "Miami",
      country: "USA",
      region: "Florida",
      coordinates: { latitude: 25.7617, longitude: -80.1918 },
      timezone: "America/New_York",
      address: "PortMiami Terminal F",
    },
    category: "luxury",
    itinerary: {
      route: [
        { city: "Miami", country: "USA" },
        { city: "Lisbon", country: "Portugal" },
        { city: "Cape Town", country: "South Africa" },
        { city: "Mumbai", country: "India" },
        { city: "Bangkok", country: "Thailand" },
        { city: "Singapore", country: "Singapore" },
        { city: "Hong Kong", country: "China" },
        { city: "Tokyo", country: "Japan" },
        { city: "Sydney", country: "Australia" },
        { city: "Honolulu", country: "USA" },
        { city: "Miami", country: "USA" },
      ],
      description:
        "Viking's 245-day Ultimate World Cruise visiting 59 countries and 113 ports, offering segmented embarkation options.",
      distance: "50,000 nautical miles",
      totalDuration: "245 days",
      timeAtSea: [
        {
          start: "2025-02-01T16:00:00-05:00",
          end: "2025-10-03T08:00:00-04:00",
          description:
            "Extensive sea days with enrichment and cultural programming",
        },
      ],
      timeOnLand: [
        {
          start: "2025-03-10T07:00:00+01:00",
          end: "2025-03-12T18:00:00+01:00",
          description: "Cultural tours and excursions in Lisbon",
        },
        {
          start: "2025-07-15T06:00:00+03:00",
          end: "2025-07-17T19:00:00+03:00",
          description: "Exploration of Cape Town and surrounding areas",
        },
      ],
    },
    requiredDocuments: [
      "Valid Passport",
      "Multiple Entry Visas",
      "Vaccination Certificates",
    ],
    cancellationPolicy:
      "Full refund if canceled 300 days before departure; 50% refund up to 200 days; no refund within 100 days",
    tourCategoryId: "world-cruise",
    contactPersonnel: [
      {
        name: "Anna Svensson",
        role: "Ultimate World Cruise Director",
        description: "Expert in long-duration world cruise operations",
        languages: ["English", "Swedish", "German"],
        experienceYears: 20,
        profileImage:
          "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f94",
        contact: {
          contactNumber: "+1 800 555 4567",
          contactEmail: "anna.svensson@vikingcruises.com",
        },
      },
    ],
    isLuxuryCruise: true,
    isFamilyFriendly: false,
    title: "Viking Ultimate World Cruise (245 Days)",
    description:
      "A comprehensive 245-day journey that covers 59 countries and 113 ports with flexible boarding options to suit your schedule.",
    tags: ["world-cruise", "luxury", "extended", "flexible"],
    basePrice: 70000,
    rating: 4.8,
  },

  {
    departureLocation: {
      city: "Sydney",
      country: "Australia",
      region: "New South Wales",
      coordinates: { latitude: -33.8688, longitude: 151.2093 },
      timezone: "Australia/Sydney",
      address: "Sydney Harbour Terminal 3",
    },
    arrivalLocation: {
      city: "Sydney",
      country: "Australia",
      region: "New South Wales",
      coordinates: { latitude: -33.8688, longitude: 151.2093 },
      timezone: "Australia/Sydney",
      address: "Sydney Harbour Terminal 3",
    },
    category: "premium-luxury",
    itinerary: {
      route: [
        { city: "Sydney", country: "Australia" },
        { city: "Fiji", country: "Fiji" },
        { city: "Tahiti", country: "French Polynesia" },
        { city: "Panama Canal", country: "Panama" },
        { city: "Cartagena", country: "Colombia" },
        { city: "New York", country: "USA" },
        { city: "Reykjavik", country: "Iceland" },
        { city: "London", country: "UK" },
        { city: "Amsterdam", country: "Netherlands" },
        { city: "Barcelona", country: "Spain" },
        { city: "Cape Town", country: "South Africa" },
        { city: "Sydney", country: "Australia" },
      ],
      description:
        "92-night expedition-style world cruise combining luxury with adventure, exploring remote destinations and iconic cities.",
      distance: "28,500 nautical miles",
      totalDuration: "92 days",
      timeAtSea: [
        {
          start: "2026-02-15T17:00:00+11:00",
          end: "2026-05-18T09:00:00+10:00",
          description:
            "Expedition-style cruising with expert naturalists, zodiac landings, and immersive cultural activities.",
        },
      ],
      timeOnLand: [
        {
          start: "2026-04-05T08:00:00-05:00",
          end: "2026-04-07T18:00:00-05:00",
          description: "New York city cultural immersion with Broadway show.",
        },
        {
          start: "2026-04-20T08:00:00+00:00",
          end: "2026-04-21T20:00:00+00:00",
          description: "Private guided tour of Amsterdam’s canals and museums.",
        },
        {
          start: "2026-05-10T08:00:00+02:00",
          end: "2026-05-11T18:00:00+02:00",
          description: "Cape Town vineyard tour and Table Mountain excursion.",
        },
      ],
    },
    requiredDocuments: [
      "Valid Passport",
      "Multiple Entry Visas",
      "Yellow Fever Certificate",
      "International Vaccination Certificate",
    ],
    cancellationPolicy:
      "Full refund if canceled 150 days before departure; 50% refund up to 120 days; no refund within 120 days",
    tourCategoryId: "world-cruise",
    contactPersonnel: [
      {
        name: "James O’Connor",
        role: "Expedition Cruise Leader",
        description:
          "Experienced expedition leader specializing in luxury adventure cruises",
        languages: ["English"],
        experienceYears: 15,
        profileImage:
          "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7",
        contact: {
          contactNumber: "+61 2 9000 1234",
          contactEmail: "james.oconnor@expeditioncruises.com",
        },
      },
    ],
    isLuxuryCruise: true,
    isFamilyFriendly: true,
    title: "Sydney Expedition World Cruise",
    description:
      "Luxury expedition cruise from Sydney, blending immersive cultural experiences with adventure in remote and iconic locations across the globe.",
    tags: ["world-cruise", "expedition", "luxury", "adventure"],
    basePrice: 54000,
    rating: 4.7,
  },

  {
    departureLocation: {
      city: "Singapore",
      country: "Singapore",
      region: "",
      coordinates: { latitude: 1.3521, longitude: 103.8198 },
      timezone: "Asia/Singapore",
      address: "Marina Bay Cruise Centre Singapore",
    },
    arrivalLocation: {
      city: "Singapore",
      country: "Singapore",
      region: "",
      coordinates: { latitude: 1.3521, longitude: 103.8198 },
      timezone: "Asia/Singapore",
      address: "Marina Bay Cruise Centre Singapore",
    },
    category: "premium",
    itinerary: {
      route: [
        { city: "Singapore", country: "Singapore" },
        { city: "Bangkok", country: "Thailand" },
        { city: "Ho Chi Minh City", country: "Vietnam" },
        { city: "Hong Kong", country: "China" },
        { city: "Shanghai", country: "China" },
        { city: "Tokyo", country: "Japan" },
        { city: "Vancouver", country: "Canada" },
        { city: "Seattle", country: "USA" },
        { city: "San Francisco", country: "USA" },
        { city: "Los Angeles", country: "USA" },
        { city: "Honolulu", country: "USA" },
        { city: "Fiji", country: "Fiji" },
        { city: "Sydney", country: "Australia" },
        { city: "Singapore", country: "Singapore" },
      ],
      description:
        "90-night premium world cruise connecting Asia, North America, and Oceania with a focus on cultural and urban explorations.",
      distance: "27,000 nautical miles",
      totalDuration: "90 days",
      timeAtSea: [
        {
          start: "2026-05-10T16:00:00+08:00",
          end: "2026-08-08T09:00:00+08:00",
          description:
            "Premium cruise featuring city tours, culinary experiences, and wellness programs.",
        },
      ],
      timeOnLand: [
        {
          start: "2026-06-01T08:00:00+07:00",
          end: "2026-06-02T20:00:00+07:00",
          description: "Bangkok river cruise and temple visits.",
        },
        {
          start: "2026-07-05T07:00:00-08:00",
          end: "2026-07-06T19:00:00-08:00",
          description: "San Francisco city highlights including Alcatraz tour.",
        },
        {
          start: "2026-07-20T08:00:00+10:00",
          end: "2026-07-21T18:00:00+10:00",
          description: "Sydney cultural walking tour and theatre night.",
        },
      ],
    },
    requiredDocuments: [
      "Valid Passport",
      "Multiple Entry Visas",
      "COVID-19 Vaccination Record",
    ],
    cancellationPolicy:
      "Full refund if canceled 180 days before departure; 50% refund up to 120 days; no refund within 120 days",
    tourCategoryId: "world-cruise",
    contactPersonnel: [
      {
        name: "Samantha Lee",
        role: "Premium World Cruise Coordinator",
        description:
          "Coordinator specializing in Asian and Pacific itineraries",
        languages: ["English", "Mandarin"],
        experienceYears: 14,
        profileImage:
          "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
        contact: {
          contactNumber: "+65 9000 5678",
          contactEmail: "samantha.lee@premiumcruises.com",
        },
      },
    ],
    isLuxuryCruise: true,
    isFamilyFriendly: false,
    title: "Asia-Pacific Premium World Cruise",
    description:
      "Explore the vibrant cities and cultures of Asia, North America, and Oceania on this premium 90-night world cruise.",
    tags: ["world-cruise", "premium", "asia-pacific", "urban-exploration"],
    basePrice: 35999,
    rating: 4.6,
  },
  {
    departureLocation: {
      city: "Miami",
      country: "USA",
      region: "Florida",
      coordinates: { latitude: 25.7617, longitude: -80.1918 },
      timezone: "America/New_York",
      address: "PortMiami Terminal B",
    },
    arrivalLocation: {
      city: "Miami",
      country: "USA",
      region: "Florida",
      coordinates: { latitude: 25.7617, longitude: -80.1918 },
      timezone: "America/New_York",
      address: "PortMiami Terminal B",
    },
    category: "premium-luxury",
    itinerary: {
      route: [
        { city: "Miami", country: "USA" },
        { city: "Punta Cana", country: "Dominican Republic" },
        { city: "San Juan", country: "Puerto Rico" },
        { city: "Rio de Janeiro", country: "Brazil" },
        { city: "Cape Town", country: "South Africa" },
        { city: "Zanzibar", country: "Tanzania" },
        { city: "Seychelles Islands", country: "Seychelles" },
        { city: "Mumbai", country: "India" },
        { city: "Bangkok", country: "Thailand" },
        { city: "Ho Chi Minh City", country: "Vietnam" },
        { city: "Hong Kong", country: "China" },
        { city: "Tokyo", country: "Japan" },
        { city: "Honolulu", country: "USA" },
        { city: "Los Angeles", country: "USA" },
        { city: "Cartagena", country: "Colombia" },
        { city: "Miami", country: "USA" },
      ],
      description:
        "274-night Ultimate World Cruise visiting 65 countries across all 7 continents with over 150 ports of call.",
      distance: "56,800 nautical miles",
      totalDuration: "274 days",
      timeAtSea: [
        {
          start: "2025-12-10T16:00:00-05:00",
          end: "2026-09-10T08:00:00-04:00",
          description:
            "The longest and most comprehensive world cruise offering extensive sea days with resort-style amenities",
        },
      ],
      timeOnLand: [
        {
          start: "2026-01-30T07:00:00+02:00",
          end: "2026-02-01T17:00:00+02:00",
          description: "Three-day safari adventure in South Africa",
        },
        {
          start: "2026-04-10T08:00:00+09:00",
          end: "2026-04-12T19:00:00+09:00",
          description:
            "Japanese cultural immersion with traditional ryokan stay",
        },
        {
          start: "2026-06-15T06:00:00-10:00",
          end: "2026-06-16T17:00:00-10:00",
          description: "Hawaiian luau celebration and volcano helicopter tour",
        },
      ],
    },
    requiredDocuments: [
      "Valid Passport",
      "Multiple Entry Visas",
      "Yellow Fever Certificate",
      "COVID-19 Vaccination Record",
    ],
    cancellationPolicy:
      "Full refund if canceled 365 days before departure; 50% refund up to 270 days; 25% refund up to 180 days; no refund within 180 days",
    tourCategoryId: "world-cruise",
    contactPersonnel: [
      {
        name: "Michael Rodriguez",
        role: "Ultimate World Cruise Director",
        description:
          "Senior cruise director specializing in extended global voyages",
        languages: ["English", "Spanish", "Portuguese"],
        experienceYears: 22,
        profileImage:
          "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7",
        contact: {
          contactNumber: "+1 800 555 7890",
          contactEmail: "michael.rodriguez@royalcaribbean.com",
        },
      },
    ],
    isLuxuryCruise: true,
    isFamilyFriendly: false,
    title: "Royal Caribbean Ultimate World Cruise",
    description:
      "The most extensive world cruise ever offered, Royal Caribbean's 274-night global journey takes you to all seven continents with immersive experiences in over 150 destinations.",
    tags: ["world-cruise", "premium", "global", "longest-cruise"],
    basePrice: 59999,
    rating: 4.9,
  },
  {
    departureLocation: {
      city: "Fort Lauderdale",
      country: "USA",
      region: "Florida",
      coordinates: { latitude: 26.1224, longitude: -80.1373 },
      timezone: "America/New_York",
      address: "Port Everglades Terminal A",
    },
    arrivalLocation: {
      city: "Fort Lauderdale",
      country: "USA",
      region: "Florida",
      coordinates: { latitude: 26.1224, longitude: -80.1373 },
      timezone: "America/New_York",
      address: "Port Everglades Terminal A",
    },
    category: "premium",
    itinerary: {
      route: [
        { city: "Fort Lauderdale", country: "USA" },
        { city: "Cartagena", country: "Colombia" },
        { city: "Panama Canal", country: "Panama" },
        { city: "Tahiti", country: "French Polynesia" },
        { city: "Auckland", country: "New Zealand" },
        { city: "Sydney", country: "Australia" },
        { city: "Bali", country: "Indonesia" },
        { city: "Singapore", country: "Singapore" },
        { city: "Mumbai", country: "India" },
        { city: "Dubai", country: "United Arab Emirates" },
        { city: "Istanbul", country: "Turkey" },
        { city: "Barcelona", country: "Spain" },
        { city: "Lisbon", country: "Portugal" },
        { city: "New York", country: "USA" },
        { city: "Fort Lauderdale", country: "USA" },
      ],
      description:
        "124-day grand world voyage with Holland America's signature service visiting 43 ports across 27 countries.",
      distance: "33,500 nautical miles",
      totalDuration: "124 days",
      timeAtSea: [
        {
          start: "2026-01-05T17:00:00-05:00",
          end: "2026-05-09T09:00:00-04:00",
          description:
            "Premium world cruise featuring Holland America's renowned service and enrichment programs",
        },
      ],
      timeOnLand: [
        {
          start: "2026-02-01T08:00:00+11:00",
          end: "2026-02-03T17:00:00+11:00",
          description: "Sydney and Blue Mountains extended tour",
        },
        {
          start: "2026-03-10T07:00:00+04:00",
          end: "2026-03-11T19:00:00+04:00",
          description: "Desert safari and traditional Arabic dinner experience",
        },
        {
          start: "2026-04-05T08:00:00+02:00",
          end: "2026-04-06T17:00:00+02:00",
          description: "Exclusive tour of Barcelona's Gaudi masterpieces",
        },
      ],
    },
    requiredDocuments: [
      "Valid Passport",
      "Multiple Entry Visas",
      "International Certificate of Vaccination",
    ],
    cancellationPolicy:
      "Full refund if canceled 180 days before departure; 50% refund up to 120 days; no refund within 120 days",
    tourCategoryId: "world-cruise",
    contactPersonnel: [
      {
        name: "Elizabeth Morrison",
        role: "Grand Voyage Director",
        description:
          "Experienced voyage director specializing in global travel experiences",
        languages: ["English", "Dutch"],
        experienceYears: 18,
        profileImage:
          "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f94",
        contact: {
          contactNumber: "+1 800 555 2233",
          contactEmail: "elizabeth.morrison@hollandamerica.com",
        },
      },
    ],
    isLuxuryCruise: true,
    isFamilyFriendly: false,
    title: "Holland America Grand World Voyage",
    description:
      "Experience the timeless elegance of Holland America's 124-day world cruise, combining legendary service with fascinating destinations across six continents.",
    tags: ["world-cruise", "premium", "grand-voyage"],
    basePrice: 22354,
    rating: 4.8,
  },
];

export default worldCruises;
