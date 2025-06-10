// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "7119ba43-6871-407b-9ad4-96a3507868c7",
    vesselId: "rms--explorer",
    type: "Live Music",
    location: {
      deck: 11,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "dc4b7662-33a8-488e-adf4-74df4303e2f6",
    vesselId: "rms--explorer",
    type: "Dancing",
    location: {
      deck: 9,
      area: "Sky Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "827ecc58-e9a0-49da-8e89-c29894ccb84e",
    vesselId: "rms--explorer",
    type: "Nightclub",
    location: {
      deck: 7,
      area: "Observation Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "fb0a9e06-734f-45ce-844b-a6275c36f126",
    vesselId: "rms--explorer",
    type: "Karaoke",
    location: {
      deck: 6,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
