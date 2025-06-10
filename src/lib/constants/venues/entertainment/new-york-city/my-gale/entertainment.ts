// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "6478f294-73b5-4896-b6d3-7e9a673d1096",
    vesselId: "my--gale",
    type: "Live Music",
    location: {
      deck: 8,
      area: "Observation Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "d6f78e7b-f0a9-4a65-815f-43834f8f9323",
    vesselId: "my--gale",
    type: "Karaoke",
    location: {
      deck: 14,
      area: "Forward Lounge",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "b3fb5f9a-bf8d-48ef-8756-d80a66b8cea4",
    vesselId: "my--gale",
    type: "Game Show",
    location: {
      deck: 7,
      area: "Midship Theater",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "8f9a2e7b-e5a2-437c-807f-5f61176ca63f",
    vesselId: "my--gale",
    type: "Dancing",
    location: {
      deck: 8,
      area: "Entertainment Plaza",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "efa777ea-ddca-48a7-95ab-83e8073409a1",
    vesselId: "my--gale",
    type: "Magic Show",
    location: {
      deck: 7,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
