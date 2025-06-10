// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "c3cda7ed-8f9e-4db0-8bb1-609cef5623ac",
    vesselId: "ms-the--mariner",
    type: "Movie Theater",
    location: {
      deck: 9,
      area: "Upper Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "f8a25e60-3f7c-4427-9e76-b57c7d104d0d",
    vesselId: "ms-the--mariner",
    type: "Live Music",
    location: {
      deck: 8,
      area: "Main Theater",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "524d23bf-cdfd-41b5-95e0-39a0f75083c4",
    vesselId: "ms-the--mariner",
    type: "Dancing",
    location: {
      deck: 9,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "1c893bb1-e5f8-4959-b69f-c5e280e9d27f",
    vesselId: "ms-the--mariner",
    type: "Karaoke",
    location: {
      deck: 8,
      area: "Atrium",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
