import { Cruise } from "@/lib/interfaces/services/cruises";
import { Location } from "@/lib/types/types";

export const charlestonCruises: Cruise[] = [
  {
    basePrice: 8103,
    departureLocation: {
  "city": "Charleston",
  "country": "United States",
  "region": "East Coast",
  "coordinates": {
    "latitude": -29.69664043058593,
    "longitude": 2.5782435031510147
  }
},
    arrivalLocation: {
  "city": "Malta",
  "country": "Destination Country",
  "coordinates": {
    "latitude": 14.663945858027773,
    "longitude": 117.99989016959762
  }
},
    isPopular: false,
    hasPopularDestination: false,
    category: "expedition",
    itinerary: {
      route: [
  {
    "city": "Charleston",
    "country": "United States",
    "region": "East Coast",
    "coordinates": {
      "latitude": -29.69664043058593,
      "longitude": 2.5782435031510147
    }
  },
  {
    "city": "Santorini",
    "country": "Destination Country",
    "coordinates": {
      "latitude": 21.388686434939288,
      "longitude": 178.89415185048563
    }
  },
  {
    "city": "Malta",
    "country": "Destination Country",
    "coordinates": {
      "latitude": 14.663945858027773,
      "longitude": 117.99989016959762
    }
  }
],
      description: "Embark on an unforgettable journey from Charleston, exploring the gems of Charleston.",
      distance: "1141 nautical miles",
      totalDuration: "6 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Charleston to Santorini"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Sailing from Santorini to Malta"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Charleston"
  },
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Exploring Santorini"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
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
    title: "Discovery Charleston Cruise from Charleston",
    description: "Embark on an unforgettable journey from Charleston, exploring the gems of Charleston.",
    rating: 4.5,
    tags: ["adventure", "relaxation", "sightseeing"]
  }
];
