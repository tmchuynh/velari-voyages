// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "e04d1af4-4b05-4035-92e7-dc3d1c3f9483",
    vesselId: "ts-the--mariner",
    type: "Game Show",
    location: {
      deck: 12,
      area: "Observation Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "9ddf9a11-3a7b-45a1-9f72-1101c9860c7c",
    vesselId: "ts-the--mariner",
    type: "Dancing",
    location: {
      deck: 6,
      area: "Forward Lounge",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "ccd15de4-91f4-4e9f-ab45-0f5ec590ce05",
    vesselId: "ts-the--mariner",
    type: "Comedy",
    location: {
      deck: 13,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "d229e31f-4b14-48dc-bfe7-9f831ff9a734",
    vesselId: "ts-the--mariner",
    type: "Live Music",
    location: {
      deck: 10,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
