// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "294000c0-fe85-42bc-babc-e111414257df",
    vesselId: "rms--explorer",
    type: "Karaoke",
    location: {
      deck: 14,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "f6619611-81e5-4a3f-86db-27fbbd8ffc3b",
    vesselId: "rms--explorer",
    type: "Game Show",
    location: {
      deck: 5,
      area: "Entertainment Plaza",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "1971690c-8c72-442b-ab6f-3ea2282abd47",
    vesselId: "rms--explorer",
    type: "Comedy",
    location: {
      deck: 7,
      area: "Central Court",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "81ff11ac-1c92-4ac5-a61e-88f1ba522277",
    vesselId: "rms--explorer",
    type: "Dancing",
    location: {
      deck: 10,
      area: "Forward Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "933aa83b-0a8e-458c-ae22-283af5de15a2",
    vesselId: "rms--explorer",
    type: "Nightclub",
    location: {
      deck: 13,
      area: "Sky Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
