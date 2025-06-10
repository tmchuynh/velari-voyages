// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "a84b57d5-adf8-4c21-a17b-5d596fb20d51",
    vesselId: "rv--explorer",
    type: "Movie Theater",
    location: {
      deck: 11,
      area: "Forward Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "f675bdd1-dfde-4171-ba6f-9e4f8f7f3333",
    vesselId: "rv--explorer",
    type: "Game Show",
    location: {
      deck: 6,
      area: "Upper Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "97d1e4f2-4daf-4210-9aa9-c3513ec21e8e",
    vesselId: "rv--explorer",
    type: "Nightclub",
    location: {
      deck: 6,
      area: "Entertainment Plaza",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "03bb7fa7-44e6-48ca-a7bd-c5b109598d18",
    vesselId: "rv--explorer",
    type: "Live Music",
    location: {
      deck: 14,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "063cf81b-8187-474b-956c-a68643314188",
    vesselId: "rv--explorer",
    type: "Dancing",
    location: {
      deck: 8,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "95c11b90-e486-400b-b598-66bf1f3933fd",
    vesselId: "rv--explorer",
    type: "Magic Show",
    location: {
      deck: 6,
      area: "Atrium",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "19bdbd61-226f-4035-8cc5-6f849e373b21",
    vesselId: "rv--explorer",
    type: "Comedy",
    location: {
      deck: 12,
      area: "Observation Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
