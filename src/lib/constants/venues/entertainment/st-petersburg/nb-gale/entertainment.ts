// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "9ee4a3d1-b872-40d4-ab6c-77a9e597d4a6",
    vesselId: "nb--gale",
    type: "Game Show",
    location: {
      deck: 9,
      area: "Forward Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "0fc110d7-5779-4da7-91d3-4a3435958011",
    vesselId: "nb--gale",
    type: "Dancing",
    location: {
      deck: 10,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "a3d37b98-b470-42dd-8a72-1098fc4fe84a",
    vesselId: "nb--gale",
    type: "Karaoke",
    location: {
      deck: 5,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "966761de-1e9f-41c8-a3cd-ece00413442e",
    vesselId: "nb--gale",
    type: "Movie Theater",
    location: {
      deck: 15,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "6161eb1d-dd38-4668-b6ce-c1496c7f8ea2",
    vesselId: "nb--gale",
    type: "Nightclub",
    location: {
      deck: 9,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "bbb126f4-32aa-4ed1-a607-227f9fc2d72d",
    vesselId: "nb--gale",
    type: "Comedy",
    location: {
      deck: 13,
      area: "Upper Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
