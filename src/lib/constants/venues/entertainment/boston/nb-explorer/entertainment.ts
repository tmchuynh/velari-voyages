// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "1aff7599-5f6e-4e6d-9383-ce9bef32ea16",
    vesselId: "nb--explorer",
    type: "Live Music",
    location: {
      deck: 11,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "bba41ce4-e771-41c3-b5f9-1e1a6456abbf",
    vesselId: "nb--explorer",
    type: "Nightclub",
    location: {
      deck: 5,
      area: "Entertainment Plaza",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "af7f8cf1-4b1c-403f-aa42-6d1229c66e69",
    vesselId: "nb--explorer",
    type: "Dancing",
    location: {
      deck: 10,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "d9117efd-3904-4bdb-99ad-a75c8580309b",
    vesselId: "nb--explorer",
    type: "Movie Theater",
    location: {
      deck: 14,
      area: "Sky Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
