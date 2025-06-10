// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "7036d66c-3319-42cf-87c4-85df8caa3ae7",
    vesselId: "rv--of-the-deep",
    type: "Movie Theater",
    location: {
      deck: 15,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "8b7ef2e5-cde9-4679-bfe6-cf0e08fcf046",
    vesselId: "rv--of-the-deep",
    type: "Magic Show",
    location: {
      deck: 14,
      area: "Observation Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "08c8afd9-e182-4408-8d73-2ff585810ae1",
    vesselId: "rv--of-the-deep",
    type: "Nightclub",
    location: {
      deck: 13,
      area: "Entertainment Plaza",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "7edf4f2c-d0e8-45de-b51f-bec8a6036f31",
    vesselId: "rv--of-the-deep",
    type: "Game Show",
    location: {
      deck: 11,
      area: "Atrium",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: false,
  }
];
