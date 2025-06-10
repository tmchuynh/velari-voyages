// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "263ddc50-bde7-4235-b266-bed60241f484",
    vesselId: "nb--gale",
    type: "Nightclub",
    location: {
      deck: 7,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "f266c5b2-6c8a-4097-abe8-b847557ee1ba",
    vesselId: "nb--gale",
    type: "Game Show",
    location: {
      deck: 12,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "b4a26b71-785b-4036-9aa2-cd89b4b12785",
    vesselId: "nb--gale",
    type: "Comedy",
    location: {
      deck: 9,
      area: "Entertainment Plaza",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "3753ea96-4c1e-4a8a-8ea5-ad419f155f0b",
    vesselId: "nb--gale",
    type: "Karaoke",
    location: {
      deck: 11,
      area: "Grand Ballroom",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "a88b9b0f-ac1d-4062-9d57-23acf17b6677",
    vesselId: "nb--gale",
    type: "Dancing",
    location: {
      deck: 10,
      area: "Sky Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
