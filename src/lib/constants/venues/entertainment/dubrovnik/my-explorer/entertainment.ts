// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "4ed6daf9-9d97-47a1-a21a-7ed49dbdc30b",
    vesselId: "my--explorer",
    type: "Game Show",
    location: {
      deck: 15,
      area: "Observation Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "f63fa9e3-ed8d-4a61-a177-a9c77e29ba3a",
    vesselId: "my--explorer",
    type: "Karaoke",
    location: {
      deck: 5,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "0022e3a0-4c79-4869-ae71-07f03d3797a6",
    vesselId: "my--explorer",
    type: "Movie Theater",
    location: {
      deck: 7,
      area: "Upper Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "c4d4e71a-7eac-48e8-b903-e0c454dcf459",
    vesselId: "my--explorer",
    type: "Magic Show",
    location: {
      deck: 9,
      area: "Upper Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "83d328f9-ea35-42e7-a5f6-38b7d226c804",
    vesselId: "my--explorer",
    type: "Comedy",
    location: {
      deck: 10,
      area: "Aft Lounge",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "e0b4d47c-293b-4a71-88c0-663772a6ede4",
    vesselId: "my--explorer",
    type: "Dancing",
    location: {
      deck: 12,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
