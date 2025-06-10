// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "317542b0-578c-400f-ae01-6d831a7940c9",
    vesselId: "sy-the--mariner",
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
    id: "d4a8819e-1db0-4d75-a7c0-1a1f0d13aa85",
    vesselId: "sy-the--mariner",
    type: "Live Music",
    location: {
      deck: 9,
      area: "Upper Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "2ec37b3a-eb2e-4812-980e-67dde2dd88b9",
    vesselId: "sy-the--mariner",
    type: "Karaoke",
    location: {
      deck: 7,
      area: "Midship Theater",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "76e7407c-152b-4548-8b4e-0b674e17cdda",
    vesselId: "sy-the--mariner",
    type: "Game Show",
    location: {
      deck: 5,
      area: "Entertainment Plaza",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
