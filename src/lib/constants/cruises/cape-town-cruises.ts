import { Cruise } from "@/lib/interfaces/services/cruises";
import { Location } from "@/lib/types/types";

export const capeTownCruises: Cruise[] = [
  {
    basePrice: 2682,
    departureLocation: {
  "city": "Cape Town",
  "country": "South Africa",
  "region": "Sample Region",
  "coordinates": {
    "latitude": -73.43103365838489,
    "longitude": 167.00625200996035
  }
},
    arrivalLocation: {
  "city": "Athens",
  "country": "Destination Country",
  "coordinates": {
    "latitude": -16.99222536906413,
    "longitude": 34.246532650795444
  }
},
    isPopular: true,
    hasPopularDestination: true,
    category: "luxury",
    itinerary: {
      route: [
  {
    "city": "Cape Town",
    "country": "South Africa",
    "region": "Sample Region",
    "coordinates": {
      "latitude": -73.43103365838489,
      "longitude": 167.00625200996035
    }
  },
  {
    "city": "Santorini",
    "country": "Destination Country",
    "coordinates": {
      "latitude": -40.72139864176576,
      "longitude": 161.109664420471
    }
  },
  {
    "city": "Athens",
    "country": "Destination Country",
    "coordinates": {
      "latitude": -16.99222536906413,
      "longitude": 34.246532650795444
    }
  }
],
      description: "Experience luxury and adventure as you sail from Cape Town to beautiful destinations in Cape Town.",
      distance: "1455 nautical miles",
      totalDuration: "9 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Cape Town to Santorini"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Santorini to Athens"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Cape Town"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Exploring Santorini"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Exploring Athens"
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
    title: "Luxury Cape Town Cruise from Cape Town",
    description: "Experience luxury and adventure as you sail from Cape Town to beautiful destinations in Cape Town.",
    rating: 4.1,
    tags: ["adventure", "relaxation", "sightseeing"]
  }
];
