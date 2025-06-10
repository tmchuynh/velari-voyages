// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "e42bd6be-b67a-4723-bff3-16e4a0d6b762",
    vesselId: "ms-the--mariner",
    type: "Magic Show",
    location: {
      deck: 14,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "c6a4b281-aecf-443b-8225-8ca475af5d6f",
    vesselId: "ms-the--mariner",
    type: "Live Music",
    location: {
      deck: 7,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "46bcb32a-fd83-48e3-97e6-cb7d22878ec7",
    vesselId: "ms-the--mariner",
    type: "Nightclub",
    location: {
      deck: 11,
      area: "Upper Deck",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "7909f1d6-d9f0-4f99-aa9e-1f042254a51b",
    vesselId: "ms-the--mariner",
    type: "Dancing",
    location: {
      deck: 15,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "811243a6-6596-43b7-8971-3a397ed01bb9",
    vesselId: "ms-the--mariner",
    type: "Karaoke",
    location: {
      deck: 8,
      area: "Main Theater",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "6c0593fa-545c-4d9d-a3ce-340d8ae30961",
    vesselId: "ms-the--mariner",
    type: "Comedy",
    location: {
      deck: 10,
      area: "Observation Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
