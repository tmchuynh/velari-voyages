// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "fae067fd-8b5c-4a7e-88e9-abcc4446dd31",
    vesselId: "hms-the--mariner",
    type: "Game Show",
    location: {
      deck: 12,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "0335a3b6-37f8-488a-9944-a72b70a71b67",
    vesselId: "hms-the--mariner",
    type: "Movie Theater",
    location: {
      deck: 12,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "58fbab8e-6b09-425a-8588-174b9a3cbdb0",
    vesselId: "hms-the--mariner",
    type: "Nightclub",
    location: {
      deck: 6,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "e7d2a972-8792-4ef3-bbee-b3aaf5573981",
    vesselId: "hms-the--mariner",
    type: "Comedy",
    location: {
      deck: 7,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
