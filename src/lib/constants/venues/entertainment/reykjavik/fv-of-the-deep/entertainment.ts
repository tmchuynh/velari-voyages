// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "b4d2cb0c-2f66-41dc-a080-29c6331fb9e2",
    vesselId: "fv--of-the-deep",
    type: "Game Show",
    location: {
      deck: 14,
      area: "Upper Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "5fbb8d3a-d8a3-4fc1-9bb8-6961c01e1b23",
    vesselId: "fv--of-the-deep",
    type: "Nightclub",
    location: {
      deck: 10,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "5730ed4e-971f-45f6-91a2-2175dd374ee9",
    vesselId: "fv--of-the-deep",
    type: "Dancing",
    location: {
      deck: 14,
      area: "Atrium",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "efaca13c-d1d8-4204-8c72-d5da524f04c7",
    vesselId: "fv--of-the-deep",
    type: "Movie Theater",
    location: {
      deck: 11,
      area: "Sky Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "32040044-b955-462a-8ddb-a0f7b90f0a3a",
    vesselId: "fv--of-the-deep",
    type: "Live Music",
    location: {
      deck: 13,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "929a4408-c1ff-4088-a4b3-6b367ef038df",
    vesselId: "fv--of-the-deep",
    type: "Karaoke",
    location: {
      deck: 8,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  }
];
