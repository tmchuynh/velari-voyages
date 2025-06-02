import { Cruise } from "@/lib/interfaces/services/cruises";

export const aucklandCruises: Cruise[] = [
  {
    departureLocation: {
      city: "Auckland",
      country: "New Zealand",
      coordinates: { latitude: -36.8485, longitude: 174.7633 },
      address: "Auckland Cruise Terminal, Princes Wharf",
      timezone: "Pacific/Auckland",
      additionalInfo: "Central location with easy access to city amenities.",
    },
    arrivalLocation: {
      city: "Wellington",
      country: "New Zealand",
      coordinates: { latitude: -41.2865, longitude: 174.7762 },
      timezone: "Pacific/Auckland",
    },
    category: "premium",
    itinerary: {
      route: [
        { city: "Auckland", country: "New Zealand" },
        { city: "Bay of Islands", country: "New Zealand" },
        { city: "Wellington", country: "New Zealand" },
      ],
      description:
        "7-night premium cruise exploring New Zealand’s North Island highlights from Auckland to Wellington.",
      distance: "650 nautical miles",
      totalDuration: "7 days",
      timeAtSea: [
        {
          start: "2025-02-01T18:00:00+13:00",
          end: "2025-02-02T08:00:00+13:00",
          description: "Overnight sailing from Auckland to Bay of Islands.",
        },
        {
          start: "2025-02-04T18:00:00+13:00",
          end: "2025-02-06T08:00:00+13:00",
          description:
            "Sailing from Bay of Islands to Wellington with scenic views.",
        },
      ],
      timeOnLand: [
        {
          start: "2025-02-02T08:00:00+13:00",
          end: "2025-02-04T18:00:00+13:00",
          description:
            "Explore the beautiful Bay of Islands, including Paihia and historic Waitangi.",
        },
        {
          start: "2025-02-06T08:00:00+13:00",
          end: "2025-02-08T09:00:00+13:00",
          description:
            "Discover Wellington’s vibrant arts scene and waterfront.",
        },
      ],
    },
    requiredDocuments: ["Valid Passport", "Visa if applicable"],
    cancellationPolicy: "Full refund if canceled 45 days prior to departure",
    tourCategoryId: "luxury-cruise",
    contactPersonnel: [
      {
        name: "Emma Wilson",
        role: "Cruise Director",
        bio: "Over 15 years managing premium cruises around New Zealand and the South Pacific.",
        languages: ["English"],
        experienceYears: 15,
        profileImage:
          "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91",
        contact: {
          contactEmail: "ewilson@aucklandcruises.com",
          contactNumber: "+64 9 555 6789",
        },
      },
    ],
    title: "Auckland to Wellington Premium Cruise",
    description:
      "Experience New Zealand’s North Island in comfort and style on this 7-night premium cruise from Auckland to Wellington.",
    tags: ["premium", "New Zealand", "North Island", "nature", "cultural"],
    rating: 4.7,
    isFamilyFriendly: true,
    isCulturalExperience: true,
    isLuxuryCruise: true,
    basePrice: 3500,
  },
  {
    departureLocation: {
      city: "Auckland",
      country: "New Zealand",
      coordinates: { latitude: -36.8485, longitude: 174.7633 },
      address: "Auckland Cruise Terminal, Princes Wharf",
      timezone: "Pacific/Auckland",
    },
    arrivalLocation: {
      city: "Tauranga",
      country: "New Zealand",
      timezone: "Pacific/Auckland",
    },
    category: "mainstream",
    itinerary: {
      route: [
        { city: "Auckland", country: "New Zealand" },
        { city: "Coromandel Peninsula", country: "New Zealand" },
        { city: "Tauranga", country: "New Zealand" },
      ],
      description:
        "5-night mainstream cruise visiting scenic Coromandel Peninsula and Tauranga.",
      distance: "400 nautical miles",
      totalDuration: "5 days",
      timeAtSea: [
        {
          start: "2025-03-10T17:00:00+13:00",
          end: "2025-03-11T07:00:00+13:00",
          description: "Evening sail from Auckland to Coromandel Peninsula.",
        },
        {
          start: "2025-03-13T18:00:00+13:00",
          end: "2025-03-14T09:00:00+13:00",
          description: "Sailing from Coromandel Peninsula to Tauranga.",
        },
      ],
      timeOnLand: [
        {
          start: "2025-03-11T07:00:00+13:00",
          end: "2025-03-13T18:00:00+13:00",
          description:
            "Explore the Coromandel Peninsula's beaches, forests, and local culture.",
        },
        {
          start: "2025-03-14T09:00:00+13:00",
          end: "2025-03-15T11:00:00+13:00",
          description:
            "Visit Tauranga’s waterfront, Mount Maunganui, and local markets.",
        },
      ],
    },
    requiredDocuments: ["Valid Passport"],
    cancellationPolicy: "50% refund if canceled 30 days prior to departure",
    tourCategoryId: "theme-cruise",
    contactPersonnel: [
      {
        name: "Liam Turner",
        role: "Tour Guide",
        bio: "Experienced in New Zealand coastal tours and local history.",
        languages: ["English", "Maori"],
        experienceYears: 8,
        profileImage:
          "https://images.unsplash.com/photo-1511367461989-f85a21fda167",
        contact: {
          contactEmail: "lturner@aucklandcruises.com",
          contactNumber: "+64 9 555 6790",
        },
      },
    ],
    title: "Coromandel & Tauranga Coastal Cruise",
    description:
      "Discover the beautiful Coromandel Peninsula and Tauranga on this 5-night cruise full of coastal charm and natural beauty.",
    tags: ["mainstream", "New Zealand", "nature", "beach", "family"],
    rating: 4.3,
    isFamilyFriendly: true,
    basePrice: 1800,
  },
  {
    departureLocation: {
      city: "Auckland",
      country: "New Zealand",
      timezone: "Pacific/Auckland",
    },
    arrivalLocation: {
      city: "Bay of Islands",
      country: "New Zealand",
      timezone: "Pacific/Auckland",
    },
    category: "entry-luxury",
    itinerary: {
      route: [
        { city: "Auckland", country: "New Zealand" },
        { city: "Bay of Islands", country: "New Zealand" },
      ],
      description:
        "4-night entry-luxury cruise to the stunning Bay of Islands with exclusive amenities.",
      distance: "320 nautical miles",
      totalDuration: "4 days",
      timeAtSea: [
        {
          start: "2025-04-05T16:00:00+13:00",
          end: "2025-04-06T06:00:00+13:00",
          description: "Evening sail from Auckland to Bay of Islands.",
        },
      ],
      timeOnLand: [
        {
          start: "2025-04-06T06:00:00+13:00",
          end: "2025-04-09T10:00:00+13:00",
          description:
            "Relax and explore the Bay of Islands, including historic Russell and water activities.",
        },
      ],
    },
    requiredDocuments: ["Valid Passport"],
    cancellationPolicy: "Full refund if canceled 60 days prior",
    tourCategoryId: "anniversary-cruise",
    contactPersonnel: [
      {
        name: "Sophie Chen",
        role: "Luxury Cruise Coordinator",
        bio: "Specializes in curating luxurious experiences for entry-level luxury travelers.",
        languages: ["English", "Mandarin"],
        experienceYears: 10,
        profileImage:
          "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
        contact: {
          contactEmail: "schen@aucklandcruises.com",
          contactNumber: "+64 9 555 6791",
        },
      },
    ],
    title: "Bay of Islands Entry-Luxury Escape",
    description:
      "Experience the beauty of the Bay of Islands with the comforts of entry-level luxury on this 4-night cruise.",
    tags: ["entry-luxury", "Bay of Islands", "luxury", "relaxation", "nature"],
    rating: 4.6,
    isLuxuryCruise: true,
    basePrice: 2800,
  },
  {
    departureLocation: {
      city: "Auckland",
      country: "New Zealand",
      timezone: "Pacific/Auckland",
    },
    arrivalLocation: {
      city: "Napier",
      country: "New Zealand",
      timezone: "Pacific/Auckland",
    },
    category: "mainstream",
    itinerary: {
      route: [
        { city: "Auckland", country: "New Zealand" },
        { city: "Gisborne", country: "New Zealand" },
        { city: "Napier", country: "New Zealand" },
      ],
      description:
        "6-night mainstream cruise along the east coast visiting Gisborne and the Art Deco city of Napier.",
      distance: "700 nautical miles",
      totalDuration: "6 days",
      timeAtSea: [
        {
          start: "2025-05-12T17:00:00+13:00",
          end: "2025-05-13T07:00:00+13:00",
          description: "Sailing from Auckland to Gisborne overnight.",
        },
        {
          start: "2025-05-15T18:00:00+13:00",
          end: "2025-05-16T08:00:00+13:00",
          description: "Sailing from Gisborne to Napier.",
        },
      ],
      timeOnLand: [
        {
          start: "2025-05-13T07:00:00+13:00",
          end: "2025-05-15T18:00:00+13:00",
          description:
            "Explore Gisborne’s beaches, vineyards, and Maori heritage sites.",
        },
        {
          start: "2025-05-16T08:00:00+13:00",
          end: "2025-05-18T09:00:00+13:00",
          description:
            "Visit Napier’s famous Art Deco architecture and local wineries.",
        },
      ],
    },
    requiredDocuments: ["Valid Passport"],
    cancellationPolicy: "25% refund if canceled 30 days prior",
    tourCategoryId: "fall-foliage-cruise",
    contactPersonnel: [
      {
        name: "Michael Harris",
        role: "Cruise Manager",
        bio: "Expert in New Zealand coastal cruises with a focus on cultural experiences.",
        languages: ["English"],
        experienceYears: 12,
        profileImage:
          "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
        contact: {
          contactEmail: "mharris@aucklandcruises.com",
          contactNumber: "+64 9 555 6792",
        },
      },
    ],
    title: "East Coast Explorer: Auckland to Napier",
    description:
      "Discover the east coast of New Zealand’s North Island, with stops in Gisborne and Napier on this 6-night cruise.",
    tags: ["mainstream", "New Zealand", "coastal", "culture", "wine"],
    rating: 4.2,
    isFamilyFriendly: true,
    basePrice: 2100,
  },
  // Added new cruises below:
  {
    departureLocation: {
      city: "Auckland",
      country: "New Zealand",
      timezone: "Pacific/Auckland",
      address: "Auckland Cruise Terminal, Princes Wharf",
    },
    arrivalLocation: {
      city: "Great Barrier Island",
      country: "New Zealand",
      timezone: "Pacific/Auckland",
    },
    category: "mainstream",
    itinerary: {
      route: [
        { city: "Auckland", country: "New Zealand" },
        { city: "Great Barrier Island", country: "New Zealand" },
      ],
      description:
        "3-night mainstream cruise to Great Barrier Island, known for hiking and marine wildlife.",
      distance: "90 nautical miles",
      totalDuration: "3 days",
      timeAtSea: [
        {
          start: "2025-06-01T16:00:00+12:00",
          end: "2025-06-02T06:00:00+12:00",
          description: "Evening sail to Great Barrier Island.",
        },
      ],
      timeOnLand: [
        {
          start: "2025-06-02T06:00:00+12:00",
          end: "2025-06-04T10:00:00+12:00",
          description:
            "Hiking, kayaking, and wildlife watching on Great Barrier Island.",
        },
      ],
    },
    requiredDocuments: ["Valid Passport"],
    cancellationPolicy: "Non-refundable within 14 days of departure",
    tourCategoryId: "weekend-cruise",
    contactPersonnel: [
      {
        name: "Olivia Green",
        role: "Adventure Cruise Leader",
        bio: "Specializes in outdoor adventure and eco-friendly tours.",
        languages: ["English"],
        experienceYears: 7,
        profileImage:
          "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
        contact: {
          contactEmail: "ogreen@aucklandcruises.com",
          contactNumber: "+64 9 555 6793",
        },
      },
    ],
    title: "Great Barrier Island mainstream Cruise",
    description:
      "Enjoy a 3-night mainstream exploring Great Barrier Island’s natural beauty and outdoor activities.",
    tags: ["mainstream", "nature", "hiking", "wildlife", "New Zealand"],
    rating: 4.8,
    isFamilyFriendly: false,
    basePrice: 1400,
  },
  {
    departureLocation: {
      city: "Auckland",
      country: "New Zealand",
      timezone: "Pacific/Auckland",
    },
    arrivalLocation: {
      city: "Rangitoto Island",
      country: "New Zealand",
      timezone: "Pacific/Auckland",
    },
    category: "mainstream",
    itinerary: {
      route: [
        { city: "Auckland", country: "New Zealand" },
        { city: "Rangitoto Island", country: "New Zealand" },
        { city: "Auckland", country: "New Zealand" },
      ],
      description:
        "Day cruise to Rangitoto Island featuring volcanic landscapes and coastal walks.",
      distance: "20 nautical miles round trip",
      totalDuration: "1 day",
      timeAtSea: [
        {
          start: "2025-07-10T09:00:00+12:00",
          end: "2025-07-10T10:00:00+12:00",
          description: "Morning sail to Rangitoto Island.",
        },
        {
          start: "2025-07-10T16:00:00+12:00",
          end: "2025-07-10T17:00:00+12:00",
          description: "Return sail to Auckland.",
        },
      ],
      timeOnLand: [
        {
          start: "2025-07-10T10:00:00+12:00",
          end: "2025-07-10T16:00:00+12:00",
          description:
            "Explore Rangitoto’s volcanic cones, lava caves, and walking trails.",
        },
      ],
    },
    requiredDocuments: ["Photo ID recommended"],
    cancellationPolicy: "Full refund if canceled 7 days prior",
    tourCategoryId: "weekend-cruise",
    contactPersonnel: [
      {
        name: "James Wong",
        role: "Day Trip Coordinator",
        bio: "Expert in short coastal cruises and island tours around Auckland.",
        languages: ["English", "Cantonese"],
        experienceYears: 5,
        profileImage:
          "https://images.unsplash.com/photo-1511367461989-f85a21fda167",
        contact: {
          contactEmail: "jwong@aucklandcruises.com",
          contactNumber: "+64 9 555 6794",
        },
      },
    ],
    title: "Rangitoto Island Day Cruise",
    description:
      "Enjoy a scenic day cruise from Auckland to Rangitoto Island with time for hiking and exploration.",
    tags: ["mainstream", "volcano", "hiking", "nature", "family"],
    rating: 4.5,
    isFamilyFriendly: true,
    basePrice: 200,
  },
  {
    departureLocation: {
      city: "Auckland",
      country: "New Zealand",
      timezone: "Pacific/Auckland",
    },
    arrivalLocation: {
      city: "Whangarei",
      country: "New Zealand",
      timezone: "Pacific/Auckland",
    },
    category: "luxury",
    itinerary: {
      route: [
        { city: "Auckland", country: "New Zealand" },
        { city: "Whangarei", country: "New Zealand" },
      ],
      description:
        "5-night luxury cruise to Whangarei featuring spa services and gourmet dining.",
      distance: "160 nautical miles",
      totalDuration: "5 days",
      timeAtSea: [
        {
          start: "2025-08-20T18:00:00+12:00",
          end: "2025-08-21T07:00:00+12:00",
          description: "Evening sail to Whangarei.",
        },
      ],
      timeOnLand: [
        {
          start: "2025-08-21T07:00:00+12:00",
          end: "2025-08-25T11:00:00+12:00",
          description:
            "Enjoy Whangarei’s art galleries, hiking trails, and luxury spa experiences.",
        },
      ],
    },
    requiredDocuments: ["Valid Passport", "Travel Insurance recommended"],
    cancellationPolicy: "Full refund if canceled 30 days prior",
    tourCategoryId: "vip-cruise",
    contactPersonnel: [
      {
        name: "Isabella Martinez",
        role: "Luxury Cruise Concierge",
        bio: "Dedicated to creating seamless and indulgent luxury cruise experiences.",
        languages: ["English", "Spanish"],
        experienceYears: 14,
        profileImage:
          "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
        contact: {
          contactEmail: "imartinez@aucklandcruises.com",
          contactNumber: "+64 9 555 6795",
        },
      },
    ],
    title: "Whangarei Luxury Wellness Cruise",
    description:
      "A 5-night luxury cruise focusing on wellness, gourmet food, and relaxation en route to Whangarei.",
    tags: ["luxury", "wellness", "spa", "gourmet", "New Zealand"],
    rating: 4.9,
    isLuxuryCruise: true,
    basePrice: 4200,
  },
];
