// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "931e9cce-2af9-477d-8736-4dce81f8108f",
    vesselId: "hms--of-the-deep",
    type: "Nightclub",
    location: {
      deck: 14,
      area: "Central Court",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "fadb1cb9-7abf-4d1f-9ab4-ac8f3ef20e4b",
    vesselId: "hms--of-the-deep",
    type: "Movie Theater",
    location: {
      deck: 12,
      area: "Pool Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "b5495320-a2db-482f-8b58-749c182c8eb8",
    vesselId: "hms--of-the-deep",
    type: "Live Music",
    location: {
      deck: 10,
      area: "Upper Deck",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "17d9508b-a932-47c8-b1a5-0ad2e575ffff",
    vesselId: "hms--of-the-deep",
    type: "Karaoke",
    location: {
      deck: 13,
      area: "Aft Lounge",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "c2e8dd99-20e0-462b-bdb6-f3e8e1f4c273",
    vesselId: "hms--of-the-deep",
    type: "Dancing",
    location: {
      deck: 12,
      area: "Main Theater",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "8fa5fdef-5059-4bf5-805d-b39c0906958b",
    vesselId: "hms--of-the-deep",
    type: "Game Show",
    location: {
      deck: 5,
      area: "Observation Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
