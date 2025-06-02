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
];

export default miamiCruises;
