import { Cruise } from "@/lib/interfaces/services/cruises";
import { Location } from "@/lib/types/types";

export const tokyoCruises: Cruise[] = [
  {
    basePrice: 1379,
    departureLocation: {
  "city": "Tokyo",
  "country": "Japan",
  "region": "Kansai",
  "coordinates": {
    "latitude": 84.96008466676034,
    "longitude": 142.7107985240052
  }
},
    arrivalLocation: {
  "city": "Tokyo",
  "country": "Japan",
  "region": "Kansai",
  "coordinates": {
    "latitude": 84.96008466676034,
    "longitude": 142.7107985240052
  }
},
    isPopular: true,
    hasPopularDestination: false,
    category: "luxury",
    itinerary: {
      route: [
  {
    "city": "Tokyo",
    "country": "Japan",
    "region": "Kansai",
    "coordinates": {
      "latitude": 84.96008466676034,
      "longitude": 142.7107985240052
    }
  },
  {
    "city": "Shanghai",
    "country": "Destination Country",
    "coordinates": {
      "latitude": 44.407940346840576,
      "longitude": -153.98840001386725
    }
  },
  {
    "city": "Bali",
    "country": "Destination Country",
    "coordinates": {
      "latitude": 33.7423998554756,
      "longitude": -149.19045348906653
    }
  },
  {
    "city": "Tokyo",
    "country": "Japan",
    "region": "Kansai",
    "coordinates": {
      "latitude": 84.96008466676034,
      "longitude": 142.7107985240052
    }
  }
],
      description: "Discover the wonders of Asia Pacific on this spectacular voyage departing from Tokyo.",
      distance: "1249 nautical miles",
      totalDuration: "12 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Tokyo to Shanghai"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Sailing from Shanghai to Bali"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Sailing from Bali to Tokyo"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Tokyo"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Exploring Shanghai"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Exploring Bali"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Exploring Tokyo"
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
    title: "Adventure Asia Pacific Cruise from Tokyo",
    description: "Discover the wonders of Asia Pacific on this spectacular voyage departing from Tokyo.",
    rating: 4.7,
    tags: ["adventure", "relaxation", "sightseeing"]
  }
];
