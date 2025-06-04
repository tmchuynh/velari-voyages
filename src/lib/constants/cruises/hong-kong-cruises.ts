import { Cruise } from "@/lib/interfaces/services/cruises";
import { Location } from "@/lib/types/types";

export const hongKongCruises: Cruise[] = [
  {
    basePrice: 2787,
    departureLocation: {
  "city": "Hong Kong",
  "country": "China",
  "region": "Sample Region",
  "coordinates": {
    "latitude": 31.578586924393846,
    "longitude": -9.613586150285016
  }
},
    arrivalLocation: {
  "city": "Hong Kong",
  "country": "China",
  "region": "Sample Region",
  "coordinates": {
    "latitude": 31.578586924393846,
    "longitude": -9.613586150285016
  }
},
    isPopular: true,
    hasPopularDestination: true,
    category: "premium",
    itinerary: {
      route: [
  {
    "city": "Hong Kong",
    "country": "China",
    "region": "Sample Region",
    "coordinates": {
      "latitude": 31.578586924393846,
      "longitude": -9.613586150285016
    }
  },
  {
    "city": "Sydney",
    "country": "Destination Country",
    "coordinates": {
      "latitude": 73.76458505507114,
      "longitude": 54.432629137992905
    }
  },
  {
    "city": "Singapore",
    "country": "Destination Country",
    "coordinates": {
      "latitude": -32.90402469687742,
      "longitude": -137.46377142577518
    }
  },
  {
    "city": "Bali",
    "country": "Destination Country",
    "coordinates": {
      "latitude": 83.6810285751065,
      "longitude": -2.082354640905095
    }
  },
  {
    "city": "Ho Chi Minh City",
    "country": "Destination Country",
    "coordinates": {
      "latitude": -74.41971478036285,
      "longitude": 145.34030571027967
    }
  },
  {
    "city": "Hong Kong",
    "country": "China",
    "region": "Sample Region",
    "coordinates": {
      "latitude": 31.578586924393846,
      "longitude": -9.613586150285016
    }
  }
],
      description: "Embark on an unforgettable journey from Hong Kong, exploring the gems of Asia Pacific.",
      distance: "1161 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Hong Kong to Sydney"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Sydney to Singapore"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Sailing from Singapore to Bali"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Sailing from Bali to Ho Chi Minh City"
  },
  {
    "start": "Day 13",
    "end": "Day 14",
    "duration": "2 days",
    "description": "Sailing from Ho Chi Minh City to Hong Kong"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Hong Kong"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Exploring Sydney"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Exploring Singapore"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Exploring Bali"
  },
  {
    "start": "Day 12",
    "end": "Day 12",
    "duration": "1 days",
    "description": "Exploring Ho Chi Minh City"
  },
  {
    "start": "Day 15",
    "end": "Day 15",
    "duration": "1 days",
    "description": "Exploring Hong Kong"
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
    title: "Ultimate Asia Pacific Cruise from Hong Kong",
    description: "Embark on an unforgettable journey from Hong Kong, exploring the gems of Asia Pacific.",
    rating: 4.3,
    tags: ["adventure", "relaxation", "sightseeing"]
  }
];
