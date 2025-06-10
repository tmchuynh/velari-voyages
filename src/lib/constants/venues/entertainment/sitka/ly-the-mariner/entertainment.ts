// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "790dbb17-cc86-47bd-a11d-341247ca767c",
    vesselId: "ly-the--mariner",
    type: "Karaoke",
    location: {
      deck: 12,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "5f0b0b95-a2c4-4775-9dd8-cbf3e7fa5cc3",
    vesselId: "ly-the--mariner",
    type: "Live Music",
    location: {
      deck: 5,
      area: "Observation Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "e930b849-0595-463b-90d7-bb1c2ba4a692",
    vesselId: "ly-the--mariner",
    type: "Game Show",
    location: {
      deck: 11,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "0943835c-9a7e-478c-adb3-b303f7f10fb5",
    vesselId: "ly-the--mariner",
    type: "Dancing",
    location: {
      deck: 15,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
