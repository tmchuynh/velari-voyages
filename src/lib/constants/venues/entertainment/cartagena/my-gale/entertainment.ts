// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "96c0a885-6ceb-4fe2-a763-250e38169cea",
    vesselId: "my--gale",
    type: "Game Show",
    location: {
      deck: 12,
      area: "Main Theater",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "ea6dada1-6030-421f-a6cb-cdeacea4aa19",
    vesselId: "my--gale",
    type: "Magic Show",
    location: {
      deck: 7,
      area: "Observation Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "a683e6b2-eaab-4480-a84c-772501d5f764",
    vesselId: "my--gale",
    type: "Karaoke",
    location: {
      deck: 9,
      area: "Observation Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "b32f83c3-74ac-4024-8f3d-57da52b250d7",
    vesselId: "my--gale",
    type: "Nightclub",
    location: {
      deck: 12,
      area: "Sky Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "c0a1f49a-8f1f-47b8-9361-76b6375b48bc",
    vesselId: "my--gale",
    type: "Comedy",
    location: {
      deck: 10,
      area: "Entertainment Plaza",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "55b3fca4-2cd7-457b-9808-01293b9e1bfe",
    vesselId: "my--gale",
    type: "Movie Theater",
    location: {
      deck: 14,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
