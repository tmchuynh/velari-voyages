// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "4257b52e-7f92-43a7-93ae-a04a21c6943f",
    vesselId: "cs-the--mariner",
    type: "Live Music",
    location: {
      deck: 11,
      area: "Atrium",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "da61ea95-018e-484e-aeb6-b609536b4c98",
    vesselId: "cs-the--mariner",
    type: "Dancing",
    location: {
      deck: 5,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "d50a4959-11b1-4c18-9fb5-c9a603195d85",
    vesselId: "cs-the--mariner",
    type: "Karaoke",
    location: {
      deck: 7,
      area: "Observation Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "788ba3f5-bcbe-4e34-8afc-6f3cb69623d5",
    vesselId: "cs-the--mariner",
    type: "Magic Show",
    location: {
      deck: 7,
      area: "Observation Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
