// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "e8397d03-3aa4-49af-a4c1-758c19358189",
    vesselId: "sv--explorer",
    type: "Dancing",
    location: {
      deck: 7,
      area: "Midship Theater",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "be2177ad-f0fc-40e2-abc0-0310d3581b99",
    vesselId: "sv--explorer",
    type: "Live Music",
    location: {
      deck: 7,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "526af13a-2415-43e6-9a67-2cea771e85d4",
    vesselId: "sv--explorer",
    type: "Movie Theater",
    location: {
      deck: 5,
      area: "Entertainment Plaza",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "92e97a77-b3df-4753-a369-65be416b968b",
    vesselId: "sv--explorer",
    type: "Comedy",
    location: {
      deck: 5,
      area: "Upper Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "76c4b637-cdab-4a58-af2c-153db1e95e07",
    vesselId: "sv--explorer",
    type: "Game Show",
    location: {
      deck: 15,
      area: "Sky Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "125d9396-c6b3-4494-8cba-0511aab9eb76",
    vesselId: "sv--explorer",
    type: "Nightclub",
    location: {
      deck: 15,
      area: "Forward Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  }
];
