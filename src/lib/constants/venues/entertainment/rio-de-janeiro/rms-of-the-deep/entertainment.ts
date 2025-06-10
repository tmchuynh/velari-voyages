// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "10fc0136-d6b2-4329-bdeb-92b7f1bbeac5",
    vesselId: "rms--of-the-deep",
    type: "Comedy",
    location: {
      deck: 9,
      area: "Upper Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "fdcc925f-a0bd-45ab-ab98-4956f35f1554",
    vesselId: "rms--of-the-deep",
    type: "Live Music",
    location: {
      deck: 15,
      area: "Observation Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "84b15706-e5f4-44b3-8906-a450d892b97f",
    vesselId: "rms--of-the-deep",
    type: "Nightclub",
    location: {
      deck: 12,
      area: "Forward Lounge",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "34682e30-c071-4777-9596-720496effb67",
    vesselId: "rms--of-the-deep",
    type: "Game Show",
    location: {
      deck: 10,
      area: "Upper Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "2a7cd6d4-315f-4321-94d2-a8aad6154562",
    vesselId: "rms--of-the-deep",
    type: "Dancing",
    location: {
      deck: 6,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "d85bc1bd-71ac-4ad7-a8a9-7899f539cde4",
    vesselId: "rms--of-the-deep",
    type: "Movie Theater",
    location: {
      deck: 10,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
