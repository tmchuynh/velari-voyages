import { Cruise } from "@/lib/interfaces/services/cruises";
import { Location } from "@/lib/types/types";

export const miamiCruises: Cruise[] = [
  {
    basePrice: 8420,
    departureLocation: {
  "city": "Miami",
  "country": "United States",
  "region": "Pacific Northwest",
  "coordinates": {
    "latitude": 72.0864864900719,
    "longitude": 2.0773794316823455
  }
},
    arrivalLocation: {
  "city": "Roatán",
  "country": "Destination Country",
  "coordinates": {
    "latitude": 68.07503733952512,
    "longitude": -124.71296198395393
  }
},
    isPopular: false,
    hasPopularDestination: true,
    category: "mainstream",
    itinerary: {
      route: [
  {
    "city": "Miami",
    "country": "United States",
    "region": "Pacific Northwest",
    "coordinates": {
      "latitude": 72.0864864900719,
      "longitude": 2.0773794316823455
    }
  },
  {
    "city": "Cozumel",
    "country": "Destination Country",
    "coordinates": {
      "latitude": 0.5092068394596083,
      "longitude": -58.344211259262934
    }
  },
  {
    "city": "Philipsburg",
    "country": "Destination Country",
    "coordinates": {
      "latitude": 19.567111722705974,
      "longitude": 41.96774496155271
    }
  },
  {
    "city": "Roatán",
    "country": "Destination Country",
    "coordinates": {
      "latitude": 68.07503733952512,
      "longitude": -124.71296198395393
    }
  }
],
      description: "Experience luxury and adventure as you sail from Miami to beautiful destinations in Caribbean.",
      distance: "1117 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Miami to Cozumel"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Cozumel to Philipsburg"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Sailing from Philipsburg to Roatán"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Miami"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Exploring Cozumel"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Exploring Philipsburg"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Exploring Roatán"
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
    title: "Majestic Caribbean Cruise from Miami",
    description: "Experience luxury and adventure as you sail from Miami to beautiful destinations in Caribbean.",
    rating: 4.7,
    tags: ["adventure", "relaxation", "sightseeing"]
  }
];
