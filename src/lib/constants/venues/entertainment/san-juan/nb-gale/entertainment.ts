// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "a13f2200-2830-43de-8061-c25e85fc1bca",
    vesselId: "nb--gale",
    type: "Karaoke",
    location: {
      deck: 10,
      area: "Observation Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "c757c5e2-1890-45c2-80af-35d7be87762a",
    vesselId: "nb--gale",
    type: "Comedy",
    location: {
      deck: 9,
      area: "Central Court",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "8c9059c8-553f-4b45-994c-a59426908b7c",
    vesselId: "nb--gale",
    type: "Game Show",
    location: {
      deck: 12,
      area: "Sky Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "8c24aa18-c9e3-43d5-ac42-9290162ef439",
    vesselId: "nb--gale",
    type: "Magic Show",
    location: {
      deck: 14,
      area: "Sky Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "89439ce3-ac54-4ce9-bd0d-daf78efa58a8",
    vesselId: "nb--gale",
    type: "Dancing",
    location: {
      deck: 12,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "903636dc-05c6-42aa-8e9e-d0e6ad67aa8f",
    vesselId: "nb--gale",
    type: "Nightclub",
    location: {
      deck: 14,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
