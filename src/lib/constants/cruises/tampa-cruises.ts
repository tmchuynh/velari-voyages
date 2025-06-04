import { Cruise } from "@/lib/interfaces/services/cruises";
import { Location } from "@/lib/types/types";

export const tampaCruises: Cruise[] = [
  {
    basePrice: 7544,
    departureLocation: {
  "city": "Tampa",
  "country": "United States",
  "region": "Northeast",
  "coordinates": {
    "latitude": 81.62749102323943,
    "longitude": -23.55487960200088
  }
},
    arrivalLocation: {
  "city": "Nassau",
  "country": "Destination Country",
  "coordinates": {
    "latitude": -60.155571667311946,
    "longitude": 153.79208823861956
  }
},
    isPopular: false,
    hasPopularDestination: true,
    category: "premium-luxury",
    itinerary: {
      route: [
  {
    "city": "Tampa",
    "country": "United States",
    "region": "Northeast",
    "coordinates": {
      "latitude": 81.62749102323943,
      "longitude": -23.55487960200088
    }
  },
  {
    "city": "Cozumel",
    "country": "Destination Country",
    "coordinates": {
      "latitude": 23.91330636698021,
      "longitude": 63.276031721859056
    }
  },
  {
    "city": "Nassau",
    "country": "Destination Country",
    "coordinates": {
      "latitude": -60.155571667311946,
      "longitude": 153.79208823861956
    }
  }
],
      description: "Set sail from vibrant Tampa on a journey through the stunning landscapes and cultures of Caribbean.",
      distance: "698 nautical miles",
      totalDuration: "5 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Tampa to Cozumel"
  },
  {
    "start": "Day 4",
    "end": "Day 4",
    "duration": "1 days",
    "description": "Sailing from Cozumel to Nassau"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Tampa"
  },
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Exploring Cozumel"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Exploring Nassau"
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
    title: "Majestic Caribbean Cruise from Tampa",
    description: "Set sail from vibrant Tampa on a journey through the stunning landscapes and cultures of Caribbean.",
    rating: 4.6,
    tags: ["adventure", "relaxation", "sightseeing"]
  }
];
