// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "da271fca-ef46-4f79-b4b4-05cf9a7d9a2e",
    vesselId: "sy--explorer",
    type: "Live Music",
    location: {
      deck: 13,
      area: "Entertainment Plaza",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "91b3ec0c-feef-4bf9-b8d2-d1382d2639fc",
    vesselId: "sy--explorer",
    type: "Magic Show",
    location: {
      deck: 9,
      area: "Upper Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "17806902-6acf-442f-9f6c-6888759e7d73",
    vesselId: "sy--explorer",
    type: "Nightclub",
    location: {
      deck: 7,
      area: "Forward Lounge",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "285045bf-0c0b-404a-9c3d-a2ef11b9329b",
    vesselId: "sy--explorer",
    type: "Game Show",
    location: {
      deck: 13,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "3b4b2da1-c14d-45f3-a01f-60ddf689cedb",
    vesselId: "sy--explorer",
    type: "Comedy",
    location: {
      deck: 8,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "05b4e766-90df-497f-8102-95fafcf9aea1",
    vesselId: "sy--explorer",
    type: "Karaoke",
    location: {
      deck: 13,
      area: "Forward Lounge",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
