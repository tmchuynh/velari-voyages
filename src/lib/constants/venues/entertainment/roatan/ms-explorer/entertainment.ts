// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "140318fb-8e7a-4e77-91fe-7cf44bb0b372",
    vesselId: "ms--explorer",
    type: "Game Show",
    location: {
      deck: 7,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "040438a9-85ec-45a9-add2-b5e00900e9de",
    vesselId: "ms--explorer",
    type: "Magic Show",
    location: {
      deck: 9,
      area: "Pool Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "2d7bbc9d-ae23-4033-8a82-89402e9c1462",
    vesselId: "ms--explorer",
    type: "Nightclub",
    location: {
      deck: 5,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "9f8570d7-3533-4e84-a291-aeaee8a1a92e",
    vesselId: "ms--explorer",
    type: "Comedy",
    location: {
      deck: 15,
      area: "Atrium",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
