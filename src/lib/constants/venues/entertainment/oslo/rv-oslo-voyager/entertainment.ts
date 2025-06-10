// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "256b2dde-4959-442d-b31b-b8258cfbfcba",
    vesselId: "rv-oslo-voyager",
    type: "Movie Theater",
    location: {
      deck: 14,
      area: "Grand Ballroom",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "bff774ab-8534-464e-906f-596674ea51bf",
    vesselId: "rv-oslo-voyager",
    type: "Game Show",
    location: {
      deck: 9,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "9ec96ce3-2e84-44b5-9cdc-b7a7adf14265",
    vesselId: "rv-oslo-voyager",
    type: "Comedy",
    location: {
      deck: 10,
      area: "Forward Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "93603d56-ad9d-4c11-800a-2963d2842471",
    vesselId: "rv-oslo-voyager",
    type: "Magic Show",
    location: {
      deck: 5,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "f6f41022-9232-45f1-af69-72c075b32a67",
    vesselId: "rv-oslo-voyager",
    type: "Dancing",
    location: {
      deck: 6,
      area: "Midship Theater",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
