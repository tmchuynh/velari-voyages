import { Cruise } from "@/lib/interfaces/services/cruises";
import { Location } from "@/lib/types/types";

export const barcelonaCruises: Cruise[] = [
  {
    basePrice: 7988,
    departureLocation: {
  "city": "Barcelona",
  "country": "Spain",
  "region": "Andalusia",
  "coordinates": {
    "latitude": 61.35239390633936,
    "longitude": 145.75953465446491
  }
},
    arrivalLocation: {
  "city": "Mykonos",
  "country": "Destination Country",
  "coordinates": {
    "latitude": 72.4784152304332,
    "longitude": 57.07929381182214
  }
},
    isPopular: false,
    hasPopularDestination: false,
    category: "luxury",
    itinerary: {
      route: [
  {
    "city": "Barcelona",
    "country": "Spain",
    "region": "Andalusia",
    "coordinates": {
      "latitude": 61.35239390633936,
      "longitude": 145.75953465446491
    }
  },
  {
    "city": "Rome",
    "country": "Destination Country",
    "coordinates": {
      "latitude": -60.47785631527491,
      "longitude": 78.69126846480594
    }
  },
  {
    "city": "Mykonos",
    "country": "Destination Country",
    "coordinates": {
      "latitude": 72.4784152304332,
      "longitude": 57.07929381182214
    }
  }
],
      description: "Discover the wonders of Mediterranean on this spectacular voyage departing from Barcelona.",
      distance: "1047 nautical miles",
      totalDuration: "6 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Barcelona to Rome"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Sailing from Rome to Mykonos"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Barcelona"
  },
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Exploring Rome"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Exploring Mykonos"
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
    title: "Explorer Mediterranean Cruise from Barcelona",
    description: "Discover the wonders of Mediterranean on this spectacular voyage departing from Barcelona.",
    rating: 4.9,
    tags: ["adventure", "relaxation", "sightseeing"]
  }
];
