import { Cruise } from "@/lib/interfaces/services/cruises";
import { Location } from "@/lib/types/types";

export const quebecCityCruises: Cruise[] = [
  {
    basePrice: 3552,
    departureLocation: {
  "city": "Quebec City",
  "country": "Canada",
  "region": "Ontario",
  "coordinates": {
    "latitude": 63.61808428122214,
    "longitude": 118.91988737465306
  }
},
    arrivalLocation: {
  "city": "Santorini",
  "country": "Destination Country",
  "coordinates": {
    "latitude": -72.79252380161113,
    "longitude": -16.384496122795696
  }
},
    isPopular: true,
    hasPopularDestination: false,
    category: "mainstream",
    itinerary: {
      route: [
  {
    "city": "Quebec City",
    "country": "Canada",
    "region": "Ontario",
    "coordinates": {
      "latitude": 63.61808428122214,
      "longitude": 118.91988737465306
    }
  },
  {
    "city": "Athens",
    "country": "Destination Country",
    "coordinates": {
      "latitude": 64.89267301379044,
      "longitude": 80.06585113738885
    }
  },
  {
    "city": "Rome",
    "country": "Destination Country",
    "coordinates": {
      "latitude": -84.73876962240394,
      "longitude": 168.2362307691048
    }
  },
  {
    "city": "Santorini",
    "country": "Destination Country",
    "coordinates": {
      "latitude": -72.79252380161113,
      "longitude": -16.384496122795696
    }
  }
],
      description: "Discover the wonders of Quebec City on this spectacular voyage departing from Quebec City.",
      distance: "932 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Quebec City to Athens"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from Athens to Rome"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Sailing from Rome to Santorini"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Quebec City"
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
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Exploring Santorini"
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
    title: "Majestic Quebec City Cruise from Quebec City",
    description: "Discover the wonders of Quebec City on this spectacular voyage departing from Quebec City.",
    rating: 4.9,
    tags: ["adventure", "relaxation", "sightseeing"]
  }
];
