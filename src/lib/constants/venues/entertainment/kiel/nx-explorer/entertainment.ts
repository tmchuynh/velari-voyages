// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "ef4da953-f84b-43ab-9063-3ae8f4ae91b9",
    vesselId: "nx--explorer",
    type: "Live Music",
    location: {
      deck: 12,
      area: "Sky Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "4ad39b92-3a0e-4438-934e-2116b269918e",
    vesselId: "nx--explorer",
    type: "Dancing",
    location: {
      deck: 15,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "cfbcec1e-b1d4-45a4-a332-4336b4a6379b",
    vesselId: "nx--explorer",
    type: "Nightclub",
    location: {
      deck: 15,
      area: "Observation Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "fb3539f5-d3aa-450a-a87a-1c30bed3b920",
    vesselId: "nx--explorer",
    type: "Karaoke",
    location: {
      deck: 8,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "cd115306-d8ba-4638-a061-edde8980bf71",
    vesselId: "nx--explorer",
    type: "Movie Theater",
    location: {
      deck: 10,
      area: "Upper Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
