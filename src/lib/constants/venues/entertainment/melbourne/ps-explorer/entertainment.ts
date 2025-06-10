// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "0b1aed8a-7548-483a-85bc-afb18e08ab2b",
    vesselId: "ps--explorer",
    type: "Magic Show",
    location: {
      deck: 14,
      area: "Pool Deck",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "dbce9102-1573-4a67-82d1-82bed8262af6",
    vesselId: "ps--explorer",
    type: "Movie Theater",
    location: {
      deck: 13,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "9e5a1327-89c1-4c20-9814-0a8d6e1673e0",
    vesselId: "ps--explorer",
    type: "Nightclub",
    location: {
      deck: 15,
      area: "Atrium",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "7e7d30ff-756e-4f74-b3ea-805ddbe1f390",
    vesselId: "ps--explorer",
    type: "Live Music",
    location: {
      deck: 5,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "5c949625-9e98-4644-a673-f04eaa55a35c",
    vesselId: "ps--explorer",
    type: "Karaoke",
    location: {
      deck: 14,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "a5ff767b-5f6a-48bf-b247-c4ab64131ce4",
    vesselId: "ps--explorer",
    type: "Dancing",
    location: {
      deck: 14,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: false,
  }
];
