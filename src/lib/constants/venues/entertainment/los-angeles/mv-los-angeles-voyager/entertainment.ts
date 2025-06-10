// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "e17593bd-0453-4c0a-a4ff-2116e6398b35",
    vesselId: "mv-los-angeles-voyager",
    type: "Nightclub",
    location: {
      deck: 11,
      area: "Entertainment Plaza",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "06c58f57-0c1a-4bdc-be40-bff0f0ebe0d5",
    vesselId: "mv-los-angeles-voyager",
    type: "Game Show",
    location: {
      deck: 9,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "daade496-ac88-473e-a32b-3d7b51d2f2a7",
    vesselId: "mv-los-angeles-voyager",
    type: "Live Music",
    location: {
      deck: 5,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "502ee910-2c03-4ca8-87ba-eb642a3fdfa8",
    vesselId: "mv-los-angeles-voyager",
    type: "Dancing",
    location: {
      deck: 8,
      area: "Central Court",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
