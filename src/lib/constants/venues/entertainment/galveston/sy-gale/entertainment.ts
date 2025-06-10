// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "5538ad2d-0f89-465c-bb1b-7d3d6e6022c7",
    vesselId: "sy--gale",
    type: "Live Music",
    location: {
      deck: 12,
      area: "Grand Ballroom",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "49f9dc36-acdb-4229-919a-3d774f8d8c33",
    vesselId: "sy--gale",
    type: "Nightclub",
    location: {
      deck: 11,
      area: "Entertainment Plaza",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "408e08e8-56be-464b-aaa0-0c036728c34a",
    vesselId: "sy--gale",
    type: "Dancing",
    location: {
      deck: 6,
      area: "Observation Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "e90b70ca-fe55-436f-920a-e93fa6b88b02",
    vesselId: "sy--gale",
    type: "Comedy",
    location: {
      deck: 9,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "84be5627-1a84-4432-972d-f71b6edf2799",
    vesselId: "sy--gale",
    type: "Game Show",
    location: {
      deck: 12,
      area: "Entertainment Plaza",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
