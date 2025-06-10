// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "bddb70bb-e32c-4b5a-b914-4d4896aff9fc",
    vesselId: "ss--of-the-deep",
    type: "Nightclub",
    location: {
      deck: 10,
      area: "Sky Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "6e0b1783-788b-4972-a179-5e9819b09e81",
    vesselId: "ss--of-the-deep",
    type: "Magic Show",
    location: {
      deck: 9,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "68749ca0-0d3e-4077-aa3f-f7879923851d",
    vesselId: "ss--of-the-deep",
    type: "Live Music",
    location: {
      deck: 7,
      area: "Observation Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "0e18433b-f97c-462f-8ced-26c854fc61e5",
    vesselId: "ss--of-the-deep",
    type: "Movie Theater",
    location: {
      deck: 14,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
