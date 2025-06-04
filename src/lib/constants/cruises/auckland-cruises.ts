import { Cruise } from "@/lib/interfaces/services/cruises";
import { Location } from "@/lib/types/types";

export const aucklandCruises: Cruise[] = [
  {
    basePrice: 3307,
    departureLocation: {
  "city": "Auckland",
  "country": "New Zealand",
  "region": "Sample Region",
  "coordinates": {
    "latitude": 14.592683293186937,
    "longitude": -117.31165421376222
  }
},
    arrivalLocation: {
  "city": "Dubrovnik",
  "country": "Destination Country",
  "coordinates": {
    "latitude": 6.098206781162375,
    "longitude": 120.08110141619972
  }
},
    isPopular: false,
    hasPopularDestination: false,
    category: "expedition",
    itinerary: {
      route: [
  {
    "city": "Auckland",
    "country": "New Zealand",
    "region": "Sample Region",
    "coordinates": {
      "latitude": 14.592683293186937,
      "longitude": -117.31165421376222
    }
  },
  {
    "city": "Barcelona",
    "country": "Destination Country",
    "coordinates": {
      "latitude": 67.30428591237452,
      "longitude": -132.79887595515055
    }
  },
  {
    "city": "Mykonos",
    "country": "Destination Country",
    "coordinates": {
      "latitude": -42.327022789740134,
      "longitude": -138.08696573619852
    }
  },
  {
    "city": "Rome",
    "country": "Destination Country",
    "coordinates": {
      "latitude": -61.187326443364164,
      "longitude": -119.18092849692403
    }
  },
  {
    "city": "Dubrovnik",
    "country": "Destination Country",
    "coordinates": {
      "latitude": 6.098206781162375,
      "longitude": 120.08110141619972
    }
  }
],
      description: "Embark on an unforgettable journey from Auckland, exploring the gems of Auckland.",
      distance: "720 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Auckland to Barcelona"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Sailing from Barcelona to Mykonos"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Sailing from Mykonos to Rome"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Sailing from Rome to Dubrovnik"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Auckland"
  },
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Exploring Barcelona"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Exploring Mykonos"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Exploring Rome"
  },
  {
    "start": "Day 12",
    "end": "Day 12",
    "duration": "1 days",
    "description": "Exploring Dubrovnik"
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
    title: "Dream Auckland Cruise from Auckland",
    description: "Embark on an unforgettable journey from Auckland, exploring the gems of Auckland.",
    rating: 4.8,
    tags: ["adventure", "relaxation", "sightseeing"]
  }
];
