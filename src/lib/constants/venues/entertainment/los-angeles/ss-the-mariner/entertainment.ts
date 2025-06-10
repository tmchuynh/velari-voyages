// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "0c07fb1c-720b-4512-9513-e31c95e25635",
    vesselId: "ss-the--mariner",
    type: "Dancing",
    location: {
      deck: 15,
      area: "Grand Ballroom",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "74af39d1-5171-4255-9a00-cb3ee6c00a25",
    vesselId: "ss-the--mariner",
    type: "Game Show",
    location: {
      deck: 14,
      area: "Atrium",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "e610fd32-f0e3-4423-8b75-f6f551c85603",
    vesselId: "ss-the--mariner",
    type: "Karaoke",
    location: {
      deck: 6,
      area: "Upper Deck",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "4ddbebb7-1250-4a39-b939-42f7dc0f83f9",
    vesselId: "ss-the--mariner",
    type: "Comedy",
    location: {
      deck: 6,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
