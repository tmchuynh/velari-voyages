// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "afd78f50-1cc7-4887-af5f-56d57a6b0862",
    vesselId: "sv--gale",
    type: "Comedy",
    location: {
      deck: 9,
      area: "Upper Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "ee2dedd3-8b75-4b52-8025-75cb0da9f772",
    vesselId: "sv--gale",
    type: "Dancing",
    location: {
      deck: 13,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "570a6827-5217-40d7-aff9-cf9ff3db4faf",
    vesselId: "sv--gale",
    type: "Game Show",
    location: {
      deck: 5,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "93362b4d-12c8-4af9-97a5-c2986711c3be",
    vesselId: "sv--gale",
    type: "Nightclub",
    location: {
      deck: 14,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "8c52effb-869d-4683-bab6-d02359870248",
    vesselId: "sv--gale",
    type: "Live Music",
    location: {
      deck: 7,
      area: "Observation Deck",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "2917a86d-e6c2-4777-a30f-123b82043ce8",
    vesselId: "sv--gale",
    type: "Magic Show",
    location: {
      deck: 14,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
