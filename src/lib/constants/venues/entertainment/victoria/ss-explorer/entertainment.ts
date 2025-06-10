// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "0628470a-f898-4766-af04-1a9c05b2cf39",
    vesselId: "ss--explorer",
    type: "Live Music",
    location: {
      deck: 5,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "46f27a74-f9c0-499a-b6b8-bf88e73714a3",
    vesselId: "ss--explorer",
    type: "Nightclub",
    location: {
      deck: 7,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "dfea4d29-15be-4171-a634-257c6eaa6a55",
    vesselId: "ss--explorer",
    type: "Game Show",
    location: {
      deck: 14,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "876163d3-013e-4420-ac8a-b2580a1f3e9e",
    vesselId: "ss--explorer",
    type: "Dancing",
    location: {
      deck: 6,
      area: "Upper Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "d74e3732-44f4-4ff2-b3df-70db5b9ffc79",
    vesselId: "ss--explorer",
    type: "Magic Show",
    location: {
      deck: 7,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
