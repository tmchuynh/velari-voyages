// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "772cf081-d95f-40c6-b207-c3ba40bd3f86",
    vesselId: "rms--gale",
    type: "Movie Theater",
    location: {
      deck: 13,
      area: "Observation Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "64850b11-75b8-4e17-aae7-3bda8c36a06e",
    vesselId: "rms--gale",
    type: "Karaoke",
    location: {
      deck: 9,
      area: "Entertainment Plaza",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "826d5994-2f28-4159-ad26-54c2e80d2b7b",
    vesselId: "rms--gale",
    type: "Live Music",
    location: {
      deck: 8,
      area: "Forward Lounge",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "6e2b1b9a-60d7-486a-8b42-9c791f602ee9",
    vesselId: "rms--gale",
    type: "Dancing",
    location: {
      deck: 15,
      area: "Entertainment Plaza",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
