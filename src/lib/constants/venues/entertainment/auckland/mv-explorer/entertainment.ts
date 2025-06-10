// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "07b1e894-ce7e-4b75-b475-bcbc3a775afe",
    vesselId: "mv--explorer",
    type: "Live Music",
    location: {
      deck: 9,
      area: "Atrium",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "ca64bdc2-99a1-47ba-bb77-679842fbed7d",
    vesselId: "mv--explorer",
    type: "Dancing",
    location: {
      deck: 15,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "833374e6-1688-499b-8f6a-29dc4146542a",
    vesselId: "mv--explorer",
    type: "Comedy",
    location: {
      deck: 11,
      area: "Upper Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "710edc4f-835f-4e08-abae-2e8b2d6f0b3d",
    vesselId: "mv--explorer",
    type: "Game Show",
    location: {
      deck: 14,
      area: "Sky Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "9e92faff-c96f-4903-b6f6-9862639d09b6",
    vesselId: "mv--explorer",
    type: "Movie Theater",
    location: {
      deck: 13,
      area: "Upper Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "7894c5f1-5cfd-4637-a6b3-0c7df03e933a",
    vesselId: "mv--explorer",
    type: "Karaoke",
    location: {
      deck: 11,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
