import { Cruise } from "@/lib/interfaces/services/cruises";
import { Location } from "@/lib/types/types";

export const florenceCruises: Cruise[] = [
  {
    basePrice: 3378,
    departureLocation: {
  "city": "Florence",
  "country": "Italy",
  "region": "Tuscany",
  "coordinates": {
    "latitude": -84.349009792081,
    "longitude": -160.1177412119675
  }
},
    arrivalLocation: {
  "city": "Florence",
  "country": "Italy",
  "region": "Tuscany",
  "coordinates": {
    "latitude": -84.349009792081,
    "longitude": -160.1177412119675
  }
},
    isPopular: true,
    hasPopularDestination: false,
    category: "luxury",
    itinerary: {
      route: [
  {
    "city": "Florence",
    "country": "Italy",
    "region": "Tuscany",
    "coordinates": {
      "latitude": -84.349009792081,
      "longitude": -160.1177412119675
    }
  },
  {
    "city": "Malta",
    "country": "Destination Country",
    "coordinates": {
      "latitude": -22.381177722835574,
      "longitude": 31.82656759546842
    }
  },
  {
    "city": "Mykonos",
    "country": "Destination Country",
    "coordinates": {
      "latitude": 81.70877271317013,
      "longitude": 16.584930893818353
    }
  },
  {
    "city": "Rome",
    "country": "Destination Country",
    "coordinates": {
      "latitude": -33.13523033409548,
      "longitude": -86.81080929430713
    }
  },
  {
    "city": "Florence",
    "country": "Italy",
    "region": "Tuscany",
    "coordinates": {
      "latitude": -84.349009792081,
      "longitude": -160.1177412119675
    }
  }
],
      description: "Discover the wonders of Florence on this spectacular voyage departing from Florence.",
      distance: "698 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Florence to Malta"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from Malta to Mykonos"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Sailing from Mykonos to Rome"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Sailing from Rome to Florence"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Florence"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Exploring Malta"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Exploring Mykonos"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Exploring Rome"
  },
  {
    "start": "Day 12",
    "end": "Day 12",
    "duration": "1 days",
    "description": "Exploring Florence"
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
    title: "Explorer Florence Cruise from Florence",
    description: "Discover the wonders of Florence on this spectacular voyage departing from Florence.",
    rating: 4.2,
    tags: ["adventure", "relaxation", "sightseeing"]
  }
];
