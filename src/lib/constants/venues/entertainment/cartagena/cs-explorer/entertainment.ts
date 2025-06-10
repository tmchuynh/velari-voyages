// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "c8bacff6-1f24-4dc5-8fbe-015be517db79",
    vesselId: "cs--explorer",
    type: "Live Music",
    location: {
      deck: 9,
      area: "Upper Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "5a7ef27c-386e-4092-87d0-c975512f03d6",
    vesselId: "cs--explorer",
    type: "Karaoke",
    location: {
      deck: 7,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "adac5e67-4fb7-43a8-9ba1-a08ef3efa0a6",
    vesselId: "cs--explorer",
    type: "Nightclub",
    location: {
      deck: 15,
      area: "Entertainment Plaza",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "ac5af512-b3bb-4983-b3a1-915041f0242d",
    vesselId: "cs--explorer",
    type: "Game Show",
    location: {
      deck: 9,
      area: "Upper Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "012ba5f6-7498-4691-9fca-542d6258a09f",
    vesselId: "cs--explorer",
    type: "Comedy",
    location: {
      deck: 15,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "6b69a3a9-a7f8-493b-8513-0e8c3475a07e",
    vesselId: "cs--explorer",
    type: "Movie Theater",
    location: {
      deck: 8,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
