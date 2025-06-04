import { Cruise } from "@/lib/interfaces/services/cruises";
import { Location } from "@/lib/types/types";

export const berlinCruises: Cruise[] = [
  {
    basePrice: 9060,
    departureLocation: {
  "city": "Berlin",
  "country": "Germany",
  "region": "Schleswig-Holstein",
  "coordinates": {
    "latitude": -20.72931070020961,
    "longitude": -39.72207091253884
  }
},
    arrivalLocation: {
  "city": "Malta",
  "country": "Destination Country",
  "coordinates": {
    "latitude": 58.55599798405066,
    "longitude": 171.16524207395264
  }
},
    isPopular: true,
    hasPopularDestination: true,
    category: "premium",
    itinerary: {
      route: [
  {
    "city": "Berlin",
    "country": "Germany",
    "region": "Schleswig-Holstein",
    "coordinates": {
      "latitude": -20.72931070020961,
      "longitude": -39.72207091253884
    }
  },
  {
    "city": "Barcelona",
    "country": "Destination Country",
    "coordinates": {
      "latitude": 60.19594127556334,
      "longitude": -153.4714220190265
    }
  },
  {
    "city": "Mykonos",
    "country": "Destination Country",
    "coordinates": {
      "latitude": -41.40279036131728,
      "longitude": -79.29785377988374
    }
  },
  {
    "city": "Santorini",
    "country": "Destination Country",
    "coordinates": {
      "latitude": 0.9353279902486236,
      "longitude": -143.87210917840895
    }
  },
  {
    "city": "Malta",
    "country": "Destination Country",
    "coordinates": {
      "latitude": 58.55599798405066,
      "longitude": 171.16524207395264
    }
  }
],
      description: "Discover the wonders of Berlin on this spectacular voyage departing from Berlin.",
      distance: "1002 nautical miles",
      totalDuration: "14 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Berlin to Barcelona"
  },
  {
    "start": "Day 5",
    "end": "Day 6",
    "duration": "2 days",
    "description": "Sailing from Barcelona to Mykonos"
  },
  {
    "start": "Day 9",
    "end": "Day 10",
    "duration": "2 days",
    "description": "Sailing from Mykonos to Santorini"
  },
  {
    "start": "Day 12",
    "end": "Day 12",
    "duration": "1 days",
    "description": "Sailing from Santorini to Malta"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Berlin"
  },
  {
    "start": "Day 3",
    "end": "Day 4",
    "duration": "2 days",
    "description": "Exploring Barcelona"
  },
  {
    "start": "Day 7",
    "end": "Day 8",
    "duration": "2 days",
    "description": "Exploring Mykonos"
  },
  {
    "start": "Day 11",
    "end": "Day 11",
    "duration": "1 days",
    "description": "Exploring Santorini"
  },
  {
    "start": "Day 13",
    "end": "Day 14",
    "duration": "2 days",
    "description": "Exploring Malta"
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
    title: "Dream Berlin Cruise from Berlin",
    description: "Discover the wonders of Berlin on this spectacular voyage departing from Berlin.",
    rating: 4.2,
    tags: ["adventure", "relaxation", "sightseeing"]
  }
];
