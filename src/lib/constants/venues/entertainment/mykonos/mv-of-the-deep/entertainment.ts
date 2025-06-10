// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "30a3e67d-7508-4127-b0fa-c8406c288cfb",
    vesselId: "mv--of-the-deep",
    type: "Comedy",
    location: {
      deck: 10,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "326d1745-f9e2-4503-9d5a-e36572c99055",
    vesselId: "mv--of-the-deep",
    type: "Game Show",
    location: {
      deck: 8,
      area: "Atrium",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "5734083f-3725-4f39-bd89-2cd0264c2f29",
    vesselId: "mv--of-the-deep",
    type: "Magic Show",
    location: {
      deck: 11,
      area: "Midship Theater",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "55525452-e40d-49f2-8a02-c28d2395539a",
    vesselId: "mv--of-the-deep",
    type: "Live Music",
    location: {
      deck: 13,
      area: "Midship Theater",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "464e88c0-f840-45c9-b109-9bc162a81928",
    vesselId: "mv--of-the-deep",
    type: "Nightclub",
    location: {
      deck: 9,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
