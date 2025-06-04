import { Cruise } from "@/lib/interfaces/services/cruises";
import { Location } from "@/lib/types/types";

export const singaporeCruises: Cruise[] = [
  {
    basePrice: 5533,
    departureLocation: {
  "city": "Singapore",
  "country": "Singapore",
  "region": "Sample Region",
  "coordinates": {
    "latitude": 18.79265462028762,
    "longitude": 64.43016117339602
  }
},
    arrivalLocation: {
  "city": "Shanghai",
  "country": "Destination Country",
  "coordinates": {
    "latitude": -69.62889932532948,
    "longitude": 85.66337992460109
  }
},
    isPopular: true,
    hasPopularDestination: false,
    category: "expedition",
    itinerary: {
      route: [
  {
    "city": "Singapore",
    "country": "Singapore",
    "region": "Sample Region",
    "coordinates": {
      "latitude": 18.79265462028762,
      "longitude": 64.43016117339602
    }
  },
  {
    "city": "Bali",
    "country": "Destination Country",
    "coordinates": {
      "latitude": 51.087437666216346,
      "longitude": 98.48228873606644
    }
  },
  {
    "city": "Sydney",
    "country": "Destination Country",
    "coordinates": {
      "latitude": -55.90259765883568,
      "longitude": 23.900048255850265
    }
  },
  {
    "city": "Ho Chi Minh City",
    "country": "Destination Country",
    "coordinates": {
      "latitude": 81.83028609231869,
      "longitude": 98.8965087071673
    }
  },
  {
    "city": "Shanghai",
    "country": "Destination Country",
    "coordinates": {
      "latitude": -69.62889932532948,
      "longitude": 85.66337992460109
    }
  }
],
      description: "Experience luxury and adventure as you sail from Singapore to beautiful destinations in Asia Pacific.",
      distance: "616 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Singapore to Bali"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Bali to Sydney"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Sailing from Sydney to Ho Chi Minh City"
  },
  {
    "start": "Day 12",
    "end": "Day 13",
    "duration": "2 days",
    "description": "Sailing from Ho Chi Minh City to Shanghai"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Singapore"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Exploring Bali"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Exploring Sydney"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Exploring Ho Chi Minh City"
  },
  {
    "start": "Day 14",
    "end": "Day 15",
    "duration": "2 days",
    "description": "Exploring Shanghai"
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
    title: "Ultimate Asia Pacific Cruise from Singapore",
    description: "Experience luxury and adventure as you sail from Singapore to beautiful destinations in Asia Pacific.",
    rating: 4.6,
    tags: ["adventure", "relaxation", "sightseeing"]
  }
];
