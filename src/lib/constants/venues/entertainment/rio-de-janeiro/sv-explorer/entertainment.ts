// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "bdb0b666-5ca6-4c35-a7ad-d23051b58410",
    vesselId: "sv--explorer",
    type: "Live Music",
    location: {
      deck: 7,
      area: "Sky Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "b93147a1-6e56-4e4c-9f75-5184c1d54320",
    vesselId: "sv--explorer",
    type: "Nightclub",
    location: {
      deck: 10,
      area: "Upper Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "80d8b953-8ffa-44a2-b568-f41f8608ac69",
    vesselId: "sv--explorer",
    type: "Dancing",
    location: {
      deck: 12,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "21c3120b-649c-45b2-8638-d0a18d919dbc",
    vesselId: "sv--explorer",
    type: "Game Show",
    location: {
      deck: 9,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  }
];
