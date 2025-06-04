import { Cruise } from "@/lib/interfaces/services/cruises";
import { Location } from "@/lib/types/types";

export const bostonCruises: Cruise[] = [
  {
    basePrice: 3975,
    departureLocation: {
  "city": "Boston",
  "country": "United States",
  "region": "Southeast",
  "coordinates": {
    "latitude": 42.04049954459052,
    "longitude": 160.31420452228804
  }
},
    arrivalLocation: {
  "city": "Dubrovnik",
  "country": "Destination Country",
  "coordinates": {
    "latitude": -12.088686538047298,
    "longitude": -52.301112607560825
  }
},
    isPopular: true,
    hasPopularDestination: true,
    category: "ultra-luxury",
    itinerary: {
      route: [
  {
    "city": "Boston",
    "country": "United States",
    "region": "Southeast",
    "coordinates": {
      "latitude": 42.04049954459052,
      "longitude": 160.31420452228804
    }
  },
  {
    "city": "Barcelona",
    "country": "Destination Country",
    "coordinates": {
      "latitude": 49.48845112309442,
      "longitude": -100.8133606576337
    }
  },
  {
    "city": "Santorini",
    "country": "Destination Country",
    "coordinates": {
      "latitude": -24.06915161041733,
      "longitude": 13.812943646074643
    }
  },
  {
    "city": "Dubrovnik",
    "country": "Destination Country",
    "coordinates": {
      "latitude": -12.088686538047298,
      "longitude": -52.301112607560825
    }
  }
],
      description: "Embark on an unforgettable journey from Boston, exploring the gems of Boston.",
      distance: "915 nautical miles",
      totalDuration: "10 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Boston to Barcelona"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Barcelona to Santorini"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Sailing from Santorini to Dubrovnik"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Boston"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Exploring Barcelona"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Exploring Santorini"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Exploring Dubrovnik"
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
    title: "Discovery Boston Cruise from Boston",
    description: "Embark on an unforgettable journey from Boston, exploring the gems of Boston.",
    rating: 4.5,
    tags: ["adventure", "relaxation", "sightseeing"]
  }
];
