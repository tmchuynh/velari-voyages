// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "547dbff9-4b0c-4bd2-8fce-c5782f574fca",
    vesselId: "sy--explorer",
    type: "Live Music",
    location: {
      deck: 15,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "66a01784-2719-43d0-b37a-cab6a12edd4c",
    vesselId: "sy--explorer",
    type: "Dancing",
    location: {
      deck: 9,
      area: "Midship Theater",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "7c1ef5ed-1d45-4b56-adfe-2e9e78a62b76",
    vesselId: "sy--explorer",
    type: "Comedy",
    location: {
      deck: 6,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "93d67237-ce1f-45c6-a340-5ccf2b10f3c5",
    vesselId: "sy--explorer",
    type: "Game Show",
    location: {
      deck: 8,
      area: "Upper Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "72478c86-906c-4517-99d1-8bdcbf9a37a9",
    vesselId: "sy--explorer",
    type: "Nightclub",
    location: {
      deck: 6,
      area: "Central Court",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "c22120bf-c73c-430b-a2f0-aef5ec8396d3",
    vesselId: "sy--explorer",
    type: "Movie Theater",
    location: {
      deck: 12,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
