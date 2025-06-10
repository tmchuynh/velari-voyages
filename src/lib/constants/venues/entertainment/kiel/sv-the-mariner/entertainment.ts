// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "931e8ad0-77fd-46b3-a5c1-e9ee899844d4",
    vesselId: "sv-the--mariner",
    type: "Comedy",
    location: {
      deck: 6,
      area: "Upper Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "dc81d957-a04c-427d-a1b9-912950faed13",
    vesselId: "sv-the--mariner",
    type: "Movie Theater",
    location: {
      deck: 15,
      area: "Observation Deck",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "87ed86f4-cd5b-4c52-9586-c43fe3f5f0c0",
    vesselId: "sv-the--mariner",
    type: "Karaoke",
    location: {
      deck: 8,
      area: "Forward Lounge",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "fb5cf950-aa82-46c3-aa71-d0ce79bb7a5d",
    vesselId: "sv-the--mariner",
    type: "Magic Show",
    location: {
      deck: 13,
      area: "Grand Ballroom",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "5a230c80-d468-4503-9b23-9840a4b60557",
    vesselId: "sv-the--mariner",
    type: "Live Music",
    location: {
      deck: 6,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "bde68820-b8f3-41ff-b268-c53b0a9e9e9d",
    vesselId: "sv-the--mariner",
    type: "Game Show",
    location: {
      deck: 14,
      area: "Forward Lounge",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
