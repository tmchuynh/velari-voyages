// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "f7267b0b-3424-43d4-be65-0585d4349e10",
    vesselId: "my-roatan-voyager",
    type: "Magic Show",
    location: {
      deck: 13,
      area: "Atrium",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "7ecba475-7ae2-4d08-a86f-511018aa84c0",
    vesselId: "my-roatan-voyager",
    type: "Comedy",
    location: {
      deck: 11,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "d377bf43-d1ac-4f70-9548-b81eb05b9ea7",
    vesselId: "my-roatan-voyager",
    type: "Game Show",
    location: {
      deck: 9,
      area: "Observation Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "bb751f2a-dba4-4748-86e1-fc1dca523be6",
    vesselId: "my-roatan-voyager",
    type: "Movie Theater",
    location: {
      deck: 8,
      area: "Aft Lounge",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "6c1993a2-b3aa-4a23-a936-ebfd177aa7ee",
    vesselId: "my-roatan-voyager",
    type: "Dancing",
    location: {
      deck: 7,
      area: "Atrium",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "8a9bba81-03d9-4db1-be40-92104505d703",
    vesselId: "my-roatan-voyager",
    type: "Nightclub",
    location: {
      deck: 10,
      area: "Central Court",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
