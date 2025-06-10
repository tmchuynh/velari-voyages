// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "e41c8e22-4759-42c8-a079-eb22bb32953c",
    vesselId: "hms--gale",
    type: "Nightclub",
    location: {
      deck: 8,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "d9feebc0-9b97-42e2-9b00-351c49358fb3",
    vesselId: "hms--gale",
    type: "Live Music",
    location: {
      deck: 15,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "c74a67c2-e7ce-44e3-9c34-964389365efb",
    vesselId: "hms--gale",
    type: "Dancing",
    location: {
      deck: 9,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "8cf93cf7-2469-4ed8-b6c0-4ed7b573010a",
    vesselId: "hms--gale",
    type: "Magic Show",
    location: {
      deck: 6,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "31cc8dea-93b8-4da1-9bda-57541ca4af46",
    vesselId: "hms--gale",
    type: "Comedy",
    location: {
      deck: 11,
      area: "Upper Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
