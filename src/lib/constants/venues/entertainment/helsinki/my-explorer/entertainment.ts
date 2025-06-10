// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "60f8913d-a40a-4a5f-8fb2-f227dd5434d9",
    vesselId: "my--explorer",
    type: "Game Show",
    location: {
      deck: 5,
      area: "Midship Theater",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "0ff8f3c7-cf5a-469c-9f3f-7c6bae9a9825",
    vesselId: "my--explorer",
    type: "Nightclub",
    location: {
      deck: 8,
      area: "Upper Deck",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "51b91513-c887-439c-900f-4831eb1b91ca",
    vesselId: "my--explorer",
    type: "Movie Theater",
    location: {
      deck: 7,
      area: "Observation Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "5256cb7d-8742-4d26-9b29-a5db1b991458",
    vesselId: "my--explorer",
    type: "Comedy",
    location: {
      deck: 15,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "48697ad6-dafc-49fe-9dce-d302c149645d",
    vesselId: "my--explorer",
    type: "Magic Show",
    location: {
      deck: 7,
      area: "Central Court",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: false,
  }
];
