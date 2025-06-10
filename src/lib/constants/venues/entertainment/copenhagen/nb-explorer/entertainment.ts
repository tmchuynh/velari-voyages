// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "0348b14b-aeec-457f-8ef6-6cc5f4034dfe",
    vesselId: "nb--explorer",
    type: "Nightclub",
    location: {
      deck: 6,
      area: "Main Theater",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "a826d18a-12ab-4127-b978-31627a085224",
    vesselId: "nb--explorer",
    type: "Dancing",
    location: {
      deck: 12,
      area: "Sky Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "21964361-f18e-4b0f-adf1-ff6b65f94cd1",
    vesselId: "nb--explorer",
    type: "Live Music",
    location: {
      deck: 12,
      area: "Central Court",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "f44f6bd3-0a93-4b1b-b137-586e1542d790",
    vesselId: "nb--explorer",
    type: "Magic Show",
    location: {
      deck: 12,
      area: "Aft Lounge",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "28a3a910-d003-4677-9058-92ce3d7d6c8d",
    vesselId: "nb--explorer",
    type: "Karaoke",
    location: {
      deck: 13,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
