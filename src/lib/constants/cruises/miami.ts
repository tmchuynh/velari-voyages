import { Cruise } from "@/lib/interfaces/services/cruises";

export const miamiCruises: Cruise[] = [
  {
    departureLocation: {
      city: "Miami",
      country: "USA",
      region: "Florida",
      coordinates: { latitude: 25.7617, longitude: -80.1918 },
      timezone: "America/New_York",
      address: "PortMiami Terminal A",
    },
    arrivalLocation: {
      city: "Key Biscayne",
      country: "USA",
      region: "Florida",
      coordinates: { latitude: 25.6846, longitude: -80.1657 },
      timezone: "America/New_York",
      address: "Crandon Park Marina",
    },
    category: "mainstream",
    itinerary: {
      route: [
        {
          city: "Miami",
          country: "USA",
          region: "Florida",
          coordinates: { latitude: 25.7617, longitude: -80.1918 },
          address: "PortMiami Terminal A",
        },
        {
          city: "Key Biscayne",
          country: "USA",
          region: "Florida",
          coordinates: { latitude: 25.6846, longitude: -80.1657 },
          address: "Crandon Park Marina",
        },
      ],
      description:
        "Scenic 4-hour cruise from Miami Bay to Key Biscayne highlighting coastal wildlife, lighthouse views, and marine conservation areas.",
      distance: "15 nautical miles",
      totalDuration: "4 hours",
      timeAtSea: [
        {
          start: "2025-07-15T09:00:00-04:00",
          end: "2025-07-15T13:00:00-04:00",
          duration: "4 hours",
          description:
            "Cruise along Biscayne Bay with commentary on local ecosystems, mangroves, and bird habitats.",
        },
      ],
      timeOnLand: [
        {
          start: "2025-07-15T13:00:00-04:00",
          end: "2025-07-15T14:30:00-04:00",
          duration: "1.5 hours",
          description:
            "Explore Crandon Park beach and marina, with optional guided nature walk and picnic area.",
        },
      ],
    },
    requiredDocuments: [
      "Valid ID",
      "COVID-19 vaccination proof (if applicable)",
    ],
    requirements: ["Minimum age 5 years", "Ability to board small boats"],
    cancellationPolicy:
      "Full refund if canceled 14 days before departure; 50% refund up to 3 days before departure.",
    tourCategoryId: "weekend-cruise",
    contactPersonnel: [
      {
        name: "Carlos Ramirez",
        role: "Environmental Guide",
        description:
          "Environmental guide with 7 years experience in South Florida coastal tours.",
        languages: ["English", "Spanish"],
        experienceYears: 7,
        profileImage:
          "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91",
        contact: {
          contactNumber: "+1 305 555 1234",
          contactEmail: "carlos.ramirez@miamicruises.com",
        },
      },
    ],
    isLuxuryCruise: false,
    title: "Miami to Key Biscayne Nature Cruise",
    description:
      "Enjoy a nature-focused boat tour exploring Miami’s vibrant coastal ecosystem and scenic Key Biscayne shores.",
    tags: ["nature", "wildlife", "eco-tour", "family-friendly"],
    basePrice: 89.99,
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
      city: "Miami Beach",
      country: "USA",
      region: "Florida",
      coordinates: { latitude: 25.7907, longitude: -80.13 },
      timezone: "America/New_York",
      address: "Miami Beach Marina",
    },
    category: "luxury",
    itinerary: {
      route: [
        {
          city: "Miami",
          country: "USA",
          region: "Florida",
          coordinates: { latitude: 25.7617, longitude: -80.1918 },
          address: "PortMiami Terminal B",
        },
        {
          city: "Miami Beach",
          country: "USA",
          region: "Florida",
          coordinates: { latitude: 25.7907, longitude: -80.13 },
          address: "Miami Beach Marina",
        },
      ],
      description:
        "Exclusive 3-hour luxury cruise featuring premium dining, sunset views, and live music along Miami’s iconic coastline.",
      distance: "8 nautical miles",
      totalDuration: "3 hours",
      timeAtSea: [
        {
          start: "2025-09-05T18:00:00-04:00",
          end: "2025-09-05T21:00:00-04:00",
          duration: "3 hours",
          description:
            "Sunset cruise with panoramic views of Miami skyline, South Beach, and celebrity homes.",
        },
      ],
      timeOnLand: [
        {
          start: "2025-09-05T21:00:00-04:00",
          end: "2025-09-05T22:30:00-04:00",
          duration: "1.5 hours",
          description:
            "Optional post-cruise access to Miami Beach Marina lounges and VIP amenities.",
        },
      ],
    },
    requiredDocuments: ["Valid ID", "Reservation confirmation"],
    requirements: ["Minimum age 18 years", "Formal or smart casual attire"],
    cancellationPolicy:
      "Full refund if canceled 30 days before departure; 75% refund up to 7 days before departure.",
    tourCategoryId: "luxury-cruise",
    contactPersonnel: [
      {
        name: "Isabella Flores",
        role: "Concierge",
        description:
          "Concierge and host for luxury coastal experiences with 12 years of expertise.",
        languages: ["English", "Spanish"],
        experienceYears: 12,
        profileImage:
          "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91",
        contact: {
          contactNumber: "+1 305 555 5678",
          contactEmail: "isabella.flores@miamicruises.com",
        },
      },
    ],
    isLuxuryCruise: true,
    title: "Miami Luxury Sunset Cruise",
    description:
      "Relax and indulge on an upscale evening cruise along Miami’s breathtaking shoreline with fine dining and live entertainment.",
    tags: ["luxury", "sunset", "dining", "entertainment"],
    basePrice: 150,
    rating: 4.9,
  },
  {
    departureLocation: {
      city: "Miami",
      country: "USA",
      region: "Florida",
      coordinates: { latitude: 25.7617, longitude: -80.1918 },
      timezone: "America/New_York",
      address: "PortMiami Terminal C",
    },
    arrivalLocation: {
      city: "Fort Lauderdale",
      country: "USA",
      region: "Florida",
      coordinates: { latitude: 26.1224, longitude: -80.1373 },
      timezone: "America/New_York",
      address: "Fort Lauderdale Marina",
    },
    category: "mainstream",
    itinerary: {
      route: [
        {
          city: "Miami",
          country: "USA",
          region: "Florida",
          coordinates: { latitude: 25.7617, longitude: -80.1918 },
          address: "PortMiami Terminal C",
        },
        {
          city: "Fort Lauderdale",
          country: "USA",
          region: "Florida",
          coordinates: { latitude: 26.1224, longitude: -80.1373 },
          address: "Fort Lauderdale Marina",
        },
      ],
      description:
        "Exciting 6-hour adventure cruise from Miami to Fort Lauderdale featuring snorkeling stops, wildlife spotting, and beach activities.",
      distance: "30 nautical miles",
      totalDuration: "6 hours",
      timeAtSea: [
        {
          start: "2025-08-10T08:00:00-04:00",
          end: "2025-08-10T14:00:00-04:00",
          duration: "6 hours",
          description:
            "Cruise through Biscayne Bay and Atlantic coast with snorkeling breaks at coral reefs and guided wildlife watching.",
        },
      ],
      timeOnLand: [
        {
          start: "2025-08-10T14:00:00-04:00",
          end: "2025-08-10T15:00:00-04:00",
          duration: "1 hour",
          description:
            "Relax on Fort Lauderdale beach with opportunities for kayaking or beach volleyball.",
        },
      ],
    },
    requiredDocuments: ["Valid ID", "Swimwear and snorkeling gear recommended"],
    requirements: ["Minimum age 8 years", "Basic swimming skills required"],
    cancellationPolicy:
      "Full refund if canceled 7 days before departure; no refund after that.",
    tourCategoryId: "weekend-cruise",
    contactPersonnel: [
      {
        name: "Javier Morales",
        role: "Adventure Guide",
        description:
          "Adventure guide and marine biologist with 9 years experience.",
        languages: ["English", "Spanish"],
        experienceYears: 9,
        profileImage:
          "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91",
        contact: {
          contactNumber: "+1 305 555 7890",
          contactEmail: "javier.morales@miamicruises.com",
        },
      },
    ],
    isLuxuryCruise: false,
    title: "Miami to Fort Lauderdale Adventure Cruise",
    description:
      "A fun-filled day cruise offering snorkeling, wildlife encounters, and beach time along Florida’s east coast.",
    tags: ["adventure", "snorkeling", "wildlife", "family"],
    basePrice: 120,
    rating: 4.5,
  },
  // 9-day Bahamas Cruise
  {
    departureLocation: {
      city: "Miami",
      country: "USA",
      region: "Florida",
      coordinates: { latitude: 25.7617, longitude: -80.1918 },
      timezone: "America/New_York",
      address: "PortMiami Terminal D",
    },
    arrivalLocation: {
      city: "Miami",
      country: "USA",
      region: "Florida",
      coordinates: { latitude: 25.7617, longitude: -80.1918 },
      timezone: "America/New_York",
      address: "PortMiami Terminal D",
    },
    category: "premium",
    itinerary: {
      route: [
        { city: "Miami", country: "USA", region: "Florida" },
        { city: "Nassau", country: "Bahamas" },
        { city: "Freeport", country: "Bahamas" },
        { city: "Half Moon Cay", country: "Bahamas" },
        { city: "Great Stirrup Cay", country: "Bahamas" },
        { city: "Miami", country: "USA", region: "Florida" },
      ],
      description:
        "9-day premium cruise exploring the best of the Bahamas with extended island stays.",
      distance: "950 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
        {
          start: "2025-06-01T16:00:00-04:00",
          end: "2025-06-10T08:00:00-04:00",
          description: "Sailing through the crystal waters of the Bahamas",
        },
      ],
      timeOnLand: [
        {
          start: "2025-06-02T09:00:00-04:00",
          end: "2025-06-02T17:00:00-04:00",
          description: "Exploring Nassau's historic sites and beaches",
        },
        {
          start: "2025-06-04T08:00:00-04:00",
          end: "2025-06-04T18:00:00-04:00",
          description: "Beach day and water activities at Freeport",
        },
      ],
    },
    requiredDocuments: ["Valid Passport", "US Visa (if applicable)"],
    requirements: [
      "No age restrictions",
      "Medical clearance for water activities",
    ],
    cancellationPolicy: "Full refund if canceled 45 days before departure",
    tourCategoryId: "premium-cruise",
    contactPersonnel: [
      {
        name: "Maria Lopez",
        role: "Cruise Director",
        description: "Cruise Director with expertise in Caribbean destinations",
        languages: ["English", "Spanish", "French"],
        experienceYears: 10,
        profileImage:
          "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
        contact: {
          contactNumber: "+1 305 555 1122",
          contactEmail: "maria.lopez@miamicruises.com",
        },
      },
    ],
    isLuxuryCruise: false,
    isFamilyFriendly: true,
    title: "Bahamas Explorer - 9 Day Voyage",
    description:
      "Immerse yourself in Bahamian culture, pristine beaches, and tropical adventures on this 9-day premium cruise.",
    tags: ["bahamas", "premium", "beach", "island-hopping"],
    basePrice: 1299,
    rating: 4.7,
  },
  // 12-day Eastern Caribbean Cruise
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
      city: "Miami",
      country: "USA",
      region: "Florida",
      coordinates: { latitude: 25.7617, longitude: -80.1918 },
      timezone: "America/New_York",
      address: "PortMiami Terminal E",
    },
    category: "luxury",
    itinerary: {
      route: [
        { city: "Miami", country: "USA" },
        { city: "San Juan", country: "Puerto Rico" },
        { city: "St. Thomas", country: "US Virgin Islands" },
        { city: "Tortola", country: "British Virgin Islands" },
        { city: "St. Maarten", country: "Netherlands" },
        { city: "Antigua", country: "Antigua and Barbuda" },
        { city: "Miami", country: "USA" },
      ],
      description:
        "12-day luxury Eastern Caribbean cruise featuring multiple island destinations and onboard culinary experiences.",
      distance: "2,100 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
        {
          start: "2025-07-10T17:00:00-04:00",
          end: "2025-07-22T07:00:00-04:00",
          description: "Luxury sailing with fine dining and entertainment",
        },
      ],
      timeOnLand: [
        {
          start: "2025-07-12T08:00:00-04:00",
          end: "2025-07-12T18:00:00-04:00",
          description: "Cultural exploration in historic San Juan",
        },
        {
          start: "2025-07-14T09:00:00-04:00",
          end: "2025-07-14T17:00:00-04:00",
          description: "Beach day and shopping in St. Thomas",
        },
        {
          start: "2025-07-16T08:00:00-04:00",
          end: "2025-07-16T16:00:00-04:00",
          description: "Sailing adventures in Tortola",
        },
      ],
    },
    requiredDocuments: ["Valid Passport", "US Visa (if applicable)"],
    cancellationPolicy: "Full refund if canceled 60 days before departure",
    tourCategoryId: "luxury-cruise",
    contactPersonnel: [
      {
        name: "Robert Chen",
        role: "Luxury Experience Manager",
        description:
          "Expert in crafting personalized luxury cruise experiences",
        languages: ["English", "Mandarin"],
        experienceYears: 15,
        profileImage:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
        contact: {
          contactNumber: "+1 305 555 4433",
          contactEmail: "robert.chen@miamicruises.com",
        },
      },
    ],
    isLuxuryCruise: true,
    isFamilyFriendly: false,
    title: "Eastern Caribbean Luxury Odyssey",
    description:
      "Experience the finest in luxury cruising through the Eastern Caribbean's most exquisite destinations over 12 unforgettable days.",
    tags: ["luxury", "caribbean", "gourmet", "island"],
    basePrice: 2899,
    rating: 4.9,
  },
  // 14-day Western Caribbean Cruise
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
    category: "mainstream",
    itinerary: {
      route: [
        { city: "Miami", country: "USA" },
        { city: "Key West", country: "USA" },
        { city: "Cozumel", country: "Mexico" },
        { city: "Belize City", country: "Belize" },
        { city: "Roatan", country: "Honduras" },
        { city: "Grand Cayman", country: "Cayman Islands" },
        { city: "Montego Bay", country: "Jamaica" },
        { city: "Miami", country: "USA" },
      ],
      description:
        "14-day extensive exploration of Western Caribbean destinations featuring Mayan ruins, tropical forests, and pristine beaches.",
      distance: "2,600 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
        {
          start: "2025-08-15T16:00:00-04:00",
          end: "2025-08-29T09:00:00-04:00",
          description:
            "Sailing through the Western Caribbean waters with onboard entertainment and activities",
        },
      ],
      timeOnLand: [
        {
          start: "2025-08-16T09:00:00-04:00",
          end: "2025-08-16T17:00:00-04:00",
          description: "Key West historic district walking tour",
        },
        {
          start: "2025-08-18T07:00:00-05:00",
          end: "2025-08-18T18:00:00-05:00",
          description: "Mayan ruins excursion from Cozumel",
        },
        {
          start: "2025-08-20T08:00:00-06:00",
          end: "2025-08-20T17:00:00-06:00",
          description: "Rainforest adventure in Belize",
        },
      ],
    },
    requiredDocuments: ["Valid Passport", "US Visa (if applicable)"],
    requirements: [
      "Minimum age 5 years for excursions",
      "Medical clearance for adventure activities",
    ],
    cancellationPolicy: "Full refund if canceled 60 days before departure",
    tourCategoryId: "tropical-cruise",
    contactPersonnel: [
      {
        name: "David Williams",
        role: "Cruise Director",
        description:
          "Experienced in Western Caribbean destinations with a focus on cultural experiences",
        languages: ["English", "Spanish"],
        experienceYears: 12,
        profileImage:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
        contact: {
          contactNumber: "+1 305 555 8765",
          contactEmail: "david.williams@miamicruises.com",
        },
      },
    ],
    isLuxuryCruise: false,
    isFamilyFriendly: true,
    title: "Western Caribbean Grand Tour",
    description:
      "Embark on a 14-day adventure through the diverse cultures and landscapes of the Western Caribbean.",
    tags: ["caribbean", "adventure", "cultural", "family-friendly"],
    basePrice: 1999,
    rating: 4.7,
  },
  // 18-day Panama Canal Cruise
  {
    departureLocation: {
      city: "Miami",
      country: "USA",
      region: "Florida",
      coordinates: { latitude: 25.7617, longitude: -80.1918 },
      timezone: "America/New_York",
      address: "PortMiami Terminal G",
    },
    arrivalLocation: {
      city: "Los Angeles",
      country: "USA",
      region: "California",
      coordinates: { latitude: 33.7395, longitude: -118.2673 },
      timezone: "America/Los_Angeles",
      address: "Port of Los Angeles",
    },
    category: "premium",
    itinerary: {
      route: [
        { city: "Miami", country: "USA" },
        { city: "Cartagena", country: "Colombia" },
        { city: "Panama Canal", country: "Panama" },
        { city: "Puntarenas", country: "Costa Rica" },
        { city: "San Juan del Sur", country: "Nicaragua" },
        { city: "Puerto Quetzal", country: "Guatemala" },
        { city: "Acapulco", country: "Mexico" },
        { city: "Cabo San Lucas", country: "Mexico" },
        { city: "Los Angeles", country: "USA" },
      ],
      description:
        "18-day transformative journey from the Atlantic to the Pacific Ocean, featuring a full transit of the Panama Canal and stops in Central America.",
      distance: "4,800 nautical miles",
      totalDuration: "18 days",
      timeAtSea: [
        {
          start: "2025-09-10T16:00:00-04:00",
          end: "2025-09-28T09:00:00-07:00",
          description:
            "Ocean to ocean voyage with premium amenities and educational programming",
        },
      ],
      timeOnLand: [
        {
          start: "2025-09-12T07:00:00-05:00",
          end: "2025-09-12T17:00:00-05:00",
          description: "Historic Cartagena walled city tour",
        },
        {
          start: "2025-09-14T06:00:00-05:00",
          end: "2025-09-14T16:00:00-05:00",
          description: "Panama Canal transit with expert commentary",
        },
        {
          start: "2025-09-16T08:00:00-06:00",
          end: "2025-09-16T18:00:00-06:00",
          description: "Costa Rica rainforest and wildlife excursion",
        },
      ],
    },
    requiredDocuments: ["Valid Passport", "US Visa (if applicable)"],
    cancellationPolicy:
      "Full refund if canceled 90 days before departure; 50% refund up to 45 days",
    tourCategoryId: "premium-cruise",
    contactPersonnel: [
      {
        name: "Elena Rodriguez",
        role: "Destination Expert",
        description:
          "Latin America specialist with expertise in Panama Canal history",
        languages: ["English", "Spanish", "Portuguese"],
        experienceYears: 14,
        profileImage:
          "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2",
        contact: {
          contactNumber: "+1 305 555 3344",
          contactEmail: "elena.rodriguez@miamicruises.com",
        },
      },
    ],
    isLuxuryCruise: false,
    isFamilyFriendly: true,
    title: "Panama Canal & Central America Explorer",
    description:
      "Experience the engineering marvel of the Panama Canal and discover the diverse cultures and ecosystems of Central America on this 18-day voyage.",
    tags: ["panama-canal", "transcanal", "central-america", "educational"],
    basePrice: 3299,
    rating: 4.8,
  },
  // 21-day South America Cruise
  {
    departureLocation: {
      city: "Miami",
      country: "USA",
      region: "Florida",
      coordinates: { latitude: 25.7617, longitude: -80.1918 },
      timezone: "America/New_York",
      address: "PortMiami Terminal H",
    },
    arrivalLocation: {
      city: "Miami",
      country: "USA",
      region: "Florida",
      coordinates: { latitude: 25.7617, longitude: -80.1918 },
      timezone: "America/New_York",
      address: "PortMiami Terminal H",
    },
    category: "luxury",
    itinerary: {
      route: [
        { city: "Miami", country: "USA" },
        { city: "San Juan", country: "Puerto Rico" },
        { city: "Bridgetown", country: "Barbados" },
        { city: "Fortaleza", country: "Brazil" },
        { city: "Recife", country: "Brazil" },
        { city: "Rio de Janeiro", country: "Brazil" },
        { city: "Buenos Aires", country: "Argentina" },
        { city: "Montevideo", country: "Uruguay" },
        { city: "Punta del Este", country: "Uruguay" },
        { city: "Salvador", country: "Brazil" },
        { city: "Miami", country: "USA" },
      ],
      description:
        "21-day luxury voyage exploring the Atlantic coast of South America, featuring extended stays in iconic cities and exclusive shore excursions.",
      distance: "8,500 nautical miles",
      totalDuration: "21 days",
      timeAtSea: [
        {
          start: "2025-10-05T17:00:00-04:00",
          end: "2025-10-26T08:00:00-04:00",
          description:
            "Luxury sailing with South American themes, gourmet dining, and cultural performances",
        },
      ],
      timeOnLand: [
        {
          start: "2025-10-09T07:00:00-03:00",
          end: "2025-10-09T23:00:00-03:00",
          description:
            "Rio de Janeiro overnight experience with Carnival preview",
        },
        {
          start: "2025-10-12T08:00:00-03:00",
          end: "2025-10-13T17:00:00-03:00",
          description: "Two-day Buenos Aires tango and gaucho adventure",
        },
        {
          start: "2025-10-16T09:00:00-03:00",
          end: "2025-10-16T18:00:00-03:00",
          description: "Exclusive beach day in Punta del Este",
        },
      ],
    },
    requiredDocuments: [
      "Valid Passport",
      "Brazil Visa",
      "Argentina Visa (if applicable)",
    ],
    cancellationPolicy:
      "Full refund if canceled 120 days before departure; 75% refund up to 60 days",
    tourCategoryId: "luxury-cruise",
    contactPersonnel: [
      {
        name: "Alexandra Petrov",
        role: "Luxury Cruise Director",
        description:
          "International luxury cruise specialist with expertise in South American destinations",
        languages: ["English", "Spanish", "Portuguese", "Russian"],
        experienceYears: 18,
        profileImage:
          "https://images.unsplash.com/photo-1580489944761-15a19d654956",
        contact: {
          contactNumber: "+1 305 555 9922",
          contactEmail: "alexandra.petrov@miamicruises.com",
        },
      },
    ],
    isLuxuryCruise: true,
    isFamilyFriendly: false,
    title: "South American Grand Voyage",
    description:
      "Immerse yourself in the vibrant cultures, stunning landscapes, and rich history of South America's Atlantic coast on this 21-day luxury expedition.",
    tags: ["luxury", "south-america", "cultural", "exclusive"],
    basePrice: 5999,
    rating: 4.9,
  },
  // 25-day Transatlantic Cruise
  {
    departureLocation: {
      city: "Miami",
      country: "USA",
      region: "Florida",
      coordinates: { latitude: 25.7617, longitude: -80.1918 },
      timezone: "America/New_York",
      address: "PortMiami Terminal J",
    },
    arrivalLocation: {
      city: "Barcelona",
      country: "Spain",
      region: "Catalonia",
      coordinates: { latitude: 41.3851, longitude: 2.1734 },
      timezone: "Europe/Madrid",
      address: "Port of Barcelona",
    },
    category: "luxury",
    itinerary: {
      route: [
        { city: "Miami", country: "USA" },
        { city: "Bermuda", country: "Bermuda" },
        { city: "Ponta Delgada", country: "Portugal", region: "Azores" },
        { city: "Malaga", country: "Spain" },
        { city: "Valencia", country: "Spain" },
        { city: "Barcelona", country: "Spain" },
      ],
      description:
        "25-day transatlantic journey connecting North America and Europe with extended sea days and culturally rich port experiences.",
      distance: "5,400 nautical miles",
      totalDuration: "25 days",
      timeAtSea: [
        {
          start: "2025-04-05T16:00:00-04:00",
          end: "2025-04-30T10:00:00+02:00",
          description:
            "Luxurious transatlantic sailing with comprehensive enrichment programs and exclusive amenities",
        },
      ],
      timeOnLand: [
        {
          start: "2025-04-07T08:00:00-03:00",
          end: "2025-04-08T17:00:00-03:00",
          description: "Overnight in Bermuda with exclusive beach access",
        },
        {
          start: "2025-04-15T07:00:00+00:00",
          end: "2025-04-15T18:00:00+00:00",
          description: "Volcanic landscapes and wine tasting in the Azores",
        },
        {
          start: "2025-04-25T08:00:00+02:00",
          end: "2025-04-25T19:00:00+02:00",
          description: "Andalusian culture and cuisine experience in Malaga",
        },
      ],
    },
    requiredDocuments: ["Valid Passport", "Schengen Visa (if applicable)"],
    cancellationPolicy:
      "Full refund if canceled 120 days before departure; 75% refund up to 90 days",
    tourCategoryId: "luxury-transatlantic",
    contactPersonnel: [
      {
        name: "Jonathan Blake",
        role: "Transatlantic Voyage Director",
        description:
          "Veteran cruise director specialized in transatlantic journeys",
        languages: ["English", "French", "Spanish"],
        experienceYears: 20,
        profileImage:
          "https://images.unsplash.com/photo-1566492031773-4f4e44671857",
        contact: {
          contactNumber: "+1 305 555 7788",
          contactEmail: "jonathan.blake@miamicruises.com",
        },
      },
    ],
    isLuxuryCruise: true,
    isFamilyFriendly: false,
    title: "Transatlantic Grand Crossing: Miami to Barcelona",
    description:
      "Experience the timeless romance of an ocean crossing on this 25-day luxury journey from Miami to Barcelona with enriching sea days and fascinating ports.",
    tags: ["transatlantic", "luxury", "oceanic-crossing", "educational"],
    basePrice: 6499,
    rating: 4.9,
  },
];

export default miamiCruises;
