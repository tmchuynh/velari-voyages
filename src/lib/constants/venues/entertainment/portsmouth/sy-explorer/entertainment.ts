// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "fe25667f-0383-4ed5-be6e-d2a75242ce6e",
    vesselId: "sy--explorer",
    type: "Comedy",
    location: {
      deck: 7,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "b1cb1c1e-2ee0-450a-a7c5-b44585f823a1",
    vesselId: "sy--explorer",
    type: "Dancing",
    location: {
      deck: 7,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "6210eed4-25da-4bf6-99b6-4e34eafbe13c",
    vesselId: "sy--explorer",
    type: "Karaoke",
    location: {
      deck: 10,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "e7c39eed-fca1-47e4-85b8-d9effd173e5a",
    vesselId: "sy--explorer",
    type: "Live Music",
    location: {
      deck: 13,
      area: "Midship Theater",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "f947d884-f036-4c39-9f12-3b3b824dd96a",
    vesselId: "sy--explorer",
    type: "Game Show",
    location: {
      deck: 5,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "bd8bc96c-bc7c-49e3-a329-1530f6795464",
    vesselId: "sy--explorer",
    type: "Movie Theater",
    location: {
      deck: 6,
      area: "Sky Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
