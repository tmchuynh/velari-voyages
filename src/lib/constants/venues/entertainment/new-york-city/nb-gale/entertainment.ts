// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "3876a2d5-c9f2-4cc6-aea1-b515d8e7225d",
    vesselId: "nb--gale",
    type: "Live Music",
    location: {
      deck: 5,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "de2d21a8-9cec-4d1c-8cfd-2305aca4f513",
    vesselId: "nb--gale",
    type: "Nightclub",
    location: {
      deck: 11,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "b0797e41-89c4-4b3a-8fe2-4adfa89ff347",
    vesselId: "nb--gale",
    type: "Dancing",
    location: {
      deck: 11,
      area: "Main Theater",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "a4d74026-da21-4f57-a1e1-3330cf1029d6",
    vesselId: "nb--gale",
    type: "Comedy",
    location: {
      deck: 10,
      area: "Main Theater",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "6c705f31-b9ef-46f1-a10d-4c0cc8885a73",
    vesselId: "nb--gale",
    type: "Game Show",
    location: {
      deck: 14,
      area: "Grand Ballroom",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
