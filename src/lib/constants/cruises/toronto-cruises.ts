import { Cruise } from "@/lib/interfaces/services/cruises";
import { Location } from "@/lib/types/types";

export const torontoCruises: Cruise[] = [
  {
    basePrice: 8261,
    departureLocation: {
  "city": "Toronto",
  "country": "Canada",
  "region": "Ontario",
  "coordinates": {
    "latitude": -30.408103942075485,
    "longitude": 57.20828570749555
  }
},
    arrivalLocation: {
  "city": "Toronto",
  "country": "Canada",
  "region": "Ontario",
  "coordinates": {
    "latitude": -30.408103942075485,
    "longitude": 57.20828570749555
  }
},
    isPopular: true,
    hasPopularDestination: true,
    category: "entry-luxury",
    itinerary: {
      route: [
  {
    "city": "Toronto",
    "country": "Canada",
    "region": "Ontario",
    "coordinates": {
      "latitude": -30.408103942075485,
      "longitude": 57.20828570749555
    }
  },
  {
    "city": "Athens",
    "country": "Destination Country",
    "coordinates": {
      "latitude": 50.65694050899452,
      "longitude": 60.75297025039396
    }
  },
  {
    "city": "Mykonos",
    "country": "Destination Country",
    "coordinates": {
      "latitude": 68.89033383313014,
      "longitude": 160.27622538053845
    }
  },
  {
    "city": "Rome",
    "country": "Destination Country",
    "coordinates": {
      "latitude": -61.47240813895496,
      "longitude": 61.843606323770814
    }
  },
  {
    "city": "Toronto",
    "country": "Canada",
    "region": "Ontario",
    "coordinates": {
      "latitude": -30.408103942075485,
      "longitude": 57.20828570749555
    }
  }
],
      description: "Set sail from vibrant Toronto on a journey through the stunning landscapes and cultures of Toronto.",
      distance: "1318 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Toronto to Athens"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Athens to Mykonos"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Sailing from Mykonos to Rome"
  },
  {
    "start": "Day 13",
    "end": "Day 13",
    "duration": "1 days",
    "description": "Sailing from Rome to Toronto"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Toronto"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
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
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Exploring Rome"
  },
  {
    "start": "Day 14",
    "end": "Day 14",
    "duration": "1 days",
    "description": "Exploring Toronto"
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
    title: "Discovery Toronto Cruise from Toronto",
    description: "Set sail from vibrant Toronto on a journey through the stunning landscapes and cultures of Toronto.",
    rating: 4.2,
    tags: ["adventure", "relaxation", "sightseeing"]
  }
];
