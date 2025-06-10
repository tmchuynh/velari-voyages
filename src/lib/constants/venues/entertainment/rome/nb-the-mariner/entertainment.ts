// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "2b6d2870-160f-437a-a3c6-56b161927644",
    vesselId: "nb-the--mariner",
    type: "Nightclub",
    location: {
      deck: 7,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "688f1e4b-5eae-4fd0-834b-09edb3c25b73",
    vesselId: "nb-the--mariner",
    type: "Dancing",
    location: {
      deck: 12,
      area: "Aft Lounge",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "8eef0178-37eb-48d0-9b97-8b350d273218",
    vesselId: "nb-the--mariner",
    type: "Game Show",
    location: {
      deck: 11,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "e37a3916-1a92-408a-b8ab-f004f78eeb4b",
    vesselId: "nb-the--mariner",
    type: "Karaoke",
    location: {
      deck: 7,
      area: "Upper Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "91d884e6-13be-49f6-9581-95779ff37d39",
    vesselId: "nb-the--mariner",
    type: "Movie Theater",
    location: {
      deck: 15,
      area: "Sky Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
