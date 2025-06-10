// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "7db53c52-7534-48e4-884c-71daf7b66bb2",
    vesselId: "ms--explorer",
    type: "Live Music",
    location: {
      deck: 13,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "3e679dc1-548f-4d6a-9d66-00245548add8",
    vesselId: "ms--explorer",
    type: "Dancing",
    location: {
      deck: 5,
      area: "Upper Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "eb0017b2-cbb9-4c8c-acb9-b2603307a9d9",
    vesselId: "ms--explorer",
    type: "Karaoke",
    location: {
      deck: 7,
      area: "Entertainment Plaza",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "f1742e96-3e46-45dd-aed2-c3a76c698bb6",
    vesselId: "ms--explorer",
    type: "Nightclub",
    location: {
      deck: 12,
      area: "Forward Lounge",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
