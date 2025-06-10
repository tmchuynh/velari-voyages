// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "eaeb724a-22de-4695-8420-070abf246ad4",
    vesselId: "sv-the--mariner",
    type: "Game Show",
    location: {
      deck: 15,
      area: "Forward Lounge",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "c648cb41-72ae-4a43-81a2-8507f39c4f41",
    vesselId: "sv-the--mariner",
    type: "Nightclub",
    location: {
      deck: 5,
      area: "Upper Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "66b38076-be39-4749-8c83-410d3b70bbdf",
    vesselId: "sv-the--mariner",
    type: "Karaoke",
    location: {
      deck: 14,
      area: "Pool Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "3006e5b1-bbdd-4293-a209-62edf97c2f89",
    vesselId: "sv-the--mariner",
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
    id: "2ce91671-3aac-4c7d-9bb1-693ae4439599",
    vesselId: "sv-the--mariner",
    type: "Dancing",
    location: {
      deck: 8,
      area: "Entertainment Plaza",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "c22e0915-ebd1-472c-b797-0bba0c13b26c",
    vesselId: "sv-the--mariner",
    type: "Movie Theater",
    location: {
      deck: 13,
      area: "Observation Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
