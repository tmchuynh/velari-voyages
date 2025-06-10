// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "5b10759f-1cff-4d3b-9c3a-9e2591641684",
    vesselId: "nx--explorer",
    type: "Karaoke",
    location: {
      deck: 12,
      area: "Upper Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "99e9c8ae-a2bc-4bcc-a0db-495babe541ce",
    vesselId: "nx--explorer",
    type: "Live Music",
    location: {
      deck: 12,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "8db74649-1238-4e2a-967e-9d3001f96c8c",
    vesselId: "nx--explorer",
    type: "Game Show",
    location: {
      deck: 7,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "8ee19cdd-63ee-4491-93ef-b1df7e8f740d",
    vesselId: "nx--explorer",
    type: "Movie Theater",
    location: {
      deck: 8,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
