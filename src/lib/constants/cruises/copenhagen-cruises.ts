import { Cruise } from "@/lib/interfaces/services/cruises";
import { Location } from "@/lib/types/types";

export const copenhagenCruises: Cruise[] = [
  {
    basePrice: 1118,
    departureLocation: {
  "city": "Copenhagen",
  "country": "Denmark",
  "region": "Sample Region",
  "coordinates": {
    "latitude": -20.182561562873346,
    "longitude": -116.83798734588956
  }
},
    arrivalLocation: {
  "city": "Helsinki",
  "country": "Destination Country",
  "coordinates": {
    "latitude": 75.75511349785185,
    "longitude": -9.043710603393805
  }
},
    isPopular: false,
    hasPopularDestination: true,
    category: "premium-luxury",
    itinerary: {
      route: [
  {
    "city": "Copenhagen",
    "country": "Denmark",
    "region": "Sample Region",
    "coordinates": {
      "latitude": -20.182561562873346,
      "longitude": -116.83798734588956
    }
  },
  {
    "city": "Tallinn",
    "country": "Destination Country",
    "coordinates": {
      "latitude": -76.7709132170273,
      "longitude": -62.059173326381654
    }
  },
  {
    "city": "St. Petersburg",
    "country": "Destination Country",
    "coordinates": {
      "latitude": 61.453352823070105,
      "longitude": 90.18266102567105
    }
  },
  {
    "city": "Oslo",
    "country": "Destination Country",
    "coordinates": {
      "latitude": -20.273229651910256,
      "longitude": 111.62806451317698
    }
  },
  {
    "city": "Helsinki",
    "country": "Destination Country",
    "coordinates": {
      "latitude": 75.75511349785185,
      "longitude": -9.043710603393805
    }
  }
],
      description: "Discover the wonders of Northern Europe on this spectacular voyage departing from Copenhagen.",
      distance: "1147 nautical miles",
      totalDuration: "11 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 3",
    "duration": "2 days",
    "description": "Sailing from Copenhagen to Tallinn"
  },
  {
    "start": "Day 6",
    "end": "Day 6",
    "duration": "1 days",
    "description": "Sailing from Tallinn to St. Petersburg"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Sailing from St. Petersburg to Oslo"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Sailing from Oslo to Helsinki"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Copenhagen"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Exploring Tallinn"
  },
  {
    "start": "Day 7",
    "end": "Day 7",
    "duration": "1 days",
    "description": "Exploring St. Petersburg"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Exploring Oslo"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Exploring Helsinki"
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
    title: "Discovery Northern Europe Cruise from Copenhagen",
    description: "Discover the wonders of Northern Europe on this spectacular voyage departing from Copenhagen.",
    rating: 4.7,
    tags: ["adventure", "relaxation", "sightseeing"]
  }
];
