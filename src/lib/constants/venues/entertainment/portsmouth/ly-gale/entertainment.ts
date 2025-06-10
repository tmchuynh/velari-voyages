// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "15cacf6b-d7b0-4fdb-b641-a8a613f9b311",
    vesselId: "ly--gale",
    type: "Nightclub",
    location: {
      deck: 8,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "e2550e28-d494-4780-92fb-685108eeae30",
    vesselId: "ly--gale",
    type: "Karaoke",
    location: {
      deck: 8,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "31500a9b-701f-4945-970f-47b2d88a74c6",
    vesselId: "ly--gale",
    type: "Magic Show",
    location: {
      deck: 6,
      area: "Forward Lounge",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "8eef02b8-fc66-4d38-8175-d2d557a56420",
    vesselId: "ly--gale",
    type: "Game Show",
    location: {
      deck: 8,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "dab3b757-797b-43a7-89c9-afcb2f669b45",
    vesselId: "ly--gale",
    type: "Movie Theater",
    location: {
      deck: 15,
      area: "Entertainment Plaza",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "a9b27f88-c8c5-4063-9e3c-c7893d76420f",
    vesselId: "ly--gale",
    type: "Comedy",
    location: {
      deck: 8,
      area: "Observation Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
