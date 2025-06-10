// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "85af155f-9596-41f4-86c3-33f9de4d8ea3",
    vesselId: "cs--gale",
    type: "Live Music",
    location: {
      deck: 11,
      area: "Entertainment Plaza",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "b17b90ed-ce53-468d-8fe5-7baa8881905e",
    vesselId: "cs--gale",
    type: "Nightclub",
    location: {
      deck: 7,
      area: "Observation Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "ef8345fb-209f-41af-ab08-a8c40f105770",
    vesselId: "cs--gale",
    type: "Magic Show",
    location: {
      deck: 11,
      area: "Grand Ballroom",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "8766ea0f-3415-4f37-83db-a17c9866983a",
    vesselId: "cs--gale",
    type: "Dancing",
    location: {
      deck: 9,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "5d404819-3cad-4526-8cc4-74c664d98e16",
    vesselId: "cs--gale",
    type: "Movie Theater",
    location: {
      deck: 11,
      area: "Main Theater",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
