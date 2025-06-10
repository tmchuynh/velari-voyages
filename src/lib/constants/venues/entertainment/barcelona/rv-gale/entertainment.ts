// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "fc2ce0ab-030d-4e6a-9b9c-ce32f4b7ed11",
    vesselId: "rv--gale",
    type: "Live Music",
    location: {
      deck: 9,
      area: "Observation Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "f9d9d435-7260-4589-abd9-e6d131715010",
    vesselId: "rv--gale",
    type: "Dancing",
    location: {
      deck: 6,
      area: "Pool Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "a6b9fc7d-f4b3-4275-905c-0d3c5e00378b",
    vesselId: "rv--gale",
    type: "Karaoke",
    location: {
      deck: 9,
      area: "Forward Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "3a288389-dca6-4629-b6b6-0725a2e1cfba",
    vesselId: "rv--gale",
    type: "Comedy",
    location: {
      deck: 14,
      area: "Sky Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "53f27211-9f32-4404-be21-af00ef6fe01d",
    vesselId: "rv--gale",
    type: "Movie Theater",
    location: {
      deck: 13,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "c0e8c837-bb37-41df-8383-62af90a7cf3e",
    vesselId: "rv--gale",
    type: "Game Show",
    location: {
      deck: 10,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
