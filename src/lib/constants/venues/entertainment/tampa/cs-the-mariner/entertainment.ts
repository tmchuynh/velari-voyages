// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "c8860fda-1fd7-4fa3-ac34-c154015a2dc6",
    vesselId: "cs-the--mariner",
    type: "Game Show",
    location: {
      deck: 7,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "b15d6016-67bf-4f25-8589-bb270966c381",
    vesselId: "cs-the--mariner",
    type: "Magic Show",
    location: {
      deck: 14,
      area: "Main Theater",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "6d0e4f1a-153a-4c6d-af01-1be4460fef5f",
    vesselId: "cs-the--mariner",
    type: "Dancing",
    location: {
      deck: 13,
      area: "Aft Lounge",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "1c875cae-811e-45ba-80d2-b70685c51165",
    vesselId: "cs-the--mariner",
    type: "Karaoke",
    location: {
      deck: 12,
      area: "Forward Lounge",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "74b7f326-280f-4311-8192-e49c84471216",
    vesselId: "cs-the--mariner",
    type: "Live Music",
    location: {
      deck: 14,
      area: "Observation Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "512e98f2-ba03-40f2-9c6d-fc86487ce804",
    vesselId: "cs-the--mariner",
    type: "Movie Theater",
    location: {
      deck: 12,
      area: "Forward Lounge",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
