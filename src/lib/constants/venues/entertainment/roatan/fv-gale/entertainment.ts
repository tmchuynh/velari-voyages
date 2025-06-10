// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "ea7f2fca-b7e4-4ef0-8c8e-f1c8ae8aff21",
    vesselId: "fv--gale",
    type: "Live Music",
    location: {
      deck: 13,
      area: "Sky Deck",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "a47737a2-a168-441d-ab4c-6f09cbb0a491",
    vesselId: "fv--gale",
    type: "Dancing",
    location: {
      deck: 8,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "93215869-8259-4973-bf19-9c4389df79f0",
    vesselId: "fv--gale",
    type: "Comedy",
    location: {
      deck: 9,
      area: "Entertainment Plaza",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "14aea12b-e214-40fc-8239-1bb249da4797",
    vesselId: "fv--gale",
    type: "Game Show",
    location: {
      deck: 12,
      area: "Entertainment Plaza",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "23af2f49-eaec-46ff-b3ab-f5b1eaaf6865",
    vesselId: "fv--gale",
    type: "Movie Theater",
    location: {
      deck: 9,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: false,
  }
];
