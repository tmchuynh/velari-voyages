// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "71cbd414-db5e-46a5-b4d4-34d872ff3f2a",
    vesselId: "ts-the--mariner",
    type: "Karaoke",
    location: {
      deck: 14,
      area: "Observation Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "0c5fb2b4-c7a9-4b80-8784-35122013f6b3",
    vesselId: "ts-the--mariner",
    type: "Game Show",
    location: {
      deck: 12,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "b8fa7b90-4a93-49f0-a2cc-a1a0376be4ac",
    vesselId: "ts-the--mariner",
    type: "Nightclub",
    location: {
      deck: 15,
      area: "Observation Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "51f78da7-859a-46dc-896d-5ef96ea60d3d",
    vesselId: "ts-the--mariner",
    type: "Magic Show",
    location: {
      deck: 9,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "6ee5b629-5b7d-4694-a96f-6983bc581296",
    vesselId: "ts-the--mariner",
    type: "Comedy",
    location: {
      deck: 5,
      area: "Observation Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
