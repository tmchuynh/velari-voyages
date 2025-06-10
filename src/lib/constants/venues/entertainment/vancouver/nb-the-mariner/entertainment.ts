// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "4703f2e5-b9b0-4ed1-ae72-380163a5b1b5",
    vesselId: "nb-the--mariner",
    type: "Karaoke",
    location: {
      deck: 14,
      area: "Grand Ballroom",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "e93f9ae2-d0f8-46ad-9c19-39808b078d4c",
    vesselId: "nb-the--mariner",
    type: "Magic Show",
    location: {
      deck: 6,
      area: "Pool Deck",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "b07e1ed7-6161-4fe3-b71f-9fe637757613",
    vesselId: "nb-the--mariner",
    type: "Live Music",
    location: {
      deck: 14,
      area: "Central Court",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "37512a15-cfbf-4e56-b15e-6f60395b4da7",
    vesselId: "nb-the--mariner",
    type: "Dancing",
    location: {
      deck: 9,
      area: "Upper Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "3ec992e8-cb16-4260-9fcc-c437a52f3a14",
    vesselId: "nb-the--mariner",
    type: "Nightclub",
    location: {
      deck: 13,
      area: "Midship Theater",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "8cbeee8f-c2ea-4d79-b2ec-5de0481eea84",
    vesselId: "nb-the--mariner",
    type: "Game Show",
    location: {
      deck: 13,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
