import { Cruise } from "@/lib/interfaces/services/cruises";
import { Location } from "@/lib/types/types";

export const sanFranciscoCruises: Cruise[] = [
  {
    basePrice: 7452,
    departureLocation: {
  "city": "San Francisco",
  "country": "United States",
  "region": "Pacific Northwest",
  "coordinates": {
    "latitude": -7.99492943045847,
    "longitude": -66.13538809596034
  }
},
    arrivalLocation: {
  "city": "Malta",
  "country": "Destination Country",
  "coordinates": {
    "latitude": -70.82771348783018,
    "longitude": 82.62490534889253
  }
},
    isPopular: true,
    hasPopularDestination: true,
    category: "ultra-luxury",
    itinerary: {
      route: [
  {
    "city": "San Francisco",
    "country": "United States",
    "region": "Pacific Northwest",
    "coordinates": {
      "latitude": -7.99492943045847,
      "longitude": -66.13538809596034
    }
  },
  {
    "city": "Dubrovnik",
    "country": "Destination Country",
    "coordinates": {
      "latitude": -80.67491710892838,
      "longitude": -126.64809674206408
    }
  },
  {
    "city": "Mykonos",
    "country": "Destination Country",
    "coordinates": {
      "latitude": 14.602418092355933,
      "longitude": -9.376067740794838
    }
  },
  {
    "city": "Malta",
    "country": "Destination Country",
    "coordinates": {
      "latitude": -70.82771348783018,
      "longitude": 82.62490534889253
    }
  }
],
      description: "Experience luxury and adventure as you sail from San Francisco to beautiful destinations in San Francisco.",
      distance: "1000 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from San Francisco to Dubrovnik"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Sailing from Dubrovnik to Mykonos"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Sailing from Mykonos to Malta"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring San Francisco"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Exploring Dubrovnik"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Exploring Mykonos"
  },
  {
    "start": "Day 12",
    "end": "Day 13",
    "duration": "2 days",
    "description": "Exploring Malta"
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
    title: "Explorer San Francisco Cruise from San Francisco",
    description: "Experience luxury and adventure as you sail from San Francisco to beautiful destinations in San Francisco.",
    rating: 4.6,
    tags: ["adventure", "relaxation", "sightseeing"]
  }
];
