import { Cruise } from "@/lib/interfaces/services/cruises";
import { Location } from "@/lib/types/types";

export const sanJuanCruises: Cruise[] = [
  {
    basePrice: 7443,
    departureLocation: {
  "city": "San Juan",
  "country": "Puerto Rico",
  "region": "Sample Region",
  "coordinates": {
    "latitude": 58.26375106975192,
    "longitude": -139.10192297815814
  }
},
    arrivalLocation: {
  "city": "San Juan",
  "country": "Puerto Rico",
  "region": "Sample Region",
  "coordinates": {
    "latitude": 58.26375106975192,
    "longitude": -139.10192297815814
  }
},
    isPopular: false,
    hasPopularDestination: true,
    category: "luxury",
    itinerary: {
      route: [
  {
    "city": "San Juan",
    "country": "Puerto Rico",
    "region": "Sample Region",
    "coordinates": {
      "latitude": 58.26375106975192,
      "longitude": -139.10192297815814
    }
  },
  {
    "city": "Mykonos",
    "country": "Destination Country",
    "coordinates": {
      "latitude": 84.33446225615646,
      "longitude": -72.08337228585835
    }
  },
  {
    "city": "Dubrovnik",
    "country": "Destination Country",
    "coordinates": {
      "latitude": -32.18605655029723,
      "longitude": 17.95704870462535
    }
  },
  {
    "city": "Rome",
    "country": "Destination Country",
    "coordinates": {
      "latitude": -82.27949233447409,
      "longitude": -158.894425503582
    }
  },
  {
    "city": "Santorini",
    "country": "Destination Country",
    "coordinates": {
      "latitude": 5.241723493151156,
      "longitude": 71.32938886746038
    }
  },
  {
    "city": "San Juan",
    "country": "Puerto Rico",
    "region": "Sample Region",
    "coordinates": {
      "latitude": 58.26375106975192,
      "longitude": -139.10192297815814
    }
  }
],
      description: "Experience luxury and adventure as you sail from San Juan to beautiful destinations in San Juan.",
      distance: "862 nautical miles",
      totalDuration: "19 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from San Juan to Mykonos"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Mykonos to Dubrovnik"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Sailing from Dubrovnik to Rome"
  },
  {
    "start": "Day 12",
    "end": "Day 13",
    "duration": "2 days",
    "description": "Sailing from Rome to Santorini"
  },
  {
    "start": "Day 16",
    "end": "Day 17",
    "duration": "2 days",
    "description": "Sailing from Santorini to San Juan"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring San Juan"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Exploring Mykonos"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Exploring Dubrovnik"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Exploring Rome"
  },
  {
    "start": "Day 14",
    "end": "Day 15",
    "duration": "2 days",
    "description": "Exploring Santorini"
  },
  {
    "start": "Day 18",
    "end": "Day 19",
    "duration": "2 days",
    "description": "Exploring San Juan"
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
    title: "Adventure San Juan Cruise from San Juan",
    description: "Experience luxury and adventure as you sail from San Juan to beautiful destinations in San Juan.",
    rating: 4.5,
    tags: ["adventure", "relaxation", "sightseeing"]
  }
];
