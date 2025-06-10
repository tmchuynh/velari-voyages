// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "82834e50-5e19-436a-a70e-5150c0a7aa53",
    vesselId: "ms-athens-voyager",
    type: "Game Show",
    location: {
      deck: 9,
      area: "Observation Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "fc7f1548-dbb7-40f3-aac0-850541fd00b7",
    vesselId: "ms-athens-voyager",
    type: "Movie Theater",
    location: {
      deck: 5,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "4eb457d2-3b9d-4815-8c70-bb7de6aed40a",
    vesselId: "ms-athens-voyager",
    type: "Comedy",
    location: {
      deck: 9,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "8dfc0d9f-77d1-4653-845f-7a7b5bfea98c",
    vesselId: "ms-athens-voyager",
    type: "Karaoke",
    location: {
      deck: 8,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "e5608a40-2fd4-4478-9b77-244e6890685b",
    vesselId: "ms-athens-voyager",
    type: "Dancing",
    location: {
      deck: 10,
      area: "Main Theater",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "93e3a492-9c7b-4922-bb77-782ab5a6e08b",
    vesselId: "ms-athens-voyager",
    type: "Nightclub",
    location: {
      deck: 5,
      area: "Observation Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
