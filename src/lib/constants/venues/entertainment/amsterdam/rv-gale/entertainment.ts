// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "2052e2de-eb44-407c-b903-0806925bb4f0",
    vesselId: "rv--gale",
    type: "Live Music",
    location: {
      deck: 14,
      area: "Upper Deck",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "2c62acea-d03b-47df-a083-136314eb3e2a",
    vesselId: "rv--gale",
    type: "Dancing",
    location: {
      deck: 5,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "24cc68d0-2c96-4f35-b4ea-5eb582d8b423",
    vesselId: "rv--gale",
    type: "Nightclub",
    location: {
      deck: 13,
      area: "Observation Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "0145f168-a63c-4d07-97d9-a58d42aafe50",
    vesselId: "rv--gale",
    type: "Comedy",
    location: {
      deck: 15,
      area: "Sky Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  }
];
