// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "f51e9205-3f96-4d18-8b5f-c4c3e879950c",
    vesselId: "nx--explorer",
    type: "Live Music",
    location: {
      deck: 15,
      area: "Sky Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "1002f82c-7dec-401b-9155-60af2634b821",
    vesselId: "nx--explorer",
    type: "Magic Show",
    location: {
      deck: 10,
      area: "Upper Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "70ea5605-c5ea-4c32-b29c-5d512b566671",
    vesselId: "nx--explorer",
    type: "Dancing",
    location: {
      deck: 14,
      area: "Central Court",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "4922236a-d0d7-4fa6-9643-daa4f52cf3f2",
    vesselId: "nx--explorer",
    type: "Game Show",
    location: {
      deck: 12,
      area: "Atrium",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "37a6be86-1666-41e8-9ae2-a8d15f8ac42b",
    vesselId: "nx--explorer",
    type: "Nightclub",
    location: {
      deck: 9,
      area: "Observation Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "b39af108-6a4a-4b38-81b6-f42f1e289c26",
    vesselId: "nx--explorer",
    type: "Movie Theater",
    location: {
      deck: 14,
      area: "Main Theater",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
