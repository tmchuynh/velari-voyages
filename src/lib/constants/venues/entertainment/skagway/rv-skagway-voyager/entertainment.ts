// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "d1a3a568-bd44-4eef-b811-2ad67f294c12",
    vesselId: "rv-skagway-voyager",
    type: "Game Show",
    location: {
      deck: 13,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "5b6ff6ef-dfa6-48e4-ac68-9a73e0e5fe36",
    vesselId: "rv-skagway-voyager",
    type: "Comedy",
    location: {
      deck: 13,
      area: "Grand Ballroom",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "b6ba8098-e54e-4f86-b7f6-b198cb3b683c",
    vesselId: "rv-skagway-voyager",
    type: "Nightclub",
    location: {
      deck: 7,
      area: "Atrium",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "4edb2f59-8ed7-455d-9d13-dbc2583c8855",
    vesselId: "rv-skagway-voyager",
    type: "Karaoke",
    location: {
      deck: 13,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: false,
  }
];
