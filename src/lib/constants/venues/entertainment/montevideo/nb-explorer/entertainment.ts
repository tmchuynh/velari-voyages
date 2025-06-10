// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "192a3d3c-94ec-4754-94bc-915cfa005dfb",
    vesselId: "nb--explorer",
    type: "Live Music",
    location: {
      deck: 6,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "bd1813f0-d6fb-4d2b-bdc5-9c3703130617",
    vesselId: "nb--explorer",
    type: "Comedy",
    location: {
      deck: 9,
      area: "Forward Lounge",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "f3fb5135-dc2d-43ab-97f9-938800de2e7d",
    vesselId: "nb--explorer",
    type: "Game Show",
    location: {
      deck: 7,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "e5d7c819-68db-4d77-979f-0a7d40480170",
    vesselId: "nb--explorer",
    type: "Magic Show",
    location: {
      deck: 5,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "60ac2b4b-0a2f-4750-96da-6f668ea79f25",
    vesselId: "nb--explorer",
    type: "Dancing",
    location: {
      deck: 12,
      area: "Observation Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
