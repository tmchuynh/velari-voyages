// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "6d80b478-9acb-4572-8041-82fc5bc411d3",
    vesselId: "rv--explorer",
    type: "Dancing",
    location: {
      deck: 5,
      area: "Central Court",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "1a40bbd5-6f55-4ac5-952c-116f90ff00ff",
    vesselId: "rv--explorer",
    type: "Nightclub",
    location: {
      deck: 6,
      area: "Main Theater",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "1c99d63d-cd23-422d-8cd8-23f028b802fe",
    vesselId: "rv--explorer",
    type: "Game Show",
    location: {
      deck: 14,
      area: "Observation Deck",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "abfb5efc-2a0a-4aca-baf9-9f7512280913",
    vesselId: "rv--explorer",
    type: "Live Music",
    location: {
      deck: 14,
      area: "Sky Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
