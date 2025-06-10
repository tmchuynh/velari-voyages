// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "df84580b-8ca7-4997-9b0e-ed00cc0ffef5",
    vesselId: "rv--gale",
    type: "Nightclub",
    location: {
      deck: 7,
      area: "Upper Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "d200873c-3e52-4b7a-9906-347811a36ade",
    vesselId: "rv--gale",
    type: "Movie Theater",
    location: {
      deck: 7,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "21e1735f-7d18-46f6-8c3f-8bd899a90c99",
    vesselId: "rv--gale",
    type: "Game Show",
    location: {
      deck: 9,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "075707bf-02fa-4bb9-8270-dfece1b4be6a",
    vesselId: "rv--gale",
    type: "Comedy",
    location: {
      deck: 11,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "39962b4d-01a5-4586-9e10-d338a2eb8b10",
    vesselId: "rv--gale",
    type: "Dancing",
    location: {
      deck: 12,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
