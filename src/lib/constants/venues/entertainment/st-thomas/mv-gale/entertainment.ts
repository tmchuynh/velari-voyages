// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "76cb0290-074f-49b4-94ec-ec67b68e56c2",
    vesselId: "mv--gale",
    type: "Live Music",
    location: {
      deck: 9,
      area: "Entertainment Plaza",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "e706aea9-91b1-4c11-83e6-37207d9f0e6a",
    vesselId: "mv--gale",
    type: "Dancing",
    location: {
      deck: 11,
      area: "Observation Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "7ec7ecfb-0b52-4925-a44f-54fbe7c23eae",
    vesselId: "mv--gale",
    type: "Nightclub",
    location: {
      deck: 8,
      area: "Observation Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "dd255c5c-45df-41f3-8954-0fbbcf4d7454",
    vesselId: "mv--gale",
    type: "Karaoke",
    location: {
      deck: 15,
      area: "Forward Lounge",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
