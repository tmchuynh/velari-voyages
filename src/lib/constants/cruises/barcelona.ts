import { Cruise } from "@/lib/interfaces/services/cruises";

export const barcelonaCruises: Cruise[] = [
  {
    departureLocation: {
      city: "Barcelona",
      country: "Spain",
      region: "Catalonia",
      coordinates: { latitude: 41.3523, longitude: 2.18 },
      address: "Port of Barcelona, Moll de Barcelona, s/n, 08039 Barcelona",
      timezone: "Europe/Madrid",
    },
    arrivalLocation: {
      city: "Rome",
      country: "Italy",
      region: "Lazio",
      coordinates: { latitude: 41.9028, longitude: 12.4964 },
      timezone: "Europe/Rome",
    },
    category: "mainstream",
    itinerary: {
      route: [
        { city: "Barcelona", country: "Spain" },
        { city: "Marseille", country: "France" },
        { city: "Genoa", country: "Italy" },
        { city: "Rome", country: "Italy" },
      ],
      description:
        "7-night Mediterranean cruise from Barcelona to Rome with stops in France and Italy.",
      distance: "850 nautical miles",
      totalDuration: "7 days",
      timeAtSea: [
        {
          start: "2025-09-01T18:00:00+02:00",
          end: "2025-09-02T08:00:00+02:00",
          description: "Sailing from Barcelona to Marseille.",
        },
        {
          start: "2025-09-04T20:00:00+02:00",
          end: "2025-09-05T10:00:00+02:00",
          description: "Sailing from Genoa to Rome.",
        },
      ],
      timeOnLand: [
        {
          start: "2025-09-02T08:00:00+02:00",
          end: "2025-09-03T18:00:00+02:00",
          description: "Exploring Marseille.",
        },
        {
          start: "2025-09-03T20:00:00+02:00",
          end: "2025-09-04T20:00:00+02:00",
          description: "Stopover in Genoa.",
        },
      ],
    },
    requiredDocuments: ["Passport", "Schengen Visa (if applicable)"],
    cancellationPolicy:
      "Full refund if canceled 60 days prior, 50% refund 30-59 days prior, no refund within 29 days",
    tourCategoryId: "theme-cruise",
    contactPersonnel: [
      {
        name: "Sofia Martinez",
        role: "Mediterranean Cruise Coordinator",
        bio: "Over 12 years of experience managing Mediterranean cruises, fluent in Spanish, Catalan, and English.",
        languages: ["Spanish", "Catalan", "English"],
        experienceYears: 12,
        profileImage:
          "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91",
        contact: {
          contactEmail: "sofia.martinez@barcelonacruises.com",
          contactNumber: "+34 931 555 123",
        },
      },
    ],
    title: "7-Night Barcelona to Rome Mediterranean Cruise",
    description:
      "Discover Mediterranean gems on this week-long cruise from Barcelona to Rome, featuring cultural stops in France and Italy.",
    tags: ["Barcelona", "Rome", "Mediterranean", "France", "Italy", "culture"],
    basePrice: 899,
    rating: 4.7,
    isFamilyFriendly: true,
    isPetFriendly: false,
    isCulturalExperience: true,
    isLuxuryCruise: false,
  },
  {
    departureLocation: {
      city: "Barcelona",
      country: "Spain",
      region: "Catalonia",
      coordinates: { latitude: 41.3523, longitude: 2.18 },
      address: "Port of Barcelona, Moll de Barcelona, s/n, 08039 Barcelona",
      timezone: "Europe/Madrid",
    },
    arrivalLocation: {
      city: "Athens",
      country: "Greece",
      region: "Attica",
      coordinates: { latitude: 37.9838, longitude: 23.7275 },
      timezone: "Europe/Athens",
    },
    category: "mainstream",
    itinerary: {
      route: [
        { city: "Barcelona", country: "Spain" },
        { city: "Valletta", country: "Malta" },
        { city: "Athens", country: "Greece" },
      ],
      description:
        "10-night Eastern Mediterranean cruise from Barcelona to Athens with stops in Malta.",
      distance: "1200 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
        {
          start: "2025-10-05T19:00:00+02:00",
          end: "2025-10-07T06:00:00+02:00",
          description: "Crossing the Mediterranean Sea toward Malta.",
        },
      ],
      timeOnLand: [
        {
          start: "2025-10-07T06:00:00+02:00",
          end: "2025-10-08T18:00:00+02:00",
          description: "Exploring historic Valletta.",
        },
        {
          start: "2025-10-09T08:00:00+02:00",
          end: "2025-10-11T18:00:00+02:00",
          description: "Visit to Athens and its ancient landmarks.",
        },
      ],
    },
    requiredDocuments: ["Passport", "Schengen Visa (if applicable)"],
    cancellationPolicy:
      "Full refund if canceled 45 days prior, 40% refund 20-44 days prior, no refund within 19 days",
    tourCategoryId: "theme-cruise",
    contactPersonnel: [
      {
        name: "Elena Georgiou",
        role: "Eastern Mediterranean Cruise Guide",
        bio: "Expert in Mediterranean history and culture with 8 years guiding cruises around the region.",
        languages: ["Greek", "English", "Spanish"],
        experienceYears: 8,
        profileImage:
          "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
        contact: {
          contactEmail: "elena.georgiou@barcelonacruises.com",
          contactNumber: "+34 931 555 456",
        },
      },
    ],
    title: "10-Night Barcelona to Athens Eastern Mediterranean Cruise",
    description:
      "Explore ancient civilizations and beautiful ports on this 10-night cruise from Barcelona to Athens via Malta.",
    tags: ["Barcelona", "Athens", "Malta", "Mediterranean", "history"],
    basePrice: 1299,
    rating: 4.8,
    isFamilyFriendly: true,
    isPetFriendly: false,
    isCulturalExperience: true,
    isLuxuryCruise: false,
  },
  {
    departureLocation: {
      city: "Barcelona",
      country: "Spain",
      region: "Catalonia",
      coordinates: { latitude: 41.3523, longitude: 2.18 },
      address: "Port of Barcelona, Moll de Barcelona, s/n, 08039 Barcelona",
      timezone: "Europe/Madrid",
    },
    arrivalLocation: {
      city: "Naples",
      country: "Italy",
      region: "Campania",
      coordinates: { latitude: 40.8518, longitude: 14.2681 },
      timezone: "Europe/Rome",
    },
    category: "mainstream",
    itinerary: {
      route: [
        { city: "Barcelona", country: "Spain" },
        { city: "Palma de Mallorca", country: "Spain" },
        { city: "Naples", country: "Italy" },
      ],
      description:
        "6-night Mediterranean cruise from Barcelona to Naples with a stop in Palma de Mallorca.",
      distance: "700 nautical miles",
      totalDuration: "6 days",
      timeAtSea: [
        {
          start: "2025-07-15T17:30:00+02:00",
          end: "2025-07-16T09:00:00+02:00",
          description: "Sailing to Palma de Mallorca.",
        },
        {
          start: "2025-07-18T20:00:00+02:00",
          end: "2025-07-19T08:00:00+02:00",
          description: "Crossing from Palma to Naples.",
        },
      ],
      timeOnLand: [
        {
          start: "2025-07-16T09:00:00+02:00",
          end: "2025-07-18T20:00:00+02:00",
          description: "Exploring Palma de Mallorca.",
        },
      ],
    },
    requiredDocuments: ["Passport", "Schengen Visa (if applicable)"],
    cancellationPolicy:
      "Full refund if canceled 50 days prior, 30% refund 20-49 days prior, no refund within 19 days",
    tourCategoryId: "weekend-cruise",
    contactPersonnel: [
      {
        name: "Carlos Ruiz",
        role: "Short Mediterranean Cruise Manager",
        bio: "Specializes in short cruises with excellent customer service and logistical expertise.",
        languages: ["Spanish", "English"],
        experienceYears: 7,
        profileImage:
          "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91",
        contact: {
          contactEmail: "carlos.ruiz@barcelonacruises.com",
          contactNumber: "+34 931 555 789",
        },
      },
    ],
    title: "6-Night Barcelona to Naples Mediterranean Cruise",
    description:
      "Enjoy a relaxed 6-night cruise from Barcelona to Naples including a charming stop at Palma de Mallorca.",
    tags: ["Barcelona", "Naples", "Mallorca", "Mediterranean", "short cruise"],
    basePrice: 799,
    rating: 4.4,
    isFamilyFriendly: true,
    isPetFriendly: false,
    isCulturalExperience: true,
    isLuxuryCruise: false,
  },
  {
    departureLocation: {
      city: "Barcelona",
      country: "Spain",
      region: "Catalonia",
      coordinates: { latitude: 41.3523, longitude: 2.18 },
      address: "Port of Barcelona, Moll de Barcelona, s/n, 08039 Barcelona",
      timezone: "Europe/Madrid",
    },
    arrivalLocation: {
      city: "Tunis",
      country: "Tunisia",
      region: "Tunis",
      coordinates: { latitude: 36.8065, longitude: 10.1815 },
      timezone: "Africa/Tunis",
    },
    category: "mainstream",
    itinerary: {
      route: [
        { city: "Barcelona", country: "Spain" },
        { city: "Palermo", country: "Italy" },
        { city: "Tunis", country: "Tunisia" },
      ],
      description:
        "8-night cruise from Barcelona to Tunis with stops in Italy and Tunisia.",
      distance: "950 nautical miles",
      totalDuration: "8 days",
      timeAtSea: [
        {
          start: "2025-11-02T18:00:00+01:00",
          end: "2025-11-03T08:00:00+01:00",
          description: "Sailing to Palermo.",
        },
        {
          start: "2025-11-06T22:00:00+01:00",
          end: "2025-11-07T10:00:00+01:00",
          description: "Final leg from Palermo to Tunis.",
        },
      ],
      timeOnLand: [
        {
          start: "2025-11-03T08:00:00+01:00",
          end: "2025-11-06T22:00:00+01:00",
          description: "Exploring Palermo.",
        },
      ],
    },
    requiredDocuments: ["Passport", "Visa (if applicable)"],
    cancellationPolicy:
      "Full refund if canceled 60 days prior, 40% refund 30-59 days prior, no refund within 29 days",
    tourCategoryId: "tropical-cruise",
    contactPersonnel: [
      {
        name: "Amira Ben Ali",
        role: "North Africa Cruise Specialist",
        bio: "Deep knowledge of Mediterranean and North African ports with over 10 years guiding cruises.",
        languages: ["Arabic", "French", "English", "Spanish"],
        experienceYears: 10,
        profileImage:
          "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
        contact: {
          contactEmail: "amira.benali@barcelonacruises.com",
          contactNumber: "+34 931 555 234",
        },
      },
    ],
    title: "8-Night Barcelona to Tunis North Africa Cruise",
    description:
      "Experience North African culture on this 8-night cruise from Barcelona to Tunis with a visit to Palermo.",
    tags: ["Barcelona", "Tunis", "Palermo", "North Africa", "culture"],
    basePrice: 1099,
    rating: 4.6,
    isFamilyFriendly: true,
    isPetFriendly: false,
    isCulturalExperience: true,
    isLuxuryCruise: false,
  },
  {
    departureLocation: {
      city: "Barcelona",
      country: "Spain",
      region: "Catalonia",
      coordinates: { latitude: 41.3523, longitude: 2.18 },
      address: "Port of Barcelona, Moll de Barcelona, s/n, 08039 Barcelona",
      timezone: "Europe/Madrid",
      additionalInfo: "Premium terminal with VIP lounge access",
    },
    arrivalLocation: {
      city: "Alexandria",
      country: "Egypt",
      region: "Alexandria Governorate",
      coordinates: { latitude: 31.2001, longitude: 29.9187 },
      timezone: "Africa/Cairo",
    },
    category: "luxury",
    itinerary: {
      route: [
        { city: "Barcelona", country: "Spain" },
        { city: "Valletta", country: "Malta" },
        { city: "Santorini", country: "Greece" },
        { city: "Rhodes", country: "Greece" },
        { city: "Cyprus", country: "Cyprus" },
        { city: "Alexandria", country: "Egypt" },
      ],
      description:
        "A 14-day luxury cruise exploring the ancient treasures of the Eastern Mediterranean.",
      distance: "2,150 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
        {
          start: "2026-05-10T18:00:00+02:00",
          end: "2026-05-12T09:00:00+02:00",
          description: "Sailing across the Mediterranean Sea toward Malta.",
        },
        {
          start: "2026-05-14T19:00:00+02:00",
          end: "2026-05-16T08:00:00+03:00",
          description: "Crossing to Santorini in the Aegean Sea.",
        },
        {
          start: "2026-05-17T20:00:00+03:00",
          end: "2026-05-18T08:00:00+03:00",
          description: "Short cruise to the island of Rhodes.",
        },
        {
          start: "2026-05-20T18:00:00+03:00",
          end: "2026-05-21T09:00:00+03:00",
          description: "Eastern Mediterranean sailing to Cyprus.",
        },
        {
          start: "2026-05-23T17:00:00+03:00",
          end: "2026-05-24T08:00:00+02:00",
          description: "Final leg crossing to Alexandria, Egypt.",
        },
      ],
      timeOnLand: [
        {
          start: "2026-05-12T09:00:00+02:00",
          end: "2026-05-14T19:00:00+02:00",
          description:
            "Explore Valletta's UNESCO World Heritage sites and medieval architecture.",
        },
        {
          start: "2026-05-16T08:00:00+03:00",
          end: "2026-05-17T20:00:00+03:00",
          description:
            "Experience Santorini's iconic white-washed villages and stunning caldera views.",
        },
        {
          start: "2026-05-18T08:00:00+03:00",
          end: "2026-05-20T18:00:00+03:00",
          description:
            "Discover Rhodes' medieval Old Town and ancient ruins.",
        },
        {
          start: "2026-05-21T09:00:00+03:00",
          end: "2026-05-23T17:00:00+03:00",
          description:
            "Visit Cyprus's archaeological treasures and beautiful beaches.",
        },
        {
          start: "2026-05-24T08:00:00+02:00",
          end: "2026-05-24T18:00:00+02:00",
          description:
            "Arrive in Alexandria with time to visit the famous library and ancient sites.",
        },
      ],
    },
    requiredDocuments: [
      "Valid Passport",
      "Egyptian Visa (if applicable)",
      "Schengen Visa (if applicable)",
    ],
    cancellationPolicy:
      "Full refund if canceled 90 days prior, 50% refund 45-89 days prior, no refund within 44 days",
    tourCategoryId: "luxury-cruise",
    contactPersonnel: [
      {
        name: "Dr. Eleni Papadopoulos",
        role: "Eastern Mediterranean Cultural Director",
        bio: "Archaeologist and historian with over 15 years' experience leading luxury Mediterranean cruises to ancient sites.",
        languages: ["Greek", "English", "Spanish", "Arabic"],
        experienceYears: 15,
        profileImage:
          "https://images.unsplash.com/photo-1557002665-c552e1sweet",
        contact: {
          contactEmail: "eleni.p@mediterraneanluxurycruises.com",
          contactNumber: "+34 931 555 890",
        },
      },
    ],
    title: "Ancient Civilizations: Barcelona to Alexandria",
    description:
      "A 14-day luxury journey through the cradles of Mediterranean civilization, featuring expert-led tours of ancient sites and luxurious onboard amenities.",
    tags: [
      "luxury",
      "archaeological",
      "ancient civilizations",
      "Mediterranean",
      "Egypt",
    ],
    basePrice: 6999,
    rating: 4.9,
    isFamilyFriendly: false,
    isPetFriendly: false,
    isCulturalExperience: true,
    isLuxuryCruise: true,
  },
  {
    departureLocation: {
      city: "Barcelona",
      country: "Spain",
      region: "Catalonia",
      coordinates: { latitude: 41.3523, longitude: 2.18 },
      address: "Port of Barcelona, Moll de Barcelona, s/n, 08039 Barcelona",
      timezone: "Europe/Madrid",
      additionalInfo: "Special check-in area for extended voyages",
    },
    arrivalLocation: {
      city: "Dubai",
      country: "United Arab Emirates",
      region: "Dubai",
      coordinates: { latitude: 25.2048, longitude: 55.2708 },
      timezone: "Asia/Dubai",
    },
    category: "luxury",
    itinerary: {
      route: [
        { city: "Barcelona", country: "Spain" },
        { city: "Sicily", country: "Italy" },
        { city: "Athens", country: "Greece" },
        { city: "Alexandria", country: "Egypt" },
        { city: "Suez Canal", country: "Egypt" },
        { city: "Aqaba", country: "Jordan" },
        { city: "Salalah", country: "Oman" },
        { city: "Muscat", country: "Oman" },
        { city: "Dubai", country: "United Arab Emirates" },
      ],
      description:
        "A 21-day grand voyage from Mediterranean to Arabian Gulf via the historic Suez Canal.",
      distance: "5,400 nautical miles",
      totalDuration: "21 days",
      timeAtSea: [
        {
          start: "2026-09-15T17:00:00+02:00",
          end: "2026-09-17T08:00:00+02:00",
          description: "Sailing from Barcelona to Sicily across the Mediterranean.",
        },
        {
          start: "2026-09-19T18:00:00+02:00",
          end: "2026-09-20T09:00:00+03:00",
          description: "Mediterranean crossing to Athens.",
        },
        {
          start: "2026-09-22T17:00:00+03:00",
          end: "2026-09-24T08:00:00+02:00",
          description: "Sailing to Alexandria, Egypt.",
        },
        {
          start: "2026-09-25T18:00:00+02:00",
          end: "2026-09-26T07:00:00+02:00",
          description: "Approaching the Suez Canal.",
        },
        {
          start: "2026-09-26T16:00:00+02:00",
          end: "2026-09-27T09:00:00+03:00",
          description: "Red Sea sailing to Aqaba, Jordan.",
        },
        {
          start: "2026-09-29T18:00:00+03:00",
          end: "2026-10-02T08:00:00+04:00",
          description: "Crossing the Arabian Sea to Salalah, Oman.",
        },
        {
          start: "2026-10-03T17:00:00+04:00",
          end: "2026-10-04T09:00:00+04:00",
          description: "Coastal Oman sailing to Muscat.",
        },
        {
          start: "2026-10-06T18:00:00+04:00",
          end: "2026-10-07T08:00:00+04:00",
          description: "Final Arabian Gulf crossing to Dubai.",
        },
      ],
      timeOnLand: [
        {
          start: "2026-09-17T08:00:00+02:00",
          end: "2026-09-19T18:00:00+02:00",
          description:
            "Explore Sicily's Greek temples, Roman amphitheaters, and Mt. Etna.",
        },
        {
          start: "2026-09-20T09:00:00+03:00",
          end: "2026-09-22T17:00:00+03:00",
          description: "Visit Athens' Acropolis and archaeological treasures.",
        },
        {
          start: "2026-09-24T08:00:00+02:00",
          end: "2026-09-25T18:00:00+02:00",
          description:
            "Discover Alexandria's library and Greco-Roman antiquities.",
        },
        {
          start: "2026-09-26T07:00:00+02:00",
          end: "2026-09-26T16:00:00+02:00",
          description: "Daytime transit through the historic Suez Canal.",
        },
        {
          start: "2026-09-27T09:00:00+03:00",
          end: "2026-09-29T18:00:00+03:00",
          description: "Excursion to Petra from Aqaba and Red Sea exploration.",
        },
        {
          start: "2026-10-02T08:00:00+04:00",
          end: "2026-10-03T17:00:00+04:00",
          description:
            "Discover Salalah's frankincense trail and tropical landscape.",
        },
        {
          start: "2026-10-04T09:00:00+04:00",
          end: "2026-10-06T18:00:00+04:00",
          description:
            "Experience Muscat's traditional souks and Sultan Qaboos Grand Mosque.",
        },
        {
          start: "2026-10-07T08:00:00+04:00",
          end: "2026-10-07T18:00:00+04:00",
          description:
            "Arrive in Dubai with views of the Burj Khalifa and Palm Jumeirah.",
        },
      ],
    },
    requiredDocuments: [
      "Valid Passport with minimum 6 months validity",
      "Multiple entry Schengen Visa (if applicable)",
      "Jordan Visa (if applicable)",
      "Oman Visa (if applicable)",
      "UAE Visa (if applicable)",
    ],
    cancellationPolicy:
      "Full refund if canceled 120 days prior, 25% refund 60-119 days prior, no refund within 59 days",
    tourCategoryId: "ultra-luxury-cruise",
    contactPersonnel: [
      {
        name: "Ahmed Al-Farsi",
        role: "Transcontinental Cruise Director",
        bio: "Expert in Mediterranean to Arabian sea routes with extensive knowledge of multiple cultures and historical sites.",
        languages: ["Arabic", "English", "Spanish", "Greek", "Italian"],
        experienceYears: 18,
        profileImage:
          "https://images.unsplash.com/photo-1566492031773-4f4e44671857",
        contact: {
          contactEmail: "ahmed.alfarsi@transcontinentalcruises.com",
          contactNumber: "+34 931 555 987",
        },
      },
    ],
    title: "Three Seas Odyssey: Barcelona to Dubai",
    description:
      "An extraordinary 21-day journey connecting Europe, Africa, and Asia through three seas, including a Suez Canal transit and visits to world-renowned archaeological and cultural sites.",
    tags: [
      "luxury",
      "Suez Canal",
      "multi-continent",
      "archaeological",
      "Arabian Gulf",
    ],
    basePrice: 12999,
    rating: 4.9,
    isFamilyFriendly: false,
    isPetFriendly: false,
    isCulturalExperience: true,
    isLuxuryCruise: true,
  },
  {
    departureLocation: {
      city: "Barcelona",
      country: "Spain",
      region: "Catalonia",
      coordinates: { latitude: 41.3523, longitude: 2.18 },
      address: "Port of Barcelona, Moll de Barcelona, s/n, 08039 Barcelona",
      timezone: "Europe/Madrid",
      additionalInfo: "Western Mediterranean cruise terminal",
    },
    arrivalLocation: {
      city: "Barcelona",
      country: "Spain",
      region: "Catalonia",
      coordinates: { latitude: 41.3523, longitude: 2.18 },
      timezone: "Europe/Madrid",
    },
    category: "premium",
    itinerary: {
      route: [
        { city: "Barcelona", country: "Spain" },
        { city: "Cannes", country: "France" },
        { city: "Florence", country: "Italy" },
        { city: "Rome", country: "Italy" },
        { city: "Amalfi Coast", country: "Italy" },
        { city: "Sicily", country: "Italy" },
        { city: "Sardinia", country: "Italy" },
        { city: "Ibiza", country: "Spain" },
        { city: "Barcelona", country: "Spain" },
      ],
      description:
        "A 12-day premium Western Mediterranean cruise featuring Italy's most beautiful coastal destinations.",
      distance: "1,800 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
        {
          start: "2026-06-05T17:00:00+02:00",
          end: "2026-06-06T08:00:00+02:00",
          description: "Sailing from Barcelona to the French Riviera.",
        },
        {
          start: "2026-06-07T19:00:00+02:00",
          end: "2026-06-08T07:00:00+02:00",
          description: "Cruising along the Italian Riviera to Florence (Livorno).",
        },
        {
          start: "2026-06-09T16:00:00+02:00",
          end: "2026-06-10T08:00:00+02:00",
          description: "Short coastal sail to Rome (Civitavecchia).",
        },
        {
          start: "2026-06-11T18:00:00+02:00",
          end: "2026-06-12T08:00:00+02:00",
          description: "Sailing south to the Amalfi Coast.",
        },
        {
          start: "2026-06-13T17:00:00+02:00",
          end: "2026-06-14T09:00:00+02:00",
          description: "Crossing to Sicily.",
        },
        {
          start: "2026-06-15T19:00:00+02:00",
          end: "2026-06-16T08:00:00+02:00",
          description: "Sailing to Sardinia.",
        },
        {
          start: "2026-06-17T16:00:00+02:00",
          end: "2026-06-18T10:00:00+02:00",
          description: "Mediterranean crossing to Ibiza.",
        },
        {
          start: "2026-06-19T18:00:00+02:00",
          end: "2026-06-20T09:00:00+02:00",
          description: "Final sailing back to Barcelona.",
        },
      ],
      timeOnLand: [
        {
          start: "2026-06-06T08:00:00+02:00",
          end: "2026-06-07T19:00:00+02:00",
          description: "Experience the glamour of Cannes and the French Riviera.",
        },
        {
          start: "2026-06-08T07:00:00+02:00",
          end: "2026-06-09T16:00:00+02:00",
          description: "Visit Florence's Renaissance treasures and Tuscan countryside.",
        },
        {
          start: "2026-06-10T08:00:00+02:00",
          end: "2026-06-11T18:00:00+02:00",
          description: "Explore Rome's ancient wonders and Vatican City.",
        },
        {
          start: "2026-06-12T08:00:00+02:00",
          end: "2026-06-13T17:00:00+02:00",
          description:
            "Discover the dramatic beauty of the Amalfi Coast and Positano.",
        },
        {
          start: "2026-06-14T09:00:00+02:00",
          end: "2026-06-15T19:00:00+02:00",
          description: "Tour Sicily's ancient ruins and Mt. Etna.",
        },
        {
          start: "2026-06-16T08:00:00+02:00",
          end: "2026-06-17T16:00:00+02:00",
          description: "Enjoy Sardinia's pristine beaches and unique culture.",
        },
        {
          start: "2026-06-18T10:00:00+02:00",
          end: "2026-06-19T18:00:00+02:00",
          description: "Experience Ibiza's beautiful coves and vibrant culture.",
        },
      ],
    },
    requiredDocuments: ["Valid Passport", "Schengen Visa (if applicable)"],
    cancellationPolicy:
      "Full refund if canceled 60 days prior, 40% refund 30-59 days prior, no refund within 29 days",
    tourCategoryId: "premium-cruise",
    contactPersonnel: [
      {
        name: "Lucia Romano",
        role: "Western Mediterranean Cruise Director",
        bio: "Italian native with extensive knowledge of Mediterranean cuisine, culture, and hidden gems throughout the region.",
        languages: ["Italian", "Spanish", "English", "French"],
        experienceYears: 12,
        profileImage:
          "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f",
        contact: {
          contactEmail: "lucia.romano@mediterraneancruises.com",
          contactNumber: "+34 931 555 432",
        },
      },
    ],
    title: "Mediterranean Grand Tour: Italian Coastlines",
    description:
      "A premium 12-day circular cruise from Barcelona showcasing Italy's most spectacular coastal destinations, with immersive cultural experiences and exceptional cuisine.",
    tags: ["premium", "Italian coast", "Mediterranean", "cultural", "gastronomy"],
    basePrice: 4299,
    rating: 4.7,
    isFamilyFriendly: true,
    isPetFriendly: false,
    isCulturalExperience: true,
    isLuxuryCruise: false,
  },
  {
    departureLocation: {
      city: "Barcelona",
      country: "Spain",
      region: "Catalonia",
      coordinates: { latitude: 41.3523, longitude: 2.18 },
      address: "Port of Barcelona, Moll de Barcelona, s/n, 08039 Barcelona",
      timezone: "Europe/Madrid",
      additionalInfo: "Exclusive luxury cruise terminal",
    },
    arrivalLocation: {
      city: "Barcelona",
      country: "Spain",
      region: "Catalonia",
      coordinates: { latitude: 41.3523, longitude: 2.18 },
      timezone: "Europe/Madrid",
    },
    category: "ultra-luxury",
    itinerary: {
      route: [
        { city: "Barcelona", country: "Spain" },
        { city: "Saint-Tropez", country: "France" },
        { city: "Monaco", country: "Monaco" },
        { city: "Portofino", country: "Italy" },
        { city: "Corsica", country: "France" },
        { city: "Mallorca", country: "Spain" },
        { city: "Barcelona", country: "Spain" },
      ],
      description:
        "A 9-day ultra-luxury exploration of the most exclusive Mediterranean destinations.",
      distance: "950 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
        {
          start: "2026-07-10T17:00:00+02:00",
          end: "2026-07-11T09:00:00+02:00",
          description: "Luxury sailing from Barcelona to Saint-Tropez.",
        },
        {
          start: "2026-07-12T18:00:00+02:00",
          end: "2026-07-13T08:00:00+02:00",
          description: "Short coastal cruise to Monaco.",
        },
        {
          start: "2026-07-14T17:00:00+02:00",
          end: "2026-07-15T08:00:00+02:00",
          description: "Sailing to the Italian Riviera and Portofino.",
        },
        {
          start: "2026-07-16T18:00:00+02:00",
          end: "2026-07-17T08:00:00+02:00",
          description: "Mediterranean crossing to Corsica.",
        },
        {
          start: "2026-07-18T17:00:00+02:00",
          end: "2026-07-19T09:00:00+02:00",
          description: "Sailing to Mallorca's Palma Bay.",
        },
        {
          start: "2026-07-20T18:00:00+02:00",
          end: "2026-07-21T08:00:00+02:00",
          description: "Final return sailing to Barcelona.",
        },
      ],
      timeOnLand: [
        {
          start: "2026-07-11T09:00:00+02:00",
          end: "2026-07-12T18:00:00+02:00",
          description: "Experience the glamor and beaches of Saint-Tropez.",
        },
        {
          start: "2026-07-13T08:00:00+02:00",
          end: "2026-07-14T17:00:00+02:00",
          description: "Visit Monaco's famous casino, yacht harbor, and palace.",
        },
        {
          start: "2026-07-15T08:00:00+02:00",
          end: "2026-07-16T18:00:00+02:00",
          description: "Explore the charming fishing village of Portofino.",
        },
        {
          start: "2026-07-17T08:00:00+02:00",
          end: "2026-07-18T17:00:00+02:00",
          description: "Discover Corsica's unique blend of French and Italian culture.",
        },
        {
          start: "2026-07-19T09:00:00+02:00",
          end: "2026-07-20T18:00:00+02:00",
          description: "Enjoy Mallorca's beautiful beaches and Palma's Gothic cathedral.",
        },
      ],
    },
    requiredDocuments: ["Valid Passport", "Schengen Visa (if applicable)"],
    cancellationPolicy:
      "Full refund if canceled 90 days prior, 25% refund 45-89 days prior, no refund within 44 days",
    tourCategoryId: "ultra-luxury-cruise",
    contactPersonnel: [
      {
        name: "Pierre Dubois",
        role: "Ultra-Luxury Cruise Concierge",
        bio: "Former luxury hotel manager specializing in VIP client experiences throughout the Mediterranean's most exclusive destinations.",
        languages: ["French", "English", "Italian", "Spanish"],
        experienceYears: 20,
        profileImage:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
        contact: {
          contactEmail: "pierre.dubois@ultraluxurycruises.com",
          contactNumber: "+34 931 555 111",
        },
      },
    ],
    title: "Mediterranean Riviera Ultra-Luxury Experience",
    description:
      "An intimate 9-day ultra-luxury cruise visiting the Mediterranean's most glamorous ports with personalized service, exclusive shore experiences, and world-class cuisine.",
    tags: ["ultra-luxury", "exclusive", "riviera", "VIP", "gourmet"],
    basePrice: 9999,
    rating: 5.0,
    isFamilyFriendly: false,
    isPetFriendly: false,
    isCulturalExperience: true,
    isLuxuryCruise: true,
  },
];
