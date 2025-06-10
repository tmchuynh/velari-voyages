// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "6026dd50-7d0b-4760-94da-3411bd782a18",
    vesselId: "ms-the--mariner",
    type: "Dancing",
    location: {
      deck: 10,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "17aa00d6-c8f0-4921-8089-6d5556f84a1d",
    vesselId: "ms-the--mariner",
    type: "Live Music",
    location: {
      deck: 7,
      area: "Observation Deck",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "e96a626d-64bc-49a0-89c5-0804ce9fc5d8",
    vesselId: "ms-the--mariner",
    type: "Magic Show",
    location: {
      deck: 10,
      area: "Observation Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "f59f2d4e-491e-4116-8bff-773b41bc9671",
    vesselId: "ms-the--mariner",
    type: "Comedy",
    location: {
      deck: 11,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "e11f3701-70cb-447a-a225-ebfdc37e90dc",
    vesselId: "ms-the--mariner",
    type: "Nightclub",
    location: {
      deck: 12,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "3b7ade9e-553a-490a-bf74-15437a9456b1",
    vesselId: "ms-the--mariner",
    type: "Karaoke",
    location: {
      deck: 10,
      area: "Midship Theater",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
