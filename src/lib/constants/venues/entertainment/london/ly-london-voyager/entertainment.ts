// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "55d7649e-2e38-4e1b-b611-9bc801844b69",
    vesselId: "ly-london-voyager",
    type: "Live Music",
    location: {
      deck: 7,
      area: "Entertainment Plaza",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "11d9f104-f08f-4dda-8e75-5aad6bb341e4",
    vesselId: "ly-london-voyager",
    type: "Dancing",
    location: {
      deck: 8,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "afb1d15d-a9be-4cac-91ec-6da26c543cdf",
    vesselId: "ly-london-voyager",
    type: "Comedy",
    location: {
      deck: 9,
      area: "Pool Deck",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "cd26b021-6294-443f-8f7c-e360d6247cc9",
    vesselId: "ly-london-voyager",
    type: "Game Show",
    location: {
      deck: 8,
      area: "Midship Theater",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: false,
  }
];
