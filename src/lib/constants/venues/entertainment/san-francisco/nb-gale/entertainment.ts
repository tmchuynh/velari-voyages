// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "ebdfd614-6534-492c-9099-d5a38e45d08b",
    vesselId: "nb--gale",
    type: "Live Music",
    location: {
      deck: 15,
      area: "Forward Lounge",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "ecec82d9-b127-4af2-8747-4e7a853dba59",
    vesselId: "nb--gale",
    type: "Comedy",
    location: {
      deck: 14,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "ff46acb3-c4f4-44bf-bb05-92f5246f1360",
    vesselId: "nb--gale",
    type: "Dancing",
    location: {
      deck: 6,
      area: "Entertainment Plaza",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "b97a4e2a-6765-4686-97f3-513518dccb31",
    vesselId: "nb--gale",
    type: "Magic Show",
    location: {
      deck: 5,
      area: "Grand Ballroom",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "cbb99392-e365-428e-9024-16b651089a5b",
    vesselId: "nb--gale",
    type: "Game Show",
    location: {
      deck: 13,
      area: "Atrium",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "a17236e7-c60a-455f-be34-aec62bbdb7b8",
    vesselId: "nb--gale",
    type: "Movie Theater",
    location: {
      deck: 8,
      area: "Forward Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
