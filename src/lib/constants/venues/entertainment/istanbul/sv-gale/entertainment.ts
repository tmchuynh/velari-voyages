// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "cb28dd16-89ce-4503-a8c4-f3235827ce1b",
    vesselId: "sv--gale",
    type: "Live Music",
    location: {
      deck: 10,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "02dac85e-7e04-4bdb-b8bf-b883f3079dbf",
    vesselId: "sv--gale",
    type: "Nightclub",
    location: {
      deck: 10,
      area: "Midship Theater",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "b81152c6-d2d8-409c-a136-01653c20d9ae",
    vesselId: "sv--gale",
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
    id: "fa57f9bf-d5e7-48fb-9661-42448dfe4197",
    vesselId: "sv--gale",
    type: "Dancing",
    location: {
      deck: 6,
      area: "Sky Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "dffaaa98-7499-4b8c-9f3b-89086c548d6c",
    vesselId: "sv--gale",
    type: "Comedy",
    location: {
      deck: 6,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: false,
  }
];
