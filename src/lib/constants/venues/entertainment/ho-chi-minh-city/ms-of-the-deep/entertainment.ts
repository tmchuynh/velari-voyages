// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "8694ecd9-a3a1-4b39-9c5b-efc526934409",
    vesselId: "ms--of-the-deep",
    type: "Comedy",
    location: {
      deck: 5,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "3f29bf64-89a1-4741-a675-abf2d6fc01b8",
    vesselId: "ms--of-the-deep",
    type: "Dancing",
    location: {
      deck: 6,
      area: "Pool Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "910d7061-b8a9-4d24-a8e4-492187e31a0f",
    vesselId: "ms--of-the-deep",
    type: "Nightclub",
    location: {
      deck: 12,
      area: "Central Court",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "c82bb2bd-7ae9-4256-ba26-760337f63ba2",
    vesselId: "ms--of-the-deep",
    type: "Karaoke",
    location: {
      deck: 7,
      area: "Entertainment Plaza",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
