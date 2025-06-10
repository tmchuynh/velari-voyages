// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "98fd3fcc-f081-4581-ab91-4ba49ba68d4e",
    vesselId: "ps--explorer",
    type: "Karaoke",
    location: {
      deck: 13,
      area: "Midship Theater",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "2cc319f0-0115-42e8-adc7-49e7427abba3",
    vesselId: "ps--explorer",
    type: "Movie Theater",
    location: {
      deck: 10,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "263f002b-7bb1-40b5-8b74-13aa2c41cb2f",
    vesselId: "ps--explorer",
    type: "Game Show",
    location: {
      deck: 11,
      area: "Observation Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "ba9eac57-8687-4437-85e8-a662d7ce1dc6",
    vesselId: "ps--explorer",
    type: "Magic Show",
    location: {
      deck: 7,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "bf5075d7-a1fa-4b41-8f26-ddad10db2961",
    vesselId: "ps--explorer",
    type: "Nightclub",
    location: {
      deck: 15,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
