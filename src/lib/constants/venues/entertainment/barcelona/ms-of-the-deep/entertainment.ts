// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "5191aba7-9ed6-41d2-9f6a-9e60e6310d1b",
    vesselId: "ms--of-the-deep",
    type: "Nightclub",
    location: {
      deck: 14,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "dba58a68-2e93-44a9-801c-cc0f1444f937",
    vesselId: "ms--of-the-deep",
    type: "Movie Theater",
    location: {
      deck: 9,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "a1237791-2a4a-4380-8dab-1fdf43aa32f3",
    vesselId: "ms--of-the-deep",
    type: "Magic Show",
    location: {
      deck: 9,
      area: "Main Theater",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "ffe47cb5-5330-4433-95bc-ac6008d7fa0b",
    vesselId: "ms--of-the-deep",
    type: "Game Show",
    location: {
      deck: 13,
      area: "Sky Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
