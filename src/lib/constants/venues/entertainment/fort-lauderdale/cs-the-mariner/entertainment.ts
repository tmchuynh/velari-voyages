// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "8b5b6016-c9f0-4b0c-9f55-65c49428024a",
    vesselId: "cs-the--mariner",
    type: "Dancing",
    location: {
      deck: 6,
      area: "Grand Ballroom",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "5a16639e-6fd7-4326-ae5f-d36f692e9764",
    vesselId: "cs-the--mariner",
    type: "Game Show",
    location: {
      deck: 15,
      area: "Atrium",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "67085013-122b-487a-aca5-304523b5107b",
    vesselId: "cs-the--mariner",
    type: "Magic Show",
    location: {
      deck: 5,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "0c2fb7a9-d6a8-41a9-ae51-213e0f6eb66d",
    vesselId: "cs-the--mariner",
    type: "Karaoke",
    location: {
      deck: 11,
      area: "Forward Lounge",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "c1de3053-6acd-4d7b-ae82-b342e15af8d0",
    vesselId: "cs-the--mariner",
    type: "Movie Theater",
    location: {
      deck: 12,
      area: "Forward Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "08fbae41-4a4c-4397-8a34-8eb53b46b9e5",
    vesselId: "cs-the--mariner",
    type: "Nightclub",
    location: {
      deck: 8,
      area: "Entertainment Plaza",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: false,
  }
];
