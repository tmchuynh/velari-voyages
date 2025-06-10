// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "7fce95d4-3b90-41d1-8e2b-d51cda8a4f9c",
    vesselId: "cs--explorer",
    type: "Movie Theater",
    location: {
      deck: 15,
      area: "Observation Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "55e62271-4fff-4117-b2f1-ad03ecf535c7",
    vesselId: "cs--explorer",
    type: "Game Show",
    location: {
      deck: 15,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "3c416cd8-2e53-48a8-aff9-b9e7dbc8d489",
    vesselId: "cs--explorer",
    type: "Nightclub",
    location: {
      deck: 13,
      area: "Main Theater",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "3b6a660e-8192-43a2-b1b0-23b9c1ef0ace",
    vesselId: "cs--explorer",
    type: "Comedy",
    location: {
      deck: 14,
      area: "Atrium",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
