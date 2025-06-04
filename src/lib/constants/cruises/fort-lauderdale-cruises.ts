import { Cruise } from "@/lib/interfaces/services/cruises";
import { Location } from "@/lib/types/types";

export const fortLauderdaleCruises: Cruise[] = [
  {
    basePrice: 3291,
    departureLocation: {
  "city": "Fort Lauderdale",
  "country": "United States",
  "region": "Northeast",
  "coordinates": {
    "latitude": 9.674415683543558,
    "longitude": 124.03504580401187
  }
},
    arrivalLocation: {
  "city": "Fort Lauderdale",
  "country": "United States",
  "region": "Northeast",
  "coordinates": {
    "latitude": 9.674415683543558,
    "longitude": 124.03504580401187
  }
},
    isPopular: true,
    hasPopularDestination: false,
    category: "premium-luxury",
    itinerary: {
      route: [
  {
    "city": "Fort Lauderdale",
    "country": "United States",
    "region": "Northeast",
    "coordinates": {
      "latitude": 9.674415683543558,
      "longitude": 124.03504580401187
    }
  },
  {
    "city": "St. Thomas",
    "country": "Destination Country",
    "coordinates": {
      "latitude": -55.19597039321178,
      "longitude": 101.50535652169151
    }
  },
  {
    "city": "Cozumel",
    "country": "Destination Country",
    "coordinates": {
      "latitude": -39.94765866259793,
      "longitude": -99.37620028711437
    }
  },
  {
    "city": "San Juan",
    "country": "Destination Country",
    "coordinates": {
      "latitude": 0.27141650006296913,
      "longitude": 149.40090140359155
    }
  },
  {
    "city": "Fort Lauderdale",
    "country": "United States",
    "region": "Northeast",
    "coordinates": {
      "latitude": 9.674415683543558,
      "longitude": 124.03504580401187
    }
  }
],
      description: "Experience luxury and adventure as you sail from Fort Lauderdale to beautiful destinations in Caribbean.",
      distance: "813 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Sailing from Fort Lauderdale to St. Thomas"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from St. Thomas to Cozumel"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Sailing from Cozumel to San Juan"
  },
  {
    "start": "Day 13",
    "end": "Day 14",
    "duration": "2 days",
    "description": "Sailing from San Juan to Fort Lauderdale"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Fort Lauderdale"
  },
  {
    "start": "Day 5",
    "end": "Day 5",
    "duration": "1 days",
    "description": "Exploring St. Thomas"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Exploring Cozumel"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Exploring San Juan"
  },
  {
    "start": "Day 15",
    "end": "Day 15",
    "duration": "1 days",
    "description": "Exploring Fort Lauderdale"
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
    title: "Dream Caribbean Cruise from Fort Lauderdale",
    description: "Experience luxury and adventure as you sail from Fort Lauderdale to beautiful destinations in Caribbean.",
    rating: 4.6,
    tags: ["adventure", "relaxation", "sightseeing"]
  }
];
