// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "eac41fae-f921-4ad9-9c9d-c4749498c838",
    vesselId: "sy--gale",
    type: "Game Show",
    location: {
      deck: 7,
      area: "Upper Deck",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "5d3f21bd-5134-4f7e-90c7-718e90a41f4c",
    vesselId: "sy--gale",
    type: "Movie Theater",
    location: {
      deck: 12,
      area: "Atrium",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "e6315898-f335-46e3-9d91-5cdd38cb40c6",
    vesselId: "sy--gale",
    type: "Nightclub",
    location: {
      deck: 9,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "2a3ef44b-5986-488a-bb36-7982b80217fe",
    vesselId: "sy--gale",
    type: "Magic Show",
    location: {
      deck: 13,
      area: "Upper Deck",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: false,
  }
];
