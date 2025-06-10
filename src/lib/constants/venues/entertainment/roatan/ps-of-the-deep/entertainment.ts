// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "513a3154-f016-4ba8-b60a-d7907dd26518",
    vesselId: "ps--of-the-deep",
    type: "Movie Theater",
    location: {
      deck: 10,
      area: "Entertainment Plaza",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "0b35ed39-8fb6-405b-a2b3-999e6e72c4eb",
    vesselId: "ps--of-the-deep",
    type: "Game Show",
    location: {
      deck: 8,
      area: "Entertainment Plaza",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "df3b49ff-6628-423f-966e-5fd41430e404",
    vesselId: "ps--of-the-deep",
    type: "Comedy",
    location: {
      deck: 13,
      area: "Central Court",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "7ed45633-6564-4211-be15-ac4ada569dcd",
    vesselId: "ps--of-the-deep",
    type: "Magic Show",
    location: {
      deck: 12,
      area: "Upper Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "301f4888-2848-4733-9795-fbbb1dda0988",
    vesselId: "ps--of-the-deep",
    type: "Dancing",
    location: {
      deck: 8,
      area: "Main Theater",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
