// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "b234f47a-1d45-49c7-a4a4-da22178b340b",
    vesselId: "rms-the--mariner",
    type: "Game Show",
    location: {
      deck: 10,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "bf9a8ad9-d6dc-415d-8cb0-38cc09ecb08c",
    vesselId: "rms-the--mariner",
    type: "Comedy",
    location: {
      deck: 5,
      area: "Aft Lounge",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "dc18e433-d301-4290-8b45-e2907a0a02c9",
    vesselId: "rms-the--mariner",
    type: "Dancing",
    location: {
      deck: 9,
      area: "Sky Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "97bf56e5-d491-4040-9d1e-9b0b0edfb8cd",
    vesselId: "rms-the--mariner",
    type: "Nightclub",
    location: {
      deck: 5,
      area: "Midship Theater",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
