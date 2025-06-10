// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "b05bb4fe-ec5c-40f0-8019-d6210cc235e7",
    vesselId: "cs--of-the-deep",
    type: "Movie Theater",
    location: {
      deck: 12,
      area: "Sky Deck",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "5ff0fef0-953b-4dcf-be1e-05bb9202133f",
    vesselId: "cs--of-the-deep",
    type: "Nightclub",
    location: {
      deck: 8,
      area: "Main Theater",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "fb8f5cef-5119-4cbe-ac1d-f3c243e34e99",
    vesselId: "cs--of-the-deep",
    type: "Magic Show",
    location: {
      deck: 6,
      area: "Central Court",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "f43db6d8-c7cc-48af-92ec-066d3de2f822",
    vesselId: "cs--of-the-deep",
    type: "Comedy",
    location: {
      deck: 9,
      area: "Upper Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "83d99cc2-aa02-4e7e-abd6-f724d5f48ea2",
    vesselId: "cs--of-the-deep",
    type: "Dancing",
    location: {
      deck: 10,
      area: "Forward Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "278744a9-d522-4bea-984f-85adb56ef276",
    vesselId: "cs--of-the-deep",
    type: "Live Music",
    location: {
      deck: 6,
      area: "Atrium",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
