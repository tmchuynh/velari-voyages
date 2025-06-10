// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "b88782e7-83bb-4e70-b481-370516f0085a",
    vesselId: "rv--of-the-deep",
    type: "Game Show",
    location: {
      deck: 14,
      area: "Entertainment Plaza",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "0c166a4b-52e2-44e3-adce-fd9bad7fca28",
    vesselId: "rv--of-the-deep",
    type: "Live Music",
    location: {
      deck: 10,
      area: "Central Court",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "a67a7c92-db78-44e8-bbe2-eded74ec690a",
    vesselId: "rv--of-the-deep",
    type: "Nightclub",
    location: {
      deck: 14,
      area: "Grand Ballroom",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "419374bf-4871-496f-8eac-ca55b28df8a4",
    vesselId: "rv--of-the-deep",
    type: "Karaoke",
    location: {
      deck: 11,
      area: "Forward Lounge",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "7452b145-243d-40c1-adec-3970e5448122",
    vesselId: "rv--of-the-deep",
    type: "Comedy",
    location: {
      deck: 12,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "4d14541c-d107-4139-8c30-7541b1868d6b",
    vesselId: "rv--of-the-deep",
    type: "Movie Theater",
    location: {
      deck: 14,
      area: "Forward Lounge",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "57a30b52-3541-478c-8a08-6af3acfc8b09",
    vesselId: "rv--of-the-deep",
    type: "Dancing",
    location: {
      deck: 13,
      area: "Entertainment Plaza",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "8ce3235f-c8e0-449f-8e08-e5de4520daa3",
    vesselId: "rv--of-the-deep",
    type: "Magic Show",
    location: {
      deck: 5,
      area: "Central Court",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
