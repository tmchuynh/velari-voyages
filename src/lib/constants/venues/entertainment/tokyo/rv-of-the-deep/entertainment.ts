// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "05d3650c-03b9-4005-8ed4-5bdbc0096c0b",
    vesselId: "rv--of-the-deep",
    type: "Game Show",
    location: {
      deck: 12,
      area: "Entertainment Plaza",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "e3cab534-c21c-4ea3-b121-ea63a80042a9",
    vesselId: "rv--of-the-deep",
    type: "Live Music",
    location: {
      deck: 10,
      area: "Atrium",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "d15e2a37-fc40-4f21-ac55-df5d0e7ba4c5",
    vesselId: "rv--of-the-deep",
    type: "Dancing",
    location: {
      deck: 9,
      area: "Grand Ballroom",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "670c894d-7600-44a4-8b51-593679fb1de8",
    vesselId: "rv--of-the-deep",
    type: "Magic Show",
    location: {
      deck: 15,
      area: "Main Theater",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "15bc6585-5f99-443c-86ba-aaf50efcccde",
    vesselId: "rv--of-the-deep",
    type: "Comedy",
    location: {
      deck: 9,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
