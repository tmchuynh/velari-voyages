import { Cruise } from "@/lib/interfaces/services/cruises";
import { Location } from "@/lib/types/types";

export const southamptonCruises: Cruise[] = [
  {
    basePrice: 6388,
    departureLocation: {
  "city": "Southampton",
  "country": "United Kingdom",
  "region": "England",
  "coordinates": {
    "latitude": 25.311314110966777,
    "longitude": -20.234181974691097
  }
},
    arrivalLocation: {
  "city": "Southampton",
  "country": "United Kingdom",
  "region": "England",
  "coordinates": {
    "latitude": 25.311314110966777,
    "longitude": -20.234181974691097
  }
},
    isPopular: false,
    hasPopularDestination: false,
    category: "premium-luxury",
    itinerary: {
      route: [
  {
    "city": "Southampton",
    "country": "United Kingdom",
    "region": "England",
    "coordinates": {
      "latitude": 25.311314110966777,
      "longitude": -20.234181974691097
    }
  },
  {
    "city": "Tallinn",
    "country": "Destination Country",
    "coordinates": {
      "latitude": 4.78010935670946,
      "longitude": -32.12421126992314
    }
  },
  {
    "city": "St. Petersburg",
    "country": "Destination Country",
    "coordinates": {
      "latitude": -36.38318646072436,
      "longitude": 16.46733300340003
    }
  },
  {
    "city": "Southampton",
    "country": "United Kingdom",
    "region": "England",
    "coordinates": {
      "latitude": 25.311314110966777,
      "longitude": -20.234181974691097
    }
  }
],
      description: "Embark on an unforgettable journey from Southampton, exploring the gems of Northern Europe.",
      distance: "785 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Southampton to Tallinn"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Tallinn to St. Petersburg"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Sailing from St. Petersburg to Southampton"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Southampton"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Exploring Tallinn"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Exploring St. Petersburg"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Exploring Southampton"
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
    title: "Ultimate Northern Europe Cruise from Southampton",
    description: "Embark on an unforgettable journey from Southampton, exploring the gems of Northern Europe.",
    rating: 4.6,
    tags: ["adventure", "relaxation", "sightseeing"]
  }
];
