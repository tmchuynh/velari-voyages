// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "6d0a016f-4559-40e1-b6a6-0cce6c9aaf72",
    vesselId: "rms--gale",
    type: "Live Music",
    location: {
      deck: 5,
      area: "Sky Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "8e2187ac-a6c5-4cee-b198-7405773bc894",
    vesselId: "rms--gale",
    type: "Game Show",
    location: {
      deck: 15,
      area: "Atrium",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "41c739f0-0c3f-4eaf-adb8-780940cba25d",
    vesselId: "rms--gale",
    type: "Magic Show",
    location: {
      deck: 11,
      area: "Observation Deck",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "9371fad6-aaa1-4dfd-aa27-756835285873",
    vesselId: "rms--gale",
    type: "Karaoke",
    location: {
      deck: 5,
      area: "Central Court",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "9a477589-aac9-4551-98fc-f268c60b8191",
    vesselId: "rms--gale",
    type: "Dancing",
    location: {
      deck: 11,
      area: "Atrium",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "fc15cb38-8c97-4ca1-866b-c1f20e547f1b",
    vesselId: "rms--gale",
    type: "Movie Theater",
    location: {
      deck: 14,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: false,
  }
];
