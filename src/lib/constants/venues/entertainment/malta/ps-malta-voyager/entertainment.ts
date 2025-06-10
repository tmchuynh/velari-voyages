// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "4a2199eb-88ec-4484-8a7f-88d12570551a",
    vesselId: "ps-malta-voyager",
    type: "Dancing",
    location: {
      deck: 12,
      area: "Forward Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "0e31b4a9-26ef-4250-912b-eb05f59ebd83",
    vesselId: "ps-malta-voyager",
    type: "Live Music",
    location: {
      deck: 11,
      area: "Sky Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "01a72520-5aff-4a67-9383-1ca1b42f6f6f",
    vesselId: "ps-malta-voyager",
    type: "Movie Theater",
    location: {
      deck: 9,
      area: "Atrium",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "a468f3ca-103b-418b-aad8-f90f252a0a32",
    vesselId: "ps-malta-voyager",
    type: "Game Show",
    location: {
      deck: 10,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "39264f20-e3f7-4141-8144-e1093e1a4635",
    vesselId: "ps-malta-voyager",
    type: "Comedy",
    location: {
      deck: 13,
      area: "Observation Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  }
];
