import { Cruise } from "@/lib/interfaces/services/cruises";
import { Location } from "@/lib/types/types";

export const buenosAiresCruises: Cruise[] = [
  {
    basePrice: 7934,
    departureLocation: {
  "city": "Buenos Aires",
  "country": "Argentina",
  "region": "Sample Region",
  "coordinates": {
    "latitude": 18.832748038542036,
    "longitude": -24.052879259246794
  }
},
    arrivalLocation: {
  "city": "Lima",
  "country": "Destination Country",
  "coordinates": {
    "latitude": -14.32120821624143,
    "longitude": 127.2555952836858
  }
},
    isPopular: false,
    hasPopularDestination: false,
    category: "ultra-luxury",
    itinerary: {
      route: [
  {
    "city": "Buenos Aires",
    "country": "Argentina",
    "region": "Sample Region",
    "coordinates": {
      "latitude": 18.832748038542036,
      "longitude": -24.052879259246794
    }
  },
  {
    "city": "Santiago",
    "country": "Destination Country",
    "coordinates": {
      "latitude": 40.612105469394834,
      "longitude": 98.04761786164966
    }
  },
  {
    "city": "Cartagena",
    "country": "Destination Country",
    "coordinates": {
      "latitude": -59.27365034369264,
      "longitude": -80.03335586468813
    }
  },
  {
    "city": "Montevideo",
    "country": "Destination Country",
    "coordinates": {
      "latitude": -71.14897394337281,
      "longitude": 172.22213729080454
    }
  },
  {
    "city": "Lima",
    "country": "Destination Country",
    "coordinates": {
      "latitude": -14.32120821624143,
      "longitude": 127.2555952836858
    }
  }
],
      description: "Set sail from vibrant Buenos Aires on a journey through the stunning landscapes and cultures of South America.",
      distance: "930 nautical miles",
      totalDuration: "13 days",
      timeAtSea: [
  {
    "start": "Day 2",
    "end": "Day 2",
    "duration": "1 days",
    "description": "Sailing from Buenos Aires to Santiago"
  },
  {
    "start": "Day 4",
    "end": "Day 5",
    "duration": "2 days",
    "description": "Sailing from Santiago to Cartagena"
  },
  {
    "start": "Day 8",
    "end": "Day 9",
    "duration": "2 days",
    "description": "Sailing from Cartagena to Montevideo"
  },
  {
    "start": "Day 11",
    "end": "Day 12",
    "duration": "2 days",
    "description": "Sailing from Montevideo to Lima"
  }
],
      timeOnLand: [
  {
    "start": "Day 1",
    "end": "Day 1",
    "duration": "1 days",
    "description": "Exploring Buenos Aires"
  },
  {
    "start": "Day 3",
    "end": "Day 3",
    "duration": "1 days",
    "description": "Exploring Santiago"
  },
  {
    "start": "Day 6",
    "end": "Day 7",
    "duration": "2 days",
    "description": "Exploring Cartagena"
  },
  {
    "start": "Day 10",
    "end": "Day 10",
    "duration": "1 days",
    "description": "Exploring Montevideo"
  },
  {
    "start": "Day 13",
    "end": "Day 13",
    "duration": "1 days",
    "description": "Exploring Lima"
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
    title: "Dream South America Cruise from Buenos Aires",
    description: "Set sail from vibrant Buenos Aires on a journey through the stunning landscapes and cultures of South America.",
    rating: 4.4,
    tags: ["adventure", "relaxation", "sightseeing"]
  }
];
