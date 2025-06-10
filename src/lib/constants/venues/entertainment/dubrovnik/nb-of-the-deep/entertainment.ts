// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "329d4767-9991-47d0-8036-eed7b9c63e58",
    vesselId: "nb--of-the-deep",
    type: "Movie Theater",
    location: {
      deck: 13,
      area: "Forward Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "3e1f4bff-2ef2-4b6b-a62d-ee9294b8c026",
    vesselId: "nb--of-the-deep",
    type: "Live Music",
    location: {
      deck: 8,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "f25923f6-3588-425f-9f79-b540973ce601",
    vesselId: "nb--of-the-deep",
    type: "Dancing",
    location: {
      deck: 9,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "826cb120-8b74-4703-b825-9eceffcfe9a9",
    vesselId: "nb--of-the-deep",
    type: "Game Show",
    location: {
      deck: 10,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "d0b54d72-d1d3-44f9-b43f-55f9da22ccb4",
    vesselId: "nb--of-the-deep",
    type: "Magic Show",
    location: {
      deck: 5,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
