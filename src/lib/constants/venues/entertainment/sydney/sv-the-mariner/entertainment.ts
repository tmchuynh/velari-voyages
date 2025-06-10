// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "e5ded69d-3e78-4d64-b776-69069e1f19ed",
    vesselId: "sv-the--mariner",
    type: "Game Show",
    location: {
      deck: 5,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "122b6507-6840-4c20-9ce7-347a47ab4bc4",
    vesselId: "sv-the--mariner",
    type: "Live Music",
    location: {
      deck: 12,
      area: "Grand Ballroom",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "d402d5d0-e0b3-4589-b481-5d8c5c72e867",
    vesselId: "sv-the--mariner",
    type: "Nightclub",
    location: {
      deck: 5,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "d67a12ba-3dab-4ce6-a3b5-c290e354577a",
    vesselId: "sv-the--mariner",
    type: "Magic Show",
    location: {
      deck: 15,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "76a10517-3734-4752-a987-43627b1b8874",
    vesselId: "sv-the--mariner",
    type: "Dancing",
    location: {
      deck: 14,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "6fb2c717-7afa-4d85-b208-27d292189d12",
    vesselId: "sv-the--mariner",
    type: "Comedy",
    location: {
      deck: 10,
      area: "Sky Deck",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
