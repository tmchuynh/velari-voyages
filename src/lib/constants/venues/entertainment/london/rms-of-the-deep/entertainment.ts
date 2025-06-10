// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "f4f95c30-9bf2-4747-b850-cb8d81ec75c6",
    vesselId: "rms--of-the-deep",
    type: "Live Music",
    location: {
      deck: 14,
      area: "Forward Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "20f65f6c-f79d-4bc7-a4cc-cc0dc8e00cfe",
    vesselId: "rms--of-the-deep",
    type: "Dancing",
    location: {
      deck: 14,
      area: "Main Theater",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "f0607031-df98-4ac2-99ca-61accaeb11db",
    vesselId: "rms--of-the-deep",
    type: "Karaoke",
    location: {
      deck: 5,
      area: "Observation Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "41c25949-e83d-4f4c-a610-3505939e454f",
    vesselId: "rms--of-the-deep",
    type: "Nightclub",
    location: {
      deck: 12,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "f5cf44ba-81e2-458d-a974-1dae155ef8a0",
    vesselId: "rms--of-the-deep",
    type: "Game Show",
    location: {
      deck: 15,
      area: "Forward Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
