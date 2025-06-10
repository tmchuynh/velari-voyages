// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "f26f8dc3-5798-4b1a-9aef-b01baa1a5e85",
    vesselId: "rv-the--mariner",
    type: "Game Show",
    location: {
      deck: 10,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "19e905d1-03a3-4ac9-8b35-409a00ff91b3",
    vesselId: "rv-the--mariner",
    type: "Dancing",
    location: {
      deck: 11,
      area: "Upper Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "8f04160d-0822-47bc-b240-ba03660940a3",
    vesselId: "rv-the--mariner",
    type: "Karaoke",
    location: {
      deck: 9,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "674b4bdc-c59a-4934-b66a-f45832f19a2d",
    vesselId: "rv-the--mariner",
    type: "Nightclub",
    location: {
      deck: 10,
      area: "Central Court",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "3e0b0006-0705-4811-bfd0-02b40763c2ae",
    vesselId: "rv-the--mariner",
    type: "Movie Theater",
    location: {
      deck: 10,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
