// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "12cc11c8-c3a8-46e3-86ea-f9fe99921fcb",
    vesselId: "rv--gale",
    type: "Game Show",
    location: {
      deck: 13,
      area: "Observation Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "f345975a-cdc9-4912-979d-1a3aa2d7dddd",
    vesselId: "rv--gale",
    type: "Live Music",
    location: {
      deck: 9,
      area: "Sky Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "a41e8e06-ac7e-4880-a89d-1d24ed20bbea",
    vesselId: "rv--gale",
    type: "Karaoke",
    location: {
      deck: 15,
      area: "Sky Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "79c05991-9caa-4ee8-9787-150d61de5b68",
    vesselId: "rv--gale",
    type: "Dancing",
    location: {
      deck: 6,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "50962b54-9612-449f-8a04-ed9f03d6f086",
    vesselId: "rv--gale",
    type: "Magic Show",
    location: {
      deck: 9,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
