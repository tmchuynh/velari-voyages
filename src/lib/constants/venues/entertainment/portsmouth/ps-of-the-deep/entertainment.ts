// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "e89f7649-215a-4412-8ecc-27ce9c96d9d8",
    vesselId: "ps--of-the-deep",
    type: "Comedy",
    location: {
      deck: 8,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "a90ca7b8-d7c9-43c5-9de0-85e1b3745ecf",
    vesselId: "ps--of-the-deep",
    type: "Magic Show",
    location: {
      deck: 5,
      area: "Sky Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "4d6bb1f4-6994-4261-b92f-819077626198",
    vesselId: "ps--of-the-deep",
    type: "Karaoke",
    location: {
      deck: 11,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "3d62a0c5-eba8-4c32-a5d3-fe486130555e",
    vesselId: "ps--of-the-deep",
    type: "Nightclub",
    location: {
      deck: 5,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "27e8bc0c-be0a-42dc-819d-a1ff8340a4ef",
    vesselId: "ps--of-the-deep",
    type: "Game Show",
    location: {
      deck: 12,
      area: "Upper Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "699c4528-616f-4366-81e4-39f86e2706c1",
    vesselId: "ps--of-the-deep",
    type: "Dancing",
    location: {
      deck: 8,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
