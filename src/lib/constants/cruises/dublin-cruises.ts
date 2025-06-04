import { Cruise } from "@/lib/interfaces/services/cruises";
import { Location } from "@/lib/types/types";

export const dublinCruises: Cruise[] = [
  {
    basePrice: 1078,
    departureLocation: {
  "city": "Dublin",
  "country": "Ireland",
  "region": "Sample Region",
  "coordinates": {
    "latitude": -57.68043987089098,
    "longitude": 109.81031443003428
  }
},
    arrivalLocation: {
  "city": "Barcelona",
  "country": "Destination Country",
  "coordinates": {
    "latitude": -5.704678353681615,
    "longitude": -43.733098757281084
  }
},
    isPopular: false,
    hasPopularDestination: false,
    category: "expedition",
    itinerary: {
      route: [
  {
    "city": "Dublin",
    "country": "Ireland",
    "region": "Sample Region",
    "coordinates": {
      "latitude": -57.68043987089098,
      "longitude": 109.81031443003428
    }
  },
  {
    "city": "Malta",
    "country": "Destination Country",
    "coordinates": {
      "latitude": 5.461562126092119,
      "longitude": 79.96480447265856
    }
  },
  {
    "city": "Rome",
    "country": "Destination Country",
    "coordinates": {
      "latitude": -13.038420489332069,
      "longitude": -71.48882674160365
    }
  },
  {
    "city": "Dubrovnik",
    "country": "Destination Country",
    "coordinates": {
      "latitude": 20.57032790224993,
      "longitude": 145.9365979730942
    }
  },
  {
    "city": "Barcelona",
    "country": "Destination Country",
    "coordinates": {
      "latitude": -5.704678353681615,
      "longitude": -43.733098757281084
    }
  }
],
      description: "Discover the wonders of Dublin on this spectacular voyage departing from Dublin.",
      distance: "781 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Dublin to Malta"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from Malta to Rome"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Sailing from Rome to Dubrovnik"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Sailing from Dubrovnik to Barcelona"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Dublin"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Exploring Malta"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Exploring Rome"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Exploring Dubrovnik"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
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
    title: "Majestic Dublin Cruise from Dublin",
    description: "Discover the wonders of Dublin on this spectacular voyage departing from Dublin.",
    rating: 4.3,
    tags: ["adventure", "relaxation", "sightseeing"]
  }
];
