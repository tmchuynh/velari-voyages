// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "cf19cc81-0c03-4159-bc28-b93b985b46e4",
    vesselId: "ts--explorer",
    type: "Movie Theater",
    location: {
      deck: 7,
      area: "Forward Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "73469b16-45cb-4666-8f85-44a3e6456da4",
    vesselId: "ts--explorer",
    type: "Magic Show",
    location: {
      deck: 6,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "e90e588a-2297-48f1-b734-ead08352c94a",
    vesselId: "ts--explorer",
    type: "Game Show",
    location: {
      deck: 12,
      area: "Observation Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "f7e64af7-41ba-4b54-b2fb-2d0f706e4799",
    vesselId: "ts--explorer",
    type: "Karaoke",
    location: {
      deck: 9,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "aadbd87f-7395-4382-ae92-a81de656913b",
    vesselId: "ts--explorer",
    type: "Comedy",
    location: {
      deck: 9,
      area: "Observation Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "0e9f2b2d-4b69-4873-bf42-f639c96f60d4",
    vesselId: "ts--explorer",
    type: "Dancing",
    location: {
      deck: 6,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
