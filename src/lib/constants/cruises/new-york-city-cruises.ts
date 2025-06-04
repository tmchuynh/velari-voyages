import { Cruise } from "@/lib/interfaces/services/cruises";
import { Location } from "@/lib/types/types";

export const newYorkCityCruises: Cruise[] = [
  {
    basePrice: 2323,
    departureLocation: {
  "city": "New York City",
  "country": "United States",
  "region": "Pacific Northwest",
  "coordinates": {
    "latitude": -83.50814585562544,
    "longitude": -18.040337448899493
  }
},
    arrivalLocation: {
  "city": "New York City",
  "country": "United States",
  "region": "Pacific Northwest",
  "coordinates": {
    "latitude": -83.50814585562544,
    "longitude": -18.040337448899493
  }
},
    isPopular: false,
    hasPopularDestination: false,
    category: "expedition",
    itinerary: {
      route: [
  {
    "city": "New York City",
    "country": "United States",
    "region": "Pacific Northwest",
    "coordinates": {
      "latitude": -83.50814585562544,
      "longitude": -18.040337448899493
    }
  },
  {
    "city": "Dubrovnik",
    "country": "Destination Country",
    "coordinates": {
      "latitude": -57.09988349792812,
      "longitude": 48.61651825791989
    }
  },
  {
    "city": "Malta",
    "country": "Destination Country",
    "coordinates": {
      "latitude": -52.78804990889332,
      "longitude": -98.49939802416847
    }
  },
  {
    "city": "New York City",
    "country": "United States",
    "region": "Pacific Northwest",
    "coordinates": {
      "latitude": -83.50814585562544,
      "longitude": -18.040337448899493
    }
  }
],
      description: "Experience luxury and adventure as you sail from New York City to beautiful destinations in New York City.",
      distance: "1210 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from New York City to Dubrovnik"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Dubrovnik to Malta"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Sailing from Malta to New York City"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring New York City"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Exploring Dubrovnik"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Exploring Malta"
  },
  {
    "start": "Day 12",
    "end": "Day 12",
    "duration": "1 days",
    "description": "Exploring New York City"
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
    title: "Majestic New York City Cruise from New York City",
    description: "Experience luxury and adventure as you sail from New York City to beautiful destinations in New York City.",
    rating: 4.8,
    tags: ["adventure", "relaxation", "sightseeing"]
  }
];
