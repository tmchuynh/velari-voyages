// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "06896207-9d8f-414e-a25c-9d15df28f223",
    vesselId: "ts--of-the-deep",
    type: "Nightclub",
    location: {
      deck: 5,
      area: "Midship Theater",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "a6f2ae5d-b508-4633-bb17-4823310639d3",
    vesselId: "ts--of-the-deep",
    type: "Live Music",
    location: {
      deck: 5,
      area: "Midship Theater",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "40a7466d-c348-495f-ad44-456a56c0dc38",
    vesselId: "ts--of-the-deep",
    type: "Karaoke",
    location: {
      deck: 7,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "4704772f-2d5d-46b2-be60-e22905de6725",
    vesselId: "ts--of-the-deep",
    type: "Comedy",
    location: {
      deck: 8,
      area: "Atrium",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "330e55e4-5e1b-46b0-8083-1ade166a8f8f",
    vesselId: "ts--of-the-deep",
    type: "Game Show",
    location: {
      deck: 14,
      area: "Main Theater",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
