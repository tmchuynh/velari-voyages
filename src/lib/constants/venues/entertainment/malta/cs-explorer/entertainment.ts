// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "0030222d-f3da-4bbc-ba63-1575b849c8c8",
    vesselId: "cs--explorer",
    type: "Magic Show",
    location: {
      deck: 10,
      area: "Upper Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "4de4edf5-b578-42d8-9ae5-5ef4ed2854b9",
    vesselId: "cs--explorer",
    type: "Comedy",
    location: {
      deck: 11,
      area: "Atrium",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "c80ba559-4bee-4864-9eda-814467ea0d44",
    vesselId: "cs--explorer",
    type: "Game Show",
    location: {
      deck: 9,
      area: "Upper Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "29f8b004-654a-4342-ab86-fc7bdb6a36bb",
    vesselId: "cs--explorer",
    type: "Karaoke",
    location: {
      deck: 10,
      area: "Entertainment Plaza",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "3da715d8-7c7c-48fd-9f64-4c054547e4b4",
    vesselId: "cs--explorer",
    type: "Nightclub",
    location: {
      deck: 9,
      area: "Upper Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
