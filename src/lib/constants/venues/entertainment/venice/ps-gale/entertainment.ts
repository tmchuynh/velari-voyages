// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "8cf5844b-e341-400d-9cec-8e369dc45eae",
    vesselId: "ps--gale",
    type: "Magic Show",
    location: {
      deck: 5,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "01a9bc74-14fe-47f0-8c08-3528016e577a",
    vesselId: "ps--gale",
    type: "Nightclub",
    location: {
      deck: 14,
      area: "Pool Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "ddcfbb57-5844-4b33-aede-48dc86e1ca88",
    vesselId: "ps--gale",
    type: "Movie Theater",
    location: {
      deck: 9,
      area: "Upper Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "5b7d9595-4fc4-420b-a579-784e3a9cd461",
    vesselId: "ps--gale",
    type: "Game Show",
    location: {
      deck: 14,
      area: "Forward Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "f3a0f3c7-1ae8-4dce-b138-cad57bf49a6f",
    vesselId: "ps--gale",
    type: "Karaoke",
    location: {
      deck: 10,
      area: "Atrium",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
