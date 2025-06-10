// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "a2f36b96-a04a-4818-a75c-a3849751b08d",
    vesselId: "my--of-the-deep",
    type: "Game Show",
    location: {
      deck: 7,
      area: "Upper Deck",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "25546e20-26bd-45fa-b1d7-4c6463d97006",
    vesselId: "my--of-the-deep",
    type: "Dancing",
    location: {
      deck: 8,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "a1a2f4d6-d9fe-49bd-814e-d6fbad5b112c",
    vesselId: "my--of-the-deep",
    type: "Live Music",
    location: {
      deck: 12,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "5f1c58da-3769-42f2-ac8a-a33f549b9dc2",
    vesselId: "my--of-the-deep",
    type: "Magic Show",
    location: {
      deck: 6,
      area: "Atrium",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  }
];
