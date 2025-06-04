import { Cruise } from "@/lib/interfaces/services/cruises";
import { Location } from "@/lib/types/types";

export const losAngelesCruises: Cruise[] = [
  {
    basePrice: 8224,
    departureLocation: {
  "city": "Los Angeles",
  "country": "United States",
  "region": "East Coast",
  "coordinates": {
    "latitude": 29.656441061084692,
    "longitude": -146.6261906147679
  }
},
    arrivalLocation: {
  "city": "Malta",
  "country": "Destination Country",
  "coordinates": {
    "latitude": 40.7062428331576,
    "longitude": 81.70346768677643
  }
},
    isPopular: false,
    hasPopularDestination: false,
    category: "mainstream",
    itinerary: {
      route: [
  {
    "city": "Los Angeles",
    "country": "United States",
    "region": "East Coast",
    "coordinates": {
      "latitude": 29.656441061084692,
      "longitude": -146.6261906147679
    }
  },
  {
    "city": "Barcelona",
    "country": "Destination Country",
    "coordinates": {
      "latitude": 43.243878013019156,
      "longitude": 124.59088564139086
    }
  },
  {
    "city": "Rome",
    "country": "Destination Country",
    "coordinates": {
      "latitude": -24.33003850013349,
      "longitude": -146.55227086583687
    }
  },
  {
    "city": "Mykonos",
    "country": "Destination Country",
    "coordinates": {
      "latitude": -75.73708493349746,
      "longitude": 110.15149339813541
    }
  },
  {
    "city": "Malta",
    "country": "Destination Country",
    "coordinates": {
      "latitude": 40.7062428331576,
      "longitude": 81.70346768677643
    }
  }
],
      description: "Discover the wonders of Los Angeles on this spectacular voyage departing from Los Angeles.",
      distance: "1165 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Los Angeles to Barcelona"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Barcelona to Rome"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Sailing from Rome to Mykonos"
  },
  {
    "start": "Day 13",
    "end": "Day 14",
    "duration": "2 days",
    "description": "Sailing from Mykonos to Malta"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Los Angeles"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Exploring Barcelona"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Exploring Rome"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Exploring Mykonos"
  },
  {
    "start": "Day 15",
    "end": "Day 15",
    "duration": "1 days",
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
    title: "Dream Los Angeles Cruise from Los Angeles",
    description: "Discover the wonders of Los Angeles on this spectacular voyage departing from Los Angeles.",
    rating: 4.3,
    tags: ["adventure", "relaxation", "sightseeing"]
  }
];
