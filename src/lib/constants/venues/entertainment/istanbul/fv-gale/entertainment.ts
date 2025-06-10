// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "61cde4a7-3b37-418c-bc43-385cf83d545a",
    vesselId: "fv--gale",
    type: "Game Show",
    location: {
      deck: 5,
      area: "Upper Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "f0aec9eb-1007-4db5-9a9c-0a344a6d0233",
    vesselId: "fv--gale",
    type: "Magic Show",
    location: {
      deck: 8,
      area: "Grand Ballroom",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "8675ad27-a7bf-4813-8706-7425755c5910",
    vesselId: "fv--gale",
    type: "Live Music",
    location: {
      deck: 7,
      area: "Observation Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "ffca268b-d1b6-4b23-9249-d2f03291a9d2",
    vesselId: "fv--gale",
    type: "Comedy",
    location: {
      deck: 7,
      area: "Pool Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "fe77148d-e35d-4a9b-8cd8-7ee050323863",
    vesselId: "fv--gale",
    type: "Nightclub",
    location: {
      deck: 14,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
