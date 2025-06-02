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
];
