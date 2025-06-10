// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "6c9ee8a4-1c2c-4c7e-b457-4c8226da1b8f",
    vesselId: "mv-the--mariner",
    type: "Nightclub",
    location: {
      deck: 15,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "78df9afa-3461-40a2-8873-cca09ff25522",
    vesselId: "mv-the--mariner",
    type: "Magic Show",
    location: {
      deck: 10,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "030aec36-e95e-4221-8828-f275cea2c6f5",
    vesselId: "mv-the--mariner",
    type: "Live Music",
    location: {
      deck: 6,
      area: "Sky Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "83fac0b9-6f6f-4172-a0f0-66e1377343ee",
    vesselId: "mv-the--mariner",
    type: "Dancing",
    location: {
      deck: 7,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
