// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "548aaefe-9b2e-4fee-a2e0-48b1ebd279d5",
    vesselId: "rms-copenhagen-voyager",
    type: "Live Music",
    location: {
      deck: 7,
      area: "Pool Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "ff62143a-4ac0-4d1c-a1a2-b427fe85dac0",
    vesselId: "rms-copenhagen-voyager",
    type: "Nightclub",
    location: {
      deck: 14,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "9c247022-a6b8-40d9-a816-90acf6cb3960",
    vesselId: "rms-copenhagen-voyager",
    type: "Game Show",
    location: {
      deck: 7,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "dbcc6970-2342-4e4c-be18-801a31739141",
    vesselId: "rms-copenhagen-voyager",
    type: "Karaoke",
    location: {
      deck: 15,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "9b4355b9-fdf4-4396-b6af-8da6d9f46263",
    vesselId: "rms-copenhagen-voyager",
    type: "Dancing",
    location: {
      deck: 13,
      area: "Sky Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: false,
  }
];
