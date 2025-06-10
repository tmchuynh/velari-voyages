// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "bd0673cf-597d-42b0-ba09-10403d8b390f",
    vesselId: "nb--explorer",
    type: "Nightclub",
    location: {
      deck: 7,
      area: "Central Court",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "6dbff85c-0554-4431-adcc-3877f54c0080",
    vesselId: "nb--explorer",
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
    id: "ad44b412-80f0-45bf-aace-a300ac5cc53a",
    vesselId: "nb--explorer",
    type: "Karaoke",
    location: {
      deck: 9,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "3df3d409-f125-4199-9ab6-5ec89587e33b",
    vesselId: "nb--explorer",
    type: "Comedy",
    location: {
      deck: 7,
      area: "Central Court",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "115b4bbd-c9a7-46d7-b494-f80669618c35",
    vesselId: "nb--explorer",
    type: "Dancing",
    location: {
      deck: 12,
      area: "Observation Deck",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: false,
  }
];
