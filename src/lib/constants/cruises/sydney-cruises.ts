import { Cruise } from "@/lib/interfaces/services/cruises";
import { Location } from "@/lib/types/types";

export const sydneyCruises: Cruise[] = [
  {
    basePrice: 4670,
    departureLocation: {
  "city": "Sydney",
  "country": "Australia",
  "region": "New South Wales",
  "coordinates": {
    "latitude": 73.1395714537274,
    "longitude": -137.11129602552347
  }
},
    arrivalLocation: {
  "city": "Sydney",
  "country": "Australia",
  "region": "New South Wales",
  "coordinates": {
    "latitude": 73.1395714537274,
    "longitude": -137.11129602552347
  }
},
    isPopular: true,
    hasPopularDestination: true,
    category: "premium",
    itinerary: {
      route: [
  {
    "city": "Sydney",
    "country": "Australia",
    "region": "New South Wales",
    "coordinates": {
      "latitude": 73.1395714537274,
      "longitude": -137.11129602552347
    }
  },
  {
    "city": "Shanghai",
    "country": "Destination Country",
    "coordinates": {
      "latitude": 16.526203102686964,
      "longitude": -79.24705604111573
    }
  },
  {
    "city": "Bali",
    "country": "Destination Country",
    "coordinates": {
      "latitude": 51.98123231997391,
      "longitude": -164.49161719378327
    }
  },
  {
    "city": "Sydney",
    "country": "Australia",
    "region": "New South Wales",
    "coordinates": {
      "latitude": 73.1395714537274,
      "longitude": -137.11129602552347
    }
  }
],
      description: "Discover the wonders of Asia Pacific on this spectacular voyage departing from Sydney.",
      distance: "764 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Sydney to Shanghai"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from Shanghai to Bali"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Sailing from Bali to Sydney"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Sydney"
  },
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Exploring Shanghai"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Exploring Bali"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Exploring Sydney"
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
    title: "Enchanting Asia Pacific Cruise from Sydney",
    description: "Discover the wonders of Asia Pacific on this spectacular voyage departing from Sydney.",
    rating: 4.7,
    tags: ["adventure", "relaxation", "sightseeing"]
  }
];
