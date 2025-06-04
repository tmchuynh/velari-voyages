import { Cruise } from "@/lib/interfaces/services/cruises";
import { Location } from "@/lib/types/types";

export const galvestonCruises: Cruise[] = [
  {
    basePrice: 9110,
    departureLocation: {
  "city": "Galveston",
  "country": "United States",
  "region": "East Coast",
  "coordinates": {
    "latitude": -75.17635176484339,
    "longitude": -52.43965974435456
  }
},
    arrivalLocation: {
  "city": "Nassau",
  "country": "Destination Country",
  "coordinates": {
    "latitude": 48.28162356514028,
    "longitude": -136.27693152856872
  }
},
    isPopular: true,
    hasPopularDestination: true,
    category: "ultra-luxury",
    itinerary: {
      route: [
  {
    "city": "Galveston",
    "country": "United States",
    "region": "East Coast",
    "coordinates": {
      "latitude": -75.17635176484339,
      "longitude": -52.43965974435456
    }
  },
  {
    "city": "Roatán",
    "country": "Destination Country",
    "coordinates": {
      "latitude": -65.70207610463567,
      "longitude": 165.05999702380194
    }
  },
  {
    "city": "St. Thomas",
    "country": "Destination Country",
    "coordinates": {
      "latitude": 0.6632398889587137,
      "longitude": 1.54722498223299
    }
  },
  {
    "city": "Nassau",
    "country": "Destination Country",
    "coordinates": {
      "latitude": 48.28162356514028,
      "longitude": -136.27693152856872
    }
  }
],
      description: "Discover the wonders of Caribbean on this spectacular voyage departing from Galveston.",
      distance: "1092 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Galveston to Roatán"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Roatán to St. Thomas"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Sailing from St. Thomas to Nassau"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Galveston"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Exploring Roatán"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Exploring St. Thomas"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Exploring Nassau"
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
    title: "Dream Caribbean Cruise from Galveston",
    description: "Discover the wonders of Caribbean on this spectacular voyage departing from Galveston.",
    rating: 4.8,
    tags: ["adventure", "relaxation", "sightseeing"]
  }
];
