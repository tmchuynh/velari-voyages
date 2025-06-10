// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "e9c2aae0-b64b-4176-aa9f-803b8177cf54",
    vesselId: "ms-the--mariner",
    type: "Live Music",
    location: {
      deck: 14,
      area: "Central Court",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "c78d3235-a5d6-4295-8e0e-ef9a15a134f8",
    vesselId: "ms-the--mariner",
    type: "Karaoke",
    location: {
      deck: 7,
      area: "Entertainment Plaza",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "ef198c2d-f125-4e2b-9120-36dc30846a21",
    vesselId: "ms-the--mariner",
    type: "Dancing",
    location: {
      deck: 10,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "de2cfd05-5a70-45be-aae3-4b12cb7bd282",
    vesselId: "ms-the--mariner",
    type: "Movie Theater",
    location: {
      deck: 10,
      area: "Observation Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "e7212bad-7843-4da7-bc2c-4a13a17f1598",
    vesselId: "ms-the--mariner",
    type: "Magic Show",
    location: {
      deck: 15,
      area: "Entertainment Plaza",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "e29c1f3a-49d6-441c-829d-c5b2cff7b900",
    vesselId: "ms-the--mariner",
    type: "Nightclub",
    location: {
      deck: 9,
      area: "Sky Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  }
];
