import { Cruise } from "@/lib/interfaces/services/cruises";
import { Location } from "@/lib/types/types";

export const londonCruises: Cruise[] = [
  {
    basePrice: 9874,
    departureLocation: {
  "city": "London",
  "country": "United Kingdom",
  "region": "Wales",
  "coordinates": {
    "latitude": 67.97611208665188,
    "longitude": 128.44790745260588
  }
},
    arrivalLocation: {
  "city": "Barcelona",
  "country": "Destination Country",
  "coordinates": {
    "latitude": 61.63208731524904,
    "longitude": 71.38288528399406
  }
},
    isPopular: false,
    hasPopularDestination: true,
    category: "premium",
    itinerary: {
      route: [
  {
    "city": "London",
    "country": "United Kingdom",
    "region": "Wales",
    "coordinates": {
      "latitude": 67.97611208665188,
      "longitude": 128.44790745260588
    }
  },
  {
    "city": "Dubrovnik",
    "country": "Destination Country",
    "coordinates": {
      "latitude": -38.043143490808696,
      "longitude": 69.22001159944517
    }
  },
  {
    "city": "Santorini",
    "country": "Destination Country",
    "coordinates": {
      "latitude": -17.927608808816842,
      "longitude": 54.67202204521138
    }
  },
  {
    "city": "Barcelona",
    "country": "Destination Country",
    "coordinates": {
      "latitude": 61.63208731524904,
      "longitude": 71.38288528399406
    }
  }
],
      description: "Embark on an unforgettable journey from London, exploring the gems of London.",
      distance: "818 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from London to Dubrovnik"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Sailing from Dubrovnik to Santorini"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Sailing from Santorini to Barcelona"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring London"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Exploring Dubrovnik"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Exploring Santorini"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
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
    title: "Dream London Cruise from London",
    description: "Embark on an unforgettable journey from London, exploring the gems of London.",
    rating: 4.6,
    tags: ["adventure", "relaxation", "sightseeing"]
  }
];
