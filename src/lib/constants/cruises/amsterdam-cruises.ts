import { Cruise } from "@/lib/interfaces/services/cruises";

export const amsterdamCruises: Cruise[] = [
  {
    basePrice: 1018,
    departureLocation: {
      city: "Amsterdam",
      country: "Netherlands",
      region: "Sample Region",
      coordinates: {
        latitude: -11.356734467091414,
        longitude: 55.91602838331616,
      },
    },
    arrivalLocation: {
      city: "Amsterdam",
      country: "Netherlands",
      region: "Sample Region",
      coordinates: {
        latitude: -11.356734467091414,
        longitude: 55.91602838331616,
      },
    },
    isPopular: false,
    hasPopularDestination: false,
    category: "premium",
    itinerary: {
      route: [
        {
          city: "Amsterdam",
          country: "Netherlands",
          region: "Sample Region",
          coordinates: {
            latitude: -11.356734467091414,
            longitude: 55.91602838331616,
          },
        },
        {
          city: "Mykonos",
          country: "Destination Country",
          coordinates: {
            latitude: -59.37464247136597,
            longitude: 160.29136162202542,
          },
        },
        {
          city: "Dubrovnik",
          country: "Destination Country",
          coordinates: {
            latitude: 46.64121169012415,
            longitude: 168.09733276404842,
          },
        },
        {
          city: "Barcelona",
          country: "Destination Country",
          coordinates: {
            latitude: 47.1713368715198,
            longitude: 8.965174815477582,
          },
        },
        {
          city: "Amsterdam",
          country: "Netherlands",
          region: "Sample Region",
          coordinates: {
            latitude: -11.356734467091414,
            longitude: 55.91602838331616,
          },
        },
      ],
      description:
        "Experience luxury and adventure as you sail from Amsterdam to beautiful destinations in Amsterdam.",
      distance: "541 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
        {
          start: "Day 2",
          end: "Day 2",
          duration: "1 days",
          description: "Sailing from Amsterdam to Mykonos",
        },
        {
          start: "Day 4",
          end: "Day 5",
          duration: "2 days",
          description: "Sailing from Mykonos to Dubrovnik",
        },
        {
          start: "Day 7",
          end: "Day 7",
          duration: "1 days",
          description: "Sailing from Dubrovnik to Barcelona",
        },
        {
          start: "Day 9",
          end: "Day 9",
          duration: "1 days",
          description: "Sailing from Barcelona to Amsterdam",
        },
      ],
      timeOnLand: [
        {
          start: "Day 1",
          end: "Day 1",
          duration: "1 days",
          description: "Exploring Amsterdam",
        },
        {
          start: "Day 3",
          end: "Day 3",
          duration: "1 days",
          description: "Exploring Mykonos",
        },
        {
          start: "Day 6",
          end: "Day 6",
          duration: "1 days",
          description: "Exploring Dubrovnik",
        },
        {
          start: "Day 8",
          end: "Day 8",
          duration: "1 days",
          description: "Exploring Barcelona",
        },
        {
          start: "Day 10",
          end: "Day 10",
          duration: "1 days",
          description: "Exploring Amsterdam",
        },
      ],
    },
    tourCategoryId: "sample-tour-id",
    contactPersonnel: [
      {
        name: "John Doe",
        role: "Cruise Director",
        languages: ["English", "Spanish"],
        experienceYears: 10,
        profileImage: "/images/staff/john-doe.jpg",
        contact: {
          contactEmail: "john.doe@example.com",
          contactNumber: "+1-123-456-7890",
        },
      },
    ],
    title: "Luxury Amsterdam Cruise from Amsterdam",
    description:
      "Experience luxury and adventure as you sail from Amsterdam to beautiful destinations in Amsterdam.",
    rating: 4.5,
    tags: ["adventure", "relaxation", "sightseeing"],
  },
];
