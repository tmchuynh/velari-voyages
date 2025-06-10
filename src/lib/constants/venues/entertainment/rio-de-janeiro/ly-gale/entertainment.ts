// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "58eadb60-c3e9-4a10-a741-666452baacaf",
    vesselId: "ly--gale",
    type: "Comedy",
    location: {
      deck: 8,
      area: "Pool Deck",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "ea2e9128-9a4e-4f4c-a319-ff56d1c47df9",
    vesselId: "ly--gale",
    type: "Game Show",
    location: {
      deck: 6,
      area: "Forward Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "d6d697a0-f9f7-4045-9f72-c3f413427e5e",
    vesselId: "ly--gale",
    type: "Movie Theater",
    location: {
      deck: 8,
      area: "Atrium",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "b7899437-19f1-4911-bf42-c5c47225bc81",
    vesselId: "ly--gale",
    type: "Karaoke",
    location: {
      deck: 11,
      area: "Grand Ballroom",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: false,
  }
];
