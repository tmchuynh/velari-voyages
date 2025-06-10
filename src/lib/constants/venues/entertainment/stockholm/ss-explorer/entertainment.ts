// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "e72ab8f2-4d43-4841-990e-8e0527d8924d",
    vesselId: "ss--explorer",
    type: "Dancing",
    location: {
      deck: 13,
      area: "Atrium",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "314e8baf-5c33-4484-9e28-113a673c74bb",
    vesselId: "ss--explorer",
    type: "Nightclub",
    location: {
      deck: 15,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "89af8a44-12f4-423d-ab80-54afea3c5ea6",
    vesselId: "ss--explorer",
    type: "Game Show",
    location: {
      deck: 6,
      area: "Sky Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "ea1fb8aa-448d-41eb-9390-b40d95bfe597",
    vesselId: "ss--explorer",
    type: "Live Music",
    location: {
      deck: 6,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
