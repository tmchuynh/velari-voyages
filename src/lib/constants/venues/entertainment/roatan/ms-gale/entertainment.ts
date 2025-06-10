// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "8ef60b0f-3593-453c-a6df-cd9210a27848",
    vesselId: "ms--gale",
    type: "Magic Show",
    location: {
      deck: 7,
      area: "Central Court",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "c11b3a14-8e91-463c-8fd7-26e3ba4aaf1a",
    vesselId: "ms--gale",
    type: "Nightclub",
    location: {
      deck: 14,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "965e8b28-8ccf-42f5-96f5-e23992580953",
    vesselId: "ms--gale",
    type: "Dancing",
    location: {
      deck: 6,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "67883aac-3aa2-43e8-a64b-7992176d5d3a",
    vesselId: "ms--gale",
    type: "Live Music",
    location: {
      deck: 14,
      area: "Entertainment Plaza",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "3d037ad8-e6fc-4b5d-b187-5700cec9fcc2",
    vesselId: "ms--gale",
    type: "Game Show",
    location: {
      deck: 14,
      area: "Upper Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
