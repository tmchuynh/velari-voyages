// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "17ab988b-1fd5-463e-a702-f7ccee625dba",
    vesselId: "sy--explorer",
    type: "Nightclub",
    location: {
      deck: 14,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "deab66e3-aa0d-4b65-aa39-491365217791",
    vesselId: "sy--explorer",
    type: "Magic Show",
    location: {
      deck: 12,
      area: "Observation Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "96adfb91-34a1-4a29-bef9-173babe2da40",
    vesselId: "sy--explorer",
    type: "Karaoke",
    location: {
      deck: 7,
      area: "Pool Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "885782b6-8b36-4009-aaf8-11307673ef6f",
    vesselId: "sy--explorer",
    type: "Movie Theater",
    location: {
      deck: 14,
      area: "Upper Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  }
];
