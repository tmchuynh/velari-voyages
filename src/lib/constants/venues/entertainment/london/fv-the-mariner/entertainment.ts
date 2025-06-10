// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "55076e49-94dc-490c-94cc-e21f976e4e15",
    vesselId: "fv-the--mariner",
    type: "Dancing",
    location: {
      deck: 8,
      area: "Observation Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "a1ccc8ee-c42c-418a-bf45-6324952032ac",
    vesselId: "fv-the--mariner",
    type: "Live Music",
    location: {
      deck: 11,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "f87c2d49-75c5-441e-9acf-8a9c1a63c4bd",
    vesselId: "fv-the--mariner",
    type: "Movie Theater",
    location: {
      deck: 9,
      area: "Entertainment Plaza",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "4a86b403-c0d5-49d6-8bb5-8258c6af05f9",
    vesselId: "fv-the--mariner",
    type: "Nightclub",
    location: {
      deck: 13,
      area: "Pool Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "fab255fa-3cba-4a58-ae1d-3c657645f7eb",
    vesselId: "fv-the--mariner",
    type: "Comedy",
    location: {
      deck: 5,
      area: "Atrium",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
