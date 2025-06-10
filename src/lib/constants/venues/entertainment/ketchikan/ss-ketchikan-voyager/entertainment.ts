// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "75f2474d-93a8-4539-94e5-6299fb9796fa",
    vesselId: "ss-ketchikan-voyager",
    type: "Magic Show",
    location: {
      deck: 10,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "19bfdf96-541d-4424-b36e-8065720334e1",
    vesselId: "ss-ketchikan-voyager",
    type: "Comedy",
    location: {
      deck: 9,
      area: "Pool Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "1d709425-5e01-4783-83e9-ab3f223193cc",
    vesselId: "ss-ketchikan-voyager",
    type: "Dancing",
    location: {
      deck: 12,
      area: "Sky Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "695b3087-6f22-4492-af6b-2de9f05cbb9b",
    vesselId: "ss-ketchikan-voyager",
    type: "Live Music",
    location: {
      deck: 5,
      area: "Upper Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "283ebb6c-626a-45cd-ae17-5e01aa782d11",
    vesselId: "ss-ketchikan-voyager",
    type: "Game Show",
    location: {
      deck: 10,
      area: "Entertainment Plaza",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "ef8bfade-e4f3-41f3-83bf-102720aa5891",
    vesselId: "ss-ketchikan-voyager",
    type: "Movie Theater",
    location: {
      deck: 8,
      area: "Upper Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: false,
  }
];
