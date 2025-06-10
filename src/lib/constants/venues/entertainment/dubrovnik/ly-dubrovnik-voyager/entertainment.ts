// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "2ec6d81d-31ea-4400-92c7-8df9fa11559f",
    vesselId: "ly-dubrovnik-voyager",
    type: "Game Show",
    location: {
      deck: 9,
      area: "Central Court",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "3cd37284-ca27-4444-84cf-40218f0644ea",
    vesselId: "ly-dubrovnik-voyager",
    type: "Comedy",
    location: {
      deck: 6,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "420c3f3c-5936-40d4-921e-a757e855f259",
    vesselId: "ly-dubrovnik-voyager",
    type: "Karaoke",
    location: {
      deck: 6,
      area: "Entertainment Plaza",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "ef3fac16-a785-41f3-8ea0-9cb3d1d3773e",
    vesselId: "ly-dubrovnik-voyager",
    type: "Dancing",
    location: {
      deck: 7,
      area: "Main Theater",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
