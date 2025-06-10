// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "0f6e7dd8-2d2f-42de-8cab-1b3cbdf980d2",
    vesselId: "ts--of-the-deep",
    type: "Comedy",
    location: {
      deck: 8,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "7338dec2-7dde-44b7-9338-e4df6f9a1d95",
    vesselId: "ts--of-the-deep",
    type: "Nightclub",
    location: {
      deck: 12,
      area: "Midship Theater",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "d1640c50-ef4c-4707-b300-3bcb77870717",
    vesselId: "ts--of-the-deep",
    type: "Dancing",
    location: {
      deck: 12,
      area: "Entertainment Plaza",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "cc8cefdc-e935-4b04-9d5d-793905a83b8c",
    vesselId: "ts--of-the-deep",
    type: "Movie Theater",
    location: {
      deck: 11,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "4291dbee-2885-47ff-b13f-bead4507eef0",
    vesselId: "ts--of-the-deep",
    type: "Karaoke",
    location: {
      deck: 15,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  }
];
