// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "dbd92b6f-7796-467f-bea3-d6670064ca22",
    vesselId: "rms--of-the-deep",
    type: "Game Show",
    location: {
      deck: 7,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "e8aa9cb2-dda9-40e1-b02e-4a79bc4f820a",
    vesselId: "rms--of-the-deep",
    type: "Movie Theater",
    location: {
      deck: 14,
      area: "Entertainment Plaza",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "ed3859e4-701b-4861-b6df-901c4a993f2c",
    vesselId: "rms--of-the-deep",
    type: "Live Music",
    location: {
      deck: 8,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "7d87b199-4d4c-4ef6-938c-e4c2dcaf572b",
    vesselId: "rms--of-the-deep",
    type: "Dancing",
    location: {
      deck: 12,
      area: "Sky Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
