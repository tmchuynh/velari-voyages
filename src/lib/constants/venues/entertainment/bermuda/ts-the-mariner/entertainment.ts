// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "bafed029-3044-47c3-82cf-62d1ffab0677",
    vesselId: "ts-the--mariner",
    type: "Magic Show",
    location: {
      deck: 5,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "6174bce5-c4ed-458a-a354-f716a1250093",
    vesselId: "ts-the--mariner",
    type: "Karaoke",
    location: {
      deck: 15,
      area: "Sky Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "f14ae393-325b-4d38-8860-f90002f096e8",
    vesselId: "ts-the--mariner",
    type: "Game Show",
    location: {
      deck: 13,
      area: "Central Court",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "531e16c1-640b-4749-8c73-86bcefe93603",
    vesselId: "ts-the--mariner",
    type: "Dancing",
    location: {
      deck: 13,
      area: "Central Court",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: false,
  }
];
