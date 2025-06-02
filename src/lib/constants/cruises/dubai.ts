import { Cruise } from "@/lib/interfaces/services/cruises";

export const dubaiCruises: Cruise[] = [
  {
    departureLocation: {
      city: "Dubai",
      country: "United Arab Emirates",
      region: "Middle East",
      coordinates: { latitude: 25.276987, longitude: 55.296249 },
      address: "Dubai Cruise Terminal, Port Rashid, Dubai",
      timezone: "Asia/Dubai",
      additionalInfo: "State-of-the-art terminal with luxury amenities.",
    },
    arrivalLocation: {
      city: "Muscat",
      country: "Oman",
      region: "Middle East",
      coordinates: { latitude: 23.588, longitude: 58.3829 },
      timezone: "Asia/Muscat",
    },
    category: "premium",
    itinerary: {
      route: [
        { city: "Dubai", country: "United Arab Emirates" },
        { city: "Sir Bani Yas Island", country: "United Arab Emirates" },
        { city: "Muscat", country: "Oman" },
      ],
      description:
        "5-night premium cruise exploring the Arabian Gulf’s cultural and natural highlights from Dubai to Muscat.",
      distance: "550 nautical miles",
      totalDuration: "5 days",
      timeAtSea: [
        {
          start: "2025-11-01T18:00:00+04:00",
          end: "2025-11-02T08:00:00+04:00",
          description: "Sailing from Dubai towards Sir Bani Yas Island.",
        },
        {
          start: "2025-11-03T18:00:00+04:00",
          end: "2025-11-04T08:00:00+04:00",
          description: "Overnight sailing to Muscat.",
        },
      ],
      timeOnLand: [
        {
          start: "2025-11-02T08:00:00+04:00",
          end: "2025-11-03T18:00:00+04:00",
          description:
            "Explore Sir Bani Yas Island’s wildlife sanctuary and desert landscapes.",
        },
        {
          start: "2025-11-04T08:00:00+04:00",
          end: "2025-11-06T10:00:00+04:00",
          description:
            "Discover Muscat’s historic forts, souks, and stunning coastline.",
        },
      ],
    },
    requiredDocuments: [
      "Valid Passport",
      "Visa for Oman (if applicable)",
      "Health clearance certificate",
    ],
    cancellationPolicy:
      "Full refund if canceled 45 days before departure, 25% charge 30-44 days prior, no refund within 30 days",
    tourCategoryId: "luxury-cruise",
    contactPersonnel: [
      {
        name: "Ahmed Al Mansoori",
        role: "Cruise Director",
        description: "Cruise Director",
        bio: "Experienced guide with 15 years in Middle Eastern luxury cruises.",
        languages: ["English", "Arabic"],
        experienceYears: 15,
        profileImage:
          "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91",
        contact: {
          contactEmail: "ahmed.mansoori@dubaicruises.com",
          contactNumber: "+971 4 123 4567",
        },
      },
    ],
    title: "Premium Arabian Gulf Cruise: Dubai to Muscat",
    description:
      "Experience luxury and culture on this 5-night premium cruise from Dubai to Muscat, including a stop at the pristine Sir Bani Yas Island.",
    tags: ["premium", "arabian gulf", "luxury", "wildlife", "culture"],
    basePrice: 1200,
    rating: 4.7,
    isFamilyFriendly: true,
    isCulturalExperience: true,
    isLuxuryCruise: true,
  },
  {
    departureLocation: {
      city: "Dubai",
      country: "United Arab Emirates",
      region: "Middle East",
      coordinates: { latitude: 25.276987, longitude: 55.296249 },
      timezone: "Asia/Dubai",
      address: "Port Rashid, Dubai",
    },
    arrivalLocation: {
      city: "Abu Dhabi",
      country: "United Arab Emirates",
      region: "Middle East",
      coordinates: { latitude: 24.453884, longitude: 54.377344 },
      timezone: "Asia/Dubai",
      address: "Zayed Port, Abu Dhabi",
    },
    category: "premium",
    itinerary: {
      route: [
        {
          city: "Dubai",
          country: "United Arab Emirates",
          region: "Middle East",
          coordinates: { latitude: 25.276987, longitude: 55.296249 },
          address: "Port Rashid, Dubai",
        },
        {
          city: "Sharjah",
          country: "United Arab Emirates",
          region: "Middle East",
          coordinates: { latitude: 25.346255, longitude: 55.420932 },
          address: "Sharjah Port",
        },
        {
          city: "Abu Dhabi",
          country: "United Arab Emirates",
          region: "Middle East",
          coordinates: { latitude: 24.453884, longitude: 54.377344 },
          address: "Zayed Port, Abu Dhabi",
        },
      ],
      description:
        "Experience the vibrant culture and luxury of the UAE, cruising through Dubai, Sharjah, and Abu Dhabi with world-class amenities and desert views.",
      distance: "240 nautical miles",
      totalDuration: "5 days",
      timeAtSea: [
        {
          start: "2025-10-01T08:00:00+04:00",
          end: "2025-10-02T08:00:00+04:00",
          duration: "1 day",
          description:
            "Sailing from Dubai to Sharjah with onboard activities and entertainment.",
        },
        {
          start: "2025-10-03T18:00:00+04:00",
          end: "2025-10-04T06:00:00+04:00",
          duration: "12 hours",
          description: "Night cruise from Sharjah to Abu Dhabi.",
        },
      ],
      timeOnLand: [
        {
          start: "2025-10-01T08:00:00+04:00",
          end: "2025-10-01T18:00:00+04:00",
          duration: "10 hours",
          description:
            "Explore Dubai's iconic landmarks including Burj Khalifa and Dubai Marina.",
        },
        {
          start: "2025-10-02T08:00:00+04:00",
          end: "2025-10-03T18:00:00+04:00",
          duration: "1 day 10 hours",
          description: "Visit Sharjah’s museums, souks, and cultural sites.",
        },
        {
          start: "2025-10-04T06:00:00+04:00",
          end: "2025-10-06T08:00:00+04:00",
          duration: "2 days 2 hours",
          description:
            "Enjoy Abu Dhabi’s attractions including Sheikh Zayed Mosque and Yas Island.",
        },
      ],
    },
    requiredDocuments: [
      "Passport",
      "Visa (if applicable)",
      "COVID-19 Vaccination Certificate",
    ],
    requirements: ["No pets allowed", "Minimum age 12 years"],
    cancellationPolicy:
      "Full refund available up to 30 days before departure; 50% refund up to 15 days before; no refund within 14 days of departure.",
    tourCategoryId: "vip-cruise",
    contactPersonnel: [
      {
        name: "Sara Al Mansoori",
        role: "Senior Cruise Coordinator",
        description:
          "Senior Cruise Coordinator specializing in Middle Eastern tours.",
        languages: ["English", "Arabic"],
        experienceYears: 8,
        profileImage:
          "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91",
        contact: {
          contactNumber: "+971 4 123 4567",
          contactEmail: "sara.al-mansoori@cruiseco.com",
        },
      },
      {
        name: "James Harper",
        role: "Customer Service Manager",
        description:
          "Customer Service Manager with expertise in luxury cruises.",
        languages: ["English"],
        experienceYears: 10,
        profileImage:
          "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
        contact: {
          contactNumber: "+971 4 987 6543",
          contactEmail: "james.harper@cruiseco.com",
        },
      },
    ],
    isCulturalExperience: true,
    isLuxuryCruise: true,
    isWeekendCruise: false,
    title: "Dubai & Emirates Luxury Experience Cruise",
    description:
      "Discover the grandeur of Dubai and the cultural riches of the Emirates on this premium 5-day cruise, featuring exquisite dining, exclusive shore excursions, and luxury amenities.",
    tags: ["luxury", "cultural", "Middle East", "premium", "emirates"],
    basePrice: 1500,
    rating: 4.8,
    faqs: [
      {
        question: "Is this cruise suitable for families with children?",
        answer:
          "While children aged 12 and over are welcome, this cruise is tailored more for adult travelers seeking a luxury experience.",
      },
      {
        question: "Are shore excursions included in the price?",
        answer:
          "Some excursions are included; others can be booked separately onboard or prior to departure.",
      },
    ],
  },
  {
    departureLocation: {
      city: "Dubai",
      country: "United Arab Emirates",
      region: "Middle East",
      coordinates: { latitude: 25.276987, longitude: 55.296249 },
      timezone: "Asia/Dubai",
      address: "Port Rashid, Dubai",
    },
    arrivalLocation: {
      city: "Muscat",
      country: "Oman",
      region: "Middle East",
      coordinates: { latitude: 23.588, longitude: 58.3829 },
      timezone: "Asia/Muscat",
      address: "Port Sultan Qaboos, Muscat",
    },
    category: "entry-luxury",
    itinerary: {
      route: [
        {
          city: "Dubai",
          country: "United Arab Emirates",
          region: "Middle East",
          coordinates: { latitude: 25.276987, longitude: 55.296249 },
          address: "Port Rashid, Dubai",
        },
        {
          city: "Khasab",
          country: "Oman",
          region: "Middle East",
          coordinates: { latitude: 26.1762, longitude: 56.2406 },
          address: "Khasab Port",
        },
        {
          city: "Muscat",
          country: "Oman",
          region: "Middle East",
          coordinates: { latitude: 23.588, longitude: 58.3829 },
          address: "Port Sultan Qaboos, Muscat",
        },
      ],
      description:
        "Explore the beautiful Arabian Peninsula from Dubai to Muscat with stops in Khasab for fjord-like landscapes.",
      distance: "400 nautical miles",
      totalDuration: "6 days",
      timeAtSea: [
        {
          start: "2025-11-01T08:00:00+04:00",
          end: "2025-11-02T20:00:00+04:00",
          duration: "1 day 12 hours",
          description:
            "Sailing from Dubai to Khasab through the Strait of Hormuz.",
        },
        {
          start: "2025-11-03T18:00:00+04:00",
          end: "2025-11-04T06:00:00+04:00",
          duration: "12 hours",
          description: "Night cruise from Khasab to Muscat.",
        },
      ],
      timeOnLand: [
        {
          start: "2025-11-02T20:00:00+04:00",
          end: "2025-11-03T18:00:00+04:00",
          duration: "22 hours",
          description:
            "Explore Khasab’s fjords and mountains with optional kayaking.",
        },
        {
          start: "2025-11-04T06:00:00+04:00",
          end: "2025-11-07T08:00:00+04:00",
          duration: "3 days 2 hours",
          description: "Discover Muscat’s rich heritage, markets, and beaches.",
        },
      ],
    },
    requiredDocuments: [
      "Passport",
      "Oman Visa",
      "COVID-19 Vaccination Certificate",
    ],
    requirements: ["Minimum age 10 years", "No pets allowed"],
    cancellationPolicy:
      "Full refund if canceled 45 days before; 50% refund up to 20 days before; no refund within 14 days.",
    tourCategoryId: "fjords-tour",
    contactPersonnel: [
      {
        name: "Omar Al Farsi",
        role: "Cruise Guide",
        description: "Cruise Guide with expertise in Arabian Peninsula tours.",
        languages: ["English", "Arabic"],
        experienceYears: 7,
        profileImage:
          "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f92",
        contact: {
          contactNumber: "+971 4 765 4321",
          contactEmail: "omar.al-farsi@cruiseco.com",
        },
      },
    ],
    isCulturalExperience: true,
    isFjordsTour: true,
    title: "Dubai to Muscat Arabian Peninsula Cruise",
    description:
      "Entry-level luxury cruise visiting dramatic fjords of Oman and the vibrant city of Muscat from Dubai.",
    tags: ["entry-luxury", "cultural", "fjord", "Arabian Gulf"],
    basePrice: 800,
    rating: 4.5,
  },
  {
    departureLocation: {
      city: "Dubai",
      country: "United Arab Emirates",
      region: "Middle East",
      coordinates: { latitude: 25.276987, longitude: 55.296249 },
      timezone: "Asia/Dubai",
      address: "Port Rashid, Dubai",
    },
    arrivalLocation: {
      city: "Doha",
      country: "Qatar",
      region: "Middle East",
      coordinates: { latitude: 25.285447, longitude: 51.53104 },
      timezone: "Asia/Qatar",
      address: "Hamad Port, Doha",
    },
    category: "mainstream",
    itinerary: {
      route: [
        {
          city: "Dubai",
          country: "United Arab Emirates",
          region: "Middle East",
          coordinates: { latitude: 25.276987, longitude: 55.296249 },
          address: "Port Rashid, Dubai",
        },
        {
          city: "Ras Al Khaimah",
          country: "United Arab Emirates",
          region: "Middle East",
          coordinates: { latitude: 25.8, longitude: 55.9764 },
          address: "Ras Al Khaimah Port",
        },
        {
          city: "Doha",
          country: "Qatar",
          region: "Middle East",
          coordinates: { latitude: 25.285447, longitude: 51.53104 },
          address: "Hamad Port, Doha",
        },
      ],
      description:
        "Standard cruise visiting Dubai, Ras Al Khaimah, and Doha, featuring a balance of relaxation and cultural excursions.",
      distance: "350 nautical miles",
      totalDuration: "5 days",
      timeAtSea: [
        {
          start: "2025-12-01T09:00:00+04:00",
          end: "2025-12-02T21:00:00+04:00",
          duration: "1 day 12 hours",
          description:
            "Cruising from Dubai to Ras Al Khaimah with onboard activities.",
        },
        {
          start: "2025-12-03T18:00:00+04:00",
          end: "2025-12-04T06:00:00+04:00",
          duration: "12 hours",
          description: "Night sailing from Ras Al Khaimah to Doha.",
        },
      ],
      timeOnLand: [
        {
          start: "2025-12-02T21:00:00+04:00",
          end: "2025-12-03T18:00:00+04:00",
          duration: "21 hours",
          description:
            "Ras Al Khaimah exploration: mountains, beaches, and historic forts.",
        },
        {
          start: "2025-12-04T06:00:00+04:00",
          end: "2025-12-06T10:00:00+04:00",
          duration: "2 days 4 hours",
          description:
            "Doha city tours including Souq Waqif, Museum of Islamic Art, and Corniche.",
        },
      ],
    },
    requiredDocuments: [
      "Passport",
      "Visa if required",
      "COVID-19 Vaccination Certificate",
    ],
    requirements: ["Minimum age 12 years", "No pets allowed"],
    cancellationPolicy:
      "Full refund if canceled 30 days before; 75% refund up to 15 days before; no refund within 14 days.",
    tourCategoryId: "theme-cruise",
    contactPersonnel: [
      {
        name: "Layla Hassan",
        role: "Cruise Manager",
        description:
          "Experienced cruise manager specializing in Gulf region itineraries.",
        languages: ["English", "Arabic"],
        experienceYears: 6,
        profileImage:
          "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f93",
        contact: {
          contactNumber: "+971 4 234 5678",
          contactEmail: "layla.hassan@cruiseco.com",
        },
      },
    ],
    isCulturalExperience: true,
    title: "Dubai to Doha Gulf Cultural Cruise",
    description:
      "Standard cruise connecting Dubai, Ras Al Khaimah, and Doha with cultural highlights and leisure.",
    tags: ["standard", "cultural", "Gulf"],
    basePrice: 600,
    rating: 4.3,
    faqs: [
      {
        question: "What is the dress code for onboard dining?",
        answer:
          "Smart casual attire is recommended for dining. Formal wear is required for specialty restaurants.",
      },
      {
        question: "Are there any age restrictions for excursions?",
        answer:
          "Most excursions are suitable for all ages, but some may have minimum age requirements for safety reasons.",
      },
    ],
    isFamilyFriendly: true,
    isLuxuryCruise: false,
    isVIPCruise: false,
    isThemeCruise: false,
  },
];
