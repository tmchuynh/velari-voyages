// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "cad95801-2be7-4105-a334-56e9c78a392d",
    vesselId: "hms--gale",
    type: "Karaoke",
    location: {
      deck: 11,
      area: "Atrium",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "8b7c4f32-3d82-4199-966a-71d891d3c502",
    vesselId: "hms--gale",
    type: "Game Show",
    location: {
      deck: 6,
      area: "Observation Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "2d9729e5-f77a-4f42-bc47-e0ef2ad0aaae",
    vesselId: "hms--gale",
    type: "Nightclub",
    location: {
      deck: 14,
      area: "Atrium",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "eb18939e-316e-4d74-a076-60922839cc3f",
    vesselId: "hms--gale",
    type: "Live Music",
    location: {
      deck: 10,
      area: "Main Theater",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "5121920f-1184-40f0-bbc1-6ce8f58f1366",
    vesselId: "hms--gale",
    type: "Dancing",
    location: {
      deck: 13,
      area: "Midship Theater",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "f74c5ab0-70e0-4c26-834c-b18207c5c866",
    vesselId: "hms--gale",
    type: "Movie Theater",
    location: {
      deck: 14,
      area: "Main Theater",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
