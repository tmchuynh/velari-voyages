// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "a1162833-d875-4431-a96b-d2a0d84bcc63",
    vesselId: "my-istanbul-voyager",
    type: "Game Show",
    location: {
      deck: 5,
      area: "Central Court",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "89ba9170-39d0-4576-87aa-09eb0b08a457",
    vesselId: "my-istanbul-voyager",
    type: "Nightclub",
    location: {
      deck: 6,
      area: "Aft Lounge",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "01e6c202-6b2f-437a-8934-e3b8eb708294",
    vesselId: "my-istanbul-voyager",
    type: "Comedy",
    location: {
      deck: 14,
      area: "Entertainment Plaza",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "1683fb98-8f86-4e06-a939-19092cc8405f",
    vesselId: "my-istanbul-voyager",
    type: "Dancing",
    location: {
      deck: 11,
      area: "Atrium",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "a3496852-b478-4ebd-bbda-da2716fb47fa",
    vesselId: "my-istanbul-voyager",
    type: "Movie Theater",
    location: {
      deck: 12,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "63eaa551-d4ba-4edc-a148-204857d72a8b",
    vesselId: "my-istanbul-voyager",
    type: "Live Music",
    location: {
      deck: 14,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: false,
  }
];
