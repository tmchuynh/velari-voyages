// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "11f883c5-554c-468f-8f5f-d5039cf9144b",
    vesselId: "nb--gale",
    type: "Live Music",
    location: {
      deck: 9,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "54049c45-d853-4ea3-8d6c-961bb071fff5",
    vesselId: "nb--gale",
    type: "Nightclub",
    location: {
      deck: 12,
      area: "Observation Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "2c205dca-8948-4923-9a6c-288589a6dadb",
    vesselId: "nb--gale",
    type: "Dancing",
    location: {
      deck: 15,
      area: "Sky Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "b7db35f1-e732-475f-97f9-66ba06ca9a5f",
    vesselId: "nb--gale",
    type: "Comedy",
    location: {
      deck: 5,
      area: "Entertainment Plaza",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "6b73daec-3722-45f9-b75b-78d8d2207889",
    vesselId: "nb--gale",
    type: "Magic Show",
    location: {
      deck: 5,
      area: "Central Court",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "1c239806-545c-4b7c-b612-cc70b8120833",
    vesselId: "nb--gale",
    type: "Movie Theater",
    location: {
      deck: 8,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "42c48147-5150-4719-be80-bcc3cacf76c3",
    vesselId: "nb--gale",
    type: "Game Show",
    location: {
      deck: 11,
      area: "Central Court",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
