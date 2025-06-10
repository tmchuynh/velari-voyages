// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "0519c201-2269-4a4d-862e-81afd59e3c43",
    vesselId: "rv-the--mariner",
    type: "Movie Theater",
    location: {
      deck: 13,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "f2c47ad7-cf36-4c3f-a96b-05cad54ed91b",
    vesselId: "rv-the--mariner",
    type: "Game Show",
    location: {
      deck: 5,
      area: "Sky Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "27a51a39-5ec9-40f5-b502-839cfc7a00af",
    vesselId: "rv-the--mariner",
    type: "Dancing",
    location: {
      deck: 9,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "0d293078-f14a-40dc-a566-8fef417606e8",
    vesselId: "rv-the--mariner",
    type: "Nightclub",
    location: {
      deck: 15,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: false,
  }
];
