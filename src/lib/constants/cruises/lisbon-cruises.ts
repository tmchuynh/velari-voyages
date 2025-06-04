import { Cruise } from "@/lib/interfaces/services/cruises";
import { Location } from "@/lib/types/types";

export const lisbonCruises: Cruise[] = [
  {
    basePrice: 5170,
    departureLocation: {
  "city": "Lisbon",
  "country": "Portugal",
  "region": "Sample Region",
  "coordinates": {
    "latitude": -61.3128787330611,
    "longitude": -171.1180778373848
  }
},
    arrivalLocation: {
  "city": "Lisbon",
  "country": "Portugal",
  "region": "Sample Region",
  "coordinates": {
    "latitude": -61.3128787330611,
    "longitude": -171.1180778373848
  }
},
    isPopular: false,
    hasPopularDestination: false,
    category: "premium-luxury",
    itinerary: {
      route: [
  {
    "city": "Lisbon",
    "country": "Portugal",
    "region": "Sample Region",
    "coordinates": {
      "latitude": -61.3128787330611,
      "longitude": -171.1180778373848
    }
  },
  {
    "city": "Mykonos",
    "country": "Destination Country",
    "coordinates": {
      "latitude": -23.345005459447293,
      "longitude": 137.23287381394334
    }
  },
  {
    "city": "Malta",
    "country": "Destination Country",
    "coordinates": {
      "latitude": 28.42095680365206,
      "longitude": 154.1008322924688
    }
  },
  {
    "city": "Rome",
    "country": "Destination Country",
    "coordinates": {
      "latitude": 76.67438741365979,
      "longitude": -25.90252371111893
    }
  },
  {
    "city": "Athens",
    "country": "Destination Country",
    "coordinates": {
      "latitude": -67.26073767250665,
      "longitude": -106.13302527356134
    }
  },
  {
    "city": "Lisbon",
    "country": "Portugal",
    "region": "Sample Region",
    "coordinates": {
      "latitude": -61.3128787330611,
      "longitude": -171.1180778373848
    }
  }
],
      description: "Set sail from vibrant Lisbon on a journey through the stunning landscapes and cultures of Lisbon.",
      distance: "612 nautical miles",
      totalDuration: "19 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Lisbon to Mykonos"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Sailing from Mykonos to Malta"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Sailing from Malta to Rome"
  },
  {
    "start": "Day 14",
    "end": "Day 14",
    "duration": "1 days",
    "description": "Sailing from Rome to Athens"
  },
  {
    "start": "Day 17",
    "end": "Day 17",
    "duration": "1 days",
    "description": "Sailing from Athens to Lisbon"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Lisbon"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Exploring Mykonos"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Exploring Malta"
  },
  {
    "start": "Day 12",
    "end": "Day 13",
    "duration": "2 days",
    "description": "Exploring Rome"
  },
  {
    "start": "Day 15",
    "end": "Day 16",
    "duration": "2 days",
    "description": "Exploring Athens"
  },
  {
    "start": "Day 18",
    "end": "Day 19",
    "duration": "2 days",
    "description": "Exploring Lisbon"
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
    title: "Discovery Lisbon Cruise from Lisbon",
    description: "Set sail from vibrant Lisbon on a journey through the stunning landscapes and cultures of Lisbon.",
    rating: 4.2,
    tags: ["adventure", "relaxation", "sightseeing"]
  }
];
