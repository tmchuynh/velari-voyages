// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "0e04885f-3ba7-4cb3-9b5b-4bc2a69b286b",
    vesselId: "nb-lisbon-voyager",
    type: "Live Music",
    location: {
      deck: 9,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "4637f0d5-9e45-463b-930a-9503763de23c",
    vesselId: "nb-lisbon-voyager",
    type: "Game Show",
    location: {
      deck: 12,
      area: "Observation Deck",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "ef26396d-8789-4163-b199-3c3d6cfe33a6",
    vesselId: "nb-lisbon-voyager",
    type: "Magic Show",
    location: {
      deck: 10,
      area: "Upper Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "4067c203-9b5e-47b0-9cfb-2fcb2d10467f",
    vesselId: "nb-lisbon-voyager",
    type: "Comedy",
    location: {
      deck: 6,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "0564dd82-4bc6-46b9-8b6a-8e5dd6b428f6",
    vesselId: "nb-lisbon-voyager",
    type: "Movie Theater",
    location: {
      deck: 7,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
