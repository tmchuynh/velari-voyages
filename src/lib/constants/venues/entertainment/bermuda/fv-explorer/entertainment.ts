// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "5111b5ff-ccaf-4fd2-aaf5-ea25a2d08539",
    vesselId: "fv--explorer",
    type: "Magic Show",
    location: {
      deck: 15,
      area: "Upper Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "e175d2c0-9e6d-40c7-aa22-d6455e8a4227",
    vesselId: "fv--explorer",
    type: "Karaoke",
    location: {
      deck: 14,
      area: "Forward Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "04ec0d3a-996d-4d09-a989-f349010e69a3",
    vesselId: "fv--explorer",
    type: "Nightclub",
    location: {
      deck: 9,
      area: "Main Theater",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "92cd939f-190d-41f5-84b1-0f0e66de49bb",
    vesselId: "fv--explorer",
    type: "Movie Theater",
    location: {
      deck: 6,
      area: "Entertainment Plaza",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "5bdaac4b-2d16-4c8d-af93-9a96f984609a",
    vesselId: "fv--explorer",
    type: "Game Show",
    location: {
      deck: 10,
      area: "Sky Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  }
];
