import { Cruise } from "@/lib/interfaces/services/cruises";
import { Location } from "@/lib/types/types";

export const newOrleansCruises: Cruise[] = [
  {
    basePrice: 3264,
    departureLocation: {
  "city": "New Orleans",
  "country": "United States",
  "region": "East Coast",
  "coordinates": {
    "latitude": 5.295881650565178,
    "longitude": -23.77688702514905
  }
},
    arrivalLocation: {
  "city": "New Orleans",
  "country": "United States",
  "region": "East Coast",
  "coordinates": {
    "latitude": 5.295881650565178,
    "longitude": -23.77688702514905
  }
},
    isPopular: true,
    hasPopularDestination: false,
    category: "entry-luxury",
    itinerary: {
      route: [
  {
    "city": "New Orleans",
    "country": "United States",
    "region": "East Coast",
    "coordinates": {
      "latitude": 5.295881650565178,
      "longitude": -23.77688702514905
    }
  },
  {
    "city": "Nassau",
    "country": "Destination Country",
    "coordinates": {
      "latitude": 59.9853078946912,
      "longitude": -89.85357463070142
    }
  },
  {
    "city": "Philipsburg",
    "country": "Destination Country",
    "coordinates": {
      "latitude": 56.54776128931914,
      "longitude": 22.87864299996167
    }
  },
  {
    "city": "Cozumel",
    "country": "Destination Country",
    "coordinates": {
      "latitude": -20.08863753354882,
      "longitude": 132.4636682510478
    }
  },
  {
    "city": "New Orleans",
    "country": "United States",
    "region": "East Coast",
    "coordinates": {
      "latitude": 5.295881650565178,
      "longitude": -23.77688702514905
    }
  }
],
      description: "Experience luxury and adventure as you sail from New Orleans to beautiful destinations in Caribbean.",
      distance: "1281 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from New Orleans to Nassau"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from Nassau to Philipsburg"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Sailing from Philipsburg to Cozumel"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Sailing from Cozumel to New Orleans"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring New Orleans"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Exploring Nassau"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Exploring Philipsburg"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Exploring Cozumel"
  },
  {
    "start": "Day 12",
    "end": "Day 12",
    "duration": "1 days",
    "description": "Exploring New Orleans"
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
    title: "Ultimate Caribbean Cruise from New Orleans",
    description: "Experience luxury and adventure as you sail from New Orleans to beautiful destinations in Caribbean.",
    rating: 4.6,
    tags: ["adventure", "relaxation", "sightseeing"]
  }
];
