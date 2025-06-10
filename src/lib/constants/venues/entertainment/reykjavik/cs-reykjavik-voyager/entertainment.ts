// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "54debe08-095c-444e-a9e7-1e019b44fe96",
    vesselId: "cs-reykjavik-voyager",
    type: "Karaoke",
    location: {
      deck: 7,
      area: "Atrium",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "d2baa29d-de86-4e61-9051-0606ae08e4a3",
    vesselId: "cs-reykjavik-voyager",
    type: "Nightclub",
    location: {
      deck: 9,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "e76abca7-3aa8-4b9b-bddf-53a9bd319e6a",
    vesselId: "cs-reykjavik-voyager",
    type: "Live Music",
    location: {
      deck: 13,
      area: "Central Court",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "87566826-1a7c-40d8-bcce-5f930c623800",
    vesselId: "cs-reykjavik-voyager",
    type: "Dancing",
    location: {
      deck: 9,
      area: "Observation Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "0a9597e6-05db-4669-a795-96e0c6ff9654",
    vesselId: "cs-reykjavik-voyager",
    type: "Comedy",
    location: {
      deck: 13,
      area: "Observation Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "fd4e65ee-2433-4ba6-959b-1c3390b54ab6",
    vesselId: "cs-reykjavik-voyager",
    type: "Game Show",
    location: {
      deck: 9,
      area: "Entertainment Plaza",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
