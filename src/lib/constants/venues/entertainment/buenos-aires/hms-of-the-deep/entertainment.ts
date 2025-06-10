// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "29ad421a-a9b8-4793-9ec1-91f29e978f81",
    vesselId: "hms--of-the-deep",
    type: "Game Show",
    location: {
      deck: 6,
      area: "Sky Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "52a5482d-26a2-49d9-82dd-4ad613cb146b",
    vesselId: "hms--of-the-deep",
    type: "Nightclub",
    location: {
      deck: 8,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "07be7c92-a921-4d26-aab4-42732a307ab4",
    vesselId: "hms--of-the-deep",
    type: "Live Music",
    location: {
      deck: 6,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "a1e74e78-5dbe-4ef7-87b4-84af5a4a566b",
    vesselId: "hms--of-the-deep",
    type: "Magic Show",
    location: {
      deck: 11,
      area: "Atrium",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
