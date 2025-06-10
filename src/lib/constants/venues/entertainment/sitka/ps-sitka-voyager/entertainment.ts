// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "6bb44532-058d-4b3f-b74f-6723aeccd10f",
    vesselId: "ps-sitka-voyager",
    type: "Comedy",
    location: {
      deck: 6,
      area: "Observation Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "c7221181-d66d-4d87-b9e9-3c91910d5a0f",
    vesselId: "ps-sitka-voyager",
    type: "Live Music",
    location: {
      deck: 6,
      area: "Aft Lounge",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "ec253a0f-ae3a-467e-9526-afe64e3c3302",
    vesselId: "ps-sitka-voyager",
    type: "Karaoke",
    location: {
      deck: 14,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "114d7357-d059-4e3b-b18a-a6bca67476c8",
    vesselId: "ps-sitka-voyager",
    type: "Game Show",
    location: {
      deck: 13,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "0e37aabd-d5f3-4dad-83e8-6a1ffab02622",
    vesselId: "ps-sitka-voyager",
    type: "Magic Show",
    location: {
      deck: 8,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "3038c6e1-a93d-4bde-bb5d-6cbdf9279c9c",
    vesselId: "ps-sitka-voyager",
    type: "Nightclub",
    location: {
      deck: 14,
      area: "Sky Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  }
];
