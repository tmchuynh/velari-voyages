// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "c681cf6c-1d29-4664-aa03-9c368ab86144",
    vesselId: "sv-dubrovnik-voyager",
    type: "Karaoke",
    location: {
      deck: 13,
      area: "Forward Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "95af04e4-8877-4d52-a682-42933e47ad42",
    vesselId: "sv-dubrovnik-voyager",
    type: "Live Music",
    location: {
      deck: 12,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "fa864189-c429-4fff-bae8-7cbe4a66a2b2",
    vesselId: "sv-dubrovnik-voyager",
    type: "Magic Show",
    location: {
      deck: 11,
      area: "Sky Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "476fb350-0f8f-4f3b-9520-05fcaea30f8a",
    vesselId: "sv-dubrovnik-voyager",
    type: "Dancing",
    location: {
      deck: 6,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: false,
  }
];
