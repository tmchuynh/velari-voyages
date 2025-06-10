// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "e5537392-c371-43c2-927b-324211e5180b",
    vesselId: "cs-buenos-aires-voyager",
    type: "Live Music",
    location: {
      deck: 15,
      area: "Observation Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "c2474d01-0abd-4060-b98a-38fa75cc9b39",
    vesselId: "cs-buenos-aires-voyager",
    type: "Magic Show",
    location: {
      deck: 8,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "31f3a006-082a-4390-a6e3-80170a98236c",
    vesselId: "cs-buenos-aires-voyager",
    type: "Dancing",
    location: {
      deck: 9,
      area: "Main Theater",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "3c741ec0-8ecf-420e-becc-4f69c3f2c1fb",
    vesselId: "cs-buenos-aires-voyager",
    type: "Comedy",
    location: {
      deck: 8,
      area: "Observation Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "c29ea208-816e-4cdf-9c85-ded845d7357c",
    vesselId: "cs-buenos-aires-voyager",
    type: "Karaoke",
    location: {
      deck: 5,
      area: "Aft Lounge",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
