// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "969ccaf8-d0cc-48ec-9303-a096eba0c709",
    vesselId: "ss--of-the-deep",
    type: "Live Music",
    location: {
      deck: 11,
      area: "Sky Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "5188fa46-f96e-4c59-ba51-2e07b0398719",
    vesselId: "ss--of-the-deep",
    type: "Dancing",
    location: {
      deck: 10,
      area: "Observation Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "a16865a7-df6d-49e5-bd1c-4225965aff1f",
    vesselId: "ss--of-the-deep",
    type: "Magic Show",
    location: {
      deck: 8,
      area: "Central Court",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "e81764c4-bc48-4625-9d55-2575b145a8ba",
    vesselId: "ss--of-the-deep",
    type: "Comedy",
    location: {
      deck: 15,
      area: "Entertainment Plaza",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "939c6f1b-06af-42f4-8c47-e5df5064f2a5",
    vesselId: "ss--of-the-deep",
    type: "Nightclub",
    location: {
      deck: 12,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "9b573689-ebd4-4835-83ea-b1e91aa4cb84",
    vesselId: "ss--of-the-deep",
    type: "Game Show",
    location: {
      deck: 15,
      area: "Observation Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
