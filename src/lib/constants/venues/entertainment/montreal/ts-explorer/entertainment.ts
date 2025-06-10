// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "79643b2d-d70b-4d3f-9429-9513577e3d71",
    vesselId: "ts--explorer",
    type: "Game Show",
    location: {
      deck: 12,
      area: "Central Court",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "c4b2d47c-e0ba-4ebc-b78c-b058033104ca",
    vesselId: "ts--explorer",
    type: "Karaoke",
    location: {
      deck: 6,
      area: "Upper Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "43100783-20f6-4bf8-ad1e-d5651813ae07",
    vesselId: "ts--explorer",
    type: "Magic Show",
    location: {
      deck: 10,
      area: "Forward Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "7834d361-30d4-44c8-9ba1-237b68c0b992",
    vesselId: "ts--explorer",
    type: "Movie Theater",
    location: {
      deck: 14,
      area: "Upper Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
