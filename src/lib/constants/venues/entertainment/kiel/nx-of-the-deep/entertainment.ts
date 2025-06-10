// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "6f013d9b-f7ee-4cd1-b678-f6d5a06071ee",
    vesselId: "nx--of-the-deep",
    type: "Magic Show",
    location: {
      deck: 13,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "665b9d46-68c4-4a7a-a820-61767fc16d08",
    vesselId: "nx--of-the-deep",
    type: "Nightclub",
    location: {
      deck: 10,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "aeffbe42-84c5-4cb7-9904-474ade8e6c2e",
    vesselId: "nx--of-the-deep",
    type: "Live Music",
    location: {
      deck: 13,
      area: "Aft Lounge",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "bc1066b3-877a-42bb-80bb-60a2cbe4018d",
    vesselId: "nx--of-the-deep",
    type: "Dancing",
    location: {
      deck: 14,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "730b48fa-549e-44c5-acbd-7b6150f7d9f6",
    vesselId: "nx--of-the-deep",
    type: "Movie Theater",
    location: {
      deck: 14,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "b6213a00-8c46-46ed-8d46-6c6dcf8d7e87",
    vesselId: "nx--of-the-deep",
    type: "Comedy",
    location: {
      deck: 6,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "ff21842f-96cc-432f-a5a9-dda85933bb2d",
    vesselId: "nx--of-the-deep",
    type: "Karaoke",
    location: {
      deck: 8,
      area: "Observation Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "fb24af9c-9fcd-4bb6-a1bc-f25b16425768",
    vesselId: "nx--of-the-deep",
    type: "Game Show",
    location: {
      deck: 10,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
