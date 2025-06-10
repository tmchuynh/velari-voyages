// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "53ea890e-4dc5-4385-bbf8-64c109a40c2d",
    vesselId: "sy-the--mariner",
    type: "Comedy",
    location: {
      deck: 6,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "03767ca7-3109-4351-abb4-04f7990dd1c9",
    vesselId: "sy-the--mariner",
    type: "Nightclub",
    location: {
      deck: 13,
      area: "Observation Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "457d52d6-970c-42e8-9c8f-c0d6da7fc99f",
    vesselId: "sy-the--mariner",
    type: "Dancing",
    location: {
      deck: 11,
      area: "Observation Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "41a5d14d-1e23-4fb8-82db-ebb74390a03d",
    vesselId: "sy-the--mariner",
    type: "Karaoke",
    location: {
      deck: 8,
      area: "Sky Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
