// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "45d1861a-828e-4765-a5f8-3dde444ff901",
    vesselId: "rms--of-the-deep",
    type: "Dancing",
    location: {
      deck: 6,
      area: "Entertainment Plaza",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "a314fb43-b75b-4887-bdf4-cb262fb9b408",
    vesselId: "rms--of-the-deep",
    type: "Live Music",
    location: {
      deck: 11,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "fb920205-1a08-4304-88a7-6d4b01ecc326",
    vesselId: "rms--of-the-deep",
    type: "Karaoke",
    location: {
      deck: 9,
      area: "Atrium",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "cc374b3c-8e8f-4ff9-8720-7757aeb19128",
    vesselId: "rms--of-the-deep",
    type: "Magic Show",
    location: {
      deck: 9,
      area: "Entertainment Plaza",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "5e33eef6-bfb5-4b12-8ef0-cd046fd42837",
    vesselId: "rms--of-the-deep",
    type: "Movie Theater",
    location: {
      deck: 6,
      area: "Atrium",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "3d95f54b-8264-425b-8dcc-42f587afa1ce",
    vesselId: "rms--of-the-deep",
    type: "Nightclub",
    location: {
      deck: 14,
      area: "Central Court",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: false,
  }
];
