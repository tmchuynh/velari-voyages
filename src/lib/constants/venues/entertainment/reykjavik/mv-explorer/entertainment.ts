// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "582a09a2-32ad-4ecc-9e6a-2957c028f7e1",
    vesselId: "mv--explorer",
    type: "Karaoke",
    location: {
      deck: 15,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "7de97df7-974a-488b-b69a-c0665f8df1ed",
    vesselId: "mv--explorer",
    type: "Magic Show",
    location: {
      deck: 11,
      area: "Upper Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "c548cdf5-a78a-40f9-b500-1514355102a3",
    vesselId: "mv--explorer",
    type: "Movie Theater",
    location: {
      deck: 13,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "d11d0097-6193-426b-b18c-b1e97923c5ef",
    vesselId: "mv--explorer",
    type: "Comedy",
    location: {
      deck: 9,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: false,
  }
];
