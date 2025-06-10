// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "b829faf4-3630-4146-ac2b-72d110ab93ff",
    vesselId: "my--of-the-deep",
    type: "Magic Show",
    location: {
      deck: 9,
      area: "Main Theater",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "7bf0d791-b191-45f4-8da3-e0a8b1fd16e1",
    vesselId: "my--of-the-deep",
    type: "Game Show",
    location: {
      deck: 6,
      area: "Grand Ballroom",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "8b46b819-2e82-4b73-8b93-6064f7ae52f5",
    vesselId: "my--of-the-deep",
    type: "Comedy",
    location: {
      deck: 10,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "e677f28b-fe57-4469-8953-dfe601052d39",
    vesselId: "my--of-the-deep",
    type: "Dancing",
    location: {
      deck: 12,
      area: "Observation Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
