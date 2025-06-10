// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "7b94677c-5e3b-439b-b2f3-e0a88d8d1527",
    vesselId: "my--of-the-deep",
    type: "Comedy",
    location: {
      deck: 14,
      area: "Sky Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "8aec40cd-807c-488a-8c4a-a4a8734aaa7f",
    vesselId: "my--of-the-deep",
    type: "Movie Theater",
    location: {
      deck: 13,
      area: "Sky Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "bf5ac9d9-3caf-470c-b725-05e265556454",
    vesselId: "my--of-the-deep",
    type: "Karaoke",
    location: {
      deck: 12,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "fd50aabe-eea8-41da-beaa-03e55f922570",
    vesselId: "my--of-the-deep",
    type: "Game Show",
    location: {
      deck: 11,
      area: "Upper Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
