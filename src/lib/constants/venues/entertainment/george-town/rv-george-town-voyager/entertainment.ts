// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "949f15b0-bd32-4885-9e17-f3aed7a281b4",
    vesselId: "rv-george-town-voyager",
    type: "Game Show",
    location: {
      deck: 5,
      area: "Atrium",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "34649f78-416d-4269-b8fa-e1e29f29f18f",
    vesselId: "rv-george-town-voyager",
    type: "Dancing",
    location: {
      deck: 5,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "d086b534-24a0-4c73-9aa9-518a0aa7d1d8",
    vesselId: "rv-george-town-voyager",
    type: "Magic Show",
    location: {
      deck: 8,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "1cf214ca-65c4-495b-919d-ec053f3dcd3f",
    vesselId: "rv-george-town-voyager",
    type: "Movie Theater",
    location: {
      deck: 11,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
