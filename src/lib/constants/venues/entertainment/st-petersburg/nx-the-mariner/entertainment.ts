// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "cd93a42d-bb4b-4da3-aa96-c6067c74accd",
    vesselId: "nx-the--mariner",
    type: "Karaoke",
    location: {
      deck: 14,
      area: "Aft Lounge",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "04e0ad53-4ade-440f-a93b-22d22d25a7ab",
    vesselId: "nx-the--mariner",
    type: "Nightclub",
    location: {
      deck: 7,
      area: "Upper Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "c07a606e-9ea9-40b1-8e2b-89784763f34d",
    vesselId: "nx-the--mariner",
    type: "Comedy",
    location: {
      deck: 8,
      area: "Grand Ballroom",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "c88fa349-7531-43f1-acd0-fc31667eded7",
    vesselId: "nx-the--mariner",
    type: "Movie Theater",
    location: {
      deck: 11,
      area: "Sky Deck",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "74ef94bb-c98a-4635-8f47-7c3dcfdb2017",
    vesselId: "nx-the--mariner",
    type: "Dancing",
    location: {
      deck: 7,
      area: "Forward Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
