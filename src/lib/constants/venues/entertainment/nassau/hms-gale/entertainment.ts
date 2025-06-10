// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "feac5b6c-5b4a-4f9c-8ee1-6a40d6d79955",
    vesselId: "hms--gale",
    type: "Comedy",
    location: {
      deck: 14,
      area: "Upper Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "26513af2-c463-4cd1-8ccd-224725bb3eb9",
    vesselId: "hms--gale",
    type: "Game Show",
    location: {
      deck: 13,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "bc73a61e-bfec-4365-ab84-b6f8450d5124",
    vesselId: "hms--gale",
    type: "Dancing",
    location: {
      deck: 14,
      area: "Observation Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "b1698ef7-e9e0-4c8e-98e4-2b97066435e1",
    vesselId: "hms--gale",
    type: "Movie Theater",
    location: {
      deck: 6,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "3dc05d3b-e15b-48ff-8de2-18d08a3a32d2",
    vesselId: "hms--gale",
    type: "Live Music",
    location: {
      deck: 14,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "cc722cb0-2858-48f1-9900-0ab7e78eaa9c",
    vesselId: "hms--gale",
    type: "Karaoke",
    location: {
      deck: 7,
      area: "Sky Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
