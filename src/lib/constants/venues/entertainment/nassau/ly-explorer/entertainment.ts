// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "704d2db1-b97c-4fc4-93c0-dcd1330ff6e5",
    vesselId: "ly--explorer",
    type: "Karaoke",
    location: {
      deck: 8,
      area: "Entertainment Plaza",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "fd323732-290d-4474-83e7-70fa4508b0d3",
    vesselId: "ly--explorer",
    type: "Movie Theater",
    location: {
      deck: 9,
      area: "Forward Lounge",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "2a0c22f7-d2ed-4094-986d-baf26ab6d14f",
    vesselId: "ly--explorer",
    type: "Game Show",
    location: {
      deck: 10,
      area: "Midship Theater",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "85b41674-fe10-4205-bea2-cb853bbfc752",
    vesselId: "ly--explorer",
    type: "Magic Show",
    location: {
      deck: 10,
      area: "Pool Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: false,
  }
];
