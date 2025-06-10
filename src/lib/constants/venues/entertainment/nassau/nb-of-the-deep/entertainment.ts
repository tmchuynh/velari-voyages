// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "4461fd23-4272-4f5b-a782-c956ebd5b7ec",
    vesselId: "nb--of-the-deep",
    type: "Game Show",
    location: {
      deck: 13,
      area: "Central Court",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "7a10e3e6-d055-49e9-b443-9b0f42df9815",
    vesselId: "nb--of-the-deep",
    type: "Live Music",
    location: {
      deck: 8,
      area: "Observation Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "3b11741c-79c8-4bbd-9379-ca28b6978349",
    vesselId: "nb--of-the-deep",
    type: "Nightclub",
    location: {
      deck: 7,
      area: "Pool Deck",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "9cdbf6c3-c5f2-4cb6-9787-49ea4b221d97",
    vesselId: "nb--of-the-deep",
    type: "Movie Theater",
    location: {
      deck: 8,
      area: "Sky Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
