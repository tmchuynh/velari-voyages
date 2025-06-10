// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "d4eaa76f-b2fd-49d5-8a59-bde6d16e0356",
    vesselId: "rms--explorer",
    type: "Game Show",
    location: {
      deck: 8,
      area: "Midship Theater",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "d1349935-bbc2-4e42-9fa3-d85b5906e180",
    vesselId: "rms--explorer",
    type: "Nightclub",
    location: {
      deck: 6,
      area: "Midship Theater",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "588d1cdf-0074-4d73-889f-1643bec0eb05",
    vesselId: "rms--explorer",
    type: "Movie Theater",
    location: {
      deck: 10,
      area: "Entertainment Plaza",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "f24150d7-5f7f-406d-ad5d-d8a1965e4f16",
    vesselId: "rms--explorer",
    type: "Live Music",
    location: {
      deck: 13,
      area: "Aft Lounge",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
