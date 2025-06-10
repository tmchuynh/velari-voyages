// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "d765eec4-d445-42a1-bfdf-932d16b6ff77",
    vesselId: "rms-istanbul-voyager",
    type: "Live Music",
    location: {
      deck: 5,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "ca286cca-6556-4dec-8d2b-306c72e6313f",
    vesselId: "rms-istanbul-voyager",
    type: "Dancing",
    location: {
      deck: 12,
      area: "Forward Lounge",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "6be6e972-aefb-4e12-987b-8926f743bbcd",
    vesselId: "rms-istanbul-voyager",
    type: "Nightclub",
    location: {
      deck: 10,
      area: "Sky Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "6c989262-a489-449b-9d6d-d2854288ad5e",
    vesselId: "rms-istanbul-voyager",
    type: "Comedy",
    location: {
      deck: 8,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "88636be0-9673-445c-b8c3-d9de89de3110",
    vesselId: "rms-istanbul-voyager",
    type: "Magic Show",
    location: {
      deck: 5,
      area: "Central Court",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "b40e1cc4-9921-4293-ac2a-4e7c88835184",
    vesselId: "rms-istanbul-voyager",
    type: "Game Show",
    location: {
      deck: 9,
      area: "Observation Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "f29cb82b-a515-4fa8-b8d0-9be2229160aa",
    vesselId: "rms-istanbul-voyager",
    type: "Movie Theater",
    location: {
      deck: 9,
      area: "Aft Lounge",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
