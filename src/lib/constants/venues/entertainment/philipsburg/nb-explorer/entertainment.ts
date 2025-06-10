// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "87f7bd39-c2b2-40c2-a21f-eee83ae77a36",
    vesselId: "nb--explorer",
    type: "Comedy",
    location: {
      deck: 12,
      area: "Observation Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "2c93d713-e513-4119-892d-7cd047477579",
    vesselId: "nb--explorer",
    type: "Movie Theater",
    location: {
      deck: 8,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "3606f565-34b8-4aba-beaf-556126d545c5",
    vesselId: "nb--explorer",
    type: "Live Music",
    location: {
      deck: 9,
      area: "Atrium",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "1b3ed956-fcdb-498f-ae2f-3f2f55fd0a96",
    vesselId: "nb--explorer",
    type: "Magic Show",
    location: {
      deck: 13,
      area: "Observation Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "93e01c59-7485-4d27-9f7c-780dd821c8e3",
    vesselId: "nb--explorer",
    type: "Nightclub",
    location: {
      deck: 15,
      area: "Atrium",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
