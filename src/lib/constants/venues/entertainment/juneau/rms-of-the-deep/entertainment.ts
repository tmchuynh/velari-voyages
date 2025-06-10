// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "b2ce9ca7-2a1c-43e1-bdd9-544c7faef78c",
    vesselId: "rms--of-the-deep",
    type: "Game Show",
    location: {
      deck: 14,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "5ba59099-0bf4-43d5-a635-2e4949818e9c",
    vesselId: "rms--of-the-deep",
    type: "Comedy",
    location: {
      deck: 6,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "b3c99a6e-b396-415a-966c-b6ddf417a813",
    vesselId: "rms--of-the-deep",
    type: "Dancing",
    location: {
      deck: 10,
      area: "Atrium",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "500c1025-891e-48a8-bfd3-c29091012652",
    vesselId: "rms--of-the-deep",
    type: "Movie Theater",
    location: {
      deck: 12,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
