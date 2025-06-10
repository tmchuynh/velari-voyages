// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "f793cafc-b1dc-4e5a-b330-6a3bed207ec6",
    vesselId: "nb-the--mariner",
    type: "Game Show",
    location: {
      deck: 9,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "2985dbf9-5f42-49a4-9c2c-7f94afcd7c07",
    vesselId: "nb-the--mariner",
    type: "Magic Show",
    location: {
      deck: 8,
      area: "Forward Lounge",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "a9835fd6-e124-4fc0-8835-9b1b8abab368",
    vesselId: "nb-the--mariner",
    type: "Karaoke",
    location: {
      deck: 5,
      area: "Forward Lounge",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "47db469c-ae32-4821-afa4-95dc429ab728",
    vesselId: "nb-the--mariner",
    type: "Comedy",
    location: {
      deck: 12,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "375b9725-40a0-48af-970e-1cb9814e0ca7",
    vesselId: "nb-the--mariner",
    type: "Dancing",
    location: {
      deck: 13,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
