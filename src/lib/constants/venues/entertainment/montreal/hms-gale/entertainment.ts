// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "df2e173d-b5af-4141-ae9f-0074f471c5e7",
    vesselId: "hms--gale",
    type: "Magic Show",
    location: {
      deck: 15,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "67b191a0-065c-4f7b-a94d-f96f71e78ea4",
    vesselId: "hms--gale",
    type: "Karaoke",
    location: {
      deck: 8,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "634414d0-82ce-45a4-acb5-a675a127b841",
    vesselId: "hms--gale",
    type: "Game Show",
    location: {
      deck: 14,
      area: "Entertainment Plaza",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "b65e8103-8bc5-4c3e-be64-dd292c6af771",
    vesselId: "hms--gale",
    type: "Nightclub",
    location: {
      deck: 8,
      area: "Forward Lounge",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "fcbf253c-b0c4-48c9-a510-4a2821425d20",
    vesselId: "hms--gale",
    type: "Movie Theater",
    location: {
      deck: 5,
      area: "Observation Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "c4ecb971-0a55-42bd-982a-c76c4de194c8",
    vesselId: "hms--gale",
    type: "Live Music",
    location: {
      deck: 8,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
