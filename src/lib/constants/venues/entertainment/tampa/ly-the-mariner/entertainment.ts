// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "3421731f-d370-4993-bb80-9fd44eec01f7",
    vesselId: "ly-the--mariner",
    type: "Comedy",
    location: {
      deck: 11,
      area: "Sky Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "ad8dc82a-0d9a-4b6c-b275-ab606cd8c4db",
    vesselId: "ly-the--mariner",
    type: "Live Music",
    location: {
      deck: 13,
      area: "Entertainment Plaza",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "f9c6f3f8-4787-437e-b5a6-68e491fb008f",
    vesselId: "ly-the--mariner",
    type: "Karaoke",
    location: {
      deck: 10,
      area: "Observation Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "9dfe15a6-af1e-4819-80c1-369bfc57f4a3",
    vesselId: "ly-the--mariner",
    type: "Dancing",
    location: {
      deck: 13,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "da5fb7e5-ec05-4bb3-bab3-45e18c6a174a",
    vesselId: "ly-the--mariner",
    type: "Game Show",
    location: {
      deck: 6,
      area: "Sky Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  }
];
