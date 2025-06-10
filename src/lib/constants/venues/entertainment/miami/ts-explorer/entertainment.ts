// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "9adf1411-a208-463c-a1a3-8966b88e05fb",
    vesselId: "ts--explorer",
    type: "Comedy",
    location: {
      deck: 6,
      area: "Entertainment Plaza",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "01b26d68-bb35-4a4b-bb5a-510d6e3b0e14",
    vesselId: "ts--explorer",
    type: "Dancing",
    location: {
      deck: 5,
      area: "Pool Deck",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "163b4532-da70-4c65-a1dc-988038051af1",
    vesselId: "ts--explorer",
    type: "Magic Show",
    location: {
      deck: 5,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "91ad5a0d-f829-4624-98a6-97fdcacf2ceb",
    vesselId: "ts--explorer",
    type: "Live Music",
    location: {
      deck: 12,
      area: "Entertainment Plaza",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "f3f200cc-28ae-4d7c-891b-ec478da8e361",
    vesselId: "ts--explorer",
    type: "Movie Theater",
    location: {
      deck: 13,
      area: "Atrium",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "97d345ac-9a37-4297-92c1-ddf6a6038cb4",
    vesselId: "ts--explorer",
    type: "Nightclub",
    location: {
      deck: 11,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
