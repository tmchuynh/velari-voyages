// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "ee20b3bc-9093-47cb-8e1c-fef33f0643bf",
    vesselId: "ts-the--mariner",
    type: "Karaoke",
    location: {
      deck: 7,
      area: "Upper Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "75cd2f7d-0b60-4728-92ca-c16ecea6c39d",
    vesselId: "ts-the--mariner",
    type: "Game Show",
    location: {
      deck: 10,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "6a44186a-e121-471e-a9ee-223dbcefe1a9",
    vesselId: "ts-the--mariner",
    type: "Nightclub",
    location: {
      deck: 12,
      area: "Sky Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "1331386c-61a9-4664-8e59-4bc58a9ab0ea",
    vesselId: "ts-the--mariner",
    type: "Magic Show",
    location: {
      deck: 10,
      area: "Atrium",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "2c58dad4-d1b1-4a68-8a1d-debfe68600df",
    vesselId: "ts-the--mariner",
    type: "Dancing",
    location: {
      deck: 9,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
