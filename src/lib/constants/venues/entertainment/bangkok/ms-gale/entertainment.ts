// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "f652d047-450d-409d-90e7-1c19ef87646c",
    vesselId: "ms--gale",
    type: "Comedy",
    location: {
      deck: 9,
      area: "Entertainment Plaza",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "7659678b-83b2-4cae-b3dc-c2fd1a515040",
    vesselId: "ms--gale",
    type: "Dancing",
    location: {
      deck: 7,
      area: "Aft Lounge",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "2db2fa41-e398-40e8-9d0d-5c17f1e983c4",
    vesselId: "ms--gale",
    type: "Karaoke",
    location: {
      deck: 7,
      area: "Upper Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "82b15597-0e4e-47dc-9fdf-3b7747167dc5",
    vesselId: "ms--gale",
    type: "Nightclub",
    location: {
      deck: 10,
      area: "Central Court",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "474f7134-4f88-4968-892a-232c4c2cfc66",
    vesselId: "ms--gale",
    type: "Game Show",
    location: {
      deck: 9,
      area: "Midship Theater",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "6927f3ca-9d0b-4f1a-aa74-e55d0347d2fe",
    vesselId: "ms--gale",
    type: "Live Music",
    location: {
      deck: 13,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
