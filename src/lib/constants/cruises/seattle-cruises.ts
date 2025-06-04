import { Cruise } from "@/lib/interfaces/services/cruises";
import { Location } from "@/lib/types/types";

export const seattleCruises: Cruise[] = [
  {
    basePrice: 4019,
    departureLocation: {
  "city": "Seattle",
  "country": "United States",
  "region": "West Coast",
  "coordinates": {
    "latitude": -20.586695929450187,
    "longitude": -72.951929810655
  }
},
    arrivalLocation: {
  "city": "Seattle",
  "country": "United States",
  "region": "West Coast",
  "coordinates": {
    "latitude": -20.586695929450187,
    "longitude": -72.951929810655
  }
},
    isPopular: false,
    hasPopularDestination: false,
    category: "premium-luxury",
    itinerary: {
      route: [
  {
    "city": "Seattle",
    "country": "United States",
    "region": "West Coast",
    "coordinates": {
      "latitude": -20.586695929450187,
      "longitude": -72.951929810655
    }
  },
  {
    "city": "Juneau",
    "country": "Destination Country",
    "coordinates": {
      "latitude": 34.42952939672362,
      "longitude": 0.1455044519141495
    }
  },
  {
    "city": "Glacier Bay",
    "country": "Destination Country",
    "coordinates": {
      "latitude": 56.93496740607631,
      "longitude": -138.96270489725248
    }
  },
  {
    "city": "Seattle",
    "country": "United States",
    "region": "West Coast",
    "coordinates": {
      "latitude": -20.586695929450187,
      "longitude": -72.951929810655
    }
  }
],
      description: "Embark on an unforgettable journey from Seattle, exploring the gems of Alaska.",
      distance: "721 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Seattle to Juneau"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Juneau to Glacier Bay"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Sailing from Glacier Bay to Seattle"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Seattle"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Exploring Juneau"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Exploring Glacier Bay"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Exploring Seattle"
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
    title: "Enchanting Alaska Cruise from Seattle",
    description: "Embark on an unforgettable journey from Seattle, exploring the gems of Alaska.",
    rating: 4.6,
    tags: ["adventure", "relaxation", "sightseeing"]
  }
];
