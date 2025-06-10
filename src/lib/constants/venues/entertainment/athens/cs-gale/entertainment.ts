// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "1847cb28-f337-4338-9f1f-de7d1d3fb8ed",
    vesselId: "cs--gale",
    type: "Karaoke",
    location: {
      deck: 11,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "3216d041-8b5a-4759-ba06-254cbce62b2c",
    vesselId: "cs--gale",
    type: "Comedy",
    location: {
      deck: 10,
      area: "Sky Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "dea33ade-08fe-4e17-9243-0fea8161231f",
    vesselId: "cs--gale",
    type: "Game Show",
    location: {
      deck: 8,
      area: "Grand Ballroom",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "f44d1111-baa3-45d0-bc5d-065fae3a1da8",
    vesselId: "cs--gale",
    type: "Dancing",
    location: {
      deck: 10,
      area: "Upper Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "e5773304-5837-4e6e-9d7e-21892ed23f23",
    vesselId: "cs--gale",
    type: "Movie Theater",
    location: {
      deck: 13,
      area: "Sky Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
