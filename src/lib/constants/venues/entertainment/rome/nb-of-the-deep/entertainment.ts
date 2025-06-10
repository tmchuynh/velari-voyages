// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "26707ee5-7df2-4a26-a618-f140a97f3da9",
    vesselId: "nb--of-the-deep",
    type: "Nightclub",
    location: {
      deck: 5,
      area: "Sky Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "dcbcb450-1ae9-4286-9e8d-c96eabb7d756",
    vesselId: "nb--of-the-deep",
    type: "Game Show",
    location: {
      deck: 15,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "38a9d33c-9bb9-437d-ae40-565b23d0f681",
    vesselId: "nb--of-the-deep",
    type: "Dancing",
    location: {
      deck: 11,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "0a5261f6-07c0-4777-b544-0be669400a48",
    vesselId: "nb--of-the-deep",
    type: "Karaoke",
    location: {
      deck: 9,
      area: "Main Theater",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "dab6230b-613f-44fa-ba75-922a7a3d3895",
    vesselId: "nb--of-the-deep",
    type: "Live Music",
    location: {
      deck: 12,
      area: "Central Court",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "9a901b64-bbcd-418f-ab9b-7ec7bce619f5",
    vesselId: "nb--of-the-deep",
    type: "Movie Theater",
    location: {
      deck: 7,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
