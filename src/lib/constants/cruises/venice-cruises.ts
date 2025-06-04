import { Cruise } from "@/lib/interfaces/services/cruises";
import { Location } from "@/lib/types/types";

export const veniceCruises: Cruise[] = [
  {
    basePrice: 8776,
    departureLocation: {
  "city": "Venice",
  "country": "Italy",
  "region": "Lazio",
  "coordinates": {
    "latitude": -76.69201506862883,
    "longitude": 70.34239354118668
  }
},
    arrivalLocation: {
  "city": "Barcelona",
  "country": "Destination Country",
  "coordinates": {
    "latitude": 4.624389768193751,
    "longitude": -39.06007384404097
  }
},
    isPopular: true,
    hasPopularDestination: false,
    category: "luxury",
    itinerary: {
      route: [
  {
    "city": "Venice",
    "country": "Italy",
    "region": "Lazio",
    "coordinates": {
      "latitude": -76.69201506862883,
      "longitude": 70.34239354118668
    }
  },
  {
    "city": "Rome",
    "country": "Destination Country",
    "coordinates": {
      "latitude": -47.762473896750905,
      "longitude": -0.7637661609036286
    }
  },
  {
    "city": "Athens",
    "country": "Destination Country",
    "coordinates": {
      "latitude": -7.033671946006194,
      "longitude": 63.97371713935749
    }
  },
  {
    "city": "Barcelona",
    "country": "Destination Country",
    "coordinates": {
      "latitude": 4.624389768193751,
      "longitude": -39.06007384404097
    }
  }
],
      description: "Embark on an unforgettable journey from Venice, exploring the gems of Mediterranean.",
      distance: "1166 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Venice to Rome"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Rome to Athens"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Sailing from Athens to Barcelona"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Venice"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Exploring Rome"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Exploring Athens"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Exploring Barcelona"
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
    title: "Majestic Mediterranean Cruise from Venice",
    description: "Embark on an unforgettable journey from Venice, exploring the gems of Mediterranean.",
    rating: 5.0,
    tags: ["adventure", "relaxation", "sightseeing"]
  }
];
