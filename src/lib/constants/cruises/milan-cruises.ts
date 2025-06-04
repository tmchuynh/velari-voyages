import { Cruise } from "@/lib/interfaces/services/cruises";
import { Location } from "@/lib/types/types";

export const milanCruises: Cruise[] = [
  {
    basePrice: 5647,
    departureLocation: {
  "city": "Milan",
  "country": "Italy",
  "region": "Lazio",
  "coordinates": {
    "latitude": 26.363042663555333,
    "longitude": -94.09928603557162
  }
},
    arrivalLocation: {
  "city": "Rome",
  "country": "Destination Country",
  "coordinates": {
    "latitude": -66.93142489831475,
    "longitude": 117.64540502514973
  }
},
    isPopular: true,
    hasPopularDestination: true,
    category: "expedition",
    itinerary: {
      route: [
  {
    "city": "Milan",
    "country": "Italy",
    "region": "Lazio",
    "coordinates": {
      "latitude": 26.363042663555333,
      "longitude": -94.09928603557162
    }
  },
  {
    "city": "Athens",
    "country": "Destination Country",
    "coordinates": {
      "latitude": -55.1345203986551,
      "longitude": -33.635438499469416
    }
  },
  {
    "city": "Rome",
    "country": "Destination Country",
    "coordinates": {
      "latitude": -66.93142489831475,
      "longitude": 117.64540502514973
    }
  }
],
      description: "Set sail from vibrant Milan on a journey through the stunning landscapes and cultures of Milan.",
      distance: "1098 nautical miles",
      totalDuration: "6 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Milan to Athens"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from Athens to Rome"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Milan"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Exploring Athens"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Exploring Rome"
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
    title: "Explorer Milan Cruise from Milan",
    description: "Set sail from vibrant Milan on a journey through the stunning landscapes and cultures of Milan.",
    rating: 4.9,
    tags: ["adventure", "relaxation", "sightseeing"]
  }
];
