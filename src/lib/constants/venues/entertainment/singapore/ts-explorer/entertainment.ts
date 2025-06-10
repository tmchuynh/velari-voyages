// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "1f8ef53d-0c5d-4ab3-b218-67a7d57e3362",
    vesselId: "ts--explorer",
    type: "Movie Theater",
    location: {
      deck: 14,
      area: "Aft Lounge",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "e939dde8-5c19-4054-9cbf-c902f6347989",
    vesselId: "ts--explorer",
    type: "Magic Show",
    location: {
      deck: 5,
      area: "Atrium",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "9fdf6ecc-ae9c-4dd5-91c8-1543ac7fc918",
    vesselId: "ts--explorer",
    type: "Game Show",
    location: {
      deck: 13,
      area: "Grand Ballroom",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "ebf4cb78-a2f9-468a-aecc-c20931ecb62d",
    vesselId: "ts--explorer",
    type: "Comedy",
    location: {
      deck: 11,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  }
];
