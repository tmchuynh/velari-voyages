// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "7b4c830b-6169-4044-8feb-a5435b3aaf01",
    vesselId: "rv-the--mariner",
    type: "Live Music",
    location: {
      deck: 12,
      area: "Entertainment Plaza",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "41588718-d6e9-41db-aad9-2a23ec1262b7",
    vesselId: "rv-the--mariner",
    type: "Dancing",
    location: {
      deck: 11,
      area: "Forward Lounge",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "e2fd3443-aee7-4e9b-ae44-6ff83e774101",
    vesselId: "rv-the--mariner",
    type: "Comedy",
    location: {
      deck: 5,
      area: "Sky Deck",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "6bc97527-0313-4b47-8fe2-b7fd14779f4a",
    vesselId: "rv-the--mariner",
    type: "Game Show",
    location: {
      deck: 8,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "4f414743-8b00-4280-b692-8853fa8dc1a3",
    vesselId: "rv-the--mariner",
    type: "Movie Theater",
    location: {
      deck: 11,
      area: "Midship Theater",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "2e9f41a6-813c-448c-ab04-fb9642f244c5",
    vesselId: "rv-the--mariner",
    type: "Karaoke",
    location: {
      deck: 5,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
