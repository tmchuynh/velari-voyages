// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "732429ac-4a29-4740-a2e9-637fc42f2c2f",
    vesselId: "mv--explorer",
    type: "Game Show",
    location: {
      deck: 8,
      area: "Sky Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "28219576-2719-4100-a4bb-f837a0d8dee0",
    vesselId: "mv--explorer",
    type: "Live Music",
    location: {
      deck: 10,
      area: "Atrium",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "4b861d18-8c5d-425c-a7fe-54dd3b78feb9",
    vesselId: "mv--explorer",
    type: "Comedy",
    location: {
      deck: 6,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "5039a98c-f701-4ad4-a605-e2c90bef04c7",
    vesselId: "mv--explorer",
    type: "Movie Theater",
    location: {
      deck: 9,
      area: "Sky Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "a6e54a05-8976-4538-8e66-cd1b95a29ace",
    vesselId: "mv--explorer",
    type: "Nightclub",
    location: {
      deck: 11,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "a094c463-61fa-40a7-b4fe-028bf66d0cd8",
    vesselId: "mv--explorer",
    type: "Dancing",
    location: {
      deck: 5,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
