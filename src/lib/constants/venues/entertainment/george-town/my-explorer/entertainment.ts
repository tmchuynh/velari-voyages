// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "191f9134-0193-4219-b818-1309a41ff3a0",
    vesselId: "my--explorer",
    type: "Live Music",
    location: {
      deck: 5,
      area: "Sky Deck",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "dfe3841f-c260-49bf-8286-6c1a6c288b0c",
    vesselId: "my--explorer",
    type: "Nightclub",
    location: {
      deck: 8,
      area: "Observation Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "9c5c6c03-24bd-44c8-93e5-4114fce4652c",
    vesselId: "my--explorer",
    type: "Dancing",
    location: {
      deck: 14,
      area: "Observation Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "148a494d-d7a2-449f-a386-4334a3927088",
    vesselId: "my--explorer",
    type: "Karaoke",
    location: {
      deck: 5,
      area: "Central Court",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
