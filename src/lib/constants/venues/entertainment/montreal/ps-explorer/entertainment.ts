// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "5e72da86-181a-4ee8-b02b-43aa4a4df64f",
    vesselId: "ps--explorer",
    type: "Live Music",
    location: {
      deck: 11,
      area: "Central Court",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "f7f4827f-30a1-4ba8-9ecc-4627daf76e15",
    vesselId: "ps--explorer",
    type: "Dancing",
    location: {
      deck: 14,
      area: "Sky Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "a7235c6e-8d57-48fa-8a8c-740b8dab410a",
    vesselId: "ps--explorer",
    type: "Nightclub",
    location: {
      deck: 13,
      area: "Atrium",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "4271faa2-fc23-4778-a32a-c78b66cfd306",
    vesselId: "ps--explorer",
    type: "Comedy",
    location: {
      deck: 10,
      area: "Grand Ballroom",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
