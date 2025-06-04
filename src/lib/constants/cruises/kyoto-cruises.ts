import { Cruise } from "@/lib/interfaces/services/cruises";
import { Location } from "@/lib/types/types";

export const kyotoCruises: Cruise[] = [
  {
    basePrice: 6123,
    departureLocation: {
  "city": "Kyoto",
  "country": "Japan",
  "region": "Kanto",
  "coordinates": {
    "latitude": -58.862800708947,
    "longitude": -44.48749395510225
  }
},
    arrivalLocation: {
  "city": "Barcelona",
  "country": "Destination Country",
  "coordinates": {
    "latitude": -75.44476346105428,
    "longitude": 33.798385136475986
  }
},
    isPopular: true,
    hasPopularDestination: false,
    category: "luxury",
    itinerary: {
      route: [
  {
    "city": "Kyoto",
    "country": "Japan",
    "region": "Kanto",
    "coordinates": {
      "latitude": -58.862800708947,
      "longitude": -44.48749395510225
    }
  },
  {
    "city": "Malta",
    "country": "Destination Country",
    "coordinates": {
      "latitude": 65.36475418311599,
      "longitude": -48.68501734183445
    }
  },
  {
    "city": "Santorini",
    "country": "Destination Country",
    "coordinates": {
      "latitude": -59.87014259960224,
      "longitude": 139.2175313193477
    }
  },
  {
    "city": "Barcelona",
    "country": "Destination Country",
    "coordinates": {
      "latitude": -75.44476346105428,
      "longitude": 33.798385136475986
    }
  }
],
      description: "Set sail from vibrant Kyoto on a journey through the stunning landscapes and cultures of Kyoto.",
      distance: "1489 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Kyoto to Malta"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Malta to Santorini"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Sailing from Santorini to Barcelona"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Kyoto"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Exploring Malta"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Exploring Santorini"
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
    title: "Explorer Kyoto Cruise from Kyoto",
    description: "Set sail from vibrant Kyoto on a journey through the stunning landscapes and cultures of Kyoto.",
    rating: 4.6,
    tags: ["adventure", "relaxation", "sightseeing"]
  }
];
