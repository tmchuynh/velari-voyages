// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "aaac56de-4be8-4c9c-8773-57e7df2a939c",
    vesselId: "ms--gale",
    type: "Game Show",
    location: {
      deck: 14,
      area: "Entertainment Plaza",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "b021e41b-effa-451f-a17d-77a1dfc52ea0",
    vesselId: "ms--gale",
    type: "Karaoke",
    location: {
      deck: 6,
      area: "Grand Ballroom",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "39cd3fb8-c63f-4cd9-9f04-e7d778409880",
    vesselId: "ms--gale",
    type: "Dancing",
    location: {
      deck: 11,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "7217caaa-8764-4074-b237-faac1bfe7925",
    vesselId: "ms--gale",
    type: "Nightclub",
    location: {
      deck: 5,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "e96d50d4-62c2-4874-a5e7-c77a63540826",
    vesselId: "ms--gale",
    type: "Magic Show",
    location: {
      deck: 9,
      area: "Atrium",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
