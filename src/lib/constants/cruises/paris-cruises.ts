import { Cruise } from "@/lib/interfaces/services/cruises";
import { Location } from "@/lib/types/types";

export const parisCruises: Cruise[] = [
  {
    basePrice: 1248,
    departureLocation: {
  "city": "Paris",
  "country": "France",
  "region": "Provence",
  "coordinates": {
    "latitude": -20.81861974932994,
    "longitude": 21.06027530410816
  }
},
    arrivalLocation: {
  "city": "Rome",
  "country": "Destination Country",
  "coordinates": {
    "latitude": 15.710218347421971,
    "longitude": -74.3334767179121
  }
},
    isPopular: false,
    hasPopularDestination: true,
    category: "ultra-luxury",
    itinerary: {
      route: [
  {
    "city": "Paris",
    "country": "France",
    "region": "Provence",
    "coordinates": {
      "latitude": -20.81861974932994,
      "longitude": 21.06027530410816
    }
  },
  {
    "city": "Barcelona",
    "country": "Destination Country",
    "coordinates": {
      "latitude": -76.32519949083559,
      "longitude": -51.373536036133515
    }
  },
  {
    "city": "Athens",
    "country": "Destination Country",
    "coordinates": {
      "latitude": 74.04261862216146,
      "longitude": 66.22919536350167
    }
  },
  {
    "city": "Rome",
    "country": "Destination Country",
    "coordinates": {
      "latitude": 15.710218347421971,
      "longitude": -74.3334767179121
    }
  }
],
      description: "Set sail from vibrant Paris on a journey through the stunning landscapes and cultures of Paris.",
      distance: "837 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Paris to Barcelona"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Barcelona to Athens"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Sailing from Athens to Rome"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Paris"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Exploring Barcelona"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Exploring Athens"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
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
    title: "Explorer Paris Cruise from Paris",
    description: "Set sail from vibrant Paris on a journey through the stunning landscapes and cultures of Paris.",
    rating: 4.1,
    tags: ["adventure", "relaxation", "sightseeing"]
  }
];
