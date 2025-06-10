// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "f6f3bd13-df33-42eb-86e9-0a21ca6d43f1",
    vesselId: "ly--explorer",
    type: "Game Show",
    location: {
      deck: 7,
      area: "Atrium",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "c9ff52e3-2fb6-405d-9d90-4574cc6cf529",
    vesselId: "ly--explorer",
    type: "Dancing",
    location: {
      deck: 14,
      area: "Atrium",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "7dc49e49-3c23-4ff5-92aa-a05c5c922412",
    vesselId: "ly--explorer",
    type: "Comedy",
    location: {
      deck: 12,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "0f73972a-62dc-4fc4-94fd-d63c2fc59745",
    vesselId: "ly--explorer",
    type: "Live Music",
    location: {
      deck: 11,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
