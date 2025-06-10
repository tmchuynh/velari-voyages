// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "c33f8a5f-0177-40a4-a435-091f98f19130",
    vesselId: "ts--gale",
    type: "Comedy",
    location: {
      deck: 9,
      area: "Atrium",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "d20bfb75-66d2-4d1f-abb5-ce2b149203de",
    vesselId: "ts--gale",
    type: "Live Music",
    location: {
      deck: 5,
      area: "Midship Theater",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "8b702cb3-aca1-43ac-896d-6623751a62fe",
    vesselId: "ts--gale",
    type: "Game Show",
    location: {
      deck: 10,
      area: "Entertainment Plaza",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "1e735f76-21de-4e52-b23d-c4b7de83d7d3",
    vesselId: "ts--gale",
    type: "Magic Show",
    location: {
      deck: 13,
      area: "Main Theater",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "7840a7e5-c9d9-4fdc-944c-7585c91e445f",
    vesselId: "ts--gale",
    type: "Karaoke",
    location: {
      deck: 11,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "106d533d-4df8-4a4b-bc79-412a928ac5df",
    vesselId: "ts--gale",
    type: "Nightclub",
    location: {
      deck: 10,
      area: "Atrium",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
