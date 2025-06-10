// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "7b581023-08a5-48fd-b557-41929f9d06ab",
    vesselId: "cs--gale",
    type: "Nightclub",
    location: {
      deck: 6,
      area: "Forward Lounge",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "8a615afb-0e2b-4fa6-8aea-708840fc0007",
    vesselId: "cs--gale",
    type: "Movie Theater",
    location: {
      deck: 7,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "994c555e-23d7-472a-bda8-fa7b0d3b83f1",
    vesselId: "cs--gale",
    type: "Dancing",
    location: {
      deck: 14,
      area: "Aft Lounge",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "be501fdf-96dd-4488-8cdb-d9f8cf873f83",
    vesselId: "cs--gale",
    type: "Magic Show",
    location: {
      deck: 15,
      area: "Entertainment Plaza",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "dea583e1-81bc-4357-873c-3773f2472f55",
    vesselId: "cs--gale",
    type: "Game Show",
    location: {
      deck: 13,
      area: "Sky Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "c2be9327-358a-4e0b-83e0-1a31e12ec028",
    vesselId: "cs--gale",
    type: "Karaoke",
    location: {
      deck: 13,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
