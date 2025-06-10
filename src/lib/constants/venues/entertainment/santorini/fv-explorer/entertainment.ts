// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "fbae2594-a1c7-4df2-abcf-065d329293cd",
    vesselId: "fv--explorer",
    type: "Magic Show",
    location: {
      deck: 9,
      area: "Central Court",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "e89955eb-aa78-40b4-880a-5893865efc12",
    vesselId: "fv--explorer",
    type: "Nightclub",
    location: {
      deck: 6,
      area: "Atrium",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "e5f0715e-5c6f-4dc3-b35e-1a2fcf7700a8",
    vesselId: "fv--explorer",
    type: "Live Music",
    location: {
      deck: 14,
      area: "Atrium",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "d88b0603-83de-4e75-b221-de66104306a5",
    vesselId: "fv--explorer",
    type: "Dancing",
    location: {
      deck: 12,
      area: "Observation Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: false,
  }
];
