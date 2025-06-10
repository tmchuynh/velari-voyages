// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "3de29563-a7a8-4fdd-a04b-0383ece23980",
    vesselId: "rv-vancouver-voyager",
    type: "Game Show",
    location: {
      deck: 13,
      area: "Grand Ballroom",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "ec10213b-021d-41c1-8bfd-b79717a21ba5",
    vesselId: "rv-vancouver-voyager",
    type: "Comedy",
    location: {
      deck: 6,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "b8b95438-2ca3-4449-8b6d-4bebba2ff4b2",
    vesselId: "rv-vancouver-voyager",
    type: "Movie Theater",
    location: {
      deck: 5,
      area: "Forward Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "960a18ca-3e9f-42fd-b58e-10336600ce90",
    vesselId: "rv-vancouver-voyager",
    type: "Magic Show",
    location: {
      deck: 15,
      area: "Central Court",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "218b2d11-e722-4f7c-86f5-9d76d0b6b1ae",
    vesselId: "rv-vancouver-voyager",
    type: "Dancing",
    location: {
      deck: 12,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "d8f1857d-8db4-455f-b16e-01a528a24e90",
    vesselId: "rv-vancouver-voyager",
    type: "Live Music",
    location: {
      deck: 5,
      area: "Sky Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
