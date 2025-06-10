// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "55ec8b77-2475-4693-9581-aa55326fa8e1",
    vesselId: "fv-the--mariner",
    type: "Comedy",
    location: {
      deck: 6,
      area: "Sky Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "8db80044-d05d-4395-9cf3-c18002d38d0b",
    vesselId: "fv-the--mariner",
    type: "Dancing",
    location: {
      deck: 13,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "38adb4c0-d9b8-4f15-8563-b051a28b2a23",
    vesselId: "fv-the--mariner",
    type: "Live Music",
    location: {
      deck: 15,
      area: "Observation Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "c3e62790-4634-4c16-8677-14add0a91459",
    vesselId: "fv-the--mariner",
    type: "Movie Theater",
    location: {
      deck: 7,
      area: "Midship Theater",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "ecfa64e7-0f06-4e49-821c-ab60849c1dfa",
    vesselId: "fv-the--mariner",
    type: "Game Show",
    location: {
      deck: 5,
      area: "Upper Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
