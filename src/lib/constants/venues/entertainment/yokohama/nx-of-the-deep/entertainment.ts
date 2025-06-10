// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "3180c735-08a2-4bda-81c5-cb32348006a8",
    vesselId: "nx--of-the-deep",
    type: "Game Show",
    location: {
      deck: 11,
      area: "Central Court",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "bcf5ee81-8720-41d7-a8ed-7d111e6bf12d",
    vesselId: "nx--of-the-deep",
    type: "Live Music",
    location: {
      deck: 6,
      area: "Sky Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "bf002cc7-5a06-4545-bfee-631ea6576ba2",
    vesselId: "nx--of-the-deep",
    type: "Magic Show",
    location: {
      deck: 7,
      area: "Upper Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "5d195fd6-5a2b-495c-ab5e-64c80de62790",
    vesselId: "nx--of-the-deep",
    type: "Movie Theater",
    location: {
      deck: 15,
      area: "Sky Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "ea3b9227-8b4d-4442-88e4-d3da77276117",
    vesselId: "nx--of-the-deep",
    type: "Karaoke",
    location: {
      deck: 15,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "ff3f3248-c1de-47a6-adda-e487cdb6ec29",
    vesselId: "nx--of-the-deep",
    type: "Comedy",
    location: {
      deck: 15,
      area: "Entertainment Plaza",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
