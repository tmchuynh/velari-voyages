// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "210badc9-a50f-4bbf-9b13-500b2cda8b3c",
    vesselId: "sy-new-york-city-voyager",
    type: "Karaoke",
    location: {
      deck: 8,
      area: "Atrium",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "946f96ab-df4c-4182-8723-d0f6652bac08",
    vesselId: "sy-new-york-city-voyager",
    type: "Dancing",
    location: {
      deck: 8,
      area: "Atrium",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "686f692e-8a53-464c-bcec-96a77dcbbcd2",
    vesselId: "sy-new-york-city-voyager",
    type: "Nightclub",
    location: {
      deck: 7,
      area: "Observation Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "0b10fa5f-e47e-4937-ba8d-2ccc11471b43",
    vesselId: "sy-new-york-city-voyager",
    type: "Game Show",
    location: {
      deck: 9,
      area: "Forward Lounge",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
