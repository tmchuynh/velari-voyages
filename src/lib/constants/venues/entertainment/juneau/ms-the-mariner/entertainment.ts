// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "a1f32e8d-183a-421c-9c76-1ab3c8be4d85",
    vesselId: "ms-the--mariner",
    type: "Karaoke",
    location: {
      deck: 6,
      area: "Sky Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "09d20eac-570e-4086-87e0-393fb8ee93a5",
    vesselId: "ms-the--mariner",
    type: "Movie Theater",
    location: {
      deck: 14,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "4e861672-e550-4ea3-a2c8-10652a5438ca",
    vesselId: "ms-the--mariner",
    type: "Magic Show",
    location: {
      deck: 12,
      area: "Forward Lounge",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "0a101b99-0157-4be4-a9d6-b5827e38c427",
    vesselId: "ms-the--mariner",
    type: "Game Show",
    location: {
      deck: 6,
      area: "Atrium",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "46d39d8f-983a-4c52-86fc-73524a8eaa72",
    vesselId: "ms-the--mariner",
    type: "Comedy",
    location: {
      deck: 6,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "ae08c01d-0fb4-4003-83e1-a837c857d39b",
    vesselId: "ms-the--mariner",
    type: "Dancing",
    location: {
      deck: 9,
      area: "Sky Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  }
];
