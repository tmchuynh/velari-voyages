// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "307c4dfb-e4e2-4e25-a475-63c763a1b822",
    vesselId: "rms--explorer",
    type: "Live Music",
    location: {
      deck: 15,
      area: "Main Theater",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "8d08d315-5731-4ab5-b2f3-32a2db8e27e6",
    vesselId: "rms--explorer",
    type: "Dancing",
    location: {
      deck: 5,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "feb79e42-6918-4c69-a5bd-16bdf904c241",
    vesselId: "rms--explorer",
    type: "Magic Show",
    location: {
      deck: 7,
      area: "Atrium",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "f66fcf0c-e07e-404b-a0bf-392989d84f58",
    vesselId: "rms--explorer",
    type: "Comedy",
    location: {
      deck: 5,
      area: "Midship Theater",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
