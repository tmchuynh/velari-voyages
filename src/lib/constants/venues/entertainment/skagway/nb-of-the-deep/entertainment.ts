// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "ad657daf-623a-4f8f-a7b2-0e4903f8ba23",
    vesselId: "nb--of-the-deep",
    type: "Magic Show",
    location: {
      deck: 10,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "f4dba801-739e-49f2-8073-c42bb50bd60b",
    vesselId: "nb--of-the-deep",
    type: "Movie Theater",
    location: {
      deck: 9,
      area: "Forward Lounge",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "70f3b870-6626-4988-b45f-f5dbdd94e0f7",
    vesselId: "nb--of-the-deep",
    type: "Game Show",
    location: {
      deck: 8,
      area: "Upper Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "d13bc247-68d2-4bcf-a0f3-aa474c2dc059",
    vesselId: "nb--of-the-deep",
    type: "Karaoke",
    location: {
      deck: 12,
      area: "Central Court",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "4c3b0cf3-dcf1-4e5f-8117-8f020a4bf72e",
    vesselId: "nb--of-the-deep",
    type: "Nightclub",
    location: {
      deck: 10,
      area: "Grand Ballroom",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
