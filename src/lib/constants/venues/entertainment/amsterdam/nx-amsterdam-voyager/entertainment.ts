// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "eff69929-10ed-4036-8b7b-6d14034e94be",
    vesselId: "nx-amsterdam-voyager",
    type: "Live Music",
    location: {
      deck: 7,
      area: "Midship Theater",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "02f518b7-3547-4feb-bb16-87f63764d822",
    vesselId: "nx-amsterdam-voyager",
    type: "Magic Show",
    location: {
      deck: 8,
      area: "Forward Lounge",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "7d04ffb5-e537-40f9-86f0-a2ab3bf9f757",
    vesselId: "nx-amsterdam-voyager",
    type: "Dancing",
    location: {
      deck: 11,
      area: "Grand Ballroom",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "68c776e3-5832-40ba-9f69-aa1d329aae61",
    vesselId: "nx-amsterdam-voyager",
    type: "Nightclub",
    location: {
      deck: 8,
      area: "Observation Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  }
];
