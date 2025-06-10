// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "d91bdfe9-bdb6-4540-9ed6-dfafba010b16",
    vesselId: "ps--explorer",
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
    id: "91f4533a-901a-4eb2-864b-319174beb44e",
    vesselId: "ps--explorer",
    type: "Karaoke",
    location: {
      deck: 5,
      area: "Atrium",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "32b4b002-5979-494a-b28b-3fdbbf3cbb67",
    vesselId: "ps--explorer",
    type: "Magic Show",
    location: {
      deck: 9,
      area: "Entertainment Plaza",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "87419b51-c28e-4bf5-8127-210d55f0289c",
    vesselId: "ps--explorer",
    type: "Comedy",
    location: {
      deck: 15,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: false,
  }
];
