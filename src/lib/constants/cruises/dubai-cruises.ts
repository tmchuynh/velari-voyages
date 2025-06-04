import { Cruise } from "@/lib/interfaces/services/cruises";
import { Location } from "@/lib/types/types";

export const dubaiCruises: Cruise[] = [
  {
    basePrice: 8130,
    departureLocation: {
  "city": "Dubai",
  "country": "United Arab Emirates",
  "region": "Sample Region",
  "coordinates": {
    "latitude": -53.97764792031095,
    "longitude": -89.75557057907479
  }
},
    arrivalLocation: {
  "city": "Dubai",
  "country": "United Arab Emirates",
  "region": "Sample Region",
  "coordinates": {
    "latitude": -53.97764792031095,
    "longitude": -89.75557057907479
  }
},
    isPopular: false,
    hasPopularDestination: true,
    category: "premium-luxury",
    itinerary: {
      route: [
  {
    "city": "Dubai",
    "country": "United Arab Emirates",
    "region": "Sample Region",
    "coordinates": {
      "latitude": -53.97764792031095,
      "longitude": -89.75557057907479
    }
  },
  {
    "city": "Athens",
    "country": "Destination Country",
    "coordinates": {
      "latitude": -84.86155706654272,
      "longitude": 58.125225076169045
    }
  },
  {
    "city": "Mykonos",
    "country": "Destination Country",
    "coordinates": {
      "latitude": -60.66737125619149,
      "longitude": -118.61064506597445
    }
  },
  {
    "city": "Dubrovnik",
    "country": "Destination Country",
    "coordinates": {
      "latitude": 72.82137757794314,
      "longitude": -165.76503193722561
    }
  },
  {
    "city": "Dubai",
    "country": "United Arab Emirates",
    "region": "Sample Region",
    "coordinates": {
      "latitude": -53.97764792031095,
      "longitude": -89.75557057907479
    }
  }
],
      description: "Embark on an unforgettable journey from Dubai, exploring the gems of Dubai.",
      distance: "768 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Dubai to Athens"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Sailing from Athens to Mykonos"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Sailing from Mykonos to Dubrovnik"
  },
  {
    "start": "Day 14",
    "end": "Day 14",
    "duration": "1 days",
    "description": "Sailing from Dubrovnik to Dubai"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Dubai"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Exploring Athens"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Exploring Mykonos"
  },
  {
    "start": "Day 12",
    "end": "Day 13",
    "duration": "2 days",
    "description": "Exploring Dubrovnik"
  },
  {
    "start": "Day 15",
    "end": "Day 15",
    "duration": "1 days",
    "description": "Exploring Dubai"
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
    title: "Explorer Dubai Cruise from Dubai",
    description: "Embark on an unforgettable journey from Dubai, exploring the gems of Dubai.",
    rating: 4.8,
    tags: ["adventure", "relaxation", "sightseeing"]
  }
];
