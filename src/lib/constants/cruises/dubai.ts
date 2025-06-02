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
      city: "Dubai",
      country: "United Arab Emirates",
      region: "Middle East",
      coordinates: { latitude: 25.276987, longitude: 55.296249 },
      timezone: "Asia/Dubai",
      address: "Port Rashid, Dubai",
    },
    category: "mainstream",
    itinerary: {
      route: [
        { city: "Dubai", country: "United Arab Emirates" },
        { city: "Abu Dhabi", country: "United Arab Emirates" },
        { city: "Sir Bani Yas Island", country: "United Arab Emirates" },
        { city: "Dammam", country: "Saudi Arabia" },
        { city: "Doha", country: "Qatar" },
        { city: "Dubai", country: "United Arab Emirates" },
      ],
      description:
        "7-night Middle Eastern cruise on the eco-friendly MSC Euribia, showcasing the best of the Arabian Gulf.",
      distance: "980 nautical miles",
      totalDuration: "7 days",
      timeAtSea: [
        {
          start: "2025-11-20T18:00:00+04:00",
          end: "2025-11-27T07:00:00+04:00",
          description:
            "Cruising through the Arabian Gulf on the eco-advanced MSC Euribia",
        },
      ],
      timeOnLand: [
        {
          start: "2025-11-21T08:00:00+04:00",
          end: "2025-11-21T18:00:00+04:00",
          description:
            "Explore Abu Dhabi including Sheikh Zayed Grand Mosque and Ferrari World",
        },
        {
          start: "2025-11-22T09:00:00+04:00",
          end: "2025-11-22T17:00:00+04:00",
          description: "Beach day and wildlife safari on Sir Bani Yas Island",
        },
        {
          start: "2025-11-23T07:00:00+03:00",
          end: "2025-11-23T16:00:00+03:00",
          description: "Cultural exploration in Dammam with desert adventures",
        },
        {
          start: "2025-11-24T08:00:00+03:00",
          end: "2025-11-24T17:00:00+03:00",
          description:
            "Discover Doha's modern architecture and traditional souks",
        },
      ],
    },
    requiredDocuments: [
      "Valid Passport",
      "Saudi Arabia Visa (for some nationalities)",
      "Qatar Visa (for some nationalities)",
    ],
    cancellationPolicy:
      "Full refund if canceled 60 days before departure; 50% refund up to 30 days; no refund within 30 days",
    tourCategoryId: "middle-east-cruise",
    contactPersonnel: [
      {
        name: "Marco Rossi",
        role: "Cruise Director",
        description:
          "MSC cruise director specializing in Middle Eastern itineraries",
        languages: ["English", "Italian", "Arabic"],
        experienceYears: 10,
        profileImage:
          "https://images.unsplash.com/photo-1560250097-0b93528c311a",
        contact: {
          contactNumber: "+971 4 888 7777",
          contactEmail: "marco.rossi@msccruises.com",
        },
      },
    ],
    isLuxuryCruise: false,
    isFamilyFriendly: true,
    title: "MSC Euribia Arabian Gulf Experience",
    description:
      "Discover the treasures of the Arabian Gulf aboard the eco-friendly MSC Euribia with stops in the UAE, Saudi Arabia, and Qatar.",
    tags: ["middle-east", "mainstream", "family-friendly", "eco-friendly"],
    basePrice: 904,
    rating: 4.4,
  },
  // 9-day Dubai to Mumbai Cruise
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
      city: "Mumbai",
      country: "India",
      region: "South Asia",
      coordinates: { latitude: 18.9387, longitude: 72.8353 },
      timezone: "Asia/Kolkata",
      address: "Mumbai Port Trust, Mumbai",
    },
    category: "premium",
    itinerary: {
      route: [
        { city: "Dubai", country: "United Arab Emirates" },
        { city: "Muscat", country: "Oman" },
        { city: "Fujairah", country: "United Arab Emirates" },
        { city: "Porbandar", country: "India" },
        { city: "Mumbai", country: "India" },
      ],
      description:
        "9-day Arabian Sea voyage from Dubai to Mumbai, exploring coastal gems of the UAE, Oman, and India.",
      distance: "1,280 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
        {
          start: "2026-02-01T18:00:00+04:00",
          end: "2026-02-02T07:00:00+04:00",
          description: "Sailing from Dubai to Muscat",
        },
        {
          start: "2026-02-03T19:00:00+04:00",
          end: "2026-02-04T07:00:00+04:00",
          description: "Cruising from Muscat to Fujairah",
        },
        {
          start: "2026-02-05T18:00:00+04:00",
          end: "2026-02-07T09:00:00+05:30",
          description: "Sailing across the Arabian Sea to Porbandar",
        },
        {
          start: "2026-02-08T17:00:00+05:30",
          end: "2026-02-09T08:00:00+05:30",
          description: "Final leg from Porbandar to Mumbai",
        },
      ],
      timeOnLand: [
        {
          start: "2026-02-01T08:00:00+04:00",
          end: "2026-02-01T17:00:00+04:00",
          description: "Dubai city tour including Burj Khalifa and Dubai Mall",
        },
        {
          start: "2026-02-02T08:00:00+04:00",
          end: "2026-02-03T18:00:00+04:00",
          description:
            "Muscat exploration with Sultan Qaboos Grand Mosque and Mutrah Souq",
        },
        {
          start: "2026-02-04T08:00:00+04:00",
          end: "2026-02-05T17:00:00+04:00",
          description: "Fujairah heritage tour with Al Bidyah Mosque and Fort",
        },
        {
          start: "2026-02-07T10:00:00+05:30",
          end: "2026-02-08T16:00:00+05:30",
          description: "Porbandar excursion to Mahatma Gandhi's birthplace",
        },
        {
          start: "2026-02-09T09:00:00+05:30",
          end: "2026-02-10T17:00:00+05:30",
          description:
            "Mumbai tour featuring Gateway of India and Elephanta Caves",
        },
      ],
    },
    requiredDocuments: [
      "Valid Passport",
      "Indian Visa",
      "Oman Visa (for some nationalities)",
    ],
    cancellationPolicy:
      "Full refund if canceled 60 days before departure; 50% refund up to 30 days; no refund within 30 days",
    tourCategoryId: "premium-cruise",
    contactPersonnel: [
      {
        name: "Rajiv Sharma",
        role: "Cruise Director",
        description: "Expert in Indo-Arabian cultural experiences",
        languages: ["English", "Hindi", "Arabic"],
        experienceYears: 12,
        profileImage:
          "https://images.unsplash.com/photo-1566753323558-f4e0952af115",
        contact: {
          contactNumber: "+971 4 222 3333",
          contactEmail: "rajiv.sharma@arabiancruises.com",
        },
      },
    ],
    isLuxuryCruise: false,
    isFamilyFriendly: true,
    isCulturalExperience: true,
    title: "Dubai to Mumbai Arabian Sea Journey",
    description:
      "Experience the rich contrasts of the Arabian Peninsula and Indian subcontinent on this 9-day premium voyage.",
    tags: ["premium", "cultural", "arabian-sea", "india"],
    basePrice: 1850,
    rating: 4.6,
  },
  // 12-day Dubai to Seychelles Cruise
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
      city: "Victoria",
      country: "Seychelles",
      region: "Africa",
      coordinates: { latitude: -4.6191, longitude: 55.4513 },
      timezone: "Indian/Mahe",
      address: "Port Victoria, Mahé Island",
    },
    category: "luxury",
    itinerary: {
      route: [
        { city: "Dubai", country: "United Arab Emirates" },
        { city: "Muscat", country: "Oman" },
        { city: "Salalah", country: "Oman" },
        { city: "Victoria", country: "Seychelles" },
      ],
      description:
        "12-day luxury cruise across the Arabian Sea to the tropical paradise of Seychelles.",
      distance: "2,700 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
        {
          start: "2026-03-01T17:00:00+04:00",
          end: "2026-03-02T08:00:00+04:00",
          description: "Sailing from Dubai to Muscat",
        },
        {
          start: "2026-03-03T20:00:00+04:00",
          end: "2026-03-05T07:00:00+04:00",
          description: "Cruising from Muscat to Salalah",
        },
        {
          start: "2026-03-07T18:00:00+04:00",
          end: "2026-03-12T06:00:00+04:00",
          description:
            "Ocean crossing from Salalah to Seychelles across the Indian Ocean",
        },
      ],
      timeOnLand: [
        {
          start: "2026-02-28T08:00:00+04:00",
          end: "2026-03-01T16:00:00+04:00",
          description: "Dubai luxury experience with private desert safari",
        },
        {
          start: "2026-03-02T09:00:00+04:00",
          end: "2026-03-03T19:00:00+04:00",
          description:
            "Muscat royal tour including Al Alam Palace and Royal Opera House",
        },
        {
          start: "2026-03-05T08:00:00+04:00",
          end: "2026-03-07T17:00:00+04:00",
          description: "Salalah's frankincense trail and tropical plantations",
        },
        {
          start: "2026-03-12T07:00:00+04:00",
          end: "2026-03-13T18:00:00+04:00",
          description:
            "Seychelles island hopping with pristine beaches and nature reserves",
        },
      ],
    },
    requiredDocuments: [
      "Valid Passport with 6-month validity",
      "Seychelles Entry Permit",
      "Oman Visa (for certain nationalities)",
    ],
    cancellationPolicy:
      "Full refund if canceled 90 days before departure; 50% refund up to 60 days; 25% refund up to 30 days; no refund within 30 days",
    tourCategoryId: "luxury-cruise",
    contactPersonnel: [
      {
        name: "Sophia Laurent",
        role: "Luxury Experience Director",
        description: "Specialist in Indian Ocean luxury travel experiences",
        languages: ["English", "French", "Arabic"],
        experienceYears: 15,
        profileImage:
          "https://images.unsplash.com/photo-1544005313-94ddf0286df3",
        contact: {
          contactNumber: "+971 4 555 6666",
          contactEmail: "sophia.laurent@luxurycruises.com",
        },
      },
    ],
    isLuxuryCruise: true,
    isFamilyFriendly: false,
    isIslandHopping: true,
    title: "Dubai to Seychelles Luxury Ocean Voyage",
    description:
      "Journey from the architectural marvels of Dubai to the pristine paradise islands of Seychelles on this 12-day luxury experience.",
    tags: ["luxury", "indian-ocean", "island", "tropical"],
    basePrice: 4650,
    rating: 4.9,
  },
  // 14-day Dubai to Athens Cruise
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
      city: "Athens",
      country: "Greece",
      region: "Europe",
      coordinates: { latitude: 37.9382, longitude: 23.6463 },
      timezone: "Europe/Athens",
      address: "Piraeus Port, Athens",
    },
    category: "premium",
    itinerary: {
      route: [
        { city: "Dubai", country: "United Arab Emirates" },
        { city: "Muscat", country: "Oman" },
        { city: "Aqaba", country: "Jordan" },
        { city: "Suez Canal", country: "Egypt" },
        { city: "Alexandria", country: "Egypt" },
        { city: "Athens", country: "Greece" },
      ],
      description:
        "14-day cultural voyage from Dubai to Athens through the Red Sea and Mediterranean with historical explorations.",
      distance: "4,300 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
        {
          start: "2026-04-01T18:00:00+04:00",
          end: "2026-04-02T08:00:00+04:00",
          description: "Evening cruise from Dubai to Muscat",
        },
        {
          start: "2026-04-03T20:00:00+04:00",
          end: "2026-04-07T07:00:00+03:00",
          description: "Sailing through the Arabian Sea and Red Sea to Aqaba",
        },
        {
          start: "2026-04-08T19:00:00+03:00",
          end: "2026-04-10T05:00:00+02:00",
          description: "Journey to the Suez Canal",
        },
        {
          start: "2026-04-10T17:00:00+02:00",
          end: "2026-04-11T07:00:00+02:00",
          description: "Night sailing to Alexandria",
        },
        {
          start: "2026-04-12T19:00:00+02:00",
          end: "2026-04-14T08:00:00+03:00",
          description: "Mediterranean crossing to Athens",
        },
      ],
      timeOnLand: [
        {
          start: "2026-04-01T07:00:00+04:00",
          end: "2026-04-01T17:00:00+04:00",
          description: "Dubai modern architecture tour",
        },
        {
          start: "2026-04-02T09:00:00+04:00",
          end: "2026-04-03T19:00:00+04:00",
          description: "Muscat historical sites and Sultan's Palace",
        },
        {
          start: "2026-04-07T08:00:00+03:00",
          end: "2026-04-08T18:00:00+03:00",
          description: "Petra excursion from Aqaba",
        },
        {
          start: "2026-04-10T06:00:00+02:00",
          end: "2026-04-10T16:00:00+02:00",
          description: "Suez Canal transit with historical commentary",
        },
        {
          start: "2026-04-11T08:00:00+02:00",
          end: "2026-04-12T18:00:00+02:00",
          description: "Alexandria Library and Greco-Roman ruins",
        },
        {
          start: "2026-04-14T09:00:00+03:00",
          end: "2026-04-15T17:00:00+03:00",
          description: "Athens Acropolis tour and cultural experience",
        },
      ],
    },
    requiredDocuments: [
      "Valid Passport",
      "Egyptian Visa (for some nationalities)",
      "Jordan Visa (for some nationalities)",
      "Schengen Visa (for non-exempt nationalities)",
    ],
    cancellationPolicy:
      "Full refund if canceled 90 days before departure; 50% refund up to 45 days; no refund within 45 days",
    tourCategoryId: "historical-cruise",
    contactPersonnel: [
      {
        name: "Dr. Alexis Papadopoulos",
        role: "Archaeological Expert",
        description:
          "Historian specializing in Middle Eastern and Mediterranean civilizations",
        languages: ["English", "Greek", "Arabic"],
        experienceYears: 20,
        profileImage:
          "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
        contact: {
          contactNumber: "+30 21 0412 5678",
          contactEmail: "alexis.papadopoulos@historicalcruises.com",
        },
      },
    ],
    isLuxuryCruise: false,
    isCulturalExperience: true,
    isHistoricalCruise: true,
    title: "Dubai to Athens Historical Passage",
    description:
      "Travel through millennia of human history on this 14-day journey from the modern marvels of Dubai to the classical wonders of Athens.",
    tags: ["premium", "historical", "cultural", "mediterranean"],
    basePrice: 3400,
    rating: 4.8,
  },
  // 18-day Dubai to Istanbul Cruise
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
      city: "Istanbul",
      country: "Turkey",
      region: "Europe/Asia",
      coordinates: { latitude: 41.0082, longitude: 28.9784 },
      timezone: "Europe/Istanbul",
      address: "Galataport, Istanbul",
    },
    category: "luxury",
    itinerary: {
      route: [
        { city: "Dubai", country: "United Arab Emirates" },
        { city: "Doha", country: "Qatar" },
        { city: "Muscat", country: "Oman" },
        { city: "Salalah", country: "Oman" },
        { city: "Aqaba", country: "Jordan" },
        { city: "Suez Canal", country: "Egypt" },
        { city: "Alexandria", country: "Egypt" },
        { city: "Kusadasi", country: "Turkey" },
        { city: "Istanbul", country: "Turkey" },
      ],
      description:
        "18-day luxury voyage connecting the Arabian Gulf to the crossroads of Europe and Asia.",
      distance: "5,200 nautical miles",
      totalDuration: "18 days",
      timeAtSea: [
        {
          start: "2026-05-01T17:00:00+04:00",
          end: "2026-05-02T07:00:00+03:00",
          description: "Sailing from Dubai to Doha",
        },
        {
          start: "2026-05-03T19:00:00+03:00",
          end: "2026-05-04T08:00:00+04:00",
          description: "Cruising overnight to Muscat",
        },
        {
          start: "2026-05-05T20:00:00+04:00",
          end: "2026-05-07T08:00:00+04:00",
          description: "Journey along the Omani coast to Salalah",
        },
        {
          start: "2026-05-08T19:00:00+04:00",
          end: "2026-05-11T07:00:00+03:00",
          description: "Red Sea crossing to Aqaba",
        },
        {
          start: "2026-05-12T18:00:00+03:00",
          end: "2026-05-13T06:00:00+02:00",
          description: "Sailing to Suez Canal",
        },
        {
          start: "2026-05-14T18:00:00+02:00",
          end: "2026-05-15T07:00:00+02:00",
          description: "Mediterranean cruise to Alexandria",
        },
        {
          start: "2026-05-16T19:00:00+02:00",
          end: "2026-05-18T08:00:00+03:00",
          description: "Eastern Mediterranean sailing to Kusadasi",
        },
        {
          start: "2026-05-19T17:00:00+03:00",
          end: "2026-05-20T08:00:00+03:00",
          description: "Final leg through the Dardanelles to Istanbul",
        },
      ],
      timeOnLand: [
        {
          start: "2026-05-01T07:00:00+04:00",
          end: "2026-05-01T16:00:00+04:00",
          description: "Dubai gold souk and traditional abra boat tour",
        },
        {
          start: "2026-05-02T08:00:00+03:00",
          end: "2026-05-03T18:00:00+03:00",
          description:
            "Doha's Museum of Islamic Art and Katara Cultural Village",
        },
        {
          start: "2026-05-04T09:00:00+04:00",
          end: "2026-05-05T19:00:00+04:00",
          description:
            "Muscat Royal Opera House and traditional dhow experience",
        },
        {
          start: "2026-05-07T09:00:00+04:00",
          end: "2026-05-08T18:00:00+04:00",
          description: "Salalah frankincense trail and ancient ruins",
        },
        {
          start: "2026-05-11T08:00:00+03:00",
          end: "2026-05-12T17:00:00+03:00",
          description: "Petra and Wadi Rum luxury excursion",
        },
        {
          start: "2026-05-13T07:00:00+02:00",
          end: "2026-05-14T17:00:00+02:00",
          description: "Suez Canal transit and optional Cairo pyramid tour",
        },
        {
          start: "2026-05-15T08:00:00+02:00",
          end: "2026-05-16T18:00:00+02:00",
          description:
            "Alexandria historical sites and Mediterranean cuisine experience",
        },
        {
          start: "2026-05-18T09:00:00+03:00",
          end: "2026-05-19T16:00:00+03:00",
          description: "Ephesus ancient city tour from Kusadasi",
        },
        {
          start: "2026-05-20T09:00:00+03:00",
          end: "2026-05-21T18:00:00+03:00",
          description: "Istanbul's Hagia Sophia, Blue Mosque and Grand Bazaar",
        },
      ],
    },
    requiredDocuments: [
      "Valid Passport",
      "Turkish Visa (for relevant nationalities)",
      "Egyptian Visa",
      "Jordan Visa",
    ],
    cancellationPolicy:
      "Full refund if canceled 120 days before departure; 75% refund up to 90 days; 50% refund up to 60 days; no refund within 60 days",
    tourCategoryId: "luxury-cultural",
    contactPersonnel: [
      {
        name: "Mehmet Yilmaz",
        role: "Cultural Experience Director",
        description:
          "Expert in Eastern Mediterranean and Middle Eastern heritage",
        languages: ["English", "Turkish", "Arabic", "Greek"],
        experienceYears: 22,
        profileImage:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
        contact: {
          contactNumber: "+90 212 345 6789",
          contactEmail: "mehmet.yilmaz@luxurycruises.com",
        },
      },
    ],
    isLuxuryCruise: true,
    isCulturalExperience: true,
    title: "Dubai to Istanbul: Treasures of Civilizations",
    description:
      "Experience the opulence of ancient empires on this luxurious 18-day voyage from Dubai to Istanbul with unforgettable cultural experiences.",
    tags: ["luxury", "cultural", "historical", "middle-east", "mediterranean"],
    basePrice: 6200,
    rating: 4.9,
  },
  // 21-day Dubai to Rome Cruise
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
      city: "Rome",
      country: "Italy",
      region: "Europe",
      coordinates: { latitude: 41.8902, longitude: 12.4922 },
      timezone: "Europe/Rome",
      address: "Civitavecchia Port, Rome",
    },
    category: "ultra-luxury",
    itinerary: {
      route: [
        { city: "Dubai", country: "United Arab Emirates" },
        { city: "Abu Dhabi", country: "United Arab Emirates" },
        { city: "Muscat", country: "Oman" },
        { city: "Luxor", country: "Egypt" },
        { city: "Aqaba", country: "Jordan" },
        { city: "Suez Canal", country: "Egypt" },
        { city: "Jerusalem", country: "Israel" },
        { city: "Limassol", country: "Cyprus" },
        { city: "Rhodes", country: "Greece" },
        { city: "Santorini", country: "Greece" },
        { city: "Valletta", country: "Malta" },
        { city: "Rome", country: "Italy" },
      ],
      description:
        "21-day ultra-luxury grand voyage from Dubai to Rome exploring ancient civilizations and Mediterranean treasures.",
      distance: "5,800 nautical miles",
      totalDuration: "21 days",
      timeAtSea: [
        {
          start: "2026-09-01T18:00:00+04:00",
          end: "2026-09-02T07:00:00+04:00",
          description: "Evening cruise from Dubai to Abu Dhabi",
        },
        {
          start: "2026-09-03T19:00:00+04:00",
          end: "2026-09-04T08:00:00+04:00",
          description: "Sailing from Abu Dhabi to Muscat",
        },
        {
          start: "2026-09-05T20:00:00+04:00",
          end: "2026-09-08T07:00:00+02:00",
          description: "Red Sea journey to Luxor/Safaga",
        },
        {
          start: "2026-09-09T18:00:00+02:00",
          end: "2026-09-10T08:00:00+03:00",
          description: "Sailing to Aqaba",
        },
        {
          start: "2026-09-11T19:00:00+03:00",
          end: "2026-09-12T07:00:00+02:00",
          description: "Journey to Suez Canal",
        },
        {
          start: "2026-09-13T18:00:00+02:00",
          end: "2026-09-14T06:00:00+03:00",
          description: "Mediterranean sailing to Jerusalem/Ashdod",
        },
        {
          start: "2026-09-15T18:00:00+03:00",
          end: "2026-09-16T07:00:00+03:00",
          description: "Coastal cruise to Cyprus",
        },
        {
          start: "2026-09-17T18:00:00+03:00",
          end: "2026-09-18T07:00:00+03:00",
          description: "Eastern Mediterranean voyage to Rhodes",
        },
        {
          start: "2026-09-19T17:00:00+03:00",
          end: "2026-09-20T06:00:00+03:00",
          description: "Greek Islands sailing to Santorini",
        },
        {
          start: "2026-09-21T18:00:00+03:00",
          end: "2026-09-22T09:00:00+02:00",
          description: "Central Mediterranean crossing to Malta",
        },
        {
          start: "2026-09-23T19:00:00+02:00",
          end: "2026-09-25T07:00:00+02:00",
          description: "Final Mediterranean journey to Rome",
        },
      ],
      timeOnLand: [
        {
          start: "2026-09-01T07:00:00+04:00",
          end: "2026-09-01T17:00:00+04:00",
          description:
            "Dubai exclusive desert experience and private Burj Khalifa visit",
        },
        {
          start: "2026-09-02T08:00:00+04:00",
          end: "2026-09-03T18:00:00+04:00",
          description:
            "Abu Dhabi Louvre and Sheikh Zayed Grand Mosque private tour",
        },
        {
          start: "2026-09-04T09:00:00+04:00",
          end: "2026-09-05T19:00:00+04:00",
          description: "Muscat Sultan's Palace and private yacht experience",
        },
        {
          start: "2026-09-08T08:00:00+02:00",
          end: "2026-09-09T17:00:00+02:00",
          description: "Private Valley of Kings and Karnak Temple exploration",
        },
        {
          start: "2026-09-10T09:00:00+03:00",
          end: "2026-09-11T18:00:00+03:00",
          description: "VIP Petra by night experience and luxury desert dining",
        },
        {
          start: "2026-09-12T08:00:00+02:00",
          end: "2026-09-13T17:00:00+02:00",
          description: "Suez Canal transit with historical narration",
        },
        {
          start: "2026-09-14T07:00:00+03:00",
          end: "2026-09-15T17:00:00+03:00",
          description: "Jerusalem and Bethlehem private excursion",
        },
        {
          start: "2026-09-16T08:00:00+03:00",
          end: "2026-09-17T17:00:00+03:00",
          description: "Limassol castle and Cyprus wine experience",
        },
        {
          start: "2026-09-18T08:00:00+03:00",
          end: "2026-09-19T16:00:00+03:00",
          description: "Rhodes Old Town and Palace of the Grand Master",
        },
        {
          start: "2026-09-20T07:00:00+03:00",
          end: "2026-09-21T17:00:00+03:00",
          description:
            "Santorini caldera private tour and exclusive wine tasting",
        },
        {
          start: "2026-09-22T10:00:00+02:00",
          end: "2026-09-23T18:00:00+02:00",
          description: "Valletta Baroque palaces and harbor cruise",
        },
        {
          start: "2026-09-25T08:00:00+02:00",
          end: "2026-09-26T19:00:00+02:00",
          description: "Rome VIP Vatican access and ancient Rome private tour",
        },
      ],
    },
    requiredDocuments: [
      "Valid Passport",
      "Multiple Entry Visas (as required)",
      "Israel Entry Permit",
      "Schengen Visa (for non-exempt nationalities)",
    ],
    cancellationPolicy:
      "Full refund if canceled 180 days before departure; 70% refund up to 120 days; 30% refund up to 90 days; no refund within 90 days",
    tourCategoryId: "ultra-luxury-cruise",
    contactPersonnel: [
      {
        name: "Isabella Romano",
        role: "Ultra-Luxury Voyage Curator",
        description:
          "Elite cruise director specializing in Mediterranean and Middle Eastern luxury voyages",
        languages: ["English", "Italian", "French", "Arabic"],
        experienceYears: 25,
        profileImage:
          "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5",
        contact: {
          contactNumber: "+39 06 987 6543",
          contactEmail: "isabella.romano@ultraluxurycruises.com",
        },
      },
    ],
    isLuxuryCruise: true,
    isCulturalExperience: true,
    isHistoricalJourney: true,
    title: "Grand Voyage: Dubai to Rome Legacy",
    description:
      "A curated 21-day ultra-luxury journey through the cradles of civilization, connecting the Arabian Gulf to the Eternal City with exclusive experiences throughout.",
    tags: ["ultra-luxury", "cultural", "historical", "mediterranean"],
    basePrice: 12800,
    rating: 5.0,
  },
  // 25-day Dubai to London Cruise
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
      city: "London",
      country: "United Kingdom",
      region: "Europe",
      coordinates: { latitude: 51.5074, longitude: -0.1278 },
      timezone: "Europe/London",
      address: "Tower Bridge Cruise Terminal, London",
    },
    category: "ultra-luxury",
    itinerary: {
      route: [
        { city: "Dubai", country: "United Arab Emirates" },
        { city: "Muscat", country: "Oman" },
        { city: "Salalah", country: "Oman" },
        { city: "Aqaba", country: "Jordan" },
        { city: "Suez Canal", country: "Egypt" },
        { city: "Alexandria", country: "Egypt" },
        { city: "Athens", country: "Greece" },
        { city: "Valletta", country: "Malta" },
        { city: "Barcelona", country: "Spain" },
        { city: "Malaga", country: "Spain" },
        { city: "Lisbon", country: "Portugal" },
        { city: "Porto", country: "Portugal" },
        { city: "Bordeaux", country: "France" },
        { city: "London", country: "United Kingdom" },
      ],
      description:
        "25-day grand voyage from Dubai to London connecting the Arabian Peninsula to the heart of Europe.",
      distance: "7,800 nautical miles",
      totalDuration: "25 days",
      timeAtSea: [
        {
          start: "2026-10-01T19:00:00+04:00",
          end: "2026-10-02T08:00:00+04:00",
          description: "Evening cruise from Dubai to Muscat",
        },
        {
          start: "2026-10-03T19:00:00+04:00",
          end: "2026-10-05T08:00:00+04:00",
          description: "Arabian Sea sailing to Salalah",
        },
        {
          start: "2026-10-06T20:00:00+04:00",
          end: "2026-10-09T07:00:00+03:00",
          description: "Red Sea passage to Aqaba",
        },
        {
          start: "2026-10-10T19:00:00+03:00",
          end: "2026-10-11T06:00:00+02:00",
          description: "Journey to Suez Canal",
        },
        {
          start: "2026-10-12T18:00:00+02:00",
          end: "2026-10-13T07:00:00+02:00",
          description: "Mediterranean sailing to Alexandria",
        },
        {
          start: "2026-10-14T19:00:00+02:00",
          end: "2026-10-16T06:00:00+03:00",
          description: "Eastern Mediterranean crossing to Athens",
        },
        {
          start: "2026-10-17T17:00:00+03:00",
          end: "2026-10-18T09:00:00+02:00",
          description: "Aegean Sea to Malta voyage",
        },
        {
          start: "2026-10-19T18:00:00+02:00",
          end: "2026-10-21T07:00:00+02:00",
          description: "Western Mediterranean sailing to Barcelona",
        },
        {
          start: "2026-10-22T19:00:00+02:00",
          end: "2026-10-23T08:00:00+02:00",
          description: "Spanish coastal cruise to Malaga",
        },
        {
          start: "2026-10-24T18:00:00+02:00",
          end: "2026-10-25T07:00:00+01:00",
          description: "Atlantic sailing to Lisbon",
        },
        {
          start: "2026-10-26T18:00:00+01:00",
          end: "2026-10-27T08:00:00+01:00",
          description: "Portuguese coast to Porto",
        },
        {
          start: "2026-10-28T19:00:00+01:00",
          end: "2026-10-30T08:00:00+01:00",
          description: "Bay of Biscay crossing to Bordeaux",
        },
        {
          start: "2026-10-31T18:00:00+01:00",
          end: "2026-11-02T08:00:00+00:00",
          description: "English Channel sailing to London",
        },
      ],
      timeOnLand: [
        {
          start: "2026-10-01T07:00:00+04:00",
          end: "2026-10-01T18:00:00+04:00",
          description: "Dubai iconic landmarks private tour",
        },
        {
          start: "2026-10-02T09:00:00+04:00",
          end: "2026-10-03T18:00:00+04:00",
          description: "Muscat royal experience and mountain adventure",
        },
        {
          start: "2026-10-05T09:00:00+04:00",
          end: "2026-10-06T19:00:00+04:00",
          description: "Salalah tropical plantations and ancient ruins",
        },
        {
          start: "2026-10-09T08:00:00+03:00",
          end: "2026-10-10T18:00:00+03:00",
          description: "Petra and Wadi Rum overnight luxury experience",
        },
        {
          start: "2026-10-11T07:00:00+02:00",
          end: "2026-10-12T17:00:00+02:00",
          description: "Suez Canal transit with historical insights",
        },
        {
          start: "2026-10-13T08:00:00+02:00",
          end: "2026-10-14T18:00:00+02:00",
          description:
            "Alexandria Library and Greco-Roman archaeological sites",
        },
        {
          start: "2026-10-16T07:00:00+03:00",
          end: "2026-10-17T16:00:00+03:00",
          description: "Athens Acropolis VIP access and gourmet experience",
        },
        {
          start: "2026-10-18T10:00:00+02:00",
          end: "2026-10-19T17:00:00+02:00",
          description: "Malta medieval heritage and Blue Grotto",
        },
        {
          start: "2026-10-21T08:00:00+02:00",
          end: "2026-10-22T18:00:00+02:00",
          description: "Barcelona Gaudi masterpieces and Catalan cuisine",
        },
        {
          start: "2026-10-23T09:00:00+02:00",
          end: "2026-10-24T17:00:00+02:00",
          description: "Malaga Moorish heritage and Picasso Museum",
        },
        {
          start: "2026-10-25T08:00:00+01:00",
          end: "2026-10-26T17:00:00+01:00",
          description: "Lisbon historical districts and Fado experience",
        },
        {
          start: "2026-10-27T09:00:00+01:00",
          end: "2026-10-28T18:00:00+01:00",
          description: "Porto wine cellars and Douro Valley",
        },
        {
          start: "2026-10-30T09:00:00+01:00",
          end: "2026-10-31T17:00:00+01:00",
          description: "Bordeaux chateaux tour and wine masterclass",
        },
        {
          start: "2026-11-02T09:00:00+00:00",
          end: "2026-11-03T17:00:00+00:00",
          description:
            "London VIP experience with private Tower of London visit",
        },
      ],
    },
    requiredDocuments: [
      "Valid Passport",
      "Multiple Entry Visas (as required)",
      "Schengen Visa (for non-exempt nationalities)",
      "UK Visa (if applicable)",
    ],
    cancellationPolicy:
      "Full refund if canceled 240 days before departure; 75% refund up to 180 days; 50% refund up to 120 days; 25% refund up to 90 days; no refund within 90 days",
    tourCategoryId: "grand-voyage",
    contactPersonnel: [
      {
        name: "Sir William Harrington",
        role: "Grand Voyage Director",
        description:
          "Distinguished cruise director with expertise in transcontinental luxury journeys",
        languages: ["English", "French", "Spanish", "Arabic"],
        experienceYears: 30,
        profileImage:
          "https://images.unsplash.com/photo-1500048993953-d23a436266cf",
        contact: {
          contactNumber: "+44 20 7946 0123",
          contactEmail: "william.harrington@luxuryexpeditions.com",
        },
      },
    ],
    isLuxuryCruise: true,
    isCulturalExperience: true,
    isGrandVoyage: true,
    title: "Imperial Grand Voyage: Dubai to London",
    description:
      "An extraordinary 25-day journey through the ancient and modern wonders of three continents, from the Arabian luxury of Dubai to the royal splendor of London.",
    tags: ["ultra-luxury", "grand-voyage", "multi-continent", "cultural"],
    basePrice: 16500,
    rating: 5.0,
  },
];
