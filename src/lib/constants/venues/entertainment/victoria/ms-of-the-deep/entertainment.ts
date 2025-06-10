// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "38812833-c3a2-4904-ba27-6c04fa8af074",
    vesselId: "ms--of-the-deep",
    type: "Live Music",
    location: {
      deck: 15,
      area: "Sky Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "abb2d889-e8fa-4576-9d5f-61c7b6540eed",
    vesselId: "ms--of-the-deep",
    type: "Game Show",
    location: {
      deck: 9,
      area: "Upper Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "0b31cfae-d778-4ba5-9faa-2160a364ae80",
    vesselId: "ms--of-the-deep",
    type: "Dancing",
    location: {
      deck: 14,
      area: "Midship Theater",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "674d4e1f-862f-4c61-b897-a3a5ef228eca",
    vesselId: "ms--of-the-deep",
    type: "Nightclub",
    location: {
      deck: 10,
      area: "Observation Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
