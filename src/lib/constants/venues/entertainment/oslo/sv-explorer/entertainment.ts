// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "6507ad3a-5a11-4280-a73c-16fae95e4e29",
    vesselId: "sv--explorer",
    type: "Live Music",
    location: {
      deck: 5,
      area: "Sky Deck",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "74d302f3-2d91-4383-8ea4-7aa6be8de489",
    vesselId: "sv--explorer",
    type: "Karaoke",
    location: {
      deck: 13,
      area: "Observation Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "b2608863-f39e-4f2c-9b45-07ec58d5cd25",
    vesselId: "sv--explorer",
    type: "Dancing",
    location: {
      deck: 6,
      area: "Atrium",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "12e5063b-7922-4c42-9e87-8072ecda91e1",
    vesselId: "sv--explorer",
    type: "Magic Show",
    location: {
      deck: 8,
      area: "Entertainment Plaza",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "52aad122-0905-4cda-ae9a-ffee75539d1f",
    vesselId: "sv--explorer",
    type: "Movie Theater",
    location: {
      deck: 9,
      area: "Upper Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "100af5a4-49ed-4277-94a9-0fdafb963b21",
    vesselId: "sv--explorer",
    type: "Comedy",
    location: {
      deck: 7,
      area: "Atrium",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
