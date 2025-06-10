// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "961abab5-5df9-4a73-b0a1-9ebcf29fb5a5",
    vesselId: "mv-the--mariner",
    type: "Game Show",
    location: {
      deck: 8,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "78718d52-b22d-4356-8a4e-bb445e1cfdc8",
    vesselId: "mv-the--mariner",
    type: "Magic Show",
    location: {
      deck: 6,
      area: "Upper Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "25517291-b841-4a7c-8549-e0454404d188",
    vesselId: "mv-the--mariner",
    type: "Comedy",
    location: {
      deck: 9,
      area: "Atrium",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "06a0b5c0-7908-445f-a6a4-dea45bf95a86",
    vesselId: "mv-the--mariner",
    type: "Karaoke",
    location: {
      deck: 9,
      area: "Grand Ballroom",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "414a7236-28f7-4f34-8dfd-b3076235c89b",
    vesselId: "mv-the--mariner",
    type: "Movie Theater",
    location: {
      deck: 5,
      area: "Upper Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "9439e7ff-d61d-4fa2-906e-0996a2c0583f",
    vesselId: "mv-the--mariner",
    type: "Dancing",
    location: {
      deck: 8,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
