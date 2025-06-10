// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "fb77bd18-1987-41b5-bcab-b7114fec25c5",
    vesselId: "nb--of-the-deep",
    type: "Karaoke",
    location: {
      deck: 8,
      area: "Atrium",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "37f79c80-a205-466e-bf76-4153f0c6542c",
    vesselId: "nb--of-the-deep",
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
    id: "3b067aab-883c-4622-9a7f-c3fbd2d352a2",
    vesselId: "nb--of-the-deep",
    type: "Dancing",
    location: {
      deck: 6,
      area: "Observation Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "12e433b9-049e-4d7d-aa9f-bde2b50955cc",
    vesselId: "nb--of-the-deep",
    type: "Live Music",
    location: {
      deck: 5,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
