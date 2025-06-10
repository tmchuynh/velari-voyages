// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "7509322a-0e8e-4cb7-894e-bc28853db7e5",
    vesselId: "ly--gale",
    type: "Magic Show",
    location: {
      deck: 10,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "137c3e2e-f9e9-42a0-9cfa-6e9959afc483",
    vesselId: "ly--gale",
    type: "Karaoke",
    location: {
      deck: 10,
      area: "Atrium",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "bbb02a7d-12d4-4512-b109-64341d30c58a",
    vesselId: "ly--gale",
    type: "Live Music",
    location: {
      deck: 14,
      area: "Main Theater",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "dbbc5674-830d-436a-94b7-c639d09eeb3a",
    vesselId: "ly--gale",
    type: "Movie Theater",
    location: {
      deck: 8,
      area: "Atrium",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "4bbfcc6d-c3f2-4604-abd2-bff0016eb183",
    vesselId: "ly--gale",
    type: "Dancing",
    location: {
      deck: 6,
      area: "Sky Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
