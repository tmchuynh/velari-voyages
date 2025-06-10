// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "277983bb-2a34-41b1-9746-f65b0b0d3ba4",
    vesselId: "nx--gale",
    type: "Dancing",
    location: {
      deck: 14,
      area: "Observation Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "3fe4e228-0227-4898-bafc-3677af67c701",
    vesselId: "nx--gale",
    type: "Game Show",
    location: {
      deck: 10,
      area: "Atrium",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "6f9993d3-36cd-4855-8610-df87dff7f808",
    vesselId: "nx--gale",
    type: "Movie Theater",
    location: {
      deck: 5,
      area: "Sky Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "d320528d-54e3-4f1c-80f8-c129eda0182e",
    vesselId: "nx--gale",
    type: "Nightclub",
    location: {
      deck: 6,
      area: "Forward Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "80bd8eb5-d0b8-4012-b899-262f0fdd4e52",
    vesselId: "nx--gale",
    type: "Magic Show",
    location: {
      deck: 9,
      area: "Grand Ballroom",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "11fc94c9-eefb-4db9-babf-c3e850d11e7b",
    vesselId: "nx--gale",
    type: "Live Music",
    location: {
      deck: 8,
      area: "Observation Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
