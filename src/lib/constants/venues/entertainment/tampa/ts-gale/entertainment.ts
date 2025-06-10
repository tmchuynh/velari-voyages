// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "20addead-3c64-4fbb-a66f-69fa34667621",
    vesselId: "ts--gale",
    type: "Live Music",
    location: {
      deck: 6,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "fbf7c6d6-269f-4d22-9ae5-c5c4f266e131",
    vesselId: "ts--gale",
    type: "Dancing",
    location: {
      deck: 11,
      area: "Forward Lounge",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "e46b8ac7-0022-4c9b-a06e-95ec3d9d4f0b",
    vesselId: "ts--gale",
    type: "Nightclub",
    location: {
      deck: 10,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "7bb193b6-ef6f-4357-9e5d-aa7665b1768b",
    vesselId: "ts--gale",
    type: "Comedy",
    location: {
      deck: 15,
      area: "Upper Deck",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "e93b60a9-3ba4-4e34-a34c-50617b80f15f",
    vesselId: "ts--gale",
    type: "Game Show",
    location: {
      deck: 8,
      area: "Central Court",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "b7111602-a5d4-4e1a-a81f-b161be27afd7",
    vesselId: "ts--gale",
    type: "Movie Theater",
    location: {
      deck: 9,
      area: "Forward Lounge",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
