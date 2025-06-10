// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "cf00ec20-46c3-4e39-aca9-481d834869ba",
    vesselId: "ss--explorer",
    type: "Live Music",
    location: {
      deck: 7,
      area: "Central Court",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "e06ca76c-c17a-46c4-9f37-714164a1f372",
    vesselId: "ss--explorer",
    type: "Magic Show",
    location: {
      deck: 8,
      area: "Entertainment Plaza",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "2266f61a-5d18-41c0-8e88-96426fc2e251",
    vesselId: "ss--explorer",
    type: "Karaoke",
    location: {
      deck: 15,
      area: "Entertainment Plaza",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "d99d367a-c280-4a93-ab8e-867dbf69e772",
    vesselId: "ss--explorer",
    type: "Nightclub",
    location: {
      deck: 9,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "ea9835a7-f8f2-4c04-911b-7fb132d26fb1",
    vesselId: "ss--explorer",
    type: "Comedy",
    location: {
      deck: 11,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "5da12954-6f97-45f5-94c2-3fcfec8f6b32",
    vesselId: "ss--explorer",
    type: "Dancing",
    location: {
      deck: 15,
      area: "Sky Deck",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
