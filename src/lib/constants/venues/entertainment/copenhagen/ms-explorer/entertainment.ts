// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "d3773c38-086c-46ce-bb29-4a9478daabeb",
    vesselId: "ms--explorer",
    type: "Magic Show",
    location: {
      deck: 8,
      area: "Central Court",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "f0aec992-bb3e-47dd-b0ad-8e9419053080",
    vesselId: "ms--explorer",
    type: "Nightclub",
    location: {
      deck: 13,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "ea897507-4011-42f6-a5bc-d8358aff711d",
    vesselId: "ms--explorer",
    type: "Live Music",
    location: {
      deck: 10,
      area: "Sky Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "a1cde0ce-c5c2-4b47-bb8f-614eaa56bc3f",
    vesselId: "ms--explorer",
    type: "Dancing",
    location: {
      deck: 13,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "d59ebf44-8e03-43a9-8e78-ec595b609c88",
    vesselId: "ms--explorer",
    type: "Comedy",
    location: {
      deck: 7,
      area: "Upper Deck",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "d2ac8cb4-a134-4492-abd2-b9f5f100acc5",
    vesselId: "ms--explorer",
    type: "Game Show",
    location: {
      deck: 6,
      area: "Observation Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
