// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "26b66a9f-aa25-43bb-92ed-4b8408ac592f",
    vesselId: "ps--gale",
    type: "Nightclub",
    location: {
      deck: 15,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "5b5da794-ce6c-4615-9e8a-fe8082783f6c",
    vesselId: "ps--gale",
    type: "Comedy",
    location: {
      deck: 8,
      area: "Central Court",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "e7a815c4-9800-4660-9778-9d43c61fdad6",
    vesselId: "ps--gale",
    type: "Dancing",
    location: {
      deck: 15,
      area: "Observation Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "fc165258-bfeb-4d2c-8571-46011d430db7",
    vesselId: "ps--gale",
    type: "Game Show",
    location: {
      deck: 15,
      area: "Upper Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
