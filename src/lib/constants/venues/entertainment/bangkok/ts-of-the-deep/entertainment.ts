// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "ad784208-411e-464d-a23d-abc2ff2bc6e6",
    vesselId: "ts--of-the-deep",
    type: "Comedy",
    location: {
      deck: 7,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "aeba2b85-52a6-4964-8874-4d0f73ee7870",
    vesselId: "ts--of-the-deep",
    type: "Dancing",
    location: {
      deck: 6,
      area: "Entertainment Plaza",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "0c9a3604-e106-45a6-9e18-eb1a05766c1b",
    vesselId: "ts--of-the-deep",
    type: "Movie Theater",
    location: {
      deck: 12,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "8cfabeac-fd4f-4aa1-9745-21d774467636",
    vesselId: "ts--of-the-deep",
    type: "Live Music",
    location: {
      deck: 9,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
