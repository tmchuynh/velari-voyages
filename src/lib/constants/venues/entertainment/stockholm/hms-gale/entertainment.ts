// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "7c9e6cab-784c-4f5c-b2a6-e6b8f4d72d8a",
    vesselId: "hms--gale",
    type: "Comedy",
    location: {
      deck: 6,
      area: "Upper Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "462648ef-19a9-4276-8fec-ef49e9f62d4f",
    vesselId: "hms--gale",
    type: "Movie Theater",
    location: {
      deck: 14,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "305b4ad5-736a-4ac5-a5c1-e4b8a068e849",
    vesselId: "hms--gale",
    type: "Game Show",
    location: {
      deck: 12,
      area: "Observation Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "c77e4644-94d6-4c88-9a51-a3436f49bf82",
    vesselId: "hms--gale",
    type: "Nightclub",
    location: {
      deck: 5,
      area: "Observation Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
