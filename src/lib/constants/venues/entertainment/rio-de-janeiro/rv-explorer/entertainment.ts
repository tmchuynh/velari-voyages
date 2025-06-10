// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "a1429a4b-1fcc-416e-80fb-b9f54cc54b2e",
    vesselId: "rv--explorer",
    type: "Live Music",
    location: {
      deck: 9,
      area: "Midship Theater",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "2dc5dcf1-5807-4a53-af7f-07911c4da087",
    vesselId: "rv--explorer",
    type: "Comedy",
    location: {
      deck: 6,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "cc608a32-28ac-423a-90c1-f2416d904234",
    vesselId: "rv--explorer",
    type: "Game Show",
    location: {
      deck: 11,
      area: "Observation Deck",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "8cb75ed7-a6ed-46df-bba7-057bad346d35",
    vesselId: "rv--explorer",
    type: "Nightclub",
    location: {
      deck: 7,
      area: "Entertainment Plaza",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
