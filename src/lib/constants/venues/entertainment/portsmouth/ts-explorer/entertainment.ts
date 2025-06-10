// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "93e07fae-8bb5-4d8c-9824-e45deb4277c2",
    vesselId: "ts--explorer",
    type: "Dancing",
    location: {
      deck: 7,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "f95e69fd-a64b-4e66-bab8-298fa5158480",
    vesselId: "ts--explorer",
    type: "Live Music",
    location: {
      deck: 11,
      area: "Upper Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "8355757f-940f-4c81-9167-c033ea9634e1",
    vesselId: "ts--explorer",
    type: "Karaoke",
    location: {
      deck: 14,
      area: "Entertainment Plaza",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "345080bc-20af-4d76-af41-62575bf70bf5",
    vesselId: "ts--explorer",
    type: "Game Show",
    location: {
      deck: 7,
      area: "Entertainment Plaza",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
