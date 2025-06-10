// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "37e68226-4e35-4fc4-b7b6-15f605b1405d",
    vesselId: "ss-the--mariner",
    type: "Magic Show",
    location: {
      deck: 15,
      area: "Entertainment Plaza",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "7393c74a-f8e4-4f68-a2d2-1f06ebc0c42a",
    vesselId: "ss-the--mariner",
    type: "Nightclub",
    location: {
      deck: 11,
      area: "Sky Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "6a8f6562-e8db-45b7-a363-799b5eddad1f",
    vesselId: "ss-the--mariner",
    type: "Live Music",
    location: {
      deck: 10,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "6347f050-7377-4f96-a9fd-cb23af4c9e1f",
    vesselId: "ss-the--mariner",
    type: "Game Show",
    location: {
      deck: 12,
      area: "Midship Theater",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "041f8ac4-0fa7-4be6-9492-c0b040dd4d89",
    vesselId: "ss-the--mariner",
    type: "Movie Theater",
    location: {
      deck: 10,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
