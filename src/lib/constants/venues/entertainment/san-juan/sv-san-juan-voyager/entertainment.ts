// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "98fa7197-b21e-4ce1-bef2-38b708031019",
    vesselId: "sv-san-juan-voyager",
    type: "Movie Theater",
    location: {
      deck: 13,
      area: "Entertainment Plaza",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "a5cff384-3b38-4978-a778-7f70a70cb833",
    vesselId: "sv-san-juan-voyager",
    type: "Live Music",
    location: {
      deck: 12,
      area: "Midship Theater",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "97bdaa30-9f76-4bac-a694-f66c8fcb5034",
    vesselId: "sv-san-juan-voyager",
    type: "Dancing",
    location: {
      deck: 7,
      area: "Sky Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "fd2c16d8-8928-402e-9266-fe8e833b338b",
    vesselId: "sv-san-juan-voyager",
    type: "Nightclub",
    location: {
      deck: 14,
      area: "Sky Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
