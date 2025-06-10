// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "598d0693-84a5-4795-9b1a-c4822ffc540f",
    vesselId: "nx-tampa-voyager",
    type: "Dancing",
    location: {
      deck: 5,
      area: "Forward Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "1e291c93-d5cf-4df0-970a-ceeaa899e809",
    vesselId: "nx-tampa-voyager",
    type: "Magic Show",
    location: {
      deck: 12,
      area: "Atrium",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "876e7172-bc1b-4d5a-ba0d-6ad804739237",
    vesselId: "nx-tampa-voyager",
    type: "Game Show",
    location: {
      deck: 14,
      area: "Midship Theater",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "31d12e0f-e015-4332-8ebc-f0a6d90bed5f",
    vesselId: "nx-tampa-voyager",
    type: "Movie Theater",
    location: {
      deck: 7,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "da82b575-b0c0-4342-9523-1c40db9d601f",
    vesselId: "nx-tampa-voyager",
    type: "Live Music",
    location: {
      deck: 13,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "032557b0-f854-44f5-81ba-7ab24be77cee",
    vesselId: "nx-tampa-voyager",
    type: "Comedy",
    location: {
      deck: 11,
      area: "Observation Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
