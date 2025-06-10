// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "38b6237d-9ea1-4ad2-9135-198f833a39a4",
    vesselId: "mv--of-the-deep",
    type: "Game Show",
    location: {
      deck: 9,
      area: "Central Court",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "69685824-42c4-4a81-9dd1-53f604678a5b",
    vesselId: "mv--of-the-deep",
    type: "Comedy",
    location: {
      deck: 13,
      area: "Upper Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "25449663-852a-4ea4-8f4b-c3533ffb6346",
    vesselId: "mv--of-the-deep",
    type: "Movie Theater",
    location: {
      deck: 6,
      area: "Observation Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "c8a4e58f-354d-4bb5-858d-94d238ad88cc",
    vesselId: "mv--of-the-deep",
    type: "Dancing",
    location: {
      deck: 8,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "f5d6403b-ac06-49c2-87d3-5b5d968af0e7",
    vesselId: "mv--of-the-deep",
    type: "Live Music",
    location: {
      deck: 12,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
