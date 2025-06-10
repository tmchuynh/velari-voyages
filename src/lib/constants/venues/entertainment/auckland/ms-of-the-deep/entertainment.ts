// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "ae42ebc8-e3d4-4a14-86c2-bf8233a88d84",
    vesselId: "ms--of-the-deep",
    type: "Nightclub",
    location: {
      deck: 13,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "19d6658f-878c-4bd5-8abf-2ddaf948654b",
    vesselId: "ms--of-the-deep",
    type: "Comedy",
    location: {
      deck: 6,
      area: "Observation Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "2c1ed73b-5afc-4b68-a471-240a5e29689a",
    vesselId: "ms--of-the-deep",
    type: "Karaoke",
    location: {
      deck: 6,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "ba8f1370-3140-4417-af63-83cb71507eaf",
    vesselId: "ms--of-the-deep",
    type: "Movie Theater",
    location: {
      deck: 11,
      area: "Upper Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "20556971-835a-412e-9c8a-45998c80f1cb",
    vesselId: "ms--of-the-deep",
    type: "Dancing",
    location: {
      deck: 5,
      area: "Main Theater",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
