// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "8d79182b-d600-4a6a-b421-2159169bbbfc",
    vesselId: "nb--explorer",
    type: "Nightclub",
    location: {
      deck: 15,
      area: "Sky Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "bc1ee3cf-6171-40d8-b10f-69e0430c464b",
    vesselId: "nb--explorer",
    type: "Dancing",
    location: {
      deck: 10,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "ee98c3b4-a247-4ea1-a51e-250f2c6bfa63",
    vesselId: "nb--explorer",
    type: "Karaoke",
    location: {
      deck: 9,
      area: "Atrium",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "73dea60d-9310-4283-8331-d596767f8db6",
    vesselId: "nb--explorer",
    type: "Magic Show",
    location: {
      deck: 7,
      area: "Central Court",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "275bdc17-fba8-4f4e-a97f-5861d92cd6bb",
    vesselId: "nb--explorer",
    type: "Game Show",
    location: {
      deck: 14,
      area: "Forward Lounge",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "52dcb020-2f33-4a00-b4ab-8dcc2b831726",
    vesselId: "nb--explorer",
    type: "Comedy",
    location: {
      deck: 12,
      area: "Forward Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
