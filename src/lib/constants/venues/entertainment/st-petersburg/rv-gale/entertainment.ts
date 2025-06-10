// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "cda50bda-bb63-48e3-8df5-8192df91f3d3",
    vesselId: "rv--gale",
    type: "Magic Show",
    location: {
      deck: 9,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "7bd23cb4-a82c-4199-aa7e-846a4831de2e",
    vesselId: "rv--gale",
    type: "Dancing",
    location: {
      deck: 10,
      area: "Observation Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "923acf8b-4631-4f4c-b88c-4d0ce5ce1042",
    vesselId: "rv--gale",
    type: "Live Music",
    location: {
      deck: 14,
      area: "Entertainment Plaza",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "7a22cfe2-1963-4153-b3cd-f67d0810f54a",
    vesselId: "rv--gale",
    type: "Karaoke",
    location: {
      deck: 11,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "6c5f429b-7445-4c96-a9fe-57b11c9070e5",
    vesselId: "rv--gale",
    type: "Nightclub",
    location: {
      deck: 12,
      area: "Upper Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
