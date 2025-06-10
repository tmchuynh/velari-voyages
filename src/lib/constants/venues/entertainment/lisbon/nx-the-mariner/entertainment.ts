// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "a2146d4b-9451-4421-94cf-b9012d23e2e1",
    vesselId: "nx-the--mariner",
    type: "Live Music",
    location: {
      deck: 15,
      area: "Observation Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "361aace7-ae5a-43c8-a437-ff9835c907a6",
    vesselId: "nx-the--mariner",
    type: "Dancing",
    location: {
      deck: 9,
      area: "Pool Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "e4484901-47d2-49a2-b451-658a514f58ac",
    vesselId: "nx-the--mariner",
    type: "Nightclub",
    location: {
      deck: 13,
      area: "Midship Theater",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "260ee7d8-f91b-4059-8716-6b591c2078ea",
    vesselId: "nx-the--mariner",
    type: "Magic Show",
    location: {
      deck: 7,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
