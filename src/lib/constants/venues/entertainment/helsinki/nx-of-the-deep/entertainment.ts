// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "4613b7af-c225-4b2e-ab09-7608618f043e",
    vesselId: "nx--of-the-deep",
    type: "Movie Theater",
    location: {
      deck: 8,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "ab8d1dec-9852-4192-b78e-5b6a972d80f0",
    vesselId: "nx--of-the-deep",
    type: "Karaoke",
    location: {
      deck: 14,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "3ccea624-b938-480c-8492-642e6d92e0b9",
    vesselId: "nx--of-the-deep",
    type: "Dancing",
    location: {
      deck: 15,
      area: "Observation Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "2c770df0-8eca-402f-9eaf-fd20fe42ba2a",
    vesselId: "nx--of-the-deep",
    type: "Magic Show",
    location: {
      deck: 12,
      area: "Forward Lounge",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "72fb6da4-ea15-4e60-81ac-2044801d6808",
    vesselId: "nx--of-the-deep",
    type: "Game Show",
    location: {
      deck: 5,
      area: "Upper Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "a63727ba-b865-4eb8-ba99-bebb6edec317",
    vesselId: "nx--of-the-deep",
    type: "Live Music",
    location: {
      deck: 13,
      area: "Sky Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
