import { Cruise } from "@/lib/interfaces/services/cruises";
import { Location } from "@/lib/types/types";

export const kielCruises: Cruise[] = [
  {
    basePrice: 9013,
    departureLocation: {
  "city": "Kiel",
  "country": "Germany",
  "region": "Bavaria",
  "coordinates": {
    "latitude": 74.90792120918877,
    "longitude": 67.5421727416479
  }
},
    arrivalLocation: {
  "city": "Kiel",
  "country": "Germany",
  "region": "Bavaria",
  "coordinates": {
    "latitude": 74.90792120918877,
    "longitude": 67.5421727416479
  }
},
    isPopular: true,
    hasPopularDestination: false,
    category: "expedition",
    itinerary: {
      route: [
  {
    "city": "Kiel",
    "country": "Germany",
    "region": "Bavaria",
    "coordinates": {
      "latitude": 74.90792120918877,
      "longitude": 67.5421727416479
    }
  },
  {
    "city": "Oslo",
    "country": "Destination Country",
    "coordinates": {
      "latitude": 13.632712481295698,
      "longitude": 157.25112508793615
    }
  },
  {
    "city": "St. Petersburg",
    "country": "Destination Country",
    "coordinates": {
      "latitude": -29.832246691520403,
      "longitude": 50.92948855242739
    }
  },
  {
    "city": "Kiel",
    "country": "Germany",
    "region": "Bavaria",
    "coordinates": {
      "latitude": 74.90792120918877,
      "longitude": 67.5421727416479
    }
  }
],
      description: "Set sail from vibrant Kiel on a journey through the stunning landscapes and cultures of Northern Europe.",
      distance: "1495 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Kiel to Oslo"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Sailing from Oslo to St. Petersburg"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Sailing from St. Petersburg to Kiel"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Kiel"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Exploring Oslo"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Exploring St. Petersburg"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Exploring Kiel"
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
    title: "Majestic Northern Europe Cruise from Kiel",
    description: "Set sail from vibrant Kiel on a journey through the stunning landscapes and cultures of Northern Europe.",
    rating: 4.6,
    tags: ["adventure", "relaxation", "sightseeing"]
  }
];
