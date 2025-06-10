// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "d44ed718-ee62-40cd-a919-62d4c8537ad3",
    vesselId: "sv--of-the-deep",
    type: "Magic Show",
    location: {
      deck: 8,
      area: "Observation Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "93f2126e-2ef8-4327-9ad1-c49787d3160c",
    vesselId: "sv--of-the-deep",
    type: "Live Music",
    location: {
      deck: 13,
      area: "Central Court",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "50ac2625-d947-459a-a316-87f9ac1b1a55",
    vesselId: "sv--of-the-deep",
    type: "Game Show",
    location: {
      deck: 15,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "1a40f5e3-55de-4c04-ac96-a1c7d30ee39d",
    vesselId: "sv--of-the-deep",
    type: "Nightclub",
    location: {
      deck: 5,
      area: "Sky Deck",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
