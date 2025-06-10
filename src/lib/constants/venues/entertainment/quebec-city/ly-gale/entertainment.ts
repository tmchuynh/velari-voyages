// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "227da546-df67-477e-833a-e6b0c51568d0",
    vesselId: "ly--gale",
    type: "Comedy",
    location: {
      deck: 8,
      area: "Upper Deck",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "616c0762-86b8-4b2a-964e-46bff14ec6cd",
    vesselId: "ly--gale",
    type: "Dancing",
    location: {
      deck: 5,
      area: "Observation Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "c4daa879-eecc-43fd-bfcd-66ccf7d4e08c",
    vesselId: "ly--gale",
    type: "Nightclub",
    location: {
      deck: 8,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "800a1f9a-6047-4969-8add-f89f3c4a9b40",
    vesselId: "ly--gale",
    type: "Karaoke",
    location: {
      deck: 5,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "ad7705eb-9c8f-4bff-b6ce-49b57eec571b",
    vesselId: "ly--gale",
    type: "Live Music",
    location: {
      deck: 8,
      area: "Entertainment Plaza",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "9aa10987-3bc1-4297-a3c1-ee8df0cb22be",
    vesselId: "ly--gale",
    type: "Game Show",
    location: {
      deck: 13,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
