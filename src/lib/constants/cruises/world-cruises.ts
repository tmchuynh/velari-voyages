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
          end: "2026-05-12T08:00:00+07:00",
          description:
            "Sailing from Singapore to Bangkok through the Gulf of Thailand.",
        },
        {
          start: "2026-05-14T18:00:00+07:00",
          end: "2026-05-16T07:00:00+07:00",
          description:
            "Cruising from Bangkok to Ho Chi Minh City along the coast of the Gulf of Thailand.",
        },
        {
          start: "2026-05-18T16:00:00+07:00",
          end: "2026-05-21T08:00:00+08:00",
          description:
            "Journey from Ho Chi Minh City to Hong Kong across the South China Sea.",
        },
        {
          start: "2026-05-23T17:00:00+08:00",
          end: "2026-05-25T09:00:00+08:00",
          description:
            "Sailing north from Hong Kong to Shanghai along the East China Sea.",
        },
        {
          start: "2026-05-27T18:00:00+08:00",
          end: "2026-05-30T07:00:00+09:00",
          description:
            "Crossing from Shanghai to Tokyo through the East China Sea and Pacific Ocean.",
        },
        {
          start: "2026-06-01T16:00:00+09:00",
          end: "2026-06-08T08:00:00-07:00",
          description:
            "Transpacific voyage from Tokyo to Vancouver across the North Pacific.",
        },
        {
          start: "2026-06-10T17:00:00-07:00",
          end: "2026-06-11T08:00:00-07:00",
          description: "Short coastal cruise from Vancouver to Seattle.",
        },
        {
          start: "2026-06-13T16:00:00-07:00",
          end: "2026-06-15T08:00:00-07:00",
          description:
            "Sailing down the West Coast from Seattle to San Francisco.",
        },
        {
          start: "2026-06-17T17:00:00-07:00",
          end: "2026-06-18T09:00:00-07:00",
          description: "Coastal journey from San Francisco to Los Angeles.",
        },
        {
          start: "2026-06-20T16:00:00-07:00",
          end: "2026-06-25T08:00:00-10:00",
          description:
            "Crossing from Los Angeles to Honolulu across the Pacific Ocean.",
        },
        {
          start: "2026-06-27T17:00:00-10:00",
          end: "2026-07-02T08:00:00+12:00",
          description: "Southern Pacific crossing from Honolulu to Fiji.",
        },
        {
          start: "2026-07-04T16:00:00+12:00",
          end: "2026-07-07T08:00:00+10:00",
          description: "Journey from Fiji to Sydney across the Coral Sea.",
        },
        {
          start: "2026-07-09T17:00:00+10:00",
          end: "2026-07-17T09:00:00+08:00",
          description:
            "Final leg returning from Sydney to Singapore through Indonesian waters.",
        },
      ],
      timeOnLand: [
        {
          start: "2026-05-10T08:00:00+08:00",
          end: "2026-05-10T15:00:00+08:00",
          description: "Embarkation in Singapore with city highlights tour.",
        },
        {
          start: "2026-05-12T09:00:00+07:00",
          end: "2026-05-14T17:00:00+07:00",
          description:
            "Bangkok river cruise, temple visits, and authentic Thai cultural experiences.",
        },
        {
          start: "2026-05-16T08:00:00+07:00",
          end: "2026-05-18T15:00:00+07:00",
          description:
            "Ho Chi Minh City tour including Cu Chi tunnels and local cuisine exploration.",
        },
        {
          start: "2026-05-21T09:00:00+08:00",
          end: "2026-05-23T16:00:00+08:00",
          description:
            "Hong Kong harbor tour, Victoria Peak, and dim sum experience.",
        },
        {
          start: "2026-05-25T10:00:00+08:00",
          end: "2026-05-27T17:00:00+08:00",
          description:
            "Shanghai exploration featuring the Bund, Yu Garden, and Pudong district.",
        },
        {
          start: "2026-05-30T08:00:00+09:00",
          end: "2026-06-01T15:00:00+09:00",
          description:
            "Tokyo city tour, Mt. Fuji excursion, and traditional Japanese tea ceremony.",
        },
        {
          start: "2026-06-08T09:00:00-07:00",
          end: "2026-06-10T16:00:00-07:00",
          description:
            "Vancouver exploration including Stanley Park, Granville Island, and Capilano Bridge.",
        },
        {
          start: "2026-06-11T09:00:00-07:00",
          end: "2026-06-13T15:00:00-07:00",
          description:
            "Seattle visit featuring Pike Place Market, Space Needle, and Boeing factory tour.",
        },
        {
          start: "2026-06-15T09:00:00-07:00",
          end: "2026-06-17T16:00:00-07:00",
          description:
            "San Francisco city highlights including Alcatraz tour, Golden Gate Bridge, and Napa Valley excursion.",
        },
        {
          start: "2026-06-18T10:00:00-07:00",
          end: "2026-06-20T15:00:00-07:00",
          description:
            "Los Angeles visit with Hollywood, Beverly Hills, and Santa Monica tours.",
        },
        {
          start: "2026-06-25T09:00:00-10:00",
          end: "2026-06-27T16:00:00-10:00",
          description:
            "Honolulu stay featuring Pearl Harbor, Waikiki Beach, and traditional luau experience.",
        },
        {
          start: "2026-07-02T09:00:00+12:00",
          end: "2026-07-04T15:00:00+12:00",
          description:
            "Fiji exploration with island hopping, snorkeling, and traditional village visit.",
        },
        {
          start: "2026-07-07T09:00:00+10:00",
          end: "2026-07-09T16:00:00+10:00",
          description:
            "Sydney cultural walking tour, opera house visit, and theatre night.",
        },
        {
          start: "2026-07-17T10:00:00+08:00",
          end: "2026-07-18T18:00:00+08:00",
          description:
            "Final day in Singapore with farewell dinner and Gardens by the Bay light show.",
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
          end: "2025-12-12T08:00:00-04:00",
          description:
            "Smooth sailing from Miami to Punta Cana across the Caribbean Sea",
        },
        {
          start: "2025-12-14T17:00:00-04:00",
          end: "2025-12-15T08:00:00-04:00",
          description: "Short Caribbean cruise from Punta Cana to San Juan",
        },
        {
          start: "2025-12-18T16:00:00-04:00",
          end: "2025-12-25T09:00:00-03:00",
          description: "Transatlantic crossing from San Juan to Rio de Janeiro",
        },
        {
          start: "2025-12-30T17:00:00-03:00",
          end: "2026-01-10T08:00:00+02:00",
          description:
            "South Atlantic passage from Rio de Janeiro to Cape Town",
        },
        {
          start: "2026-01-15T16:00:00+02:00",
          end: "2026-01-18T07:00:00+03:00",
          description: "Coastal African cruise from Cape Town to Zanzibar",
        },
        {
          start: "2026-01-21T16:00:00+03:00",
          end: "2026-01-24T08:00:00+04:00",
          description: "Indian Ocean voyage from Zanzibar to Seychelles",
        },
        {
          start: "2026-01-28T17:00:00+04:00",
          end: "2026-02-05T09:00:00+05:30",
          description: "Crossing the Arabian Sea from Seychelles to Mumbai",
        },
        {
          start: "2026-02-10T16:00:00+05:30",
          end: "2026-02-16T08:00:00+07:00",
          description:
            "Journey through the Bay of Bengal from Mumbai to Bangkok",
        },
        {
          start: "2026-02-20T17:00:00+07:00",
          end: "2026-02-22T08:00:00+07:00",
          description:
            "Gulf of Thailand passage from Bangkok to Ho Chi Minh City",
        },
        {
          start: "2026-02-25T16:00:00+07:00",
          end: "2026-02-28T08:00:00+08:00",
          description:
            "South China Sea crossing from Ho Chi Minh City to Hong Kong",
        },
        {
          start: "2026-03-03T16:00:00+08:00",
          end: "2026-03-08T07:00:00+09:00",
          description: "East China Sea voyage from Hong Kong to Tokyo",
        },
        {
          start: "2026-03-15T17:00:00+09:00",
          end: "2026-03-22T08:00:00-10:00",
          description: "Transpacific crossing from Tokyo to Honolulu",
        },
        {
          start: "2026-03-26T16:00:00-10:00",
          end: "2026-03-31T09:00:00-07:00",
          description: "Pacific Ocean voyage from Honolulu to Los Angeles",
        },
        {
          start: "2026-04-05T17:00:00-07:00",
          end: "2026-04-12T08:00:00-05:00",
          description:
            "Journey through Panama Canal from Los Angeles to Cartagena",
        },
        {
          start: "2026-04-15T16:00:00-05:00",
          end: "2026-04-17T08:00:00-04:00",
          description: "Final Caribbean leg from Cartagena to Miami",
        },
      ],
      timeOnLand: [
        {
          start: "2025-12-10T08:00:00-05:00",
          end: "2025-12-10T15:00:00-05:00",
          description:
            "Embarkation in Miami with welcome reception and city tour",
        },
        {
          start: "2025-12-12T09:00:00-04:00",
          end: "2025-12-14T16:00:00-04:00",
          description:
            "Punta Cana beach resort experience with exclusive water activities",
        },
        {
          start: "2025-12-15T09:00:00-04:00",
          end: "2025-12-18T15:00:00-04:00",
          description:
            "San Juan historical tour and Puerto Rican cultural immersion",
        },
        {
          start: "2025-12-25T10:00:00-03:00",
          end: "2025-12-30T16:00:00-03:00",
          description:
            "Rio de Janeiro exploration including Sugarloaf Mountain, Christ the Redeemer, and Carnival experience",
        },
        {
          start: "2026-01-10T09:00:00+02:00",
          end: "2026-01-15T15:00:00+02:00",
          description:
            "Cape Town safari adventure, Table Mountain tour, and wine country excursion",
        },
        {
          start: "2026-01-18T08:00:00+03:00",
          end: "2026-01-21T15:00:00+03:00",
          description:
            "Zanzibar spice tour, historical Stone Town visit, and beach relaxation",
        },
        {
          start: "2026-01-24T09:00:00+04:00",
          end: "2026-01-28T16:00:00+04:00",
          description:
            "Seychelles island exploration, nature reserves, and luxury beach experiences",
        },
        {
          start: "2026-02-05T10:00:00+05:30",
          end: "2026-02-10T15:00:00+05:30",
          description:
            "Mumbai cultural tour, Bollywood experience, and Gateway of India exploration",
        },
        {
          start: "2026-02-16T09:00:00+07:00",
          end: "2026-02-20T16:00:00+07:00",
          description:
            "Bangkok temple tours, river cruises, and authentic Thai cuisine experiences",
        },
        {
          start: "2026-02-22T09:00:00+07:00",
          end: "2026-02-25T15:00:00+07:00",
          description:
            "Ho Chi Minh City cultural immersion with Cu Chi Tunnels and Mekong Delta excursions",
        },
        {
          start: "2026-02-28T09:00:00+08:00",
          end: "2026-03-03T15:00:00+08:00",
          description:
            "Hong Kong harbor tours, Peak Tram experience, and dim sum culinary journey",
        },
        {
          start: "2026-03-08T08:00:00+09:00",
          end: "2026-03-15T16:00:00+09:00",
          description:
            "Tokyo exploration with Mt. Fuji excursion, traditional ryokan stay, and cultural ceremonies",
        },
        {
          start: "2026-03-22T09:00:00-10:00",
          end: "2026-03-26T15:00:00-10:00",
          description:
            "Hawaiian cultural immersion with luau celebrations, volcano tours, and beach activities",
        },
        {
          start: "2026-04-05T10:00:00-07:00",
          end: "2026-04-12T16:00:00-07:00",
          description:
            "Los Angeles Hollywood experience, Beverly Hills tour, and Santa Monica beach day",
        },
        {
          start: "2026-04-12T09:00:00-05:00",
          end: "2026-04-15T15:00:00-05:00",
          description:
            "Cartagena historical walled city tour and Colombian coffee experience",
        },
        {
          start: "2026-04-17T09:00:00-04:00",
          end: "2026-04-18T16:00:00-04:00",
          description:
            "Miami disembarkation with farewell celebration and South Beach farewell dinner",
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
          end: "2026-01-08T08:00:00-05:00",
          description:
            "Caribbean passage from Fort Lauderdale to Cartagena with luxury onboard enrichment programs",
        },
        {
          start: "2026-01-10T16:00:00-05:00",
          end: "2026-01-12T07:00:00-05:00",
          description:
            "Journey to and transit through the historic Panama Canal with expert commentary",
        },
        {
          start: "2026-01-14T17:00:00-05:00",
          end: "2026-01-23T09:00:00-10:00",
          description:
            "Transpacific crossing from Panama to Tahiti across the South Pacific waters",
        },
        {
          start: "2026-01-26T16:00:00-10:00",
          end: "2026-01-30T08:00:00+13:00",
          description:
            "South Pacific sailing from Tahiti to Auckland through Polynesian islands",
        },
        {
          start: "2026-02-02T17:00:00+13:00",
          end: "2026-02-04T09:00:00+11:00",
          description:
            "Tasman Sea crossing from Auckland to Sydney with scenic coastal views",
        },
        {
          start: "2026-02-07T16:00:00+11:00",
          end: "2026-02-12T08:00:00+08:00",
          description:
            "Voyage through Indonesian archipelago from Sydney to Bali",
        },
        {
          start: "2026-02-15T17:00:00+08:00",
          end: "2026-02-16T09:00:00+08:00",
          description:
            "Short sailing from Bali to Singapore through the Java Sea",
        },
        {
          start: "2026-02-19T16:00:00+08:00",
          end: "2026-02-25T08:00:00+05:30",
          description:
            "Crossing from Singapore to Mumbai through the Strait of Malacca and Indian Ocean",
        },
        {
          start: "2026-02-28T17:00:00+05:30",
          end: "2026-03-04T09:00:00+04:00",
          description:
            "Arabian Sea journey from Mumbai to Dubai with cultural lectures and regional cuisine",
        },
        {
          start: "2026-03-07T16:00:00+04:00",
          end: "2026-03-14T08:00:00+03:00",
          description:
            "Voyage through the Gulf of Oman and Suez Canal to Istanbul with historical presentations",
        },
        {
          start: "2026-03-17T17:00:00+03:00",
          end: "2026-03-22T09:00:00+01:00",
          description:
            "Mediterranean sailing from Istanbul to Barcelona through historic waters",
        },
        {
          start: "2026-03-25T16:00:00+01:00",
          end: "2026-03-27T08:00:00+00:00",
          description:
            "Coastal Mediterranean cruise from Barcelona to Lisbon along the Iberian Peninsula",
        },
        {
          start: "2026-03-30T17:00:00+00:00",
          end: "2026-04-06T09:00:00-04:00",
          description:
            "Transatlantic crossing from Lisbon to New York with gala events and enrichment programs",
        },
        {
          start: "2026-04-09T16:00:00-04:00",
          end: "2026-04-10T09:00:00-04:00",
          description:
            "Final coastal sailing from New York to Fort Lauderdale along the Eastern Seaboard",
        },
      ],
      timeOnLand: [
        {
          start: "2026-01-05T08:00:00-05:00",
          end: "2026-01-05T16:00:00-05:00",
          description:
            "Embarkation in Fort Lauderdale with welcome reception and port tour",
        },
        {
          start: "2026-01-08T09:00:00-05:00",
          end: "2026-01-10T15:00:00-05:00",
          description:
            "Cartagena exploration featuring the historic walled city, San Felipe fortress, and local cuisine",
        },
        {
          start: "2026-01-12T08:00:00-05:00",
          end: "2026-01-14T16:00:00-05:00",
          description:
            "Panama Canal experience with guided commentary and rainforest excursion",
        },
        {
          start: "2026-01-23T10:00:00-10:00",
          end: "2026-01-26T15:00:00-10:00",
          description:
            "Tahiti paradise experience with black sand beaches, waterfall hikes, and Polynesian cultural shows",
        },
        {
          start: "2026-01-30T09:00:00+13:00",
          end: "2026-02-02T16:00:00+13:00",
          description:
            "Auckland city tour, vineyard visits, and Maori cultural experiences",
        },
        {
          start: "2026-02-04T10:00:00+11:00",
          end: "2026-02-07T15:00:00+11:00",
          description:
            "Sydney and Blue Mountains extended tour with Opera House performance and harbor cruise",
        },
        {
          start: "2026-02-12T09:00:00+08:00",
          end: "2026-02-15T16:00:00+08:00",
          description:
            "Bali immersion with temple visits, rice terrace tours, and traditional dance performances",
        },
        {
          start: "2026-02-16T10:00:00+08:00",
          end: "2026-02-19T15:00:00+08:00",
          description:
            "Singapore city exploration with Gardens by the Bay, colonial district tour, and culinary experiences",
        },
        {
          start: "2026-02-25T09:00:00+05:30",
          end: "2026-02-28T16:00:00+05:30",
          description:
            "Mumbai cultural journey with Gateway of India, Elephanta Caves, and Bollywood experiences",
        },
        {
          start: "2026-03-04T10:00:00+04:00",
          end: "2026-03-07T15:00:00+04:00",
          description:
            "Dubai modern marvels tour with desert safari, Burj Khalifa visit, and traditional dinner experience",
        },
        {
          start: "2026-03-14T09:00:00+03:00",
          end: "2026-03-17T16:00:00+03:00",
          description:
            "Istanbul historical exploration with Hagia Sophia, Blue Mosque, and Bosphorus cruise",
        },
        {
          start: "2026-03-22T10:00:00+01:00",
          end: "2026-03-25T15:00:00+01:00",
          description:
            "Barcelona city immersion featuring Gaudi masterpieces, Gothic Quarter, and Catalan cuisine",
        },
        {
          start: "2026-03-27T09:00:00+00:00",
          end: "2026-03-30T16:00:00+00:00",
          description:
            "Lisbon exploration with historical Belém district, fado music experience, and port wine tasting",
        },
        {
          start: "2026-04-06T10:00:00-04:00",
          end: "2026-04-09T15:00:00-04:00",
          description:
            "New York City highlights tour with Broadway show, museum visits, and harbor cruise",
        },
        {
          start: "2026-04-10T10:00:00-04:00",
          end: "2026-04-11T16:00:00-04:00",
          description:
            "Fort Lauderdale disembarkation with farewell brunch and optional Everglades excursion",
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
  {
    departureLocation: {
      city: "Singapore",
      country: "Singapore",
      region: "Central Singapore",
      coordinates: { latitude: 1.3521, longitude: 103.8198 },
      timezone: "Asia/Singapore",
      address: "Marina Bay Cruise Centre Singapore",
    },
    arrivalLocation: {
      city: "Singapore",
      country: "Singapore",
      region: "Central Singapore",
      coordinates: { latitude: 1.3521, longitude: 103.8198 },
      timezone: "Asia/Singapore",
      address: "Marina Bay Cruise Centre Singapore",
    },
    category: "premium-luxury",
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
        "90-night premium world cruise exploring the vibrant cities and cultures of Asia, North America, and Oceania.",
      distance: "25,000 nautical miles",
      totalDuration: "90 days",
      timeAtSea: [
        {
          start: "2026-05-10T16:00:00+08:00",
          end: "2026-05-12T08:00:00+07:00",
          description:
            "Sailing from Singapore to Bangkok across the South China Sea.",
        },
        {
          start: "2026-05-14T17:00:00+07:00",
          end: "2026-05-16T09:00:00+07:00",
          description:
            "Crossing from Bangkok to Ho Chi Minh City through the Gulf of Thailand.",
        },
        {
          start: "2026-05-18T16:00:00+07:00",
          end: "2026-05-21T08:00:00+08:00",
          description:
            "Journey from Ho Chi Minh City to Hong Kong across the South China Sea.",
        },
        {
          start: "2026-05-23T17:00:00+08:00",
          end: "2026-05-25T09:00:00+08:00",
          description:
            "Sailing from Hong Kong to Shanghai through the East China Sea.",
        },
        {
          start: "2026-05-27T16:00:00+08:00",
          end: "2026-05-30T08:00:00+09:00",
          description:
            "Crossing from Shanghai to Tokyo across the Sea of Japan.",
        },
        {
          start: "2026-06-08T17:00:00+09:00",
          end: "2026-06-11T09:00:00-07:00",
          description:
            "Transpacific crossing from Tokyo to Vancouver across the Pacific Ocean.",
        },
        {
          start: "2026-06-13T16:00:00-07:00",
          end: "2026-06-15T08:00:00-07:00",
          description:
            "Sailing from Vancouver to Seattle along the Pacific Coast.",
        },
        {
          start: "2026-06-17T17:00:00-07:00",
          end: "2026-06-18T09:00:00-07:00",
          description:
            "Journey from Seattle to San Francisco through the Strait of Juan de Fuca.",
        },
        {
          start: "2026-06-20T16:00:00-07:00",
          end: "2026-06-25T08:00:00-07:00",
          description:
            "Sailing from San Francisco to Los Angeles along the California coast.",
        },
        {
          start: "2026-06-27T17:00:00-10:00",
          end: "2026-06-30T09:00:00-10:00",
          description:
            "Crossing from Los Angeles to Honolulu across the Pacific Ocean.",
        },
        {
          start: "2026-07-02T16:00:00-10:00",
          end: "2026-07-07T08:00:00+12:00",
          description:
            "Sailing from Honolulu to Fiji through the South Pacific waters.",
        },
        {
          start: "2026-07-09T17:00:00+12:00",
          end: "2026-07-11T09:00:00+10:00",
          description: "Journey from Fiji to Sydney across the Coral Sea.",
        },
        {
          start: "2026-07-18T16:00:00+08:00",
          end: "2026-07-20T08:00:00+08:00",
          description:
            "Final sailing from Sydney back to Singapore across the Indian Ocean.",
        },
      ],
      timeOnLand: [
        {
          start: "2026-05-10T08:00:00+08:00",
          end: "2026-05-10T15:00:00+08:00",
          description:
            "Embarkation in Singapore with welcome reception and city tour.",
        },
        {
          start: "2026-05-12T09:00:00+07:00",
          end: "2026-05-14T16:00:00+07:00",
          description:
            "Bangkok cultural immersion with temple visits, river cruises, and street food tours.",
        },
        {
          start: "2026-05-16T08:00:00+07:00",
          end: "2026-05-18T15:00:00+07:00",
          description:
            "Ho Chi Minh City exploration including Cu Chi Tunnels, Mekong Delta, and local markets.",
        },
        {
          start: "2026-05-21T09:00:00+08:00",
          end: "2026-05-23T15:00:00+08:00",
          description:
            "Hong Kong city tour with Victoria Peak, Star Ferry ride, and local dim sum experience.",
        },
        {
          start: "2026-05-25T10:00:00+08:00",
          end: "2026-05-27T15:00:00+08:00",
          description:
            "Shanghai cultural experience with The Bund, Yu Garden, and Shanghai Tower visit.",
        },
        {
          start: "2026-05-30T09:00:00+09:00",
          end: "2026-06-01T16:00:00+09:00",
          description:
            "Tokyo exploration with Shibuya, Shinjuku, and traditional tea ceremony experiences.",
        },
        {
          start: "2026-06-11T10:00:00-07:00",
          end: "2026-06-13T15:00:00-07:00",
          description:
            "Vancouver city highlights including Stanley Park, Granville Island, and Capilano Suspension Bridge.",
        },
        {
          start: "2026-06-15T09:00:00-07:00",
          end: "2026-06-17T16:00:00-07:00",
          description:
            "Seattle cultural immersion with Pike Place Market, Space Needle, and Chihuly Garden and Glass.",
        },
        {
          start: "2026-06-18T10:00:00-07:00",
          end: "2026-06-20T15:00:00-07:00",
          description:
            "San Francisco exploration with Golden Gate Bridge, Alcatraz Island, and Fisherman's Wharf.",
        },
        {
          start: "2026-06-25T09:00:00-07:00",
          end: "2026-06-27T16:00:00-10:00",
          description:
            "Los Angeles city tour with Hollywood, Beverly Hills, and Santa Monica Pier.",
        },
        {
          start: "2026-06-30T10:00:00-10:00",
          end: "2026-07-02T15:00:00-10:00",
          description:
            "Honolulu cultural experience with Pearl Harbor, Diamond Head, and traditional Hawaiian luau.",
        },
        {
          start: "2026-07-07T09:00:00+12:00",
          end: "2026-07-09T16:00:00+12:00",
          description:
            "Fiji island exploration with coral reefs, local villages, and beach relaxation.",
        },
        {
          start: "2026-07-11T10:00:00+10:00",
          end: "2026-07-13T15:00:00+10:00",
          description:
            "Sydney city tour with Sydney Opera House, Harbour Bridge, and Bondi Beach.",
        },
        {
          start: "2026-07-20T09:00:00+08:00",
          end: "2026-07-20T16:00:00+08:00",
          description:
            "Disembarkation in Singapore with farewell brunch and optional city tour.",
        },
      ],
    },
    requiredDocuments: [
      "Valid Passport",
      "Multiple Entry Visas",
      "COVID-19 Vaccination Record",
      "Health Declaration Form",
    ],
    cancellationPolicy:
      "Full refund if canceled 90 days before departure; 75% refund up to 60 days; 50% refund up to 30 days; no refund within 30 days",
    tourCategoryId: "world-cruise",
    contactPersonnel: [
      {
        name: "Sophia Tan",
        role: "Asia-Pacific Cruise Director",
        description:
          "Experienced cruise director specializing in Asia-Pacific voyages",
        languages: ["English", "Mandarin", "Malay"],
        experienceYears: 15,
        profileImage:
          "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
        contact: {
          contactNumber: "+65 800 555 1234",
        },
      },
    ],
    title: "Asia-Pacific World Cruise",
    description:
      "Embark on a 90-night premium world cruise exploring the vibrant cities and cultures of Asia, North America, and Oceania with luxurious amenities and unforgettable experiences.",
    tags: ["world-cruise", "premium", "asia-pacific"],
    rating: 4.7,
    isFamilyFriendly: true,
    isLuxuryCruise: true,
    basePrice: 15999,
  },
];

export default worldCruises;
