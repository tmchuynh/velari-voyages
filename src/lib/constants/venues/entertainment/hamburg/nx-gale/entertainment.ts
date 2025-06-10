// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "15e16ca8-b730-473b-ae43-79fdbdf06b0e",
    vesselId: "nx--gale",
    type: "Comedy",
    location: {
      deck: 10,
      area: "Sky Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "e11fed4e-430c-4526-88ba-2d5b14e52699",
    vesselId: "nx--gale",
    type: "Dancing",
    location: {
      deck: 15,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "a59ad2b4-03a5-46bf-9f35-926f5614012b",
    vesselId: "nx--gale",
    type: "Karaoke",
    location: {
      deck: 10,
      area: "Sky Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "f629f389-2354-4520-bb69-309a04a206c1",
    vesselId: "nx--gale",
    type: "Nightclub",
    location: {
      deck: 10,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
