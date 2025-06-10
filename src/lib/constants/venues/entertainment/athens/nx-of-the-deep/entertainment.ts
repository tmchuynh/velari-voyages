// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "e20e7ba0-bec4-4442-8a3c-df88840cbbe0",
    vesselId: "nx--of-the-deep",
    type: "Live Music",
    location: {
      deck: 15,
      area: "Midship Theater",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "1430a208-4140-4bfd-869c-31aacf57d178",
    vesselId: "nx--of-the-deep",
    type: "Game Show",
    location: {
      deck: 8,
      area: "Aft Lounge",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "f9985d65-5ed5-4dfd-a4c9-10582ae2cc08",
    vesselId: "nx--of-the-deep",
    type: "Nightclub",
    location: {
      deck: 6,
      area: "Central Court",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "2fea2d02-8f6a-4ace-b686-ddd37bcb1db7",
    vesselId: "nx--of-the-deep",
    type: "Karaoke",
    location: {
      deck: 6,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "57743efa-ca2d-46e9-8827-09e83ec432b5",
    vesselId: "nx--of-the-deep",
    type: "Magic Show",
    location: {
      deck: 15,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "0876565c-f7dc-4261-b402-556fbaca9ebf",
    vesselId: "nx--of-the-deep",
    type: "Dancing",
    location: {
      deck: 9,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
