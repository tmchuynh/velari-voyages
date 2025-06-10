// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "11c59d25-6968-4c89-9e00-bc909ae0c894",
    vesselId: "ps--explorer",
    type: "Comedy",
    location: {
      deck: 9,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "6a6a6fb3-deb1-4290-b66b-1d8ba1d3a87a",
    vesselId: "ps--explorer",
    type: "Dancing",
    location: {
      deck: 15,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "c09f7185-505f-4111-b1fe-7e5689050bd1",
    vesselId: "ps--explorer",
    type: "Movie Theater",
    location: {
      deck: 14,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "61335fd8-4e3e-47b4-ad20-b5db38f9bb0e",
    vesselId: "ps--explorer",
    type: "Live Music",
    location: {
      deck: 14,
      area: "Sky Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "c9f0b0e9-a9f1-4f83-bf0c-148195286ff9",
    vesselId: "ps--explorer",
    type: "Game Show",
    location: {
      deck: 7,
      area: "Forward Lounge",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
