// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "0811f951-4255-4f88-86f3-bd868955442e",
    vesselId: "ms--gale",
    type: "Live Music",
    location: {
      deck: 6,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "d8a0e361-62d4-4cd3-b433-104dcad90bff",
    vesselId: "ms--gale",
    type: "Dancing",
    location: {
      deck: 11,
      area: "Central Court",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "cb14d202-bfb7-410a-a723-75b0e3c280ae",
    vesselId: "ms--gale",
    type: "Comedy",
    location: {
      deck: 11,
      area: "Pool Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "e9966334-4a65-42f9-8fed-9880428e97c3",
    vesselId: "ms--gale",
    type: "Game Show",
    location: {
      deck: 10,
      area: "Sky Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "45ff72b5-6d9c-4116-9f44-ff8c3c952b0f",
    vesselId: "ms--gale",
    type: "Movie Theater",
    location: {
      deck: 10,
      area: "Central Court",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
