import { Cruise } from "@/lib/interfaces/services/cruises";
import { Location } from "@/lib/types/types";

export const rioDeJaneiroCruises: Cruise[] = [
  {
    basePrice: 9716,
    departureLocation: {
  "city": "Rio De Janeiro",
  "country": "Brazil",
  "region": "Sample Region",
  "coordinates": {
    "latitude": 14.34091540617699,
    "longitude": -39.77690548157915
  }
},
    arrivalLocation: {
  "city": "Buenos Aires",
  "country": "Destination Country",
  "coordinates": {
    "latitude": -76.300998697232,
    "longitude": 155.63339398621787
  }
},
    isPopular: false,
    hasPopularDestination: true,
    category: "ultra-luxury",
    itinerary: {
      route: [
  {
    "city": "Rio De Janeiro",
    "country": "Brazil",
    "region": "Sample Region",
    "coordinates": {
      "latitude": 14.34091540617699,
      "longitude": -39.77690548157915
    }
  },
  {
    "city": "Montevideo",
    "country": "Destination Country",
    "coordinates": {
      "latitude": -72.90674072874319,
      "longitude": -159.09891854534027
    }
  },
  {
    "city": "Buenos Aires",
    "country": "Destination Country",
    "coordinates": {
      "latitude": -76.300998697232,
      "longitude": 155.63339398621787
    }
  }
],
      description: "Embark on an unforgettable journey from Rio De Janeiro, exploring the gems of South America.",
      distance: "1232 nautical miles",
      totalDuration: "7 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Rio De Janeiro to Montevideo"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Montevideo to Buenos Aires"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Rio De Janeiro"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Exploring Montevideo"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Exploring Buenos Aires"
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
    title: "Enchanting South America Cruise from Rio De Janeiro",
    description: "Embark on an unforgettable journey from Rio De Janeiro, exploring the gems of South America.",
    rating: 4.0,
    tags: ["adventure", "relaxation", "sightseeing"]
  }
];
