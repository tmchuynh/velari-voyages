// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "b0b3dc64-937f-4559-a536-aec2ffbf5431",
    vesselId: "rv--explorer",
    type: "Game Show",
    location: {
      deck: 14,
      area: "Entertainment Plaza",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "75d99472-9725-4358-bee3-0fbadbadc2fc",
    vesselId: "rv--explorer",
    type: "Live Music",
    location: {
      deck: 5,
      area: "Aft Lounge",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "1e29132a-0d00-4202-a284-afea23447747",
    vesselId: "rv--explorer",
    type: "Dancing",
    location: {
      deck: 8,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "842b4ba4-0c89-4609-b37e-150e510ef1dd",
    vesselId: "rv--explorer",
    type: "Comedy",
    location: {
      deck: 14,
      area: "Forward Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "af26d35d-4bbd-40eb-8bc5-489c4defeb04",
    vesselId: "rv--explorer",
    type: "Nightclub",
    location: {
      deck: 9,
      area: "Upper Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "513af141-17bb-421a-9d6c-f54f0eb9a873",
    vesselId: "rv--explorer",
    type: "Magic Show",
    location: {
      deck: 8,
      area: "Entertainment Plaza",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: false,
  }
];
