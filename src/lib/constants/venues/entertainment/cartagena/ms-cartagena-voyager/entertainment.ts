// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "0be47636-fbfc-468d-94a8-360df9967ac1",
    vesselId: "ms-cartagena-voyager",
    type: "Game Show",
    location: {
      deck: 5,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "ed7be228-c961-4401-97c2-98ccb7d766da",
    vesselId: "ms-cartagena-voyager",
    type: "Comedy",
    location: {
      deck: 5,
      area: "Pool Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "3361758b-0b00-480b-9bb3-a512003e427d",
    vesselId: "ms-cartagena-voyager",
    type: "Dancing",
    location: {
      deck: 14,
      area: "Observation Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "2adbf3a9-3156-44f3-a89b-1b87c5338f29",
    vesselId: "ms-cartagena-voyager",
    type: "Live Music",
    location: {
      deck: 13,
      area: "Entertainment Plaza",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "0285b4ad-2bd4-4d96-aeed-91598f90a489",
    vesselId: "ms-cartagena-voyager",
    type: "Movie Theater",
    location: {
      deck: 9,
      area: "Sky Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "13ed346a-9de3-4a41-8bfd-baa282adb918",
    vesselId: "ms-cartagena-voyager",
    type: "Karaoke",
    location: {
      deck: 13,
      area: "Entertainment Plaza",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
