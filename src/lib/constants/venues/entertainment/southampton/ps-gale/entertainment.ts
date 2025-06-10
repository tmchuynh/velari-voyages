// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "151373f3-623d-43df-91ad-454eaec3d846",
    vesselId: "ps--gale",
    type: "Game Show",
    location: {
      deck: 14,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "f50d1ff4-8e37-4370-b424-852987c4b3e6",
    vesselId: "ps--gale",
    type: "Comedy",
    location: {
      deck: 11,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "aef0eb58-c6f6-4bff-9cc4-1c5a1c99a556",
    vesselId: "ps--gale",
    type: "Magic Show",
    location: {
      deck: 11,
      area: "Grand Ballroom",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "3ee963d5-eab2-4d02-be38-c308f2261827",
    vesselId: "ps--gale",
    type: "Dancing",
    location: {
      deck: 13,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "6131cf48-3102-43ce-a817-b1e628210268",
    vesselId: "ps--gale",
    type: "Karaoke",
    location: {
      deck: 11,
      area: "Observation Deck",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "04dd3ff2-c0c7-4ff2-8330-50033db17f41",
    vesselId: "ps--gale",
    type: "Live Music",
    location: {
      deck: 5,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
