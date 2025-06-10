// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "cf63dd05-66e7-4cfa-9c67-8ec5a4432b33",
    vesselId: "mv-the--mariner",
    type: "Comedy",
    location: {
      deck: 8,
      area: "Atrium",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "5cb666a3-471b-4814-8e35-88c05e35cf39",
    vesselId: "mv-the--mariner",
    type: "Game Show",
    location: {
      deck: 8,
      area: "Upper Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "36aeb4e2-1aed-4235-a7c8-1137efbc9dc8",
    vesselId: "mv-the--mariner",
    type: "Live Music",
    location: {
      deck: 12,
      area: "Upper Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "fc5528ef-8586-499c-8689-c64542bb3eb3",
    vesselId: "mv-the--mariner",
    type: "Nightclub",
    location: {
      deck: 9,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  }
];
