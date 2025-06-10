// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "cb7569b8-ff87-4215-b18a-cbeea274ef1d",
    vesselId: "rms--explorer",
    type: "Game Show",
    location: {
      deck: 10,
      area: "Main Theater",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "ec3433f9-01d1-4d3b-b7c2-fbc7982b1e9e",
    vesselId: "rms--explorer",
    type: "Comedy",
    location: {
      deck: 9,
      area: "Observation Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "e704be3a-1832-4f64-befd-193de3f5c360",
    vesselId: "rms--explorer",
    type: "Movie Theater",
    location: {
      deck: 7,
      area: "Central Court",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "78c206a7-3dde-40e1-b4db-adf114b0adec",
    vesselId: "rms--explorer",
    type: "Karaoke",
    location: {
      deck: 11,
      area: "Central Court",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "b485710e-cd3f-4afa-97a8-86120bc9ff3d",
    vesselId: "rms--explorer",
    type: "Magic Show",
    location: {
      deck: 7,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
