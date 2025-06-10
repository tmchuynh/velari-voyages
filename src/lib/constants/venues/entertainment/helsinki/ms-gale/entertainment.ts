// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "c6c68b3f-9275-483a-a447-0475b8cb9b70",
    vesselId: "ms--gale",
    type: "Live Music",
    location: {
      deck: 9,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "38503780-c2a5-427a-a9a4-bae3ad57d1bc",
    vesselId: "ms--gale",
    type: "Dancing",
    location: {
      deck: 8,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "2d104536-ae9b-4b1b-a475-6b90765c62ea",
    vesselId: "ms--gale",
    type: "Movie Theater",
    location: {
      deck: 5,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "75388afc-d84f-4792-adf9-218cd1c4df61",
    vesselId: "ms--gale",
    type: "Magic Show",
    location: {
      deck: 12,
      area: "Midship Theater",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
