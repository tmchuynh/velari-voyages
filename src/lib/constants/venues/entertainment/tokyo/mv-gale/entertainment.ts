// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "102fb1b1-a345-4232-bb1d-cd7c6909b920",
    vesselId: "mv--gale",
    type: "Live Music",
    location: {
      deck: 11,
      area: "Observation Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "30565ba5-189e-4e12-a282-03ddcb3fa20b",
    vesselId: "mv--gale",
    type: "Karaoke",
    location: {
      deck: 10,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "0d71dfc4-8e8e-453e-82de-5ab0ce4640b1",
    vesselId: "mv--gale",
    type: "Dancing",
    location: {
      deck: 12,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "e06f939d-3802-4e8e-9e65-35a472b921cd",
    vesselId: "mv--gale",
    type: "Comedy",
    location: {
      deck: 8,
      area: "Sky Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "47747936-aa11-4ddf-8a22-4cc1789e051c",
    vesselId: "mv--gale",
    type: "Game Show",
    location: {
      deck: 14,
      area: "Upper Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "7d4ba67b-05df-47b6-bbe7-51ebc67742f3",
    vesselId: "mv--gale",
    type: "Nightclub",
    location: {
      deck: 9,
      area: "Upper Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
