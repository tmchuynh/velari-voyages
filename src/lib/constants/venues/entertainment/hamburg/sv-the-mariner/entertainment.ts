// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "77de9663-850d-4614-a277-19c05f2f3364",
    vesselId: "sv-the--mariner",
    type: "Live Music",
    location: {
      deck: 14,
      area: "Entertainment Plaza",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "34677bc6-9a73-4e92-bd0c-8e413e487ec0",
    vesselId: "sv-the--mariner",
    type: "Nightclub",
    location: {
      deck: 6,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "17c43e68-b983-4bfc-8714-bbd419ea4e01",
    vesselId: "sv-the--mariner",
    type: "Dancing",
    location: {
      deck: 10,
      area: "Upper Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "3c611843-aa5c-4ed4-a50b-949f389766e3",
    vesselId: "sv-the--mariner",
    type: "Magic Show",
    location: {
      deck: 9,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
