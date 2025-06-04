import { Cruise } from "@/lib/interfaces/services/cruises";
import { Location } from "@/lib/types/types";

export const yokohamaCruises: Cruise[] = [
  {
    basePrice: 1401,
    departureLocation: {
  "city": "Yokohama",
  "country": "Japan",
  "region": "Kyushu",
  "coordinates": {
    "latitude": 47.840320157230536,
    "longitude": 164.3742627461516
  }
},
    arrivalLocation: {
  "city": "Mykonos",
  "country": "Destination Country",
  "coordinates": {
    "latitude": 9.047258715082663,
    "longitude": -171.62430373694013
  }
},
    isPopular: false,
    hasPopularDestination: false,
    category: "entry-luxury",
    itinerary: {
      route: [
  {
    "city": "Yokohama",
    "country": "Japan",
    "region": "Kyushu",
    "coordinates": {
      "latitude": 47.840320157230536,
      "longitude": 164.3742627461516
    }
  },
  {
    "city": "Barcelona",
    "country": "Destination Country",
    "coordinates": {
      "latitude": -23.355505000373974,
      "longitude": -108.18402073595362
    }
  },
  {
    "city": "Dubrovnik",
    "country": "Destination Country",
    "coordinates": {
      "latitude": -54.84769055261082,
      "longitude": -127.38835297295951
    }
  },
  {
    "city": "Malta",
    "country": "Destination Country",
    "coordinates": {
      "latitude": -17.716302559189486,
      "longitude": -58.78607857344022
    }
  },
  {
    "city": "Mykonos",
    "country": "Destination Country",
    "coordinates": {
      "latitude": 9.047258715082663,
      "longitude": -171.62430373694013
    }
  }
],
      description: "Discover the wonders of Yokohama on this spectacular voyage departing from Yokohama.",
      distance: "729 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Yokohama to Barcelona"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Barcelona to Dubrovnik"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Sailing from Dubrovnik to Malta"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Sailing from Malta to Mykonos"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Yokohama"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Exploring Barcelona"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Exploring Dubrovnik"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Exploring Malta"
  },
  {
    "start": "Day 12",
    "end": "Day 13",
    "duration": "2 days",
    "description": "Exploring Mykonos"
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
    title: "Discovery Yokohama Cruise from Yokohama",
    description: "Discover the wonders of Yokohama on this spectacular voyage departing from Yokohama.",
    rating: 4.1,
    tags: ["adventure", "relaxation", "sightseeing"]
  }
];
