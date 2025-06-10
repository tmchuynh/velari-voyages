// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "7a15972e-8e3d-4dd8-b351-bea5919f9c31",
    vesselId: "fv--explorer",
    type: "Karaoke",
    location: {
      deck: 11,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "3793985e-fb73-4994-a31f-30aaf7a1d8cd",
    vesselId: "fv--explorer",
    type: "Comedy",
    location: {
      deck: 11,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "ceebd6d9-ee74-4ffd-8f0e-ea864621ba59",
    vesselId: "fv--explorer",
    type: "Nightclub",
    location: {
      deck: 10,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "56d3457f-008d-470c-8a51-43b51bb7f604",
    vesselId: "fv--explorer",
    type: "Movie Theater",
    location: {
      deck: 8,
      area: "Pool Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "5eae973d-3ffd-43e4-a467-bf3216fb5623",
    vesselId: "fv--explorer",
    type: "Magic Show",
    location: {
      deck: 11,
      area: "Observation Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  }
];
