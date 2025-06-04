import { Cruise } from "@/lib/interfaces/services/cruises";
import { Location } from "@/lib/types/types";

export const montrealCruises: Cruise[] = [
  {
    basePrice: 5360,
    departureLocation: {
  "city": "Montreal",
  "country": "Canada",
  "region": "British Columbia",
  "coordinates": {
    "latitude": 20.183395233828207,
    "longitude": -143.5821445055027
  }
},
    arrivalLocation: {
  "city": "Montreal",
  "country": "Canada",
  "region": "British Columbia",
  "coordinates": {
    "latitude": 20.183395233828207,
    "longitude": -143.5821445055027
  }
},
    isPopular: false,
    hasPopularDestination: false,
    category: "ultra-luxury",
    itinerary: {
      route: [
  {
    "city": "Montreal",
    "country": "Canada",
    "region": "British Columbia",
    "coordinates": {
      "latitude": 20.183395233828207,
      "longitude": -143.5821445055027
    }
  },
  {
    "city": "Athens",
    "country": "Destination Country",
    "coordinates": {
      "latitude": 10.854914884318319,
      "longitude": -119.42620888113012
    }
  },
  {
    "city": "Rome",
    "country": "Destination Country",
    "coordinates": {
      "latitude": -76.58253525222177,
      "longitude": -102.79022879696348
    }
  },
  {
    "city": "Barcelona",
    "country": "Destination Country",
    "coordinates": {
      "latitude": -24.63223646000155,
      "longitude": 157.64289134661112
    }
  },
  {
    "city": "Montreal",
    "country": "Canada",
    "region": "British Columbia",
    "coordinates": {
      "latitude": 20.183395233828207,
      "longitude": -143.5821445055027
    }
  }
],
      description: "Set sail from vibrant Montreal on a journey through the stunning landscapes and cultures of Montreal.",
      distance: "897 nautical miles",
      totalDuration: "15 days",
      timeAtSea: [
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Sailing from Montreal to Athens"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Sailing from Athens to Rome"
  },
  {
    "start": "Day 9",
    "end": "Day 9",
    "duration": "1 days",
    "description": "Sailing from Rome to Barcelona"
  },
  {
    "start": "Day 12",
    "end": "Day 13",
    "duration": "2 days",
    "description": "Sailing from Barcelona to Montreal"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 2",
    "duration": "2 days",
    "description": "Exploring Montreal"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Exploring Athens"
  },
  {
    "start": "Day 8",
    "end": "Day 8",
    "duration": "1 days",
    "description": "Exploring Rome"
  },
  {
    "start": "Day 10",
    "end": "Day 11",
    "duration": "2 days",
    "description": "Exploring Barcelona"
  },
  {
    "start": "Day 14",
    "end": "Day 15",
    "duration": "2 days",
    "description": "Exploring Montreal"
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
    title: "Dream Montreal Cruise from Montreal",
    description: "Set sail from vibrant Montreal on a journey through the stunning landscapes and cultures of Montreal.",
    rating: 4.7,
    tags: ["adventure", "relaxation", "sightseeing"]
  }
];
