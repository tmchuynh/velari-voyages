// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "b45cb98a-aa73-472a-841e-ab4140abddd7",
    vesselId: "fv-the--mariner",
    type: "Comedy",
    location: {
      deck: 12,
      area: "Observation Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "dfaa288c-f200-41ef-a9c7-17fefc2c12df",
    vesselId: "fv-the--mariner",
    type: "Dancing",
    location: {
      deck: 7,
      area: "Entertainment Plaza",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "b4b9dc3e-e9be-4a73-842a-735862da5f2b",
    vesselId: "fv-the--mariner",
    type: "Movie Theater",
    location: {
      deck: 6,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "8e10902d-621a-48cd-9eb1-c73100fe8cbe",
    vesselId: "fv-the--mariner",
    type: "Game Show",
    location: {
      deck: 8,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "c6505243-88ac-48bc-a24c-f556e3401ae1",
    vesselId: "fv-the--mariner",
    type: "Karaoke",
    location: {
      deck: 7,
      area: "Upper Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
