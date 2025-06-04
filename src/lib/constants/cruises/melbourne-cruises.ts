import { Cruise } from "@/lib/interfaces/services/cruises";
import { Location } from "@/lib/types/types";

export const melbourneCruises: Cruise[] = [
  {
    basePrice: 5718,
    departureLocation: {
  "city": "Melbourne",
  "country": "Australia",
  "region": "New South Wales",
  "coordinates": {
    "latitude": -69.57553422729556,
    "longitude": -67.0851620951975
  }
},
    arrivalLocation: {
  "city": "Barcelona",
  "country": "Destination Country",
  "coordinates": {
    "latitude": 22.850288107045515,
    "longitude": 34.91750471675084
  }
},
    isPopular: true,
    hasPopularDestination: false,
    category: "luxury",
    itinerary: {
      route: [
  {
    "city": "Melbourne",
    "country": "Australia",
    "region": "New South Wales",
    "coordinates": {
      "latitude": -69.57553422729556,
      "longitude": -67.0851620951975
    }
  },
  {
    "city": "Athens",
    "country": "Destination Country",
    "coordinates": {
      "latitude": 16.695754247245034,
      "longitude": -83.82025261599377
    }
  },
  {
    "city": "Rome",
    "country": "Destination Country",
    "coordinates": {
      "latitude": 19.929054339365962,
      "longitude": 155.15520017237344
    }
  },
  {
    "city": "Barcelona",
    "country": "Destination Country",
    "coordinates": {
      "latitude": 22.850288107045515,
      "longitude": 34.91750471675084
    }
  }
],
      description: "Experience luxury and adventure as you sail from Melbourne to beautiful destinations in Melbourne.",
      distance: "1373 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Melbourne to Athens"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Athens to Rome"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Sailing from Rome to Barcelona"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Melbourne"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Exploring Athens"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Exploring Rome"
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
    title: "Majestic Melbourne Cruise from Melbourne",
    description: "Experience luxury and adventure as you sail from Melbourne to beautiful destinations in Melbourne.",
    rating: 4.3,
    tags: ["adventure", "relaxation", "sightseeing"]
  }
];
