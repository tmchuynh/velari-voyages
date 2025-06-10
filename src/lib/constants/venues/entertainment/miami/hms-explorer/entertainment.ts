// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "192b5315-3ce9-4279-87d7-02cf67d81f0f",
    vesselId: "hms--explorer",
    type: "Live Music",
    location: {
      deck: 14,
      area: "Sky Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "b701cf09-8eb6-4889-bfe5-0d19e430786a",
    vesselId: "hms--explorer",
    type: "Dancing",
    location: {
      deck: 10,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "86ea47d2-7428-4e73-91ac-04ba9afad147",
    vesselId: "hms--explorer",
    type: "Movie Theater",
    location: {
      deck: 8,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "5405db8d-e877-4730-a964-856b970e5bd1",
    vesselId: "hms--explorer",
    type: "Comedy",
    location: {
      deck: 6,
      area: "Forward Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "55d17c3e-51f3-48ee-a855-b2499a9cb75d",
    vesselId: "hms--explorer",
    type: "Nightclub",
    location: {
      deck: 12,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "e89a208e-da23-4f4f-a19c-605e0ab46840",
    vesselId: "hms--explorer",
    type: "Game Show",
    location: {
      deck: 7,
      area: "Forward Lounge",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: false,
  }
];
