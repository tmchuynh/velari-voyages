// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "0443b6b9-23d7-4d2c-bb16-a426ede891d9",
    vesselId: "ss--explorer",
    type: "Movie Theater",
    location: {
      deck: 11,
      area: "Midship Theater",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "cb923c8c-dd29-4551-80cd-e860bb858bcf",
    vesselId: "ss--explorer",
    type: "Game Show",
    location: {
      deck: 7,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "8ef8a869-94f6-4876-a3ce-d494b9007c42",
    vesselId: "ss--explorer",
    type: "Magic Show",
    location: {
      deck: 10,
      area: "Pool Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "4d260c0b-2aeb-4376-b909-cae5c07b47e8",
    vesselId: "ss--explorer",
    type: "Nightclub",
    location: {
      deck: 15,
      area: "Entertainment Plaza",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "d62c50bf-3c33-4471-afa2-b010286aa80e",
    vesselId: "ss--explorer",
    type: "Karaoke",
    location: {
      deck: 14,
      area: "Atrium",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "ae4eed9b-637e-4c7c-b9d9-2e7df5fad602",
    vesselId: "ss--explorer",
    type: "Comedy",
    location: {
      deck: 6,
      area: "Main Theater",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
