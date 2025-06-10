// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "b0b7eead-dc7a-4d4f-9ab3-3676eb614368",
    vesselId: "ps-the--mariner",
    type: "Comedy",
    location: {
      deck: 15,
      area: "Forward Lounge",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "177266b9-0496-4d54-aa54-1bb4dd235d73",
    vesselId: "ps-the--mariner",
    type: "Nightclub",
    location: {
      deck: 10,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "b0b4b2e3-68b3-4224-b5c5-d55c64562d48",
    vesselId: "ps-the--mariner",
    type: "Movie Theater",
    location: {
      deck: 5,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "093657ae-0c27-48c0-a089-d41938151fcc",
    vesselId: "ps-the--mariner",
    type: "Game Show",
    location: {
      deck: 8,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "61a0d806-db3c-4d72-aeab-9f5c51d7c252",
    vesselId: "ps-the--mariner",
    type: "Live Music",
    location: {
      deck: 12,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "8f1e7a61-1b01-4243-bc4b-f856aaa713c4",
    vesselId: "ps-the--mariner",
    type: "Dancing",
    location: {
      deck: 15,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
