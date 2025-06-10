// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "55320062-7c4c-4b34-8f7d-4e90e61c2185",
    vesselId: "ps--gale",
    type: "Karaoke",
    location: {
      deck: 6,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "a5e47074-a92d-4c80-8dae-73cb7d54282b",
    vesselId: "ps--gale",
    type: "Dancing",
    location: {
      deck: 8,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "9d1caddd-c12e-427e-94e0-47852b17f780",
    vesselId: "ps--gale",
    type: "Live Music",
    location: {
      deck: 8,
      area: "Central Court",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "4e9170fc-60fd-4a80-b861-7ad811b77f8a",
    vesselId: "ps--gale",
    type: "Game Show",
    location: {
      deck: 14,
      area: "Sky Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "9b97b627-3d09-46a9-b8c5-d3ebf619f1de",
    vesselId: "ps--gale",
    type: "Nightclub",
    location: {
      deck: 9,
      area: "Aft Lounge",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "b529a1a7-cbc3-4510-86fa-18f98716deb3",
    vesselId: "ps--gale",
    type: "Movie Theater",
    location: {
      deck: 5,
      area: "Upper Deck",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: false,
  }
];
