// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "ddf24c95-dca6-4553-b139-1af2b1a00d33",
    vesselId: "mv-the--mariner",
    type: "Movie Theater",
    location: {
      deck: 12,
      area: "Observation Deck",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "54bbba62-6f4c-4959-8ef4-b7de9813232a",
    vesselId: "mv-the--mariner",
    type: "Game Show",
    location: {
      deck: 9,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "d416c872-ac3d-45fe-ba36-dc2575ba2d25",
    vesselId: "mv-the--mariner",
    type: "Karaoke",
    location: {
      deck: 10,
      area: "Sky Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "9fe523d5-08c1-4c20-a08f-476a8f57ba67",
    vesselId: "mv-the--mariner",
    type: "Dancing",
    location: {
      deck: 9,
      area: "Midship Theater",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "66ae5a89-8c23-4950-b860-62f75488728b",
    vesselId: "mv-the--mariner",
    type: "Live Music",
    location: {
      deck: 12,
      area: "Midship Theater",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "c6d4e981-37ae-484d-b010-12008a56da29",
    vesselId: "mv-the--mariner",
    type: "Nightclub",
    location: {
      deck: 5,
      area: "Entertainment Plaza",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
