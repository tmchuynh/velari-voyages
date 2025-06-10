// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "a42fcd6c-773a-413b-a170-f0dfcf029f3a",
    vesselId: "ps--explorer",
    type: "Live Music",
    location: {
      deck: 7,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "fce00a69-fd32-4016-95d0-0d46af4be288",
    vesselId: "ps--explorer",
    type: "Magic Show",
    location: {
      deck: 5,
      area: "Aft Lounge",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "e56c3eb1-276d-46ce-9aaa-1be4ddca447c",
    vesselId: "ps--explorer",
    type: "Dancing",
    location: {
      deck: 6,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "76cbab79-bef9-4db7-b93f-8b31f4c94529",
    vesselId: "ps--explorer",
    type: "Comedy",
    location: {
      deck: 10,
      area: "Atrium",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "af9cd635-a6ad-4aec-8143-0d8eb4f084d1",
    vesselId: "ps--explorer",
    type: "Game Show",
    location: {
      deck: 14,
      area: "Sky Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
