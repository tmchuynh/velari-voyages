// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "7ccc9836-69c9-45e0-867c-d50e94e561e8",
    vesselId: "cs-hamburg-voyager",
    type: "Comedy",
    location: {
      deck: 9,
      area: "Entertainment Plaza",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "9a3b9845-cace-4c1e-a7bb-31f498639eb7",
    vesselId: "cs-hamburg-voyager",
    type: "Live Music",
    location: {
      deck: 6,
      area: "Midship Theater",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "70ce6d2e-e54c-493c-bfc3-17f1ca45c0b0",
    vesselId: "cs-hamburg-voyager",
    type: "Game Show",
    location: {
      deck: 5,
      area: "Entertainment Plaza",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "597b1b8b-509c-47f3-9303-34b39ffd572e",
    vesselId: "cs-hamburg-voyager",
    type: "Movie Theater",
    location: {
      deck: 13,
      area: "Observation Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
