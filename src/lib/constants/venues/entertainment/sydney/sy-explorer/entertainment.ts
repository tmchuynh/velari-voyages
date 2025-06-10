// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "ed186a6e-079f-4f6c-8905-a6906202d220",
    vesselId: "sy--explorer",
    type: "Comedy",
    location: {
      deck: 15,
      area: "Atrium",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "f7af9fcd-c2a4-4e3f-ab07-8e8e7a03ade5",
    vesselId: "sy--explorer",
    type: "Game Show",
    location: {
      deck: 8,
      area: "Central Court",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "00225021-3c84-48d5-bb28-0ffba1a5f0e4",
    vesselId: "sy--explorer",
    type: "Nightclub",
    location: {
      deck: 8,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "3b4b8464-83b8-472b-9d75-6cc028e4ba00",
    vesselId: "sy--explorer",
    type: "Magic Show",
    location: {
      deck: 15,
      area: "Forward Lounge",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
