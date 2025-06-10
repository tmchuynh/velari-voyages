// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "494bd16a-07cb-4b1b-9caa-4b6df0bb93a2",
    vesselId: "ly--explorer",
    type: "Magic Show",
    location: {
      deck: 15,
      area: "Sky Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "d076db19-6d4e-482a-95a9-1ae3a55f565e",
    vesselId: "ly--explorer",
    type: "Movie Theater",
    location: {
      deck: 5,
      area: "Forward Lounge",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "357525ac-209e-4da6-89ce-f2cee369bfb6",
    vesselId: "ly--explorer",
    type: "Game Show",
    location: {
      deck: 6,
      area: "Pool Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "99b2674e-a27b-4f82-a8d7-f2adb2d376a6",
    vesselId: "ly--explorer",
    type: "Nightclub",
    location: {
      deck: 10,
      area: "Observation Deck",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
