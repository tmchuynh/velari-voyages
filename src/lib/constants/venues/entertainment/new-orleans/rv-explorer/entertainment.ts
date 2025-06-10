// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "0e9c284d-c9f2-40c6-825d-cd120be932b3",
    vesselId: "rv--explorer",
    type: "Nightclub",
    location: {
      deck: 8,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "f5bdafed-b29a-48a4-9b2b-dde8d958869c",
    vesselId: "rv--explorer",
    type: "Comedy",
    location: {
      deck: 15,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "ff3ede16-1590-44c3-ace6-e76a7d77c422",
    vesselId: "rv--explorer",
    type: "Magic Show",
    location: {
      deck: 8,
      area: "Sky Deck",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "407b80dd-091e-4786-b2d0-a10bfe990f04",
    vesselId: "rv--explorer",
    type: "Dancing",
    location: {
      deck: 15,
      area: "Entertainment Plaza",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: false,
  }
];
