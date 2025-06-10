// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "bc5f53af-970d-44a6-bc00-2ca3e5e116f1",
    vesselId: "ts-the--mariner",
    type: "Game Show",
    location: {
      deck: 10,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "a2f3aae3-3645-4430-8766-d0613eba0a85",
    vesselId: "ts-the--mariner",
    type: "Comedy",
    location: {
      deck: 11,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "8aaf25a1-439b-42ec-9d04-59909db93366",
    vesselId: "ts-the--mariner",
    type: "Dancing",
    location: {
      deck: 13,
      area: "Forward Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "820b18b2-8d7b-4f97-9009-fd585d6adb34",
    vesselId: "ts-the--mariner",
    type: "Magic Show",
    location: {
      deck: 6,
      area: "Pool Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "e2a30b96-7287-4168-825b-ccb6902b7088",
    vesselId: "ts-the--mariner",
    type: "Live Music",
    location: {
      deck: 7,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
