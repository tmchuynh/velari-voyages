// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "77f99ae7-e3f7-43f3-b19d-6e9e9913ebb3",
    vesselId: "sv-nassau-voyager",
    type: "Game Show",
    location: {
      deck: 8,
      area: "Sky Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "e05306a9-5416-4d0f-9640-1598f54c12e4",
    vesselId: "sv-nassau-voyager",
    type: "Karaoke",
    location: {
      deck: 5,
      area: "Central Court",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "3326b90f-524a-4005-93cf-7514ba084b53",
    vesselId: "sv-nassau-voyager",
    type: "Movie Theater",
    location: {
      deck: 11,
      area: "Observation Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "f4240cab-5e3b-4918-81b8-1e5b656c3ff6",
    vesselId: "sv-nassau-voyager",
    type: "Comedy",
    location: {
      deck: 5,
      area: "Forward Lounge",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
