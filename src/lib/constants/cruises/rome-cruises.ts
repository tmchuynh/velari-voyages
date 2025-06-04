import { Cruise } from "@/lib/interfaces/services/cruises";
import { Location } from "@/lib/types/types";

export const romeCruises: Cruise[] = [
  {
    basePrice: 2420,
    departureLocation: {
  "city": "Rome",
  "country": "Italy",
  "region": "Lazio",
  "coordinates": {
    "latitude": -24.67449617380865,
    "longitude": -55.427717745221216
  }
},
    arrivalLocation: {
  "city": "Santorini",
  "country": "Destination Country",
  "coordinates": {
    "latitude": -34.81449387825364,
    "longitude": -57.61932424473068
  }
},
    isPopular: true,
    hasPopularDestination: true,
    category: "expedition",
    itinerary: {
      route: [
  {
    "city": "Rome",
    "country": "Italy",
    "region": "Lazio",
    "coordinates": {
      "latitude": -24.67449617380865,
      "longitude": -55.427717745221216
    }
  },
  {
    "city": "Dubrovnik",
    "country": "Destination Country",
    "coordinates": {
      "latitude": -21.80954551300683,
      "longitude": -19.50272972701427
    }
  },
  {
    "city": "Santorini",
    "country": "Destination Country",
    "coordinates": {
      "latitude": -34.81449387825364,
      "longitude": -57.61932424473068
    }
  }
],
      description: "Experience luxury and adventure as you sail from Rome to beautiful destinations in Mediterranean.",
      distance: "911 nautical miles",
      totalDuration: "8 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Rome to Dubrovnik"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Sailing from Dubrovnik to Santorini"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Rome"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Exploring Dubrovnik"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Exploring Santorini"
  }
]
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
          contactNumber: "+1-123-456-7890"
        }
      }
    ],
    title: "Discovery Mediterranean Cruise from Rome",
    description: "Experience luxury and adventure as you sail from Rome to beautiful destinations in Mediterranean.",
    rating: 5.0,
    tags: ["adventure", "relaxation", "sightseeing"]
  }
];
