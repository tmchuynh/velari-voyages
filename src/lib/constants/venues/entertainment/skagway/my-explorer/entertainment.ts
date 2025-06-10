// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "dcd43f23-6036-497f-a2b9-f1c84c7b5011",
    vesselId: "my--explorer",
    type: "Nightclub",
    location: {
      deck: 10,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "7166d670-0203-4db6-b00e-93d860ff2a30",
    vesselId: "my--explorer",
    type: "Game Show",
    location: {
      deck: 13,
      area: "Upper Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "7002ab3d-2653-4bb0-81f7-df5df4d89386",
    vesselId: "my--explorer",
    type: "Comedy",
    location: {
      deck: 7,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "b004f5fb-e222-4140-aa3b-72aeec24eed0",
    vesselId: "my--explorer",
    type: "Live Music",
    location: {
      deck: 5,
      area: "Entertainment Plaza",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
