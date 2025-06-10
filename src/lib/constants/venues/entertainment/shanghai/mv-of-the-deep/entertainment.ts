// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "01b16bd7-d761-4c09-badb-cfe232da4425",
    vesselId: "mv--of-the-deep",
    type: "Live Music",
    location: {
      deck: 13,
      area: "Upper Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "c514ca92-95e3-4920-9d28-975bc66e3119",
    vesselId: "mv--of-the-deep",
    type: "Dancing",
    location: {
      deck: 9,
      area: "Atrium",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "1800dd5f-262b-4aa1-b750-f44727c71a5f",
    vesselId: "mv--of-the-deep",
    type: "Nightclub",
    location: {
      deck: 7,
      area: "Atrium",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "7ee5d1b5-d95f-4d49-9158-7410c1701d9c",
    vesselId: "mv--of-the-deep",
    type: "Magic Show",
    location: {
      deck: 7,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
