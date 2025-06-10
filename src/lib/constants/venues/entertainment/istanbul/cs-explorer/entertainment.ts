// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "53aaeefb-30fa-46de-a947-d7a2b0bb3cf9",
    vesselId: "cs--explorer",
    type: "Comedy",
    location: {
      deck: 10,
      area: "Observation Deck",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "fdd1caab-477f-4dd9-a729-8760424cc5f5",
    vesselId: "cs--explorer",
    type: "Dancing",
    location: {
      deck: 10,
      area: "Upper Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "c81633fd-96de-403c-84a5-eb972491a71c",
    vesselId: "cs--explorer",
    type: "Nightclub",
    location: {
      deck: 14,
      area: "Entertainment Plaza",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "2901a3bf-2f5b-4806-b945-29f050c3b30c",
    vesselId: "cs--explorer",
    type: "Movie Theater",
    location: {
      deck: 6,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "eaaadeac-ebe1-4609-9916-89c9c8317a25",
    vesselId: "cs--explorer",
    type: "Magic Show",
    location: {
      deck: 8,
      area: "Forward Lounge",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
