// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "4946585c-0c58-42b4-b494-46ab4aae945e",
    vesselId: "rms-hamburg-voyager",
    type: "Karaoke",
    location: {
      deck: 10,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "91aa1ced-4e5d-46ac-87e8-837f8df574fe",
    vesselId: "rms-hamburg-voyager",
    type: "Movie Theater",
    location: {
      deck: 11,
      area: "Midship Theater",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "a2e1462d-9969-4a3f-be6c-ad935601c6d6",
    vesselId: "rms-hamburg-voyager",
    type: "Magic Show",
    location: {
      deck: 12,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "555470b7-52ad-4756-9e0f-ad60c12e73e4",
    vesselId: "rms-hamburg-voyager",
    type: "Comedy",
    location: {
      deck: 12,
      area: "Pool Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
