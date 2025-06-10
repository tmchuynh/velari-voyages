// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "3d3cbc64-e7db-4f6d-921c-dd0788ff640a",
    vesselId: "ps-nice-voyager",
    type: "Game Show",
    location: {
      deck: 11,
      area: "Central Court",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "fb5e2924-163f-4453-ad93-c24fa046dd14",
    vesselId: "ps-nice-voyager",
    type: "Nightclub",
    location: {
      deck: 10,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "7fa0efe7-3daf-430a-8b67-2af95c9ddbb8",
    vesselId: "ps-nice-voyager",
    type: "Comedy",
    location: {
      deck: 11,
      area: "Entertainment Plaza",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "2b26b34b-a732-4f5f-9445-0ace924e75d9",
    vesselId: "ps-nice-voyager",
    type: "Karaoke",
    location: {
      deck: 8,
      area: "Observation Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
