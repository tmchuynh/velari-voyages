// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "45fbcf3b-8446-4a0c-a1f0-c6559e519632",
    vesselId: "rv--explorer",
    type: "Nightclub",
    location: {
      deck: 5,
      area: "Observation Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "98779338-1204-43b1-bdc5-66e89969e30f",
    vesselId: "rv--explorer",
    type: "Comedy",
    location: {
      deck: 6,
      area: "Grand Ballroom",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "d3cc66b8-2ec4-40a6-8198-fd8dcd1e52df",
    vesselId: "rv--explorer",
    type: "Live Music",
    location: {
      deck: 15,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "3fd57a1e-786a-4a8d-9e7c-51cdffbd4a90",
    vesselId: "rv--explorer",
    type: "Game Show",
    location: {
      deck: 6,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
