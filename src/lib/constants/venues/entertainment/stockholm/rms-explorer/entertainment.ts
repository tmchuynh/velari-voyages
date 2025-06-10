// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "6c82ec5a-2266-4e91-ae57-cfc71773374a",
    vesselId: "rms--explorer",
    type: "Comedy",
    location: {
      deck: 15,
      area: "Atrium",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "93ba7fc1-7e7f-4ba0-8703-061c843914df",
    vesselId: "rms--explorer",
    type: "Dancing",
    location: {
      deck: 13,
      area: "Observation Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "0b24c27a-2a6a-4caf-80cb-58c7605d6115",
    vesselId: "rms--explorer",
    type: "Movie Theater",
    location: {
      deck: 12,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "01f1620b-5dba-4835-945c-d6713cd4306c",
    vesselId: "rms--explorer",
    type: "Game Show",
    location: {
      deck: 5,
      area: "Forward Lounge",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
