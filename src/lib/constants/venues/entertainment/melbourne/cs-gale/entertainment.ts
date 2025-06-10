// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "bdf2cc73-caa3-438e-9f39-4c5d618b3d29",
    vesselId: "cs--gale",
    type: "Live Music",
    location: {
      deck: 12,
      area: "Atrium",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "9fb1e086-d0cb-4735-8f9a-0f52fc831fbb",
    vesselId: "cs--gale",
    type: "Magic Show",
    location: {
      deck: 10,
      area: "Atrium",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "15819189-4954-451f-8761-f86c238be5b2",
    vesselId: "cs--gale",
    type: "Karaoke",
    location: {
      deck: 13,
      area: "Forward Lounge",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "53e5e6ab-44cb-4054-89c0-f4db6ba7a739",
    vesselId: "cs--gale",
    type: "Movie Theater",
    location: {
      deck: 12,
      area: "Entertainment Plaza",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "d1c85d4b-c639-4ddd-b199-381f38358d54",
    vesselId: "cs--gale",
    type: "Dancing",
    location: {
      deck: 8,
      area: "Sky Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
