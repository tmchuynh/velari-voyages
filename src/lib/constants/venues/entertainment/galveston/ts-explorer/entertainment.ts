// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "39ded72f-405e-4fdc-8cdc-ce79036bb419",
    vesselId: "ts--explorer",
    type: "Nightclub",
    location: {
      deck: 7,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "ad1dabbe-6f88-4194-ade2-572ed8ad16b3",
    vesselId: "ts--explorer",
    type: "Comedy",
    location: {
      deck: 12,
      area: "Atrium",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "c5a941cf-d042-41aa-b7ba-50dd75c47c4e",
    vesselId: "ts--explorer",
    type: "Game Show",
    location: {
      deck: 9,
      area: "Observation Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "8248e0ae-e5f8-4a61-b6d8-3be53e0eeb0c",
    vesselId: "ts--explorer",
    type: "Magic Show",
    location: {
      deck: 12,
      area: "Sky Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "98789025-cbb8-4a79-b677-e3fd2d8cf3e5",
    vesselId: "ts--explorer",
    type: "Movie Theater",
    location: {
      deck: 9,
      area: "Sky Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "c1836f74-deb6-4124-bbd4-b66f844f824d",
    vesselId: "ts--explorer",
    type: "Karaoke",
    location: {
      deck: 8,
      area: "Entertainment Plaza",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
