// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "81e1e55e-ee0e-42c4-aa6d-580007671f1b",
    vesselId: "ly-the--mariner",
    type: "Dancing",
    location: {
      deck: 5,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "c3c8edb3-7cad-469c-afd0-baad747eb281",
    vesselId: "ly-the--mariner",
    type: "Comedy",
    location: {
      deck: 6,
      area: "Central Court",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "2a77f95a-11a5-4f46-aadb-25254ce9e03b",
    vesselId: "ly-the--mariner",
    type: "Magic Show",
    location: {
      deck: 12,
      area: "Upper Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "efaa8959-5be5-408c-86eb-fea06ea444ff",
    vesselId: "ly-the--mariner",
    type: "Game Show",
    location: {
      deck: 14,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "6bbdbcf5-c592-4a4a-812d-56a9d4f78d13",
    vesselId: "ly-the--mariner",
    type: "Movie Theater",
    location: {
      deck: 7,
      area: "Sky Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "3a7ce655-b536-490f-91d8-2aedbbd7b1cd",
    vesselId: "ly-the--mariner",
    type: "Karaoke",
    location: {
      deck: 9,
      area: "Main Theater",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
