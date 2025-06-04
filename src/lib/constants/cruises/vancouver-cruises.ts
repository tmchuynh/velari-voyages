import { Cruise } from "@/lib/interfaces/services/cruises";
import { Location } from "@/lib/types/types";

export const vancouverCruises: Cruise[] = [
  {
    basePrice: 1810,
    departureLocation: {
  "city": "Vancouver",
  "country": "Canada",
  "region": "British Columbia",
  "coordinates": {
    "latitude": 68.88552031667538,
    "longitude": 125.27728066907662
  }
},
    arrivalLocation: {
  "city": "Vancouver",
  "country": "Canada",
  "region": "British Columbia",
  "coordinates": {
    "latitude": 68.88552031667538,
    "longitude": 125.27728066907662
  }
},
    isPopular: false,
    hasPopularDestination: true,
    category: "premium",
    itinerary: {
      route: [
  {
    "city": "Vancouver",
    "country": "Canada",
    "region": "British Columbia",
    "coordinates": {
      "latitude": 68.88552031667538,
      "longitude": 125.27728066907662
    }
  },
  {
    "city": "Juneau",
    "country": "Destination Country",
    "coordinates": {
      "latitude": -4.286002248753604,
      "longitude": -103.52427335710914
    }
  },
  {
    "city": "Ketchikan",
    "country": "Destination Country",
    "coordinates": {
      "latitude": -38.02604839779883,
      "longitude": 174.63170030284545
    }
  },
  {
    "city": "Vancouver",
    "country": "Canada",
    "region": "British Columbia",
    "coordinates": {
      "latitude": 68.88552031667538,
      "longitude": 125.27728066907662
    }
  }
],
      description: "Set sail from vibrant Vancouver on a journey through the stunning landscapes and cultures of Alaska.",
      distance: "930 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Vancouver to Juneau"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Sailing from Juneau to Ketchikan"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Sailing from Ketchikan to Vancouver"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Vancouver"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Exploring Juneau"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Exploring Ketchikan"
  },
  {
    "start": "Day 13",
    "end": "Day 14",
    "duration": "2 days",
    "description": "Exploring Vancouver"
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
    title: "Majestic Alaska Cruise from Vancouver",
    description: "Set sail from vibrant Vancouver on a journey through the stunning landscapes and cultures of Alaska.",
    rating: 5.0,
    tags: ["adventure", "relaxation", "sightseeing"]
  }
];
