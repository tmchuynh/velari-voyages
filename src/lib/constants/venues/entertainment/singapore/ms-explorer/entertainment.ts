// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "d5af956c-a852-4102-bfd5-bb0cbf2246f4",
    vesselId: "ms--explorer",
    type: "Dancing",
    location: {
      deck: 10,
      area: "Sky Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "59c1e030-1dc0-4f9e-8277-c7ac0fdf0111",
    vesselId: "ms--explorer",
    type: "Magic Show",
    location: {
      deck: 8,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "9d81ffe5-2313-4835-9555-c0f4b6a5eddd",
    vesselId: "ms--explorer",
    type: "Live Music",
    location: {
      deck: 11,
      area: "Sky Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "0f15eabf-8f0d-45d2-9b97-227d83abdd5a",
    vesselId: "ms--explorer",
    type: "Karaoke",
    location: {
      deck: 9,
      area: "Aft Lounge",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
