// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "f8c576cb-22e7-4d03-bb79-73f7836ee68f",
    vesselId: "ts--gale",
    type: "Karaoke",
    location: {
      deck: 12,
      area: "Upper Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "09db3c74-8341-4fb8-9bb6-d5ef8d9aad28",
    vesselId: "ts--gale",
    type: "Nightclub",
    location: {
      deck: 8,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "0dea9350-3e55-427d-842a-043bd96a1a24",
    vesselId: "ts--gale",
    type: "Magic Show",
    location: {
      deck: 12,
      area: "Upper Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "69208dfc-a1f4-4ba3-ad2e-2182f6e281dd",
    vesselId: "ts--gale",
    type: "Dancing",
    location: {
      deck: 7,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
