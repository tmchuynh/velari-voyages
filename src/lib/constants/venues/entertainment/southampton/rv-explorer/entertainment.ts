// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "5e3c779a-be2c-4b77-bca2-358c7439a1b8",
    vesselId: "rv--explorer",
    type: "Game Show",
    location: {
      deck: 15,
      area: "Pool Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "fec72531-f0d9-4dab-8656-f84b090d8a24",
    vesselId: "rv--explorer",
    type: "Magic Show",
    location: {
      deck: 13,
      area: "Upper Deck",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "46464066-6045-4dda-b0a4-03f575d3c07d",
    vesselId: "rv--explorer",
    type: "Comedy",
    location: {
      deck: 14,
      area: "Upper Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "c4aa9795-9018-4bb6-b68c-dbae46c56cfe",
    vesselId: "rv--explorer",
    type: "Nightclub",
    location: {
      deck: 12,
      area: "Central Court",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "43770b0e-727d-4b33-892c-8327ad2f014e",
    vesselId: "rv--explorer",
    type: "Dancing",
    location: {
      deck: 6,
      area: "Sky Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "ee15d727-df1f-4651-a459-770bb300e3d1",
    vesselId: "rv--explorer",
    type: "Live Music",
    location: {
      deck: 7,
      area: "Upper Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
