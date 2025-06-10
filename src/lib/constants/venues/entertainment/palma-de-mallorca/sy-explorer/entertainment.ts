// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "62afed1a-6b00-479e-8cdd-2106371e7c44",
    vesselId: "sy--explorer",
    type: "Magic Show",
    location: {
      deck: 14,
      area: "Upper Deck",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "c7655576-ed43-43eb-9315-08b6cb64c618",
    vesselId: "sy--explorer",
    type: "Movie Theater",
    location: {
      deck: 9,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "02496124-b16d-4753-b9e9-bd0093ed55df",
    vesselId: "sy--explorer",
    type: "Comedy",
    location: {
      deck: 10,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "dac87663-855e-4ef9-bba0-793b84f48a5f",
    vesselId: "sy--explorer",
    type: "Game Show",
    location: {
      deck: 13,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "bd197c38-9f0c-47a6-91d6-85716cd85e26",
    vesselId: "sy--explorer",
    type: "Nightclub",
    location: {
      deck: 8,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
